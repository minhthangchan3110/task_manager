import React from "react";
import { CiTimer } from "react-icons/ci";
import Avatar from "./Avatar";

export default function TaskCard({ task, onDragStart }) {
  return (
    <div
      draggable
      onDragStart={(event) => onDragStart(event, task.id)}
      className="bg-white p-4 rounded-2xl border-l-4 border-l-green-500 shadow-sm flex flex-col gap-3 hover:shadow-md transition-shadow cursor-grab active:cursor-grabbing"
    >
      <div className="flex flex-col gap-1.5">
        <span className="opacity-70 text-[11px]">
          {task.code} - {task.priority}
        </span>

        <p className="text-[13px] font-semibold">{task.title}</p>

        {task.label && (
          <div
            className="w-fit text-white text-[10px] py-1 px-2 rounded-full"
            style={{ backgroundColor: task.labelColor }}
          >
            {task.label}
          </div>
        )}
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-gray-700">
          <CiTimer className="shrink-0" size={12} />
          <span className="leading-none text-[11px]">{task.dueDate}</span>
        </div>

        <Avatar
          initials={task.initials}
          h={24}
          w={24}
          f={9}
          color={task.assigneeColor}
        />
      </div>
    </div>
  );
}
