import GGG from '../assets/icons/GGG.svg'
import GPW from '../assets/icons/GPW.svg'
import GPWP from '../assets/icons/GPWP.svg'
import GPWsoft from '../assets/icons/GPWsoft.svg'
import GWP from '../assets/icons/GWP.svg'
import PGW from '../assets/icons/PGW.svg'
import PWG from '../assets/icons/PWG.svg'
import WPG from '../assets/icons/WPG.svg'
// vérif si toutes use !!!

const imageMapping = {
  GGG: GGG, GPW: GPW, GPWP: GPWP, GPWsoft: GPWsoft, GWP: GWP, PGW: PGW, PWG: PWG, WPG: WPG,
};

function BgTransition({ colors }) {
  const imageSrc = imageMapping[colors];

  return (
    <section className="transition">
      {imageSrc &&
        <img src={imageSrc} alt="Transition colorée" style={{ width: '100%' }} />
      }
    </section>
  )
}

export default BgTransition;
