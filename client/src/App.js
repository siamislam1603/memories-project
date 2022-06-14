import './App.css';
import {Routes, Route,BrowserRouter} from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Auth from './components/Auth/Auth';

function App() {
  return (
    <BrowserRouter>
        <div style={{overflowY:'auto',height:'100vh'}}>
          <div className='container'>
              <Header></Header>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <Routes>
              <Route path='/auth' element={<Auth/>}/>
            </Routes>
            </div>
        </div>
    </BrowserRouter>
  );
}

export default App;