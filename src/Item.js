import React from 'react'
import StarRatingComponent from 'react-star-rating-component';
import './MovieList.css';


function Item(props) {
  return (
    <div >
      <img  style={{height:"350PX",width:"250PX"}} src={props.image}className="card"></img>
      <span>{props.name}</span>
      <div >
      <StarRatingComponent
    name='star' /* name of the radio input, it is required */
    value={props.rate} /* number of selected icon (`0` - none, `1` - first) */
/>
      </div>  
    </div>
  )
}

export default Item
