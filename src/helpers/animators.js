export const shakeInput = (inputRef, duration) => {
  if (inputRef.current) {
    inputRef.current.animate(
      [
        { transform: "translateX(0)" },
        { transform: "translateX(10px)" },
        { transform: "translateX(-10px)" },
        { transform: "translateX(5px)" },
        { transform: "translateX(0)" },
      ],
      {
        duration: 400,
        iterations: 1,
      }
    );
  }
};
