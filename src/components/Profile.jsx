import React from "react";

const Profile = ({ time, setTime }) => {
  let interval = ["Daily", "Weekly", "Monthly"];

  return (
    <div className="profile">
      <div className="profileInfo">
        <img className="avatar" src="images/image-jeremy.png" alt="" />
        <div className="profileTitle">
          <p>Report for</p>
          <h1>Jeremy Robson</h1>
        </div>
      </div>

      <div className="intervalList">
        {interval.map((item, i) => {
          return (
            <div
              onClick={() => setTime(item.toLowerCase())}
              key={i}
              className={`intervalItem ${
                time === item.toLowerCase() ? "active" : ""
              }`}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Profile;
