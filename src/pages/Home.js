import './Home.scss'
import React from 'react';
import BgTransition from "../components/BgTransition"
import PartialGuestbook from '../components/PartialGuestbook';
import PartialAlbum from "../components/PartialAlbum";
import PartialInvitation from "../components/PartialInvitation";
import PartialProgram from "../components/PartialProgram";
import PartialSpeech from "../components/PartialSpeech";
import Carousel from "../components/Carousel"

function Home({ selectedPartial, handlePartialSection, partialComponents }) {

  return (
    <main className="home">
      <BgTransition colors="GWP" />
      <section className='home_chrono pink-layout'>
        <div>Photos et chrono</div>
        <div>test carousel :</div>
        <Carousel itemsName="GB" />
      </section>
      <BgTransition colors="PGW" />
      <section className="home_thanks white-layout">
        <div>Texte remerciements</div>
      </section>
      <BgTransition colors="WPG" />
      <section className="home_honeycomb green-layout">
        <div>Honeycomb</div>

            {Object.keys(partialComponents).map((key) => (
              <button key={key} onClick={() => handlePartialSection(key)}>
                {partialComponents[key]}
              </button>
            ))}

      </section>


      <section className={selectedPartial ? 'home_partials' : 'd-none home_partials'}>

        <BgTransition colors="GWP" />
        <div className='pink-layout'>
          <div>
            {selectedPartial === "Guestbook" && <PartialGuestbook />}
            {selectedPartial === "Program" && <PartialProgram />}
            {selectedPartial === "Invitation" && <PartialInvitation />}
            {selectedPartial === "Speech" && <PartialSpeech />}
            {selectedPartial === "Album" && <PartialAlbum />}
          </div>
        </div>
        <BgTransition colors="PWG" />

      </section>

    </main>
  );
}

export default Home;
