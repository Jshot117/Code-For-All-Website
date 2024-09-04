import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Button, Alert, Card } from "react-bootstrap";
import { useUser } from "../UserContext"; // import useUser hook
import { SiPython, SiJavascript, SiCplusplus } from "react-icons/si";
import { FaJava } from "react-icons/fa";

const UserLookup = () => {
  const { user } = useUser();
  const [username, setUsername] = useState(user.global_name || ""); // Default to logged-in user's Discord username
  const [message, setMessage] = useState("");
  const [ac, setAC] = useState(null);
  const [stats, setStats] = useState(null); // State to hold LeetCode stats

  // Fetch LeetCode stats based on Discord username
  const fetchDiscordStats = async (discordUsername) => {
    try {
      const response = await axios.get(
        "https://108.30.159.119:5000/api/discord_lookup",
        {
          headers: {
            "discord-username": discordUsername, // Send Discord username in the header
          },
        }
      );
      setStats(response.data);
      //   console.log(response.data);
      //   console.log("LeetCode stats from Discord lookup:", response.data);
    } catch (error) {
      //   console.error(
      //     "Error fetching LeetCode stats from Discord lookup:",
      //     error
      //   );
      // Clear stats if Discord lookup fails
      //   setStats(null);
      //   return -1;
      fetchLeetCodeStats(discordUsername);
      //   setMessage("Failed to fetch LeetCode stats from Discord lookup");
    }
  };

  // Fetch LeetCode stats based on LeetCode username
  const fetchLeetCodeStats = async (leetCodeUsername) => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/leetcode_lookup",
        {
          headers: {
            "leetcode-username": leetCodeUsername,
          },
        }
      );
      //   check if response is an empty json
      if (Object.keys(response.data).length === 0) {
        setMessage("No LeetCode stats available for user: " + leetCodeUsername);
        return;
      }
      setStats(response.data);
      //   console.log("LeetCode stats from LeetCode lookup:", response.data);
    } catch (error) {
      console.error(
        "Error fetching LeetCode stats from LeetCode lookup:",
        error
      );
      setMessage("Error fetching LeetCode stats");
    }
  };

  const fetchLeetcodeAC = async (leetCodeUsername) => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/leetcode_ac",
        {
          headers: {
            "leetcode-username": leetCodeUsername,
          },
        }
      );
      setAC(response.data);

      //   console.log("LeetCode AC from LeetCode lookup:", response.data);
      //   console.log("AC", ac.submission);
      return true;
    } catch (error) {
      console.error("Error fetching LeetCode AC from LeetCode lookup:", error);
    }
  };

  useEffect(() => {
    // Fetch stats for the logged-in user when the component mounts
    fetchDiscordStats(user.global_name);
  }, [user.global_name]);

  useEffect(() => {
    if (stats && stats.leetcode_username) {
      fetchLeetcodeAC(stats.leetcode_username);
    }
  }, [stats]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setStats(null);
    setAC(null); // Clear AC data on new search

    // Try Discord lookup first
    try {
      await fetchDiscordStats(username);
    } catch (error) {
      // If Discord lookup fails, try LeetCode lookup
      await fetchLeetCodeStats(username);
    }
    // console.log("local ranking", stats.local_ranking);
  };

  return (
    <div className="container">
      <h1 className="text-center my-4">User Lookup</h1>
      <Form
        onSubmit={handleSubmit}
        className="text-center"
        style={{ width: "50%", margin: "0 auto", paddingBottom: "20px" }}
      >
        <Form.Group controlId="formBasicUsername">
          <Form.Label>Enter LeetCode/Discord Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" style={{ marginTop: "10px" }}>
          Lookup
        </Button>
        {message && (
          <Alert variant="info" className="mt-3">
            {message}
          </Alert>
        )}
      </Form>
      {stats ? (
        <div className="text-center mt-4">
          <Card
            style={{
              transition: "ease-in",
              transitionDuration: "0.3s",
              width: "18rem",
              margin: "0 auto",
            }}
          >
            <Card.Img variant="top" src={stats.avatar} />
            <Card.Body>
              <Card.Title>{stats.leetcode_username}</Card.Title>
              <Card.Text style={{ color: "black" }}>
                <strong>Leetcode Ranking:</strong>{" "}
                <>
                  {stats.ranking != null
                    ? stats.ranking
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    : "N/A"}
                  <br />
                  {stats.local_ranking === -1 ? (
                    <p style={{ color: "red" }}>
                      Not registered to leaderboard
                    </p>
                  ) : (
                    <>
                      <strong>Local Ranking: </strong>
                      {stats.local_ranking == 1
                        ? stats.local_ranking + "👑"
                        : stats.local_ranking}
                    </>
                  )}
                </>
              </Card.Text>
            </Card.Body>
          </Card>
          {ac && ac.submission.length > 0 ? (
            <div>
              <h3 className="mt-4">5 Latest Accepted Submissions</h3>
              <table
                className="table table-striped mt-4"
                style={{ width: "50%", align: "center", margin: "0 auto" }}
              >
                <thead>
                  <tr>
                    <th>Problem</th>
                    <th>Timestamp</th>
                    <th>Language</th>
                  </tr>
                </thead>
                <tbody>
                  {ac.submission.slice(0, 5).map((submission, index) => (
                    <tr key={index}>
                      <td>{submission.title}</td>
                      <td>
                        {new Date(submission.timestamp * 1000).toLocaleString()}
                      </td>
                      <td>
                        {submission.lang.toLowerCase().includes("python") ? (
                          <SiPython />
                        ) : submission.lang
                            .toLowerCase()
                            .includes("javascript") ? (
                          <SiJavascript />
                        ) : submission.lang.toLowerCase().includes("java") ? (
                          <FaJava />
                        ) : submission.lang.toLowerCase().includes("cpp") ||
                          submission.lang.toLowerCase().includes("c++") ? (
                          <SiCplusplus />
                        ) : (
                          submission.lang
                        )}
                      </td>
                    </tr>
                  ))}
                  <tr key="0"></tr>
                </tbody>
              </table>
            </div>
          ) : (
            <p>No accepted submissions available.</p>
          )}
        </div>
      ) : (
        <div className="text-center mt-4">
          <p>No LeetCode stats available.</p>
        </div>
      )}
    </div>
  );
};

export default UserLookup;
