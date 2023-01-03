import './App.css';
import Welcome from './pages/Welcome';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
function App() {
  return (
<>
<BrowserRouter>
<Routes>
    <Route path='/' element={<Welcome/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route/>

</Routes>

    
    </BrowserRouter>
</>
  );
}

export default App;
