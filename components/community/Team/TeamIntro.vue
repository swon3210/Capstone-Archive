<template>
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
        <v-flex xs12 sm6 md4 lg3 v-for="member in members" :key="member.name">
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
</template>

<script>
export default {
  props: {
    members: {
      default: [],
      type: Array
    },
    leader: {
      default: '미 배정됨',
      type: String
    }
  }
}
</script>

<style scoped>

</style>
