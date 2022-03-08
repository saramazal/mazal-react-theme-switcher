import React, { useContext } from "react";
import { GlobalContext } from "../context/globalContext";

import Layout from "../components/Layout";
import { Container, Flex } from "../styles/globalStyles";
import {
  NavBar,
  SwitchButton,
  Body,
  Heading,
  SubPara,
  Para,
  Content
} from "../styles/homeStyles";
const Home = () => {
  const { theme, themeSwitchHandler } = useContext(GlobalContext);

  return (
    <Layout>
      <NavBar>
        <Container fluid>
          <Flex center>
            <SwitchButton>
              <input
                type="checkbox"
                onChange={() =>
                  themeSwitchHandler(theme === "dark" ? "light" : "dark")
                }
              />
              <span></span>
            </SwitchButton>
          </Flex>
        </Container>
      </NavBar>
      <Body>
        <Container>
          <Heading>Happy Hacking!</Heading>
          <SubPara>
          "The greatest enemy of knowledge is not ignorance, it is the illusion of knowledge."
    ~ Stephen Hawking
          </SubPara>
          <Content>
            <Container>
              <Flex center column>
                <Heading>"Don't watch the clock.</Heading>
                <Para>
               
                 Do what it does. Keep going."
    ~ Sam Levenson
                </Para>
              </Flex>
            </Container>
          </Content>
        </Container>
      </Body>
    </Layout>
  );
};

export default Home;
