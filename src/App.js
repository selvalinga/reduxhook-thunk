import {Provider} from 'react-redux'
import store from './Redux/store';
import './App.css';
import HookCakeContainer from './Components/HookCakeContainer';
import CakeContainer from './Components/CakeContainers';
import IceCreamContainer from './Components/IceCreamContainer';
import NewCakeContainer from './Components/NewCakeContainer';
import ItemContainer from './Components/ItemContainer';
import UserContainer from './Components/UserContainer';

function App() {
  return (
    <Provider store = {store}>
    <div className="App">
     <p>Item container deals with ownProps </p> <ItemContainer cake/>
      <ItemContainer />
     <p>Cake containr deals with redux flow class component</p><CakeContainer />
     <p>Hook Cakecontainer deals with hooks redux</p><HookCakeContainer />
     <p>Multiple reducer (rootReducer)</p> <IceCreamContainer />
     <p>payload with redux concept</p><NewCakeContainer />
     <h1>--------------------using Thunk and API call----------------</h1>
     <UserContainer />
    </div>
    </Provider>
  );
}

export default App;
