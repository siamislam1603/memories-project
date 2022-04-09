import './App.css';
import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';
import LogoSVG from './components/SVGs/LogoSVG';
import {useDispatch} from 'react-redux';
import { useEffect } from 'react';
import {getPosts} from './actions/posts';

function App() {
  const dispatch=useDispatch();
  useEffect(() => {
    dispatch(getPosts);
  }, [dispatch]);
  
  return (
    <div className='container'>
      <div className='logo-bar d-flex align-items-center justify-content-center mt-3'><LogoSVG/></div>
      <div className="row my-4">
        <div className="col-xs-12 col-sm-8">
          <Posts></Posts>
        </div>
        <div className="col-xs-12 col-sm-4">
          <Form></Form>
        </div>
      </div>
    </div>
  );
}

export default App;