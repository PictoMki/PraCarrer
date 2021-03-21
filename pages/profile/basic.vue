<template>
  <v-container>
    <v-row class="mb-12">
      <sub-title-label
        text="基本情報"
      />
    </v-row>
    <v-row>
      <side-menu
        :menus="menus"
      />
    </v-row>
  </v-container>
</template>

<script>
import SubTitleLabel from '../../components/Atoms/label/SubTitleLabel.vue'
import SideMenu from '../../components/Modules/sidemenu/SideMenu.vue'

export default {
  components: { SubTitleLabel, SideMenu },
  data () {
    return {
      menus: [
        {
          name: '基本情報',
          pushRoute: '/profile/basic'
        },
        {
          name: 'ポートフォリオ',
          pushRoute: '/profile/portfolio'
        },
        {
          name: '学歴',
          pushRoute: '/profile/school'
        },
        {
          name: '職務経歴(転職者用)',
          pushRoute: '/profile/career'
        },
        {
          name: '自己PR等(新卒用)',
          pushRoute: '/profile/public'
        }
      ]
    }
  }
}
</script>
