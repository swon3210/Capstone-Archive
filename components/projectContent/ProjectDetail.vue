<template>
  <div class="team-boxed">
    <header class="masthead text-center text-white d-flex" :style="'background-image:url('+ projectDetailData.image+')'">
      <div class="container my-auto">
        <div class="row">
          <div class="col-lg-10 mx-auto">
            <h1 class="text-uppercase"><strong>{{projectDetailData.projectName}}</strong></h1>
            <hr>
          </div>
        </div>
        <div class="col-lg-8 mx-auto">
          <p class="text-faded mb-5">{{projectDetailData.projectDescription}}</p><a class="btn btn-primary btn-xl js-scroll-trigger" role="button" href="#services">프리젠테이션 보러가기</a></div>
      </div>
    </header>
    <div class="container">
      <div class="row projects">
        <div class="col-sm-12 item">
          <div class="row">
            <div class="col-md-12"><a href="#"><img class="img-fluid"></a></div>
            <div class="col">
              <h3 class="name"></h3>
              <p class="description" style="font-size: 12px;"></p>
            </div>
          </div>
        </div>
      </div>
      <div class="intro">
        <h2 class="text-center">{{projectDetailData.teamName}}</h2>
        <p class="text-center">{{projectDetailData.teamDescription}}</p>
      </div>
      <div class="row people">
        <div class="col-md-6 col-lg-4 item" v-for = "student in projectDetailData.students" :key = "student._uid">
          <div class="box"><img class="rounded-circle" :src="student.image">
            <h3 class="name">{{student.name}}</h3>
            <p class="title">{{student.role}}</p>
            <p class="description">{{student.description}}</p>
            <div class="social"><a href="#"><i class="fa fa-facebook-official"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-instagram"></i></a></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    projectDetailData: {
      type: Object,
      default: {}
    }
  }
}
</script>

<style scoped>

</style>
