/* eslint-disable no-unused-vars */


import React from 'react';
import '../header/header.scss';
import logo from '../../assest/mainLogo.PNG';
import {LoginContext} from '../auth/context.js';
import {Link , NavLink} from 'react-router-dom';
// import ReactWOW from 'react-wow';
import WOW from 'wowjs';
import SignForm from '../sign-forms/signForm.js';
import $ from 'jquery';
import {When} from '../if/index.js';
import ChatCh from '../chat/chat.js';
import AOS from 'aos';
window.$ = window.jQuery = require('jquery');

const If = props => {
  return props.condition ? props.children : null;
};

class Header extends React.Component{
  static contextType = LoginContext;
  constructor(props){
    super(props);
    this.state = {
      isToggle : false,
      showSignForm : false,
    };
  }

  componentDidMount(){
    AOS.init();
    const wow = new WOW.WOW();
    wow.init();
  }
  handleClick = () =>{
    // this.setState( prevState => ({
    //   isToggle : !prevState.isToggle,
    // }));
    $(document).ready(function() {
      $(document).delegate('.open', 'click', function(event){
        $(this).addClass('oppenned');
        event.stopPropagation();
      });
      $(document).delegate('body', 'click', function(event) {
        $('.open').removeClass('oppenned');
      });
      $(document).delegate('.cls', 'click', function(event){
        $('.open').removeClass('oppenned');
        event.stopPropagation();
      });
    });
  };
  handleSignClick =() => {
    this.setState(state =>({showSignForm : true}));
    console.log(this.state);
  }
  closeSignForm =() => {
    this.setState(state =>({showSignForm : false}));
  }

