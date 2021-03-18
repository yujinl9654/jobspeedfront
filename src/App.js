import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from 'react-router-dom';
import styled from 'styled-components';
// import { Helmet } from 'react-helmet';
import './App.css';
import Header from './components/includes/Header';
import Footer from './components/includes/Footer';
import Home from './components/pages/Home';
import Recruitment from './components/pages/Recruitment';
import RecruitmentDetail from './components/pages/RecruitmentDetail';
import Community from './components/pages/Community';
import PostDetail from './components/pages/PostDetail';

const Container = styled.div`
  padding-bottom: 40px;
`;

function App() {
  return (
    <div className="App">
      {/* <div className="application">*/}
      {/*  <Helmet>*/}
      {/*    <meta*/}
      {/*      name="viewport"*/}
      {/*      content="user-scalable=no, width=device-width, initial-scale=1.0"*/}
      {/*    />*/}
      {/*    <meta name="apple-mobile-web-app-capable" content="yes" />*/}
      {/*    <title>SpeedJobs(가제)</title>*/}
      {/*  </Helmet>*/}
      {/* </div>*/}
      <BrowserRouter>
        <Header></Header>
        <Container>
          <Route exact path={'/community'} component={Community} />
          <Route exact path={'/'} component={Home} />
          <Route exact path={'/recruit'} component={Recruitment} />
          <Route exact path={'/recruit/detail'} component={RecruitmentDetail} />
          <Route exact path={'/community/post'} component={PostDetail} />
        </Container>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
