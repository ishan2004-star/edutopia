import profileImg from "../../assets/profile.png";
import "../../styles/S_Science.css";

function S_Science({ onBack }) {

  const topics = [
    "Myself",
    "My Family",
    "My Body",
    "Sense Organ",
    "Food we eat",
    "Plants around us",
    "Animals around us",
    "Living and non-living things",
    "Our Earth"
  ];

  return (
    <div className="science-app">

      <header className="science-header">

        <div className="header-left">
          <button className="back-btn" onClick={onBack}>←</button>
          <span className="science-title">Science</span>
        </div>

        <div className="header-right">
          <span>My Profile</span>
          <img src={profileImg} alt="profile" className="profile-img" />
        </div>

      </header>


      <div className="science-grid">

        {topics.map((topic, index) => (
          <div key={index} className="science-circle">
            {topic}
          </div>
        ))}

      </div>

    </div>
  );
}

export default S_Science;