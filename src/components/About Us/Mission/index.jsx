import React from "react";
import "./Mission.css";
import missionImg from "../../../assets/about/mission.jpg";

const Mission = () => {
  return (
    
    <div className="flip-card">
      <div className="flip-card-inner">
        {/* Front */}
        <div className="flip-card-front mission-front" >
          <h2 align="center"> OUR <br></br>MISSION</h2>
        
        </div>

        {/* Back */}
        <div
          className="flip-card-back"
          style={{
            backgroundImage: `url(${missionImg})`,
          }}
        >
          
          <div className="overlay">
            <p>
              To orchestrate a digitally enabled transformative IT solutions ecosystem that democratizes access to cutting-edge technologies while leveraging a global workforce, diverse languages, and cultures to empower organizations to transform their visions into reality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;