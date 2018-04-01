<template>
  <q-toolbar slot="header">
    <q-btn flat  @click="goMainPage" >
      <q-icon push name="ion-arrow-left-c" ></q-icon>
      <q-toolbar-title v-if="title">{{title}}</q-toolbar-title>
    </q-btn>
  </q-toolbar>
</template>

<script>
import { M } from '../store/types'
import {
  QBtn,
  QToolbar,
  QToolbarTitle,
  QIcon
} from 'quasar'

export default {
  props: ['title'],
  components: {
    QBtn,
    QToolbar,
    QToolbarTitle,
    QIcon
  },
  data () {
    return {}
  },
  methods: {
    goMainPage () {
      this.$store.dispatch(M.GO_OTHER_PAGE, '')
    }
  }
}
</script>

<style>
  .z-fixed.fixed-top{
    z-index: 1;
  }
</style>
