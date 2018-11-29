import React, { Component } from 'react';
import '../../style.scss';

export default class Home extends Component {
  render() {
    return (
      <div>
         <div className="topnav" id="myTopnav">
        <span className="app-name" >
            <i className="fas fa-book-open"></i>&nbsp;Diario</span>
        <span className="pull-right">
            <a href="/signup">
                <i className="fas fa-user-plus"></i>&nbsp;Sign Up</a>
            <a href="/login">
                <i className="fas fa-sign-in-alt"></i>&nbsp;Log in</a>
        </span>

        <a href="javascript:void(0);" className="icon">
            <i className="fa fa-bars"></i>
        </a>
    </div>
    <header id="showcase" className="grid">
        <div className="bg-image"></div>
        <div className="content-wrap">
            <h1>Welcome to Diario</h1>
            <p>Get inspired and create your own Diary. Express yourself with pictures and words. It's intimate and fun. </p>
            <a href="#section-b" className="btn">Read More</a>
        </div>
    </header>
    {/* <!-- main area --> */}
    <main id="main">
        {/* <!-- Section A --> */}
        <section id="section-a" className="grid">
            <div className="content-wrap">
                <h2 className="content-title">Keep A Journal </h2>
                <div className="content-text">
                    <p>Keep a journal of your daily activities, your travel, exercise, diet, or thoughts and prayers.</p>
                </div>
            </div>
        </section>
        {/* <!-- Section B --> */}
        <section id="section-b" className="grid">
            <ul>
                <li>
                    <div className="card">
                        <img src="https://images.pexels.com/photos/733857/pexels-photo-733857.jpeg" alt="" />
                        <div className="card-content">
                            <h3 className="card-title">100% Private</h3>
                            <p>Designed to focus on privacy, your entries are totally private by default!</p>
                        </div>
                    </div>

                </li>
                <li>
                    <div className="card">
                        <img src="https://images.pexels.com/photos/217661/pexels-photo-217661.jpeg" alt="" />
                        <div className="card-content">
                            <h3 className="card-title">Available Everywhere</h3>
                            <p>Enjoy Diario on the move. Take your journals wherever you go. All you need is Internet
                            </p>
                        </div>
                    </div>

                </li>
                <li>
                    <div className="card">
                        <img src="https://images.pexels.com/photos/8769/pen-writing-notes-studying.jpg" alt="" />
                        <div className="card-content">
                            <h3 className="card-title">Never Forget to Write</h3>
                            <p>Custom email reminders help you make sure you never forget to write.</p>
                        </div>
                    </div>

                </li>
            </ul>
        </section>
        {/* <!-- Section C --> */}
        <section id="section-c" className="grid">
            <div className="content-wrap">
                <h2 className="content-title">Digitize your private diary</h2>
                <p>Everyone can have their own personal online diary on the Internet - it's free at Diario! We will host your
                    diary online at no cost. Go ahead and create your own diary today. Our focus is on security and privacy.</p>


            </div>
        </section>
        {/* <!-- Section D --> */}
        <section id="section-d" className="grid">
            <div className="box">
                <h2 className="content-title">Contact Us</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In similique minus adipisci voluptate consectetur
                    facere nulla nihil quod optio quaerat.</p>
            </div>
            <div className="box">
                <h2 className="content-title">About Us</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi ullam hic accusantium qui deleniti sequi
                    iste. Dolorum sed tempora in culpa, fugit veritatis, voluptates asperiores voluptate explicabo maiores
                    tenetur repudiandae.</p>
            </div>
        </section>
    </main>
    {/* <!-- Footer --> */}
    <footer id="main-footer" className="grid">
        <div>Diario</div>
        <div>Project by
            <a href="https://github.com/samdiano" target="_blank">Sammy</a>
        </div>
    </footer>
      </div>
    )
  }
}
