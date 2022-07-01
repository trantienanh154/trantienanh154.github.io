<template>
  <a-modal
      v-model:visible="visible"
      title="Chọn Sản Phẩm" style=" width: 1100px" @ok="closeModal"
      @on-finish="onFinish"
  >
    <div class="b-xl">
      <XuLy/>
    </div>
    <div class="l-ss">
      <div class="h-ss">
        <ExCom/>
      </div>
      <div class="h-rr">
        <SanPham @on-submit="handleSubmit"/>
      </div>
    </div>
  </a-modal>
</template>
<script lang="ts">
import {defineComponent, ref} from 'vue';
import {
  PlusOutlined,
} from '@ant-design/icons-vue';

import XuLyVue from "./XuLy.vue";
import ExCom from "./ExCom";
import SanPham from "./SanPham";

export default defineComponent({
  setup() {
    const value = ref([]);
    return {
      value,
      handleSubmit: (values) => {
        this.onFinish({...values, price: 100 });
      }
    };
  },
  props: {
    visible: Boolean,
    onFinish: Function,
    closeModal: Function,
  },
  components: {
    SanPham,
    ExCom,
    //HelloWorld: HelloWorldVue,
    // eslint-disable-next-line vue/no-unused-components
    XuLy: XuLyVue,

    PlusOutlined
  },
});
</script>
<style>
.dd-ss {
  overflow-y: auto;
  height: 400px;
}

.r-ss {
  width: 70%;
  float: left;
}

ul {
  list-style: none;
}


</style>