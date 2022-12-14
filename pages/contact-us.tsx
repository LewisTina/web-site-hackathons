import Head from 'next/head'
import Image from 'next/image'
import '../styles/layout.module.scss'
import Layout from '../src/components/Layout'
import $ from "jquery"

export default function Home() {

  const growUp = () => {
    $(`#message`).on('input', function () {
        this.style.height = 'auto';
          
        this.style.height = 
                (this.scrollHeight) + 'px';
    });
}

  return (
    <Layout title='Nous Contacter ·  BDE Estiam Lyon'>
    <div className="pageContent">
      <form action="" className='form'>
        <div className="input">
          <label htmlFor="email">Adresse Mail</label><br />
          <input type="mail" placeholder='Votre adresse mail' id='email'/>
        </div>

        <div className="input">
          <label htmlFor="message">Message</label><br />
          <textarea placeholder='Tapez votre message ici' id='message' onInput={growUp}/>
        </div>

        <button className='button primary' type='submit'>
            {"Envoyer"}
          </button>
      </form>
    </div>
    </Layout>
  )
}
