<template>
  <q-item @click="goChatRoom">
    <q-item-side avatar="http://quasar-framework.org/quasar-play/apple/statics/boy-avatar.png" />
    <q-item-main v-bind:label="name"  />
    <q-item-side right icon="chat_bubble" />
  </q-item>
</template>

<script>
import { M } from '../store/types'
import {
  QItem,
  QItemSide,
  QItemMain
} from 'quasar'
export default {
  props: [
    'name',
    'id'
  ],
  components: {
    QItem,
    QItemSide,
    QItemMain
  },
  data () {
    return {}
  },
  methods: {
    goChatRoom () {
      this.$store.dispatch(M.CHANGE_CHAT, this.name)
      this.$store.dispatch(M.GO_OTHER_PAGE, 'chatRoom')
    }
  }
}
</script>

<style>
</style>
