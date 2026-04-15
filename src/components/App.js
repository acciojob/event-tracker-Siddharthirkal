import React, { useState } from "react";
import CalendarComponent from "./CalendarComponent";
import "./../styles/App.css";

function App() {
  const [filter, setFilter] = useState("all");

  return <CalendarComponent filter={filter} setFilter={setFilter} />;
}

export default App;