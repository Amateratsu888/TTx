import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import ArrivedGone from './components/Arrived&Gone/ArrivedGone';
import Arrived from './components/Arrived/Arrived';
import Gone from './components/Gone/Gone';
import New from './components/New/New';
import Liste from './components/Liste/Liste';
import {Routes , Route} from 'react-router-dom'
import Clock from './components/Clock/Clock';
const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<ArrivedGone/>} />
        <Route path='/depart' element={<Gone/>} />
        <Route path='/arrive' element={<Arrived/>} />
        <Route path='/NouveauEmploye' element={<New/>} />
        <Route path='/ListeEmployes' element={<Liste/>} />
        <Route path='/clock' element={<Clock/>} />
      </Routes>
    </>
  );
}

export default App;
