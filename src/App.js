import './App.css';
import Layout from './components/Layout';

function App() {
  const name = 'React Developer';
  return (
    <div className="App">
      <Layout>
      <h1>Hello, {name} !</h1>
      </Layout >
    </div>
  );
}

export default App;
