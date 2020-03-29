export const state = {
    isMobile : false,
}

export const mutations = {
    SET_MOBILE: state => {
        if (window.innerWidth <= 410){
           state.isMobile = true
        }else{
            state.isMobile = false
        }
    }
}

export const actions = {
    setMobile({commit}){
      commit('SET_MOBILE')
    }
}

export const getters = {
    isMobile : state => state.isMobile
}