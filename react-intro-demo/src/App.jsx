import "./App.css";

function App() {
  const names = ["John", "Ema", "Kevin"]
  return <div>
    {names.map(x => <li>{x}</li>)}
  </div>;
}

export default App;
