import { Plugin, registerPlugin } from 'enmity/managers/plugins';
import { React } from 'enmity/metro/common';
import { getByProps } from 'enmity/metro';
import { create } from 'enmity/patcher';
import manifest from '../manifest.json';

import Settings from './components/Settings';
import { Alert } from 'enmity/components';


const Test: Plugin = {
   ...manifest,

   onStart() {
      Alert("test");
   },

   onStop() {
   },

   getSettingsPanel({ settings }) {
      return <Settings settings={settings} />;
   }
};

registerPlugin(Test);
