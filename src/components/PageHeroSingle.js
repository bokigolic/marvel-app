import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const PageHeroSingle = (props) => {
  const { id } = useParams();

  useEffect(() => {
    
  }, [id])

  return (
    <>
      <div>PageHeroSingle</div>
      <p>ID: {id}</p>
    </>
  )
}

export default PageHeroSingle