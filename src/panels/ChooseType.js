import React from "react";
import PropTypes from "prop-types";
import { platform, IOS } from "@vkontakte/vkui";
import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import PanelHeaderButton from "@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton";
import Icon28ChevronBack from "@vkontakte/icons/dist/28/chevron_back";
import FormLayout from "@vkontakte/vkui/dist/components/FormLayout/FormLayout";
import Icon24Camera from "@vkontakte/icons/dist/24/camera";
import Icon24Back from "@vkontakte/icons/dist/24/back";


import {FormStatus} from "@vkontakte/vkui";
import {Button} from "@vkontakte/vkui";
import "./Persik.css";

const osName = platform();

const ChooseType = ({ id, go, fetchedUser }) => (
  <Panel id={id}>
    <PanelHeader
      left={
        <PanelHeaderButton onClick={go} data-to="home">
          {osName === IOS ? <Icon28ChevronBack /> : <Icon24Back />}
        </PanelHeaderButton>
      }
    >
    Тип сбора
    </PanelHeader>
    <FormLayout>
    <Button before={<Icon24Camera/>} after={<Icon24Camera/>} mode="secondary" onClick={go} data-to="persik" size="l">Целевой сбор</Button>
    <Button before={<Icon24Camera/>} mode="secondary" onClick={go} data-to="regular" size="l">Регулярный сбор</Button>
    </FormLayout>
  </Panel>
);

ChooseType.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
};

export default ChooseType;
