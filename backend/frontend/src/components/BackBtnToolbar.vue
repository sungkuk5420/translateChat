<template>
  <q-toolbar slot="header">
    <q-btn flat  @click="goMainPage" >
      <q-icon push name="ion-arrow-left-c" ></q-icon>
    </q-btn>
    <q-toolbar-title v-if="title">{{title}}</q-toolbar-title>
    <q-btn flat v-if="completeFuncName" @click="completeFunc(completeFuncName, completeData)" >
      {{completeBtnLabel}}
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
  props: ['title', 'completeFuncName', 'completeData', 'completeBtnLabel'],
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
    },
    completeFunc (completeFuncName, completeData) {
      if (completeFuncName === 'CHANGE_USER_INFO') {
        completeData = {
          name: completeData.name,
          img: $('.selectImage img').attr('src')
        }
      }
      this.$store.dispatch(M[completeFuncName], completeData)
    }
  }
}
</script>

<style>
  .z-fixed.fixed-top{
    z-index: 1;
  }

  .q-toolbar > .q-btn{
    left: 0;
    top: 0;
    bottom: 0;
    position: relative;
  }

  .q-btn-inner{
    font-size: 18px;
    font-weight: 500;
  }
</style>
