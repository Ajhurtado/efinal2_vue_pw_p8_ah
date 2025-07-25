<template>
  <div class="contenedor-doctor">
    <div class="formulario-doctor">
        <h1>Doctor</h1>
    <label>Id:</label>
    <input v-model="doctor.id" type="number" placeholder="Id" />
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
      }, 10000);
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
.contenedor-doctor {
  max-width: 400px;
  margin: 40px auto;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  padding: 32px 24px;
}

.formulario-doctor {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

h1 {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 24px;
}

label {
  font-weight: 500;
  margin-bottom: 4px;
  color: #34495e;
}

input, select {
  padding: 10px 12px;
  border: 1px solid #dfe6e9;
  border-radius: 8px;
  font-size: 16px;
  margin-bottom: 8px;
  transition: border-color 0.2s;
}

input:focus, select:focus {
  border-color: #0984e3;
  outline: none;
}

.buttons-opciones {
  display: flex;
  justify-content: center;
  margin-top: 16px;
}

button {
  background: blue;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 10px 32px;
  font-size: 16px;
  cursor: pointer;
}

button:hover {
  background: skyblue;
}

label[style] {
  display: block;
  text-align: center;
  margin-top: 16px;
  font-size: 15px;
}
</style>