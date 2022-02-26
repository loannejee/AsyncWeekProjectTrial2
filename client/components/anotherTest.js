import React, { useEffect } from "react";
import Winwheel from "winwheeljs/lib/Winwheel";

const Dashboard = (props) => {
    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
      let theWheel = new Winwheel({
        canvasId: "myCanvas",
        numSegments: 4,
        segments: [
          { fillStyle: "#eae56f", text: "Prize One" },
          { fillStyle: "#89f26e", text: "Prize Two" },
          { fillStyle: "#7de6ef", text: "Prize Three" },
          { fillStyle: "#e7706f", text: "Prize Four" },
        ],
      });
    });
    
    const handleAddSegment=(event)=>{

      let date = new Date();
      theWheel.addSegment( {
          'text' : date.getMinutes() + ':' + date.getSeconds(),
          'fillStyle' : 'aqua'
      }, 1);
      theWheel.draw();
    };


    return (
        <div>
            <canvas id="myCanvas" width="880" height="300"></canvas>
            <button onClick={handleAddSegment}>Add Segment</button>
        </div>
    ) 
};
  
export default Dashboard;