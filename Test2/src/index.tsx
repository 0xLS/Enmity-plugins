import { Plugin, registerPlugin } from 'enmity/managers/plugins';
import { React } from 'enmity/metro/common';
import { getByProps } from 'enmity/metro';
import { create } from 'enmity/patcher';
import manifest from '../manifest.json';

import Settings from './components/Settings';
import { Alert, TextInput } from 'enmity/components';
import ReactNativeBiometricAuth from 'rn-biometric-authentication'


const Test: Plugin = {
   ...manifest,

   onStart() {
      ReactNativeBiometricAuth.simplePrompt({promptMessage: "Authenticate"})
         .then((resultObject) => {
            const { success } = resultObject
     
            if (success) {
               Alert("Success");
               console.log('ReactNativeBiometricAuth', 'Success')
            } else {
               console.log('ReactNativeBiometricAuth', 'Cancelled')
            }
         }).catch(() => {
            console.log('ReactNativeBiometricAuth', 'Failed')
         });
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
   },

   onStop() {
   },

   getSettingsPanel({ settings }) {
      return <Settings settings={settings} />;
   }
};

registerPlugin(Test);
