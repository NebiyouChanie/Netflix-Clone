import './App.css';
import Home from './pages/Home/Home';
import FouroFour from './pages/Notfound404/FouroFour';
import {BrowserRouter as Router, Routes ,Route  } from 'react-router-dom' ;
import MovieDetail from './components/MovieDetails/MovieDetail'; 
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import SharedElements from './SharedElements/SharedElements';

function App() {
  return (
    <Router basename="/Netflix-Clone">
      <ScrollToTop />
        <div className="App">
            <Routes>
              <Route path='/' element={<SharedElements />}>
                <Route path='/' element={<Home />}/>
                <Route path='/movies/:id/:mediatype' element={<MovieDetail />}/>
              </Route>
              <Route path='*' element={<FouroFour />}/> 
            </Routes>
          
        </div>
    </Router>
    
  );
}

export default App;

