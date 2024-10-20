import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import TypeWriter from "typewriter-effect";
// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const Save = () => {
  const navigate = useNavigate();
  React.useEffect(() => {
    // GSAP animations for navigation and main background color
    gsap.to("#nav", {
      backgroundColor: "#000",
      duration: 0.1,
      height: "100px",
      scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 2,
      },
    });

    gsap.to("#main", {
      backgroundColor: "#fcfcfc",
      scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -40%",
        end: "top -50%",
        scrub: 2,
      },
    });
    gsap.to("#serve-head", {
      scale: 1.2,
      x: 290,
      duration: 1,
      opacity: 100,
      scale: 1.1,
      fontWeight: 600,
      scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -5%",
        end: "top -70%",
        scrub: 1,
      },
    });
    gsap.from("#article", {
      opacity: 0,
      scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -5%",
        end: "top -70%",
        scrub: 1,
      },
    });
  }, []);
  useEffect(() => {
    if (isAuthenticated) {
      // navigate("/form");
    }
  });
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  return (
    <div id="body">
      <div id="nav">
        <img id="nav-logo" src="./src/assets/Pro.jpeg" />
        <a href="/">
          <h4>Home</h4>
        </a>
        <a href="/form">
          <h4>Register Form</h4>
        </a>
        <a href="/about">
          <h4>About</h4>
        </a>
        <a href="/contact">
          <h4>Contact Us</h4>
        </a>

        <a href="/pro-confirm">
          <h4>Pro Dashboard</h4>
        </a>

        {isAuthenticated ? (
          <h3>
            <button
              className="items-end text-white bg-purple-500 hover:bg-purple-8=600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 "
              onClick={() => logout({ returnTo: window.location.origin })}
              style={{ marginBottom: "20px" }}
            >
              Log out
            </button>
          </h3>
        ) : (
          <h3>
            <button
              className="items-end text-white bg-purple-500 hover:bg-purple-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800 p-30"
              onClick={() => loginWithRedirect()}
              style={{ marginBottom: "20px" }}
            >
              Log In
            </button>
          </h3>
        )}
        <img
          id="profile"
          src={
            user && user.picture ? user.picture : "./src/assets/profile.jpeg"
          }
          alt="profile"
        />
      </div>

      <video autoPlay loop muted src="./src/assets/bg.mp4"></video>
      <div id="main">
        <div id="page1">
          <h1>We've got you covered!</h1>
          <h2>
            <TypeWriter
              options={{ loop: true, autoStart: true }}
              onInit={(writer) => {
                writer
                  .typeString("Professional Services, Personalized for You")
                  .pauseFor(1500)
                  .deleteAll()

                  .start();
              }}
            />
          </h2>
        </div>
        <h2 id="serve-head">Save Services at your doorsteps</h2>
        <div id="page2">
          <div id="serve-main">
            <div className="center">
              <div className="article-card">
                <div className="content">
                  <p className="date"></p>
                  <p className="title">Beauty</p>
                </div>
                <a
                  href="/beauty
                "
                >
                  <img src="./src/assets/beauty.jpeg" alt="Beauty Service" />
                </a>
              </div>
            </div>
            <div className="center">
              <div className="article-card">
                <div className="content">
                  <p className="date"></p>
                  <p className="title">Clean</p>
                </div>
                <a href="/cleaning">
                  <img src="./src/assets/cleaner.jpeg" alt="Cleaning Service" />
                </a>
              </div>
            </div>
            <div className="center">
              <div className="article-card">
                <div className="content">
                  <p className="date"></p>
                  <p className="title">Electrician</p>
                </div>
                <a href="/electrician">
                  <img
                    src="./src/assets/electrician.jpeg"
                    alt="Technician Service"
                  />
                </a>
              </div>
            </div>
          </div>
          <div id="page3">
            <div id="ad">
              <a href="/cleaning">
                <img
                  src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_1232,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1698216901117-d92940.jpeg"
                  alt="Ad"
                />
              </a>
            </div>
            <div id="reviews">
              <h1></h1>
              <body>
                <div class="testimonials text-center">
                  <div class="container">
                    <h3>See what happy customers are saying about PickAPro</h3>
                    <div class="row">
                      <div class="col-md-6 col-lg-4">
                        <div class="card border-light bg-light text-center">
                          <i
                            class="fa fa-quote-left fa-3x card-img-top rounded-circle"
                            aria-hidden="true"
                          >
                            <img src="../src/assets/quote-svgrepo-com.svg"></img>
                          </i>
                          <div class="card-body blockquote">
                            <p class="card-text">
                              Super easy to book, and the professionals are
                              always on time! My house has never looked cleaner.
                              PickAPro is a lifesaver!
                            </p>
                            <footer class="blockquote-footer" id="who_said">
                              <cite title="Source Title">Ananya Gupta</cite>
                            </footer>
                          </div>
                        </div>
                      </div>

                      <div class="col-md-6 col-lg-4">
                        <div class="card border-light bg-light text-center">
                          <i
                            class="fa fa-quote-left fa-3x card-img-top rounded-circle"
                            aria-hidden="true"
                          >
                            <img src="../src/assets/quote-svgrepo-com.svg"></img>
                          </i>
                          <div class="card-body blockquote">
                            <p class="card-text">
                              Used PickAPro for appliance repair. The technician
                              was knowledgeable, friendly, and fixed my washing
                              machine in no time. Highly recommend!
                            </p>
                            <footer class="blockquote-footer">
                              <cite title="Source Title">Rohan Mehra</cite>
                            </footer>
                          </div>
                        </div>
                      </div>

                      <div class="col-md-6 col-lg-4">
                        <div class="card border-light bg-light text-center">
                          <i
                            class="fa fa-quote-left fa-3x card-img-top rounded-circle"
                            aria-hidden="true"
                          >
                            <img src="../src/assets/quote-svgrepo-com.svg"></img>
                          </i>
                          <div class="card-body blockquote">
                            <p class="card-text">
                              Best beauty service at home! I booked a facial and
                              pedicure, and the professional was amazing. Will
                              definitely be using PickAPro again!
                            </p>
                            <footer class="blockquote-footer">
                              <cite title="Source Title">Mohamed Atef</cite>
                            </footer>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </body>
            </div>
          </div>
          <div id="page4">
            <section className="py-10 bg-gray-50 sm:pt-16 lg:pt-24">
              <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
                  <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
                    <img
                      className="w-auto h-9 "
                      src="../src/assets/Pro.jpeg"
                      alt=""
                    />

                    <p className="text-base leading-relaxed text-gray-600 mt-7">
                      We are dedicated to connecting you with trusted
                      professionals for all your home service needs. From
                      cleaning and maintenance to beauty and wellness, our
                      network of skilled experts ensures quality, reliability,
                      and convenience right at your doorstep.
                    </p>

                    <ul className="flex items-center space-x-3 mt-9">
                      <li>
                        <a
                          href="https:/www.x.com"
                          title=""
                          className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600"
                        >
                          <svg
                            className="w-4 h-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
                          </svg>
                        </a>
                      </li>

                      <li>
                        <a
                          href="https:/www.facebook.com"
                          title=""
                          className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600"
                        >
                          <svg
                            className="w-4 h-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                          </svg>
                        </a>
                      </li>

                      <li>
                        <a
                          href="https:/www.instagram.com"
                          title=""
                          className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600"
                        >
                          <svg
                            className="w-4 h-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
                            <circle cx="16.806" cy="7.207" r="1.078"></circle>
                            <path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"></path>
                          </svg>
                        </a>
                      </li>

                      <li>
                        <a
                          href="https:/www.github.com"
                          title=""
                          className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600"
                        >
                          <svg
                            className="w-4 h-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"></path>
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
                      Company
                    </p>

                    <ul className="mt-6 space-y-4">
                      <li>
                        <a
                          href="/about"
                          title=""
                          className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                        >
                          {" "}
                          About{" "}
                        </a>
                      </li>

                      <li>
                        <a
                          href="#"
                          title=""
                          className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                        >
                          {" "}
                          Features{" "}
                        </a>
                      </li>

                      <li>
                        <a
                          href="/form"
                          title=""
                          className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                        >
                          {" "}
                          Works{" "}
                        </a>
                      </li>

                      <li>
                        <a
                          href="/form"
                          title=""
                          className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                        >
                          {" "}
                          Career{" "}
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
                      Help
                    </p>

                    <ul className="mt-6 space-y-4">
                      <li>
                        <a
                          href="/contact"
                          title=""
                          className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                        >
                          {" "}
                          Customer Support{" "}
                        </a>
                      </li>

                      <li>
                        <a
                          href="#"
                          title=""
                          className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                        >
                          {" "}
                          Delivery Details{" "}
                        </a>
                      </li>

                      <li>
                        <a
                          href="#"
                          title=""
                          className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                        >
                          {" "}
                          Terms & Conditions{" "}
                        </a>
                      </li>

                      <li>
                        <a
                          href="#"
                          title=""
                          className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                        >
                          {" "}
                          Privacy Policy{" "}
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
                    <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
                      Subscribe to newsletter
                    </p>

                    <form action="#" method="POST" className="mt-6">
                      <div>
                        <label htmlFor="email" className="sr-only">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Enter your email"
                          className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                        />
                      </div>

                      <button
                        type="submit"
                        className="inline-flex items-center justify-center px-6 py-4 mt-3 font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:bg-blue-700"
                      >
                        Subscribe
                      </button>
                    </form>
                  </div>
                </div>

                <hr className="mt-16 mb-10 border-gray-200" />

                <p className="text-sm text-center text-gray-600">
                  © Copyright 2024, All Rights Reserved by Postcraft
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
      <style>
        {`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            color: white;
            font-family: "montserrat";
          }
          html,
          body {
            width: 100%;
            height: 100%;
          }
          #body{
            width: 100%;
            height: 100%;
          }  
          #nav {
            height: 130px;
            width: 100%;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 0 50px;
            justify-content: flex-start;
            position: fixed;
            z-index: 100 !important;
          }
          #nav-logo {
            height: 4.5vw;
            border-radius: 10%;
            margin-top:5px;

          }
          #profile {
            align-self: right;
            padding: 20px;
            height: 6vw;
          }
          #nav h4 {
            padding: 10px;
            text-transform: uppercase;
            font-weight: 500;
            position: relative;
            display: block;
            margin: 20px;
            color: white;
            font-size: 1rem;
            text-decoration: none;
            transition: all 0.3s cubic-bezier(0.2, 0, 0, 1);
            z-index: 1;
          }
          #nav h4:hover {
            color:#000 !important;
          }
          #nav h4 {
    position: relative;
    display: block;
    margin: 20px;
    color: white;
    font-size: 1rem;
    text-decoration: none;
    transition: all .3s cubic-bezier(.2, 0, 0, 1);
    z-index: 1;
    &:after {
      content: '';
      display: block;
      height: 1px;
      position: absolute;
      bottom: 0;
      right: 1.25rem;
      left: 1.25rem;
      background-color: #9a58d0;
      transition: all .3s cubic-bezier(.2, 0, 0, 1);
      transform-origin: bottom center;
      z-index: -1;
    }
    &:hover {
      color: black!important;
      &:after {
        right: 0;
        left: 0;
        height: 100%;
      }
    }
  }  
          #nav h3{
            margin-left:250px;
            margin-top:20px;
          }
          #profile{
            margin-top:15px;
          }  
          video {
            height: 100vh;
            width: 100vw;
            object-fit:cover;
            position: absolute;
            z-index: -1;
          }
          #main {
            position: relative;
            background-color: rgba(0, 0, 0, 0.4);
            width: 100vw;
        
          }
          #page1 {
            height: 100vh;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            font-weight: 900;
            
          }
          #page1 h1 {
        
            font-size: 90px;
            font-weight: 900;
            position: relative;
          }
          #page1 h1::before {
            position: absolute;
            color: black;
            content: "We've got you covered!";
            left: -5px;
            top: -5px;
            -webkit-text-stroke: 3px #9a58d0;
            z-index: -1;
          }
          #page1 h2 {
            font-size: 40px;
            font-weight: 900;
            margin-top: 10px;
            margin-bottom: 20px;
          }
          #page2 {
            width: 100%;
            height: 100vh;
          }
          #serve-main {
            display: flex;
            justify-content: center;
            font-size: x-large;
            padding: 100px;
          }
          #serve-head {
            color: black;
            position: absolute;
            z-index: 1;
            margin-bottom: 40px;
            
            font-size: 50px;
            font-weight:500;
          }
          .center {
            align-items: center;
            justify-content: center;
            padding: 30px;
          }
          .article-card {
            width: 350px;
            height: 220px;
            border-radius: 12px;
            overflow: hidden;
            position: relative;
            font-family: Arial, Helvetica, sans-serif;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
            transition: all 300ms;
          }
          .article-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
              0 10px 10px rgba(0, 0, 0, 0.22);
          }
          .article-card img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .article-card .content {
            box-sizing: border-box;
            width: 100%;
            position: absolute;
            padding: 30px 20px 20px 20px;
            height: auto;
            bottom: 0;
            background: linear-gradient(transparent, rgba(0, 0, 0, 0.6));
          }
          .article-card .date,
          .article-card .title {
            margin: 0;
          }
          .article-card .date {
            font-size: 12px;
            color: rgba(255, 255, 255, 0.9);
            margin-bottom: 4px;
          }
          .article-card .title {
            font-size: 18px;
            font-weight: 700;
            color: white;
          }
          #page3{
            height:100%;
            width:100%;
          }  
          #ad{
            display:flex;
            margin-left:150px;
            width:80%;
            border:2px solid black;
            
          } 
          #ad {
          overflow: hidden;
          }

          #ad{
            transition: transform 0.5s ease;
          }

          #ad:hover {
            transform: scale(1.05);
          }  
          #page4{
            height:60%;
            width:100%;
          }
          .testimonials {
            padding: 100px 0;
          }
          .testimonials h3 {
            margin-bottom: 20px;
            font-size:30px;
            color:black;
            font-weight:500;
            text-decoration:underline 1px;
          }
          .testimonials .card {
            border-bottom: 3px #007bff solid !important;
            transition: 0.5s;
            margin-top: 60px;
          }
          .testimonials .card i {
            background-color: #007bff;
            color: #fffff;
            width: 75px;
            height: 75px;
            line-height: 75px;
            margin: -40px auto 0 auto;
          }  
          .card-text{
            color:black;
          }

          .blockquote-footer{
            color:black;
          }
             
          
           

        `}
      </style>
    </div>
  );
};

export default Save;
