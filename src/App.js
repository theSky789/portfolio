import './App.css';
import Aboutme from './Component/Aboutme';
import Resume from './Component/Resume';
import Top from './Component/Top';

function App() {
  return (
    <>
    
        <div className='main-head'>
          <div className='container top-section'>
            <Top />
          </div>
          <div className='container about-me'>
            <Aboutme/>
          </div>
          <div className='container resume'>
            <Resume/>
          </div>
          </div>   
    </>
  );
}

export default App;
