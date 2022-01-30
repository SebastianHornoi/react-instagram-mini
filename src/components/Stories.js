import { useFetch } from '../custom_hooks/useFetch'
import { useState } from 'react'
import './Stories.css'


export default function Stories() {
  const url = 'http://localhost:3000/stories'
  const { data } = useFetch(url)

  return (
    <div className='stories__container'>
      {
        data && data.map((storie) => (
          <div className="storie__box" key={storie.id}>
            <img className='foto__storia' src={storie.foto} alt="" />
            <p className='utente__storia'>{storie.nomeUtente}</p>
          </div>
        ))
      }
    </div>
  )
}
