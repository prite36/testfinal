import Vue from 'vue'
import MyComponent from 'src/components/Show'
import ListShow from 'src/components/ListShow'
import App from 'src/App'

function getRendered (Component, propsData) {
  const Ctor = Vue.extend(Component)
  const vm = new Ctor({ propsData }).$mount()
  return vm
}
describe('Show.vue', () => {
  const vmApp = getRendered(App, {})
  const vmListShow = getRendered(ListShow, {
    lists: vmApp.lists,
    deletelist: vmApp.deletelist,
    editList: vmApp.editList
  })
  vmApp.add('kiti', 'eiei')
  const vm = getRendered(MyComponent, {
    list: vmListShow.lists[0],
    deletelist: vmListShow.deletelist,
    editList: vmListShow.editList
  })
  it('ทดสอบ editData()', () => {
    vm.name = '123'
    vm.editData()
  })
  it('ทดสอบ deletelist()', () => {
    vm.deletelist(vm.list.id)
  })
})
