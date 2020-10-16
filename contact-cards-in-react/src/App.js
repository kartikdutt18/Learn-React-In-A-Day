import React from 'react'
import ContactCard from './components/ContactCard'
import './style.css'
import jokesData from './data/contacts'

function ContactApp()
{
  const contacts = jokesData.map(joke => <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />)
  return (
    <div className="contacts">
      {contacts}
    </div>)
}

export default ContactApp;