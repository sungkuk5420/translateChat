<template>
  <div id="chatbox">
    <v-tabs fixed icons centered>
        <v-tabs-bar dark color="white">
            <v-tabs-slider color="blue"></v-tabs-slider>
            <v-tabs-item href="#tab-1">
                <v-icon>chat</v-icon>
                채팅
            </v-tabs-item>
            <v-tabs-item href="#tab-2">
                <v-icon>settings</v-icon>
                설정
            </v-tabs-item>
        </v-tabs-bar>
        <v-tabs-items>
            <v-tabs-content :key="1" :id="'tab-1'">
                <div id="friends">
                    <div class="friend">
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/1_copy.jpg" />
                        <p>
                            <strong>public chat</strong>
                            <span>공개 채팅방입니다.</span>
                        </p>
                        <div class="status available"></div>
                    </div>
                </div>
                <div id="search">
                    <input type="text" id="searchfield" value="Search contacts..." />
                </div>
            </v-tabs-content>
            <v-tabs-content :key="2" :id="'tab-2'">
                bbb
            </v-tabs-content>
        </v-tabs-items>
    </v-tabs>
    <div id="chatview" class="p1">
        <div id="profile">

            <div id="close">
                <div class="cy"></div>
                <div class="cx"></div>
            </div>

            <p>Miro Badev</p>
            <span>miro@badev@gmail.com</span>
        </div>
        <div id="chat-messages">
            <label>Thursday 02</label>
            <msg-bubble v-for="thisMsg in messages" v-bind:send-text="thisMsg.sendText" v-bind:id="thisMsg.id"
                        v-bind:class="thisMsg.msgType== 'my' ? 'right' : '' " v-bind:time-stamp="thisMsg.timeStamp">
            </msg-bubble>
        </div>

        <div id="sendmessage">
            <input type="text" value="Send message..." class="message_input" />
            <button class="send_message"></button>
        </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'MainPage',
  data () {
    return {
      items: [{ title: 'Click Me' },
          { title: 'Click Me' },
          { title: 'Click Me' },
          { title: 'Click Me 2' }
      ],
      messages : [

      ]
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.poster {
  width: 185px;
  vertical-align: middle;
}

.movie {
  display: inline-block;
  padding: 10px;
  text-align: center;
}
</style>
