import { defineStore } from 'pinia'
import { store } from '..'

export interface UserInfo {
  useId: string
  userName: string
  password: string
}

export interface UserState {
  userInfo: UserInfo
  token: string
}

export const useUserStore = defineStore({
  id: 'user',
  state: (): UserState => ({
    userInfo: { useId: '', userName: '', password: '' },
    token: ''
  }),
  getters: {
    getToken(): string {
      return this.token
    },
    getUserInfo(): UserInfo {
      return this.userInfo
    }
  },
  actions: {
    setToken(token: string) {
      this.token = token
    },
    setUserInfo(userInfo: UserInfo) {
      this.userInfo = userInfo
    }
  }
})

export const useUserStoreWithOut = () => {
  return useUserStore(store)
}