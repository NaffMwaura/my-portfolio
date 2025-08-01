//import React from 'react';

const Divider = () => {
  return (
    // The main container now handles the vertical padding, so the background color is seamless.
    <div className="bg-[#0b0c2a] py-10 md:py-16">
      <div className="container mx-auto px-6 md:px-10">
        {/* The actual divider line, now with a golden color and a thicker height. */}
        <div className="w-full h-px bg-[#e1e1eb]"></div>
      </div>
    </div>
  );
};

export default Divider;
