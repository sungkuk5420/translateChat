<template>
<q-layout view='hHr LpR lFf' class="profile_wrap">
  <!-- Header -->
  <back-btn-toolbar :title="'프로필 설정'"></back-btn-toolbar>
  <!-- sub-routes get injected here: -->
  <div class='overflow-hidde' id='chat-profile-page-container'>
    <div class="container3">
    </div>
    <!-- <q-input stack-label="닉네임 입력" value="testText"/> -->
    <q-input float-label="닉네임 입력" v-model="text"/>
  </div>
  <div class="layer"></div>
</q-layout>
</template>

<script>
import backBtnToolbar from '../components/BackBtnToolbar'

import {
  QToolbar,
  QBtn,
  QIcon,
  QLayout,
  QFixedPosition,
  QInput
} from 'quasar'

export default {
  components: {
    QToolbar,
    QBtn,
    QIcon,
    QLayout,
    QFixedPosition,
    QInput,
    backBtnToolbar
  },
  data () {
    return {
      ig: '',
      text: ''
    }
  },
  beforeCreate () {
  },
  mounted () {
    var template3 = `<div class='item' onclick='select()'><div class='info'><img src='/statics/avator_{no}.jpg'><i class='material-icons edit'>edit</i><p class='title'>title</p></div></div>`

    this.ig3 = this.createGrid('.container3', template3)
    var thisObj = this
    this.ig3.on({
      'change': function (e) {
        var pos = e.scrollPos
        thisObj.refresh(pos)
      },
      'layoutComplete': function (e) {
        var pos = e.scrollPos
        thisObj.refresh(pos)
      }
    })
  },
  methods: {
    createGrid (container, itemTemplate) {
      function getItem (template, options) {
        return template.replace(/\{([^}]*)\}/g, function () {
          var replaceTarget = arguments[1]
          return options[replaceTarget]
        })
      }
      var thisObj = this
      function getItems (length) {
        var arr = []
        for (var i = 0; i < 5; ++i) {
          arr.push(getItem(itemTemplate, {
            no: i % 60 + 1,
            title: 'egjs post' + (i + 1),
            link: thisObj.link
          }))
        }
        return arr
      }
      var num = 21
      var ig = new eg.InfiniteGrid(container, {
        horizontal: true,
        isOverflowScroll: true
      })
      ig.setLayout(eg.InfiniteGrid.GridLayout, {
        margin: 20,
        itemSize: 100,
        frame: [
          [1, 1, 1, 1, 1]
        ]
      })
      ig.on('append', function (e) {
        var groupKey = (e.groupKey || 0) + 1
        ig.append(getItems(num), groupKey)
      })

      ig.append(getItems(num * 2), 0)

      return ig
    },
    refresh (pos) {
      var size = this.ig3._renderer._size.view
      var csize = Math.pow(size / 2, 2)
      var centerPos = pos + size / 2
      this.ig3.getItems().forEach(function (item) {
        if (pos > item.rect.left + item.size.width || pos + size < item.rect.left) {
          return
        }
        var center = item.rect.left + item.size.width / 2

        var scale = Math.max((csize - Math.pow(center - centerPos, 2)) / csize, 0)

        if (!item.el.__INFO__) {
          item.el.__INFO__ = item.el.querySelector('.info')
        }
        item.el.__INFO__.style.transform = 'scale(' + scale + ')'
      })
    }
  }
}
</script>
<style lang="scss">

#chat-profile-page-container{
  padding: 10px;
  top: 30%;
}

.edit {
  position: absolute;
  right: 8px;
  bottom: 23px;
  z-index: 10;
  font-size: 20px;
  background: white;
  border-radius: 50%;
  color: #ccc;
}
.q-toolbar{
  background: transparent;
}
.q-toolbar,
#chat-profile-page-container{
  position: absolute;
  width: 100%;
  z-index: 1;
  color: white;
}
.q-if-label{
  position: absolute;
  z-index: 1;
  color: white;
}
.q-input-target{
  color: white;
}
.q-input-target:hover,
.q-input-target:focus{
  color: white;
}
body {
	padding: 0;
	margin: 0;
	background: #EDEDF0;
	font-size: 13px;
}
.profile_wrap {
  position: absolute;
  width: 100%;
  height: 100%;
}
.q-if{
  color: white !important;
}
.q-input-target{
  padding-left: 10px;
}
.page {
	position: absolute;
	left: 50px;
	right: 50px;
	top: 10px;
	overflow: hidden;
}
.page h1 {
	font-size: 40px;
}

.container3 {
	position: relative;
	height: 140px;
	max-width: 640px;
	margin: 0px auto;
  .item {
    width: 90px;
    height: 100px;
    top: 0;
    bottom: 0;
    margin: auto;
    text-align: center;

    .info{
      img {
        display: block;
        width: 90px;
        height: 90px;
        margin: auto;
        border-radius: 50%;
      }
      .title {
        font-weight: bold;
        font-size: 20px;
      }
    }
  }
}
.layer{
  background: black;
  opacity: 0.8;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
}
</style>
