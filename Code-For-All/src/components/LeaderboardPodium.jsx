import React from "react";
import { motion } from "framer-motion";
import "./LeaderboardPodium.css";

const LeaderboardPodium = ({ topThree }) => {
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
    <motion.div className="podium-container" initial="hidden" animate="visible">
      {/* Third place */}
      {topThree[2] && (
        <motion.div
          className={`podium podium-third`}
          variants={podiumVariants(0)}
        >
          <span className="rank-number">3</span>
          <span className="username-hover" style={{ top: "-4rem" }}>
            {topThree[2].discord_username}
          </span>
          <span className="username-hover">{topThree[2].username}</span>
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
          <span className="username-hover">{topThree[1].username}</span>
          <span className="username-hover" style={{ top: "-4rem" }}>
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
              top: "-8rem",
              fontSize: "3rem",
            }}
            animate={crownHoverAnimation}
          >
            👑
          </motion.span>
          <span className="rank-number">1</span>
          <span className="username-hover" style={{ top: "-4rem" }}>
            {topThree[0].discord_username}
          </span>
          <span className="username-hover">{topThree[0].username}</span>
          <span className="points">{topThree[0].points} points</span>
        </motion.div>
      )}
    </motion.div>
  );
};

export default LeaderboardPodium;
