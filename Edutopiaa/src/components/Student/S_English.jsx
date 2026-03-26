import profileImg from "../../assets/profile.png";
import "../../styles/S_English.css";

function S_English({ onBack }) {

  const topics = [
    "Alphabets",
    "Reading",
    "Writing",
    "Grammer",
    "Speaking",
    "Listening",
    "Literature",
    "Vocabulary",
    "Activities"
  ];

  return (
    <div className="english-app">

      <header className="english-header">

        <div className="header-left">
          <button className="back-btn" onClick={onBack}>←</button>
          <span className="english-title">English</span>
        </div>

        <div className="header-right">
          <span>My Profile</span>
          <img src={profileImg} alt="profile" className="profile-img" />
        </div>

      </header>

      <div className="english-grid">

        {topics.map((topic, index) => (
          <div key={index} className="english-circle">
            {topic}
          </div>
        ))}

      </div>

    </div>
  );
}

export default S_English;