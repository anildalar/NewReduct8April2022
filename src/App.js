import logo from './logo.svg';
import './App.css';

import { createStore } from 'redux';

let rootReducer = (oldState = { value: 'ANIL' },action)=>{
  let newState = oldState
  if(action.type === 'abc'){
      newState.value = 'Abhishesk';
      return newState;
  }else if(action.type === 'xyz'){
      newState.value = 'Avinash';
      return newState;
  }else{
    return newState;
  } 
  
}

 let store = createStore(rootReducer); //Calling

 console.log(store)

 store.subscribe(() => console.log(store.getState()));


 store.dispatch({type:"xyz"});
 store.dispatch({type:"xyz"});
 store.dispatch({type:"xyz"});
 store.dispatch({type:"abc"});
 store.dispatch({type:"abc"});
 store.dispatch({type:"abc"});
 store.dispatch({type:"xyz"});
 store.dispatch({type:"xyz"});


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
