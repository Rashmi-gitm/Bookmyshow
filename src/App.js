
import './App.css';
import Authentication from './pages/authentication/Authentication';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Routes, Route} from 'react-router-dom'
import Customer from './pages/customer/Customer';

function App() {
  return (
    <div className="App">
     <Routes>
        <Route path="/login" element={<Authentication/>} />
        <Route path="/customer" element={<Customer/>} />
      </Routes>

  
    </div>
  );
}

export default App;
