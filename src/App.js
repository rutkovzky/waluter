import './styles/App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Route exact path='/' component={HomeScreen} />
      </main>
    </Router>
  );
}

export default App;
