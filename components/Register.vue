<template>
  <div class="Register">
    <p class="title">快来和我一起照顾家里的植物宝宝吧</p>
    <div class="form">
      <div class="input-group">
        <input 
          type="phone" 
          placeholder="点击这里输入手机号">
      </div>
      <div class="input-group">
        <input 
          type="text" 
          placeholder="请输入收到的验证码">
        <cube-button>Button</cube-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Register',
  components: {},
  methods: {
    handerGetV() {
      console.log('1212')
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~static/common/css/mixin';
.Register {
  width: 10rem;
  background: #fff;
  border-radius: 8px;
  @include remCalc(padding, 40);
  .title {
    text-align: center;
  }
  .form {
    width: 100%;
  }
  .input-group {
    width: 100%;
    display: flex;
    @include remCalc(height, 80);
    border: 1px solid #adadad;
    border-radius: 4px;
    @include remCalc(margin, 40 0);
    @include remCalc(padding, 10);
    justify-content: space-between;
  }
  .input-btn {
    border-radius: 4px;
    background: #adadad;
    color: #fff;
  }
  input {
    flex: 1;
  }
}
</style>
