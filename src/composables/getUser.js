import { ref } from 'vue'
import { projectAuth } from '../firebase/config'

const user = ref()

projectAuth.onAuthStateChanged((_user) => {
    console.log('user state change. Current user is: ', _user)
    user.value = _user  
})

const getUser = () => {
    return { user }
}

export default getUser