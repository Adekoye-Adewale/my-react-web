import './Growth.css';
import SemiTitle from '../Text/SemiTitle';
import Topic from '../Text/Topic';
import Facts from '../Facts/Facts';

function Growth() {
    return (
      <div className="growth">
        <SemiTitle 
            topic1="My growth" />
        <Topic 
            topic2="I Have Grown Stronger Over The Past 3 Years" />

        <div className='fact'>
            <Facts 
                factnumber='30+' 
                facttext='Satisfied Clients' />
            <Facts 
                factnumber='45+' 
                facttext='Completed Projects' />
            <Facts 
                factnumber='15+' 
                facttext='Design Tools' />
        </div>
      </div>
    );
  }
  
  export default Growth;