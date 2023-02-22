import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import Log from "../pages/Log";
import List from "../pages/List";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/log" element={<Log />} />
        <Route path="/list" element={<List />} />
        <Route path="/list/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
