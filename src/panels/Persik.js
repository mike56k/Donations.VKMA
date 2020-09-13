import React, { useState } from "react";
import PropTypes from "prop-types";
import { platform, IOS } from "@vkontakte/vkui";
import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import PanelHeaderButton from "@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton";
import Icon28ChevronBack from "@vkontakte/icons/dist/28/chevron_back";
import FormLayout from "@vkontakte/vkui/dist/components/FormLayout/FormLayout";
import Icon24Back from "@vkontakte/icons/dist/24/back";
import { File } from "@vkontakte/vkui";
import { Input } from "@vkontakte/vkui";
import { Textarea } from "@vkontakte/vkui";
import { Button } from "@vkontakte/vkui";

import "./Persik.css";
import AddImage from "./AddImage";

const osName = platform();

const Persik = ({ id, go, fetchedUser }) => {
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "mike56k");
    setLoading(true);
    const res = await fetch(
      "	https://api.cloudinary.com/v1_1/da0tc2sas/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();

    setImage(file.secure_url);
    setLoading(false);
    setLoaded(true);
  };

  return (
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
        {/* <File style={{ background: "transparent" }}  top="Загрузите ваше фото">
          
        </File> */}

        <div className="pic">
          {loaded ? (
            <img
              src={image}
              style={{ width: "300px" }}
              className="currentpic"
              alt="uploaded_photo"
            />
          ) : (
            <File style={{ background: "transparent" }} onChange={uploadImage}>
              <AddImage />
            </File>
          )}
        </div>
        <Input top="Название сбора" type="text" placeholder="Название сбора" />
        <Input
          top="Сумма, ₽"
          type="text"
          placeholder="Сколько нужно собрать?"
        />
        <Input
          top="Цель"
          type="text"
          placeholder="Например, лечение человека"
        />
        <Textarea
          top="Описание "
          placeholder="На что пойдут деньги и как они кому-то помогут?"
        />
        <Input
          top="Куда получать деньги"
          type="text"
          value="Cчет VK Pay 1234"
        />
        <Button size="xl" onClick={go} data-to="additionally">
          Далее
        </Button>
      </FormLayout>
    </Panel>
  );
};

Persik.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
};

export default Persik;
