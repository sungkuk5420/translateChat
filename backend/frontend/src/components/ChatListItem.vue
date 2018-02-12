<template>
  <q-item @click="goChatRoom">
    <q-item-side avatar="http://quasar-framework.org/quasar-play/android/img/boy-avatar.5ff53af.png" />
    <q-item-main label="공개 채팅방" />
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
      this.$store.dispatch(M.GO_OTHER_PAGE, 'chatRoom')
    }
  }
}
</script>

<style>
</style>
