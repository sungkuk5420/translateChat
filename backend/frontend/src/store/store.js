import { M } from './types'
// import ajaxActions from './ajaxActions'
// import _ from 'lodash'
import router from 'router'

const state = {

  chatList: [
  ],
  chatMessages: [
    {
      id: 1,
      label: 'Sunday, 19th'
    },
    {
      id: 2,
      name: 'Vladimir',
      text: ['How are you?'],
      sent: false,
      textColor: 'black',
      bgColor: '',
      avatar: 'http://quasar-framework.org/quasar-play/android/img/boy-avatar.5ff53af.png',
      stamp: 'Yesterday 13:34'
    },
    {
      id: 3,
      name: 'Jane',
      text: ['I\'m good, thank you!', 'And you?'],
      sent: true,
      textColor: 'white',
      bgColor: 'black',
      avatar: 'http://quasar-framework.org/quasar-play/android/statics/linux-avatar.png',
      stamp: 'Yesterday at 13:50'
    },
    {
      id: 4,
      name: 'Jane',
      text: ['And you?'],
      sent: true,
      avatar: 'http://quasar-framework.org/quasar-play/android/statics/linux-avatar.png',
      stamp: 'Yesterday at 13:51'
    },
    {
      id: 5,
      label: 'Sunday, 19th'
    },
    {
      id: 6,
      name: 'Vladimir',
      bgColor: 'amber',
      textColor: 'white',
      text: ['Fine. Nice weather today, right?', 'Hmm...'],
      avatar: 'http://quasar-framework.org/quasar-play/android/img/boy-avatar.5ff53af.png',
      stamp: '13:55'
    },

    {
      id: 7,
      label: 'Sunday, 19th'
    },
    {
      id: 8,
      name: 'Vladimir',
      text: ['How are you?'],
      avatar: 'http://quasar-framework.org/quasar-play/android/img/boy-avatar.5ff53af.png',
      stamp: 'Yesterday 13:34'
    },
    {
      id: 9,
      name: 'Jane',
      text: ['I\'m good, thank you!', 'And you?'],
      sent: true,
      avatar: 'http://quasar-framework.org/quasar-play/android/statics/linux-avatar.png',
      stamp: 'Yesterday at 13:50'
    },
    {
      id: 10,
      name: 'Jane',
      text: ['And you?'],
      sent: true,
      avatar: 'http://quasar-framework.org/quasar-play/android/statics/linux-avatar.png',
      stamp: 'Yesterday at 13:51'
    },
    {
      id: 11,
      label: 'Sunday, 19th'
    },
    {
      id: 12,
      name: 'Vladimir',
      text: ['Fine. Nice weather today, right?', 'Hmm...'],
      avatar: 'http://quasar-framework.org/quasar-play/android/img/boy-avatar.5ff53af.png',
      stamp: '13:55'
    },

    {
      id: 13,
      label: 'Sunday, 19th'
    },
    {
      id: 14,
      name: 'Vladimir',
      text: ['How are you?'],
      avatar: 'http://quasar-framework.org/quasar-play/android/img/boy-avatar.5ff53af.png',
      stamp: 'Yesterday 13:34'
    },
    {
      id: 15,
      name: 'Jane',
      text: ['I\'m good, thank you!', 'And you?'],
      sent: true,
      avatar: 'http://quasar-framework.org/quasar-play/android/statics/linux-avatar.png',
      stamp: 'Yesterday at 13:50'
    },
    {
      id: 16,
      name: 'Jane',
      text: ['And you?'],
      sent: true,
      avatar: 'http://quasar-framework.org/quasar-play/android/statics/linux-avatar.png',
      stamp: 'Yesterday at 13:51'
    },
    {
      id: 17,
      label: 'Sunday, 19th'
    },
    {
      id: 18,
      name: 'Vladimir',
      text: ['Fine. Nice weather today, right?', 'Hmm...'],
      avatar: 'http://quasar-framework.org/quasar-play/android/img/boy-avatar.5ff53af.png',
      stamp: '13:55'
    },

    {
      id: 19,
      label: 'Sunday, 19th'
    },
    {
      id: 20,
      name: 'Vladimir',
      text: ['How are you?'],
      avatar: 'http://quasar-framework.org/quasar-play/android/img/boy-avatar.5ff53af.png',
      stamp: 'Yesterday 13:34'
    },
    {
      id: 21,
      name: 'Jane',
      text: ['I\'m good, thank you!', 'And you?'],
      sent: true,
      avatar: 'http://quasar-framework.org/quasar-play/android/statics/linux-avatar.png',
      stamp: 'Yesterday at 13:50'
    },
    {
      id: 22,
      name: 'Jane',
      text: ['And you?'],
      sent: true,
      avatar: 'http://quasar-framework.org/quasar-play/android/statics/linux-avatar.png',
      stamp: 'Yesterday at 13:51'
    },
    {
      id: 23,
      label: 'Sunday, 19th'
    },
    {
      id: 24,
      name: 'Vladimir',
      text: ['Fine. Nice weather today, right?', 'Hmm...'],
      avatar: 'http://quasar-framework.org/quasar-play/android/img/boy-avatar.5ff53af.png',
      stamp: '13:55'
    }
  ]

}

const getters = {
  getChatList () {
    return state.chatList
  },
  getChatMessages () {
    return state.chatMessages
  }
}

const actions = {
  [M.GO_OTHER_PAGE] ({ commit }, pathStr) {
    commit(M.GO_OTHER_PAGE, pathStr)
  [M.CAHNGE_CHAT_LIST] ({ commit }) {
    defaultPath = '/chatList'
    // let thisObj = this
    translateInit(function () {
      console.log(DBData)
      let chatList = DBData
      commit(M.CAHNGE_CHAT_LIST, chatList)
    })
  },
  }
}

const mutations = {
  [M.GO_OTHER_PAGE] (state, pathStr) {
    router.push({ path: `/${pathStr}` })
  },
  [M.CAHNGE_CHAT_LIST] (state, chatList) {
    state.chatList = chatList
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
