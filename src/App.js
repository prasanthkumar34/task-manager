import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./components/nav.component"
import TasksList from "./components/taskList.component";
import EditTask from "./components/editTask.component";
import CreateTask from "./components/createTask.component";
import CreateUser from "./components/createUser.component";
import SearchTask from "./components/searchTask.component";

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={TasksList} />
      <Route path="/edit/:id" component={EditTask} />
      <Route path="/create" component={CreateTask} />
      <Route path="/user" component={CreateUser} />
      <Route path="/search" component={SearchTask} />
      </div>
    </Router>
  );
}

export default App;
