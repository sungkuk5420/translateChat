<template>
  <q-layout>
    <!-- your content -->
    <q-toolbar slot="header" class="fixed-top no-padding">
      <back-btn-toolbar></back-btn-toolbar>
    </q-toolbar>
    <div class="layout-padding" style="padding-top: 60px; padding-bottom: 60px;">
      <q-chat-message
        v-for="msg in chatMessages"
        :key="msg.key"
        :label="msg.label"
        :sent="(msg.name === userInfo.name) ? true : false"
        :text-color="'black'"
        :bg-color="''"
        :name="msg.name"
        :avatar="(msg.name === userInfo.name) ? 'http://quasar-framework.org/quasar-play/android/img/boy-avatar.5ff53af.png' : 'http://quasar-framework.org/quasar-play/android/statics/linux-avatar.png'"
        :text="msg.text"
        :stamp="msg.stamp"
      />

      <q-chat-message
        name="Vladimir"
        avatar="http://quasar-framework.org/quasar-play/android/img/boy-avatar.5ff53af.png"
      >
        <q-spinner-dots size="2rem" />
      </q-chat-message>
    </div>
    <q-toolbar slot="footer" class="fixed-bottom no-margin no-padding">
        <q-input :loading="loading" class="no-margin full-width" inverted color="secondary" v-model="text" stack-label="send message" />
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
  QInput
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
    QInput
  },
  data () {
    return {loading: true}
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
  }
}
</script>
