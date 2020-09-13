import React from "react";
import PropTypes from "prop-types";
import { platform, IOS } from "@vkontakte/vkui";
import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import PanelHeaderButton from "@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton";
import Icon28ChevronBack from "@vkontakte/icons/dist/28/chevron_back";
import FormLayout from "@vkontakte/vkui/dist/components/FormLayout/FormLayout";
import Icon24Camera from "@vkontakte/icons/dist/24/camera";
import FormLayoutGroup from "@vkontakte/vkui/dist/components/FormLayoutGroup/FormLayoutGroup";
import Icon24Back from "@vkontakte/icons/dist/24/back";
import { File } from "@vkontakte/vkui";
import { Input } from "@vkontakte/vkui";
import { Textarea } from "@vkontakte/vkui";
import { Button } from "@vkontakte/vkui";

import "./Persik.css";

const osName = platform();

const Persik = ({ id, go, fetchedUser }) => (
  <Panel id={id}>
    <PanelHeader
      left={
        <PanelHeaderButton onClick={go} data-to="home">
          {osName === IOS ? <Icon28ChevronBack /> : <Icon24Back />}
        </PanelHeaderButton>
      }
    >
      Целевой сбор
    </PanelHeader>
    <FormLayout>
      {/* <File top="Загрузите ваше фото" before={<Icon24Camera />} controlSize="l">
          Открыть галерею
        </File> */}

      <Input top="Название сбора" type="text" placeholder="Название сбора" />
      <Input top="Сумма, ₽" type="text" placeholder="Сколько нужно собрать?" />
      <Input top="Цель" type="text" placeholder="Например, лечение человека" />
      <Textarea
        top="Описание "
        placeholder="На что пойдут деньги и как они кому-то помогут?"
      />
      <Input
        top="Куда получит        ь деньги"
        type="text"
        value="Cчет VK Pay 1234"
      />
      {/* <Button size="xl" onClick={go} data-to="Additionally">
        Далее
      </Button> */}
    </FormLayout>
  </Panel>
);

Persik.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
};

export default Persik;
