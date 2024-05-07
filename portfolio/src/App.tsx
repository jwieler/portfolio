import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Spinner } from 'react-bootstrap'; // Import Spinner from react-bootstrap
import { lazy } from 'react';
import { Suspense } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const About = lazy(() => import('./pages/About'));
const Home = lazy(() => import('./pages/Home'));

const App = () => (
  <Router>
      <div className="App">
        <Suspense fallback={<Spinner animation="border" variant="primary" />}>
          <Routes>
            {/* Define your routes */}
            <Route path="/" Component={() => <Home />} />
            <Route path="/about" Component={() => <About />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
);

export default App;