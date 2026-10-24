import React, { useState } from "react";
import Avatar from "./Avatar";
import { IoMdClose } from "react-icons/io";

const fakeMembers = [
  {
    id: 1,
    project_id: 1,
    name: "Chưa giao",
    user_id: null,
    role: null,
    initials: "?",
    color: "#A8ABB5",
    taskCount: 3,
    isDefault: true,
  },
  {
    id: 2,
    project_id: 1,
    name: "Minh Thắng Trần",
    user_id: 1,
    role: "Owner",
    initials: "MT",
    color: "#6c5ce7",
    taskCount: 5,
  },
  {
    id: 3,
    project_id: 1,
    name: "Nguyễn Văn An",
    user_id: 2,
    role: "Member",
    initials: "NA",
    color: "#5ead6c",
    taskCount: 3,
  },
  {
    id: 4,
    project_id: 1,
    name: "Trần Thu Hà",
    user_id: 3,
    role: "Member",
    initials: "TH",
    color: "#e17055",
    taskCount: 4,
  },
  {
    id: 5,
    project_id: 1,
    name: "Lê Hoàng Nam",
    user_id: 4,
    role: "Member",
    initials: "LN",
    color: "#00b894",
    taskCount: 2,
  },
  {
    id: 6,
    project_id: 1,
    name: "Phạm Minh Đức",
    user_id: 5,
    role: "Member",
    initials: "MD",
    color: "#fdcb6e",
    taskCount: 1,
  },
];

export default function CardMember({ showAll = false }) {
  const [members, setMembers] = useState(fakeMembers);
  const [selectedMember, setSelectedMember] = useState(null);

  const handleSelect = (id) => {
    setSelectedMember((prev) => (prev === id ? null : id));
  };

  const handleDelete = (id) => {
    setMembers((prev) => prev.filter((member) => member.id !== id));
    setSelectedMember((prev) => (prev === id ? null : prev));
  };

  return (
    <div className="flex flex-col gap-1">
      {(showAll ? members : members.slice(0, 3)).map((member) => (
        <div key={member.id} className="flex items-center justify-between">
          <div
            onClick={() => handleSelect(member.id)}
            className={`w-full text-xs flex items-center justify-between p-2 rounded-xl duration-300 cursor-pointer ${
              selectedMember === member.id
                ? "bg-black text-white"
                : "hover:bg-white"
            }`}
          >
            <div className="flex gap-2 items-center">
              <Avatar
                initials={member.initials}
                w={24}
                h={24}
                f={9}
                color={member.color}
              />
              <div>{member.name}</div>
            </div>

            <div>{member.taskCount}</div>
          </div>

          {!member.isDefault && (
            <IoMdClose
              size={14}
              className="shrink-0 cursor-pointer hover:text-red-500 duration-300"
              onClick={() => handleDelete(member.id)}
            />
          )}
        </div>
      ))}
    </div>
  );
}
