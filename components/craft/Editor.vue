<template>
  <div class="editor">
    <editor-menu-bar :editor="editor">
      <div
        class="menubar is-hidden"
        :class="{ 'is-focused': focused }"
        slot-scope="{ commands, isActive, focused }"
      >
        <v-btn-toggle v-model="toggle_multiple">
          <v-btn 
            flat
            class="menubar__button"
            :class="{ 'is-active': isActive.bold() }"
            @click="commands.bold"
          >
            <v-icon>format_bold</v-icon>
          </v-btn>
          <v-btn 
            flat
            class="menubar__button"
            :class="{ 'is-active': isActive.italic() }"
            @click="commands.italic"
          >
            <v-icon>format_italic</v-icon>
          </v-btn>
          <v-btn 
            flat
            class="menubar__button"
            :class="{ 'is-active': isActive.strike() }"
            @click="commands.strike"
          >
            <v-icon>format_clear</v-icon>
          </v-btn>
          <v-btn 
            flat
            class="menubar__button"
            :class="{ 'is-active': isActive.underline() }"
            @click="commands.underline"
          >
            <v-icon>format_underlined</v-icon>
          </v-btn>
          <v-btn 
            flat
            class="menubar__button"
            :class="{ 'is-active': isActive.code() }"
            @click="commands.code"
          >
            <v-icon>code</v-icon>
          </v-btn>
          <v-btn 
            flat
            class="menubar__button"
            :class="{ 'is-active': isActive.paragraph() }"
            @click="commands.paragraph"
          >
            <v-icon>short_text</v-icon>
          </v-btn>
          <v-btn 
            flat
            class="menubar__button"
            :class="{ 'is-active': isActive.heading({ level: 1 }) }"
            @click="commands.heading({ level: 1 })"
          >
            H1
          </v-btn>
          <v-btn
            flat
            class="menubar__button"
            :class="{ 'is-active': isActive.heading({ level: 2 }) }"
            @click="commands.heading({ level: 2 })"
          >
            H2
          </v-btn>
            <v-btn
            flat
            class="menubar__button"
            :class="{ 'is-active': isActive.heading({ level: 3 }) }"
            @click="commands.heading({ level: 3 })"
          >
            H3
          </v-btn>
          <v-btn
            flat
            class="menubar__button"
            :class="{ 'is-active': isActive.bullet_list() }"
            @click="commands.bullet_list"
          >
            <v-icon>format_list_bulleted</v-icon>
          </v-btn>
          <v-btn
            flat
            class="menubar__button"
            :class="{ 'is-active': isActive.bullet_list() }"
            @click="commands.bullet_list"
          >
            <v-icon>format_list_bulleted</v-icon>
          </v-btn>
          
        </v-btn-toggle>
        <!-- <v-btn
          class="menubar__button"
          :class="{ 'is-active': isActive.ordered_list() }"
          @click="commands.ordered_list"
        >
          <v-icon name="ol" />
        </v-btn>

        <v-btn
          class="menubar__button"
          :class="{ 'is-active': isActive.blockquote() }"
          @click="commands.blockquote"
        >
          <v-icon name="quote" />
        </v-btn>

        <v-btn
          class="menubar__button"
          :class="{ 'is-active': isActive.code_block() }"
          @click="commands.code_block"
        >
          <v-icon name="code" />
        </v-btn> -->

      </div>
    </editor-menu-bar>

    <editor-content class="editor__content my-2" :editor="editor" />
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
          <h2>
            Hiding Menu Bar
          </h2>
          <p>
            Click into this text to see the menu. Click outside and the menu will disappear. It's like magic.
          </p>
        `,
        // dummy data
        
      }),
      toggle_multiple: [0, 1, 2]
    }
  },
  beforeDestroy() {
    this.editor.destroy()
  }
}
</script>