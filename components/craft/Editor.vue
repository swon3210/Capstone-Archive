<template>
  <div class="editor" style="width:100%">
    <editor-menu-bar :editor="editor" class="pa-1">
      <div
        slot-scope="{ commands }"
      >
        
        <v-btn-toggle 
          v-model="toggle_multiple"
          
        >
          <v-layout 
            row 
            wrap
          >
            <v-flex class="ml-3">
              <v-btn 
                flat
                class="menubar__button"
                @click="commands.bold"
              >
                <v-icon>format_bold</v-icon>
              </v-btn>
            </v-flex>
            <v-flex>
              <v-btn 
                flat
                class="menubar__button"
                @click="commands.italic"
              >
                <v-icon>format_italic</v-icon>
              </v-btn>
            </v-flex>
            <v-flex>
              <v-btn 
                flat
                class="menubar__button"
                @click="commands.strike"
              >
                <v-icon>format_clear</v-icon>
              </v-btn>
            </v-flex>
            <v-flex>
              <v-btn 
                flat
                class="menubar__button"
                @click="commands.underline"
              >
                <v-icon>format_underlined</v-icon>
              </v-btn>
            </v-flex>
            <v-flex>
              <v-btn 
                flat
                class="menubar__button"
                @click="commands.code"
              >
                <v-icon>code</v-icon>
              </v-btn>
            </v-flex>
            <v-flex>
              <v-btn 
                flat
                class="menubar__button"
                @click="commands.paragraph"
              >
                <v-icon>short_text</v-icon>
              </v-btn>
            </v-flex>
            <v-flex>
              <v-btn 
                flat
                class="menubar__button"
                @click="commands.heading({ level: 1 })"
              >
                H1
              </v-btn>
            </v-flex>
            <v-flex>
              <v-btn
                flat
                class="menubar__button"
                @click="commands.heading({ level: 2 })"
              >
                H2
              </v-btn>
            </v-flex>
            <v-flex>
              <v-btn
                flat
                class="menubar__button"
                @click="commands.heading({ level: 3 })"
              >
                H3
              </v-btn>
            </v-flex>
            <v-flex>
              <v-btn
                flat
                class="menubar__button"
                @click="commands.bullet_list"
              >
                <v-icon>format_list_bulleted</v-icon>
              </v-btn>
            </v-flex>
            <v-flex>
              <v-btn
                flat
                class="menubar__button"
                @click="commands.ordered_list"
              >
                <v-icon>format_list_numbered</v-icon>
              </v-btn>
            </v-flex>
            <v-flex>
              <v-btn
                flat
                class="menubar__button"
                @click="commands.redo"
              >
                <v-icon>redo</v-icon>
              </v-btn>
            </v-flex>
            <v-flex class="mr-3">
              <v-btn
                flat
                class="menubar__button"
                @click="commands.undo"
              >
                <v-icon>undo</v-icon>
              </v-btn>
            </v-flex>

          </v-layout>
          
        </v-btn-toggle>
      

      </div>
    </editor-menu-bar>

    <editor-content 
      class="editorScroll my-2 pa-2"
      :editor="editor"
    />
  </div>
</template>

<script>
import Icon from './Icon.vue'
import { Editor, EditorContent, EditorMenuBar } from 'tiptap'
import {
  Blockquote,
  BulletList,
  CodeBlock,
  HardBreak,
  Heading,
  ListItem,
  OrderedList,
  TodoItem,
  TodoList,
  Bold,
  Code,
  Italic,
  Link,
  Strike,
  Underline,
  History,
} from 'tiptap-extensions'
export default {
  components: {
    EditorContent,
    EditorMenuBar,
    Icon,
  },
  data() {
    return {
      editor: new Editor({
        extensions: [
          new Blockquote(),
          new BulletList(),
          new CodeBlock(),
          new HardBreak(),
          new Heading({ levels: [1, 2, 3] }),
          new ListItem(),
          new OrderedList(),
          new TodoItem(),
          new TodoList(),
          new Bold(),
          new Code(),
          new Italic(),
          new Link(),
          new Strike(),
          new Underline(),
          new History(),
        ],
        content: `
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        `,
        // dummy data
        
      }),
      toggle_multiple: [0, 1, 2]
    }
  },
  beforeDestroy() {
    this.editor.destroy()
  },
  methods: {
    test () {
      console.log(this.editor);
    }
  }
}
</script>

<style scoped>
.editorScroll {
  overflow-y: hidden;
  height: 354px;
}
</style>
