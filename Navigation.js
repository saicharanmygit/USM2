import React from "react";
//import images from './images/welcome.jpg';
const Navigation =()=>{
return(
<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">USM</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><a href="#">Home</a></li>
      <li class="dropdown">
        <a class="dropdown-toggle" data-toggle="dropdown" href="#">Explore
        <span class="caret"></span></a>
        <ul class="dropdown-menu">
          <li><a href="#">ISIN</a></li>
          <li><a href="#">Sector</a></li>
          <li><a href="#">Symbol</a></li>
        </ul>
      </li>
      <li><a href="#">Contact Us</a></li>
      {/* <li><a href="#">Page 3</a></li> */}
    </ul>
  </div>
   {/* <div style={{backgroundImage:'url(${images})',height:800, backgroundSize:1400}}>

  </div>  */}
</nav>
)
}
export default Navigation;