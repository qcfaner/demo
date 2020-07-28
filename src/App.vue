<template>
  <div id="app">
    <el-container>
      <el-aside class="aside-container" width="200px">Aside</el-aside>
      <el-main>
        <my-plugin></my-plugin>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import myPlugin from "./components/details";

export default {
  name: "App",
  components: {
    myPlugin,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.aside-container {
  width: 200px;
  padding: 20px;
  background: #ccc;
}
</style>
