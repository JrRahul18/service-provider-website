import React, { useEffect } from "react";
import "../styles/home.css";
import photo3 from "../assets/photo3.jpg";
import pfp from "../assets/profilePic.png";
import {
  AiFillAmazonCircle,
  AiFillGoogleCircle,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import Employee from "./Employee";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Divider } from "@mui/material";
import home2Pic from "../assets/addImg.jpg";
import { useState } from "react";
import bgSlider1 from "../assets/bgSlider1.jpg";
import bgSlider2 from "../assets/bgSlider2.jpg";
import bgSlider3 from "../assets/bgSlider3.jpg";
import bgSlider4 from "../assets/bgSlider4.jpeg";
import bgSlider5 from "../assets/bgSlider5.jpg";

const teamData = [
  { id: 1, employeeName: "Ramit Grover", position: "CEO", profileImg: pfp },
  { id: 2, employeeName: "Harman Arora", position: "CFO", profileImg: pfp },
  {
    id: 3,
    employeeName: "Caster Dipor",
    position: "Chairman",
    profileImg: pfp,
  },
  {
    id: 4,
    employeeName: "Daper Pospor",
    position: "Vice-Chairman",
    profileImg: pfp,
  },
  {
    id: 5,
    employeeName: "Lorem Ipsum",
    position: "Executive",
    profileImg: pfp,
  },
  {
    id: 6,
    employeeName: "Lorem muspi",
    position: "Sales Manager",
    profileImg: pfp,
  },
  {
    id: 7,
    employeeName: "Chungus Bron Trie",
    position: "Operations Manager",
    profileImg: pfp,
  },
  {
    id: 8,
    employeeName: "Grenerr Mc K.",
    position: "Employee Head",
    profileImg: pfp,
  },
  {
    id: 9,
    employeeName: "Caster Dipor",
    position: "Undefined",
    profileImg: pfp,
  },
  {
    id: 10,
    employeeName: "Daper Pospor",
    position: "Trainee",
    profileImg: pfp,
  },
  {
    id: 11,
    employeeName: "Lorem Ipsum",
    position: "Undefined",
    profileImg: pfp,
  },
  {
    id: 12,
    employeeName: "Lorem muspi",
    position: "Cashier",
    profileImg: pfp,
  },
];
const Home = () => {
  //https://digitalfloats.com/wp-content/uploads/2023/10/ChatGPT.jpg
  //https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8Vl7cUikNONrLxQWCmAy87M0TCUltLK4WCxYaSbpRTMVD3qRz_S5M1J2MjX437Ax1u2o&usqp=CAU
  //https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMwtp2ncPlRzLG9AZA7NfsOpFuGxGYHlEK35fl6S40WI8Z2x28BeA-YMfUHPARu9ca29Y&usqp=CAU
  const bgSlider = [
    { url: bgSlider1, count: 1 },
    { url: bgSlider2, count: 2 },
    { url: bgSlider3, count: 3 },
    { url: bgSlider4, count: 4 },
    { url: bgSlider5, count: 5 },
  ];

  const imageArray = document.querySelectorAll("img");

  let observer = new IntersectionObserver(
    (entries) => {
      // console.log(entries)

      entries.forEach((entry) => {
        entry.target.classList.toggle("imgAnimate", entry.isIntersecting);
        // if (entry.isIntersecting) observer.unobserve(entry.target);
      });
    },
    { threshold: 0.5 }
  );

  imageArray.forEach((image) => observer.observe(image));

  // let observer = new IntersectionObserver( (entries, observer) =>{
  //   entries.filter( e => e.isIntersecting).forEach(entry => {
  //     entry.target.classList.add("imgAnimate");
  //     // observer.unobserve(entry.target)
  //   })

  // })

  // document.querySelectorAll("img").forEach(e => observer.observe(e));

  // const settings = {
  //   arrows: true,
  //   dots: true,
  //   infinite: false,
  //   speed: 400,
  //   slidesToShow: 3,
  //   slidesToScroll: 3,
  //   initialSlide: 0,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         arrows: true,
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //         infinite: true,
  //         dots: true,
  //       },
  //     },
  //     {
  //       breakpoint: 940,
  //       settings: {
  //         arrows: true,
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         initialSlide: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         arrows: true,
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         initialSlide: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         arrows: true,
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },

  //   ],
  // };

  const settings = {
    arrows: true,
    dots: true,
    infinite: false,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          arrows: true,
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 0,
          infinite: false,
          // dots: true,
        },
      },
    ],
  };

  const [currentPointer, setCurrentPointer] = useState(0);
  // const [shifted, setShifted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      // if(currentPointer === 6){
      //   setCurrentPointer(0);
      // }
      // else{
      //   setCurrentPointer(1);
      // }
      setCurrentPointer((prevPointer) => (prevPointer + 1) % bgSlider.length);

    }, 7000);
    return () => clearTimeout(timer);
  }, [currentPointer]);

  const arr = {
    backgroundImage: `url(${bgSlider[currentPointer].url})`,
  };
  const goToNext = (currentPointer) => {
    setCurrentPointer(currentPointer);
  };
  return (
    <>
      <div className="home1N">
        <div style={arr} className="box0"></div>
        <div className="outerHeading">
          <h1 className="mainHeading ss" style={{ zIndex: "999" }}>
            Service Nation
          </h1>
          <h3 className="mainHeading subHeading">Your Problem, Our Solution</h3>
        </div>
        <div className="carousel-boult">
          {bgSlider.map((bgSlider, currentPointer) => {
            return (
              <span
                className="pointerSpan"
                key={currentPointer}
                onClick={() => goToNext(currentPointer)}
              ></span>
            );
          })}
        </div>
      </div>
      {/* <div className="home" id="home">
        <main className="innerHome">
          <h1>Service Nation</h1>
          <p>Your Problems, Our Solutions</p>
        </main>
      </div> */}

      <div className="home2" id="about">
        <img src={photo3} className="homeImg" alt="" />

        <div className="textBox1">
          <h3>Best Digital consulting company trusted for 25 years</h3>
          <p>
            Initiated in 1992, we are holding the title of best consulting
            company. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quaerat nesciunt perspiciatis, dolorem totam quis adipisci
            voluptatibus veritatis similique odit nihil necessitatibus itaque
            animi vel voluptate expedita, architecto molestias ratione
            voluptatum?
          </p>
        </div>
      </div>
      <div className="home3">
        <div className="home3Box">
          <h1>We are here</h1>
          <h3>
            Served more than <b>3500+</b> customers
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quia
            obcaecati error, enim sint sunt doloribus cumque tenetur eaque,
            dicta corporis ipsum possimus ut tempora laudantium pariatur quas
            incidunt ad hic. Maxime dolor exercitationem sapiente, harum
            explicabo porro. Voluptatibus, rerum.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate
            quod illo doloremque ab dolorum numquam porro soluta natus facilis
            cumque harum, labore nulla repellendus sit.
          </p>
        </div>
        <div className="home3Img">
          <div className="homeImgBox1">
            <img src={home2Pic} alt="" />
          </div>
          <div className="homeImgBox2">
            <img src={home2Pic} alt="" />
          </div>
        </div>
      </div>
      <div className="home4" id="brands">
        <div className="insideBox">
          <h1>BRANDS</h1>
          <div className="articleClass">
            <div>
              <AiFillGoogleCircle className="brndIcon" />
              <h3 className="brndIcon">Google</h3>
            </div>
            <div>
              <AiFillYoutube className="brndIcon" />
              <h3 className="brndIcon">YouTube</h3>
            </div>
            <div>
              <AiFillLinkedin className="brndIcon" />
              <h3 className="brndIcon">LinkedIn</h3>
            </div>
            <div>
              <AiFillInstagram className="brndIcon" />
              <h3 className="brndIcon">Instagram</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="home5">
        <h1>
          Facts and Stats - <b>2023</b>
        </h1>
        <div className="statsBox">
          <div className="sBox1">
            <p>72+</p>
            <h4>Active Projects</h4>
          </div>
          <Divider
            style={{
              background: "rgb(116, 116, 116)",
              boxShadow: "0px 1px 1.5px 0.3px",
            }}
          />
          <div className="sBox2">
            <p>612+</p>
            <h4>Customers</h4>
          </div>
          <Divider
            style={{
              background: "rgb(116, 116, 116)",
              boxShadow: "0px 1px 1.5px 0.3px",
            }}
          />

          <div className="sBox3">
            <p>134</p>
            <h4>Completed Cases</h4>
          </div>
        </div>
      </div>

      <div className="home6">
        <div className="outerBox">
          <h1>Our Team</h1>
          <div className="carouselSlider">
            <Slider {...settings}>
              {teamData.map((val, index) => {
                return (
                  // <div>{val.employeeName}</div>
                  <div className="details" key={index}>
                    <Employee key={index} data={val} />
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
