export const state = () => ({
  hamburgerActive: false,
})

export const actions = {
  setHamburgerActive: ({ commit }) => {
    commit('SET_HAMBURGER_ACTIVE')
  },
  setHamburgerInactive: ({ commit }) => {
    commit('SET_HAMBURGER_INACTIVE')
  },
  toggleHamburgerState: ({ commit }) => {
    commit('TOGGLE_HAMBURGER_STATE')
  },
}

export const mutations = {
  SET_HAMBURGER_ACTIVE: (state) => {
    state.hamburgerActive = true
  },
  SET_HAMBURGER_INACTIVE: (state) => {
    state.hamburgerActive = false
  },
  TOGGLE_HAMBURGER_STATE: (state) => {
    state.hamburgerActive = !state.hamburgerActive
  },
}
