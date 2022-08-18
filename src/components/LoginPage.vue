<template>
  <section>
    <div class="log-form">
      <h2>Login to your account</h2>
      <div class="c-form">
        <input type="text" title="username" ref="name" placeholder="username" />
          <input type="password" title="password" ref="pwd" placeholder="password" />
            <button type="submit" @click="onSubmit" class="btn">Login</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      cname: '',
      cpwd: ''
    }
  },

  methods: {
    onSubmit(){
      this.$router.push('/second-page');
      document.cookie = 'name=' + this.$refs.name.value;
      document.cookie = 'pwd=' + this.$refs.pwd.value;
    }
  }
}
</script>

<style scoped>
.c-form {
  display: flex;
  flex-direction: column;
}
input {
  margin-bottom: 25px;
  height: 25px;
}

</style>