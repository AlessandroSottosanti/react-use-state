import { useState } from 'react'
import './App.css'
import languagesObj from './assets/languages.js';
import Card from './components/Card.jsx';
import Buttons from './components/Buttons.jsx';
import AppHeader from './components/AppHeader.jsx';

function App() {
  const languages = languagesObj.languages;

  const [curLanguageIndex, setLanguages] = useState(null)




  let curLanguage = languages[curLanguageIndex];

  return (
    <>
      <AppHeader />

      <div className="container">
        <div className='d-flex justify-content-start m-3'>
          <span className='mb-3'>
            {languages.map((language, index) => (
              <Buttons key={language.id} id={language.id} title={language.title} onClick={() => setLanguages(index)} btnColor={index === curLanguageIndex ? 'btn-warning' : 'btn-primary'} />
            ))}
          </span>
        </div>
      </div>


      {curLanguage ?
        <Card key={curLanguage.id} id={curLanguage.id} title={curLanguage.title} description={curLanguage.description} />
        :
        <div className='container'>

          <div className="card p-0 m-3">
            
            <div className="card-body">
              <p>Nessun linguaggio selezionato.</p>
            </div>
          </div>
        </div>
      }

    </>
  )
}

export default App
