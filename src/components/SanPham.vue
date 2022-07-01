<template>
  <div class="dds-ss">
    <div class="p-item">
      <div class="k-rr">
        <a href="/cpu-intel-core-i5-12500-upto-4.46ghz-6-nhan-12-luong-18mb-cache-65w-socket-intel-lga-1700"
           class="p-img">

          <img src="https://hanoicomputercdn.com/media/product/120_66509_cpu_intel_core_i5_12500_upto_4__2_.jpg"
               alt="CPU Intel Core i5-12500 (Upto 4.46Ghz, 6 nhân 12 luồng, 18MB Cache, 65W) - Socket Intel LGA 1700">

        </a>
      </div>

      <div class="y-pp">
        <a href="/cpu-intel-core-i5-12500-upto-4.46ghz-6-nhan-12-luong-18mb-cache-65w-socket-intel-lga-1700"
           class="p-name">CPU Intel Core i5-12500 (Upto 4.46Ghz, 6 nhân 12 luồng, 18MB Cache, 65W) - Socket Intel LGA
          1700</a>

        <table>
          <tbody>
          <tr>
            <td width="80">Mã SP:</td>
            <td>CPUI463</td>
          </tr>
          <tr>
            <td>Bảo hành:</td>
            <td>36 Tháng</td>
          </tr>
          <tr>
            <td valign="top">Kho hàng:</td>
            <td>

                                                <span class="dongbotonkho">
                                                <span class="detail"
                                                      style="background: #278c56; color: #fff; padding: 2px 10px; white-space: pre-line;"><i
                                                    class="far fa-check"></i> Còn hàng</span>
                                              </span>

            </td>
          </tr>
          </tbody>
        </table>
        <span class="p-price">5.499.000 đ</span>
      </div>


      <span class="btn-buy js-select-product" data-id="66509"></span>

    </div>
    <div class="p-item">
      <div class="k-rr">
        <a href="/cpu-intel-core-i9-12900f" class="p-img">

          <img src="https://hanoicomputercdn.com/media/product/120_65692_cpu_intel_core_i9_12900f__3_.jpg"
               alt="CPU Intel Core i9-12900F">

        </a>
      </div>

      <div class="y-pp">
        <a href="/cpu-intel-core-i9-12900f" class="p-name">CPU Intel Core i9-12900F</a>

        <table>
          <tbody>
          <tr>
            <td width="80">Mã SP:</td>
            <td>CPUI460</td>
          </tr>
          <tr>
            <td>Bảo hành:</td>
            <td>36 Tháng</td>
          </tr>
          <tr>
            <td valign="top">Kho hàng:</td>
            <td>

                                            <span class="dongbotonkho">
                                            <span class="detail"
                                                  style="background: #278c56; color: #fff; padding: 2px 10px; white-space: pre-line;"><i
                                                class="far fa-check"></i> Còn hàng</span>
                                          </span>

            </td>
          </tr>
          </tbody>
        </table>
        <span class="p-price">12.899.000 đ</span>
      </div>


      <span class="btn-buy js-select-product" data-id="65692"></span>

    </div>
    <div class="p-item">
      <div class="k-rr">
        <a href="/cpu-intel-core-i9-12900f" class="p-img">

          <img
              @click="submit"
              src="https://hanoicomputercdn.com/media/product/120_65692_cpu_intel_core_i9_12900f__3_.jpg"
             alt="CPU Intel Core i9-12900F"
          >

        </a>
      </div>

      <div class="y-pp">
        <a href="/cpu-intel-core-i9-12900f" class="p-name">CPU Intel Core i9-12900F</a>

        <table>
          <tbody>
          <tr>
            <td width="80">Mã SP:</td>
            <td>CPUI460</td>
          </tr>
          <tr>
            <td>Bảo hành:</td>
            <td>36 Tháng</td>
          </tr>
          <tr>
            <td valign="top">Kho hàng:</td>
            <td>

                                            <span class="dongbotonkho">
                                            <span class="detail"
                                                  style="background: #278c56; color: #fff; padding: 2px 10px; white-space: pre-line;"><i
                                                class="far fa-check"></i> Còn hàng</span>
                                          </span>

            </td>
          </tr>
          </tbody>
        </table>
        <span class="p-price">12.899.000 đ</span>
      </div>


      <span class="btn-buy js-select-product" data-id="65692"></span>

    </div>
    <div class="p-item">
      <div class="k-rr">
        <a href="/cpu-intel-core-i9-12900f" class="p-img">

          <img src="https://hanoicomputercdn.com/media/product/120_65692_cpu_intel_core_i9_12900f__3_.jpg"
               alt="CPU Intel Core i9-12900F">

        </a>
      </div>

      <div class="y-pp">
        <a href="/cpu-intel-core-i9-12900f" class="p-name">CPU Intel Core i9-12900F</a>

        <table>
          <tbody>
          <tr>
            <td width="80">Mã SP:</td>
            <td>CPUI460</td>
          </tr>
          <tr>
            <td>Bảo hành:</td>
            <td>36 Tháng</td>
          </tr>
          <tr>
            <td valign="top">Kho hàng:</td>
            <td>

                                            <span class="dongbotonkho">
                                            <span class="detail"
                                                  style="background: #278c56; color: #fff; padding: 2px 10px; white-space: pre-line;"><i
                                                class="far fa-check"></i> Còn hàng</span>
                                          </span>

            </td>
          </tr>
          </tbody>
        </table>
        <span class="p-price">12.899.000 đ</span>
      </div>


      <span class="btn-buy js-select-product" data-id="65692"></span>

    </div>
  </div>


</template>
<script>
import {defineComponent} from 'vue';
export default defineComponent({
  setup() {
    return {
      submit: () => {
        this.onSubmit({ product: 1 });
      },
    };
  },
  props: {
  onSubmit: Function,
  },
});
</script>
<style>
.dds-ss {
  overflow-y: auto;
  height: 400px;
}

.k-rr {

  width: 30%;
  float: left;
}

.y-pp {
  width: 70%;

  float: right;
}

.p-item {
  content: '';
  display: table;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  clear: both;
  height: 150px;
  width: 691.6px;
}
</style>