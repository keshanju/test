import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    token: ""
};

const actions = {
    updateToken:({commit},token)=>{
        commit("updateToken",token);
    }
};

const mutations = {
    /**
     * 更新token
     */
    updateToken:(state,token)=>{
        state.token = token;
    }
};

const getters = {
    getToken:(state)=>{
        return state.token;
    }
};

export default new Vuex.Store({
    state,
    actions,
    mutations,
    getters
});