import { FaFrog } from "react-icons/fa";
export default function Header (){
  return (
    <header className="mad__header">
        <div className="mad__header-container">
            <h1 className="mad__header-title"><FaFrog className="mad__header-icon" /> MAD</h1>
        </div>
    </header>
  )
}

