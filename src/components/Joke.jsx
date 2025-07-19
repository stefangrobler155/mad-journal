

export default function Joke(props) {
    
  return (
    <> 
    <div className="mad__joke-container" key={props.id}>
        
      <h2 className="mad__joke-heading">{props.heading}</h2>
      <p className="mad__joke-subheading">{props.subheading}</p>
        <div className="mad__joke-image-container">
            {props.image && <img src={props.image} alt="Joke" className="mad__joke-image" />}
            
        </div>
        {props.title && <h3 className="mad__joke-title">{props.title}</h3>}
        <p className="mad__joke-content">{props.content}</p>
    </div>
    </>
    
  );
}