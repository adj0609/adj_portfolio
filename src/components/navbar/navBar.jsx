import './navBar.scss'
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import EmailIcon from '@mui/icons-material/Email';

export default function navBar({menuOpen, setMenuOpen}) {
  return (
    <div className={'navBar ' + (menuOpen && 'active')}>
      <div className="wrapper">
        <div className="left">
          <a href='#intro' className='logo'>.NEVER STOP LEARNING</a>
          <div className="itemContainer">
            <AddIcCallIcon className='icon'/>
            <span>3302807465</span>
          </div>
          <div className="itemContainer">
            <EmailIcon className='icon'/>
             <span>andreadjared@gmail.com</span>
          </div>
          </div>
          <div className='right'> 
          <div className="hamburger" onClick={() =>setMenuOpen(!menuOpen)}>
            <span className='line1'></span> 
            <span className='line2'></span>      
            <span className='line3'></span>      
            </div>
          </div>
      </div>
    </div>
  )
}
