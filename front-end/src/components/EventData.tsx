import { EventData as EventDataT } from "@App/models/Event";
import * as React from "react";
import styled from "styled-components";
import Switch from "./Switch";

type Props = {
  data: EventDataT;
};

type ItemProps = {
  label: string;
  value?: string;
};

const Container = styled.ul`
  padding: 0;
  margin-top: 16px;
  margin-left: 12px;
  font-size: 12px;
  text-align: left;
`;

const ItemLi = styled.li`
  margin-top: 4px;
`;

const Item: React.FC<ItemProps> = ({ label, value }) => {
  return (
    <Switch condition={!!value}>
      <ItemLi>
        <strong>{label}: </strong>
        {value}
      </ItemLi>
    </Switch>
  );
};

const EventData: React.FC<Props> = (props) => {
  const { data } = props;

  return (
    <Container>
      <Item label="Note" value={data.note} />
      <Item label="Alert Severity" value={data.alert_severity} />
      <Item label="Volume(ml)" value={data.volume_ml} />
      <Item label="Severity" value={data.severity} />
      <Item label="Fluid" value={data.fluid} />
      <Item label="Meal" value={data.meal} />
      <Item label="Mood" value={data.mood} />
      <Item label="Reason" value={data.medication_failure_reason} />
      <Item label="Task Note" value={data.task_schedule_note} />
      <Item label="Task descrption" value={data.task_definition_description} />
      <Item label="Visit Count" value={data.visit_count} />
    </Container>
  );
};

export default EventData;
