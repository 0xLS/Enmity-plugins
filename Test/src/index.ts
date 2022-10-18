import * as enmityModules from "enmity/modules";
import * as enmityPlugins from "enmity/managers/plugins";
import * as enmityPatcher from "enmity/patcher";
import * as enmityComp from "enmity/components";

const test: enmityPlugins.Plugin = {
    name: "Test",
    description: "Test",
    version: "1.0.0",
    authors: [],

    onStart() {
        enmityComp.Alert("test");
    },

    onStop() {
    },
}

enmityPlugins.registerPlugin(test);