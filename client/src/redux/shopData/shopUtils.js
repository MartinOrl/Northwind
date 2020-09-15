import { firestore } from "../../firebase/firebase"

export const SelectCollection = (data, collection) => {
    return data.filter(item => item.collection === collection)
}

export const GetDataById = async id => {
    var docRef = firestore.collection('shopData').doc(`${id}`)
    docRef.get().then(doc => {
        return [...doc.data().items]
    })
}