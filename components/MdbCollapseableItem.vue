<template>
  <div v-b-toggle="toggleId" v-bind:class="['container', 'side-bar-item']">
    <div
      id="innerRow"
      v-bind:class="[isVisible ? 'activeClass' : '', 'row']"
      @click="isIconSelected = !isIconSelected"
    >
      <div class="col-10"><slot></slot></div>
      <div class="col-2" align="center">
        <i
          v-if="!isCollapseableEmpty"
          class="fas fa-chevron-left"
          :id="itemIcon"
          v-bind:class="[isIconSelected ? 'iconSelected' : '', 'iconInactive']"
        ></i>
      </div>
    </div>

    <b-collapse :id="toggleId" class="mt-2 ml-2" :visible="isVisible">
      <slot name="collapseable"> </slot>
    </b-collapse>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    toggleId: {
      type: String,
      default: "collapse-1",
    },
    url: {
      type: String,
      default: "",
    },
    urlExact: {
      type: String,
      default: "",
    },
  },
  data() {
    return { isIconSelected: false };
  },
  created() {
    this.isIconSelected = this.isVisible;
  },
  methods: {},
  computed: {
    itemIcon() {
      return "icon-" + this.toggleId;
    },
    isVisible() {
      let url = "";
      url = this.url.length > 0 ? this.url : url;
      url = this.urlExact.length > 0 ? this.urlExact : url;
     
      return url.length > 0
        ? this.urlExact.length > 0
          ? this.$nuxt.$route.path == url
          : this.$nuxt.$route.path.includes(url)
        : false;
    },
    isCollapseableEmpty() {
      return !this.$slots["collapseable"];
    },
  },
};
</script>
<style scoped>
.activeClass {
  background-color: #0d899c;
  border-bottom: 2px solid white;
}

#innerRow:hover {
  background-color: #21b5cc;
  border-bottom: 2px solid white;
}
#innerRow {
  -webkit-transition: all 0.2s ease;
  -moz-transition: all 0.2s ease;
  -ms-transition: all 0.2s ease;
  -o-transition: all 0.2s ease;
  transition: all 0.2s ease;
}

.side-bar-item {
  margin-top: 5px;
  padding-bottom: 3px;
  padding-top: 3px;
  -webkit-transition: all 0.2s ease;
  -moz-transition: all 0.2s ease;
  -ms-transition: all 0.2s ease;
  -o-transition: all 0.2s ease;
  transition: all 0.2s ease;
}

.iconInactive {
  transform-origin: center;
  -webkit-transition: all 0.2s ease;
  -moz-transition: all 0.2s ease;
  -ms-transition: all 0.2s ease;
  -o-transition: all 0.2s ease;
  transition: all 0.2s ease;
}

.iconSelected {
  transform: rotate(-90deg);
}
</style>
