<template>
  <div class="war">
    <div class="hider">
      <div class="h-hel">
        Lọc theo sản phẩm
      </div>
      <div class="c-ss">
        <a-select
            v-model:value="value"
            show-search
            placeholder="Select a person"
            style="width: 200px"

        ></a-select>
      </div>
      <div class="sea-s">
        <a-input-search
            v-model:value="value"
            placeholder="Bạn cần tìm linh kiện gì"
        />

      </div>
    </div>

  </div>




</template>

<style>

  .hider{
    width: 100%;
    height: 100px;
    border: black;
    text-align: center;
  }
  .h-hel{
    width: 20%;
    height: 50px;
    float: left;
  }
  .c-ss{
    width: 40%;
    height: 50px;
    float: left;
  }
  .sea-s{
    width: 40%;
    height: 50px;
    float: right;

  }


</style>