<template>
  <!-- if you want automatic padding use "layout-padding" class -->
    <q-layout
    ref="layout"
    view="lHh Lpr fff"
    :left-class="{'bg-grey-2': true}"
    class="full-height"
  >
    <q-tabs>
      <!-- Tabs - notice slot="title" -->
      <q-tab default count="2" slot="title" name="tab-1" icon="message" />
      <q-tab slot="title" name="tab-2" icon="settings" />
      <!-- Targets -->
      <q-tab-pane name="tab-1" class="no-padding no-border">
        <chat-list-page></chat-list-page>
      </q-tab-pane>
      <q-tab-pane name="tab-2">
        Tab Two
      </q-tab-pane>
    </q-tabs>
  </q-layout>
</template>

<script>
import chatListPage from './ChatListPage'

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
    chatListPage
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss" >
  .q-tab .q-chip{
    top: 5px;
    margin-left: 20px !important;
    right: initial;
  }
</style>

<style lang="scss" scoped>

</style>
