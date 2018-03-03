<template>
  <q-layout style="height: 100%;" >
    <!-- your content -->
    <q-toolbar slot="header" class="no-padding">
      <back-btn-toolbar></back-btn-toolbar>
    </q-toolbar>
    <div v-chat-scroll>
      <q-scroll-area class="layout-padding" style="margin-top: 00px; padding-top:0px; padding-bottom:0px; "  >
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
    </div>

    <q-toolbar slot="footer" class=" no-margin no-padding">
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
/* relevant styles */
.layout {
    position: absolute;
    width: 100%;

    display: -moz-flex;
    -moz-flex-direction: column;
    -moz-flex-wrap: nowrap;

    display: -webkit-flex;
    -webkit-flex-direction: column;
    -webkit-flex-wrap: nowrap;

    display: -ms-flex;
    -ms-flex-direction: column;
    -ms-flex-wrap: nowrap;

    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
}

header {
    -moz-flex-shrink: 0;
    -webkit-flex-shrink: 0;
    -ms-flex-shrink: 0;
    flex-shrink: 0;
}
.layout-page-container{
    -moz-flex-grow: 1;
    -webkit-flex-grow: 1;
    -ms-flex-grow: 1;
    flex-grow: 1;
    overflow: auto;
}
footer{
    -moz-flex-shrink: 0;
    -webkit-flex-shrink: 0;
    -ms-flex-shrink: 0;
    flex-shrink: 0;
}

.q-message-avatar {
  display: block;
}
</style>
