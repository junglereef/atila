import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../../components/AnimatedLetters'
import LogoTitle from '../../assets/images/a-logo.png'
import Logo from '../../components/Logo'
import './index.scss'

const Home = () => {

  
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['t', 'i', 'l', 'a', '', 'I', 'g', 'l','e','s','i','a','s']
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

  useEffect(() => {
   setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

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
        <h2>JavaScript / React / PHP</h2>
        <Link to="/contact" className='flat-button'>Entre em Contato</Link> 
      </div>
      {/* <Logo /> */}
      {/* <div className='pacManPupet' ><Loader type="pacman" /></div> */}
    </div>
      
      
  </>
  );
}

export default Home
