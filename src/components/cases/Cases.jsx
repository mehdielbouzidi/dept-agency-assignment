import React from 'react'
import caseData from '../../data/cases.json'
import { Link } from 'react-router-dom'

const CaseItems = () => {
    return (
        caseData.map((item, index) => {
            return (
                <Link to='/case' key={index}>
                    <article  className="case__item">
                        <img className="case__image" src={item.img.src} alt={item.img.alt}/>
                        <h4 className="case__name">{ item.brand }</h4>
                        <h3 className="case__title">{ item.title }</h3>
                        <span className="case__link">view case</span>
                    </article>
                </Link>
            )
        })
    )
}

const Cases = () => {
  return (
      <div className='case container pb-5'>
          <CaseItems/>
      </div>
  )
}

export default Cases