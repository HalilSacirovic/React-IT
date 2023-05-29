import React from 'react'
import { Link } from 'react-router-dom'

const Blog = () => {
  return (
    <div>
        <div>
            <h3>This</h3>
            <p>Text text text</p>
           <Link to={"/details"} ><button>TS</button> </Link>
        </div>
    </div>
  )
}


export default Blog