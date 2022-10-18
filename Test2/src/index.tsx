import * as enmityModules from "enmity/modules";
import * as enmityPlugins from "enmity/managers/plugins";
import * as enmityPatcher from "enmity/patcher";
import * as enmityComp from "enmity/components";
import * as enmityCommon from "enmity/metro";
import * as enmityAssests from "enmity/api/assets";
import manifest from '../manifest.json';

import Settings from './components/Settings';


const SilentTyping: enmityPlugins.Plugin = {
   ...manifest,

   onStart() {
      enmityComp.Alert("test");
   },

   onStop() {
   },

   getSettingsPanel({ settings }) {
      return <Settings settings={settings} />;
   }
};

enmityPlugins.registerPlugin(SilentTyping);
