import { useState, useEffect } from "react";
import SvgComponent from './svgs/SvgComponent';
import { SketchPicker } from 'react-color';
import ButtonExample from "./components/ButtonExample";

function App() {
  const [color, setColor] = useState("#A57D70");
  const [backgroundMainColor, setBackgroundMainColor] = useState("#ADE3FF");
  const [backgroundSubColor, setBackgroundSubColor] = useState("#1C7FD4");

  const handleColorChange = color => setColor(color.hex);
  const handleBackgroundColorChange = backgroundMainColor => setBackgroundMainColor( backgroundMainColor.hex);
  const handleBackgroundSubColorChange = backgroundSubColor => setBackgroundSubColor( backgroundSubColor.hex);

  // function handleColorChange(e) {
  //   console.log("Color update! ");
  //   setColor(e.target.value);
  // }

  return (
    <div className="wrap d-flex justify-content-center align-items-center">
      <div className='col-md-8 canvas-container'>
        <h2 className="text-center">SVG Design App</h2>
        <SvgComponent color1={color} backgroundmaincolor={backgroundMainColor} backgroundsubcolor={backgroundSubColor} ></SvgComponent>
      </div>
      <div className='col-md-2 svg-options'>
        <h3>Options</h3>
        {/* <SketchPicker color={color} onChange={handleColorChange} /> */}
        {/* <SketchPicker color={backgroundMainColor} onChange={handleBackgroundColorChange} /> */}
        Color: <ButtonExample color={color} onChange={handleColorChange}></ButtonExample>
        Background Color:<ButtonExample color={backgroundMainColor} onChange={handleBackgroundColorChange}></ButtonExample>
        Background Color 2:<ButtonExample color={backgroundSubColor} onChange={handleBackgroundSubColorChange}></ButtonExample>
        {/* <input type="color" value={backgroundMainColor} onChange={handleBackgroundColorChange} /> */}
        {/* <input type="color" value={backgroundSubColor} onChange={handleBackgroundSubColorChange} /> */}
      </div>
    </div>
  );
}

export default App;
