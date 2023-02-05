import logo from './logo.svg';
import './App.css';
import ProfilePhoto from './components/ProfilePhoto';
import FullName from './components/FullName';
import Adress from './components/Adress';
import'./App.css'


function App() {
  return (
    <div className="App">
      <ProfilePhoto></ProfilePhoto>
      <FullName></FullName>
      <Adress></Adress>
  
    </div>
  );
}

export default App;
