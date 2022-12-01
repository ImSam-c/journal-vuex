import state from "./state.js";
import * as mutations from "./mutations.js";
import * as actions from "./actions.js";
import * as getters from "./getters.js";

const myCustomModule = {
  namespaced: true,
  actions,
  mutations,
  getters,
  state,
};

export default myCustomModule;
