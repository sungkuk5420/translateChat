<template>
  <q-input class="no-margin full-width footer" autofocus inverted v-model="sendMsg" stack-label="send message" :after="[{icon: 'arrow_forward', content: true, handler () {chatSend()}  }]" @keydown.enter="chatSend" @focus="addFixed()" @blur=" removeFixed()" />
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
  QScrollArea
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
    QScrollArea
  },
  data () {
    return {
      loading: true,
      header: true,
      footer: true
    }
  },
  computed: {
    sendMsg: {
      get () {
        return this.$store.getters.getSendMsg
      },
      set (v) {
        this.$store.dispatch(M.CHANGE_SEND_MSG, v)
      }
    },
    ...mapGetters({
      chatMessages: 'getChatMessages',
      userInfo: 'getUserInfo'
    })
  },
  beforeCreate () {
    this.$store.dispatch(M.CHANGE_CHAT, this.$route.query.chatId)
    this.$store.dispatch(M.ADD_BUBBLE_LIST)
  },
  methods: {
    chatSend () {
      this.$store.dispatch(M.SEND_CHAT)
    },
    addFixed () {
      document.body.classList.add('fixfixed')
      document.getElementsByClassName('scroll')[0].style.height = 300 + 'px'
    },
    removeFixed () {
      document.body.classList.remove('fixfixed')
      // document.getElementsByClassName('scroll')[0].style.height = '100%'
    }
  }
}
</script>
<style>
.header{
  z-index: 1;
  position: fixed;
  height: 50px;
  top: 0;
  padding: 5px 10px;
}
.footer{
  position: fixed;
  height: 50px;
  bottom: 0;
}
.layout-page-container {
  height:100%;
}
html,
body,
.q-app,
.layout,
.layout-page,
.layout-page-container,
* {
  overflow: hidden !important;
  min-height:inherit !important;
}

.layout-page{
  position: fixed;
  height: 50%;
  width: 100%;
}
q-page-container{
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 50px 10px 50px 10px;
}
.q-message-avatar {
  display: block;
}
.fixfixed .header,
.fixfixed .footer {
  position: absolute;
}
</style>
