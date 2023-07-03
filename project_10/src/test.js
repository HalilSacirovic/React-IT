import React, { useState } from 'react'

 const Test = () => {


    const [data,setdata] = useState()

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYzMwODA5OTdiOWE3OTM1YzFmM2VjYTQ5MmM2ZWM2OSIsInN1YiI6IjY0YTMwZjU5ODI4OWEwMDBjYWYxMDEwMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7fFFV-tms-KULcUA91x12QzNkjrQwjvIh-PvwHIib_I'
        }
      };
      
      fetch('https://api.themoviedb.org/3/genre/tv/list?language=en', options)
        .then(response => response.json())
        .then((response) => {
            
            setdata(response.genres)
        })
        .catch(err => console.error(err));

        console.log(data)

  return (
    <div>
       {data.map((item,index)=>{
        return(
            <div>
            
                <p>{item.name}</p>

            </div>)
        
       })}
    </div>
  )
}
 
export default Test