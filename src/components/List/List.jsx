import React from 'react'
import './List.css'
const List = ({ array, handleEdit }) => {
  return (
    <div className='list'>
      {array.map((item, index) => {
        return (
          <div
            className='card'
            key={index}
            onClick={(e) => handleEdit(e, item.id)}
          >
            <div className='name'>{item.name}</div>
            <div className='img'>
              {' '}
              <img
                src={item.src}
                alt=''
              />
            </div>
            <div className='info-wrapper'>
              <div className='fuel'>fuel: {item.fuel}</div>
              <div className='people'>number of people: {item.people}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default List
