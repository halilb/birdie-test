import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

import Logo from "components/Logo";
import Timeline from "components/Timeline";
import DatePicker from "components/DatePicker";

import LogoUrl from "assets/images/logo-birdie.svg";

const GlobalStyle = createGlobalStyle`
  body {
    height: 100vh;
    background-color: #F9F9F9;
    font-family: sans-serif;
    > div {
      height: 100%;
    }
  }
`;

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Content = styled.div`
  width: 320px;
  padding-bottom: 36px;
`;

// Database records end on this day
const today = new Date("2019-05-12");

const App: React.FC = () => {
  const [date, setDate] = useState<Date>(today);

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Logo src={LogoUrl} />
        <DatePicker date={date} today={today} setDate={setDate} />
        <Content>
          <Timeline date={date} />
        </Content>
      </AppContainer>
    </>
  );
};

export default App;
