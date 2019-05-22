<template>
  <v-flex xs12>
    <v-card
      flat
      class="pa-2"
    >
      <v-layout column wrap class="mt-5">
        <v-flex>
          <h3 class="display-1"></h3>
          <v-text-field
            class="mx-5"
            label="제목"
            single-line
            prepend-icon="title"
          ></v-text-field>
          <v-select
            v-model="value"
            class="mx-5"
            :items="items"
            prepend-icon="category"
            attach
            chips
            label="카테고리"
            multiple
          ></v-select>
          <v-select
            v-model="e6"
            :items="states"
            class="mx-5"
            prepend-icon="work"
            :menu-props="{ maxHeight: '400' }"
            label="업무 할당"
            multiple
            hint="업무를 맡을 사람을 지정해주십시오"
            persistent-hint
          ></v-select>
          <v-textarea
            name="input-7-1"
            prepend-icon="text_fields"
            class="mx-5"
            auto-grow
            value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
          ></v-textarea>
          <div class="pa-4">
            <v-checkbox v-model="checkbox1" class="mx-5" label="할일 1"></v-checkbox>
            <v-checkbox v-model="checkbox1" class="mx-5" label="할일 2"></v-checkbox>
            <v-btn depressed flat class="ml-5" color="primary">업무 추가</v-btn>
          </div>
          <v-layout row wrap class="mx-5 pa-4">
            <v-flex xs4>
              <v-menu>
                <v-text-field 
                  :value="formattedDate" 
                  slot="activator" 
                  label="시작일" 
                  prepend-icon="date_range"
                >
                </v-text-field>
                <v-date-picker v-model="due"></v-date-picker>
              </v-menu>
            </v-flex>
            <v-flex xs4>
              <v-menu>
                <v-text-field 
                  :value="formattedDate" 
                  slot="activator" 
                  label="완료일" 
                  prepend-icon="date_range"
                >
                </v-text-field>
                <v-date-picker v-model="due"></v-date-picker>
              </v-menu>
            </v-flex>
            <v-flex xs4>
              <v-menu>
                <v-text-field 
                  :value="formattedDate" 
                  slot="activator" 
                  label="(선택)중간점검" 
                  prepend-icon="date_range"
                >
                </v-text-field>
                <v-date-picker v-model="due"></v-date-picker>
              </v-menu>
            </v-flex>
            
            
          </v-layout>
          <v-btn depressed block color="primary">계획완료</v-btn>
        </v-flex>
      </v-layout>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  
}
</script>

<style scoped>

</style>
