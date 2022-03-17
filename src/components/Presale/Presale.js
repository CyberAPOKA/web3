import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/main.css';
import warrior from '../images/warrior.png'
import littlewarrior from '../images/littlewarrior.png'
import './presale.css';
import cage from '../images/cage.gif'

function Presale(){
    return (
        <div class="page-section border-top">
        <div class="container">
          <div class="text-center wow fadeInUp">
            <h2 class="title-section">Pre Sale</h2>
            <div class="divider mx-auto"></div>
          </div>

          <div class="row justify-content-center">

           <div class="col-12 col-lg-auto py-3 wow fadeInUp">
              <div class="card-pricing">
                <div class="header">
                  <div class="price-icon"><img src={cage}  alt=""/></div>
                  <div class="price-title">Common</div>
                </div>
                <div class="body py-3">
                  <div class="price-tag">
                    <span class="currency"></span>
                    <h2 class="display-4">50</h2>
                    <span class="period">BNB</span>
                  </div>
                  <div class="price-info">
                    <p>A common hero will come out of this cage</p>
                  </div>
                </div>
                <div class="footer">
                  <a href="#" class="btn btn-outline rounded-pill">Buy</a>
                </div>
              </div>
            </div>

            
            <div class="col-12 col-lg-auto py-3 wow fadeInUp">
              <div class="card-pricing">
                <div class="header">
                  <div class="price-icon"><img src={cage}  alt=""/></div>
                  <div class="price-title">Uncommon</div>
                </div>
                <div class="body py-3">
                  <div class="price-tag">
                    <span class="currency"></span>
                    <h2 class="display-4">50</h2>
                    <span class="period">BNB</span>
                  </div>
                  <div class="price-info">
                    <p>A uncommon hero will come out of this cage</p>
                  </div>
                </div>
                <div class="footer">
                  <a href="#" class="btn btn-outline rounded-pill">Buy</a>
                </div>
              </div>
            </div>
    
            <div class="col-12 col-lg-auto py-3 wow fadeInUp">
              <div class="card-pricing">
                <div class="header">
                  <div class="price-icon"><img src={cage}  alt=""/></div>
                  <div class="price-title">Rare</div>
                </div>
                <div class="body py-3">
                  <div class="price-tag">
                    <span class="currency"></span>
                    <h2 class="display-4">50</h2>
                    <span class="period">BNB</span>
                  </div>
                  <div class="price-info">
                    <p>A rare hero will come out of this cage</p>
                  </div>
                </div>
                <div class="footer">
                  <a href="#" class="btn btn-outline rounded-pill">Buy</a>
                </div>
              </div>
            </div>

             <div class="col-12 col-lg-auto py-3 wow fadeInUp">
              <div class="card-pricing">
                <div class="header">
                  <div class="price-icon"><img src={cage}  alt=""/></div>
                  <div class="price-title">Epic</div>
                </div>
                <div class="body py-3">
                  <div class="price-tag">
                    <span class="currency"></span>
                    <h2 class="display-4">50</h2>
                    <span class="period">BNB</span>
                  </div>
                  <div class="price-info">
                    <p>A Epic hero will come out of this cage</p>
                  </div>
                </div>
                <div class="footer">
                  <a href="#" class="btn btn-outline rounded-pill">Buy</a>
                </div>
              </div>
            </div>

            <div class="col-12 col-lg-auto py-3 wow fadeInUp">
              <div class="card-pricing">
                <div class="header">
                  <div class="price-icon"><img src={cage}  alt=""/></div>
                  <div class="price-title">Legendary</div>
                </div>
                <div class="body py-3">
                  <div class="price-tag">
                    <span class="currency"></span>
                    <h2 class="display-4">50</h2>
                    <span class="period">BNB</span>
                  </div>
                  <div class="price-info">
                    <p>A Legendary hero will come out of this cage</p>
                  </div>
                </div>
                <div class="footer">
                  <a href="#" class="btn btn-outline rounded-pill">Buy</a>
                </div>
              </div>
            </div>

            <div class="col-12 col-lg-auto py-3 wow fadeInUp">
              <div class="card-pricing">
                <div class="header">
                  <div class="price-icon"><img src={cage}  alt=""/></div>
                  <div class="price-title">Mitic</div>
                </div>
                <div class="body py-3">
                  <div class="price-tag">
                    <span class="currency"></span>
                    <h2 class="display-4">50</h2>
                    <span class="period">BNB</span>
                  </div>
                  <div class="price-info">
                    <p>A Mitic hero will come out of this cage</p>
                  </div>
                </div>
                <div class="footer">
                  <a href="#" class="btn btn-outline rounded-pill">Buy</a>
                </div>
              </div>
            </div>

          </div>
        </div> 
      </div> 



      




    );
} 
      export default Presale;