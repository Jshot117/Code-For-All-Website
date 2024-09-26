import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Container } from "react-bootstrap";
import { AnimatePresence, motion } from "framer-motion";
import Header from "../HomeComponents/Header";
import LottieAnimation from "../HomeComponents/LottieAnimation";
import Social from "../HomeComponents/Social";
import "./Leaderboard.css";
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
  const [userName, setUserName] = useState(null);
  const [userAvatarURL, setLoading] = useState(false);
  const [userGlobalRanking, setError] = useState("");
  const [userLocalRanking, setUserLocalRanking] = useState("");

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

  // Handle search input with a delay (debounce)
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
          } catch (error) {
            console.error("Error fetching user data:", error);
          }

          setShowCard(true); // Show the card when user is done typing
          document.body.style.overflow = "hidden"; // Disable scrolling when the card is active
        } else {
          setShowCard(false);
          document.body.style.overflow = "auto"; // Re-enable scrolling
        }
      }, 1000)
    );
  };

  // Handle clicking outside the card or clearing the input to hide the card
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
              placeholder="Search for a user..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="search-input"
            />
            <FaSearch className="search-icon" />
          </div>

          {/* Card with grey background */}
          <AnimatePresence>
            {showCard && (
              <>
                {/* Grey background with fade-in */}
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
                    document.body.style.overflow = "auto"; // Re-enable scrolling when card closes
                  }}
                />

                {/* Card with fade-in */}
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
                        src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                        alt="Green double couch with wooden legs"
                        borderRadius="lg"
                      />
                      <Stack mt="6" spacing="3">
                        <Heading size="md">{searchQuery}</Heading>
                        <Text>
                          This sofa is perfect for modern tropical spaces,
                          baroque-inspired spaces, earthy toned spaces, and for
                          people who love a chic design with a sprinkle of
                          vintage.
                        </Text>
                        <Text color="blue.600" fontSize="2xl">
                          $450
                        </Text>
                      </Stack>
                    </CardBody>
                  </Card>
                </motion.div>
              </>
            )}
          </AnimatePresence>

          {/* Leaderboard content */}
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
