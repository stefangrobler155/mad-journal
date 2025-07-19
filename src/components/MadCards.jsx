import { data } from '../data/data'
import { FaPhotoVideo } from "react-icons/fa";
import { IoIosPin } from "react-icons/io";
import { ImSad2 } from "react-icons/im";

const MadCards = () => {
  return (
    <div className='mad__cards-container'>
        { data.length === 0 ? (
            <div className="mad__no-entries_cont">
                <ImSad2 className="mad__no-entries-icon" />
              <p className="mad__no-entries">No entries available.</p>     
            </div>
        ) : (
            <p className="mad__entries-count">Total Entries: {data.length}</p>
        )}      
        {
            data.map((entry) => (
                <div key={entry.id} className="mad__card_cont">
                    <div className="mad__card-img_cont">
                        {entry.image && <img src={entry.image} alt={entry.title} className="mad__card-image" />} 
                    </div>
                    <div className="mad__card-text_cont">
                        <span className='mad__card-text_meta'><IoIosPin className='icon' />{entry.location}
                        <a href="/" target="_blank" rel="noopener noreferrer">{entry.link}</a>
                        </span>                            
                        <h2 className="mad__card-title"><span><FaPhotoVideo /></span>{entry.title}</h2>
                        <p className="mad__card-date">{new Date(entry.date).toLocaleDateString()}</p> 
                        <p className="mad__card-content">{entry.content}</p>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default MadCards