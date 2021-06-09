
import './App.css';
import ProfilePhotos from './Component/Profile/ProfilePhotos'
import FullName from './Component/Profile/FullName'
import Adress from './Component/Profile/Adress'


function App() {
  return (
    <div className="App" style={{border:"solid 3px black", maxWidth:"15vw",backgroundColor:"gray"}}>

            <ProfilePhotos></ProfilePhotos>
            <FullName></FullName>
            <Adress></Adress>
            
</div>
  );
}

export default App;
