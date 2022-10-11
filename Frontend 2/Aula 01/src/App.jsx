import { Welcome } from './components/Welcome';

// function App() {
//   return (
//     <div className="App">
//         <p>
//           Hello World!
//         </p>
//     </div>
//   );
// }

function App() {
  return (
    <div>
      <Welcome name='Luciano'/>
      <Welcome />
    </div>
  );
}

export default App;
