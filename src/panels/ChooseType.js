import React from "react";
import PropTypes from "prop-types";
import { platform, IOS } from "@vkontakte/vkui";
import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import PanelHeaderButton from "@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton";
import Icon28ChevronBack from "@vkontakte/icons/dist/28/chevron_back";
import FormLayout from "@vkontakte/vkui/dist/components/FormLayout/FormLayout";
import Icon24Back from "@vkontakte/icons/dist/24/back";
import Icon28Calendar_outline from "@vkontakte/icons/dist/28/calendar_outline";
import Icon28Target_outline from "@vkontakte/icons/dist/28/target_outline";
import Icon24Chevron_right from "@vkontakte/icons/dist/24/chevron_right";
import { Button } from "@vkontakte/vkui";
import "./ChooseType.css";

const osName = platform();

const ChooseType = ({ id, go, fetchedUser, OnChangeRegularDonats }) => (
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
    <FormLayout className="chooseBtns">
      <Button
        className="first"
        before={<Icon28Target_outline />}
        after={<Icon24Chevron_right />}
        expandable
        mode="secondary"
        onClick={go}
        onFocus={() => {
          OnChangeRegularDonats(true);
        }}
        data-to="target"
        size="l"
      >
        Целевой сбор &nbsp; &nbsp; &nbsp;
      </Button>
      <Button
        before={<Icon28Calendar_outline />}
        after={<Icon24Chevron_right />}
        mode="secondary"
        onClick={go}
        onFocus={() => {
          OnChangeRegularDonats(false);
        }}
        data-to="regular"
        size="l"
      >
        Регулярный сбор
      </Button>
    </FormLayout>
  </Panel>
);

ChooseType.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
};

export default ChooseType;
