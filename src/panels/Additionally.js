import React from "react";
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

const Additionally = ({ id, go, fetchedUser }) => (
  <Panel id={id}>
    <PanelHeader
      left={
        <PanelHeaderButton onClick={go} data-to="persik">
          {osName === IOS ? <Icon28ChevronBack /> : <Icon24Back />}
        </PanelHeaderButton>
      }
    >
      Дополнительно
    </PanelHeader>
    <FormLayout>
      <Select top="Автор" placeholder="Введите автора">
        <option value="Danila_Komlev">Данила Комлев</option>
        <option value="Mikhail_Isachenko">Михаил Исаченко</option>
      </Select>

      <FormLayoutGroup top="Сбор завершится">
        <Radio name="type">Когда соберем сумму</Radio>
        <Radio name="type">В определенную дату</Radio>
      </FormLayoutGroup>

      <Input top="Дата окончания" type="date" placeholder="Выберите дату" />

      <Button
        size="xl"
        onClick={() => {
          bridge.send("VKWebAppShowWallPostBox", { message: "Hello!" });
        }}
      >
        Создать сбор
      </Button>
    </FormLayout>
  </Panel>
);

Additionally.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
};

export default Additionally;
