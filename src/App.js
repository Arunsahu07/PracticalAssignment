import {Provider} from 'react-redux'
import './App.css';
import User from './Components/Users'
import Store from '../src/Store/Store'
function App() {
  return (
    <Provider store={Store}>

    <div className="App">
       <User/>
    </div>
    </Provider>
  );
}

export default App;
