import React, { useState, useEffect } from "react";
import bridge from "@vkontakte/vk-bridge";
import View from "@vkontakte/vkui/dist/components/View/View";
import "@vkontakte/vkui/dist/vkui.css";

import Home from "./panels/Home";
import Target from "./panels/Target";
import Additionally from "./panels/Additionally";
import Regular from "./panels/Regular";
import ChooseType from "./panels/ChooseType";

const App = () => {
  const [activePanel, setActivePanel] = useState("home");
  const [fetchedUser, setUser] = useState(null);
  const [purpose, setPurpose] = useState(
    JSON.parse(localStorage.getItem("purpose") || "null") || null
  );
  const [summ, setSumm] = useState(
    JSON.parse(localStorage.getItem("summ") || "null") || null
  );
  const [title, setTitle] = useState(
    JSON.parse(localStorage.getItem("title") || "null") || null
  );
  const [description, setDescription] = useState(
    JSON.parse(localStorage.getItem("description") || "null") || null
  );
  const [invoice, setInvoice] = useState(
    JSON.parse(localStorage.getItem("invoice") || "null") || null
  );
  //const [popout, setPopout] = useState(<ScreenSpinner size='large' />);

  useEffect(() => {
    bridge.subscribe(({ detail: { type, data } }) => {
      if (type === "VKWebAppUpdateConfig") {
        const schemeAttribute = document.createAttribute("scheme");
        schemeAttribute.value = data.scheme ? data.scheme : "client_light";
        document.body.attributes.setNamedItem(schemeAttribute);
      }
    });
    async function fetchData() {
      const user = await bridge.send("VKWebAppGetUserInfo");
      setUser(user);
    }
    fetchData();
  }, []);

  const go = (e) => {
    setActivePanel(e.currentTarget.dataset.to);
  };

  return (
    <View activePanel={activePanel}>
      <Home id="home" fetchedUser={fetchedUser} go={go} />
      <Target
        id="persik"
        go={go}
        purpose={purpose}
        summ={summ}
        invoice={invoice}
        description={description}
        title={title}
        OnChangeSumm={(temp) => {
          const updatedSumm = temp;
          const serialized = JSON.stringify(updatedSumm);
          localStorage.setItem("summ", serialized);
          setSumm(updatedSumm);
        }}
        OnChangeInvoice={(temp) => {
          const updatedInvoice = temp;
          const serialized = JSON.stringify(updatedInvoice);
          localStorage.setItem("invoice", serialized);
          setInvoice(updatedInvoice);
        }}
        OnChangeDescription={(temp) => {
          const updatedDescription = temp;
          const serialized = JSON.stringify(updatedDescription);
          localStorage.setItem("description", serialized);
          setDescription(updatedDescription);
        }}
        OnChangeTitle={(temp) => {
          const updatedTitle = temp;
          const serialized = JSON.stringify(updatedTitle);
          localStorage.setItem("title", serialized);
          setTitle(updatedTitle);
        }}
        OnChangePurpose={(temp) => {
          const updatedPurpose = temp;
          const serialized = JSON.stringify(updatedPurpose);
          localStorage.setItem("purpose", serialized);
          setPurpose(updatedPurpose);
        }}
      />
      <Additionally id="additionally" go={go} />
      <Regular id="regular" go={go} />
      <ChooseType id="choosetype" go={go} />
    </View>
  );
};

export default App;
