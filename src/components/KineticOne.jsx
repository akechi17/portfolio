import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const KineticOne = ({tabIndex}) => {
  const shapeRefs = useRef([]);

  // Function to add a reference to each shape
  const addToRefs = (el) => {
    if (el && !shapeRefs.current.includes(el)) {
      shapeRefs.current.push(el);
    }
  };

  useEffect(() => {
    const shapes = shapeRefs.current;
    const duration = 2;
    const stagger = 0.125;
    const initialScales = [
      0.9985, 0.9693, 0.8662, 0.6423, 0.3132, 0.1111, 0.0225, 0.0006,
    ];

    const animateShape = (shape, index) => {
      gsap.fromTo(
        shape,
        { scale: initialScales[index] },
        {
          scale: 1,
          duration,
          ease: "none",
          onComplete: function () {
            gsap.to(shape, { scale: 0, duration: 0 }); // Reset scale to 0
            shape.style.zIndex = parseInt(shape.style.zIndex, 10) + 1;
            animateShape(shape, (index + 1) % shapes.length); // Move to the next shape and restart animation
          },
        }
      );
    };

    shapes.forEach((shape, index) => {
      animateShape(shape, index); // Start the animation for each shape
    });
  }, []);

  return (
    <div className='cell'>
      <button
        aria-label='Open kinetic layout'
        className='homepage-kinetic homepage-kinetic-1 kinetic'
        tabIndex={tabIndex}
      >
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            ref={addToRefs}
            data-v-5edce65c=''
            className='shape'
            style={{
              zIndex: index + 1,
            }}
          ></div>
        ))}
      </button>
    </div>
  );
};

export default KineticOne;
