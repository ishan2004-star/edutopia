import profileImg from "../../assets/profile.png";
import "../../styles/S_Mathematics.css";

function S_Mathematics({ onBack }) {

  const topics = [
    "Numbers",
    "Place Value",
    "Addition",
    "Subtraction",
    "Shapes",
    "Patterns",
    "Measurement",
    "Time",
    "Money"
  ];

  return (
    <div className="math-app">


      <header className="math-header">

        <div className="header-left">
          <button className="back-btn" onClick={onBack}>←</button>
          <span className="math-title">Mathematics</span>
        </div>

        <div className="header-right">
          <span>My Profile</span>
          <img src={profileImg} alt="profile" className="profile-img" />
        </div>

      </header>

      <div className="topics-grid">

        {topics.map((topic, index) => (
          <div key={index} className="topic-circle">
            {topic}
          </div>
        ))}

      </div>

    </div>
  );
}

export default S_Mathematics;