import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
// import About from './components/About'
// import Contact from './components/Contact'
import Layout from './components/Layout'
// import Portfolio from './components/Portfolio'
// import Dashboard from './components/Dashboard'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
