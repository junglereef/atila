import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/a-logo.png'
import Logo from './Logo'
import './index.scss'

const Home = () => {
  
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['t', 'i', 'l', 'a', '', 'i', 'g', 'l','e','s','i','a','s']
  const jobArray = [
    'D',
    'e',
    's',
    'e',
    'n',
    'v',
    'o',
    'l',
    'v',
    'e',
    'd',
    'o',
    'r',
  ]

  // useEffect(() => {
  //   return setTimeout(() => {
  //     setLetterClass('text-animate-hover')
  //   }, 40000)
  // }, [])

  return (
    <>

      <div className='container home-page'>
      <div className="text-zone">
        <h1>
        <img src={LogoTitle} alt='developer' />
             <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
        </h1>
        <h2>Front-end / JavaScript / PHP</h2>
        <Link to="/contact" className='flat-button'>Entre em Contato</Link> 
      </div>
      <Logo />
    </div>
    <Loader type="pacman" />
  </>
  );
}

export default Home
