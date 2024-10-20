import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const Save = () => {
  React.useEffect(() => {
    // GSAP animations for navigation and main background color
    gsap.to("#nav", {
      backgroundColor: "#000",
      duration: 0.2,
      height: "100px",
      scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 3,
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
  }, []);

  return (
    <div id="body">
      <video autoPlay loop muted src="./src/assets/bg.mp4"></video>
      <div id="main">
        <div id="page1">
          <h1>We've got you covered!</h1>
          <h2>Professional Services, Personalized for You</h2>
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
                  <p className="title">Technician</p>
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
              <img
                src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_1232,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1698216901117-d92940.jpeg"
                alt="Ad"
              />
            </div>
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
            padding: 0 100px;
            justify-content: flex-start;
            position: fixed;
            z-index: 100 !important;
          }
          #nav-logo {
            height: 4.5vw;
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
            color: black !important;
          }
          #nav h4:after {
            content: "";
            display: block;
            height: 1px;
            position: absolute;
            bottom: 0;
            right: 1.25rem;
            left: 1.25rem;
            background-color: #9a58d0;
            transition: all 0.3s cubic-bezier(0.2, 0, 0, 1);
            transform-origin: bottom center;
            z-index: -1;
          }
          #nav h4:hover:after {
            right: 0;
            left: 0;
            height: 100%;
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
            font-size: 105px;
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
            margin-left: 250px;
            font-size: 50px;
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

        `}
      </style>
    </div>
  );
};

export default Save;
