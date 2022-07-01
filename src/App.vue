<template>
  <div class="heard">
       <div class="list-drive" >
          <div class="item-drive">
            <div class="d-name">
               1. Bộ vi xử lý
            </div>
            <div class="lrf">
              <a-button
                  type="primary" @click="modal2Visible = true"
              >
                <plus-outlined />
                Chọn</a-button>
              <a-modal v-model:visible="modal2Visible"  title="Chọn Sản Phẩm" style=" width: 1100px" @ok="modal2Visible = false"  >

                <div class="b-xl">
                  <XuLy/>
                </div>
                <div class="l-ss">
                  <div class="h-ss">
                    <ExCom/>
                  </div>
                  <div class="h-rr">
                    <SanPham/>
                  </div>
                </div>
              </a-modal>
            </div>
          </div>
          <div class="item-drive">
            <div class="d-name">
             2. Bo mạch chủ
            </div>
            <div class="lrf">
              <a-button type="primary" @click="modal4Visible = true">
                <plus-outlined />
                Chọn
              </a-button>
              <a-modal
                  v-model:visible="modal4Visible"
                  title="Vertically centered modal dialog"
                  centered
                  @ok="modal4Visible = false"
              >
                <div class="b-xl">
                  <XuLy/>
                </div>
                <div class="l-ss">
                  <div class="h-ss">
                    <ExCom/>
                  </div>
                  <div class="h-rr">
                    <SanPham/>
                  </div>
                </div>
              </a-modal>
            </div>
          </div>
          <div class="item-drive">
            <div class="d-name">
              3. RAM
            </div>
            <div class="lrf">
              <a-button type="primary" @click="modal3Visible = true">
                Vertically centered modal dialog
              </a-button>
              <a-modal
                  v-model:visible="modal3Visible"
                  title="Vertically centered modal dialog"
                  centered
                  @ok="modal3Visible = false"
              >
                <p>some contents...</p>
                <p>some contents...</p>
                <p>some contents...</p>
              </a-modal>
            </div>
          </div>
      </div>
  </div>

</template>

<script>
//import HelloWorldVue from "./components/HelloWorld.vue";

import { ref } from 'vue';
import {
  PlusOutlined,
} from '@ant-design/icons-vue';
import XuLyVue from "./components/XuLy.vue";
import ExCom from "@/components/ExCom";
import SanPham from "@/components/SanPham";
export default {
  name: "App",
  setup() {
    const modal1Visible  = ref(false);
    const modal2Visible = ref(false);
    const modal3Visible = ref(false);
    const modal4Visible = ref(false);


    const setModal1Visible  = () => {
      let visible;
      modal1Visible.value = visible;
    };
    return {
      modal1Visible,
      modal2Visible,
      modal3Visible,
      modal4Visible,
      setModal1Visible,
    };
  },
  components: {
    SanPham,
    ExCom,
    //HelloWorld: HelloWorldVue,
    // eslint-disable-next-line vue/no-unused-components
    XuLy: XuLyVue,

    PlusOutlined
  },
};
</script>

<style >

.heard{
  width: 100%;
  height: 500px;
  text-align: left;
}
.cone{

  background: #fff;
  padding: 30px !important;

}
.list-drive{
  width: 100%;
  float: left;
  margin-bottom: 8px;
  margin-top: 8px;
  font-size: 14px;

  border-radius: 3px;
  line-height: 34px;
  display: inline-block;
  padding: 0 8px;
  margin-left: 10px;
  cursor: pointer;
  opacity: 1;

}
.item-drive{
  width: 100%;
  float: left;
  content: '';
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  clear: both;
  padding: 0 8px;
  border-bottom: none;
  margin-bottom: 8px;
  margin-top: 8px;
  font-size: 14px;
  border-radius: 3px;
  line-height: 34px;
  margin-left: 10px;
  cursor: pointer;
  opacity: 1;
  color: #e51d24;


}
.d-name{
  width: 20%;
  float: left;

}
.lrf{
  width: 80%;
  float: left;
  text-align: left;
}
.b-xl{
  width: 100%;
  height: 50px;
}
.l-ss{
  width: 100%;
}
.h-ss{
  width: 30%;
  float: left;

}
.h-rr{
  width: 70%;
  height: 400px ;
  float: right;
}
</style>
