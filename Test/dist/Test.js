function e(t){window.enmity.plugins.registerPlugin(t)}const{components:o}=window.enmity,r=o.Alert;o.Button,o.FlatList,o.Image,o.ImageBackground,o.KeyboardAvoidingView,o.Modal,o.Pressable,o.RefreshControl,o.ScrollView,o.SectionList,o.StatusBar,o.StyleSheet,o.Switch,o.Text,o.TextInput,o.TouchableHighlight,o.TouchableOpacity,o.TouchableWithoutFeedback,o.Touchable,o.View,o.VirtualizedList,o.Form,o.FormArrow,o.FormCTA,o.FormCTAButton,o.FormCardSection,o.FormCheckbox,o.FormDivider,o.FormHint,o.FormIcon,o.FormInput,o.FormLabel,o.FormRadio,o.FormRow,o.FormSection,o.FormSelect,o.FormSubLabel,o.FormSwitch,o.FormTernaryCheckBox,o.FormText,o.FormTextColors,o.FormTextSizes;const n=window.enmity.modules.common;function i(t){return window.enmity.assets.getIDByName(t)}const m={name:"Test",description:"Test",version:"1.0.0",authors:[],onStart(){r("test"),alert("test"),n.Toasts.open({content:"[Test] Starting...",source:i("debug")})},onStop(){}};e(m);
