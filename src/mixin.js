const _ = require("lodash");
export const mixin = {
  data() {
    return {
      show: true,
    };
  },
  mounted() {
    window.addEventListener("mousewheel", _.debounce(this.handleScroll, 200));
  },
  methods: {
    handleScroll(e) {
      console.log(e.deltaY);
      if (e.deltaY > 0) {
        this.show = false;
      } else {
        this.show = true;
      }
    },
  },
};
