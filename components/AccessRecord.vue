<template>
  <ul class="AccessRecord">
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
    <li>6</li>
    <li>7</li>
    <li>8</li>
    <li>9</li>
    <li>0</li>
  </ul>
</template>
<script>
export default {
  name: 'AccessRecord'
}
</script>
<style lang="scss" scoped>
@import '~static/common/css/mixin';
.AccessRecord {
  @include remCalc(max-height, 300);
  flex: 1;
  background: #fff;
  border-radius: 8px;
  border: 1px solid #000;
  overflow: auto;
  li {
    @include remCalc(max-height, 50);
  }
}
</style>
