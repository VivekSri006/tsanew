import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  template: `
  <div class="sidebar-container" [class.open]="isOpen">
    <div class="sidebar-header">
      <h2>Sidebar Title</h2>
    </div>
    <div class="sidebar-content">
      <ul>
        <li><a href="#">Link 1</a></li>
        <li><a href="#">Link 2</a></li>
        <li><a href="#">Link 3</a></li>
      </ul>
    </div>
  </div>
  <button (click)="toggleSidebar()">Toggle Sidebar</button>
`,
  styleUrls: ['./index-page.component.css']
})
export class IndexPageComponent implements OnInit {
  htmlPage = `
  <!DOCTYPE html>
  <html>
  <head>
  <meta charset="utf-8">
  <title>LawSight Law HTML Template | Homepage</title>
  <!-- Stylesheets -->
  <link href="css/bootstrap.css" rel="stylesheet">
  <link href="css/main.css" rel="stylesheet">
  <link href="css/responsive.css" rel="stylesheet">
  <link rel="shortcut icon" href="images/favicon.png" type="image/x-icon">
  <link rel="icon" href="images/favicon.png" type="image/x-icon">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
  <!--[if lt IE 9]><script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.js"></script><![endif]-->
  <!--[if lt IE 9]><script src="js/respond.js"></script><![endif]-->
  </head>
  
  <body>
  
  <div class="page-wrapper">
     <!-- Preloader -->
      <div class="preloader"></div>
     <!-- Main Header-->
      <header class="main-header">
      <!--Header-Upper-->
    <div class="header-upper">
    <div class="container">
    <div class="clearfix">
    <!-- Logo Box -->
    <div class="pull-left logo-box">
    <div class="logo"><a href="index.html"><img src="images/logo.png" alt="" title=""></a></div>
    </div>
    <div class="nav-outer clearfix">
    <!-- Main Menu -->
    <nav class="main-menu navbar-expand-md">
    <div class="navbar-header">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button>
    </div>
    <div class="navbar-collapse collapse clearfix" id="navbarSupportedContent">
    <ul class="navigation clearfix">
    <li class="current dropdown"><a href="#">Home</a>
    <ul>
    <li><a href="index.html">Home Page 01</a></li>
    <li><a href="index-2.html">Home Page 02</a></li>
    </ul>
    </li>
    <li class="dropdown"><a href="#">About Us</a>
    <ul>
    <li><a href="about.html">About Us</a></li>
    <li><a href="testimonial.html">Testimonial</a></li>
    </ul>
    </li>
    <li class="dropdown"><a href="#">Services</a>
    <ul>
    <li><a href="services.html">Services</a></li>
    <li><a href="services-detail.html">Services Detail</a></li>
    </ul>
    </li>
    <li class="dropdown"><a href="#">Portfolio</a>
    <ul>
    <li><a href="portfolio-2-column.html">Portfolio Two Column</a></li>
    <li><a href="portfolio-masonry.html">Portfolio Masonry</a></li>
    <li><a href="portfolio-single.html">Portfolio Single</a></li>
    </ul>
    </li>
    <li class="dropdown"><a href="#">Blog</a>
    <ul>
    <li><a href="blog-list.html">Blog List</a></li>
    <li><a href="blog-single.html">Blog Single</a></li>
    </ul>
    </li>
    <li><a href="contact.html">Contact us</a></li>
    </ul>
    </div>
    </nav>
  
    <div class="outer-box">
    <!--Search Box--><div class="search-box-outer">
    <div class="dropdown">
    <button class="search-box-btn dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="fa fa-search"></span></button>
    <ul class="dropdown-menu pull-right search-panel" aria-labelledby="dropdownMenu1">
    <li class="panel-outer">
    <div class="form-container">
    <form method="post" action="blog.html">
    <div class="form-group"><input type="search" name="field-name" value="" placeholder="Search Here" required><button type="submit" class="search-btn"><span class="fa fa-search"></span></button></div>
    </form>
    </div>
    </li>
    </ul>
    </div>
    </div>
    <!--Nav Toggler-->
    <div class="nav-toggler"><div class="nav-btn hidden-bar-opener"><span class="flaticon-menu"></span></div></div>
    </div>
    </div>
    </div>
    </div>
    </div>
    <!--End Header Upper-->
    <!--Sticky Header-->
    <div class="sticky-header">
    <div class="container clearfix">
    <!--Logo-->
    <div class="logo pull-left">
    <a href="index.html" class="img-responsive"><img src="images/logo-small.png" alt="" title=""></a>
    </div>
    <!--Right Col-->
    <div class="right-col pull-right">
    <!-- Main Menu -->
    <nav class="main-menu navbar-expand-md">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation">
    <span class="icon-bar"></span>
    <span class="icon-bar"></span>
    <span class="icon-bar"></span>
    </button>
  
    <div class="navbar-collapse collapse clearfix" id="navbarSupportedContent1">
    <ul class="navigation clearfix">
    <li class="current dropdown"><a href="#">Home</a>
    <ul>
    <li><a href="index.html">Home Page 01</a></li>
    <li><a href="index-2.html">Home Page 02</a></li>
    </ul>
    </li>
    <li class="dropdown"><a href="#">About Us</a>
    <ul>
    <li><a href="about.html">About Us</a></li>
    <li><a href="testimonial.html">Testimonial</a></li>
    </ul>
    </li>
    <li class="dropdown"><a href="#">Services</a>
    <ul>
    <li><a href="services.html">Services</a></li>
    <li><a href="services-detail.html">Services Detail</a></li>
    </ul>
    </li>
    <li class="dropdown"><a href="#">Portfolio</a>
    <ul>
    <li><a href="portfolio-2-column.html">Portfolio Two Column</a></li>
    <li><a href="portfolio-masonry.html">Portfolio Masonry</a></li>
    <li><a href="portfolio-single.html">Portfolio Single</a></li>
    </ul>
    </li>
    <li class="dropdown"><a href="#">Blog</a>
    <ul>
    <li><a href="blog-list.html">Blog List</a></li>
    <li><a href="blog-single.html">Blog Single</a></li>
    </ul>
    </li>
    <li><a href="contact.html">Contact us</a></li>
    </ul>
    </div>
    </nav><!-- Main Menu End-->
    </div>
  
    </div>
    </div>
    <!--End Sticky Header-->
    </header>
      <!--End Main Header -->
    
    <!--Form Back Drop-->
      <div class="form-back-drop"></div>
    
    <!-- Hidden Navigation Bar -->
    <section class="hidden-bar right-align">
      <div class="hidden-bar-closer">
      <button><span class="fa fa-remove"></span></button>
      </div>
      <!-- Hidden Bar Wrapper -->
      <div class="hidden-bar-wrapper">
      <div class="inner-box">
      <div class="logo">
      <a href="index.html"><img src="images/sidebar-logo.png" alt="" /></a>
      </div>
      <div class="text">Lorem ipsum, or lipsum as it is sometimes the known, is dummy text used in laying out print, graphic or web designs. The passage</div>
      <!-- List Style Four -->
      <ul class="list-style-four">
      <li><span class="icon flaticon-house"></span> <strong>Collins Street</strong>West Victoria 8007 Australia</li>
      <li><span class="icon flaticon-phone-call"></span> <strong>Call us!</strong>124-3254-325</li>
      <li><span class="icon flaticon-talk"></span><strong>Mail address</strong>info@domain.com</li>
      </ul>
      <div class="lower-box">
      <!-- Social Icons -->
      <ul class="social-icons">
      <li class="facebook"><a href="#"><span class="fa fa-facebook"></span></a></li>
      <li class="twitter"><a href="#"><span class="fa fa-twitter"></span></a></li>
      <li class="pinterest"><a href="#"><span class="fa fa-pinterest-p"></span></a></li>
      <li class="vimeo"><a href="#"><span class="fa fa-vimeo"></span></a></li>
      </ul>
      <a href="#" class="theme-btn buy-btn">Buy LawSight today!</a>
      </div>
      </div>
      </div><!-- / Hidden Bar Wrapper -->
    </section>
    <!-- End / Hidden Bar -->
    
    <!--Banner Section-->
      <section class="banner-section">
      <div class="main-slider-carousel owl-carousel owl-theme">
        <!-- Slide -->
        <div class="slide" style="background-image:url(images/main-slider/1.jpg)">
          <div class="container">
            <div class="content">
              <div class="title">Introduce with LawSight</div>
              <h1>We are here to protect <br> any kind of <span>Violance</span></h1>
              <a href="#" class="theme-btn btn-style-one">Contact us today</a>
            </div>
          </div>
        </div>
        <!-- Slide -->
        <div class="slide" style="background-image:url(images/main-slider/1.jpg)">
          <div class="container">
            <div class="content">
              <div class="title">Introduce with LawSight</div>
              <h1>We are here to protect <br> any kind of <span>Violance</span></h1>
              <a href="#" class="theme-btn btn-style-one">Contact us today</a>
            </div>
          </div>
        </div>
        <!-- Slide -->
        <div class="slide" style="background-image:url(images/main-slider/1.jpg)">
          <div class="container">
            <div class="content">
              <div class="title">Introduce with LawSight</div>
              <h1>We are here to protect <br> any kind of <span>Violance</span></h1>
              <a href="#" class="theme-btn btn-style-one">Contact us today</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--End Banner Section-->
    
    <!-- Services Section -->
    <section class="services-section">
      <div class="icon-one wow zoomIn" data-wow-delay="250ms" data-wow-duration="1500ms" style="background-image:url(images/icons/icon-1.png)"></div>
      <div class="icon-two wow fadeInRight" data-wow-delay="500ms" data-wow-duration="1500ms" style="background-image:url(images/icons/icon-2.png)"></div>
      <div class="container">
        <div class="row clearfix">
              
          <!-- Services Block -->
          <div class="services-block col-lg-4 col-md-6 col-sm-12">
            <div class="inner-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
              <div class="border-one"></div>
              <div class="border-two"></div>
              <div class="content">
                <div class="icon-box">
                  <span class="icon flaticon-family"></span>
                </div>
                <h6><a href="services-detail.html">99% winning guarantee</a></h6>
                <div class="text">Lorem ipsum dolor sit amet, con sectetu adipiscing elit, sed do eius mod tempor.</div>
              </div>
            </div>
          </div>
          
          <!-- Services Block -->
          <div class="services-block col-lg-4 col-md-6 col-sm-12">
            <div class="inner-box wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
              <div class="border-one"></div>
              <div class="border-two"></div>
              <div class="content">
                <div class="icon-box">
                  <span class="icon flaticon-fingerprint-1"></span>
                </div>
                <h6><a href="services-detail.html">Business Planning</a></h6>
                <div class="text">Lorem ipsum dolor sit amet, con sectetu adipiscing elit, sed do eius mod tempor.</div>
              </div>
            </div>
          </div>
          
          <!-- Services Block -->
          <div class="services-block col-lg-4 col-md-6 col-sm-12">
            <div class="inner-box wow fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms">
              <div class="border-one"></div>
              <div class="border-two"></div>
              <div class="content">
                <div class="icon-box">
                  <span class="icon flaticon-non-stop-call"></span>
                </div>
                <h6><a href="services-detail.html">Investment Trade</a></h6>
                <div class="text">Lorem ipsum dolor sit amet, con sectetu adipiscing elit, sed do eius mod tempor.</div>
              </div>
            </div>
          </div>
        
        </div>
      </div>
    </section>
    <!-- End Services Section -->
    
    <!-- About Section -->
    <section class="about-section">
      <!-- Image Layer -->
      <div class="image-layer" style="background-image:url(images/resource/about-1.jpg)"></div>
      <div class="container">
        <div class="row clearfix">
          
          <!-- Content Column -->
          <div class="content-column col-lg-7 col-md-12 col-sm-12">
            <div class="inner-column">
              
              <!-- Sec Title -->
              <div class="section-title">
                <div class="title">about us</div>
                <h3>We are here to fight against any violance with <span>experience</span></h3>
              </div>
              
              <div class="text">
                <p>The argument in favor of using filler text goes something like this: If you use real content in the <span>design process,</span> anytime you reach a review point you’ll end up reviewing and negotiating the content itself and not the design.</p>
                <p>Aenean tincidunt id mauris id auctor. Donec at ligula lacus. Nulla dignissim mi quis neque interdum, quis porta sem finibus.</p>
              </div>
              <div class="row clearfix">
                <div class="column col-lg-6 col-md-6 col-sm-12">
                  <ul class="list-style-one">
                    <li>Praesent feugiat sem mattis.</li>
                  </ul>
                </div>
                <div class="column col-lg-6 col-md-6 col-sm-12">
                  <ul class="list-style-one">
                    <li>A wonderful serenity.</li>
                  </ul>
                </div>
                <div class="column col-lg-6 col-md-6 col-sm-12">
                  <ul class="list-style-one">
                    <li>Premium services beyond you.</li>
                  </ul>
                </div>
                <div class="column col-lg-6 col-md-6 col-sm-12">
                  <ul class="list-style-one">
                    <li>Set a link back to this photo.</li>
                  </ul>
                </div>
              </div>
              <div class="question">Call to ask <a href="#">any question</a> <strong>540-325-1523</strong> <span class="or">or</span> <strong>540-328-1265</strong></div>
              <div class="signature">
                <div class="signature-img"><img src="images/icons/signature.png" alt=""/></div>
                <h5>Natalia Duke</h5>
                <div class="designation">(Chairman and founder)</div>
              </div>
            </div>
          </div>
          
          <!-- Image Column -->
          <div class="image-column col-lg-5 col-md-12 col-sm-12">
            <div class="inner-column wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
              <div class="image">
                <img src="images/resource/about-2.jpg" alt=""/>
                <div class="overlay-box">
                  <div class="overlay-inner">
                    <div class="content">
                      <h2>35 <span>years of experience</span></h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          
        </div>
      </div>
    </section>
    <!-- End About Section -->
    
    <!-- Services Section Two -->
    <section class="services-section-two" style="background-image: url(images/background/1.jpg);">
      <div class="container">
        <!-- Sec Title -->
        <div class="section-title light centered">
          <div class="title">Services</div>
          <h3>We are here to fight against any <br> violance with <span>experience</span></h3>
        </div>
        <div class="row clearfix">
          
          <!-- Services Block Two -->
          <div class="services-block-two col-lg-4 col-md-6 col-sm-12">
            <div class="inner-box">
              <div class="icon-box">
                <span class="icon flaticon-internet"></span>
              </div>
              <h3>Business Law</h3>
              <div class="text">It is a long established fact that areader will be distracted by the readable content of a page when looking.</div>
              <div class="overlay-box" style="background-image: url(images/resource/service-1.jpg);">
                <div class="overlay-inner">
                  <div class="content">
                    <span class="icon flaticon-internet"></span>
                    <h4><a href="services-detail.html">Business Law</a></h4>
                    <a href="services-detail.html" class="theme-btn btn-style-one">consult now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Services Block Two -->
          <div class="services-block-two col-lg-4 col-md-6 col-sm-12">
            <div class="inner-box">
              <div class="icon-box">
                <span class="icon flaticon-museum"></span>
              </div>
              <h3>Civil Law</h3>
              <div class="text">It is a long established fact that areader will be distracted by the readable content of a page when looking.</div>
              <div class="overlay-box" style="background-image: url(images/resource/service-1.jpg);">
                <div class="overlay-inner">
                  <div class="content">
                    <span class="icon flaticon-museum"></span>
                    <h4><a href="services-detail.html">Civil Law</a></h4>
                    <a href="services-detail.html" class="theme-btn btn-style-one">consult now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Services Block Two -->
          <div class="services-block-two col-lg-4 col-md-6 col-sm-12">
            <div class="inner-box">
              <div class="icon-box">
                <span class="icon flaticon-gun"></span>
              </div>
              <h3>Criminal Law</h3>
              <div class="text">It is a long established fact that areader will be distracted by the readable content of a page when looking.</div>
              <div class="overlay-box" style="background-image: url(images/resource/service-1.jpg);">
                <div class="overlay-inner">
                  <div class="content">
                    <span class="icon flaticon-gun"></span>
                    <h4><a href="services-detail.html">Criminal Law</a></h4>
                    <a href="services-detail.html" class="theme-btn btn-style-one">consult now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Services Block Two -->
          <div class="services-block-two col-lg-4 col-md-6 col-sm-12">
            <div class="inner-box">
              <div class="icon-box">
                <span class="icon flaticon-plan"></span>
              </div>
              <h3>Business Law</h3>
              <div class="text">It is a long established fact that areader will be distracted by the readable content of a page when looking.</div>
              <div class="overlay-box" style="background-image: url(images/resource/service-1.jpg);">
                <div class="overlay-inner">
                  <div class="content">
                    <span class="icon flaticon-plan"></span>
                    <h4><a href="services-detail.html">Business Law</a></h4>
                    <a href="services-detail.html" class="theme-btn btn-style-one">consult now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Services Block Two -->
          <div class="services-block-two col-lg-4 col-md-6 col-sm-12">
            <div class="inner-box">
              <div class="icon-box">
                <span class="icon flaticon-book"></span>
              </div>
              <h3>Education Law</h3>
              <div class="text">It is a long established fact that areader will be distracted by the readable content of a page when looking.</div>
              <div class="overlay-box" style="background-image: url(images/resource/service-1.jpg);">
                <div class="overlay-inner">
                  <div class="content">
                    <span class="icon flaticon-book"></span>
                    <h4><a href="services-detail.html">Education Law</a></h4>
                    <a href="services-detail.html" class="theme-btn btn-style-one">consult now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Services Block Two -->
          <div class="services-block-two col-lg-4 col-md-6 col-sm-12">
            <div class="inner-box">
              <div class="icon-box">
                <span class="icon flaticon-house-outline"></span>
              </div>
              <h3>Real Estate law</h3>
              <div class="text">It is a long established fact that areader will be distracted by the readable content of a page when looking.</div>
              <div class="overlay-box" style="background-image: url(images/resource/service-1.jpg);">
                <div class="overlay-inner">
                  <div class="content">
                    <span class="icon flaticon-house-outline"></span>
                    <h4><a href="services-detail.html">Real Estate law</a></h4>
                    <a href="services-detail.html" class="theme-btn btn-style-one">consult now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      
        <!-- Lower Section -->
        <div class="lower-section">
          <div class="carousel-box">
            <div class="content">
              <div class="single-item-carousel owl-carousel owl-theme">
                
                <!-- Testimonial Block -->
                <div class="testimonial-block">
                  <div class="inner-box">
                    <div class="testimonial-content">
                      <span class="quote-icon flaticon-left-quote"></span>
                      <div class="text">Aenean tincidunt id mauris id auctor. Donec at ligula lacus. Nulla dignissim mi quis neque interdum, quis porta sem finibus. Them to gho ifndtp, no.</div>
                      <!-- Lower Box -->
                      <div class="lower-box">
                        <div class="box-inner">
                          <div class="image">
                            <img src="images/resource/author-2.jpg" alt="" />
                          </div>
                          <h3>Willem Eduard</h3>
                          <div class="designation">Envato Author</div>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                </div>
                
                <!-- Testimonial Block -->
                <div class="testimonial-block">
                  <div class="inner-box">
                    <div class="testimonial-content">
                      <span class="quote-icon flaticon-left-quote"></span>
                      <div class="text">Aenean tincidunt id mauris id auctor. Donec at ligula lacus. Nulla dignissim mi quis neque interdum, quis porta sem finibus. Them to gho ifndtp, no.</div>
                      <!-- Lower Box -->
                      <div class="lower-box">
                        <div class="box-inner">
                          <div class="image">
                            <img src="images/resource/author-2.jpg" alt="" />
                          </div>
                          <h3>Willem Eduard</h3>
                          <div class="designation">Envato Author</div>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                </div>
                
                <!-- Testimonial Block -->
                <div class="testimonial-block">
                  <div class="inner-box">
                    <div class="testimonial-content">
                      <span class="quote-icon flaticon-left-quote"></span>
                      <div class="text">Aenean tincidunt id mauris id auctor. Donec at ligula lacus. Nulla dignissim mi quis neque interdum, quis porta sem finibus. Them to gho ifndtp, no.</div>
                      <!-- Lower Box -->
                      <div class="lower-box">
                        <div class="box-inner">
                          <div class="image">
                            <img src="images/resource/author-2.jpg" alt="" />
                          </div>
                          <h3>Willem Eduard</h3>
                          <div class="designation">Envato Author</div>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
          
          <div class="image">
            <img src="images/resource/author-1.png" alt="" />
          </div>
          
        </div>
      
      </div>
    </section>
    <!-- End Services Section Two -->
    
    <!-- Counter Section -->
    <section class="counter-section">
      <div class="icon-one wow zoomIn" data-wow-delay="250ms" data-wow-duration="1500ms" style="background-image:url(images/icons/icon-3.png)"></div>
      <div class="icon-two wow fadeInRight" data-wow-delay="500ms" data-wow-duration="1500ms" style="background-image:url(images/icons/icon-4.png)"></div>
      <div class="container">
        <!-- Title Box -->
        <div class="title-box">
          <div class="section-title">
            <div class="row clearfix">
              <div class="column col-lg-6 col-md-12 col-sm-12">
                <div class="title">Fun fact</div>
                <h3>We feel very proud for our <br> great <span>achievement</span></h3>
              </div>
              <div class="column col-lg-6 col-md-12 col-sm-12">
                <div class="row clearfix">
                  
                  <div class="col-lg-6 col-md-6 col-sm-12">
                    <p>Aenean tincidunt id mauris idology auctor. Donec at ligula lacus. Nulla dignissimmi quis neque interdum.</p>
                  </div>
                  
                  <div class="col-lg-6 col-md-6 col-sm-12">
                    <p>Aenean tincidunt id mauris idology auctor. Donec at ligula lacus. Nulla dignissimmi quis neque interdum.</p>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Fact Counter -->
        <div class="fact-counter">
          <div class="row clearfix">
          
            <!--Column-->
            <div class="column counter-column col-lg-3 col-md-6 col-sm-12">
              <div class="inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                <div class="count-outer count-box">
                  <span class="count-text" data-speed="3000ms" data-stop="1825">0</span>+
                  <div class="counter-title">Completed works</div>
                </div>
              </div>
            </div>
        
            <!--Column-->
            <div class="column counter-column col-lg-3 col-md-6 col-sm-12">
              <div class="inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                <div class="count-outer count-box">
                  <span class="count-text" data-speed="2000" data-stop="532">0</span>+
                  <div class="counter-title">Satisfied clients</div>
                </div>
              </div>
            </div>
        
            <!--Column-->
            <div class="column counter-column col-lg-3 col-md-6 col-sm-12">
              <div class="inner wow fadeInLeft" data-wow-delay="600ms" data-wow-duration="1500ms">
                <div class="count-outer count-box">
                  <span class="count-text" data-speed="2000" data-stop="69">0</span>+
                  <div class="counter-title">Winning awards</div>
                </div>
              </div>
            </div>
        
            <!--Column-->
            <div class="column counter-column col-lg-3 col-md-6 col-sm-12">
              <div class="inner wow fadeInLeft" data-wow-delay="900ms" data-wow-duration="1500ms">
                <div class="count-outer count-box">
                  <span class="count-text" data-speed="1500" data-stop="32">0</span>+
                  <div class="counter-title">Team members</div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
        
      </div>
    </section>
    
    <!-- Team Section -->
    <section class="team-section">
      <div class="container">
      
        <!-- Sec Title -->
        <div class="section-title light">
          <div class="clearfix">
            <div class="pull-left">
              <div class="title">Our Team</div>
              <h3>We feel very proud for our <br> great <span>achievement</span></h3>
            </div>
            <div class="pull-right">
              <div class="text">Aenean tincidunt id mauris idology auctor. Donec at ligula lacus. Nulla dig nissimmi quis neque interdum. An Ohio man allegedly punched his lawyer in the face in court Tuesday upon finding out he was sentenced.</div>
            </div>
          </div>
        </div>
        
        <div class="clearfix">
          
          <!-- Team Block -->
          <div class="team-block col-lg-3 col-md-6 col-sm-12">
            <div class="inner-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
              <div class="image">
                <a href="#"><img src="images/resource/team-1.jpg" alt="" /></a>
              </div>
              <div class="lower-content">
                <h3><a href="#">Jonson Leo</a></h3>
                <div class="designation">Civil Lawyer</div>
                <div class="overlay-box">
                  <div class="overlay-content">
                    <div class="title">Contact info</div>
                    <ul class="social-icons">
                      <li><a href="#"><span class="fa fa-facebook"></span></a></li>
                      <li><a href="#"><span class="fa fa-twitter"></span></a></li>
                      <li><a href="#"><span class="fa fa-pinterest-p"></span></a></li>
                      <li><a href="#"><span class="fa fa-vimeo"></span></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Team Block -->
          <div class="team-block col-lg-3 col-md-6 col-sm-12">
            <div class="inner-box wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
              <div class="image">
                <a href="#"><img src="images/resource/team-2.jpg" alt="" /></a>
              </div>
              <div class="lower-content">
                <h3><a href="#">Malina Leo</a></h3>
                <div class="designation">Terror Lawyer</div>
                <div class="overlay-box">
                  <div class="overlay-content">
                    <div class="title">Contact info</div>
                    <ul class="social-icons">
                      <li><a href="#"><span class="fa fa-facebook"></span></a></li>
                      <li><a href="#"><span class="fa fa-twitter"></span></a></li>
                      <li><a href="#"><span class="fa fa-pinterest-p"></span></a></li>
                      <li><a href="#"><span class="fa fa-vimeo"></span></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Team Block -->
          <div class="team-block col-lg-3 col-md-6 col-sm-12">
            <div class="inner-box wow fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms">
              <div class="image">
                <a href="#"><img src="images/resource/team-3.jpg" alt="" /></a>
              </div>
              <div class="lower-content">
                <h3><a href="#">Neobir Fro</a></h3>
                <div class="designation">Civil Lawyer</div>
                <div class="overlay-box">
                  <div class="overlay-content">
                    <div class="title">Contact info</div>
                    <ul class="social-icons">
                      <li><a href="#"><span class="fa fa-facebook"></span></a></li>
                      <li><a href="#"><span class="fa fa-twitter"></span></a></li>
                      <li><a href="#"><span class="fa fa-pinterest-p"></span></a></li>
                      <li><a href="#"><span class="fa fa-vimeo"></span></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Team Block -->
          <div class="team-block col-lg-3 col-md-6 col-sm-12">
            <div class="inner-box wow fadeInUp" data-wow-delay="900ms" data-wow-duration="1500ms">
              <div class="image">
                <a href="#"><img src="images/resource/team-4.jpg" alt="" /></a>
              </div>
              <div class="lower-content">
                <h3><a href="#">Neobir Fro</a></h3>
                <div class="designation">Criminal Lawyer</div>
                <div class="overlay-box">
                  <div class="overlay-content">
                    <div class="title">Contact info</div>
                    <ul class="social-icons">
                      <li><a href="#"><span class="fa fa-facebook"></span></a></li>
                      <li><a href="#"><span class="fa fa-twitter"></span></a></li>
                      <li><a href="#"><span class="fa fa-pinterest-p"></span></a></li>
                      <li><a href="#"><span class="fa fa-vimeo"></span></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        
      </div>
    </section>
    <!-- End Team Section -->
    
    <!-- Portfolio Section -->
    <section class="portfolio-section">
      <div class="container">
        <!-- Sec Title -->
        <div class="section-title centered">
          <div class="title">Portfolio</div>
          <h3>Check our portfolio which is built <br> with our <span>experience</span></h3>
        </div>
      </div>
      
      <!-- Outer Container -->
      <div class="outer-container">
        <div class="portfolio-carousel owl-carousel owl-theme">
          
          <!-- Portfolio Block -->
          <div class="portfolio-block">
            <div class="inner-box">
              <div class="image">
                <img src="images/gallery/1.jpg" alt="" />
                <div class="overlay-box">
                  <div class="overlay-inner">
                    <div class="content">
                      <div class="title">Human Rights</div>
                      <h3>Mental Tourcher</h3>
                    </div>
                  </div>
                </div>
                <div class="overlay-link">
                  <a href="images/gallery/1.jpg" data-fancybox="gallery-1" data-caption="" class="plus flaticon-plus"></a>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Portfolio Block -->
          <div class="portfolio-block">
            <div class="inner-box">
              <div class="image">
                <img src="images/gallery/2.jpg" alt="" />
                <div class="overlay-box">
                  <div class="overlay-inner">
                    <div class="content">
                      <div class="title">Personal Law</div>
                      <h3>Domestic Violence</h3>
                    </div>
                  </div>
                </div>
                <div class="overlay-link">
                  <a href="images/gallery/2.jpg" data-fancybox="gallery-1" data-caption="" class="plus flaticon-plus"></a>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Portfolio Block -->
          <div class="portfolio-block">
            <div class="inner-box">
              <div class="image">
                <img src="images/gallery/3.jpg" alt="" />
                <div class="overlay-box">
                  <div class="overlay-inner">
                    <div class="content">
                      <div class="title">Human Rights</div>
                      <h3>Marriage & Divorce</h3>
                    </div>
                  </div>
                </div>
                <div class="overlay-link">
                  <a href="images/gallery/3.jpg" data-fancybox="gallery-1" data-caption="" class="plus flaticon-plus"></a>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Portfolio Block -->
          <div class="portfolio-block">
            <div class="inner-box">
              <div class="image">
                <img src="images/gallery/4.jpg" alt="" />
                <div class="overlay-box">
                  <div class="overlay-inner">
                    <div class="content">
                      <div class="title">Human Rights</div>
                      <h3>Mental Tourcher</h3>
                    </div>
                  </div>
                </div>
                <div class="overlay-link">
                  <a href="images/gallery/4.jpg" data-fancybox="gallery-1" data-caption="" class="plus flaticon-plus"></a>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Portfolio Block -->
          <div class="portfolio-block">
            <div class="inner-box">
              <div class="image">
                <img src="images/gallery/5.jpg" alt="" />
                <div class="overlay-box">
                  <div class="overlay-inner">
                    <div class="content">
                      <div class="title">Personal Law</div>
                      <h3>Physical Violence</h3>
                    </div>
                  </div>
                </div>
                <div class="overlay-link">
                  <a href="images/gallery/5.jpg" data-fancybox="gallery-1" data-caption="" class="plus flaticon-plus"></a>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Portfolio Block -->
          <div class="portfolio-block">
            <div class="inner-box">
              <div class="image">
                <img src="images/gallery/1.jpg" alt="" />
                <div class="overlay-box">
                  <div class="overlay-inner">
                    <div class="content">
                      <div class="title">Human Rights</div>
                      <h3>Mental Tourcher</h3>
                    </div>
                  </div>
                </div>
                <div class="overlay-link">
                  <a href="images/gallery/1.jpg" data-fancybox="gallery-1" data-caption="" class="plus flaticon-plus"></a>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Portfolio Block -->
          <div class="portfolio-block">
            <div class="inner-box">
              <div class="image">
                <img src="images/gallery/2.jpg" alt="" />
                <div class="overlay-box">
                  <div class="overlay-inner">
                    <div class="content">
                      <div class="title">Personal Law</div>
                      <h3>Domestic Violence</h3>
                    </div>
                  </div>
                </div>
                <div class="overlay-link">
                  <a href="images/gallery/2.jpg" data-fancybox="gallery-1" data-caption="" class="plus flaticon-plus"></a>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Portfolio Block -->
          <div class="portfolio-block">
            <div class="inner-box">
              <div class="image">
                <img src="images/gallery/3.jpg" alt="" />
                <div class="overlay-box">
                  <div class="overlay-inner">
                    <div class="content">
                      <div class="title">Human Rights</div>
                      <h3>Marriage & Divorce</h3>
                    </div>
                  </div>
                </div>
                <div class="overlay-link">
                  <a href="images/gallery/3.jpg" data-fancybox="gallery-1" data-caption="" class="plus flaticon-plus"></a>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Portfolio Block -->
          <div class="portfolio-block">
            <div class="inner-box">
              <div class="image">
                <img src="images/gallery/4.jpg" alt="" />
                <div class="overlay-box">
                  <div class="overlay-inner">
                    <div class="content">
                      <div class="title">Human Rights</div>
                      <h3>Mental Tourcher</h3>
                    </div>
                  </div>
                </div>
                <div class="overlay-link">
                  <a href="images/gallery/4.jpg" data-fancybox="gallery-1" data-caption="" class="plus flaticon-plus"></a>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Portfolio Block -->
          <div class="portfolio-block">
            <div class="inner-box">
              <div class="image">
                <img src="images/gallery/5.jpg" alt="" />
                <div class="overlay-box">
                  <div class="overlay-inner">
                    <div class="content">
                      <div class="title">Personal Law</div>
                      <h3>Physical Violence</h3>
                    </div>
                  </div>
                </div>
                <div class="overlay-link">
                  <a href="images/gallery/5.jpg" data-fancybox="gallery-1" data-caption="" class="plus flaticon-plus"></a>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
    </section>
    <!-- End Portfolio Section -->
    
    <!-- Form Section -->
    <section class="form-section" style="background-image: url(images/background/2.jpg)">
      <div class="container">
        <!-- Upper Content -->
        <div class="upper-content">
          <div class="row clearfix">
            
            <!-- Title Column -->
            <div class="title-column col-lg-5 col-md-12 col-sm-12">
              <div class="inner-column">
                <!-- Sec Title -->
                <div class="section-title light">
                  <div class="title">Contact us</div>
                  <h3>Feel free to ask somthing <br> we are <span>here</span></h3>
                </div>
              </div>
            </div>
            
            <!-- Info Column -->
            <div class="info-column col-lg-7 col-md-12 col-sm-12">
              <div class="inner-column">
                <div class="row clearfix">
                  <!-- Column -->
                  <div class="column col-lg-6 col-md-6 col-sm-12">
                    <ul class="list-style-two">
                      <li><span class="icon flaticon-placeholder-1"></span>4 G-ral. Traian Mosoiu Street, A Building, 2nd Entrance, Flat 30, Cluj-Napoca, Romania</li>
                    </ul>
                  </div>
                  <!-- Column -->
                  <div class="column col-lg-6 col-md-6 col-sm-12">
                    <ul class="list-style-two">
                      <li><span class="icon flaticon-phone-call"></span>+012 (3456) 7890</li>
                      <li><span class="icon flaticon-chat"></span>support@lawsight.com</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
        <!-- Lower Content -->
        <div class="lower-content">
          
          <!-- Default Form -->
          <div class="default-form">
            <form method="post" action="blog.html">
              <div class="row clearfix">
                <div class="form-group col-lg-4 col-md-6 col-sm-12">
                  <input type="text" name="firstname" value="" placeholder="First name.." required>
                </div>
                
                <div class="form-group col-lg-4 col-md-6 col-sm-12">
                  <input type="text" name="email" value="" placeholder="Last name.." required>
                </div>
                
                <div class="form-group col-lg-4 col-md-12 col-sm-12">
                  <input type="text" name="phone" value="" placeholder="Email Address.." required>
                </div>
                
                <div class="form-group col-lg-12 col-md-12 col-sm-12">
                  <textarea name="message" placeholder="Write..."></textarea>
                </div>
                
                <div class="form-group col-lg-12 col-md-12 col-sm-12">
                  <button type="submit" class="theme-btn btn-style-one">Submit</button>
                </div>                                        
              </div>
            </form>
          </div>
          <!--End Default Form-->
          
        </div>
      </div>
    </section>
    <!-- End Form Section -->
    
    <!-- News Section -->
    <section class="news-section">
      <div class="container">
      
        <!-- Sec Title -->
        <div class="section-title">
          <div class="clearfix">
            <div class="pull-left">
              <div class="title">News</div>
              <h3>Learn something more from <br> our latest <span>news</span></h3>
            </div>
            <div class="pull-right">
              <div class="text">Aenean tincidunt id mauris idology auctor. Donec at ligula lacus. Nulla dig nissimmi quis neque interdum. An Ohio man allegedly punched his lawyer in the face in court Tuesday upon finding out he was sentenced.</div>
            </div>
          </div>
        </div>
        
        <div class="row clearfix">
          
          <!-- News Block -->
          <div class="news-block col-lg-4 col-md-6 col-sm-12">
            <div class="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
              <div class="image">
                <img src="images/resource/news-1.jpg" alt="" />
                <div class="overlay-box">
                  <a href="images/resource/news-1.jpg" data-fancybox="news" data-caption="" class="plus flaticon-plus"></a>
                </div>
              </div>
              <div class="lower-content">
                <ul class="post-meta">
                  <li><span class="fa fa-calendar"></span>September 12, 2019</li>
                  <li><span class="fa fa-user"></span>Admin</li>
                </ul>
                <h5><a href="blog-single.html">Strategy for Norway's Peion Fund Global.</a></h5>
                <a href="blog-single.html" class="theme-btn btn-style-two">View more</a>
              </div>
            </div>
          </div>
          
          <!-- News Block -->
          <div class="news-block col-lg-4 col-md-6 col-sm-12">
            <div class="inner-box wow fadeInLeft" data-wow-delay="300ms" data-wow-duration="1500ms">
              <div class="image">
                <img src="images/resource/news-2.jpg" alt="" />
                <div class="overlay-box">
                  <a href="images/resource/news-2.jpg" data-fancybox="news" data-caption="" class="plus flaticon-plus"></a>
                </div>
              </div>
              <div class="lower-content">
                <ul class="post-meta">
                  <li><span class="fa fa-calendar"></span>September 12, 2019</li>
                  <li><span class="fa fa-user"></span>Admin</li>
                </ul>
                <h5><a href="blog-single.html">What we are capable of usually gets discovered.</a></h5>
                <a href="blog-single.html" class="theme-btn btn-style-two">View more</a>
              </div>
            </div>
          </div>
          
          <!-- News Block -->
          <div class="news-block col-lg-4 col-md-6 col-sm-12">
            <div class="inner-box wow fadeInLeft" data-wow-delay="600ms" data-wow-duration="1500ms">
              <div class="image">
                <img src="images/resource/news-3.jpg" alt="" />
                <div class="overlay-box">
                  <a href="images/resource/news-3.jpg" data-fancybox="news" data-caption="" class="plus flaticon-plus"></a>
                </div>
              </div>
              <div class="lower-content">
                <ul class="post-meta">
                  <li><span class="fa fa-calendar"></span>September 12, 2019</li>
                  <li><span class="fa fa-user"></span>Admin</li>
                </ul>
                <h5><a href="blog-single.html">Food industry leaders often change their promoters.</a></h5>
                <a href="blog-single.html" class="theme-btn btn-style-two">View more</a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
    <!-- End News Section -->
    
    <!-- Subscribe Section -->
    <section class="subscribe-section">
      <div class="container">
        <div class="inner-container" style="background-image: url(images/background/3.jpg)">
          <h2>Subscribe Your Email for Newsletter <br> & Promotion</h2>
          <!-- Subscribe Form -->
          <div class="subscribe-form">
            <form method="post" action="contact.html">
              <div class="form-group">
                <input type="email" name="email" value="" placeholder="Email address.." required>
                <button type="submit" class="theme-btn subscribe-btn">Subscribe</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <!-- End Subscribe Section -->
    
    <!--Main Footer-->
      <footer class="main-footer">
        <div class="container">
            <!--Widgets Section-->
              <div class="widgets-section">
                <div class="row clearfix">
                    
                      <!--Column-->
                      <div class="big-column col-lg-6 col-md-12 col-sm-12">
              <div class="row clearfix">
              
                            <!--Footer Column-->
                              <div class="footer-column col-lg-7 col-md-6 col-sm-12">
                                  <div class="footer-widget logo-widget">
                    <div class="logo">
                      <a href="index.html"><img src="images/footer-logo.png" alt="" /></a>
                    </div>
                    <div class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</div>
                    <ul class="list-style-three">
                      <li><span class="icon fa fa-phone"></span> +123 (4567) 890</li>
                      <li><span class="icon fa fa-envelope"></span> info@lawsight.com</li>
                      <li><span class="icon fa fa-home"></span>380 St Kilda Road, Melbourne <br> VIC 3004, Australia</li>
                    </ul>
                  </div>
                </div>
                
                <!--Footer Column-->
                              <div class="footer-column col-lg-5 col-md-6 col-sm-12">
                                  <div class="footer-widget links-widget">
                    <h4>Links</h4>
                    <ul class="list-link">
                      <li><a href="">Home</a></li>
                      <li><a href="">Services</a></li>
                      <li><a href="">About us</a></li>
                      <li><a href="">Testimonials</a></li>
                      <li><a href="">News</a></li>
                      <li><a href="">Contact</a></li>
                    </ul>
                  </div>
                </div>
  
              </div>
            </div>
            
            <!--Column-->
                      <div class="big-column col-lg-6 col-md-12 col-sm-12">
              <div class="row clearfix">
              
                            <!--Footer Column-->
                              <div class="footer-column col-lg-6 col-md-6 col-sm-12">
                                  <div class="footer-widget links-widget">
                    <h4>Support</h4>
                    <ul class="list-link">
                      <li><a href="">Contact Us</a></li>
                      <li><a href="">Submit a Ticket</a></li>
                      <li><a href="">Visit Knowledge Base</a></li>
                      <li><a href="">Support System</a></li>
                      <li><a href="">Refund Policy</a></li>
                      <li><a href="">Professional Services</a></li>
                    </ul>
                  </div>
                </div>
                
                <!--Footer Column-->
                              <div class="footer-column col-lg-6 col-md-6 col-sm-12">
                                  <div class="footer-widget gallery-widget">
                    <h4>Gallery</h4>
                    <div class="widget-content">
                      <div class="images-outer clearfix">
                        <!--Image Box-->
                        <figure class="image-box"><a href="images/gallery/1.jpg" class="lightbox-image" data-fancybox="footer-gallery" title="Image Title Here" data-fancybox-group="footer-gallery"><img src="images/gallery/footer-gallery-thumb-1.jpg" alt=""></a></figure>
                        <!--Image Box-->
                        <figure class="image-box"><a href="images/gallery/2.jpg" class="lightbox-image" data-fancybox="footer-gallery" title="Image Title Here" data-fancybox-group="footer-gallery"><img src="images/gallery/footer-gallery-thumb-2.jpg" alt=""></a></figure>
                        <!--Image Box-->
                        <figure class="image-box"><a href="images/gallery/3.jpg" class="lightbox-image" data-fancybox="footer-gallery" title="Image Title Here" data-fancybox-group="footer-gallery"><img src="images/gallery/footer-gallery-thumb-3.jpg" alt=""></a></figure>
                        <!--Image Box-->
                        <figure class="image-box"><a href="images/gallery/4.jpg" class="lightbox-image" data-fancybox="footer-gallery" title="Image Title Here" data-fancybox-group="footer-gallery"><img src="images/gallery/footer-gallery-thumb-4.jpg" alt=""></a></figure>
                        <!--Image Box-->
                        <figure class="image-box"><a href="images/gallery/5.jpg" class="lightbox-image" data-fancybox="footer-gallery" title="Image Title Here" data-fancybox-group="footer-gallery"><img src="images/gallery/footer-gallery-thumb-5.jpg" alt=""></a></figure>
                        <!--Image Box-->
                        <figure class="image-box"><a href="images/gallery/6.jpg" class="lightbox-image" data-fancybox="footer-gallery" title="Image Title Here" data-fancybox-group="footer-gallery"><img src="images/gallery/footer-gallery-thumb-6.jpg" alt=""></a></figure>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
            
          </div>
        </div>
      </div>
      
      <!-- Footer Bottom -->
      <div class="footer-bottom">
        <div class="container">
          <div class="row clearfix">
            
            <!-- Copyright Column -->
            <div class="copyright-column col-lg-6 col-md-6 col-sm-12">
              <div class="copyright">2019 &copy; All rights reserved by <a href="#">Themexriver</a></div>
            </div>
            
            <!-- Social Column -->
            <div class="social-column col-lg-6 col-md-6 col-sm-12">
              <ul>
                <li class="follow">Follow us: </li>
                <li><a href="#"><span class="fa fa-facebook-square"></span></a></li>
                <li><a href="#"><span class="fa fa-twitter-square"></span></a></li>
                <li><a href="#"><span class="fa fa-linkedin-square"></span></a></li>
                <li><a href="#"><span class="fa fa-google-plus-square"></span></a></li>
                <li><a href="#"><span class="fa fa-rss-square"></span></a></li>
              </ul>
            </div>
            
          </div>
        </div>
      </div>
    </footer>
    
  </div>
  <!--End pagewrapper-->
  
  <!--Scroll to top-->
  <div class="scroll-to-top scroll-to-target" data-target="html"><span class="fa fa-arrow-circle-up"></span></div>
  
  <script src="js/jquery.js"></script>
  <script src="js/popper.min.js"></script>
  <script src="js/bootstrap.min.js"></script>
  <script src="js/jquery.mCustomScrollbar.concat.min.js"></script>
  <script src="js/jquery.fancybox.js"></script>
  <script src="js/appear.js"></script>
  <script src="js/owl.js"></script>
  <script src="js/wow.js"></script>
  <script src="js/jquery-ui.js"></script>
  <script src="js/script.js"></script>
  
  </body>
  </html>`;
  isHidden=false;
  isOpen = false;
  constructor() { }

  ngOnInit(): void {
  }
  // isOpen = false;

  openNav() {
    this.isOpen = !this.isOpen;
  }

  closeNav() {
    this.isOpen = false;
  }
    
  // }isHiddenSideBar(){
  //   console.log("HELLO");
    
  //   this.isHidden=true;
  // }

}
