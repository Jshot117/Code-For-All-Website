import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Container } from "react-bootstrap";
import { AnimatePresence, motion } from "framer-motion";
import Header from "../HomeComponents/Header";
import LottieAnimation from "../HomeComponents/LottieAnimation";
import Social from "../HomeComponents/Social";
import "./Leaderboard.css";
import { SiLeetcode, SiDiscord } from "react-icons/si";
import { FaSearch } from "react-icons/fa";

import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Button,
  Box,
} from "@chakra-ui/react";

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [typingTimeout, setTypingTimeout] = useState(null);
  const [showCard, setShowCard] = useState(false);
  const [userDiscordName, setDiscordName] = useState(null);
  const [userLeetcodeName, setLeetcodeName] = useState(null);
  const [userAvatarURL, setAvatarURL] = useState("");
  const [userGlobalRanking, setGlobalRanking] = useState("");
  const [userLocalRanking, setLocalRanking] = useState("");

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
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
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
          } catch (error) {
            console.error("Error fetching user data:", error);
          }

          setShowCard(true);
          document.body.style.overflow = "hidden";
        } else {
          setShowCard(false);
          document.body.style.overflow = "auto";
        }
      }, 1000)
    );
  };

  const handleCloseCard = () => {
    setShowCard(false);
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
          {/* Podium */}
          <motion.div
            className="podium-container"
            initial="hidden"
            animate="visible"
          >
            {/* Third place */}
            {topThree[2] && (
              <motion.div
                className={`podium podium-third`}
                variants={podiumVariants(0)}
              >
                <span className="rank-number">3</span>
                <span className="username-hover" style={{ top: "-80px" }}>
                  {topThree[2].discord_username}
                </span>
                <span
                  className="username-hover"
                  style={{ fontSize: "1.25rem" }}
                >
                  {topThree[2].username}
                </span>
                <span className="points">{topThree[2].points} points</span>
              </motion.div>
            )}

            {/* Second place */}
            {topThree[1] && (
              <motion.div
                className={`podium podium-second`}
                variants={podiumVariants(0.5)}
              >
                <span className="rank-number">2</span>
                <span
                  className="username-hover"
                  style={{ fontSize: "1.25rem" }}
                >
                  {topThree[1].username}
                </span>
                <span className="username-hover" style={{ top: "-80px" }}>
                  {topThree[1].discord_username}
                </span>
                <span className="points">{topThree[1].points} points</span>
              </motion.div>
            )}

            {/* First place */}
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
                <span
                  className="username-hover"
                  style={{ fontSize: "1.25rem" }}
                >
                  {topThree[0].username}
                </span>
                <span className="points">{topThree[0].points} points</span>
              </motion.div>
            )}
          </motion.div>

          {/* Search bar */}
          <div className="input-container">
            <input
              type="text"
              placeholder="Search for a Discord/Leetcode username..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="search-input"
            />
            <FaSearch
              className="search-icon"
              onClick={() => {
                if (searchQuery.trim() !== "") {
                  setTypingTimeout(
                    setTimeout(async () => {
                      let response = null;
                      try {
                        response = await axios.get(
                          `https://server.rakibshahid.com/api/discord_lookup`,
                          {
                            headers: {
                              "discord-username": searchQuery,
                            },
                            validateStatus: false,
                          }
                        );
                        if (response.status === 404) {
                          response = await axios.get(
                            `https://server.rakibshahid.com/api/leetcode_lookup`,
                            {
                              headers: {
                                "leetcode-username": searchQuery,
                              },
                              validateStatus: false,
                            }
                          );
                        }
                        setDiscordName(response.data.discord_username);
                        setLeetcodeName(response.data.leetcode_username);
                        setAvatarURL(response.data.avatar);
                        setGlobalRanking(response.data.ranking);
                        setLocalRanking(response.data.local_ranking);
                      } catch (error) {
                        console.error("Error fetching user data:", error);
                      }
                      setShowCard(true);
                      document.body.style.overflow = "hidden";
                    })
                  );
                }
              }}
            />
          </div>

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
                  <Card>
                    <CardBody>
                      <Image
                        style={{
                          margin: "auto",
                        }}
                        src={
                          userAvatarURL
                            ? userAvatarURL
                            : "https://media1.tenor.com/m/lxJgp-a8MrgAAAAd/laeppa-vika-half-life-alyx.gif"
                        }
                        alt={`${userDiscordName}'s avatar`}
                        borderRadius="lg"
                      />
                      <Stack mt="6" spacing="3">
                        <Heading
                          style={{
                            margin: "auto",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                          size="md"
                        >
                          <SiDiscord style={{ marginRight: "8px" }} />
                          {userDiscordName
                            ? userDiscordName
                            : "Username not found"}
                        </Heading>

                        <Heading
                          style={{
                            margin: "auto",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                          size="md"
                        >
                          <SiLeetcode style={{ marginRight: "8px" }} />
                          {userLeetcodeName
                            ? userLeetcodeName
                            : "Username not found"}
                        </Heading>

                        <Text
                          style={{
                            margin: "auto",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <b style={{ marginRight: "8px" }}>Global Ranking:</b>{" "}
                          {userGlobalRanking
                            ? userGlobalRanking.toLocaleString()
                            : "N/A"}
                        </Text>

                        <Text
                          style={{
                            margin: "auto",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <b style={{ marginRight: "8px" }}>Local Ranking:</b>{" "}
                          {userLocalRanking
                            ? userLocalRanking.toLocaleString()
                            : "N/A"}
                        </Text>
                      </Stack>
                    </CardBody>
                  </Card>
                </motion.div>
              </>
            )}
          </AnimatePresence>

          <motion.div initial="hidden" animate="visible">
            <Table
              striped
              bordered
              hover
              className="leaderboard-table-container"
            >
              <thead>
                <tr className="table-header">
                  <th>Rank</th>
                  <th>Discord Username</th>
                  <th>Leetcode Username</th>
                  <th>Points</th>
                </tr>
              </thead>
              <tbody>
                {rest.slice(0, 10).map((user, index) => (
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
