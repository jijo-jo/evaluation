import React from "react"
import './list.css'
import {Link} from "react-router-dom"

function ListAssets(props){
    return(
        <div className="column">
       <div className="card">
         <div className="container">
          
          <h3 style={{textAlign:'center'}}>{props.details.type}</h3>
         <button className="button"><Link to={`/assets/${props.details.id}`}>View Details</Link></button>
         </div>
        </div>
      </div>
      
      );


}
export default ListAssets;