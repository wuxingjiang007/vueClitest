<template>
  <div class="Room">
    <Room/>
    <Register/>
  </div>
</template>
<script>
import Room from '~/components/Room'
import Register from '~/components/Register'
export default {
  name: 'Down',
  components: {
    Room,
    Register
  }
}
</script>
<style lang="scss" scoped>
</style>
