<template>
  <main-container>
    <c-loading v-if="loading" />
    <strong class="error-info" v-if="error">Ocorreu um erro! Tente novamente.</strong>
    <info-container v-if="!loading">
      <img :src="user.avatar_url" alt="Foto de perfil do Github">
      <h3>{{ user.name }} <span>|</span> {{ user.username }}</h3>
      <span>{{ user.location }}</span>
      <p>{{ user.bio }}</p>
      <a :href="user.url" target="_blank" rel="noreferrer">Visitar perfil</a>
    </info-container>
  </main-container>
</template>

<script>
import { Container, PersonalInfo } from './styles';
import axios from 'axios';
import Loading from '../../components/Loading';

export default {
  name: 'DevInfos',
  components: {
    'c-loading': Loading,
    'main-container': Container,
    'info-container': PersonalInfo,
  },
  data() {
    return {
      user: {
        name: '',
        username: '',
        url: '',
        avatar_url: '',
        location: '',
        bio: '',
      },
      loading: true,
      error: false,
    }
  },
  mounted() {
    axios
      .get('https://api.github.com/users/lucasnfarias')
      .then(response => {
        const { name, login, avatar_url, html_url, location, bio } = response.data;
        this.user = {
          name,
          username: login,
          avatar_url,
          url: html_url,
          location,
          bio, 
        };
      })
      .catch(err => {
        this.error = true;
        console.log(err);
      })
      .finally(() => {
        this.loading = false;
      })
  },
}
</script>
