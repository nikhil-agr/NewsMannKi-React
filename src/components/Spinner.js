import React from 'react'
import loading from './loading.gif'

const Spinner = ()=> {
  
    return (
      <div className='text-center'>
            <img className='my-3' src={loading} width="80px" height="80px" alt="loading" />
      </div>
    )
}

export default Spinner
