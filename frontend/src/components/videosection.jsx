import React from "react";
import ReactPlayer from "react-player";
import TagLine from "./Tagline";

function VideoSection() {
  return (
    <div className=" ">
      <div className="flex justify-center">
        <TagLine>A New Era of Resilience and Empowerment</TagLine>
      </div>
      <br />
      <div className="flex justify-center">
        <ReactPlayer
          width={"80%"}
          height={"600px"}
          url="https://www.youtube.com/watch?v=9yFXjjCnFGQ"
          controls
        />
      </div>
      <br />
      <br />
    </div>
  );
}

export default VideoSection;
