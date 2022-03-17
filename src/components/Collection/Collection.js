import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/main.css';
import warrior from '../images/warrior.png'

function Collection(){
    return (
            
<div class="wrapper row3">
  <section class="hoc container clear"> 
  <div class="text-center wow fadeInUp">
            <h2 class="title-section">NFT COLLECTION</h2>
            <div class="divider mx-auto"></div>
          </div>
          <div className="container-fluid">
             
          <div className="row">
              <h4 className="col-2 text-center">Common</h4>
              <h4 className="col-2 text-center">Uncommon</h4>
              <h4 className="col-2 text-center">Rare</h4>
              <h4 className="col-2 text-center">Epic</h4>
              <h4 className="col-2 text-center">Legendary</h4>
              <h4 className="col-2 text-center">Mitic</h4>

      <li class="col-2">
        <article><img src={warrior} alt=""/>
        </article>
      </li>
      <li class="col-2">
        <article><img src={warrior} alt=""/>
         
        </article>
      </li>
      <li class="col-2">
        <article><img src={warrior}  alt=""/>
         
        </article>
      </li>
      <li class="col-2">
        <article><img src={warrior}  alt=""/>
         
        </article>
      </li>
      <li class="col-2">
        <article><img src={warrior}  alt=""/>
          
        </article>
      </li>
      <li class="col-2">
        <article><img src={warrior}  alt=""/>
         
        </article>
      </li>
    </div>

    <div className="row">
    
    <li class="col-2">
      <article><img src={warrior} alt=""/>
       
      </article>
    </li>
    <li class="col-2">
      <article><img src={warrior} alt=""/>
       
      </article>
    </li>
    <li class="col-2">
      <article><img src={warrior}  alt=""/>
       
      </article>
    </li>
    <li class="col-2">
      <article><img src={warrior}  alt=""/>
       
      </article>
    </li>
    <li class="col-2">
      <article><img src={warrior}  alt=""/>
        
      </article>
    </li>
    <li class="col-2">
      <article><img src={warrior}  alt=""/>
       
      </article>
    </li>
  </div>

  <div className="row">
    
      <li class="col-2">
        <article><img src={warrior} alt=""/>
         
        </article>
      </li>
      <li class="col-2">
        <article><img src={warrior} alt=""/>
         
        </article>
      </li>
      <li class="col-2">
        <article><img src={warrior}  alt=""/>
         
        </article>
      </li>
      <li class="col-2">
        <article><img src={warrior}  alt=""/>
         
        </article>
      </li>
      <li class="col-2">
        <article><img src={warrior}  alt=""/>
          
        </article>
      </li>
      <li class="col-2">
        <article><img src={warrior}  alt=""/>
         
        </article>
      </li>
    </div>

    <div className="row">
    
      <li class="col-2">
        <article><img src={warrior} alt=""/>
         
        </article>
      </li>
      <li class="col-2">
        <article><img src={warrior} alt=""/>
         
        </article>
      </li>
      <li class="col-2">
        <article><img src={warrior}  alt=""/>
         
        </article>
      </li>
      <li class="col-2">
        <article><img src={warrior}  alt=""/>
         
        </article>
      </li>
      <li class="col-2">
        <article><img src={warrior}  alt=""/>
          
        </article>
      </li>
      <li class="col-2">
        <article><img src={warrior}  alt=""/>
         
        </article>
      </li>
    </div>



    </div>
  </section>
</div>

    );
} 
      export default Collection;