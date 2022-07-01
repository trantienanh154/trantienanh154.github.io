import { createApp } from "vue";
import App from "./App.vue";
import "ant-design-vue/dist/antd.css";

import {
    Descriptions,
    Button,
    Modal,
    Input,
    Checkbox,
    Select,

} from "ant-design-vue";

createApp(App)
    .use(Descriptions)
    .use(Button)
    .use(Modal)
    .use(Input)
    .use(Checkbox)
    .use(Select)
    .mount("#app");
