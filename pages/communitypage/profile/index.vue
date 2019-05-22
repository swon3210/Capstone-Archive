<template>
  <v-container grid-list-xs>
    <v-layout
      flex-child
      wrap
    >
      <v-flex
        xs12
        md12
        d-flex
      >
        <v-sheet
          class="d-flex"
          color="white lighten-3"
          height="200"
          style="background-size: cover; background: url('https://cdn.vuetifyjs.com/images/parallax/material.jpg')"
        >
          
          
        </v-sheet>
      </v-flex>

      <v-flex
        xs12
        md3
        d-flex
      >
        <v-sheet
          class="d-flex"
          color="white lighten-3"
          elevation="1"
        >
          
          <v-navigation-drawer
            width=""
            stateless
          >
            <v-img :aspect-ratio="16/9" :src="userInfo.photoURL">
              <v-layout pa-2 column fill-height class="lightbox white--text">
                <v-spacer></v-spacer>
                <v-flex shrink>
                  <div class="subheading">Jonathan Lee</div>
                  <div class="body-1">heyfromjonathan@gmail.com</div>
                </v-flex>
              </v-layout>
            </v-img>

            <v-list>
              <template v-for="(item, i) in items">
                <v-divider v-if="item.divider" :key="i"></v-divider>
                <v-list-tile v-else :key="item.title" @click>
                  <v-list-tile-action>
                    <v-icon>{{ item.icon }}</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile>
              </template>
            </v-list>
          </v-navigation-drawer>
        </v-sheet>
      </v-flex>

      <v-flex
        xs12
        md6
        d-flex
      >
        <v-layout wrap class="">
          <v-flex xs12>
            <v-sheet
              class="d-flex"
              color="white"
              elevation="1"
            >
              
              <v-layout column>
                <v-flex xs12>
                  <v-tabs 
                    grow
                    centered
                    icons-and-text
                    
                  >
                    <v-tab
                    
                      v-for="item in tabNames"
                      :key="item.name"
                    >
                
                        {{ item.name }}
                        <v-icon>phone</v-icon>
                    </v-tab>
                  </v-tabs>
                </v-flex>
                <v-flex xs12>
                  
                </v-flex>
              </v-layout>
              
              
            </v-sheet>
          </v-flex>
          
          <v-flex xs12>

            <v-sheet
              class="d-flex"
              color="grey lighten-3"
              elevation="1"
            >
              <v-list
                    subheader
                    two-line
                  >
                    <v-subheader>Hangout notifications</v-subheader>

                    <v-list-tile @click="">
                      <v-sheet
                        color="transparent"
                        elevation=""
                      >
                        <h2>hey</h2>
                      </v-sheet>
                    </v-list-tile>

                    <v-list-tile @click="">
                      <v-list-tile-action>
                        <v-checkbox v-model="sound"></v-checkbox>
                      </v-list-tile-action>

                      <v-list-tile-content @click="sound = !sound">
                        <v-list-tile-title>Sound</v-list-tile-title>
                        <v-list-tile-sub-title>Hangouts message</v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>

                    <v-list-tile @click="">
                      <v-list-tile-action>
                        <v-checkbox v-model="video"></v-checkbox>
                      </v-list-tile-action>

                      <v-list-tile-content @click="video = !video">
                        <v-list-tile-title>Video sounds</v-list-tile-title>
                        <v-list-tile-sub-title>Hangouts video call</v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>

                    <v-list-tile @click="">
                      <v-list-tile-action>
                        <v-checkbox v-model="invites"></v-checkbox>
                      </v-list-tile-action>

                      <v-list-tile-content @click="invites = !invites">
                        <v-list-tile-title>Invites</v-list-tile-title>
                        <v-list-tile-sub-title>Notify when receiving invites</v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                  </v-list>
            </v-sheet>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex
        xs12
        md3
      >
        <v-sheet
          class="d-flex"
          color="grey lighten-3"
          elevation="1"
        >
          
          <v-list subheader>
            <v-subheader>Recent chat</v-subheader>
            <v-list-tile
              v-for="item in items"
              :key="item.title"
              avatar
              @click=""
            >
              <v-list-tile-avatar>
                <img :src="item.avatar">
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title v-html="item.title"></v-list-tile-title>
              </v-list-tile-content>

              <v-list-tile-action>
                <v-icon :color="item.active ? 'teal' : 'grey'">chat_bubble</v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </v-list>

        </v-sheet>
      </v-flex>
      
    </v-layout>
  </v-container>



  <!-- <div>
    <ProfileHeader 
      :name = userInfo.displayName
      :email = userInfo.email
      :photoURL = userInfo.photoURL
    />
    <v-btn flat block @click="request_admin_claim">Administrator 권한 요청</v-btn> 
  </div> -->
</template>

<script>
import { db, functions } from '~/fb';
import ProfileHeader from '~/components/community/ProfileHeader';
import { mapGetters } from 'vuex';

export default {
  layout: 'community',
  data () {
    return {
      userName: '',
      userEmail: '',
      // dummy data
      notifications: false,
      sound: false,
      video: false,
      invites: false,
      tabNames: [
        { name: '최근 활동' },
        { name: '할당된 업무' },
        { name: '다음 이벤트' }
      ],
      items: [
          { active: true, title: 'Jason Oner', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' },
          { active: true, title: 'Ranee Carlson', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg' },
          { title: 'Cindy Baker', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' },
          { title: 'Ali Connors', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' }
        ],
        items2: [
          { title: 'Travis Howard', avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg' }
        ]

    }
  },
  computed: {
    ...mapGetters(['userInfo'])
  },
  components: {
    ProfileHeader
  },
  beforeMount() {
    
  },
  methods: {
    request_admin_claim () {
      const add_admin_role = functions.httpsCallable('addAdminRole');
      add_admin_role({ email: this.userEmail}).then(result => {
        console.log(result);
      });
    }
  }
}
</script>

<style scoped>
.profile-photo {
  margin-top: -200px;
}
</style>
