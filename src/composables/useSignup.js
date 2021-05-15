import { ref } from 'vue'
import { projectAuth } from '../firebase/config'

const error = ref(null)

const signup = async (email, password, userName) => {
    error.value = null

    try {
        const res = await projectAuth.createUserWithEmailAndPassword(email, password)
        if (!res) {
            throw new Error('Could not complete the signup')
        }
        await res.user.updateProfile({ userName })
        error.value = null

        return res

    }catch(err){
        console.log(err.message)
        error.value = err.message
    }
}

const useSignup = () => {

    return { error, signup }
}

export default useSignup