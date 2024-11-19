import { Html } from "@react-three/drei";
import React from "react";

const Loader = () => {
  return (
    <Html>
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <div className="py-2 px-5 rounded-full bg-gray-300">Loading...</div>
      </div>
    </Html>
  );
};

export default Loader;
