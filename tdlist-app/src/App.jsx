import React from "react";
import AppNav from "./components/shared/AppNav";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import Layout from "./components/shared/Layout";
import TodoListPage from "./components/pages/TodoListPage";
import "./App.css";

function App() {
  return (
    <div className="app">
      <AppNav />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/todo-list" element={<TodoListPage />} />
        </Routes>
      </Layout>

      {/* <Container className="mainContainer">
        <div className="topHeading">
          <h1>A Simple To-Do List App</h1>
        </div>
        <TodoListPage />
      </Container> */}
    </div>
  );
}

export default App;
