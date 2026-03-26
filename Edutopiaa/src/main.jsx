import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import S_Homepage from "./components/Student/S_Homepage.jsx";
import S_MyClasses from "./components/Student/S_MyClasses.jsx";
import S_LiveClass from "./components/Student/S_LiveClass.jsx";
import S_Progress from "./components/Student/S_Progress.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <S_Homepage />
  </StrictMode>
);
