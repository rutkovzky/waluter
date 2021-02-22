import './styles/App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import FavoritesPage from './pages/FavoritesPage';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/favorites' component={FavoritesPage} />
      </main>
    </Router>
  );
}

export default App;
