import React from "react";
import PropTypes from "prop-types";
import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import Group from "@vkontakte/vkui/dist/components/Group/Group";
import Div from "@vkontakte/vkui/dist/components/Div/Div";
import "./Home.css";
import { Text } from "@vkontakte/vkui";
const Home = ({ id, go, fetchedUser }) => (
  <Panel id={id}>
    <PanelHeader>Пожертвования</PanelHeader>

    <Group title="Navigation Example">
      <Div className="wrapper">
        <Div>
          <Text weight="regular" style={{ marginBottom: 16 }}>
            У Вас пока нет сборов. Начните доброе дело.
          </Text>
        </Div>
        <Div id="btn">
          <Button onClick={go} data-to="choosetype" size="l">
            Создать сбор
          </Button>
        </Div>
      </Div>
    </Group>
  </Panel>
);

Home.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
  fetchedUser: PropTypes.shape({
    photo_200: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    city: PropTypes.shape({
      title: PropTypes.string,
    }),
  }),
};

export default Home;
