import Image from "next/image";
import React from "react";
import Layer from "@/public/img/banner-layer.png";
import Rugdog from "@/public/img/rugdog.png";
import BannerImg from "@/public/img/banner.png";
import gsap from "gsap/dist/gsap";
import { useEffect } from "react";
import PresaleButton from "../ui/PresaleButton";
import GradButton from "../ui/GrandButton";
import { styled } from "styled-components";
import Link from "next/link";
const Banner = () => {
  //   useEffect(() => {
  //     let tl = gsap.timeline().from(".banner-animate", {
  //       duration: 0.5,
  //       opacity: 0,
  //       y: 80,
  //       stagger: 0.5,
  //     });
  //     gsap.from(".banner-img", {
  //       duration: 0.5,
  //       opacity: 0,
  //       y: 50,
  //       ease: "ease-in",
  //     });
  //   }, []);

  return (
    <Section className="container mx-auto">
      <div>
        <div className=" grid grid-cols-2">
          <div>
            <BannerRight className="banner-img"></BannerRight>
          </div>
          <div>
            <BannerLeft>
              <h2 className="banner-animate">
                Softmax<span> Online School</span>
              </h2>
              <p className="banner-animate">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Repellat nobis illo, harum numquam quibusdam minima perspiciatis
                amet in? Sed nam eos tempore iure, ab eius perspiciatis nemo
                adipisci excepturi deserunt doloribus, illum hic commodi.
                Reiciendis sequi id inventore eos! Neque!
              </p>
              <div className="banner-btn banner-animate">
                {/* <PresaleButton />
                <GradButton /> */}
                <button className="btn btn-outline">
                  <Link href="/TeacherRequest"> Join As a Student</Link>
                </button>
                <button className="ml-5  btn btn-primary">
                  <Link href="/registration"> Join As a Student</Link>
                </button>
              </div>
              <div className="sponsor-img banner-animate">
                <Image src={Rugdog} alt="rugdog" />
              </div>
            </BannerLeft>
          </div>
        </div>
      </div>
      <ImgLayer>
        <Image src={Layer} alt="Layer Banner" />
      </ImgLayer>
    </Section>
  );
};

export default Banner;

const Section = styled.section`
  position: relative;
  padding: 100px 0px;
  overflow: hidden;
  @media screen and (max-width: 992px) {
    overflow-x: hidden;
    padding: 50px 0px 0px 0px;
  }
`;
const ImgLayer = styled.div`
  width: 1000px;
  position: absolute;
  top: -80px;
  left: -300px;
  z-index: -1;
  img {
    width: 100%;
  }
`;
const BannerLeft = styled.div`
  h2 {
    font-size: calc(42px + (60 - 42) * ((100vw - 360px) / (1920 - 360)));
    color: var(--black);
    font-weight: 700;
    span {
      background-image: linear-gradient(to left, #d9413e, #9d17cd);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      @media screen and (max-width: 480px) {
        display: block;
      }
    }
  }
  p {
    font-size: calc(14px + (18 - 14) * ((100vw - 360px) / (1920 - 360)));
    line-height: 30px;
    margin: 20px 0px 30px 0px;
    color: var(--gray);
    max-width: 540px;
  }
  .banner-btn {
    a {
      margin-right: 12px;
    }
  }
  .sponsor-img {
    margin-top: 20px;
    margin-left: -30px;
    @media screen and (max-width: 992px) {
      margin-left: 0;
    }
  }
  @media screen and (max-width: 992px) {
    margin-top: 35px;
    h2,
    p {
      text-align: center;
    }
    p {
      margin: 20px auto 30px auto;
    }
    .banner-btn {
      display: flex;
      justify-content: center;
      a {
        margin: 0px 6px;
      }
    }
    .sponsor-img {
      text-align: center;
    }
  }
`;

const BannerRight = styled.div`
  img {
    width: 100%;
  }
`;
