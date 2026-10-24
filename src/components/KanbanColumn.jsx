import React from "react";
import TaskCard from "./TaskCard";
import { IoAddOutline } from "react-icons/io5";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

export default function KanbanColumn({
  column,
  tasks,
  onAddTask,
  onDragStart,
  onDropTask,
  onMoveColumn,
  onRemoveColumn,
  onColumnDragStart,
  onColumnDrop,
}) {
  return (
    <div
      draggable
      onDragStart={(event) => onColumnDragStart(event, column.id)}
      onDragOver={(event) => event.preventDefault()}
      onDrop={(event) => {
        event.preventDefault();

        const columnId = event.dataTransfer.getData("columnId");

        if (columnId) {
          onColumnDrop(columnId, column.id);
          return;
        }

        onDropTask(event, column.id);
      }}
      className="flex flex-col w-72 gap-2 shrink-0 min-h-0 rounded-2xl bg-[#f1f2f3] p-3"
    >
      <div className="flex items-center justify-between gap-2">
        <div className="text-sm truncate">{column.title}</div>

        <div className="flex items-center gap-2 shrink-0">
          <div className="text-xs rounded-full bg-white w-5.5 h-5.5 flex items-center justify-center">
            {tasks.length}
          </div>

          <button
            type="button"
            onClick={() => onAddTask(column.id)}
            className="bg-white w-8 h-8 rounded-full flex items-center justify-center hover:text-green-500 transition-colors"
            title="Thêm task"
          >
            <IoAddOutline />
          </button>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => onMoveColumn(column.id, -1)}
            disabled={column.index === 0}
            className="bg-white w-6 h-6 rounded-full flex items-center justify-center hover:text-blue-500 disabled:opacity-30 transition-colors"
            title="Di chuyển cột sang trái"
          >
            <MdOutlineKeyboardArrowLeft />
          </button>

          <button
            type="button"
            onClick={() => onMoveColumn(column.id, 1)}
            disabled={column.isLast}
            className="bg-white w-6 h-6 rounded-full flex items-center justify-center hover:text-blue-500 disabled:opacity-30 transition-colors"
            title="Di chuyển cột sang phải"
          >
            <MdOutlineKeyboardArrowRight />
          </button>
        </div>

        <button
          type="button"
          onClick={() => onRemoveColumn(column.id)}
          className="bg-white w-6 h-6 rounded-full flex items-center justify-center hover:text-red-500 transition-colors"
          title="Xóa cột"
        >
          <IoMdClose />
        </button>
      </div>

      <div className="flex flex-col gap-3 flex-1 min-h-0 overflow-y-auto">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} onDragStart={onDragStart} />
        ))}

        {tasks.length === 0 && (
          <div className="text-xs text-gray-400 text-center py-6 rounded-xl">
            Kéo task vào đây
          </div>
        )}
      </div>
    </div>
  );
}
