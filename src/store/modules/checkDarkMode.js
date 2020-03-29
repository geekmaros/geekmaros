export const state = {
    isDarkMode: false
}

export const mutations = {
    SET_DARKMODE: (state, payload) => state.isDarkMode = payload
}

export const actions = {
    setDarkMode: ({commit}, payload) => commit('SET_DARKMODE', payload)
}

export const getters = {
    isDarkMode: state => state.isDarkMode
}