import { useState } from 'react'
import './App.css'
import languagesObj from './assets/languages.js';
import Card from './components/Card.jsx';
import Buttons from './components/Buttons.jsx';

function App() {
  const languages = languagesObj.languages;
  return (
    <>
      <div className='container'>
        <ul className='d-flex justify-content-center align-items-center'>
          {languages.map((language) => (
            <Buttons key={language.id} id={language.id} title={language.title} />
          ))}
        </ul>
      </div>

      {languages.map((language) => (
        <Card key={language.id} id={language.id} title={language.title} description={language.description} />
      ))}

    </>
  )
}

export default App
