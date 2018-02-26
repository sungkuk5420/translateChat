<template>
  <q-layout style="padding-top: 50px;">
    <!-- your content -->
    <q-toolbar slot="header" class="fixed-top no-padding">
      <back-btn-toolbar></back-btn-toolbar>
    </q-toolbar>
    <q-infinite-scroll :handler="refresher" class="layout-padding" style="padding-top: 0px; padding-bottom: 60px;" ref="list">
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

      <q-chat-message
        name="Vladimir"
        avatar="http://quasar-framework.org/quasar-play/apple/statics/boy-avatar.png"
      >
        <q-spinner-dots size="2rem" />
      </q-chat-message>
    </q-infinite-scroll>
    <q-toolbar slot="footer" class="fixed-bottom no-margin no-padding">
        <q-input class="no-margin full-width" inverted v-model="text" stack-label="send message" :after="[{icon: 'arrow_forward', content: true, handler () {chatSend()}  }]"/>
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
    return {loading: true, text: ''}
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
    window.scrollTo(0, document.body.scrollHeight)
  },
  methods: {
    chatSend () {
      this.$store.dispatch(M.SEND_CHAT)
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
.q-message-avatar {
  display: block;
}
</style>
