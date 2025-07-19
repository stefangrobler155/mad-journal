
import { FaPhotoVideo } from "react-icons/fa";
import { IoIosPin } from "react-icons/io";

const MadCardsPropsDes = (props) => {
    // console.log('MadCardsProps', props);
  return (
    <div className='mad__cards-container'>
        <h1 style={{color: "grey", padding: "2rem 0 0 0", textAlign: "left", fontSize: "2rem"}}>{props.heading}</h1>
        <p style={{color: "grey", padding: "0 0 1rem 0", textAlign: "left", fontSize: "1.2rem"}}>{props.subheading}</p>
        <div key={props.id} className="mad__card_cont">
            <div className="mad__card-img_cont">
                <img src={props.image} alt={props.title} className="mad__card-image" /> 
            </div>
            <div className="mad__card-text_cont">
                <span className='mad__card-text_meta'><IoIosPin className='icon' />{props.location}
                <a href="/" target="_blank" rel="noopener noreferrer">{props.link}</a>
                </span>                            
                <h2 className="mad__card-title"><span><FaPhotoVideo /></span>{props.title}</h2>
                <p className="mad__card-date">{props.date}</p> 
                <p className="mad__card-content">{props.content}</p>
                <code>
                    <pre>
                        {props.sampleText}
                    </pre>
                </code>
            </div>
            
        </div>
    </div>
  )
}

export default MadCardsPropsDes