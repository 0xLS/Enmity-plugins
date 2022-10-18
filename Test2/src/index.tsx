import { Plugin, registerPlugin } from 'enmity/managers/plugins';
import { React } from 'enmity/metro/common';
import { getByProps } from 'enmity/metro';
import { create } from 'enmity/patcher';
import manifest from '../manifest.json';

import Settings from './components/Settings';

const options = {
   publicKey: {
       rp: { name: "example.com" },
       user: {
           name: "john.appleseed@example.com",
           id: "",
           displayName: "John Appleseed"
       },
       pubKeyCredParams: [ { type: "public-key", alg: -7 } ],
       challenge: "",
       authenticatorSelection: { authenticatorAttachment: "platform" }
   }
};

const Test: Plugin = {
   ...manifest,

   onStart() {
      alert("test");
      navigator.credentials.create()
   },

   onStop() {
   },

   getSettingsPanel({ settings }) {
      return <Settings settings={settings} />;
   }
};

registerPlugin(Test);
