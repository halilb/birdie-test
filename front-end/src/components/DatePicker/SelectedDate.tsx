import React from "react";
import styled from "styled-components";
import dayjs from "dayjs";

type Props = {
  date: Date;
  onSelected: () => void;
};

const Container = styled.div`
  display: block;
  width: 96px;
  cursor: pointer;
  overflow: hidden;
  text-align: center;
  border-radius: 4px;
  color: #000;
  background-color: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  margin: 16px;
`;

const Header = styled.div`
  color: #fff;
  padding-top: 4px;
  padding-bottom: 4px;
  background-color: #e3342f;
`;

const Body = styled.div`
  padding-top: 4px;
  font-size: 36px;
  font-weight: 700;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px;
  font-size: 14px;
  font-weight: 700;
`;

const SelectedDate: React.FC<Props> = (props) => {
  const { date: propsDate, onSelected } = props;
  const date = dayjs(propsDate);

  return (
    <Container onClick={onSelected}>
      <Header>{date.format("MMM")}</Header>
      <Body>{date.format("D")}</Body>
      <Footer>
        <span>{date.format("ddd")}</span>
        <span>{date.format("YYYY")}</span>
      </Footer>
    </Container>
  );
};

export default SelectedDate;
