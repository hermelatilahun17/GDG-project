import React from "react";

const MemberCard = ({ name, role, photo, bio }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "10px",
        width: "200px",
        textAlign: "center",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
      }}
    >
      <img src={photo} alt={name} style={{ width: "100%", borderRadius: "8px" }} />
      <h3>{name}</h3>
      <p><strong>{role}</strong></p>
      <p>{bio}</p>
    </div>
  );
};

export default MemberCard;
