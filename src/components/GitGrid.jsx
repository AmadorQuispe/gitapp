import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GitGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category)
  return (
    <>
      <h3>{category}</h3>
      {loading && <span>Cargando...</span>}
      <div className='card-grid'>
        {
          images.map(img => (
            <GifGridItem key={img.id} {...img} />
          ))
        }
      </div>
    </>
  )
}
