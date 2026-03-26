import { useState } from "react";
import profileImg from "../../assets/profile.png";

import S_MyClasses from "./S_MyClasses";
import S_LiveClass from "./S_LiveClass";
import S_Progress from "./S_Progress";
import S_Mathematics from "./S_Mathematics";
import S_English from "./S_English";
import S_Science from "./S_Science";

import "../../styles/S_Homepage.css";

function S_Homepage() {

  const [screen, setScreen] = useState("home");

  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  if (screen === "myclasses") {
    return (
      <S_MyClasses
        onBack={() => setScreen("home")}
        openMath={() => setScreen("math")}
        openScience={() => setScreen("science")}
        openEnglish={() => setScreen("english")}
      />
    );
  }

  if (screen === "liveclass") {
    return <S_LiveClass onBack={() => setScreen("home")} />;
  }

  if (screen === "progress") {
    return <S_Progress onBack={() => setScreen("home")} />;
  }

  if (screen === "math") {
    return <S_Mathematics onBack={() => setScreen("myclasses")} />;
  }

  if (screen === "science") {
    return <S_Science onBack={() => setScreen("myclasses")} />;
  }
  if (screen === "english") {
    return <S_English onBack={() => setScreen("myclasses")} />;
  }

  return (
    <div className="app">

      <header className="header">

        <div className="header-left">
          <span className="emoji">😊</span>
          <span>Hello Ishan</span>
        </div>

        <div className="header-right">
          <span>My Profile</span>
          <img src={profileImg} alt="profile" className="profile-img" />
        </div>

      </header>


      <div className="content">

        <div className="left">

          <button
            className="card orange"
            onClick={() => setScreen("myclasses")}
          >
            <span>📘</span>
            <span>My Classes</span>
          </button>

          <button
            className="card blue"
            onClick={() => setScreen("liveclass")}
          >
            <span>▶</span>
            <span>Live Classes</span>
          </button>

          <button
            className="card green"
            onClick={() => setScreen("progress")}
          >
            <span>📊</span>
            <span>Progress</span>
          </button>

        </div>


        <div className="attendance">

          <div className="attendance-top">
            Attendance
          </div>

          <div className="attendance-body">

            <div className="month">
              <span>‹</span>
              <strong>December 2024</strong>
              <span>›</span>
            </div>

            <div className="week">
              <span>S</span><span>M</span><span>T</span>
              <span>W</span><span>T</span><span>F</span><span>S</span>
            </div>

            <div className="days">
              {days.map((day) => {

                let cls = "pending";

                if (day <= 15) cls = "present";

                if (day === 16) cls = "today";

                return (
                  <span key={day} className={cls}>
                    {day}
                  </span>
                );
              })}
            </div>

            <div className="summary">
              <p>✅ Total Present – <b>15</b></p>
              <p>❌ Total Absent – <b>1</b></p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default S_Homepage;