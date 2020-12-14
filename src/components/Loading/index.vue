<template>
  <loading-container>
    <img src="../../assets/logo.png" alt="Vue Logo">
    <h2>Carregando...</h2>
  </loading-container>
</template>

<script>
import { Container } from './styles';

export default {
  components: {
    'loading-container': Container,
  },
}
</script>