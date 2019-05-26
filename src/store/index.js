import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
      message: 'Hello from Vuex redux',
      login:false,
      users:[
        {
          id:1,
          name:'rabndra',
          age:31
        },
        {
          id:2,
          name:'reena',
          age:27
        },
        {
          id:3,
          name:'Laddo',
          age:3
        }
      ]
    },
    mutations:{
      updateMessage(state){
        state.message="Vuex updated from mutation"
      },
      loginMessage(state){
        state.login = ! state.login
      }
    },
    actions:{
        updateMessageAction1(context){
          context.commit('updateMessage')
        },
        loginMessageAction(context){
          context.commit('loginMessage')
        }
    },
    getters:{
        getUsers(state){
          return state
                  .users
                  .filter(user => user.age <30)
        }
    }
})

export default store;
