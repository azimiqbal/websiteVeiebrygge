import React, { Component } from 'react'
import Navigation from './navigation';
import Header from './header';
import About from './about';
import Gallery from './gallery';
import Team from './Team';
import Features from './features';
import Contact from './contact';
import $ from 'jquery';


export class App extends Component {
  state = {
    resumeData : {},
    
  }
  getResumeData(){
    
    $.ajax({
      url:'/data.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getResumeData();
  }

  render() {
    return (
      <div>
        <Navigation />
        <Header data={this.state.resumeData.Header}/>
        <About  data={this.state.resumeData.About}/>
        <Team  data={this.state.resumeData.Team}/>
        <Gallery />
        <Features data={this.state.resumeData.Features}/>
        <Contact  data={this.state.resumeData.Contact}/>
      </div>
    )
  }
}

export default App
