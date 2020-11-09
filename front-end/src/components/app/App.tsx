import * as React from "react";
import styled, { createGlobalStyle } from "styled-components";

import Logo from "@App/components/Logo";
import Timeline from "@App/components/Timeline";
import DatePicker from "@App/components/DatePicker";

const LogoUrl = require("../../assets/images/logo-birdie.svg");

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

const data = [
  {
    id: "00114a9f-00dc-4f39-a6ac-af1b7e0543e7",
    event_type: "fluid_intake_observation",
    visit_id: "5cc23bf0-8b66-f8a8-4339-688e1d43e11a",
    timestamp: "2019-04-26T07:08:21.758Z",
    caregiver_id: "220d9432-b5ed-4c81-8709-434899d2cd1b",
    care_recipient_id: "df50cac5-293c-490d-a06c-ee26796f850d",
    data: { fluid: "caffeinated" },
  },
  {
    id: "006139b8-a387-4529-9280-2d798c500aeb",
    event_type: "task_completed",
    visit_id: "5cd753f0-8b66-f8a8-4591-3f78ca3f9c45",
    timestamp: "2019-05-12T07:23:12.789Z",
    caregiver_id: "5c9090ab-7d5e-4a72-8bf7-197190ad4c98",
    care_recipient_id: "df50cac5-293c-490d-a06c-ee26796f850d",
    data: {
      task_schedule_note: "Please assist me to brush my teeth",
      task_definition_description: "Assist with oral hygiene",
    },
  },
  {
    id: "00f22927-0f3b-4b7e-aa7a-4659699ed124",
    event_type: "physical_health_observation",
    visit_id: "5cd4b0f0-8b66-f8a8-4900-34da6bf2e11e",
    timestamp: "2019-05-10T15:24:05.419Z",
    caregiver_id: "ca216495-6806-4ecb-974d-e7ece2e9e5b5",
    care_recipient_id: "df50cac5-293c-490d-a06c-ee26796f850d",
    data: { note: "[redacted] is well. " },
  },
  {
    id: "01f547a3-7eb1-48f0-86d2-ddc996abd617",
    event_type: "mood_observation",
    visit_id: "2ddc77cd-521f-11e9-b63f-06a80bfbb33e",
    timestamp: "2019-05-10T11:27:21.000Z",
    caregiver_id: "5ca42f72-9e70-4b8d-b8be-da5ed779b586",
    care_recipient_id: "df50cac5-293c-490d-a06c-ee26796f850d",
    data: { mood: "okay" },
  },
  {
    id: "022da94b-af79-4b22-bac6-5956c41af3ea",
    event_type: "regular_medication_taken",
    visit_id: "5cc63070-8b66-f8a8-435e-4b7ad12dc9a0",
    timestamp: "2019-04-29T18:31:06.000Z",
    caregiver_id: "f7a00df5-bbc4-4ad7-9918-c07e16e709f6",
    care_recipient_id: "df50cac5-293c-490d-a06c-ee26796f850d",
    data: {},
  },
  {
    id: "030c11ee-1b53-45c8-a73a-f0e45fbddfd3",
    event_type: "alert_raised",
    visit_id: null,
    timestamp: "2019-04-26T08:01:24.611Z",
    caregiver_id: null,
    care_recipient_id: "df50cac5-293c-490d-a06c-ee26796f850d",
    data: {},
  },
  {
    id: "04b7aa31-7125-4a6a-8851-cfb5867f4a87",
    event_type: "general_observation",
    visit_id: "5cbe4770-8b66-f8a8-45fa-db0b393fe188",
    timestamp: "2019-04-23T18:24:16.536Z",
    caregiver_id: "220d9432-b5ed-4c81-8709-434899d2cd1b",
    care_recipient_id: "df50cac5-293c-490d-a06c-ee26796f850d",
    data: {
      note: "[redacted] OK on arrival.",
    },
  },
  {
    id: "05951128-7040-42ae-9e20-fa05e5f9794e",
    event_type: "regular_medication_not_taken",
    visit_id: "5cce1970-8b66-f8a8-4e3a-a21099829cd7",
    timestamp: "2019-05-05T18:32:13.000Z",
    caregiver_id: "f8651589-8e43-4787-a061-9a504579c999",
    care_recipient_id: "df50cac5-293c-490d-a06c-ee26796f850d",
    data: {
      note: "Not due to 20:00 family are going to give [redacted] paracetamol ",
      medication_failure_reason: "OTHER",
    },
  },
  {
    id: "0cbea3f2-d9a3-40ae-a18d-3692bf1bf5cf",
    event_type: "food_intake_observation",
    visit_id: "5ccf6af0-8b66-f8a8-4c03-d1151298e152",
    timestamp: "2019-05-06T14:42:06.000Z",
    caregiver_id: "f8651589-8e43-4787-a061-9a504579c999",
    care_recipient_id: "df50cac5-293c-490d-a06c-ee26796f850d",
    data: {
      note:
        "Hunters chicken with potatoes. Cheeses cake and 2x cookies for pud ",
      meal: "meal",
    },
  },
  {
    id: "2b234dfa-86d8-403a-bd2d-ad1a3499114c",
    event_type: "mental_health_observation",
    visit_id: "5cd753f0-8b66-f8a8-43f7-330f62a3e1d6",
    timestamp: "2019-05-12T18:53:05.099Z",
    caregiver_id: "3cacba0a-6041-11e9-b63f-06a80bfbb33e",
    care_recipient_id: "df50cac5-293c-490d-a06c-ee26796f850d",
    data: { note: " " },
  },
  {
    id: "012e5011-b387-4a2f-8f98-a91deb75c1ca",
    event_type: "regular_medication_maybe_taken",
    visit_id: "ef22785b-4b73-4099-bb03-d7d5e5b7fb11",
    timestamp: "2019-04-29T13:28:43.000Z",
    caregiver_id: "d8d66637-c3d6-4c58-a254-3b274a031fec",
    care_recipient_id: "e3e2bff8-d318-4760-beea-841a75f00227",
    data: { note: "Ok", medication_failure_reason: "REFUSED" },
  },
  {
    id: "71d59583-db98-4ec1-a6c8-9515d72c35c4",
    event_type: "concern_raised",
    visit_id: "27e6ed82-412a-45bf-a2d8-91265a1e7d85",
    timestamp: "2019-05-07T10:38:28.000Z",
    caregiver_id: "d8d66637-c3d6-4c58-a254-3b274a031fec",
    care_recipient_id: "e3e2bff8-d318-4760-beea-841a75f00227",
    data: { note: "Fall", severity: "MEDIUM" },
  },
  {
    id: "d9b5b2dc-c42d-4fab-ae0a-1ebaa362d3a3",
    event_type: "regular_medication_partially_taken",
    visit_id: "87148b29-2939-484c-9ae1-b8656a1298bf",
    timestamp: "2019-05-07T16:04:52.000Z",
    caregiver_id: "183ed034-359b-4dab-9f7f-681f26c0c144",
    care_recipient_id: "e3e2bff8-d318-4760-beea-841a75f00227",
    data: { note: "Hhh", medication_failure_reason: "MEDICATION_ERROR" },
  },
  {
    id: "02cbc33c-701a-4790-ad7e-58af6b2ed9d4",
    event_type: "catheter_observation",
    visit_id: "bfe0fe96-2a95-4013-8c0a-431c6e74f73d",
    timestamp: "2019-05-08T12:12:53.169Z",
    caregiver_id: "b5583964-a87f-4f29-91eb-e1996bb54ea4",
    care_recipient_id: "ad3512a6-91b1-4d7d-a005-6f8764dd0111",
    data: { volume_ml: 700, note: "" },
  },
  {
    id: "d4095eb4-e5d5-4fd6-9bcd-7078773d97e8",
    event_type: "toilet_visit_recorded",
    visit_id: "8db86d75-435b-42ee-bb2f-fb7fcff06dd4",
    timestamp: "2019-05-11T17:07:15.489Z",
    caregiver_id: "421bdf67-bca5-4450-9559-d754ef86cf95",
    care_recipient_id: "ad3512a6-91b1-4d7d-a005-6f8764dd0111",
    data: { note: "", visit_count: 3 },
  },
];

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Logo src={LogoUrl} />
        <DatePicker onSelect={() => console.log("selected")} />
        <Content>
          {/* @ts-ignore */}
          <Timeline events={data} />
        </Content>
      </AppContainer>
    </>
  );
};

export default App;
