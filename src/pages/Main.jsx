import './Main.scss'

import { Link } from 'react-router-dom'

import { FaInstagram, FaGithub } from 'react-icons/fa6'

function Main () {
  return (
    <div className='Main'>
      <section className='title'>
        <img src='/logo.png' alt='' />
        <h1>GP TRACKER</h1>
        <h2>Experience Formula 1 like never before</h2>
      </section>
      <section className='info'>
        <article>
          <Link to='/calendar'>
            <h2>Calendar</h2>
          </Link>
          <p>
            Get ready to rev your engines! From iconic circuits to
            heart-pounding action, we've got your race schedule covered.
          </p>
        </article>
        <article>
          <Link to='/standings/drivers'>
            <h2>Standings</h2>
          </Link>
          <p>
            Dive into the statistics, witness the drama, and track the rise of
            champions in the making.
          </p>
        </article>
        <article>
          <Link to='/champions'>
            <h2>Hall of Fame</h2>
          </Link>
          <p>
            Experience the legacy of F1 paying tribute to the legends who
            conquered the track, showcasing every F1 champion in history.
          </p>
        </article>
      </section>
      <footer>
        <header>
          <a href='https://www.instagram.com/jquiroz___/'>
            <FaInstagram />
          </a>
          <a href='https://github.com/JQui-dev'>
            <FaGithub />
          </a>
        </header>
        <section>
          <a href='https://jqui-dev.netlify.app/'>Portfolio</a>
          <a href='https://ergast.com/api/f1' target='_BLANK' rel='noreferrer'>
            API
          </a>
        </section>
      </footer>
    </div>
  )
}

export default Main
