<template>
  <div class="team">
    <v-tabs 
      left
      class="mx-3"
      grow
    >
      <v-tab>
        <v-icon>mdi-face</v-icon>
        프로젝트 소개
      </v-tab>
      <v-tab @click="switch_team_page('teamList')">
        <v-icon>mdi-face</v-icon>
        팀 소개
      </v-tab>

      <v-tab @click="switch_team_page('teamView')">
        <v-icon>mdi-face</v-icon>
        마이 팀
      </v-tab>
      
    </v-tabs>

    <v-container
      fill-height
      fluid
      grid-list-xl>
      
      <v-layout
        justify-center
        wrap
        
      >
        <!-- <TeamIntro
          :members = "members"
        /> -->
        <TeamList 
          v-if="view.teamList"
          @switch_team_page = "switch_team_page"
        />
        <TeamProject 
          v-if="view.teamProject"
        />
        <TeamView 
          v-if="view.teamView"
        />
      </v-layout>
      
      
    </v-container>
    <!-- <v-container>

      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="member in team" :key="member.name">
          <v-card flat class="text-xs-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="100" class="grey lighten-2">
                <img :src="member.avatar" />
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">{{member.name}}</div>
              <div class="grey--text">{{member.role}}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn flat color="grey">
                <v-icon small left>message</v-icon>
                <span>Message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
      
    </v-container> -->
  </div>
</template>

<script>
import TeamIntro from '~/components/community/Team/TeamIntro'
import TeamProject from '~/components/community/Team/TeamProject'
import TeamList from '~/components/community/Team/TeamList'
import TeamView from '~/components/community/Team/TeamView'


export default {
  layout: 'community',
  components: {
    TeamIntro,
    TeamList,
    TeamProject,
    TeamView
  },
  data() {
    return {
      members: [
        { name: 'The Net Ninja', role: 'Web developer', avatar: '/avatar.jpg' },
        { name: 'Ryu', role: 'Graphic designer', avatar: '/avatar.jpg' },
        { name: 'Chun Li', role: 'Web developer', avatar: '/avatar.jpg' },
        { name: 'Gouken', role: 'Social media maverick', avatar: '/avatar.jpg' },
        { name: 'Yoshi', role: 'Sales guru', avatar: '/avatar.jpg' }
      ],
      view: {
        teamIntro: false,
        teamProject: false,
        teamList: true,
        teamView: false
      },
      // dummy data
      
    }
  },
  methods: {
    switch_team_page (pageView) {
      console.log('pageView', pageView)
      console.log('view', this.view)
      for (let i in this.view) {
        if (i === pageView) {
          this.view[i] = true
        } else {
          this.view[i] = false
        }
      }


    }
  }
}
</script>

<style scoped>

</style>

