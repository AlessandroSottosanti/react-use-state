import { useState } from 'react'
import './App.css'
import languagesObj from './assets/languages.js';
import Card from './components/Card.jsx';
import Buttons from './components/Buttons.jsx';
import AppHeader from './components/AppHeader.jsx';

function App() {
  const languages = languagesObj.languages;

  const [curLanguageIndex, setLanguages] = useState(0)

  let curLanguage = languages[curLanguageIndex];

  return (
    <>
      <AppHeader />

<div className="container">
<div className='d-flex justify-content-start m-3'>
        <span className='mb-3'>
          {languages.map((language) => (
            <Buttons key={language.id} id={language.id} title={language.title} />
          ))}
        </span>
      </div>
</div>
      

      {
        <Card key={curLanguage.id} id={curLanguage.id} title={curLanguage.title} description={curLanguage.description} />
      }

    </>
  )
}

export default App
