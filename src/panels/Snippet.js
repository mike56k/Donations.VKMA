import React from "react";
import PropTypes from "prop-types";
import { platform, IOS } from "@vkontakte/vkui";
import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import PanelHeaderButton from "@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton";
import Icon28ChevronBack from "@vkontakte/icons/dist/28/chevron_back";
import FormLayout from "@vkontakte/vkui/dist/components/FormLayout/FormLayout";
import Icon24Back from "@vkontakte/icons/dist/24/back";
import { Div } from "@vkontakte/vkui";
import { InfoRow } from "@vkontakte/vkui";
import { Progress } from "@vkontakte/vkui";
import { Button } from "@vkontakte/vkui";
import { Text } from "@vkontakte/vkui";
import { Title } from "@vkontakte/vkui";

import "./Target.css";

const osName = platform();

const Snippet = ({
  id,
  go,
  title,
  description,
  author,
  summ,
  date,
  imageurl,
  dateFinished,
  regularDonats,
}) => (
  <Panel id={id}>
    <PanelHeader
      left={
        <PanelHeaderButton onClick={go} data-to="additionally">
          {osName === IOS ? <Icon28ChevronBack /> : <Icon24Back />}
        </PanelHeaderButton>
      }
    >
      {title === null || title === "" ? "Название сбора" : `${title}`}
    </PanelHeader>
    <FormLayout>
      <Div className="pic">
        {imageurl === null || imageurl === "" ? (
          <img
            src="https://glamtrek.com/public/assets/home/images/nocontent.jpg"
            className="currentpic"
            alt="uploaded_photo"
          />
        ) : (
          <img src={imageurl} className="currentpic" alt="uploaded_photo" />
        )}
      </Div>
      <Div>
        <InfoRow header="Автор">
          {author === null || author === "" ? "Имя автора" : `${author}`}
        </InfoRow>
        <InfoRow header="Тип сбора">
          {regularDonats === true ? "Целевой сбор" : "Регулярный сбор"}
        </InfoRow>
      </Div>
      <Div>
        {dateFinished ? (
          <Text>
            Надо собрать до:{" "}
            {date === null || date === "" ? "(Вы не ввели дату)" : `${date}`}
          </Text>
        ) : (
          <Text>Сбор, пока не соберем</Text>
        )}

        <Title level="2" weight="heavy" style={{ marginBottom: 16 }}>
          {summ === null || summ === "" ? "Вы не ввели сумму" : `${summ}`}
        </Title>

        <Progress color="red" value={40} />
      </Div>
      <Div style={{ paddingTop: 60, paddingBottom: 60, color: "black" }}>
        {description === null || description === ""
          ? "Описание не заполнено"
          : `${description}`}
      </Div>

      <Button size="xl" onClick={go} data-to="additionally">
        Помочь
      </Button>
    </FormLayout>
  </Panel>
);

Snippet.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
};

export default Snippet;
