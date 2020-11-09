import * as React from "react";
import SelectedDate from "./SelectedDate";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Switch from "../Switch";
import styled from "styled-components";
import * as dayjs from "dayjs";

type Props = {
  onSelect: (date: Date) => void;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const today = dayjs();

const DatePicker: React.FC<Props> = (props) => {
  const [isVisible, setIsVisible] = React.useState<boolean>(false);
  const [value, setValue] = React.useState<Date>(new Date());

  return (
    <Container>
      <SelectedDate date={value} onSelected={() => setIsVisible(!isVisible)} />
      <Switch condition={isVisible}>
        <Calendar
          value={value}
          tileDisabled={({ date }) => today.isBefore(date)}
          onChange={(date: Date) => {
            setValue(date);
            setIsVisible(false);
          }}
        />
      </Switch>
    </Container>
  );
};

export default DatePicker;
