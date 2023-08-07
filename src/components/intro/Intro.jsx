import './intro.scss'
import Down from '@mui/icons-material/KeyboardDoubleArrowDown';




export default function Intro() {
  return (
    <div className='intro' id='intro'>
      <div className='left'>
        <div className="imgContainer">
          <img src='./assets/Andrea Jared Copy.png' alt='Andrea Jared' />
        </div>
      </div>
        <div className='right'>
          <div className='wrapper'>
            <h2>Hi There, I'm</h2>
            <h1>Andrea Jared</h1>
            <h3>Junior <span>Full-Stack</span> Developer</h3>
        </div>
        <a href='#portfolio'>
        <Down className='icon'/>
        
          </a>
      </div>
    </div>
  )
}