  handleToggle = () =>{
    this.setState(state => ({isToggle :!this.state.isToggle}));
  };
  render(){

    return (
      <>
        <div className='header-containar'>
        <svg onClick={this.handleToggle} className="chat" viewBox="0 -26 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m256 100c-5.519531 0-10 4.480469-10 10s4.480469 10 10 10 10-4.480469 10-10-4.480469-10-10-10zm0 0"/><path d="m90 280c5.519531 0 10-4.480469 10-10s-4.480469-10-10-10-10 4.480469-10 10 4.480469 10 10 10zm0 0"/><path d="m336 0c-90.027344 0-163.917969 62.070312-169.632812 140.253906-85.738282 4.300782-166.367188 66.125-166.367188 149.746094 0 34.945312 13.828125 68.804688 39 95.632812 4.980469 20.53125-1.066406 42.292969-16.070312 57.296876-2.859376 2.859374-3.714844 7.160156-2.167969 10.898437 1.546875 3.734375 5.191406 6.171875 9.238281 6.171875 28.519531 0 56.003906-11.183594 76.425781-30.890625 19.894531 6.78125 45.851563 10.890625 69.574219 10.890625 90.015625 0 163.898438-62.054688 169.628906-140.222656 20.9375-.929688 42.714844-4.796875 59.945313-10.667969 20.421875 19.707031 47.90625 30.890625 76.425781 30.890625 4.046875 0 7.691406-2.4375 9.238281-6.171875 1.546875-3.738281.691407-8.039063-2.167969-10.898437-15.003906-15.003907-21.050781-36.765626-16.070312-57.296876 25.171875-26.828124 39-60.6875 39-95.632812 0-86.886719-86.839844-150-176-150zm-160 420c-23.601562 0-50.496094-4.632812-68.511719-11.800781-3.859375-1.539063-8.269531-.527344-11.078125 2.539062-12.074218 13.199219-27.773437 22.402344-44.878906 26.632813 9.425781-18.058594 11.832031-39.347656 6.097656-59.519532-.453125-1.589843-1.292968-3.042968-2.445312-4.226562-22.6875-23.367188-35.183594-53.066406-35.183594-83.625 0-70.46875 71.4375-130 156-130 79.851562 0 150 55.527344 150 130 0 71.683594-67.289062 130-150 130zm280.816406-186.375c-1.152344 1.1875-1.992187 2.640625-2.445312 4.226562-5.734375 20.171876-3.328125 41.460938 6.097656 59.519532-17.105469-4.226563-32.804688-13.433594-44.878906-26.632813-2.808594-3.0625-7.21875-4.078125-11.078125-2.539062-15.613281 6.210937-37.886719 10.511719-58.914063 11.550781-2.921875-37.816406-21.785156-73.359375-54.035156-99.75h130.4375c5.523438 0 10-4.476562 10-10s-4.476562-10-10-10h-161.160156c-22.699219-11.554688-48.1875-18.292969-74.421875-19.707031 5.746093-67.164063 70.640625-120.292969 149.582031-120.292969 84.5625 0 156 59.53125 156 130 0 30.558594-12.496094 60.257812-35.183594 83.625zm0 0"/><path d="m256 260h-126c-5.523438 0-10 4.476562-10 10s4.476562 10 10 10h126c5.523438 0 10-4.476562 10-10s-4.476562-10-10-10zm0 0"/><path d="m256 320h-166c-5.523438 0-10 4.476562-10 10s4.476562 10 10 10h166c5.523438 0 10-4.476562 10-10s-4.476562-10-10-10zm0 0"/><path d="m422 100h-126c-5.523438 0-10 4.476562-10 10s4.476562 10 10 10h126c5.523438 0 10-4.476562 10-10s-4.476562-10-10-10zm0 0"/></svg>
        <When condition={this.state.isToggle}>
          <ChatCh />
        </When>
          <img src={logo}  className="wow fadeInLeft slower logo" height="65px" width="200px"/>
          <link rel="stylesheet" href="animate.min.css"></link>
          {/* <div className="wow pulse slower" data-wow-offset='50' data-wow-delay="0s" data-wow-iteration="500">
            <h1>Food Ashur's</h1>
          </div> */}
          <div  className="open" onClick={this.handleClick}>
            <span className="cls"></span>
            <span>
              <ul className="sub-menu ">
                <li>
                  <Link to='/Food-Ashur-s/Food-Ashurs-Full-App'>Home</Link>
                </li>
                <li>
                  <NavLink to='/profile'>profile</NavLink>
                </li>

                <li>
                  <a href="#resipient" title="resipient">Order</a>
                </li>
                <li>
                  <a href="#aboutUs" title="aboutUs">About Us</a>
                </li>
                <li>
                  <If condition={this.context.loggedIn}>
                    <a onClick={this.context.logout} >Log Out!</a>
                  </If>
                  <If condition={!this.context.loggedIn}>
                    <a onClick={this.handleSignClick}>Log In</a>
                    {/* <button onClick={this.handleSignClick} className="signForm-button" >
            SignIn</button> */}
                  </If>
                  {/* <a href="#setting" title="setting">Log Out</a> */}
                </li>
              </ul>
            </span>
            <span className="cls"></span>
          </div>
        </div>
        <div className="div-fix"></div>
        <When condition={this.state.showSignForm}>
          <SignForm close={this.closeSignForm}  />
        </When>

        {/* <When condition={!this.state.showSignForm}>
        </When> */}
        <If condition={!this.context.loggedIn}>
          <button onClick={this.handleSignClick} data-aos="fade-up" data-aos-duration="2000" className="signForm-button" >
            SignIn</button>
        </If>
        <div className="header-page">

        </div>
        <div className="quotes-div">
          {/* <ul class="slideshow"> */}
          <div ><p data-aos="flip-up" className="quote">Food Charty</p></div>
          <div><p  data-aos="flip-down" className="quote">&nbsp;&nbsp;Donation</p></div>
          <div><p data-aos="flip-up" className="quote">&nbsp;&nbsp;Humanity</p></div>
          <div><p data-aos="flip-down" className="quote">&nbsp;&nbsp;&nbsp;Help ..</p></div>
        </div>
        <div className="clear-div"></div>
      </>
    );
  }
}

export default Header;
