import React from "react";
import DeleteIcon from "../assets/icons/delete-l.svg";
import EditIcon from "../assets/icons/edit-l.svg";

interface Task {
  id: number;
  task: string;
  checked: boolean;
  status: string;
}

interface ItemProps {
  item: Task;
  handleCheck: (id: number) => void;
  handleDelete: (id: number) => void;
  handleEdit: (id: number) => void;
}

const TaskItem: React.FC<ItemProps> = ({
  item,
  handleCheck,
  handleDelete,
  handleEdit,
}) => {
  return (
    <li
      key={item.id}
      className="task-item"
      style={{
        backgroundColor: item.status == "ongoing" ? "#FF7F50" : "#50C878",
      }}
    >
      <input
        type="checkbox"
        onChange={() => handleCheck(item.id)}
        checked={item.checked}
      />
      <p className="task">{item.task}</p>
      <div className="task-actions">
        <img
          src={EditIcon}
          onClick={() => handleEdit(item.id)}
          style={{ width: 23, height: 23 }}
        ></img>
        <img
          src={DeleteIcon}
          onClick={() => handleDelete(item.id)}
          style={{ width: 23, height: 23 }}
        ></img>
      </div>
    </li>
  );
};

export default TaskItem;
