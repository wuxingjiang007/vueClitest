<template>
  <div class="Room">
    <div class="wall">
      <Board/>
      <Control/>
      <AccessRecord/>
    </div>
    <Gallery/>
  </div>
</template>
<script>
import Gallery from '~/components/Gallery'
import Board from '~/components/Board'
import Control from '~/components/Control'
import AccessRecord from '~/components/AccessRecord'
export default {
  name: 'Down',
  components: {
    Gallery,
    Board,
    Control,
    AccessRecord
  }
}
</script>
<style lang="scss" scoped>
@import '~static/common/css/mixin';
.Room {
  background: gray;
  .wall {
    display: flex;
  }
}
</style>
