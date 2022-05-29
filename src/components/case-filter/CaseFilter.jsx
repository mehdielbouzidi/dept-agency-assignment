import React from 'react'
import caseData from '../../data/cases.json'

const CaseFilter = () => {
    const option = [...new Set(caseData.map(item => item.category))];

    return (
        <div className='case-filter container ptb-3'>
            <label>Show me</label>
            <select id="show">
                {option.map((option, index) => {
                    return ( <option key={index} value={option}> {option}</option> )
                })}
            </select>
      </div>
    )
}

export default CaseFilter