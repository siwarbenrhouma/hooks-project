import React, { useRef, useState } from 'react'
import Item from './Item'
import Navbar from './navbar';
import './MovieList.css'
import AddMovie from './AddMovie'
import { BrowserRouter, NavLink, Route, Routes}from "react-router-dom"
import Desc from './desc.js'
function MovieList() {

    const [movies,setMovie]=useState(
           [
              {name:"john wick",image:"https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_SX300.jpg",rate:"3",trail:<iframe width="500" height="400" src="https://www.youtube.com/embed/C0BMx-qxsP4" title="John Wick Official Trailer #1 (2014) - Keanu Reeves, Willem Dafoe Movie HD" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>},
              {name:"creed",image:"https://upload.wikimedia.org/wikipedia/en/2/24/Creed_poster.jpg",rate:"3",trail:<iframe width="885" height="498" src="https://www.youtube.com/embed/Uv554B7YHk4" title="Creed - Official Trailer [HD]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>},
              {name:"avatar",image:"https://lumiere-a.akamaihd.net/v1/images/p_avatar_thewayofwater_97_v3_4cb5b11f.png",rate:"4",trail:<iframe width="885" height="498" src="https://www.youtube.com/embed/5PSNL1qE6VY" title="Avatar | Official Trailer (HD) | 20th Century FOX" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>},
              {name:"uncharted",image:"https://universnews.tn/wp-content/uploads/2022/05/uncharted-critique-big__w1200.jpg",rate:5,trail:<iframe width="885" height="498" src="https://www.youtube.com/embed/eHp3MbsCbMg" title="UNCHARTED - Official Trailer (HD)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>}
           



])

 
 
return (
    <div  >
      
      <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <>
           <Navbar ></Navbar>
          
      <AddMovie movies={movies} setMovie={setMovie}> </AddMovie>
       
        <div className='movies'>
      {movies.map((e,index ) => (
        <NavLink to={"/"+index}>
          <Item name={e.name} image={e.image} rate={e.rate}></Item>
        </NavLink>
        
        
       
      ))}
    </div>

    </>
      }></Route>
      <Route path='/:id' element={ <Desc movies={movies}></Desc> }></Route>
      
    </Routes>
    </BrowserRouter>
    </div>
  );
    
    
   
}

export default MovieList
