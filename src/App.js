import "./App.css";
import { useState } from "react";

const styles = {
  bold: { fontWeight: "bold" },
  italic: { fontStyle: "italic" },
  underline: { textDecorationLine: "underline" },
};

const stylings = ["bold", "italic", "underline"];

const colors = ["yellow", "blue", "red", "black", "purple"];

function App() {
  const [style, setStyle] = useState(" ");
  const [color, setColor] = useState(" ");
  const styles = (font) => {
    //setStyle(font);
    let s1 = 0;
    if (font === "bold" && s1 === 0) {
      setStyle("bold");
      s1 = 1;
    } else if (font === "italic") {
      setStyle("italic");
      //s1 = 0;
    } else if (font === "underline") {
      setStyle("underline");
    } else if (s1 === 1 && font !== "bold") {
      setStyle(" ");
      s1 = 0;
    }
  };
  const colores = (lon) => {
    setColor(lon);
  };
  const stylingBoxes = stylings.map((style) => (
    <button
      onClick={() => styles(style)}
      className="btn btn-light"
      style={styles[style]}
      key={style}
    >
      {style}
    </button>
  ));

  const colorBoxes = colors.map((color) => (
    <button
      onClick={() => colores(color)}
      style={{ backgroundColor: color, height: 30, width: 30 }}
      key={color}
    />
  ));

  return (
    <div className="App">
      <div className="my-3">{stylingBoxes}</div>
      <textarea
        style={{
          color: color,
          fontStyle: style,
          fontWeight: style,
          textDecorationLine: style,
        }}
      />
      <div className="my-3">{colorBoxes}</div>
    </div>
  );
}

export default App;
