import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import HTML from "../Pages/HTML";
import QA from "../Pages/QA";
import SAND from "../Pages/SAND";
import STMP from "../Pages/STMP";
import MAIN from "../Pages/MAIN";
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/qna" element={<QA />} />
        <Route path="/ht" element={<HTML />} />
        <Route path="/sand" element={<SAND />} />
        <Route path="/stmp" element={<STMP />} />
        <Route path="/main" element={<MAIN />} />
      </Routes>
    </div>
  );
};
export default AllRoutes;
