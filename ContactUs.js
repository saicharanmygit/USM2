import React from "react";
const ContactUs = () => {
  return (
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
    </nav><div>
        <section class="mb-4">
          <h2 class="h1-responsive font-weight-bold text-center my-4">Contact us</h2>

          <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Write to us.</p>

          <div class="row">


            <div class="col-md-9 mb-md-0 mb-5">
              <form id="contact-form" name="contact-form" action="mail.php" method="POST">


                <div class="row">


                  <div class="col-md-6">
                    <div class="md-form mb-0">
                    <label for="name" class="">Your name</label>
                      <input type="text" id="name" name="name" class="form-control" />
                      
                    </div>
                  </div>



                  <div class="col-md-6">
                    <div class="md-form mb-0">
                    <label for="email" class="">Your email</label>
                      <input type="text" id="email" name="email" class="form-control" />
                      
                    </div>
                  </div>


                </div>


                <div class="row">
                  <div class="col-md-12">
                    <div class="md-form mb-0">
                    <label for="subject" class="">Subject</label>
                      <input type="text" id="subject" name="subject" class="form-control" />
                      
                    </div>
                  </div>
                </div>



                <div class="row">


                  <div class="col-md-12">

                    <div class="md-form">
                    <label for="message">Your message</label>
                      <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                      
                    </div>

                  </div>
                </div>


              </form>

              <div class="text-center text-md-left">
                <br></br>
                <br></br>
                <a class="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</a>
              </div>
              <div class="status"></div>
            </div>



            <div class="col-md-3 text-center">
              <ul class="list-unstyled mb-0">
                <li><i class="fas fa-map-marker-alt fa-2x"></i>
                  <p>Hexaware, Sipcot</p>
                </li>

                <li><i class="fas fa-phone mt-4 fa-2x"></i>
                  <p>+ 01 234 567 89</p>
                </li>

                <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                  <p>FinancialCharms@hexaware.com</p>
                </li>
              </ul>
            </div>


          </div>

        </section>

      </div></>

  )
}
export default ContactUs;

