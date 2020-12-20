
// COUNTER

// import React, { useState } from 'react';
// import { Provider } from 'react-redux';
// import CounterInput from './components/CounterInput';
// import CounterOutput from './components/CounterOutput';
// import store from './store/Store';

// function App() {

//   return (
//     <Provider store={store}>
//       <div>
//         <CounterInput />
//         <br />
//         <CounterOutput />
//       </div>
//     </Provider>

//   );
// }

// export default App;


import React from 'react';  
import { Provider } from 'react-redux';
import TodoList from './components/TodoList';
import store from "./store/Store";

function App() {
  return (
    <Provider store={store}>
      <TodoList />

    
    </Provider>
    
  )
}

export default App
