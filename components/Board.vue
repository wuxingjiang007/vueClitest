<template>
  <div class="Board">
    Board
  </div>
</template>
<script>
export default {
  name: 'Board'
}
</script>
<style lang="scss" scoped>
@import '~static/common/css/mixin';
.Board {
  @include remCalc(height, 300);
  @include remCalc(width, 300);
  background: red;
  border-radius: 8px;
  border: 1px solid #000;
}
</style>
