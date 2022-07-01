<template>
  <div class="dd-ss" >
    <div class="list-filter">
      <div class="gr-filter brand">

        <h5 class="title-filter">Hãng sản xuất</h5>
        <ul>

          <li>
            <input type="checkbox">
            <span class="value-filter">AMD (27)</span>
          </li>
        </ul><ul>

        <li>
          <input type="checkbox">
          <span class="value-filter">INTEL (71)</span>
        </li>
      </ul>
      </div>
      <div class="gr-filter">
        <h5 class="title-filter">Khoảng giá <!--<span class="show-filter"><i class="fas fa-caret-right"></i></span>--></h5>
        <!-- -->
        <ul>

          <li>
            <input type="checkbox">
            <span class="value-filter">Dưới 2 triệu</span>
          </li>





        </ul>
      </div>


      <div class="gr-filter">
        <h5 class="title-filter">Dòng CPU <!--<span class="show-filter"><i class="fas fa-caret-right"></i></span>--></h5>
        <!-- -->
        <ul>

          <li>
            <input type="checkbox" >
            <span class="value-filter">Intel Celeron (2)</span>
          </li>

        </ul><ul>

        <li>
          <input type="checkbox" />
          <span class="value-filter">AMD Athlon (1)</span>
        </li>

      </ul>
      </div>

      <div class="gr-filter">
        <h5 class="title-filter">Thế hệ CPU <!--<span class="show-filter"><i class="fas fa-caret-right"></i></span>--></h5>
        <!-- -->
        <ul>

          <li>
            <input type="checkbox" >
            <span class="value-filter">Intel Alder Lake (19)</span>
          </li>
          <li>
            <input type="checkbox">
            <span class="value-filter">Intel Rocket Lake (13)</span>
          </li>
        </ul>
        <ul>
          <li>
            <input type="checkbox">
            <span class="value-filter">AMD Ryzen 7000 Series</span>
          </li>


        </ul>
      </div>


    </div>
    <div class="gr-filter">
      <h5 class="title-filter">Tính Năng <!--<span class="show-filter"><i class="fas fa-caret-right"></i></span>--></h5>
      <!-- -->
      <ul>

        <li>
          <input type="checkbox" onclick="objBuildPCVisual.showProductFilter('https://hacom.vn/ajax/get_json.php?action=pcbuilder&amp;action_type=get-product-category&amp;category_id=316&amp;tinh-nang-ghe-gaming=ghe-cong-thai-hoc')">
          <a href="javascript:void(0)" onclick="objBuildPCVisual.showProductFilter('https://hacom.vn/ajax/get_json.php?action=pcbuilder&amp;action_type=get-product-category&amp;category_id=316&amp;tinh-nang-ghe-gaming=ghe-cong-thai-hoc')"><span class="value-filter">Ghế Công Thái Học (24)</span> </a>
        </li>


        <li>
          <input type="checkbox" onclick="objBuildPCVisual.showProductFilter('https://hacom.vn/ajax/get_json.php?action=pcbuilder&amp;action_type=get-product-category&amp;category_id=316&amp;tinh-nang-ghe-gaming=ghe-van-phong')">
          <a href="javascript:void(0)" onclick="objBuildPCVisual.showProductFilter('https://hacom.vn/ajax/get_json.php?action=pcbuilder&amp;action_type=get-product-category&amp;category_id=316&amp;tinh-nang-ghe-gaming=ghe-van-phong')"><span class="value-filter">Ghế Văn Phòng (32)</span> </a>
        </li>
      </ul><ul>

      <li>
        <input type="checkbox" onclick="objBuildPCVisual.showProductFilter('https://hacom.vn/ajax/get_json.php?action=pcbuilder&amp;action_type=get-product-category&amp;category_id=316&amp;tinh-nang-ghe-gaming=ghe-gamer')">
        <a href="javascript:void(0)" onclick="objBuildPCVisual.showProductFilter('https://hacom.vn/ajax/get_json.php?action=pcbuilder&amp;action_type=get-product-category&amp;category_id=316&amp;tinh-nang-ghe-gaming=ghe-gamer')"><span class="value-filter">Ghế Gamer (105)</span> </a>
      </li>


      <li>
        <input type="checkbox" onclick="objBuildPCVisual.showProductFilter('https://hacom.vn/ajax/get_json.php?action=pcbuilder&amp;action_type=get-product-category&amp;category_id=316&amp;tinh-nang-ghe-gaming=ghe-gamenet')">
        <a href="javascript:void(0)" onclick="objBuildPCVisual.showProductFilter('https://hacom.vn/ajax/get_json.php?action=pcbuilder&amp;action_type=get-product-category&amp;category_id=316&amp;tinh-nang-ghe-gaming=ghe-gamenet')"><span class="value-filter">Ghế GameNet (7)</span> </a>
      </li>


    </ul>
    </div>
  </div>






</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const value = ref([]);
    return {
      value,
    };
  },
});
</script>
<style>
  .dd-ss{
    overflow-y:auto;
    height: 400px;
  }
  .r-ss{
    width: 70%;
    float: left;
  }
  ul {
    list-style: none;
  }


</style>