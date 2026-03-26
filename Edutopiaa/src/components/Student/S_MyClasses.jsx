import profileImg from "../../assets/profile.png";
import "../../styles/S_MyClasses.css";

function S_MyClasses({ onBack, openMath, openScience, openEnglish }) {

  return (
    <div className="myclasses-app">

      <header className="myclasses-header">

        <div className="header-left">
          <button className="back-btn" onClick={onBack}>←</button>
          <span className="book-icon">📖</span>
          <span className="title">My Classes</span>
        </div>

        <div className="header-right">
          <span>My Profile</span>
          <img src={profileImg} alt="profile" className="profile-img" />
        </div>

      </header>


      <div className="subjects">

        <div className="subject math" onClick={openMath}>
          Mathematics
        </div>

        <div className="subject science" onClick={openScience}>
          Science
        </div>

        <div className="subject english" onClick={openEnglish}>
          English
        </div>

      </div>

    </div>
  );
}

export default S_MyClasses;