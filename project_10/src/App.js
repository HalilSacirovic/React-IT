import logo from './logo.svg';
import './App.css';
import Test from './test';
import { useEffect, useState } from 'react';

function App() {

  const [data,setData] = useState([])

  useEffect(()=>{
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYzMwODA5OTdiOWE3OTM1YzFmM2VjYTQ5MmM2ZWM2OSIsInN1YiI6IjY0YTMwZjU5ODI4OWEwMDBjYWYxMDEwMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7fFFV-tms-KULcUA91x12QzNkjrQwjvIh-PvwHIib_I'
      }
    };
    
    fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
      .then(response => response.json())
      .then((response)=>{
        console.log(response.results)
        setData(response.results)
      })
      .catch(err => console.error(err));
   },[])


  console.log(data)
  

  return (
    <div>
       {data.map((item,index)=>{
        return(
            <div className='test'>
              <div>
                  <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}></img>
              </div>

              <div>
                <h4>Information</h4>

                <p><span>Title:</span>{item.original_title}</p>
                <p><span>Description:</span>{item.overview}</p>
                <p><span>Release Date:</span>{item.release_date}</p>
              </div>



            </div>)
        
       })}
    </div>
  );
}

export default App;
