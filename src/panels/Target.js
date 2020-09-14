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
import { Select } from "@vkontakte/vkui";
import { ScreenSpinner } from "@vkontakte/vkui";

import "./Target.css";
import AddImage from "./AddImage";

const osName = platform();

const Target = ({
  id,
  go,
  purpose,
  OnChangePurpose,
  title,
  OnChangeTitle,
  invoice,
  OnChangeInvoice,
  description,
  OnChangeDescription,
  summ,
  OnChangeSumm,
  OnChangeImageUrl,
}) => {
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
    OnChangeImageUrl(file.secure_url);
    setLoading(false);
    setLoaded(true);
  };

  return (
    <Panel id={id}>
      <PanelHeader
        left={
          <PanelHeaderButton onClick={go} data-to="choosetype">
            {osName === IOS ? <Icon28ChevronBack /> : <Icon24Back />}
          </PanelHeaderButton>
        }
      >
        Целевой сбор
      </PanelHeader>
      <FormLayout>
        <div className="pic">
          {loaded ? (
            <img
              src={image}
              style={{ width: "300px" }}
              className="currentpic"
              alt="uploaded_photo"
            />
          ) : loading ? (
            <ScreenSpinner size="large" />
          ) : (
            <File style={{ background: "transparent" }} onChange={uploadImage}>
              <AddImage />
            </File>
          )}
        </div>
        <Input
          top="Название сбора"
          type="text"
          value={title}
          placeholder="Название сбора"
          onChange={(event) => {
            OnChangeTitle(event.target.value);
          }}
        />
        <Input
          top="Сумма, ₽"
          type="number"
          placeholder="Сколько нужно собрать?"
          value={summ}
          onChange={(event) => {
            OnChangeSumm(event.target.value);
          }}
        />
        <Input
          top="Цель"
          type="text"
          value={purpose}
          placeholder="Например, лечение человека"
          onChange={(event) => {
            OnChangePurpose(event.target.value);
          }}
        />

        <Textarea
          top="Описание"
          placeholder="На что пойдут деньги и как они кому-то помогут?"
          value={description}
          onChange={(event) => {
            OnChangeDescription(event.target.value);
          }}
        />

        <Select
          top="Куда получать деньги"
          placeholder="Выберите кошелёк"
          onChange={(event) => {
            OnChangeInvoice(event.target.value);
          }}
        >
          {invoice === null || invoice === "" ? (
            <option>Счет VK Pay 1234</option>
          ) : (
            <option>{invoice}</option>
          )}
        </Select>
        <Button size="xl" onClick={go} data-to="additionally">
          Далее
        </Button>
      </FormLayout>
    </Panel>
  );
};

Target.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
};

export default Target;
