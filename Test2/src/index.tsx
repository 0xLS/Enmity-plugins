import { Alert } from "enmity/components";
import {Plugin, registerPlugin} from "enmity/managers/plugins";
import manifest from '../manifest.json';

import Settings from './components/Settings';


const SilentTyping: Plugin = {
   ...manifest,

   onStart() {
      Alert("Test");
   },

   onStop() {
   },

   getSettingsPanel({ settings }) {
      return <Settings settings={settings} />;
   }
};

registerPlugin(SilentTyping);
