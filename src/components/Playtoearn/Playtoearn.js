import React from "react";
import game from '../images/game.png'
import '../css/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Playtoearn(){
    return (
      <div className="container">
         <div class="text-center wow fadeInUp">
            <h2 class="title-section">PLAY TO EARN</h2>
            <div class="divider mx-auto"></div>
          </div>
        <div className="row">
            
          <div className="col-md-4 align-self-center text-center order-md-1 order-2">
          <h2 className="title">What is Crypto Dungeons?</h2>
            <h4 className="subtitle">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <a href="/" className="btn btn-primary button button-primary"
              >Botao </a>
          </div>

          <div className="col-md-8 align-self-center order-md-2 order-1 mb-md-0 mb-4">
          <img src={game} alt="" className="img-fluid" />
            
          </div>
         
        </div>
    </div>

      

  
    );
} 
      export default Playtoearn;