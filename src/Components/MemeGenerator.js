import React, { useState } from "react";
import MemeCanvas from "./MemeCanvas";

const MemeGenerator = () => {
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
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
      {image && (
        <div className="my-4">
          <MemeCanvas image={image} topText={topText} bottomText={bottomText} />
        </div>
      )}
    </div>
  );
};

export default MemeGenerator;
