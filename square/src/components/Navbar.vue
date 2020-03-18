<template>
  <nav class="nav">
    <img class="logo-square" alt="Square logomarca" src="@/assets/logo.png">
    <div>
      <router-link to="/">Home</router-link>
      <router-link to="/contact">Contact Us</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>

<style scoped>
  .nav {
    padding: 4% 11.22% 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .nav a {
    padding: 2em;
    text-decoration: none;
    font-weight: bold;
    color: white;
  }
  .nav a.router-link-exact-active {
    color: white;
  }
  @media (max-width: 800px) {
    .nav a {
      padding: 0.4em;
    }
    .logo-square {
      height: auto;
    }
  }
  @media (max-width: 812px) and (orientation: landscape) {
    .nav{
      padding: 0px 8% 0px;
    }
  }
</style>
