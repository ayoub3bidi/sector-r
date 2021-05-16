import { ref } from 'vue'
import { projectAuth } from '../firebase/config'

const error = ref(null)

const login  = async (email, password) => {
    error.value = null

    try {
        const res = await projectAuth.signInWithEmailAndPassword(email, password)
        error.message = null
        console.log(res)
        return res
    } catch(error) {
         console.log(err.message)
         err.message = 'Incorrect login credentials'
    }
}

const useLogin = () => {
    return { error, login }
}

export default useLogin 