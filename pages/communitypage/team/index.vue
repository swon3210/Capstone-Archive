<template>
  <div class="team">
    <v-tabs left class="mx-3">
      <v-tab class="ml-5">
        <v-icon>mdi-face</v-icon>
        프로젝트 소개
      </v-tab>
      <v-tab class="ml-5">
        <v-icon>mdi-face</v-icon>
        팀원 소개
      </v-tab>
      
    </v-tabs>

    <v-container
      fill-height
      fluid
      grid-list-xl>
      
      <v-layout
        justify-center
        wrap
        v-show="false"
      >
        <v-card class="v-card-profile pa-5">
          <v-flex
            xs12
          >
            
              <v-avatar
                class="mx-auto d-block"
                size="150"
              >
                <img
                  src="https://demos.creative-tim.com/vue-material-dashboard/img/marc.aba54d65.jpg"
                >
              </v-avatar>
              <v-card-text class="text-xs-center">
                <h6 class="category text-gray font-weight-thin mb-3">팀장 / 이름</h6>
                <h4 class="card-title font-weight-light">Alec Thompson</h4>
                <p class="card-description font-weight-light">팀 설명 Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...</p>
                <v-btn
                  color="success"
                  round
                  class="font-weight-light"
                >참여신청</v-btn>
              </v-card-text>
            
          </v-flex>
          
          <v-flex>
            <v-layout row wrap>
              <v-flex xs12 sm6 md4 lg3 v-for="member in team" :key="member.name">
                <v-card class="text-xs-center ma-3">
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
          </v-flex>
        </v-card>
      </v-layout>
      
      <v-layout wrap>
        <v-flex xs12>
          <v-card class="pa-5">
            <h3 class="display-3 text-xs-center">Welcome to the site</h3>

            <p class="subheading text-xs-center">Lorem ipsum dolor sit amet, pri veniam forensibus id. Vis maluisset molestiae id, ad semper lobortis cum. At impetus detraxit incorrupte usu, repudiare assueverit ex eum, ne nam essent vocent admodum.</p>

            <v-divider class="my-3 text-xs-center"></v-divider>

            <div class="title mb-3 text-xs-center">Check out our newest features!</div>
            
          </v-card>
        </v-flex>
        <v-flex xs12>
          <v-stepper v-model="e6" vertical>
            <v-stepper-step :complete="e6 > 1" step="1">
              Select an app
              <small>Summarize if needed</small>
            </v-stepper-step>

            <v-stepper-content step="1">
              <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
              <v-btn color="primary" @click="e6 = 2">Continue</v-btn>
              <v-btn flat>Cancel</v-btn>
            </v-stepper-content>

            <v-stepper-step :complete="e6 > 2" step="2">Configure analytics for this app</v-stepper-step>

            <v-stepper-content step="2">
              <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
              <v-btn color="primary" @click="e6 = 3">Continue</v-btn>
              <v-btn flat>Cancel</v-btn>
            </v-stepper-content>

            <v-stepper-step :complete="e6 > 3" step="3">Select an ad format and name ad unit</v-stepper-step>

            <v-stepper-content step="3">
              <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
              <v-btn color="primary" @click="e6 = 4">Continue</v-btn>
              <v-btn flat>Cancel</v-btn>
            </v-stepper-content>

            <v-stepper-step step="4">View setup instructions</v-stepper-step>
            <v-stepper-content step="4">
              <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
              <v-btn color="primary" @click="e6 = 1">Continue</v-btn>
              <v-btn flat>Cancel</v-btn>
            </v-stepper-content>
          </v-stepper>
        </v-flex>
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

export default {
  layout: 'community',
  data() {
    return {
      team: [
        { name: 'The Net Ninja', role: 'Web developer', avatar: '/avatar.jpg' },
        { name: 'Ryu', role: 'Graphic designer', avatar: '/avatar.jpg' },
        { name: 'Chun Li', role: 'Web developer', avatar: '/avatar.jpg' },
        { name: 'Gouken', role: 'Social media maverick', avatar: '/avatar.jpg' },
        { name: 'Yoshi', role: 'Sales guru', avatar: '/avatar.jpg' }
      ],
      // dummy data
      e6: 1
    }
  }
}
</script>

<style scoped>

</style>

