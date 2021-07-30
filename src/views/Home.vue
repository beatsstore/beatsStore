<template>
  <div class="container">
    <div class="row completo">
      <div class="col-sm d-flex align-items-center">
        <div>
          <h1><b>Cooking Beats</b> tu <b>Comunidad</b>, tu <b>Musica</b></h1>
          <p class="size: 24px">
            La plataforma Latinoamericana de distribución de contenido, que te
            permite crear en comunidad.
          </p>
        </div>
      </div>
      <div
        class="col-sm d-flex align-items-center"
      >
        <img src="imagen1.png" alt="" style="width: 100%;" />
      </div>
    </div>
    <div class="row completo">
      <div class="col-sm d-flex align-items-center">
        <img src="imagen2.png" width="100%" alt="" />
      </div>
      <div class="col-sm d-flex align-items-center">
        <div>
          <h1>Un <b>entorno sencillo</b> para <b>Usuarios</b> iniciados.</h1>
          <p>
            No pierdas el tiempo en aprender a usar nustro sistema y concentrece
            en vender o en comprar si es lo que necesitas.
          </p>
        </div>
      </div>
    </div>
    <div class="row completo">
      <div class="col-sm d-flex align-items-center">
        <div>
          <h1>Medios de <b>Pago Locales</b>.</h1>
          <p class="size: 24px">
            Incorporamos medios de pago locales para poder perder el minimo
            dinero y tiempo posible. Proximamente ampliaremos a mas medios de
            pago.
          </p>
        </div>
      </div>
      <div class="col-sm d-flex align-items-center">
        <img src="imagen3.png" alt="" style="width: 90%;" />
      </div>
    </div>
    <div class="lanzamiento row d-flex align-items-center justify-content-center">
      <div class="text-center">
          <h1>Lanzamos En:</h1>
          <br />
          <h4 class="text-center">
            {{ dias }} Dias {{ horas }} Horas {{ minutos }} Minutos
            {{ segundos }} Segundos
          </h4>
        </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "Home",
  data() {
    return {
      dias: 0,
      horas: 0,
      minutos: 0,
      segundos: 0,
    };
  },
  mounted() {
    this.cuenta();
  },
  methods: {
    cuenta() {
      setInterval(()=>{
        var fechaActual = moment(new Date());
        var fechaFinal = moment("20-09-2021", "DD-MM-YYYY");

        var contador = fechaFinal.subtract(fechaActual);
        this.dias = contador.dayOfYear();
        this.horas = contador.hours();
        this.minutos = contador.minutes();
        this.segundos = contador.seconds();
      }, 1000);
    },
  },
};
</script>
<style>
.completo,
.container {
  height: 100%;
  width: 100%;
  top: 10%;
  right: 5%;
}

.lanzamiento{
  height: 100vh;
}
</style>
