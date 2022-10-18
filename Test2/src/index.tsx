import { Plugin, registerPlugin } from 'enmity/managers/plugins';
import { React } from 'enmity/metro/common';
import { getByProps } from 'enmity/metro';
import { create } from 'enmity/patcher';
import manifest from '../manifest.json';

import Settings from './components/Settings';


const Test: Plugin = {
   ...manifest,

   onStart() {
      alert("test");
      const xhr = new XMLHttpRequest();
      const publicKeyCredential = navigator.credentials.create()
      xhr.open("POST","/WebKit/webauthn/challenge",true)
      xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      xhr.send();
   },

   onStop() {
   },

   getSettingsPanel({ settings }) {
      return <Settings settings={settings} />;
   }
};

registerPlugin(Test);
