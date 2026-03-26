import profileImg from "../../assets/profile.png";
import "../../styles/S_Progress.css";

function S_Progress({ onBack }) {
  return (
    <div className="progress-app">
      {/* Header */}
      <header className="progress-header">
        <div className="header-left">
          <button className="back-btn" onClick={onBack}>
            <span className="back-icon">←</span>
          </button>
          <span className="signal-icon">📶</span>
          <span className="title">Progress</span>
        </div>

        <div className="header-right">
          <span>My Profile</span>
          <img src={profileImg} alt="profile" className="profile-img" />
        </div>
      </header>

      {/* Content */}
      <div className="progress-content">
        {/* Quiz Result */}
        <div className="card quiz-result">
          <h2>⭐ Quiz Result</h2>

          <div className="quiz-details">
            <div>
              <p>Today :-</p>
              <p>Maths - 7/10</p>
              <p>Science - 8/10</p>
              <p>English - 9/10</p>
            </div>

            <div>
              <p>Overall :-</p>
              <p>Today - 8.5/10</p>
              <p>Yesterday - 8/10</p>
            </div>
          </div>

          <div className="score-box">
            <p>Score : 85% - Great Job</p>
            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>
          </div>
        </div>

        {/* Streak */}
        <div className="card streak">
          <h2>🔥 Streak</h2>
          <p>Current - 14 days</p>
          <p>Maximum - 21 days</p>
        </div>

        {/* Tutor Feedback */}
        <div className="card feedback">
          <h2>💬 Tutor Feedback</h2>
          <p>
            Mr. Harry : "Alex is doing wonderful in Math! keep Practicing.
            But he should also focus on english because he is not much good
            in language."
          </p>
        </div>

        {/* Subject Progress */}
        <div className="card subject-progress">
          <h2>📊 Subject wise Progress</h2>

          <div className="bars">
            <div className="bar">
              <div className="bar-fill" style={{ height: "90%" }}></div>
              <span>Math</span>
            </div>

            <div className="bar">
              <div className="bar-fill" style={{ height: "70%" }}></div>
              <span>Science</span>
            </div>

            <div className="bar">
              <div className="bar-fill" style={{ height: "80%" }}></div>
              <span>English</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default S_Progress;
