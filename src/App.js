import React, {Component} from 'react';
import './App.css';

class App extends Component{
  constructor(){
    super();

    this.state = {
      toggleDropdown: false
    }
  }

  handleToggle = () => {
    this.setState({toggleDropdown: !this.state.toggleDropdown})
  }

  render(){
  return (
    <div>
      <header className="main-header">
          <span className='main-logo'>Start Bootstrap</span>
          {this.state.toggleDropdown
          ? (
            <>
              <span className='dropdown-toggle' onClick={this.handleToggle}> Menu</span>
              <nav className='mobile-links'>
                <p>Services</p>
                <p>Portfolio</p>
                <p>About</p>
                <p>Team</p>
                <p>Contact</p>
              </nav>
            </>
          )
        : (
          <span className='dropdown-toggle' onClick={this.handleToggle}>Menu</span>
        )
        }
          <ul className='nav-list'>
            <li className='nav-list-item'>Services</li>
            <li className='nav-list-item'>Portfolio</li>
            <li className='nav-list-item'>About</li>
            <li className='nav-list-item'>Team</li>
            <li className='nav-list-item'>Contact</li>
          </ul>
        </header>
        <div className='main-div'>
          <div className='text-box'>
            <span className='text-box-1'>Welcome To Our Studio!</span>
            <span className='text-box-2'>it's nice to meet you</span>
            <button className='button'>tell me more</button>
          </div>
        </div>
        <section className='services'>
          <div className='services-text-box'>Services
            <span className='lorem-ipsum'>Lorem ipsum dolor sit amet consectetur.</span>
          </div>
          <div className='three-boxes'>
            <section className='service-box'>
              <img src='https://iconsetc.com/icons-watermarks/flat-circle-white-on-yellow/foundation/foundation_shopping-cart/foundation_shopping-cart_flat-circle-white-on-yellow_512x512.png'/>
              <span className='section-name'>E-Commerce</span>
              <span className='dummy-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</span>
            </section>
            <section className='service-box'>
              <img src='https://iconsetc.com/icons-watermarks/flat-rounded-square-white-on-yellow/bfa/bfa_laptop/bfa_laptop_flat-rounded-square-white-on-yellow_512x512.png'/>
              <span className='section-name'>Responsive Design</span>
              <span className='dummy-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</span>
            </section>
            <section className='service-box'>
              <img src='https://previews.123rf.com/images/alexwhite/alexwhite1609/alexwhite160903917/62628364-padlock-flat-design-yellow-round-web-icon.jpg'/>
              <span className='section-name'>Web Security</span>
              <span className='dummy-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</span>
            </section>
          </div>
        </section>
    </div>
  );
  }
}

export default App;
