
import './App.css';
import Calculator from './components/Calculator';
function App() {
  return (
    <>
    <div className='container'>
    <h1 className='text-center mt-5'>Calculator</h1>
    <div className='row'>
            <div className='col-lg-4'></div>
            <div className='col-lg-4'><Calculator /></div>
            <div className='col-lg-4'></div>
        </div>
    </div>
    </>
  );
}

export default App;
