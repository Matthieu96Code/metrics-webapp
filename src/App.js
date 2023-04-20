import { Routes, Route } from 'react-router-dom';
// import Layout from './routes/Layout';
import Page from './pages/Page';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <Routes className="App">
      <Route index element={<Home />} />
      <Route path=":id" element={<Page />} />
    </Routes>
  );
}

export default App;
