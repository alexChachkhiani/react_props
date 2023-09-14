import { useState } from 'react';
import './App.css';
// import Button from "./Components/Buttons/Button.jsx";

function App() {
  // const number = 10;
  const [clickedStatus, setClickedStatus] = useState();
  return (
    <>
    {/* <Button description="this is my first props" color="violet" />
    <Button description="Submit" color="red" /> */}

    {clickedStatus ? <h1>first tag</h1> : <h1>second tag</h1>}
    <button 
    style={{backgroundColor: "red"}}
    onClick={() => setClickedStatus(!clickedStatus)}
    type="button">Toggle</button>
    </>
  )
}

export default App;