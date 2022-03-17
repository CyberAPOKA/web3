import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import warrior from '../images/warrior.png'
import './framework.css';
import './layout.css';

function Modes(){
    return (
       
<div class="wrapper row3">
  <section class="hoc container clear"> 
  <div class="text-center wow fadeInUp">
            <h2 class="title-section">GAME MODES</h2>
            <div class="divider mx-auto"></div>
          </div>
    <ul class="nospace group sd-third">
      <li class="one_third first">
        <article><img src={warrior} alt=""/>
          <h6 class="heading text-center">FARM</h6>
          <p>Magna aliquam eleifend odio sed id nisl vivamus rutrum leo a mauris lacus ullamcorper massa ac iaculis odio nibh nec lectus.</p>
        </article>
      </li>
      <li class="one_third">
        <article><img src={warrior} alt=""/>
          <h6 class="heading text-center">ADVENTURE</h6>
          <p>Cras sed nunc etiam dignissim leo duis viverra malesuada mi proin felis tellus imperdiet quis pulvinar sed aliquet quis odio.</p>
        </article>
      </li>
      <li class="one_third text-center">
        <article><img src={warrior}  alt=""/>
          <h6 class="heading text-center">BATTLE (1X1 AND GUILD)</h6>
          <p>Morbi pulvinar praesent euismod accumsan odio aenean id odio sed ornare eleifend tellus morbi nisl erat tincidunt ut auctor ac.</p>
        </article>
      </li>
    </ul>
  </section>
</div>
    );
} 
      export default Modes;