
import './App.css';
import Testimonials from './components/Testimonials';
import data from './data';

function App() {
  return (
    <div className="App">
      <div>
        <h1>Our Testimonials</h1>
      </div>
      <div className='line'></div>
      <div>
        <Testimonials data={data}/>
      </div>
    </div>
  );
}

export default App;
