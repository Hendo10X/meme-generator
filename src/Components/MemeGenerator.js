import React, { useState } from "react";
import MemeCanvas from "./MemeCanvas";
import { HexColorPicker } from "react-colorful";

const MemeGenerator = () => {
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [image, setImage] = useState(null);
  const [textColor, setTextColor] = useState("#FFFFFF");

  const handleImageUpload = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  };

  const shareToWhatsApp = () => {
    if (image) {
      const memeUrl = document.querySelector("canvas").toDataURL();
      const encodedUrl = encodeURIComponent(memeUrl);
      window.open(`https://api.whatsapp.com/send?text=${encodedUrl}`, "_blank");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-black">MemeGen</h1>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="block mb-4 p-2 border border-gray-300"
      />
      <input
        type="text"
        placeholder="Top Text"
        value={topText}
        onChange={(e) => setTopText(e.target.value)}
        className="block w-3/4 mb-4 p-2 border border-gray-300"
      />
      <input
        type="text"
        placeholder="Bottom Text"
        value={bottomText}
        onChange={(e) => setBottomText(e.target.value)}
        className="block w-3/4 mb-4 p-2 border border-gray-300"
      />
      <div className="flex items-center justify-center mb-4">
        <label className="mr-4">Text Color:</label>
        <HexColorPicker color={textColor} onChange={setTextColor} />
      </div>
      {image && (
        <div className="my-4">
          <MemeCanvas
            image={image}
            topText={topText}
            bottomText={bottomText}
            textColor={textColor}
          />
          <button
            onClick={shareToWhatsApp}
            className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
          >
            Share to WhatsApp
          </button>
        </div>
      )}
    </div>
  );
};

export default MemeGenerator;
