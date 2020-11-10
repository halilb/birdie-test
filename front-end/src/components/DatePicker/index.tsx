import React, { useState } from "react";
import SelectedDate from "./SelectedDate";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Switch from "../Switch";
import styled from "styled-components";
import dayjs from "dayjs";

type Props = {
  date: Date;
  today: Date;
  setDate: (date: Date) => void;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DatePicker: React.FC<Props> = (props) => {
  const { date, today, setDate } = props;
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <Container>
      <SelectedDate date={date} onSelected={() => setIsVisible(!isVisible)} />
      <Switch condition={isVisible}>
        <Calendar
          value={date}
          tileDisabled={({ date: dateToCheck }) => {
            return dayjs(today).isBefore(dateToCheck);
          }}
          onChange={(newDate: Date) => {
            setDate(newDate);
            setIsVisible(false);
          }}
        />
      </Switch>
    </Container>
  );
};

export default DatePicker;
