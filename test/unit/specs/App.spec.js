import Vue from 'vue'
import App from 'src/App'

function getRendered (Component, propsData) {
  const Ctor = Vue.extend(Component)
  const vm = new Ctor({ propsData }).$mount()
  return vm
}
describe('App.vue', () => {
  const vm = getRendered(App, {
  })
  vm.add('kiti', 'eiei')
  it('ทดสอบ add()', () => {
    vm.name = 'euei'
    vm.surname = '113'
    vm.add()
    expect(vm.name).to.eql('euei')
    expect(vm.surname).to.eql('113')
  })
})
