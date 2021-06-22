import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ScrollToTop from './hooks/ScrollTop';
import Home from './pages/Home';
import SigninPage from './pages/Signin';
import AboutUs from './pages/AboutUs';
import TrainingResources from './pages/TrainingResources';
import {useState} from 'react';

export default function App (){
  const [courses, setCourses] = useState([])
  
  return (
    <div>
      {<Router>
        <ScrollToTop/>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/about" component={AboutUs} exact/>
          <Route path="/signin" exact><SigninPage setter={setCourses}/></Route>
          <Route path="/training" exact><TrainingResources courses={courses}/></Route>
        </Switch>
      </Router>}
    </div>
  );
}