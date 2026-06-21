import React, { useEffect, useState } from 'react';

const colors = ["#EA4335", "#FBBC05", "#34A853", "#4285F4"];

const Loading = ({ text = "Loading..." }) => {
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % colors.length);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center my-1">
      <svg
        aria-hidden="true" className="w-6 h-6 border-2 border-t-transparent border-solid rounded-full animate-spin"
        style={{
          borderColor: `${colors[colorIndex]} transparent`
        }}
      ></svg>
      <div className='ms-2'>{text}</div>
    </div>
  );
};

export default Loading;