import React from 'react'
import s from './style.module.css'
import { Link } from 'react-router-dom'
import { ClipLoader } from 'react-spinners'

const CategoryItem = ({id, title, image}) => (
    <div className={s.container}>
        <Link to={`/catalog/${id}`}>
            <img src={`https://garden-back-f1yi.onrender.com${image}`} alt={title} />
            <p>
              {
                title === undefined 
                ? <ClipLoader
                    color={'green'}
                    loading={true}
                    size={150}
                    aria-label='Load Spinner'
                    data-testid="loader"
                  /> 
                : title
              }
          </p>
        </Link>
    </div>
  )

export default CategoryItem