import DarkSwitch from './DarkSwitch.vue'

DarkSwitch.install = (App: any) => {
  App.component(DarkSwitch.__name, DarkSwitch)
}

export default DarkSwitch