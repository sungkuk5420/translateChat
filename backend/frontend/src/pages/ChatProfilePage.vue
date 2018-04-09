<template>
<q-layout view='hHr LpR lFf' class="profile_wrap">
  <back-btn-toolbar :title="'프로필 설정'"></back-btn-toolbar>
  <div class='overflow-hidde' id='chat-profile-page-container'>
    <div class="container3">
    </div>
    <q-input float-label="닉네임 입력" v-model="text"/>
    <q-btn round outline small router to="/chatRoom">
      <q-icon name="favorite" />
    </q-btn>
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
    var template3 = `<div class='item {customClass}' onclick='window.profileImageClick(this, {groupKey}, {index})'><div class='info'><img src='/statics/avator_{no}.jpg'><i class='material-icons done'>done</i><p class='title'>{title}</p></div></div>`

    window.ig3 = this.createGrid('.container3', template3)
    var thisObj = this
    window.ig3.on({
      'change': function (e) {
        var pos = e.scrollPos
        thisObj.refresh(pos)
      },
      'layoutComplete': function (e) {
        var pos = e.scrollPos
        thisObj.refresh(pos)
      }
    })

    $('.container3').bind('mousewheel', function (e) {
      let delta = e.originalEvent.wheelDelta
      let scrollLeft = this.scrollLeft
      if (delta / 120 > 0) { // scrolling up
        this.scrollLeft = (scrollLeft - (scrollLeft % 110)) + 110
      }
      else { // scrolling down
        this.scrollLeft = (scrollLeft - (scrollLeft % 110)) - 110
      }
      e.preventDefault()
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
      var imageLength = 6
      function getItems (length, groupKey) {
        var arr = []
        var hideImageIndex = 1
        var groupIndex = groupKey === undefined ? 0 : groupKey
        var startIndex = groupKey === undefined ? 0 : hideImageIndex
        var imageIndex = groupIndex === 0 ? -1 : 1
        for (var i = startIndex; i < (imageLength + hideImageIndex); ++i) {
          var replaceGroupKey = ((groupIndex > 0) && ((i - (imageLength - 4)) < 0)) ? groupIndex - hideImageIndex : groupIndex
          arr.push(getItem(itemTemplate, {
            no: i % 60 + 1,
            title: 'avator' + imageIndex,
            link: thisObj.link,
            customClass: i < hideImageIndex ? 'hide' : '',
            groupKey: replaceGroupKey,
            index: ((replaceGroupKey) < groupIndex) ? (((replaceGroupKey) === 0) ? (imageLength + hideImageIndex) : imageLength) - Math.abs(i - (imageLength - 4)) : ((replaceGroupKey) > 0 ? (i - (imageLength - 4)) : (i - (imageLength - 5)))
          }))
          imageIndex++
        }
        return arr
      }
      var num = imageLength
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
        ig.append(getItems(num, groupKey), groupKey)
      })

      ig.append(getItems(num * 2), 0)

      return ig
    },
    refresh (pos) {
      var size = window.ig3._renderer._size.view
      var csize = Math.pow(size / 2, 2)
      var centerPos = pos + size / 2
      window.ig3.getItems().forEach(function (item, index) {
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

window.profileImageClick = function (thisObj, groupKey, index) {
  var $this = $(thisObj)
  var thisObjSelected = $this.hasClass('selectImage')
  $('.selectImage').removeClass('selectImage')
  if (!thisObjSelected) {
    $this.addClass('selectImage')
    window.ig3.moveTo(groupKey, index)
  }
}
</script>
<style lang="scss">
.opacity_1{
  opacity: 1;
}
.opacity_06 {
  opacity: 0.6;
}
.q-btn {
  position: absolute;
  right: 10px;
  bottom: 13px;
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
  #chat-profile-page-container{
    padding: 10px;
    top: 30%;
    .material-icons.done {
      position: absolute;
      right: 8px;
      bottom: 23px;
      z-index: 10;
      font-size: 20px;
      background: white;
      border-radius: 50%;
      color: #ccc;
      border:1px solid white ;
    }
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
    width: 300px;
    margin: 0px auto;
    .item {
      width: 90px;
      height: 100px;
      top: 0;
      bottom: 0;
      margin: auto;
      text-align: center;
      cursor: pointer;
      &.hide{
        display: none;
      }

      .info{
        img {
          display: block;
          width: 90px;
          height: 90px;
          margin: auto;
          border-radius: 50%;
          border: solid 5px white;
        }
        .title {
          font-weight: bold;
          font-size: 20px;
        }
      }

      &.selectImage{
        img {
          border: solid 5px #119a4a;
        }
        .material-icons.done{
          background: white !important;
          color: #119a4a !important;
          border:1px solid #119a4a !important;
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
}

</style>
