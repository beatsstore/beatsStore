<template>
  <div id="app" class="fill flex-shrink-0">
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
<img src="logo.png" alt="" width="50px">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Pricing</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view>
      
    </router-view>
    <div class="footer container-fluid">
      <div class="row">
        <div class="col-sm-8 d-flex align-items-center justify-content-center">
          <img src="/logo.png" alt="">
        </div>
        <div class="col-sm-2">
          <ul>
            <li>sdf</li>
            <li>sdf</li>
            <li>sdf</li>
          </ul>
        </div>
        <div class="col-sm-2">
          sdfsdfsdf
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Asap&display=swap");
body {
  padding: 0%;
  margin: 0;
  width: 100%;
  height: 100%;
  background: #202135;
  color: #fff;
  font-family: "Asap", sans-serif;
}
.nav-link {
  color: #fff;
}

.footer{
  height: 100vh;
}
</style>
