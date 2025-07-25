<template>
  <div class="contenedor-paciente">
    <div class="formulario-paciente">
        <h1>Paciente</h1>
    <label>Id:</label>
    <input v-model="paciente.id" type="number" placeholder="Id" />
    <br />
    <label>Cédula:</label>
    <input v-model="paciente.cedula" type="text" placeholder="Cédula" />
    <br />
    <br />
    <label>Nombre:</label>
    <input v-model="paciente.nombre" type="text" placeholder="Nombre" />
    <br />
    <label>Apellido:</label>
    <input v-model="paciente.apellido" type="text" placeholder="Apellido" />
    <br />
    <label>Fecha Nacimiento:</label>
    <input v-model="paciente.fechaNacimiento" type="date" />
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
      }, 10000);
    },
    limpiar() {
      this.paciente = {
        id: null,
        cedula: "",
        nombre: "",
        apellido: "",
        fechaNacimiento: "",
      };
    },
     async guardar(){
      const pacienteToBody = {
        nombre: this.paciente.nombre,
        cedula: this.paciente.cedula,
        apellido: this.paciente.apellido,
        fechaNacimiento: this.paciente.fechaNacimiento,
      }
      await guardarFachada(pacienteToBody);
      this.mostrarMensaje("Paciente guardado correctamente");
     this.limpiar();
    },
 }
}
</script>

<style>
.contenedor-paciente {
  max-width: 400px;
  margin: 40px auto;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  padding: 32px 24px;
}

.formulario-paciente {
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