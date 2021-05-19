import { ref } from 'vue'
import { projectFireStore } from '../firebase/config'

const useCollection = (collection) => {
    const error = ref(null)

    const addDoc = async (doc) => {
        error.value = null

        try {
            await projectFireStore.collection(collection).add(doc)
        } catch(err) {
            console.log(err.message)
            error.value = 'could not send the message'
        }
    }

    return { error, addDoc, }
}

export default useCollection