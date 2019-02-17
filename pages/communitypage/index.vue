<template>
  <div id="content">
    <div class="one">1</div>
    <div class="two">2</div>
    <div class="three">3</div>
    <div class="four">4</div>
    <div class="five">5</div>

  </div>
</template>

<script>
import { db } from '~/fb'

export default {
  layout: 'empty'
}

// 여기 게시글 넣는 게시판으로 활용하면 좋겠다.

</script>

<style scoped>
body {
  text-align: center;
  color: white;
}

#content {
  grid-template-columns: repeat(6, 1fr);
  grid-auto-rows: minmax(150px, auto);
  grid-gap: 10px;
  display: grid;
  max-width: 960px;
  margin: 0 auto;

}

#content div {
  background: #333;
  padding: 30px;
  transform: rotateZ(45deg) scale(0.7);
}

.one {
  grid-column: 1 / 3;
  grid-row: 1 / 5;
}

.two {
  grid-column: 3 / 7;
  grid-row: 1 / 3;
}

.three {
  grid-column: 3 / 5;
  grid-row: 3 / 5;
}

.four {
  grid-column: 5 / 7;
  grid-row: 3 / 7;
}

.five {
  grid-column: 1 / 5;
  grid-row: 5 / 7;
}

</style>

