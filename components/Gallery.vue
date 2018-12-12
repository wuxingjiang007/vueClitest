<template>
  <div class="container">
    <ul 
      :style="{width: warpWidth}"
      class="warp">
      <li
        v-for="item in renderData" 
        :key="item"
        :style="{width: listWidth + 'rem'}"
        class="list">
        {{ item }} 
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Gallery',
  data: () => {
    return {
      listWidth: 300 / 75
    }
  },
  computed: {
    renderData: () => [1, 2, 3, 4, 5],
    warpWidth() {
      return this.renderData.length * this.listWidth + 'rem'
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~static/common/css/mixin';
.container {
  width: 100vw;
  @include remCalc(height, 300);
  background: red;
  overflow: scroll;

  .warp {
    display: flex;
    height: 100%;
    justify-content: flex-start;
    width: auto;
    background: black;
    @include remCalc(padding, 30 0);
    .list {
      // @include remCalc(width, 300);
      height: 100%;
      @include remCalc(margin, 0 30);
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      background: rgb(173, 122, 122);
    }
  }
}
</style>
