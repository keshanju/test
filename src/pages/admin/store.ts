/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-07 13:48:21
 * @LastEditTime: 2019-09-07 15:19:52
 * @LastEditors: Please set LastEditors
 */
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