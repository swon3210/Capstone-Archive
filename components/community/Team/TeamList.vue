<template>

<v-container>
  <v-layout wrap row>
    <v-flex xs4>
      <v-navigation-drawer
        width=""
        stateless
      >
            
        <v-list>
          <template v-for="(item, i) in items">
            <v-divider v-if="item.divider" :key="i"></v-divider>
            <v-list-tile v-else :key="item.title">
              <v-list-tile-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile>
          </template>
        </v-list>
      </v-navigation-drawer>
    </v-flex>
    <v-flex xs8 class="scroll-y" style="max-height: 600px;">
      <v-card
        class="hide-overflow"
        
      >
        <v-layout>
          <v-flex xs6 d-flex>
            <v-img
              src="https://cdn.vuetifyjs.com/images/ratings/fortnite1.png"
            ></v-img>
          </v-flex>
          <v-flex xs6>
            <v-container
              grid-list-md
              pa-0
              pl-2
              style="margin: -4px 0"
            >
              <v-layout wrap>
                <v-flex xs7 d-flex>
                  <v-img
                    src="https://cdn.vuetifyjs.com/images/ratings/fortnite2.png"
                  ></v-img>
                </v-flex>
                <v-flex xs5 d-flex>
                  <v-img
                    src="https://cdn.vuetifyjs.com/images/ratings/fortnite3.png"
                  ></v-img>
                </v-flex>
                <v-flex xs5 d-flex>
                  <v-img
                    src="https://cdn.vuetifyjs.com/images/ratings/fortnite4.png"
                  ></v-img>
                </v-flex>
                <v-flex xs7 d-flex>
                  <v-img
                    src="https://cdn.vuetifyjs.com/images/ratings/fortnite5.png"
                  ></v-img>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
        <v-card-title class="align-start">
          <div>
            <span class="headline">
              FORTNITE
            </span>
            <div class="grey--text font-weight-light">Video game</div>
          </div>
          <v-spacer></v-spacer>
          <v-icon large light @click="$emit('switch_team_page', 'teamProject')">crop_original</v-icon>  
        </v-card-title>
        <v-divider></v-divider>
        <v-card-actions>
          <span class="pl-2 grey--text text--darken-2 font-weight-light caption">16,544 reviews</span>
          <v-spacer></v-spacer>
          <v-rating
            v-model="rating"
            length="10"
            readonly
          >
            
          </v-rating>
        </v-card-actions>
        <div class="pa-3 pt-0 caption">
          <em>Portions of the materials used are trademarks and/or copyrighted works of Epic Games, Inc. All rights reserved by Epic. This material is not official and is not endorsed by Epic.</em>
        </div>
      </v-card>
      <v-card color="purple" class="white--text mt-5">
        <v-layout row>
          <v-flex xs7>
            <v-card-title primary-title>
              <div>
                <div class="headline">Halycon Days</div>
                <div>Ellie Goulding</div>
                <div>(2013)</div>
              </div>
            </v-card-title>
          </v-flex>
          <v-flex xs5>
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"
              height="125px"
              contain
            ></v-img>
          </v-flex>
        </v-layout>
        <v-divider light></v-divider>
        <v-card-actions class="pa-3">
          Rate this album
          <v-spacer></v-spacer>
          <v-icon>star_border</v-icon>
          <v-icon>star_border</v-icon>
          <v-icon>star_border</v-icon>
          <v-icon>star_border</v-icon>
          <v-icon>star_border</v-icon>
        </v-card-actions>
      </v-card>
    </v-flex>
  
    <v-container grid-list-xl>
    <v-layout
      flex-child
      wrap
    >
      <v-flex
        xs12
        md4
        d-flex
      >
        <v-sheet
          class="d-flex"
          color="grey lighten-3"
          height="424"
        >
          <sheet-footer>
            #1: (3r x 2c)
          </sheet-footer>
        </v-sheet>
      </v-flex>

      <v-flex
        xs12
        md4
        d-flex
      >
        <v-layout wrap>
          <v-flex xs6>
            <v-sheet
              class="d-flex"
              color="green lighten-3"
              height="150"
            >
              <sheet-footer>
                #2: (1r x 1c)
              </sheet-footer>
            </v-sheet>
          </v-flex>
          <v-flex xs6>
            <v-sheet
              class="d-flex"
              color="yellow lighten-3"
              height="150"
            >
              <sheet-footer>
                #3: (1r x 1c)
              </sheet-footer>
            </v-sheet>
          </v-flex>
          <v-flex xs12>

            <v-sheet
              class="d-flex"
              color="red lighten-3"
              height="250"
            >
              <sheet-footer>
                #5: (2r x 2c)
              </sheet-footer>
            </v-sheet>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex
        xs6
        md2
      >
        <v-sheet
          class="d-flex"
          color="teal lighten-3"
          height="300"
        >
          <sheet-footer>
            #4: (2r x 1c)
          </sheet-footer>
        </v-sheet>
      </v-flex>
      <v-flex
        xs6
        md2
        d-flex
      >
        <v-sheet
          class="d-flex mt-auto"
          color="purple lighten-3"
          height="300"
        >
          <sheet-footer>
            #6: (2r x 1c)
          </sheet-footer>
        </v-sheet>
      </v-flex>
    </v-layout>
  </v-container>
  </v-layout>
</v-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data () {
    // dummy data
    return {
      copied: false,
      dialog: false,
      rating: 10,
      items: [
        { title: '팀 추가하기', icon: 'dashboard' },
      ],
      items2: [
          { active: true, title: 'Jason Oner', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' },
          { active: true, title: 'Ranee Carlson', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg' },
          { title: 'Cindy Baker', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' },
          { title: 'Ali Connors', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' }
        ],
        items3: [
          { title: 'Travis Howard', avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg' }
        ],
      right: null
    }
  },
  components: {
    
  },
  computed: {
    ...mapGetters(['userInfo'])
  },
  methods: {
    copy () {
      const markup = this.$refs.link
      markup.focus()
      document.execCommand('selectAll', false, null)
      this.copied = document.execCommand('copy')
    }
  }
}
</script>

<style scoped>

</style>
