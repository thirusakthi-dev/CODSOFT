import React, { useEffect, useState } from "react";
import "../styles/TaskManager.css";
import Data from "../../data/db.json";
import InputForm from "./InputForm";
import CompleteIcon from "../assets/icons/completed.svg";
import PendingIcon from "../assets/icons/pending-l.svg";
import AllIcon from "../assets/icons/all.svg";
import DeleteIcon from "../assets/icons/delete-l.svg";
import EditIcon from "../assets/icons/edit-l.svg";
import AllLightIcon from "../assets/icons/all-white.svg";
import TaskItem from "./TaskItem";

interface Item {
  id: number;
  task: string;
  checked: boolean;
  status: string;
}

const TaskMananger = () => {
  const db = [
    { id: 1, task: "Task 01", checked: true, status: "ongoing" },
    { id: 2, task: "Task 02", checked: false, status: "completed" },
    { id: 3, task: "Task 03", checked: true, status: "completed" },
  ];

  const [items, setItems] = useState<Item[]>([]);

  const [currentTab, setCurrentTab] = useState<string>("all");

  const API_URL = "http://localhost:3700/items";

  const [isEditOpen, setEditOpen] = useState<boolean>(false);
  const [editItem, setEditItem] = useState<Item | null>(null);

  useEffect(() => {
    const storedItems = localStorage.getItem("tasks");
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    }
  }, []);

  const saveToLocalStorage = (updatedItems: Item[]) => {
    localStorage.setItem("tasks", JSON.stringify(updatedItems));
  };

  const handleAddTask = (newTask: string) => {
    if (isEditOpen && editItem) {
      const updatedItems = items.map((item) =>
        item.id === editItem.id ? { ...item, task: newTask } : item
      );
      setItems(updatedItems);
      saveToLocalStorage(updatedItems);
      setEditOpen(false);
      setEditItem(null);
    } else {
      const newTaskObj: Item = {
        id: items.length + 1,
        task: newTask,
        checked: false,
        status: "ongoing",
      };

      const updatedItems = [...items, newTaskObj];
      setItems(updatedItems);
      saveToLocalStorage(updatedItems);
    }
    setCurrentTab("all");
  };

  const handleEdit = (id: number) => {
    const filterItem = items.find((item) => item.id === id) || null;
    setEditItem(filterItem);
    setEditOpen(true);
  };

  const handleCheck = (id: number) => {
    const listItems = items.map((item) =>
      item.id === id
        ? {
            ...item,
            checked: !item.checked,
            status: item.status === "ongoing" ? "completed" : "ongoing",
          }
        : item
    );
    setItems(listItems);
    saveToLocalStorage(listItems);
  };

  const handleDelete = (id: number) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    saveToLocalStorage(listItems);
  };

  const filterItems = items.filter((item) => {
    switch (currentTab) {
      case "ongoing":
        return !item.checked && item.status == "ongoing";
      case "completed":
        return item.checked && item.status == "completed";
      default:
        return true;
    }
  });

  const handleTabChange = (status: string) => {
    setCurrentTab(status);
    console.log(currentTab);
  };

  return (
    <section className="task-manager">
      <div className="task-manager-container">
        <div>
          <h2>Task Tracker Application</h2>
        </div>
        <InputForm
          newItem={handleAddTask}
          editItem={editItem}
          editOpen={isEditOpen}
        />
        <div className="task-container">
          <div className="tabs">
            <div
              className={`tab ${currentTab == "all" ? "active" : ""}`}
              onClick={() => handleTabChange("all")}
            >
              <img
                src={currentTab === "all" ? AllLightIcon : AllIcon}
                style={{ width: 23, height: 23 }}
              ></img>
              {currentTab == "all" && (
                <>
                  <span className="tab-name tab-all">Tasks</span>
                </>
              )}
              <div className="count count-all">
                {
                  items.filter(
                    (item) => item.status === "ongoing" || "completed"
                  ).length
                }
              </div>
            </div>
            <div
              className={`tab ${currentTab == "ongoing" ? "active" : ""}`}
              onClick={() => handleTabChange("ongoing")}
            >
              <img src={PendingIcon} style={{ width: 23, height: 23 }}></img>
              {currentTab == "ongoing" && (
                <span className="tab-name tab-ongoing">Ongoing</span>
              )}
              <div className="count count-ongoing">
                {items.filter((item) => item.checked === false).length}
              </div>
            </div>
            <div
              className={`tab ${currentTab == "completed" ? "active" : ""}`}
              onClick={() => handleTabChange("completed")}
            >
              <img src={CompleteIcon} style={{ width: 23, height: 23 }}></img>
              {currentTab == "completed" && (
                <span className="tab-name tab-completed">Completed</span>
              )}
              <span className="count count-completed">
                {items.filter((item) => item.checked === true).length}
              </span>
            </div>
            <div className={`glider ${currentTab}`}></div>
          </div>
          {items.length > 0 ? (
            <ul className="task-list">
              {filterItems.map((item) => (
                <TaskItem
                  key={item.id}
                  item={item}
                  handleCheck={handleCheck}
                  handleDelete={handleDelete}
                  handleEdit={handleEdit}
                />
              ))}
            </ul>
          ) : (
            <p className="empty-list">No tasks available. Add some tasks!</p>
          )}

          <div className="total-count">
            <p>Total Items: {items.length}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaskMananger;
