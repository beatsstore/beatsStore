<template>
  <div class="d-flex justify-content-center">
    <form @submit.prevent="send" class="w-50 d-grid gap-2 ">
      <input type="email" class="form-control" name="user_email" id="" />
      <button class="btn btn-dark block" type="submit">Suscribirse</button>
    </form>
  </div>
</template>
<script>
import emailjs from "emailjs-com";
export default {
  name: "Activar",
  data() {
    return {
      enviar: true,
      email: "",
    };
  },
  methods: {
    send: function(e) {
      emailjs
        .sendForm(
          "service_c51qjaw",
          "template_g0dzuhj",
          e.target,
          "user_7aJAMQ0BLqwPdK2srZGsh"
        )
        .then(
          (result) => {
            this.enviar = false;
            console.log("SUCCESS!", result.status, result.text);
          },
          (error) => {
            this.enviar = true;
            console.log("FAILED...", error);
          }
        );
    },
  },
};
</script>
<style>
.form-control,
.form-control:hover,
.form-control:active {
  background: black;
  color: white;
  border: black;
}
</style>
