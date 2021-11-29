const TripList = ({ trips }) => {
    return (
        <>
        {trips.map((trip) => {
          const { id, name, info, price, image } = trip;
          return (
            <article key={id} className='trip-card'>
              <img src={image} alt={name} />
              <div className='trip-card-content'>
                <div className='trip-card-content-header'>
                    <h2>{name}</h2>
                    <p>{price}</p>
                </div>
                <p>{info}</p>
                <button className='card-btn'>Explore</button>
              </div>
            </article>
          );
        })}
      </>
    );
  };
  
export default TripList;