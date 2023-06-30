import AnimatedCursor from "react-animated-cursor";
const Cursor = () => {
    return (
      <div>
        <AnimatedCursor
          innerSize={10}
          outerSize={10}
          color="354, 81, 758"
          outerAlpha={0.2}
          innerScale={1}
          outerScale={6}
          clickables={[
            "a",
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            "label[for]",
            "select",
            "textarea",
            "button",
            ".link",
          ]}
        />
      </div>
    );
};

export default Cursor;
