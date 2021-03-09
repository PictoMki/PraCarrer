import firebase from 'firebase'

export const actions = {
  async signUp ({ commit }, { email, password }) {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password).then((user) => {
        commit('setUser', user)
      })
    } catch (error) {
      throw new Error(error)
    }
  },
  test ({ commit }, { data }) {
    console.log(data)
    alert(data)
  }
}
