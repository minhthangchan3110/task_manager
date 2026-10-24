import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
const fakeLabels = [
  {
    id: 1,
    project_id: 1,
    name: "Frontend",
    color: "#6c5ce7",
    countLabel: 4,
  },
  {
    id: 2,
    project_id: 1,
    name: "Backend",
    color: "#1fa6b5",
    countLabel: 4,
  },
  {
    id: 3,
    project_id: 1,
    name: "Bug",
    color: "#d6336c",
    countLabel: 4,
  },
  {
    id: 4,
    project_id: 1,
    name: "DevOps",
    color: "#e07a0b",
    countLabel: 4,
  },
];

export default function ListLabel({ showAll = false }) {
  const [labels, setLabels] = useState(fakeLabels);
  const [selectedLabels, setSelectedLabels] = useState(null);

  const handleSelect = (id) => {
    setSelectedLabels((prev) => (prev === id ? null : id));
  };
  const handleDelete = (id) => {
    setLabels((prev) => prev.filter((label) => label.id !== id));
    setSelectedLabels((prev) => (prev === id ? null : prev));
  };
  return (
    <div className="flex w-full flex-col gap-1">
      {(showAll ? labels : labels.slice(0, 3)).map((label) => (
        <div
          key={label.id}
          className="flex w-full items-center justify-between"
        >
          <div
            onClick={() => handleSelect(label.id)}
            className={`flex w-full items-center justify-between rounded-xl p-2 text-xs duration-300 cursor-pointer gap-2 ${
              selectedLabels === label.id
                ? "bg-black text-white"
                : "hover:bg-white"
            }`}
          >
            <div className="flex items-center justify-between w-full gap-2">
              <div className="flex items-center gap-2">
                <div
                  className="h-2.5 w-2.5 shrink-0 rounded-full"
                  style={{ backgroundColor: label.color }}
                />
                <div>{label.name}</div>
              </div>
              <div>{label.countLabel}</div>
            </div>
          </div>
          <IoMdClose
            size={14}
            className="shrink-0 cursor-pointer hover:text-red-500 duration-300"
            onClick={() => handleDelete(label.id)}
          />
        </div>
      ))}
    </div>
  );
}
