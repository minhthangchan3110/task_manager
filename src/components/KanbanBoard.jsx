import React, { useState } from "react";
import KanbanColumn from "./KanbanColumn";

const initialColumns = [
  { id: "todo", title: "Cần làm" },
  { id: "doing", title: "Đang thực hiện" },
  { id: "done", title: "Hoàn thành" },
];

const initialTasks = [
  {
    id: 101,
    code: "DEV-101",
    title: "Thiết kế giao diện đăng nhập",
    status: "todo",
    priority: "Cao",
    label: "Frontend",
    labelColor: "#6c5ce7",
    dueDate: "19/10",
    initials: "MT",
    assigneeColor: "#6c5ce7",
  },
  {
    id: 102,
    code: "DEV-102",
    title: "Thêm dark mode cho dasboard",
    status: "todo",
    priority: "Cao",
    label: "Frontend",
    labelColor: "#6c5ce7",
    dueDate: "19/10",
    initials: "MT",
    assigneeColor: "#6c5ce7",
  },
  {
    id: 103,
    code: "DEV-103",
    title: "Xây dựng API đăng nhập",
    status: "doing",
    priority: "Trung bình",
    label: "Backend",
    labelColor: "#1fa6b5",
    dueDate: "22/10",
    initials: "NA",
    assigneeColor: "#5ead6c",
  },
];

export default function KanbanBoard() {
  const [columns, setColumns] = useState(initialColumns);
  const [tasks, setTasks] = useState(initialTasks);

  const handleDragStart = (event, taskId) => {
    event.dataTransfer.setData("taskId", String(taskId));
    event.dataTransfer.effectAllowed = "move";
  };

  const handleDropTask = (event, status) => {
    const taskId = Number(event.dataTransfer.getData("taskId"));

    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, status } : task,
      ),
    );
  };

  const handleAddTask = (status) => {
    const title = window.prompt("Nhập tên task:");

    if (!title?.trim()) return;

    const nextId = Math.max(100, ...tasks.map((task) => task.id)) + 1;

    setTasks((prevTasks) => [
      ...prevTasks,
      {
        id: nextId,
        code: `DEV-${nextId}`,
        title: title.trim(),
        status,
        priority: "Trung bình",
        label: "Frontend",
        labelColor: "#6c5ce7",
        dueDate: "Chưa đặt",
        initials: "?",
        assigneeColor: "#A8ABB5",
      },
    ]);
  };

  const handleMoveColumn = (columnId, direction) => {
    setColumns((prevColumns) => {
      const currentIndex = prevColumns.findIndex(
        (column) => column.id === columnId,
      );
      const nextIndex = currentIndex + direction;

      if (nextIndex < 0 || nextIndex >= prevColumns.length) {
        return prevColumns;
      }

      const updatedColumns = [...prevColumns];
      [updatedColumns[currentIndex], updatedColumns[nextIndex]] = [
        updatedColumns[nextIndex],
        updatedColumns[currentIndex],
      ];

      return updatedColumns;
    });
  };

  const handleRemoveColumn = (columnId) => {
    const column = columns.find((item) => item.id === columnId);

    if (!column) return;

    const hasTasks = tasks.some((task) => task.status === columnId);

    if (hasTasks) {
      window.alert("Cột vẫn còn task, chưa thể xóa.");
      return;
    }

    if (!window.confirm(`Bạn muốn xóa cột "${column.title}"?`)) {
      return;
    }

    setColumns((prevColumns) =>
      prevColumns.filter((item) => item.id !== columnId),
    );
  };
  const handleAddColumn = () => {
    const title = window.prompt("Nhập tên cột:");

    if (!title?.trim()) return;

    const newColumn = {
      id: `column-${Date.now()}`,
      title: title.trim(),
    };

    setColumns((prevColumns) => [...prevColumns, newColumn]);
  };

  const handleColumnDragStart = (event, columnId) => {
    event.dataTransfer.setData("columnId", columnId);
    event.dataTransfer.effectAllowed = "move";
  };

  const handleColumnDrop = (sourceId, targetId) => {
    if (sourceId === targetId) return;

    setColumns((prevColumns) => {
      const updatedColumns = [...prevColumns];

      const sourceIndex = updatedColumns.findIndex(
        (column) => column.id === sourceId,
      );

      const targetIndex = updatedColumns.findIndex(
        (column) => column.id === targetId,
      );

      if (sourceIndex === -1 || targetIndex === -1) {
        return prevColumns;
      }

      const [movedColumn] = updatedColumns.splice(sourceIndex, 1);

      updatedColumns.splice(targetIndex, 0, movedColumn);

      return updatedColumns;
    });
  };
  return (
    <div className="w-full h-full min-h-0 overflow-x-auto overflow-y-hidden">
      <div className="flex items-stretch gap-3 h-full min-w-max pb-2">
        {columns.map((column, index) => {
          const columnTasks = tasks.filter((task) => task.status === column.id);

          return (
            <KanbanColumn
              key={column.id}
              column={{
                ...column,
                index,
                isLast: index === columns.length - 1,
              }}
              tasks={columnTasks}
              onAddTask={handleAddTask}
              onDragStart={handleDragStart}
              onDropTask={handleDropTask}
              onMoveColumn={handleMoveColumn}
              onRemoveColumn={handleRemoveColumn}
              onColumnDragStart={handleColumnDragStart}
              onColumnDrop={handleColumnDrop}
            />
          );
        })}
        <button
          type="button"
          onClick={handleAddColumn}
          className="w-28 h-28 shrink-0 rounded-3xl border-2 border-dashed
    border-[#d5d9e0] flex items-center justify-center
    text-xs text-gray-500 hover:text-[#6c5ce7]
    hover:border-[#6c5ce7] transition-colors"
        >
          + Thêm cột
        </button>
      </div>
    </div>
  );
}
