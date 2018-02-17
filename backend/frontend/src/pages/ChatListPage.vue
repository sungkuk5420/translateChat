<template>
  <q-list highlight class="no-border">
    <q-list-header>public chat</q-list-header>
    <chat-list-item
    v-for="(crruentChat) in chatList"
    v-bind:name="crruentChat.data"
    v-bind:id="crruentChat.id"
    v-bind:key="crruentChat.id">
    </chat-list-item>
  </q-list>
</template>

<script>
import { M } from '../store/types'
import { mapGetters } from 'vuex'
import chatListItem from '../components/ChatListItem'

import {
  QList,
  QListHeader,
  QIcon,
  QItem,
  QItemSide,
  QItemMain
} from 'quasar'

export default {
  components: {
    QList,
    QListHeader,
    QIcon,
    QItem,
    QItemSide,
    QItemMain,
    chatListItem
  },
  data () {
    return {}
  },
  computed: {
    ...mapGetters({
      chatList: 'getChatList'
    })
  },
  beforeCreate () {
    this.$store.dispatch(M.CAHNGE_CHAT_LIST)
  }
}
</script>

<style lang="scss" >
  .q-tab .q-chip{
    top: 5px;
    margin-left: 20px !important;
    right: initial;
  }
</style>

<style lang="scss" scoped>

</style>
