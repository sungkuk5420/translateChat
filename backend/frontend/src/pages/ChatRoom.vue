<template>
  <q-layout style="height: 100%;">
    <!-- your content -->
    <q-toolbar slot="header" class="fixed-top no-padding">
      <back-btn-toolbar></back-btn-toolbar>
    </q-toolbar>
    <q-scroll-area class="layout-padding" style="margin-top: 50px; padding-top:0px; padding-bottom: 100px; height: 100%;" v-chat-scroll >
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
    </q-scroll-area>
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
