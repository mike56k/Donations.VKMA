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
import {Button} from "@vkontakte/vkui";


import "./Persik.css";

const osName = platform();

const Snippet = ({ id, go, fetchedUser }) => (
  <Panel id={id}>
    <PanelHeader
      left={
        <PanelHeaderButton onClick={go} data-to="choosetype">
          {osName === IOS ? <Icon28ChevronBack /> : <Icon24Back />}
        </PanelHeaderButton>
        



      }
    >
      Название сбора
    </PanelHeader>
    <FormLayout>
        <img src="https://avatars.mds.yandex.net/get-pdb/1732919/c00329d1-cd54-48cf-a01d-053e225ef63b/s1200" width="200px"></img>
        <InfoRow header="Помощь нужна каждый месяц"></InfoRow>
        <InfoRow header="Автор">
            Данила Комлев
          </InfoRow>
    <Div>
          <InfoRow header="Надо собрать до конца недели">
            <Progress color="red"  value={40} />
          </InfoRow>
        </Div>
        <Div style={{ paddingTop: 60, paddingBottom: 60, color: 'black' }}>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam aliquet tempor laoreet. Maecenas eu pulvinar diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas et elit eros. Quisque ullamcorper sodales nisi, eleifend aliquet metus venenatis in. Aliquam ornare a lacus in tincidunt. Cras vel tristique metus. Sed vitae nisl at nisl imperdiet sollicitudin. Sed sit amet enim in lectus imperdiet interdum condimentum et diam. Proin venenatis sit amet diam ac vulputate. Donec mauris orci, semper volutpat nunc ut, efficitur condimentum dolor. Vivamus in quam eget quam lacinia pharetra. Phasellus ipsum magna, aliquet id elit eget, cursus tincidunt ex. In rhoncus turpis turpis, et viverra ex malesuada vel. Donec nisi tellus, mollis et posuere vel, dictum eget neque.
          </Div>

          <Button size="xl" onClick={go} data-to="home">
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
