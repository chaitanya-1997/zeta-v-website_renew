import React from "react";
import "./Vision.css";
import visionImg from "../../../assets/about/vision.jpg";

const Vision = () => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        {/* Front */}
        <div className="flip-card-front vision-front">
          <h2 align="center"> OUR <br></br>VISION</h2>
        </div>

        {/* Back */}
        <div
          className="flip-card-back"
          style={{
            backgroundImage: `url(${visionImg})`,
          }}
        >
          <div className="overlay">
            <p>
              To become the preferred technology partner for small and medium-sized businesses by enabling innovation, accelerating digital transformation, and guiding organizations through every stage of their journey from business ideation to successful market realization.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;