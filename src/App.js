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
  const [style1, setStyle1] = useState(null);
  const [style2, setStyle2] = useState(null);
  const [style3, setStyle3] = useState(null);
  const [color, setColor] = useState(" ");
  const stylez = (font) => {
    //setStyle({ ...style, ...styles[font] });
    if (font === "bold") {
      setStyle1(style1 ? null : styles.bold);
      //s1 = 1;
    } else if (font === "italic") {
      setStyle2(style2 ? null : styles.italic);
      //s1 = 0;
    } else {
      setStyle3(style3 ? null : styles.underline);
    }
  };
  const colores = (lon) => {
    setColor(lon);
  };
  const stylingBoxes = stylings.map((style) => (
    <button
      onClick={() => stylez(style)}
      className={`btn btn-light`}
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
          //...style,
          ...style1,
          ...style2,
          ...style3,
          //fontStyle: style,
          //fontWeight: style,
          //textDecorationLine: style,
        }}
      />
      <div className="my-3">{colorBoxes}</div>
    </div>
  );
}

export default App;
