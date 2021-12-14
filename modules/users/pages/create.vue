<template >
    <div >
        <b-row align-h="center">
            <b-col class="tableheader " cols="6" >
                <b-form-group
                label-for="input-1"
                description="Escribe tu primer nombre"
                label="Primer Nombre"
                valid-feedback="correcto!"
                :invalid-feedback="firstnameValidationMessage"
                :state="isValidFirstName"
                >
                    <b-form-input id="input-1" v-model="input.first_name" :state="isValidFirstName" ></b-form-input>
                </b-form-group>

                <b-form-group
                label-for="input-2"
                description="Escribe tu ultimo nombre"
                label="Ultimo Nombre"
                valid-feedback="correcto!"
                :invalid-feedback="lastNameValidationMessage"
                :state="isValidLastName"
                >
                    <b-form-input id="input-2" v-model="input.last_name" :state="isValidLastName" ></b-form-input>
                </b-form-group>

                <b-form-group
                label-for="input-4"
                description="Escribe su email"
                label="email"
                valid-feedback="correcto!"
                :invalid-feedback="emailValidationMessage"
                :state="isValidEmail"
                >
                    <b-form-input id="input-4" v-model="input.email" :state="isValidEmail" type="email" ></b-form-input>
                </b-form-group>

                <b-form-group
                label-for="input-3"
                description="Escribe tu numero telefonico"
                label="Telefono"
                valid-feedback="correcto!"
                :invalid-feedback="phoneValidationMessage"
                :state="isValidPhone"
                >
                    <b-form-input id="input-3" v-model="input.phone" :state="isValidPhone" ></b-form-input>
                </b-form-group>
                <b-button @click="store">crear usuario</b-button>
            </b-col>
        </b-row>
    </div>
</template>
<script src="../controller/createController.js"></script>

<style scoped>
.cell {
  border:1px solid black;
  background-color: #DCDCDC;
}

.tableheader {
  border:1px solid black;
  background-color: #F4F5FF;
}
</style>
