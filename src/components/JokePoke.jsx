

export default function JokePoke(props) {
    
  return (
    <> 
    { props.jokePokeData && props.jokePokeData.map((joke) => (
        
        <div className="mad__joke-container" key={joke.id}>
            
          <h2 className="mad__joke-heading">{joke.heading}</h2>
            
            {joke.question && <h3 className="mad__joke-title">{joke.question}</h3>}
            {joke.answer && <p className="mad__joke-content">{joke.answer}</p>}
        </div> 
        ))}
    </>
    
  );
}