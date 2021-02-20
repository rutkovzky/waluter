import './styles/App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Route exact path='/' component={HomePage} />
      </main>
    </Router>
  );
}

export default App;
