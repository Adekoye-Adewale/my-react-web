import './AboutSection.css';
import Textbody from '../Text/Textbody';
import adewale from '../Images/Adekoye-Adewale.png';
import SemiTitle from '../Text/SemiTitle';
import Topic from '../Text/Topic';

function AboutSection() {
  return (
    <div className="AbtSec">
      <div>
        <picture>
          <img src={adewale} className='adewale' alt='adewale' />
        </picture>
      </div>
      <div>
        <SemiTitle topic1="About Adisa Empire" />
        <Topic topic2="Quality and Experience in every detail" />
        <Textbody text="My name is Adekoye Adewale..." />
      </div>
      
    </div>
  );
}

export default AboutSection;