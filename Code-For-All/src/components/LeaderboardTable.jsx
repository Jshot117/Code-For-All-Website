import React from "react";
import { Table, Container } from "react-bootstrap";
import { motion } from "framer-motion";
import "./LeaderboardTable.css";

const LeaderboardTable = ({ data }) => {
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <Container className="">
      <motion.div initial="hidden" animate="visible" variants={fadeInVariants}>
        <Table className="leaderboard-table-container">
          <thead>
            <tr className="table-header">
              <th>Rank</th>
              <th>Discord Username</th>
              <th>Leetcode Username</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {data.slice(0, 10).map((user, index) => (
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
  );
};

export default LeaderboardTable;
