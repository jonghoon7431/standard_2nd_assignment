import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Layout from "./components/Layout";
import TodoForm from "./components/TodoForm";
import TodoContainer from "./components/TodoContainer";

function App() {
  return (
    <>
      <Layout>
        <TodoContainer />
      </Layout>
    </>
  );
}

export default App;
