import React, { useEffect, useState } from 'react'
import './portfolio.scss';
import {Search} from '@mui/icons-material';
import PortfolioList from '../PortfolioList/PortfolioList';
import 
{ featurePortfolio,
  webPortfolio,
  reactPortfolio,
  mernPortfolio,
  contentPorfolio,
} 
from '../../Data';

function Portfolio() {

  const [selected, setSelected] = useState('featured');
  const [data, setData] = useState([]);

  const List = [
    {
      id: 'featured',
      title: 'Featured'
    },
    {
      id: 'web',
      title: 'Web App'
    },
    {
      id: 'react',
      title: 'React App'
    },
    {
      id: 'mern',
      title: 'MERN App'
    }

  ];

  useEffect(()=>{
    switch(selected){
      case 'featured':
        setData(featurePortfolio);
        break;

      case 'web':
        setData(webPortfolio);
        break;

      case 'react':
        setData(reactPortfolio);
        break;

      case 'mern':
        setData(mernPortfolio);
        break;

      default:
        setSelected(featurePortfolio);
    }
  }, [selected]);

  return (

    <div className='portfolio' id='portfolio'>
      <h1>Portfolio</h1>
      <ul>
        {
          List.map((item, index) =>(
            <PortfolioList 
            title={item.title}
            key={index}
            active = {selected === item.id}
            setSelected={setSelected}
            id={item.id} />
          ))
        }
      </ul>
      <div className="container">
        {data.map((item, index)=>(
          <div className="item" key={index}>
          <img src={item.img} alt="" />
          <h3>{item.title}</h3>
          <Search className='icon'/>
        </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio