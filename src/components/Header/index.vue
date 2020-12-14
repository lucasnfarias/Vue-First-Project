<template>
  <header-container>
    <img src="../../assets/logo.png" alt="Vue Logo">
    <div>
      <router-link exact to="/">Comentários</router-link>
      <router-link to="/dev-infos">Dev Infos</router-link>
    </div>
  </header-container>
</template>

<script>
import { Container } from './styles';

export default {
  components: {
    'header-container': Container,
  },
}
</script>