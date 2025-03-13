import React, { useEffect, useRef, useState } from "react";
import jsVectorMap from "jsvectormap";
// import "jsvectormap/dist/css/jsvectormap.css"; // Import styles
import "jsvectormap/dist/maps/world.js"; // Import world map

import { impact } from "../assets/data/impact";

const mapData = { // 1 = In progress 2 = Completed
  CD: 1, // Democratic Republic of Congo
  BI: 2, // Burundi
  MG: 3,
  HT: 3
};

const VectorMapComponent = ({ onCountryClick }) => {
  const mapRef = useRef(null);
  const containerRef = useRef(null);
  const [key, setKey] = useState(0);
  const [mapSize, setMapSize] = useState({ width: "900px", height: "600px" });

  // Function to initialize the map
  const initializeMap = () => {
    if (mapRef.current) {
      new jsVectorMap({
        selector: mapRef.current,
        map: "world",
        backgroundColor: "transparent",
        zoomOnScroll: false,
        regionStyle: {
          initial: {
            fill: "#c0c0c0", // Default color for all countries
          },
          hover: {
            fill: "#1e40af", // Dark blue on hover
          },
          selected: {
            fill: "#1e40af", // Dark blue when selected
          },
        },
        series: {
          regions: [
            {
              values: mapData, // Assigns predefined data values
              scale: ["#c0c0c0", "#22c55e", "#facc15", "#f97316"], // Scale for coloring

              normalizeFunction: "polynomial",
            },
          ],
        },
        onRegionClick: (event, code) => {
          if (mapData[code]) {
            onCountryClick(code);
          }
        }
        // selectedRegions: ["CD", "BI"], // Preselect these countries
      });
    }
  };
  

  // Update map size dynamically based on screen width
  const updateMapSize = () => {
    if (containerRef.current) {
      const width = containerRef.current.clientWidth;

      // Dynamically set height based on screen width
      let height;
      if (width > 1000) {
        height = width * 0.6; // Larger screens: 60% of width
      } else if (width > 600) {
        height = width * 0.5; // Medium screens: 50% of width
      } else {
        height = width * 0.4; // Small screens: 40% of width
      }

      // Prevent excessive whitespace by limiting height to 80% of viewport height
      height = Math.min(height, window.innerHeight * 0.8);

      setMapSize({ width: `${width}px`, height: `${height}px` });
      setKey((prev) => prev + 1);
    }
  };

  useEffect(() => {
    initializeMap();
    return () => {
      if (mapRef.current) {
        mapRef.current.innerHTML = ""; // Destroy the map on unmount
      }
    };
  }, [key]);

  useEffect(() => {
    updateMapSize(); // Adjust size on mount
    window.addEventListener("resize", updateMapSize);
    return () => window.removeEventListener("resize", updateMapSize);
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full mx-auto max-w-[1300px] flex justify-center items-center"
      style={{
        minHeight: "100px",
        maxHeight: "80vh", // Prevents too much white space
        width: "100%",
        height: mapSize.height, // Dynamically changes height
      }}
    >
      <div
        ref={mapRef}
        className="rounded-lg p-4 w-full"
        style={{
          width: mapSize.width,
          height: mapSize.height,
        }}
      />
    </div>
  );
};

export default VectorMapComponent;
