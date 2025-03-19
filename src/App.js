import './App.css';
import './reset.css';
import Loader from './components/Loader';
import Header from './components/Header';
import TopPage from './components/TopPage';
import WorksPage1 from './components/WorksPage1';
import WorksPage2 from './components/WorksPage2';
import WorksPage3 from './components/WorksPage3';
import WorksPage4 from './components/WorksPage4';
import WorksPage5 from './components/WorksPage5';
import WorksPage6 from './components/WorksPage6';
import WorksPage7 from './components/WorksPage7';
import WorksPage8 from './components/WorksPage8';
import WorksPage9 from './components/WorksPage9';
import WorksPage10 from './components/WorksPage10';
import WorksPage11 from './components/WorksPage11';
import WorksPage12 from './components/WorksPage12';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

function App() {
  return (
    <Router>
    <div className="App">
      <Loader />
      <Header />
      
      <Routes>
        <Route path='/' element={<TopPage />} />
        <Route path='/works1' element={<WorksPage1 />} />
        <Route path='/works2' element={<WorksPage2 />} />
        <Route path='/works3' element={<WorksPage3 />} />
        <Route path='/works4' element={<WorksPage4 />} />
        <Route path='/works5' element={<WorksPage5 />} />
        <Route path='/works6' element={<WorksPage6 />} />
        <Route path='/works7' element={<WorksPage7 />} />
        <Route path='/works8' element={<WorksPage8 />} />
        <Route path='/works9' element={<WorksPage9 />} />
        <Route path='/works10' element={<WorksPage10 />} />
        <Route path='/works11' element={<WorksPage11 />} />
        <Route path='/works12' element={<WorksPage12 />} />
      </Routes>

      <Footer />
    </div>
    </Router>
  );
}

export default App;
