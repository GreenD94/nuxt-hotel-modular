<template >
    <div>
        <b-row >
            <b-col class="tableheader">Primer nombre</b-col>
            <b-col class="tableheader">Ultimo Nombre</b-col>
            <b-col class="tableheader">Telefono</b-col>
            <b-col class="tableheader">action</b-col>
        </b-row>
        <b-row v-for="(user) in users" :key="user.id">
            <b-col class="cell">{{user.first_name}}</b-col>
            <b-col class="cell">{{user.last_name}}</b-col>
            <b-col class="cell">{{user.phone}}</b-col>
            <b-col class="cell">
                <b-icon   v-if="$authCan('delete')" icon="x-circle" scale="1" variant="danger" @click="deleteUser(user.id)">
                </b-icon>
            </b-col>
        </b-row>
    </div>
</template>
<script src="../controller/indexController.js"></script>

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
