<template lang="">
  <header>
    <button>HOME</button>
    <button>ABOUT</button>
  </header>
</template>
<script>
export default {};
</script>
<style scoped>
header {
  background: lightblue;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
button {
  letter-spacing: 0.3rem;
  color: #476a2e;
  border: 2px solid #476a2e;
  padding: 0.45rem 0.8rem;
  display: inline-block;
  transition: all 0.3s linear;
  cursor: pointer;
  font-size: 0.8rem;
  background: transparent;
  border-radius: 0.25rem;
  display: inline-block;
}
</style>
