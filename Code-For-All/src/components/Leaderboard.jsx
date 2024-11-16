import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import { AnimatePresence, motion } from "framer-motion";
import Header from "../HomeComponents/Header";
import LottieAnimation from "../HomeComponents/LottieAnimation";
import Social from "../HomeComponents/Social";
import "./Leaderboard.css";
import LeaderboardPodium from "./LeaderboardPodium";
import LeaderboardTable from "./LeaderboardTable";
import LeaderboardHistory from "./LeaderboardHistory";
import SearchBar from "./SearchBar";
import UserCard from "./UserCard";

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [typingTimeout, setTypingTimeout] = useState(null);
  const [showCard, setShowCard] = useState(false);
  const [inputDisabled, setInputDisabled] = useState(false);
  const [userDiscordName, setDiscordName] = useState(null);
  const [userLeetcodeName, setLeetcodeName] = useState(null);
  const [userAvatarURL, setAvatarURL] = useState("");
  const [userGlobalRanking, setGlobalRanking] = useState("");
  const [userLocalRanking, setLocalRanking] = useState("");
  const [userWins, setWins] = useState(0);
  const [showHistory, setShowHistory] = useState(false);
  const [leaderboardHistory, setLeaderboardHistory] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [historyPage, setHistoryPage] = useState(0);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response = await axios.get(
          "https://server.rakibshahid.com/leaderboard"
        );
        setLeaderboard(response.data);
      } catch (error) {
        console.error("Error fetching leaderboard data:", error);
      }
    };
    fetchLeaderboard();

    const fetchData = async () => {
      try {
        const [leaderboardResponse, historyResponse] = await Promise.all([
          axios.get("https://server.rakibshahid.com/leaderboard"),
          axios.get(
            "https://server.rakibshahid.com/leaderboard/leaderboard_history"
          ),
        ]);

        setLeaderboard(leaderboardResponse.data);
        setLeaderboardHistory(historyResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();

    const handleKeyDown = (event) => {
      if (
        event.key === "Escape" ||
        event.key === "Enter" ||
        event.key === " "
      ) {
        setShowCard(false);
        setInputDisabled(false);
        document.body.style.overflow = "auto";
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const toggleView = () => {
    setShowHistory(!showHistory);
  };

  const topThree = leaderboard.slice(0, 3);
  const rest = leaderboard.slice(3);

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  };

  const handlePageChange = (newPage) => {
    if (showHistory) {
      setHistoryPage(newPage);
    } else {
      setCurrentPage(newPage);
    }
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);

    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    setTypingTimeout(
      setTimeout(async () => {
        let response = null;
        if (value !== "") {
          try {
            response = await axios.get(
              `https://server.rakibshahid.com/api/discord_lookup`,
              {
                headers: {
                  "discord-username": value,
                },
                validateStatus: false,
              }
            );
            if (response.status === 404) {
              response = await axios.get(
                `https://server.rakibshahid.com/api/leetcode_lookup`,
                {
                  headers: {
                    "leetcode-username": value,
                  },
                  validateStatus: false,
                }
              );
              console.log("LC User data:", response.data);
            } else {
              console.log("DC User data:", response.data);
            }
            setDiscordName(response.data.discord_username);
            setLeetcodeName(response.data.leetcode_username);
            setAvatarURL(response.data.avatar);
            setGlobalRanking(response.data.ranking);
            setLocalRanking(response.data.local_ranking);
            setWins(response.data.wins);
          } catch (error) {
            console.error("Error fetching user data:", error);
          }

          setShowCard(true);
          setInputDisabled(true);
          document.body.style.overflow = "hidden";
        } else {
          setShowCard(false);
          setInputDisabled(false);
          document.body.style.overflow = "auto";
        }
      }, 2000)
    );
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
            className="text-center my-4 title-container"
            style={{
              paddingBottom: showHistory ? "0px" : "120px",
            }}
          >
            {showHistory ? "All-Time Leaderboard" : "Leetcode Leaderboard"}
          </h1>
          {!showHistory && <LeaderboardPodium topThree={topThree} />}

          <div
            className="d-flex justify-content-center mb-4 mt-4 "
            style={{ display: "flex" }}
          >
            <button
              className="btn btn-primary text-white"
              style={{
                backgroundColor: "#c938ff",
                border: "none",
                padding: "10px 20px",
                borderRadius: "20px",
                fontWeight: "bold",
                transition: "background-color 0.3s ease",
                margin: "auto",
              }}
              onClick={toggleView}
            >
              {showHistory ? "Show Current Rankings" : "Show All-Time Stats"}
            </button>
          </div>

          {!showHistory && (
            <SearchBar
              searchQuery={searchQuery}
              handleSearchChange={handleSearchChange}
              inputDisabled={inputDisabled}
            />
          )}

          <AnimatePresence>
            {showCard && (
              <>
                <motion.div
                  className="grey-background"
                  variants={fadeInVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                    zIndex: 999,
                  }}
                  onClick={() => {
                    setShowCard(false);
                    setInputDisabled(false);
                    document.body.style.overflow = "auto";
                  }}
                />

                <motion.div
                  className="card-container"
                  variants={fadeInVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  style={{
                    position: "fixed",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 1000,
                    width: "300px",
                  }}
                >
                  <UserCard
                    discordUsername={userDiscordName}
                    leetcodeUsername={userLeetcodeName}
                    avatarUrl={userAvatarURL}
                    globalRanking={userGlobalRanking}
                    localRanking={userLocalRanking}
                    wins={userWins}
                  />
                </motion.div>
              </>
            )}
          </AnimatePresence>

          {showHistory ? (
            <LeaderboardHistory
              data={leaderboardHistory}
              currentPage={historyPage}
              onPageChange={handlePageChange}
            />
          ) : (
            <LeaderboardTable
              data={rest}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          )}
        </Container>
      </div>
      <div className="social-container">
        <Social />
      </div>
    </div>
  );
};

export default Leaderboard;
