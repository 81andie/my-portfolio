import logo from './logo.svg';
import './App.css';
import { Header } from './Components/Header';
import { Cabecera } from './Components/Cabecera';
import { SeccionInformativa } from './Components/SeccionInformativa';

function App() {
  return (
    <div className="App">
      <Header/>
      <Cabecera/>
      <SeccionInformativa/>
      
    </div>
  );
}

export default App;
