import CakeContainer from './Components/CakeContainers';
import {Provider} from 'react-redux'
import store from './Redux/store';
import CakeContainers from './Components/CakeContainers';
import './App.css';

function App() {
  return (
    <Provider store = {store}>
    <div className="App">
     <CakeContainer />
    </div>
    </Provider>
  );
}

export default App;
