import * as enmityModules from "enmity/modules";
import * as enmityPlugins from "enmity/managers/plugins";
import * as enmityPatcher from "enmity/patcher";
import * as enmityComp from "enmity/components";
import * as enmityCommon from "enmity/metro";
import * as enmityAssests from "enmity/api/assets";

const test: enmityPlugins.Plugin = {
    name: "Test",
    description: "Test",
    version: "1.0.0",
    authors: [],

    onStart() {
        enmityComp.Alert("test");
        alert("test");
        const Toast = enmityCommon.common.Toasts;
        Toast.open({
            content: "[Test] Starting...",
            source: enmityAssests.getIDByName("debug")
        });
    },

    onStop() {

    },
}

enmityPlugins.registerPlugin(test);