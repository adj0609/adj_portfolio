import './portfolio.scss'
import PortfolioList from '../portfolioList/PortfolioList';
import {useEffect, useState} from 'react';

export default function Portfolio() {
  const [selected, setSelected] = useState('featured');
  const [ data, setData] = useState([]);
  const list = [
    {
      id: 'featured',
      title: 'Featured',
    },

    { id: 'MERN', 
    title: 'MERN Stack' 
    },

    {
      id: 'React AND SQL',
      title: 'React',
    },

    {
      id: 'WordPress',
      title: 'WordPress',
    }
  ];

  useEffect(()=>{

    switch(selected){
      case 'featured':
        setData(featuredPortfolio);
        break;
        case 'MERN':
          setData(mernPortfolio);
          break;
          case 'REACT and SQL':
            setData(reactAndSQLPortfolio);
            break;
            case 'wordpress':
              setData(wordPressPortfolio);
              break;
                case 'content':
                  setData(contentPortfolio);
                  break;
                  default:
                setData(featuredPortfolio);
    }
  }, [selected]);
  return (
    <div className='portfolio' id = 'portfolio'>
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList title={item.title} 
          active={selected === item.id} 
          setSelected={setSelected}
          id={item.id}/>
        ))}
      </ul>
      <div className='container'>
        {data.map(d=>)}
        <div className='item'>
          <img src='./assets/BookNook.png' alt='' />
          <h3>Book Nook 2.0</h3>
          </div>
    </div>
    </div>







    
  
    
 
  
  
  )
}
