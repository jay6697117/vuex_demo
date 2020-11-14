let Vue = null;
class CustomStore {
  constructor(options) {
    this.state = new Vue({
      data: options.state,
    });
    this.mutations = options.mutations || {};
    this.actions = options.actions || {};
  }
  commit(eventName, params) {
    var fn = this.mutations[eventName];
    fn(this.state, params);
  }
  dispatch(eventName, params) {
    var fn = this.actions[eventName];
    fn({commit: this.commit.bind(this), 
      dispatch: this.dispatch.bind(this), 
      state: this.state},
      params);
  }
}

function install(_Vue) {
  Vue = _Vue;
  Vue.mixin({
    beforeCreate() {
      let options = this.$options;
      if (options.customStore) {
        this.$customStore = options.customStore;
      } else if (options.parent && options.parent.$store) {
        this.$customStore = options.parent.$customStore;
      }
    },
  });
}

export default { CustomStore, install };
