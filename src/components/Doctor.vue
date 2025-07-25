<template>
  <div class="contenedor-doctor">
    <div class="formulario-doctor">
        <h1>Doctor</h1>
    <label>Id:</label>
    <input v-model="dotor.id" type="number" placeholder="Id" />
    <br />
    <label>Cédula:</label>
    <input v-model="doctor.cedula" type="text" placeholder="Cédula" />
    <br />
    <br />
    <label>Nombre:</label>
    <input v-model="doctor.nombre" type="text" placeholder="Nombre" />
    <br />
    <label>Apellido:</label>
    <input v-model="doctor.apellido" type="text" placeholder="Apellido" />
    <br />
    <label>Género:</label>
    <select v-model="doctor.genero">
      <option value="M">Masculino</option>
      <option value="F">Femenino</option>
    </select>
    </div>
    <div class="buttons-opciones">
    <button v-on:click="guardar()">Guardar</button>
    </div>
    <label v-if="mensaje" style="color: red;">{{ mensaje }}</label>
  </div>
</template>


<script>
import { guardarFachada} from "../clients/ConsumirApi.js";

export default {
 data() {
    return {
      doctor: {
        id: null,
        nombre: "",
        cedula: "",
        apellido: "",
        genero: "M",
      },
      mensaje: ""
    }
  },
    methods: {
        mostrarMensaje(msg) {
      this.mensaje = msg;
      setTimeout(() => {
        this.mensaje = "";
      }, 5000);
    },
    limpiar() {
      this.doctor = {
        id: null,
        cedula: "",
        nombre: "",
        apellido: "",
        genero: "M",
      };
    },
     async guardar(){
      const doctorToBody = {
        nombre: this.doctor.nombre,
        cedula: this.doctor.cedula,
        apellido: this.doctor.apellido,
        genero: this.doctor.genero,
      }
      await guardarFachada(doctorToBody);
      this.mostrarMensaje("Doctor guardado correctamente");
     this.limpiar();
    },
 }
}
</script>

<style>

</style>