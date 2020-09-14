import React, { useState } from "react";
import PropTypes from "prop-types";
import { platform, IOS } from "@vkontakte/vkui";
import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import PanelHeaderButton from "@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton";
import Icon28ChevronBack from "@vkontakte/icons/dist/28/chevron_back";
import FormLayout from "@vkontakte/vkui/dist/components/FormLayout/FormLayout";
import Icon24Back from "@vkontakte/icons/dist/24/back";
import { Button } from "@vkontakte/vkui";
import { Select } from "@vkontakte/vkui";
import { FormLayoutGroup } from "@vkontakte/vkui";
import { Radio } from "@vkontakte/vkui";
import { Input } from "@vkontakte/vkui";
import bridge from "@vkontakte/vk-bridge";

const osName = platform();

const Additionally = ({
  id,
  go,
  author,
  date,
  dateFinished,
  OnChangeDate,
  OnDateFinished,
  OnChangeAuthor,
  regularDonats,
}) => {
  const [message, setMessage] = useState("");
  const [dateFinish, setDateFinish] = useState(false);
  return (
    <Panel id={id}>
      <PanelHeader
        left={
          <PanelHeaderButton onClick={go} data-to="target">
            {osName === IOS ? <Icon28ChevronBack /> : <Icon24Back />}
          </PanelHeaderButton>
        }
      >
        Дополнительно
      </PanelHeader>
      <FormLayout>
        <Select
          top="Автор"
          placeholder="Введите автора"
          onChange={(event) => {
            OnChangeAuthor(event.target.value);
          }}
        >
          {author === null || author === "" ? (
            <option>Имя Фамилия</option>
          ) : (
            <option>{author}</option>
          )}
        </Select>
        {regularDonats ? (
          <FormLayoutGroup top="Сбор завершится">
            <Radio
              name="type"
              checked={!dateFinished}
              onClick={() => {
                OnDateFinished(false);
              }}
            >
              Когда соберем сумму
            </Radio>
            <Radio
              name="type"
              checked={dateFinished}
              onClick={() => {
                OnDateFinished(true);
              }}
            >
              В определенную дату
            </Radio>
          </FormLayoutGroup>
        ) : (
          <></>
        )}

        {dateFinished && regularDonats ? (
          <Input
            top="Дата окончания"
            type="date"
            placeholder="Выберите дату"
            value={date}
            onChange={(event) => {
              OnChangeDate(event.target.value);
            }}
          />
        ) : (
          <></>
        )}
        <Input
          top="Подпись к посту"
          type="text"
          onChange={(event) => {
            setMessage(event.target.value);
          }}
          placeholder="Расскажите про свое пожертвование"
        />
        <Button mode="outline" onClick={go} data-to="snippet" size="xl">
          Превью сбора
        </Button>
        <Button
          size="xl"
          onClick={() => {
            bridge.send("VKWebAppShowWallPostBox", {
              message: "https://vk.com/app7595067" + message,
            });
          }}
        >
          Создать сбор
        </Button>
      </FormLayout>
    </Panel>
  );
};

Additionally.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
};

export default Additionally;
