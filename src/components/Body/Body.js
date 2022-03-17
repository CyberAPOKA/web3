import React from "react";
import './Body.css'
import '../css/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../js/scripts'
import logo from '../images/logo.png'
import discord from '../images/discord.png'
import instagram from '../images/instagram.png'
import twitter from '../images/twitter.png'
import warrior from '../images/warrior.png'

function Body(){
    return (
		<body id="page-top">
            <div id="light">
        <nav class="navbar navbar-expand-lg navbar-light fixed-top text-center" id="mainNav">
            <div class="container px-4 px-lg-5">
                <a class="navbar-brand" href="#page-top"><img src={logo} alt=""/></a>
                <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fas fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ms-auto">
                  
              <li class="nav-item">
                <a class="nav-link raise pixelart" href="/">navigation</a>
              </li>
              
              <li class="nav-item">
                <a class="nav-link raise pixelart" href="/">GAME</a>
              </li>
              <li class="nav-item">
                <a class="nav-link raise pixelart" href="/">WHITEPAPER</a>
              </li>
              <li class="nav-item raise btn-gradient rounded discord">
                <a class="nav-link" target="_blank" href="/"><img src={discord} alt=""/></a>
              </li>
              <li class="nav-item raise btn-gradient rounded instagram">
                <a class="nav-link" target="_blank" href="/"><img src={instagram} alt=""/></a>
              </li>
              <li class="nav-item raise btn-gradient rounded twitter">
                <a class="nav-link" target="_blank" href="/"><img src={twitter} alt=""/></a>
              </li>
              <li class="nav-item pulse">
                <a class="nav-link button btn btn-primary button-primary d-md-inline-block d-block mb-md-0 mb-2 mr-md-2"
                target="_blank" href="/">Play</a>
              </li>
                    </ul>
                </div>
            </div>
        </nav>
    
        <header class="wallpaper">
            <div class="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
                <div class="d-flex justify-content-center">
                    <div class="text-center">
                       <img src={warrior} alt="" />
                    </div>
                </div>
            </div>
        </header>
        </div>
    </body>

    );
} 
      export default Body;