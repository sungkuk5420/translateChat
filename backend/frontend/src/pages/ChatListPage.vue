<template>
  <q-list highlight class="no-border">
    <q-list-header icon="chat_bubble">
      public chat
      <q-icon name="ion-plus-round" @click="createChat()" />
    </q-list-header>
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
  QItemMain,
  Dialog,
  Toast
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
    Toast
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
        title: 'Prompt',
        form: {
          chatName: {
            type: 'text',
            label: 'Textbox'
          },
          pass: {
            type: 'password',
            label: 'Password',
            model: ''
          },
          age: {
            type: 'number',
            label: 'Numeric',
            model: 10,
            min: 1,
            max: 100
          },
          tags: {
            type: 'chips',
            label: 'Chips',
            model: ['Joe', 'John']
          },
          comments: {
            type: 'textarea',
            label: 'Textarea',
            model: ''
          }
        },
        buttons: [
          'Cancel',
          {
            label: 'Ok',
            handler (data) {
              Toast.create('Returned ' + JSON.stringify(data))
              // data.name is 'Quasar'
              // data.pass is 'rulz!'
              // data.age is 1
              // data.tags is ['Joe', 'John'],
              // data.comments is 'Some comments...'
              thisObj.$store.dispatch(M.CREATE_CHAT, data.chatName)
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
    position: relative;
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
</style>

<style lang="scss" scoped>

</style>
