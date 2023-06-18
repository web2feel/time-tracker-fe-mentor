import React from "react";
import slugify from "slugify";

const Card = ({ item, time }) => {
  let slug = slugify(item.title, { lower: true });

  let previous =
    time === "daily"
      ? "Day"
      : time === "weekly"
      ? "Week"
      : time === "monthly"
      ? "Month"
      : null;

  return (
    <div className={`card ${slug}`}>
      <div className="cardContent">
        <div className="activity">
          <h2>{item.title}</h2>
          <img src="images/icon-ellipsis.svg" alt="" />
        </div>
        <div className="activityInfo">
          <h2>{item.timeframes[time].current} hrs</h2>
          <p> Last {previous} - { item.timeframes[time].previous} hrs </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
