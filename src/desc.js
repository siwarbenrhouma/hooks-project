import react from 'react'
import {useParams} from 'react-router-dom'
import './Desc.css'
import StarRatingComponent from 'react-star-rating-component';

function Desc ({movies})
{
    const {id} = useParams()
    const movie = movies.find ((mv,idx)=>idx=== +id)
    return (
        <span>

            <img src={movie.image} style={{boxShadow:" 10px 5px 5px black",height:"350PX"}}/>
            <h1>
                {movie.name}<br/>
            </h1>
            <StarRatingComponent
                name='star' /* name of the radio input, it is required */
                value={movie.rate} /* number of selected icon (`0` - none, `1` - first) */
            />
            {movie.trail}
        </span>

    )

}
export default Desc