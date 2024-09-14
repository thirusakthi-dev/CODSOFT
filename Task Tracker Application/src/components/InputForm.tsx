import React, { useState, useEffect } from "react";

interface Item {
  id: number;
  task: string;
  checked: boolean;
  status: string;
}

interface inputProps {
  newItem: (task: string) => void;
  editItem: Item | null;
  editOpen: boolean;
}

const InputForm: React.FC<inputProps> = ({ newItem, editItem, editOpen }) => {
  const [task, setTask] = useState<string>("");

  useEffect(() => {
    if (editOpen && editItem) {
      setTask(editItem.task);
    } else {
      setTask("");
    }
  }, [editItem, editOpen]);

  const handleOnSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (task.trim()) {
      newItem(task);
      setTask("");
    }
  };

  return (
    <form onSubmit={handleOnSubmit} className="input-container">
      <input
        className="input-task"
        type="text"
        placeholder="Enter your task"
        autoFocus
        required
        value={task}
        onChange={(e) => setTask(e.target.value)}
      ></input>
      <button type="submit">{editOpen ? "Update" : "Add"}</button>
    </form>
  );
};

export default InputForm;
