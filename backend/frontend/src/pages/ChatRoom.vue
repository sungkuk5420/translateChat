<template>
  <div class="layout-padding" style="max-width: 500px;">
    <q-layout>
      <!-- your content -->
      <q-fixed-position corner="top" :offset="[0, 0]">
        <back-btn-toolbar></back-btn-toolbar>
      </q-fixed-position>
      <q-chat-message
        v-for="msg in chatMessages"
        :key="msg.id"
        :label="msg.label"
        :sent="msg.sent"
        :text-color="msg.textColor"
        :bg-color="msg.bgColor"
        :name="msg.name"
        :avatar="msg.avatar"
        :text="msg.text"
        :stamp="msg.stamp"
      />

      <q-chat-message
        name="Vladimir"
        avatar="http://quasar-framework.org/quasar-play/android/img/boy-avatar.5ff53af.png"
      >
        <q-spinner-dots size="2rem" />
      </q-chat-message>
    </q-layout>
  </div>
</template>

<script>
// import { M } from '../store/types'
import { mapGetters } from 'vuex'
import backBtnToolbar from '../components/BackBtnToolbar'
import {
  QChatMessage,
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
    QChatMessage,
    QSpinnerDots,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QLayout,
    QFixedPosition,
    backBtnToolbar
  },
  data () {
    return {}
  },
  computed: {
    ...mapGetters({
      chatMessages: 'getChatMessages'
    })
  }
}
</script>
