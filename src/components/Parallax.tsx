import {type  FC } from "react";

interface ParallaxProps {
  image: string;
  height?: string; // optional
  overlay?: boolean; // optional
}

const Parallax: FC<ParallaxProps> = ({ image, height = "500px", overlay = true }) => {
  return (
    <div
      className="relative w-full bg-fixed bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(${image})`,
        minHeight: height,
      }}
    >
      {overlay && (
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]" />
      )}
    </div>
  );
};

export default Parallax;
