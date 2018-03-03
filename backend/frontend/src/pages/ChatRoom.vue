<template>
  <q-layout style="padding-top: 50px; padding-bottom: 50px; height: 100%;">
    <!-- your content -->
    <q-toolbar slot="header" class="fixed-top no-padding">
      <back-btn-toolbar></back-btn-toolbar>
    </q-toolbar>
    <div class="layout-padding" style="padding-top: 0px;padding-bottom: 0px;overflow-y: scroll;height: 100%;" ref="list">
      <q-chat-message
        v-for="msg in chatMessages"
        :key="msg.key"
        :label="msg.label"
        :sent="(msg.name === userInfo.name) ? true : false"
        :text-color="'black'"
        :bg-color="''"
        :name="msg.name"
        :avatar="(msg.name === userInfo.name) ? 'http://quasar-framework.org/quasar-play/apple/statics/boy-avatar.png' : 'http://quasar-framework.org/quasar-play/android/statics/linux-avatar.png'"
        :text="msg.text"
        :stamp="msg.stamp"
      />

      <!-- <q-chat-message
        name="Vladimir"
        avatar="http://quasar-framework.org/quasar-play/apple/statics/boy-avatar.png"
      >
        <q-spinner-dots size="2rem" />
      </q-chat-message> -->
    </div>
    <q-toolbar slot="footer" class="fixed-bottom no-margin no-padding">
        <q-input class="no-margin full-width" autofocus inverted v-model="sendMsg" stack-label="send message" :after="[{icon: 'arrow_forward', content: true, handler () {chatSend()}  }]" @keydown.enter="chatSend" />
    </q-toolbar>
  </q-layout>
</template>

<script>
import { M } from '../store/types'
import { mapGetters } from 'vuex'
import backBtnToolbar from '../components/BackBtnToolbar'
import qChatMessage from '../components/chatMessage'
import {
  QSpinnerDots,
  QToolbar,
  QToolbarTitle,
  QBtn,
  QIcon,
  QLayout,
  QFixedPosition,
  QInput,
  scroll,
  QInfiniteScroll
} from 'quasar'

export default {
  components: {
    QSpinnerDots,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QLayout,
    QFixedPosition,
    backBtnToolbar,
    qChatMessage,
    QInput,
    scroll,
    QInfiniteScroll
  },
  data () {
    return {
      loading: true,
      sendMsg: ''
    }
  },
  computed: {
    ...mapGetters({
      chatMessages: 'getChatMessages',
      userInfo: 'getUserInfo'
    })
  },
  beforeCreate () {
    this.$store.dispatch(M.CHANGE_CHAT, this.$route.query.chatId)
    this.$store.dispatch(M.ADD_BUBBLE_LIST)
  },
  updated () {
    console.log('aa')
    console.log(this.$refs.list.scrollHeight)
    this.$refs.list.scrollTo(0, this.$refs.list.scrollHeight)
  },
  methods: {
    chatSend () {
      let sendMsg = this.sendMsg
      this.sendMsg = ''
      this.$store.dispatch(M.SEND_CHAT, sendMsg)
    },
    refresher (index, done) {
      setTimeout(() => {
        // let items = []
        // for (let i = 0; i < 7; i++) {
        //   items.push({})
        // }
        // this.items = this.items.concat(items)
        done()
      }, 2500)
    }
  }
}
</script>
<style>
.layout-page-container{
  height:100%;
}
.layout-page {
  height:100%;
  min-height: initial !important;
}
.q-message-avatar {
  display: block;
}
</style>
