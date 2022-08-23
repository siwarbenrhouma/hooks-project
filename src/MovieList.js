import React, { useRef, useState } from 'react'
import Item from './Item'
import Navbar from './navbar';
import './MovieList.css'
import AddMovie from './AddMovie'
function MovieList() {

    const [movies,setMovie]=useState(
           [
              {name:"jhon wick",image:"https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_SX300.jpg",rate:"3"},
              {name:"creed",image:"https://upload.wikimedia.org/wikipedia/en/2/24/Creed_poster.jpg",rate:"3"},
              {name:"avatar",image:"https://lumiere-a.akamaihd.net/v1/images/p_avatar_thewayofwater_97_v3_4cb5b11f.png",rate:"4"},
              {name:"uncharted",image:"https://m.media-amazon.com/images/M/MV5BMWEwNjhkYzYtNjgzYy00YTY2LThjYWYtYzViMGJkZTI4Y2MyXkEyXkFqcGdeQXVyNTM0OTY1OQ@@._V1_FMjpg_UX1000_.jpg",rate:5}
           



])

 
 
return (
    <div  >
        <Navbar ></Navbar>
        <div className='movies'>
      {movies.map((e) => (
        
        <Item name={e.name} image={e.image} rate={e.rate}></Item>
       
      ))}
    </div>

    <AddMovie movies={movies} setMovie={setMovie}> </AddMovie>
    {/* <button onClick={AddMovie}>add movie</button> */}
    </div>
  );
    
    
   
}

export default MovieList
