<template>
  <q-list highlight class="no-border chat-list">
    <q-list-header icon="chat_bubble">
      public chat
      <q-icon name="ion-plus-round" @click="createChat()" />
    </q-list-header>
    <q-scroll-area class="scoll-area">
      <chat-list-item
      v-for="(crruentChat) in chatList"
      v-bind:name="crruentChat.data"
      v-bind:id="crruentChat.id"
      v-bind:key="crruentChat.id">
      </chat-list-item>
    </q-scroll-area>
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
  QItemMain,
  Dialog,
  Toast,
  QScrollArea
} from 'quasar'

export default {
  components: {
    QList,
    QListHeader,
    QIcon,
    QItem,
    QItemSide,
    QItemMain,
    chatListItem,
    Dialog,
    Toast,
    QScrollArea
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
  },
  methods: {
    createChat () {
      let thisObj = this
      Dialog.create({
        title: '방 만들기',
        form: {
          chatName: {
            type: 'text',
            label: '방 이름'
          },
          pass: {
            type: 'password',
            label: 'Password',
            model: ''
          },
          tags: {
            type: 'chips',
            label: '태그',
            model: []
          }
        },
        buttons: [
          'Cancel',
          {
            label: 'Ok',
            handler (data) {
              if (data.chatName !== undefined) {
                Toast.create('방을 생성하였습니다. ' + JSON.stringify(data))
                thisObj.$store.dispatch(M.CREATE_CHAT, data.chatName)
              }
              else {
                Toast.create('방 이름을 입력해주세요.')
              }
            }
          }
        ]
      })
    }
  }
}
</script>

<style lang="scss" >
  .q-tab .q-chip{
    top: 5px;
    margin-left: 20px !important;
    right: initial;
  }
  .q-list-header{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
  }
  .ion-plus-round{
    font-size:18px;
    right: 20px;
    position: absolute;
    top: 0;
    bottom: 0;
    &:hover{
      cursor: pointer;
    }
  }
  .chat-list{
    width: 100%;
    height: 100%;
    position: relative;
    padding: 50px 0;
  }
</style>

<style lang="scss" scope>
.scoll-area{
  height: 100%;
  overflow-y:auto;
}
</style>
