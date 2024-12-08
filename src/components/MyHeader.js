import "./MyHeader.scss";
import Monogramme from '../assets/icons/SB.svg'

function MyHeader( {handlePartialSection, partialComponents } ) {

  return (
    <header className="green-layout">
       <img src={Monogramme} alt="Monogramme élégant BerSyl"/>
        <div>
          <h1>Bienvenue au <span className="alert">BERSYL</span>  wedding !!!</h1>
          <h3>( le mariage que plus personne n'attendait ! )</h3>
        </div>
        <nav>
          <ul>
            {Object.keys(partialComponents).map((key) => (
            <li key={key} onClick={() => handlePartialSection(key)}>
              {partialComponents[key]}
            </li>
            ))}
          </ul>
        </nav>
    </header>
  );
}

export default MyHeader;
