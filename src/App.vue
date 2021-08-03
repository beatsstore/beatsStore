<template>
  <div id="app" class="fill flex-shrink-0">
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <Router-link class="navbar-brand" to="/">
<img src="logo.png" alt="" width="50px">
        </Router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Router-link class="nav-link" to="nosotros">Nosotros</Router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view>
      
    </router-view>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-8 d-flex align-items-center justify-content-center">
          <img src="/logo.png" alt="">
        </div>
        <div class="col-sm-2">
          <p>Nosotros</p>
          <p>Apoyanos</p>
        </div>
        <div class="col-sm-2">
          <a href="">
            <img src="/assets/icon/instagram.png" alt="" style="margin: 5%" width="30px"> 
          </a>
          <a href="">
            <img src="/assets/icon/youtube.png" alt="" width="30px">
          </a>
        </div>
      </div>
      <div class="row">
        <a href='https://www.freepik.es/psd/maqueta'>Psd de Maqueta creado por crowf - www.freepik.es</a>
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
