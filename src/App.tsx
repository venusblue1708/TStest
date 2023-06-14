import React from "react";
import Card, { CardVariant } from "./components/Card";
import EventExample from "./components/EventExample";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserPage from "./components/UserPage";
import TodosPage from "./components/TodosPage";
import { NavLink } from "react-router-dom";
import UserItemPage from "./components/UserItemPage";
import TodoItemPage from "./components/TodoItemPage";
const App = () => {
  return (
    <BrowserRouter>
      <div>
        <div>
          <NavLink to="/users">Ползователи</NavLink>
          <NavLink to="/todos">Список дел</NavLink>
        </div>
        <Routes>
          <Route path="/users" element={<UserPage />} />
          <Route path="/todos" element={<TodosPage />} />
          <Route path="/user/:id" element={<UserItemPage />} />
          <Route path="/todos/:id" element={<TodoItemPage />} />
        </Routes>
      </div>
      {/* <EventExample /> */}
      {/* <Card
        onClick={(num: number) => console.log("click", num)}
        variant={CardVariant.outlined}
        width="200px"
        height="200px"
      >
        <button>Кнопка</button>
        <div>sdsd</div>
      </Card> */}
    </BrowserRouter>
  );
};
export default App;
