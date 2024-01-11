
import './App.css';
import CustomNavbar from './Components/Header';
import { Footer } from './Components/Footer';
import { TrendingNow } from './Components/TrendingNow';
import WatchItAgain from './Components/WatchItAgain';
import NewReleases from './Components/NewReleases';
function App() {
  return (
    <>
   <CustomNavbar/>
   <TrendingNow/>
   <WatchItAgain/>
   <NewReleases/>
   <Footer/>
   </>
  );
}

export default App;
