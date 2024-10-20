import React from "react";
import TypeWriter from "typewriter-effect";

const TypewriterComponent = () => {
  const strings = [
    "The BEST Student Management application.",
    "Effortlessly manage your students.",
    "Track progress and performance.",
    "Streamline your educational process.",
  ];

  return (
    <TypeWriter
      options={{ loop: true, autoStart: true }}
      onInit={(writer) => {
        const typeNextString = (index = 0) => {
          writer
            .typeString(strings[index])
            .pauseFor(1000) // Adjust the pause duration
            .deleteAll()
            .callFunction(() => {
              // Move to the next string, or loop back to the start
              const nextIndex = (index + 1) % strings.length;
              typeNextString(nextIndex);
            })
            .start();
        };

        // Start typing the first string
        typeNextString();
      }}
    />
  );
};

export default TypewriterComponent;
