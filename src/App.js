import './App.css';
import Textbody from './Text/Textbody';
import adisavector from './logo.svg';
import SemiTitle from './Text/SemiTitle';
import Topic from './Text/Topic';


function App() {
  return (
    <div className="App">
      <div>
        <SemiTitle/>
        <Topic/>
        <Textbody/>
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
