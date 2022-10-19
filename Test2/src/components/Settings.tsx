import { FormInput, FormRow, FormSwitch, ScrollView, TextInput } from 'enmity/components';
import { SettingsStore } from 'enmity/api/settings';
import { React } from 'enmity/metro/common';
import * as re from 'react';

interface SettingsProps {
   settings: SettingsStore;
}

export default ({ settings }: SettingsProps) => {
   return <>
      <FormRow
         label="Example Setting"
         trailing={
            <FormSwitch
               value={settings.get('example', true)}
               onValueChange={() => settings.toggle('example', true)}
            />
         }
      />;
   </>
};