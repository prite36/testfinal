import Vue from 'vue'
import MyComponent from 'src/components/Addlist'
import App from 'src/App'

function getRendered (Component, propsData) {
  const Ctor = Vue.extend(Component)
  const vm = new Ctor({ propsData }).$mount()
  return vm
}
describe('Addlist.vue', () => {
  const vmApp = getRendered(App, {})
  const vm = getRendered(MyComponent, {
    add: vmApp.add
  })
  it('ทดสอบ addTo()', () => {
    vm.name = 'euei'
    vm.surname = '113'
    vm.addTo()
    expect(vm.name).to.eql('')
    expect(vm.surname).to.eql('')
  })
})
