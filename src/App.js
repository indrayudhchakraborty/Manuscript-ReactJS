import Navbar from './components/Navbar';
import NoteForm from './components/NoteForm';
import About from './components/About';
// import Notify from './components/Notify';
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import './App.css';

function App() {
  const [mode, setMode] = useState('bg-white');
  const [NavTextColor, setNavTextColor] = useState('lighty')
  const [NoteColor, setNoteColor] = useState('lightyNote')
  const [txtColor, setTxtColor] = useState('lightyTxt')

  // const [alert, setAlert] = useState("")
  // const [alertClass, setAlertClass] = useState("")

  // const [Display, setDisplay] = useState("none")

  // if (alert === "") {
  //   setDisplay("displayStyleN")
  // }
  // else {
  //   setDisplay("displayStyle")
  // }

  const toggleMode = () => {
    if (mode === 'bg-white') {
      setMode('bg-darky');
      setNavTextColor('darky');
      setNoteColor("darkyNote");
      document.body.style.backgroundColor = '#18191A'
      setTxtColor('darkyTxt')
    }
    else{
      setMode('bg-white');
      setNavTextColor('lighty');
      setNoteColor("lightyNote");
      document.body.style.backgroundColor = '#fff'
      setTxtColor('lightyTxt')
    }
  }
  return (
    <>
    <div className="App">
      <Navbar title="ManuScript" mode={mode} titleColor={NavTextColor} toggleMode={toggleMode}/>
      <Router>
      <div className="container">
      <Switch>
          <Route exact path="/"> <NoteForm color={NoteColor} colorTxt={txtColor}/> </Route>
          <Route exact path="/about"> <About styler={NoteColor} /> </Route>
      </Switch>
        </div>
        </Router>
    </div>
    </>
  );
}

export default App;
