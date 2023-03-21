import React from 'react'
import { useNavigate } from 'react-router-dom';

function HeroCard(props) {
  const navigate = useNavigate();



  const hero = props.hero;
  const id = hero.id;

  const handleClickHero = (e) => {
    navigate("/hero/" + id);
  }

  return (
    <div className='hero-card' onClick={handleClickHero}>{hero.name}</div>
  )
}

export default HeroCard