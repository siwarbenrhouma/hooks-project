import React from 'react'
import StarRatingComponent from 'react-star-rating-component';


function Item(props) {
  return (
    <div >
      <img  style={{height:"350PX"}} src={props.image}></img>
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
