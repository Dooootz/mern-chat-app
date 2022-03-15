import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'

function App() {
  return (
    <BrowserRouter>
      <Navigation/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/" element={<Login/>}/>
          <Route path="/" element={<Signup/>}/>
          <Route path="/" element={<Chat/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
