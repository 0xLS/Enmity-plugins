import { FormInput, FormRow, FormSwitch, ScrollView, TextInput } from 'enmity/components';
import { SettingsStore } from 'enmity/api/settings';
import { React } from 'enmity/metro/common';

interface SettingsProps {
   settings: SettingsStore;
}

export default ({ settings }: SettingsProps) => {
   return <>
      <FormRow
         label='Example Setting'
         trailing={
            <FormSwitch
               value={settings.get('example', true)}
               onValueChange={() => settings.toggle('example', true)}
            />
         }
      />;
      <FormRow
         label="example"
         trailing={
            <FormInput
               value={"default"}
               onValueChange={newValue => settings.set("test", newValue)}
               title="test"
            />
         }
      />;
   </>
};