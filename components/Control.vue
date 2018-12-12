<template>
  <ul class="Control">
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
  </ul>
</template>
<script>
export default {
  name: 'Control'
}
</script>
<style lang="scss" scoped>
@import '~static/common/css/mixin';
.Control {
  @include remCalc(height, 300);
  @include remCalc(width, 100);
  @include remCalc(margin, 0 20);
  background: red;
  border-radius: 8px;
  border: 1px solid #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  li {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
