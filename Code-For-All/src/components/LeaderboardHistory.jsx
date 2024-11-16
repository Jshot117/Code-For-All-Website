import React from "react";
import { Table, Container } from "react-bootstrap";
import { motion } from "framer-motion";
import "./LeaderboardTable.css";

const LeaderboardHistory = ({ data, currentPage, onPageChange }) => {
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const itemsPerPage = 10;
  const startIndex = currentPage * itemsPerPage;

  const paginatedData = data.slice(startIndex, startIndex + itemsPerPage);

  return (
    <Container>
      <motion.div initial="hidden" animate="visible" variants={fadeInVariants}>
        <Table className="leaderboard-table-container">
          <thead>
            <tr className="table-header">
              <th>Rank</th>
              <th>Discord Username</th>
              <th>Leetcode Username</th>
              <th>Total Wins</th>
              <th>Total Points</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((user, index) => (
              <tr key={index} className="table-row">
                <td className="table-cell">{startIndex + index + 1}</td>
                <td className="table-cell">{user.discord_username}</td>
                <td className="table-cell">{user.leetcode_username}</td>
                <td className="table-cell">{user.total_wins}</td>
                <td className="table-cell">{user.total_points}</td>
              </tr>
            ))}
          </tbody>
        </Table>

        <div
          className="d-flex justify-content-center gap-3 mt-4"
          style={{ display: "flex" }}
        >
          <button
            className="btn btn-primary"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 0}
            style={{
              backgroundColor: currentPage === 0 ? "#a9a9a9" : "#8F249D",
              color: currentPage === 0 ? "#6b6b6b" : "#FFFFFF",
              border: "none",
              padding: "8px 16px",
              borderRadius: "20px",
              fontWeight: "bold",
              opacity: currentPage === 0 ? 0.6 : 1,
              cursor: currentPage === 0 ? "not-allowed" : "pointer",
              marginLeft: "auto",
            }}
          >
            Previous
          </button>
          <button
            className="btn btn-primary"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={startIndex + itemsPerPage >= data.length}
            style={{
              backgroundColor:
                startIndex + itemsPerPage >= data.length
                  ? "#a9a9a9"
                  : "#8F249D",
              color:
                startIndex + itemsPerPage >= data.length
                  ? "#6b6b6b"
                  : "#FFFFFF",
              border: "none",
              padding: "8px 16px",
              borderRadius: "20px",
              fontWeight: "bold",
              marginRight: "auto",
              opacity: startIndex + itemsPerPage >= data.length ? 0.6 : 1,
              cursor:
                startIndex + itemsPerPage >= data.length
                  ? "not-allowed"
                  : "pointer",
            }}
          >
            Next
          </button>
        </div>
      </motion.div>
    </Container>
  );
};

export default LeaderboardHistory;
