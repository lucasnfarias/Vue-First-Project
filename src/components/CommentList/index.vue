<template>
  <comments-container>
    <h1>{{ header }}</h1>
    <comment-form>
      <div>
        <label for="input-name">Nome</label>
        <input v-model="name" id="input-name" name="input-name" type="text" placeholder="Nome ou apelido ou deixe em branco para anônimo" />
      </div>
      <div>
        <label for="input-comment">Comentário</label>
        <textarea rows="8" v-model="message" id="input-comment" name="input-comment" placeholder="Escreva seu comentário..." ></textarea>
      </div>
      <comment-button :hasComment="message" type="submit" v-on:click.prevent="addComment">Comentar</comment-button>
    </comment-form>

    <no-comments v-if="allComments.length == 0">
      <h2>Nenhum comentário encontrado!</h2>
    </no-comments>
    <comments-list>
      <li v-for="(comment, index) in allComments" :key="index">
        <div>
          <span>Author: <strong>{{ comment.name }}</strong></span>
          <p>{{ comment.message }}</p>
        </div>
        
        <button v-on:click="deleteComment(index)">Excluir</button>
      </li>
    </comments-list>
  </comments-container>
</template>

<script>
import { Container, CommentForm, CommentButton, NoComments, CommentList } from './styles';

export default {
  name: 'CommentList',
  components: {
    'comments-container': Container,
    'comment-button': CommentButton,
    'comment-form': CommentForm,
    'no-comments': NoComments,
    'comments-list': CommentList,
  },
  props: {
    header: String
  },
  data() {
    return {
      comments: [],
      name: '',
      message: '',
    }
  },
  mounted() {
    this.comments = JSON.parse(localStorage.getItem('@vue-project/comments')) || [];
  },
  methods: {
    addComment() {
      if (this.message.trim() === '') {
        alert('Comentário vazio!');
        return;
      }
      
      this.comments.push({
        name: this.name,
        message: this.message,
      });

      this.name = '';
      this.message = '';
    },
    deleteComment(index) {
      this.comments.splice(index, 1);
    }
  },
  computed: {
    allComments() {
      return this.comments.map(comment => ({
        ...comment,
        name: comment.name.trim() === '' ? 'Anônimo' : comment.name,
      }));
    }
  },
  watch: {
    comments(val) {
      localStorage.setItem('@vue-project/comments', JSON.stringify(val));
    }
  }
}
</script>
