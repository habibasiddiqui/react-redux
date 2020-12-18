
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
import AddTodos from './components/AddTodos';
import TodoList from './components/TodoList';


function App() {
  return (
    <div>
      <TodoList />

      <AddTodos />
    </div>
  )
}

export default App
