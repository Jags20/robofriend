import React, { useState, useEffect} from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
// import { robots } from "./robots";
import "./App.css";


// class App extends Component {
  const App = () => {

    const [robots, setRobots] = useState([])
    const [searchfield, setSearchfield] = useState('')

    useEffect(() =>{
          fetch('https://jsonplaceholder.typicode.com/users')
            .then(Response => Response.json())
            .then(users=> setRobots( users));
      },[])

  // constructor(){
  //   super()
  //   this.state = {
  //     robots: [],
  //     searchfield: ''

  //   }
  // }

  // componentDidMount(){
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //   .then(Response => Response.json())
  //   .then(users=> this.setState({robots: users}));
  // }

  const onSearchChange =(event) => {
    // console.log(event.target.value);
    setSearchfield(event.target.value)
  }

  
  const filteredRobots =robots.filter( robot => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase())
   })
   return !robots.length ?
   <h1>loading</h1>:
   (
      <div className="tc">
          <h1 className="f2">Robofriends</h1>
          <SearchBox searchChange={onSearchChange}/>
          <Scroll>
          <CardList robots={filteredRobots}/>
          </Scroll>
        </div>
    );
  
}

export default App;
// robots.length===0?<h1>loading</h1>: <div className="tc">
        //   <h1 className="f2">Robofriends</h1>
        //   <SearchBox searchChange={this.onSearchChange}/>
        //   <Scroll>
        //   <CardList robots={filteredRobots}/>
        //   </Scroll>
        // </div>;





        