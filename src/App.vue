<template>
  <div id="app">
    <CommentList header="Primeiro projeto com Vue"/>
  </div>
</template>

<script>
import CommentList from './components/CommentList/index';

export default {
  name: 'App',
  components: {
    CommentList
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Roboto', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #2f2f2f;
  color: #E8DDB5;
}

button {
  cursor: pointer;
  border: 0;
}
</style>
