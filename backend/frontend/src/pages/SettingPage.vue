<template>
<q-list highlight class="setting-list">
  <q-list-header>setting</q-list-header>
  <div class="setting-wrap">
  <q-item>
    <q-item-side>
      <q-item-tile icon="volume mute" />
    </q-item-side>
    <q-item-main label="공지사항" />
  </q-item>
  <q-item>
    <q-item-side>
      <q-item-tile icon="room" />
    </q-item-side>
    <q-item-main label="실험실" />
  </q-item>
  <q-item>
    <q-item-side>
      <q-item-tile icon="new releases" />
    </q-item-side>
    <q-item-main label="버전정보" />
  </q-item>
  <q-item-separator />
  <q-item>
    <q-item-side>
      <q-item-tile icon="lock" />
    </q-item-side>
    <q-item-main label="개인/보안" />
  </q-item>
  <q-item>
    <q-item-side>
      <q-item-tile icon="add alert" />
    </q-item-side>
    <q-item-main label="알림" />
  </q-item>
  <q-item>
    <q-item-side>
      <q-item-tile icon="perm identity" />
    </q-item-side>
    <q-item-main label="친구" />
  </q-item>
  <q-item>
    <q-item-side>
      <q-item-side icon="chat_bubble" />
    </q-item-side>
    <q-item-main label="채팅" />
  </q-item>
  <q-item>
    <q-item-side>
      <q-item-tile icon="lock" />
    </q-item-side>
    <q-item-main label="화면" />
  </q-item>
  <q-item>
    <q-item-side>
      <q-item-tile icon="more horiz" />
    </q-item-side>
    <q-item-main label="기타" />
  </q-item>
  <q-item-separator />
  <q-item>
    <q-item-side>
      <q-item-tile icon="help" />
    </q-item-side>
    <q-item-main label="고객센터/도움말" />
  </q-item>
  <q-item>
    <q-item-side>
      <q-item-tile icon="lock" />
    </q-item-side>
    <q-item-main label="화면" />
  </q-item>
  <q-item>
    <q-item-side>
      <q-item-tile icon="more horiz" />
    </q-item-side>
    <q-item-main label="기타" />
  </q-item>
  <q-item-separator />
  <q-item>
    <q-item-side>
      <q-item-tile icon="help" />
    </q-item-side>
    <q-item-main label="고객센터/도움말" />
  </q-item>
  <q-item>
    <q-item-side>
      <q-item-tile icon="lock" />
    </q-item-side>
    <q-item-main label="화면" />
  </q-item>
  <q-item>
    <q-item-side>
      <q-item-tile icon="more horiz" />
    </q-item-side>
    <q-item-main label="기타" />
  </q-item>
  <q-item-separator />
  <q-item>
    <q-item-side>
      <q-item-tile icon="help" />
    </q-item-side>
    <q-item-main label="고객센터/도움말" />
  </q-item>
  <q-item>
    <q-item-side>
      <q-item-tile icon="lock" />
    </q-item-side>
    <q-item-main label="화면" />
  </q-item>
  <q-item>
    <q-item-side>
      <q-item-tile icon="more horiz" />
    </q-item-side>
    <q-item-main label="기타" />
  </q-item>
  <q-item-separator />
  <q-item>
    <q-item-side>
      <q-item-tile icon="help" />
    </q-item-side>
    <q-item-main label="고객센터/도움말" />
  </q-item>
  <q-item>
    <q-item-side>
      <q-item-tile icon="lock" />
    </q-item-side>
    <q-item-main label="화면" />
  </q-item>
  <q-item>
    <q-item-side>
      <q-item-tile icon="more horiz" />
    </q-item-side>
    <q-item-main label="기타" />
  </q-item>
  <q-item-separator />
  <q-item>
    <q-item-side>
      <q-item-tile icon="help" />
    </q-item-side>
    <q-item-main label="끝" />
  </q-item>
  </div>
</q-list>
</template>

<script>

import {
  QList,
  QListHeader,
  QItemSeparator,
  QItem,
  QItemSide,
  QItemMain,
  QItemTile
} from 'quasar'
export default {
  components: {
    QList,
    QListHeader,
    QItemSeparator,
    QItem,
    QItemSide,
    QItemMain,
    QItemTile
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss" scope>
.setting-list{
  height: calc(100% - 50px);
  padding: 40px 0;
  position: relative;
  .setting-wrap{
    height: 100%;
    position: relative;
    overflow-y: auto;
  }
}
q-item{
  margin-bottom: 10px;
}
</style>
