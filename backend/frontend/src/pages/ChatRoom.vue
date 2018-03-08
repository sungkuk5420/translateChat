<template>
  <q-layout :view="'hHh Lpr lFf'">
    <!-- your content -->
    <back-btn-toolbar class="header"></back-btn-toolbar>
    <q-page-container class="scroll overflow-hidde"  style="padding-top: 50px;" v-chat-scroll @touch="this.$refs.inputText.blur()">
      <q-chat-message
        v-for="msg in chatMessages"
        :key="msg.key"
        :label="msg.label"
        :sent="(msg.name === userInfo.name) ? true : false"
        :text-color="'black'"
        :bg-color="''"
        :name="msg.name"
        :avatar="msg.userImage === undefined ? '' : ((msg.name === userInfo.name) ? 'http://quasar-framework.org/quasar-play/apple/statics/boy-avatar.png' : 'http://quasar-framework.org/quasar-play/android/statics/linux-avatar.png')"
        :text="msg.text"
        :stamp="msg.stamp"
      />
    </q-page-container>
    <q-input class="no-margin full-width footer" ref="inputText" autofocus inverted v-model="sendMsg" stack-label="send message" :after="[{icon: 'arrow_forward', content: true, handler () {chatSend()}  }]" @keydown.enter="chatSend" @focus="addFixed()" @blur=" removeFixed()" />

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
    },
    removeFixed () {
      document.body.classList.remove('fixfixed')
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
  bottom: 0;
}
.layout-page-container {
  height:100%;
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
