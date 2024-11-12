import React from "react";
import { Card, CardBody, Image, Stack, Heading, Text } from "@chakra-ui/react";
import { SiDiscord, SiLeetcode } from "react-icons/si";

const UserCard = ({
  discordUsername,
  leetcodeUsername,
  avatarUrl,
  globalRanking,
  localRanking,
  wins,
}) => {
  return (
    <Card>
      <CardBody>
        <Image
          style={{
            margin: "auto",
          }}
          src={
            avatarUrl
              ? avatarUrl
              : "https://media1.tenor.com/m/lxJgp-a8MrgAAAAd/laeppa-vika-half-life-alyx.gif"
          }
          alt={`${discordUsername}'s avatar`}
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
            {discordUsername ? discordUsername : "Username not found"}
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
            {leetcodeUsername ? (
              <a
                className="text-violet-500 underline"
                href={`https://leetcode.com/u/${leetcodeUsername}`}
              >
                {leetcodeUsername}
              </a>
            ) : (
              "Username not found"
            )}
          </Heading>

          <Text
            style={{
              margin: "auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <b style={{ marginRight: "8px" }}>🌍 Global Ranking:</b>{" "}
            {globalRanking ? globalRanking.toLocaleString() : "N/A"}
          </Text>

          <Text
            style={{
              margin: "auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <b style={{ marginRight: "8px" }}>📈 Local Ranking:</b>{" "}
            {localRanking ? localRanking.toLocaleString() : "N/A"}
          </Text>

          <Text
            style={{
              margin: "auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <b style={{ marginRight: "8px" }}>🏆 Wins:</b>{" "}
            {wins >= 0 ? wins.toLocaleString() : "N/A"}
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default UserCard;
