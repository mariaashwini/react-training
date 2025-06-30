import { useState } from "react";
import SetFilterStatus from "./SetFilterStatus.js";
import TeamMember from "./TeamMember.js";

export default function TeamList({ data }) {
  const [teamInfo, setTeamInfo] = useState(data);
  const [filter, setFilter] = useState("all");

  const filteredUsers =
    filter == "all"
      ? teamInfo
      : teamInfo.filter((member) => member.status === filter);
  return (
    <>
      <SetFilterStatus
        teamInfo={teamInfo}
        setTeamInfo={setTeamInfo}
        currentFilter={filter}
        setFilter={setFilter}
      />
      <div className="grid-layout">
        {filteredUsers.map((member, index) => (
          <TeamMember
            key={index}
            avatar={member.avatar}
            name={member.name}
            role={member.role}
            email={member.email}
            phone={member.phone}
            location={member.location}
            joinedDate={member.joinedDate}
            project={member.project}
            skills={member.skills}
            status={member.status}
          />
        ))}
      </div>
    </>
  );
}
