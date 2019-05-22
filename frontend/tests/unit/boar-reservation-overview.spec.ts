import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import BoatReservationOverview from '@/views/BoatReservationOverview.vue'

describe('BoatReservationOverview.vue', () => {
  it('should show a title', () => {
    const msg = 'Boat Reservation'
    const wrapper = shallowMount(BoatReservationOverview)
    expect(wrapper.find("h1").text()).to.equal(msg)
  })
})
