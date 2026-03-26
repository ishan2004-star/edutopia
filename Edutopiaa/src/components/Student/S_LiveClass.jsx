import profileImg from "../../assets/profile.png";
import "../../styles/S_LiveClass.css";

function S_LiveClass({ onBack }) {
  return (
    <div className="live-app">
      {/* Header */}
      <header className="live-header">
        <div className="header-left">
          <button className="back-btn" onClick={onBack}>
            <span className="back-icon">←</span>
          </button>
          <span className="signal-icon">📶</span>
          <span className="title">Live Class</span>
        </div>

        <div className="header-right">
          <span>My Profile</span>
          <img src={profileImg} alt="profile" className="profile-img" />
        </div>
      </header>

      {/* Content */}
      <div className="live-content">
        {/* Left Section */}
        <div className="left-panel">
          <div className="live-card">
            <div className="live-label">LIVE</div>
            <div className="play-btn">▶</div>

            <div className="live-info">
              <p className="class-title">6th & 7th Science</p>
              <p className="session-title">INTERACTIVE SESSION</p>
            </div>

            <button className="start-btn">Start At : 7 PM</button>
          </div>

          <button className="notes-btn">
            📒 Study Notes
          </button>
        </div>

        {/* Right Section */}
        <div className="schedule">
          <div className="schedule-top">Schedule</div>

          <div className="schedule-body">
            <div className="month">
              <span>‹</span>
              <strong>December 2024</strong>
              <span>›</span>
            </div>

            <div className="schedule-row today">
              <span>Today : English</span>
              <button className="join-btn">Join at 7 PM</button>
            </div>

            <div className="schedule-row">
              <span>Yesterday : Math</span>
              <button className="quiz-btn">Quiz</button>
            </div>

            <div className="schedule-row">
              <span>08/12 : Science</span>
              <button className="quiz-btn">Quiz</button>
            </div>

            <div className="schedule-row">
              <span>07/12 : English</span>
              <button className="quiz-btn">Quiz</button>
            </div>

            <div className="schedule-row">
              <span>06/12 : Math</span>
              <button className="quiz-btn">Quiz</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default S_LiveClass;
