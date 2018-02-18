<template>
  <div class="layout-padding" style="max-width: 500px; padding-top:60px;">
    <q-layout>
      <!-- your content -->
      <q-fixed-position corner="top" :offset="[0, 0]">
        <back-btn-toolbar></back-btn-toolbar>
      </q-fixed-position>
      <div >
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
    </q-layout>
  </div>
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
  QFixedPosition
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
    qChatMessage
  },
  data () {
    return {}
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
