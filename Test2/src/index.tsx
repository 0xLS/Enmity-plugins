import { Plugin, registerPlugin } from 'enmity/managers/plugins';
import { getIDByName } from 'enmity/api/assets';
import { React, Toasts } from 'enmity/metro/common';
import { getByProps } from 'enmity/metro';
import { create } from 'enmity/patcher';
import manifest from '../manifest.json';

import Settings from './components/Settings';
import { Alert, TextInput } from 'enmity/components';


const Test: Plugin = {
   ...manifest,

   onStart() {
      Alert.alert(
         "Alert",
         "Alert msg",
         [
            {
               text: "Cancel",
               onPress: () => alert("pressed cancel"),
            },
            {
               text: "OK",
               onPress: () => alert("pressed ok"),
            },
         ]
      );

      Toasts.open({
         content: "[Test] starting...",
         source: getIDByName("debug")
      });
   },

   onStop() {
   },

   getSettingsPanel({ settings }) {
      return <Settings settings={settings} />;
   }
};

registerPlugin(Test);
