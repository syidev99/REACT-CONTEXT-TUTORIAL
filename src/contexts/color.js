import React, { createContext, useState } from "react";

const ColorContext = createContext({
    state: { color: "black", subcolor: "red" },
    actions: {
        setColor: () => {},
        setSubcolor: () => {},
    },
});

const ColorProvider = ({ children }) => {
    const [color, setColor] = useState("black");
    const [subcolor, setSubcolor] = useState("red");

    const value = {
        state: { color, subcolor },
        actions: { setColor, setSubcolor },
    };
    return <ColorContext.provider value={value}>{children}</ColorContext.provider>;
};

const { Consumer: ColorConsumer } = ColorContext;
export { ColorProvider, ColorConsumer };

export default ColorContext;
