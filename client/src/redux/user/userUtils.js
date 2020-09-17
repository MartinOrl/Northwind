import { firestore } from "../../firebase/firebase"

export const GetOrdersByUserId = id => {
    firestore.collection('users').doc(`${id}`).get().then(doc => {
        let data = doc.data()
        return data.orders
    })
}