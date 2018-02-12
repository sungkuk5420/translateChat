<template>
  <q-toolbar>
    <q-btn flat  @click="goMainPage" >
      <q-icon push name="ion-arrow-left-c" ></q-icon>
    </q-btn>
  </q-toolbar>
</template>

<script>
import { M } from '../store/types'
import {
  QBtn,
  QToolbar,
  QIcon
} from 'quasar'

export default {
  components: {
    QBtn,
    QToolbar,
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
