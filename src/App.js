import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SliderImg from './Components/SliderImg/SliderImg';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="App ">
      <div className='shadow p-3  bg-body rounded'>
        <h1 className='text-info'>" Shri Krishna "</h1>
      </div>
      <div className='row shadow-lg p-3  bg-body rounded'>
        <SliderImg></SliderImg>
      </div>
    </div>
  );
}

export default App;
