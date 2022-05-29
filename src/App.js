import './App.css';
import Textbody from './Text/Textbody';
import adisavector from './logo.svg';
import SemiTitle from './Text/SemiTitle';
import Topic from './Text/Topic';
import Btn from './Button/Btn';

function App() {
  return (
    <div className="App">
      <div>
        <SemiTitle topic1="Freelance Digital Marketer" />
        <Topic topic2="I Am Adekoye Adewale" />
        <Textbody text="I create reliable..." />
        <Btn btn="DOWNLOAD RESUME"/>
      </div>
      <div>
        <picture>
          <img src={adisavector} className='adisavector' alt='adisaempire' />
        </picture>
      </div>
    </div>
  );
}

export default App;
