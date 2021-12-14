<template>
  <b-container class="d-flex vh-100 flex-column">
    <slot name="nav"></slot>
    <b-container class="flex-grow-1">
      <slot name="content"> <LoadingBar /> </slot>
    </b-container>
    <slot name="footer"></slot>
    <div
      v-if="!isSidebarOpen&&!hide"
      class="zoom"
      id="iconHitbox"
      style="
        position: fixed;
        top: calc(50vh - 25px);
        left: 2px;
        width: 50px;
        height: 50px;
      "
    >
      <i
        class="fas fa-chevron-right"
        :style="iconStyle"
        id="sideBarIcon"
        @click="openSidebar"
      ></i>
    </div>

    <b-sidebar
      id="sidebar-1"
      title="Sidebar"
      header-class="bg-info text-white "
      class
      body-class="overflow-hidden  bg-info text-white"
      v-model="isSidebarOpen"
      :no-close-on-route-change="true"
      shadow
    >
      <template v-slot:header-close>
        <i  class="sidebarCloseButton fas fa-times" ></i>
      </template>

      <b-container>
        <slot name="sidebar"></slot>
      </b-container>
    </b-sidebar>
  </b-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  components: {},
  props: {
    initialShow: {
      type: Boolean,
      default: true,
    },
    hide: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isMouseOverIcon: false,
      isSidebarOpen: false,
    };
  },
  methods: {
    openSidebar() {
      this.isSidebarOpen = true;
    },
  },
  computed: {
    iconStyle: function () {
      return "position: relative; top: 12px;left:3px";
    },
  
  },
};
</script>
<style >

.sidebarCloseButton {
  color:white;
  -webkit-transition: all 0.4s ease;
  -moz-transition: all 0.4s ease;
  -ms-transition: all 0.4s ease;
  -o-transition: all 0.4s ease;
  transition: all 0.4s ease;
}

.sidebarCloseButton:hover {
  transform: scale(2);
}

#sideBarIcon {
  -webkit-transition: all 0.4s ease;
  -moz-transition: all 0.4s ease;
  -ms-transition: all 0.4s ease;
  -o-transition: all 0.4s ease;
  transition: all 0.4s ease;
}

.zoom {
  -webkit-transition: all 0.4s ease;
  -moz-transition: all 0.4s ease;
  -ms-transition: all 0.4s ease;
  -o-transition: all 0.4s ease;
  transition: all 0.4s ease;
}
.zoom:hover {
  padding-left: 10px;
}

.zoom:hover > #sideBarIcon {
  color: #17a2b8;
  transform: scale(2); /* (150% zoom)*/
  -webkit-transform: scale(2);
  -moz-transform: scale(2);
  -o-transform: scale(2);
  -ms-transform: scale(2);
}
</style>
