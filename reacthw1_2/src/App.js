import React, { Component } from 'react';
import TableContainer from './Component/TableContainer';
import Header from './Component/Header';
import Counter from './Component/Counter';
import Footer from './Component/Footer';
import Content from './Component/Content';
import './App.css';
import BottomSide from './Component/BottomSide';
import Desktop from './Component/Desktop';
import StatusBar from './Component/StatusBar';


class App extends Component {
  render() {
    //----------Homework 1 ------Table
    // return (<div className="App">
    //   <TableContainer></TableContainer>
    // </div>)


    //----------Homework 1 ------Layout
    // return (<div className="App">
    //   <Header></Header>
    //   <Content></Content>
    //   <Footer></Footer>
    // </div>)


    // ----------Homework 1 ------Iphone Screen
    // return (<div className="App">
    //   <StatusBar></StatusBar>
    //   <Desktop></Desktop>
    //   <BottomSide></BottomSide>
    // </div>)



    //----------Homework 2 ------Counter
    return (
      <Counter></Counter>
    )
  }
}

export default App;
