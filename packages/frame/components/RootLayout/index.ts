import RootLayout from './RootLayout.vue'

RootLayout.install = (App: any) => {
  App.component(RootLayout.__name, RootLayout)
}

export default RootLayout