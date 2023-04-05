import React from "react";
import './Isin.css';
const Isin =()=>{
return(
    <><nav class="navbar navbar-inverse">
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
    
    </nav><div class="container">

<div class="row height d-flex justify-content-center align-items-center">

  <div class="col-md-8">

    <div class="search" align="center">
      <br></br>
      <input type="text" class="form-control " placeholder="&#128270; Search by ISIN"/>
      <button class="btn btn-primary anybutton">Search</button>
    </div>
    
  </div>
  
</div>
</div>
    </>
)
}
export default Isin;