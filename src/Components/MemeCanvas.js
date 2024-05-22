import React, { useRef } from "react";
import html2canvas from "html2canvas";

const MemeCanvas = ({ image, topText, bottomText, textColor }) => {
  const canvasRef = useRef(null);

  const downloadMeme = () => {
    html2canvas(canvasRef.current).then((canvas) => {
      const link = document.createElement("a");
      link.download = "meme.png";
      link.href = canvas.toDataURL();
      link.click();
    });
  };

  return (
    <div className="flex flex-col items-center">
      <div ref={canvasRef} className="relative text-center mb-4">
        <img src={image} alt="meme" className="w-full max-w-md" />
        <h2
          className="absolute top-2 left-1/2 transform -translate-x-1/2 text-2xl font-bold"
          style={{ color: textColor, textShadow: "2px 2px 4px #000" }}
        >
          {topText}
        </h2>
        <h2
          className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-2xl font-bold"
          style={{ color: textColor, textShadow: "2px 2px 4px #000" }}
        >
          {bottomText}
        </h2>
      </div>
      <button
        onClick={downloadMeme}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Download Meme
      </button>
    </div>
  );
};

export default MemeCanvas;
