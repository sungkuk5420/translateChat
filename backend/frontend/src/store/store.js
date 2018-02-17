import { M } from './types'
// import ajaxActions from './ajaxActions'
// import _ from 'lodash'
import router from 'router'

const state = {
  userInfo: {
    name: 'abc'
  },
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
  ],
  chatSetting: {
    chatId: '',
    yourBubble: {
      textColor: 'black',
      bgColor: ''
    },
    myBubble: {
      textColor: 'black',
      bgColor: ''
    }
  }

}

const getters = {
  getUserInfo () {
    return state.userInfo
  },
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
  },
  [M.CAHNGE_CHAT_LIST] ({ commit }) {
    defaultPath = '/chatList'
    translateInit(function () {
      console.log(DBData)
      let chatList = DBData
      commit(M.CAHNGE_CHAT_LIST, chatList)
    })
  },
  [M.CHANGE_CHAT] ({ commit }, chatId) {
    commit(M.CHANGE_CHAT, chatId)
  },
  [M.ADD_BUBBLE_LIST] ({ commit }) {
    defaultPath = '/chatMessages'
    getDataBase('cbTrue').then(function (chatMessagesData) {
      commit(M.ADD_BUBBLE_LIST, chatMessagesData)
    },
    function (error) {
      console.error(error)
    })
  }
}

const mutations = {
  [M.GO_OTHER_PAGE] (state, pathStr) {
    if (pathStr === 'chatRoom') {
      router.push({ path: `/${pathStr}`, query: { chatId: state.chatSetting.chatId } })
    }
    else {
      router.push({path: `/${pathStr}`})
    }
  },
  [M.CAHNGE_CHAT_LIST] (state, chatList) {
    state.chatList = chatList
  },
  [M.CHANGE_CHAT] (state, chatId) {
    state.chatSetting.chatId = chatId
  },
  [M.ADD_BUBBLE_LIST] (state, chatMessagesData) {
    console.log('aa')
    let chatMessages = chatMessagesData.filter((crruentChat) => {
      return crruentChat.id === state.chatSetting.chatId
    })

    state.chatMessages = chatMessages[0].data
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
