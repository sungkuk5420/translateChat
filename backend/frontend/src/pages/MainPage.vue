<template>
  <!-- if you want automatic padding use "layout-padding" class -->
    <q-layout
    ref="layout"
    view="lHh Lpr fff"
    :left-class="{'bg-grey-2': true}"
   class="main-container">
    <q-tabs>
      <!-- Tabs - notice slot="title" -->
      <q-tab default count="2" slot="title" name="tab-1" icon="message" />
      <q-tab slot="title" name="tab-2" icon="settings" />
      <!-- Targets -->
      <q-tab-pane name="tab-1" class="no-padding no-border">
        <chat-list-page></chat-list-page>
      </q-tab-pane>
      <q-tab-pane name="tab-2">
        <setting-page></setting-page>
      </q-tab-pane>
    </q-tabs>
  </q-layout>
</template>

<script>
import chatListPage from './ChatListPage'
import settingPage from './SettingPage'

import {
  QLayout,
  QToolbar,
  QToolbarTitle,
  QBtn,
  QIcon,
  QList,
  QListHeader,
  QItem,
  QItemSide,
  QItemMain,
  QTabs,
  QTab,
  QOptionGroup,
  QTabPane
} from 'quasar'

export default {
  components: {
    QLayout,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QList,
    QListHeader,
    QItem,
    QItemSide,
    QItemMain,
    QTabs,
    QTab,
    QOptionGroup,
    QTabPane,
    chatListPage,
    settingPage
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss" >
html{
  height: 100%;
  overflow: hidden;
}
body{
  height: 100%;
}
.main-container{
  height: 100%;
}
.main-container .layout-page-container{
  height: 100%;
}
.main-container .layout-page{
  height: 100%;
}
.main-container .q-tabs{
  height: 100%;
}
.main-container .q-tabs-panes{
  height: 100%;
}
.main-container .q-tab-pane{
  // margin:-15px;
  height:100%;
  border:0;
}
.q-tab .q-chip{
  top: 5px;
  margin-left: 20px !important;
  right: initial;
}
</style>
<style lang="scss" scoped>

</style>
