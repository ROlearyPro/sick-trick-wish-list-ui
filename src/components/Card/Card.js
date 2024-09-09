// import './Card.css';

function Card({ name, stance, obstacle, tutorial, id }){
    return (
      <div className='card'>
        <h3>{name}</h3>
        <h4>{stance}</h4>
        <p>{obstacle}</p>
        <p>{tutorial}</p>
        <div>{id}</div>
      </div>
    )
  }
  

export default Card;