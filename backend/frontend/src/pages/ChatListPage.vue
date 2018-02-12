<template>
  <q-list highlight class="no-border">
    <q-list-header>public chat</q-list-header>
    <chat-list-item></chat-list-item>
    <chat-list-item></chat-list-item>
  </q-list>
</template>

<script>
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
