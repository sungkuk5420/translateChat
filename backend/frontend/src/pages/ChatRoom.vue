<template>
  <q-layout :view="'hHh Lpr lFf'">
    <!-- your content -->
    <q-layout-header v-model="header" :reveal="false" class="fixed-top">
      <q-toolbar slot="header" class=" no-padding">
        <back-btn-toolbar></back-btn-toolbar>
      </q-toolbar>
    </q-layout-header>
    <q-page-container style="padding-top: 50px;" v-chat-scroll>
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
    </q-page-container>
    <q-layout-footer v-model="footer" :reveal="false" class="fixed-bottom">
      <q-toolbar slot="footer" class="no-margin no-padding">
          <q-input class="no-margin full-width" autofocus inverted v-model="sendMsg" stack-label="send message" :after="[{icon: 'arrow_forward', content: true, handler () {chatSend()}  }]" @keydown.enter="chatSend" />
      </q-toolbar>
    </q-layout-footer>
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
      sendMsg: '',
      header: true,
      footer: true
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
  methods: {
    chatSend () {
      let sendMsg = this.sendMsg
      this.sendMsg = ''
      this.$store.dispatch(M.SEND_CHAT, sendMsg)
    },
    userHasScrolled (scroll) {
      console.log(scroll)
      // {
      //   position: 56, // pixels from top
      //   direction: 'down', // 'down' or 'up'
      //   directionChanged: false, // has direction changed since this handler was called?
      //   inflexionPosition: 56 // last scroll position where user changed scroll direction
      // }
    }
  }
}
</script>
<style>
q-layout-header{
  z-index: 1;
  position: absolute;
  height: 50px;
  top: 0;
}
q-layout-footer{
  position: absolute;
  bottom: 0;
}
.layout-page-container {
  height:100%;
}
q-page-container{
  padding-top: 50px;
  position: absolute;
  overflow: auto;
  width: 100%;
  height: 100%;
  padding-bottom: 50px;
}
.q-message-avatar {
  display: block;
}
</style>
