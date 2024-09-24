import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Container } from "react-bootstrap";
import { motion } from "framer-motion";
import Header from "../HomeComponents/Header";
import LottieAnimation from "../HomeComponents/LottieAnimation";
import Social from "../HomeComponents/Social";
import "./Leaderboard.css";

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response = await axios.get("https://server.rakibshahid.com/leaderboard");
        setLeaderboard(response.data);
      } catch (error) {
        console.error("Error fetching leaderboard data:", error);
      }
    };

    fetchLeaderboard();
  }, []);

  const topThree = leaderboard.slice(0, 3);
  const rest = leaderboard.slice(3);

  const podiumVariants = (delay) => ({
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: delay },
    },
  });

  
  const crownHoverAnimation = {
    y: [0, -10, 0], 
    transition: {
      y: {
        duration: 3, 
        repeat: Infinity,
        repeatType: "loop",
      },
    },
  };

  return (
    <div className="leaderboard-container">
      <div className="content-container">
        <div>
          <LottieAnimation onClick={() => {}} />
        </div>
        <Header />
        <Container style={{ margin: "0 auto" }}>
          <h1
            className="text-center my-4"
            style={{
              fontSize: "4rem",
              color: "#D1A5FD",
              fontWeight: "bold",
              paddingBottom: "120px",
            }}
          >
            Leetcode Leaderboard
          </h1>

          {/* podium */}
          <motion.div
            className="podium-container"
            initial="hidden"
            animate="visible"
          >
            {/* third place */}
            {topThree[2] && (
              <motion.div
                className={`podium podium-third`}
                variants={podiumVariants(0)}
              >
                <span className="rank-number">3</span>
                <span className="username-hover" style={{ top: "-80px" }}>
                  {topThree[2].discord_username}
                </span>
                <span className="username-hover" style={{fontSize:"1.25rem"}}>{topThree[2].username}</span>
                <span className="points">{topThree[2].points} points</span>
              </motion.div>
            )}

            {/* second place */}
            {topThree[1] && (
              <motion.div
                className={`podium podium-second`}
                variants={podiumVariants(0.5)}
              >
                <span className="rank-number">2</span>
                <span className="username-hover" style={{fontSize:"1.25rem"}}>{topThree[1].username}</span>
                <span className="username-hover" style={{ top: "-80px" }}>
                  {topThree[1].discord_username}
                </span>
                <span className="points">{topThree[1].points} points</span>
              </motion.div>
            )}

            {/* first place */}
            {topThree[0] && (
              <motion.div
                className={`podium podium-first`}
                variants={podiumVariants(1)}
              >
                <motion.span
                  className="crown-icon"
                  style={{
                    position: "absolute",
                    top: "-135px",
                    fontSize: "3rem",
                  }}
                  animate={crownHoverAnimation}
                >
                  👑
                </motion.span>
                <span className="rank-number">1</span>
                <span className="username-hover" style={{ top: "-80px" }}>
                  {topThree[0].discord_username}
                </span>
                <span className="username-hover" style={{fontSize:"1.25rem"}}>{topThree[0].username}</span>
                <span className="points">{topThree[0].points} points</span>
              </motion.div>
            )}
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
          >
          <Table striped bordered hover className="leaderboard-table-container">
            <thead>
              <tr className="table-header">
                <th>Rank</th>
                <th>Discord Username</th>
                <th>Leetcode Username</th>
                <th>Points</th>
              </tr>
            </thead>
            <tbody>
              {rest.slice(0, 7).map((user, index) => (
                <tr key={index} className="table-row">
                  <td className="table-cell">{index + 4}</td>
                  <td className="table-cell">{user.discord_username}</td>
                  <td className="table-cell">{user.username}</td>
                  <td className="table-cell">{user.points}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          </motion.div>
        </Container>
        
      </div>
      <div className="social-container">
        <Social />
      </div>
    </div>
  );
};

export default Leaderboard;
