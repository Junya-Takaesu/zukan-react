import "./App.css";
import Home from "./home";
import Quiz from "./quiz";
import Navigation from "./navigation";
import BGBall from "./bgBall";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <BGBall nth={1} />
      <BGBall nth={2} />
      <BGBall nth={3} />
      <Navigation />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/quiz" component={Quiz} exact />
      </Switch>
    </Router>
  );
}

export default App;
