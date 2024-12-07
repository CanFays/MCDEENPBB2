import './Home.scss'
import BgTransition from "../components/BgTransition"

function Home() {
  return (
    <main className="home">
      <BgTransition colors="GWP" />
      <section className='home_chrono pink-layout'>
        <div>Photos et chrono</div>
      </section>
      <BgTransition colors="PGW" />
      <section className="home_thanks white-layout">
        <div>Texte remerciements</div>
      </section>
      <BgTransition colors="WPG" />
      <section className="home_honeycomb green-layout">
        <div>Honeycomb</div>
      </section>
      <section className="home_partials">
        <div>Section choisie</div>
      </section>

    </main>
  );
}

export default Home;
