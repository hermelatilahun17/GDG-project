import React from "react";
import MemberCard from "./MemberCard";
import teamMembers from "../data/teamData";

const Team = () => {
  return (
    <section
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "20px",
        marginTop: "20px"
      }}
    >
      {teamMembers.map(member => (
        <MemberCard
          key={member.id}
          name={member.name}
          role={member.role}
          photo={member.photo}
          bio={member.bio}
        />
      ))}
    </section>
  );
};

export default Team;
