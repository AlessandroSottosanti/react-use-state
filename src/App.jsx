import { useState } from 'react'
import './App.css'
import languagesObj from './assets/languages.js';
import Card from './components/Card.jsx';

function App() {
  const languages = languagesObj.languages; 
  return (
    <>
    {languages.map((language) => (
      <Card key={language.id} id={language.id} title={language.title} description={language.description} />
    ))}
        
    </>
  )
}

export default App
