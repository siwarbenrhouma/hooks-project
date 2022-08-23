 
  import './navbar.css'
  import StarRatingComponent from 'react-star-rating-component';

  function Navbar ()
  {

    return (
    <div id="ff">
    
    <StarRatingComponent
    name='rating' /* name of the radio input, it is required */
    
    
  
/>
    <input type={"search"} style={{borderRadius: "30px"}} />
    <button><h6>search</h6></button>
    
    </div >)
  }
  export default Navbar