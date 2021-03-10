import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './App.css';
import Header from './components/includes/Header';
import Footer from './components/includes/Footer';
import Home from './components/pages/Home';

function App() {
  return (
    <div className="App">
      <div className="application">
        <Helmet>
          <meta
            name="viewport"
            content="user-scalable=no, width=device-width, initial-scale=1.0"
          />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <title>SpeedJobs(가제)</title>
        </Helmet>
      </div>
      <BrowserRouter>
        <Header></Header>
        <Route exact path={'/'} component={Home} />
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
