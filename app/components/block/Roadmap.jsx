import styled from "styled-components";
import tabData from "assets/data/tabData";
import { BsTriangleFill } from "react-icons/bs";
import { FiTarget } from "react-icons/fi";
import { useState } from "react";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);
const Roadmap = () => {
  const [activeTab, setActiveTab] = useState(1);
  const setTab = index => {
    setActiveTab(index);
  };

  return (
    <Section>
      <Container>
        <Heading className="r-heading">Roadmap</Heading>
        <Row className="mt-5">
          <Col lg="4" className="roadmap-tab1">
            <TabWrapper>
              {tabData.map((element, index) => (
                <Tab
                  onClick={() => setTab(element.id + 1)}
                  key={element.id}
                  active={activeTab === element.id + 1 ? true : false}>
                  <h2>
                    {element.quesNo}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="26.714"
                      viewBox="0 0 20 26.714">
                      <path
                        id="Path_4"
                        data-name="Path 4"
                        d="M402.143,5597.5,392,5610.643l10.143,13.571L412,5610.643Z"
                        transform="translate(-392 -5597.5)"
                      />
                    </svg>
                    {element.quesYear}
                  </h2>
                  <BsTriangleFill className="triangle" />
                </Tab>
              ))}
            </TabWrapper>
          </Col>
          <Col lg={8} className="roadmap-tab2">
            <Answer>
              {tabData.map(element => (
                <AnsList
                  key={element.id}
                  active={activeTab === element.id + 1 ? true : false}>
                  {element.ans.map((element, index) => (
                    <li key={index}>
                      <FiTarget />
                      <div
                        className="ans-line"
                        dangerouslySetInnerHTML={{ __html: element }}
                      />
                    </li>
                  ))}
                </AnsList>
              ))}
            </Answer>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default Roadmap;

const Section = styled.section`
  background-image: linear-gradient(
    to left,
    #f1eefe,
    rgba(254, 243, 237, 0.45),
    #edf1f2
  );
  padding: 100px 0px;
  margin-top: 180px;
  overflow: hidden;
  @media screen and (max-width: 992px) {
    margin-top: 70px;
    padding: 50px 0px;
  }
`;
const Heading = styled.h2`
  font-size: 40px;
  text-align: center;
  background-image: linear-gradient(to left, #d9413e, #9d17cd);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const TabWrapper = styled.div`
  @media screen and (max-width: 992px) {
    display: flex;
    justify-content: space-evenly;
  }
`;
const Tab = styled.div`
  border: 1px solid #354bc1;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  position: relative;
  cursor: pointer;
  background-image: linear-gradient(to left, #245bc2, #7a0cbd);
  background-image: ${props =>
    props.active
      ? "linear-gradient(to left, #245BC2, #7A0CBD)"
      : "linear-gradient(to left, white, white)"};
  z-index: 1;
  h2 {
    color: ${props => (props.active ? "white" : "var(--black)")};
    font-size: calc(16px + (35 - 16) * ((100vw - 360px) / (1920 - 360)));
    display: flex;
    align-items: center;
    svg {
      display: inline-block;
      margin: 0px 20px;
      path {
        fill: ${props => (props.active ? "white" : "var(--black)")};
      }
      @media screen and (max-width: 992px) {
        margin: 0px 5px;
        height: 20px;
      }
    }
  }
  .triangle {
    position: absolute;
    top: 50%;
    right: -20px;
    transform: translateY(-50%) rotate(90deg);
    font-size: 28px;
    opacity: ${props => (props.active ? 1 : 0)};
    color: #354bc1;
    z-index: -1;
    @media screen and (max-width: 992px) {
      top: 50%;
      right: 50%;
      transform: translateY(0%) translateX(50%) rotate(60deg);
    }
  }
  @media screen and (max-width: 992px) {
    padding: 10px;
  }
`;

const Answer = styled.div`
  padding-left: 40px;
  position: relative;
  height: 470px;
  @media screen and (max-width: 992px) {
    padding-left: 0;
    margin-top: 30px;
  }
`;

const AnsList = styled.ul`
  background-color: white;
  box-shadow: 0px 6px 22px rgba(0, 0, 0, 0.16);
  border-radius: 10px;
  padding: 40px 40px 30px 40px;
  margin-bottom: 30px;
  position: absolute;
  width: 90%;
  height: 100%;
  top: 0;
  right: 0;
  visibility: ${props => (props.active ? "visible" : "hidden")};
  transform: ${props =>
    props.active ? "translateX(0px)" : "translateX(-40px)"};
  opacity: ${props => (props.active ? 1 : 0)};
  transition: ${props =>
    props.active
      ? " visibility 0.3s ease, opacity 0.3s ease, transform 0.3s ease"
      : "visibility .3s ease,opacity .3s ease,transform 0s ease .3s;"};
  li {
    font-size: calc(16px + (20 - 16) * ((100vw - 360px) / (1920 - 360)));
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    color: var(--gray);
    svg {
      color: #354bc1;
      margin-right: 10px;
    }
    a {
      font-weight: bold;
    }
  }
  @media screen and (max-width: 992px) {
    width: 100%;
  }
`;
