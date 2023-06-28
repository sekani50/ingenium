import { defineStore } from 'pinia';
export const useAuthStore = defineStore('useAuthStore', {
  state: (): {
    authUser: Object,
    authUserAccount: Object,
    isLoggedIn: Boolean,
    bearerToken: string
  } => ({
    authUser: {name: 'ds'},
    isLoggedIn: false,
    bearerToken: '',
    authUserAccount:{}
  }),


  getters: {
    getAuthUser: state => state.authUser,
    getAuthUserAccount: state => state.authUserAccount,
  },


  actions: {
    
    async logoutUser() {
      this.isLoggedIn = false
      this.authUser = {}
    },

    async setAuthUser(user: any) {
      try {
        this.authUser = user
      } catch (error) {
        console.log( error)
      }
    },
    async setAuthUserAccount(account: any) {
      try {
        this.authUserAccount = account
      } catch (error) {
        console.log( error)
      }
    },

    async setToken(token: any) {
      try {
        this.isLoggedIn = true
        this.bearerToken = token
        console.log(this.bearerToken)
      } catch (error) {
        return error
      }
    },
  },

  persist: {
    beforeRestore: (ctx) => {
      console.log(`about to restore '${ctx.store.$id}'`)
    },

    afterRestore: (ctx) => {
      console.log(`just restored '${ctx.store.$id}'`)
    },

    paths: ['isLoggedIn', 'bearerToken', 'authUser'],
  },
});