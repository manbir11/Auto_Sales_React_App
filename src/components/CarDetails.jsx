import React from 'react';
import './CarDetails.css';
 


const CarDetails = ({details}) => {

 

  return (
    <div className='row' >
      
      
        {details.map((item)=>(
           
      
             <div className="CarDetails"  style={{textAlign:"center"}}>
            
            <img src="../Images/car1.jpeg" alt='car'/>
              <h2 style={{fontWeight:"bolder"}}>{item.name}</h2>
              <p>{item.model}</p>
              <p>{item.color}</p>
              <p>{item.typeModel}</p>
              <button className="btn btn-secondary" style={{color:"pink",backgroundColor:"black"}}>Add to Cart</button>
            
              </div>
              
        ))}
        
    </div>
  )
}

export default CarDetails;