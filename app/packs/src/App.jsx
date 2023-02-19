import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import Layout from "./components/shared/Layout";
import TodoListPage from "./components/pages/TodoListPage";
import MyNav from "./components/shared/MyNav";
import "./App.css";

function App() {
  return (
    <div className="app">
      <MyNav />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/todo-list" element={<TodoListPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
