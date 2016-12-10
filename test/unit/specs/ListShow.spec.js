import Vue from 'vue'
import MyComponent from 'src/components/ListShow'
import App from 'src/App'

function getRendered (Component, propsData) {
  const Ctor = Vue.extend(Component)
  const vm = new Ctor({ propsData }).$mount()
  return vm
}
describe('Show.vue', () => {
  const vmApp = getRendered(App, {})
  const vmListShow = getRendered(MyComponent, {
    lists: vmApp.lists,
    deletelist: vmApp.deletelist,
    editList: vmApp.editList
  })
  console.log(vmListShow.lists)
})
