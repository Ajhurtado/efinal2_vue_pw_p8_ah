<template>
  <div class="contenedor-paciente">
    <div class="formulario-paciente">
        <h1>Paciente</h1>
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
    <label>Fecha Nacimiento:</label>
    <input v-model="doctor.fechaNacimiento" type="date" />
    <br />
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
      paciente: {
        id: null,
        nombre: "",
        cedula: "",
        apellido: "",
        fechaNacimiento: "",
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
      this.paciente = {
        id: null,
        cedula: "",
        nombre: "",
        apellido: "",
        fechaNacimiento: "M",
      };
    },
     async guardar(){
      const pacienteToBody = {
        nombre: this.doctor.nombre,
        cedula: this.doctor.cedula,
        apellido: this.doctor.apellido,
        genero: this.paciente.fechaNacimiento,
      }
      await guardarFachada(pacienteToBody);
      this.mostrarMensaje("Paciente guardado correctamente");
     this.limpiar();
    },
 }
}
</script>

<style>

</style>