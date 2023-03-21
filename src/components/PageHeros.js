import React, { useEffect } from 'react'
import HeroCard from './HeroCard';

const PageHeros = (props) => {
  const heros = props.heros;



  return (
    <>
      <div>PageHeros</div>
      <div className='heros-list'>
        {
          heros.map((hero) => {
            return (
              <HeroCard key={hero.id} hero={hero} />
            )
          })
        }
      </div>
    </>
  )
}

export default PageHeros