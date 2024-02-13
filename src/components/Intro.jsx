import introVideo from '../assets/introvideo.mp4'
import { Link } from 'react-router-dom'

export default function Intro(){
  return (
    <div className='intro'>
      <video src={introVideo} autoPlay loop muted/>
      <div className='ENTER'>
        <h1> <a href='/landingpage'>ENTER </a></h1>
      </div>
    </div>
  )
}

