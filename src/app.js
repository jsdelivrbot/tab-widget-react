import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Tabs from './components/tabs';
import TabsVerticle from './components/tabs-verticle';
import SectionInfo from './components/section-info';



const data = [
  {
    name: "Barry",
    avatar: "../images/icons/bb-8.svg",
    points: 1000
  },
  {
    name: "Max",
    avatar: "../images/icons/C3P-0.svg",
    points: 1200
  },
  {
    name: "Marina",
    avatar: "../images/icons/fett.svg",
    points: 1400
  },
  {
    name: "Elizabeth",
    avatar: "../images/icons/r2-d2.svg",
    points: 1600
  },
  {
    name: "Edward",
    avatar: "../images/icons/vader.svg",
    points: 1800
  }
]

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      users: data,
      currentUser: data[0]
    }
}

  setUser = (user) => {
    this.setState({ currentUser: user });
    console.log(this.state.currentUser);
  }

  changeUserName = (index, value) => {
    let cloneObject = this.state.users;
    cloneObject[index].name = value;
    this.setState({users : cloneObject});

  }

  render () {
    return (
      <div className="container">

        <div className="widget-container">
          <Tabs setUser={ this.setUser } currentUser={ this.state.currentUser } users={ this.state.users } />
          <SectionInfo index={this.state.users.indexOf(this.state.currentUser)} changeUserName={this.changeUserName} currentUser={ this.state.currentUser } />
        </div>

        <div className="widget-container-verticle">
          <TabsVerticle changeUserName={ this.changeUserName } setUser={ this.setUser } currentUser={ this.state.currentUser } users={ this.state.users } />
        </div>

      </div>
    );
  }
};

ReactDOM.render(<App />, document.querySelector('.container'));
