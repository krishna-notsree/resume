import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import About from './components/about';
import Resume from './components/resume';
import Contact from './components/contact';
import Footer from './components/footer';
import {main,resume} from './resumeData.json';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      
      resumeData:{
        main: main,
        resume: resume,
      }
    }
  }




  render() {
    console.log(main);
    return (
      <div className="App">
        <Header data={main} />
        <About data={this.state.resumeData.main} />
        <Resume data={this.state.resumeData.resume} title={this.state.resumeData.main.occupation} />
        <Contact data={this.state.resumeData.main} />
        <Footer />
      </div>
    );
  }
}

export default App;
