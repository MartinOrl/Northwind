import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyBQ54ryyLWI6mmDEZkCn-wwlxoquqNdJaA",
    authDomain: "northwind-7a433.firebaseapp.com",
    databaseURL: "https://northwind-7a433.firebaseio.com",
    projectId: "northwind-7a433",
    storageBucket: "northwind-7a433.appspot.com",
    messagingSenderId: "671009761002",
    appId: "1:671009761002:web:a3854149e4c551feecd993"
  };

firebase.initializeApp(firebaseConfig)

export const createUserProfile = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const {email} = userAuth;
        const createdAt = new Date();
        try{
        await userRef.set({
            email,
            createdAt,
            ...additionalData
        }); 
        } catch(error){
        console.log('error creating user', error.message)
        }
    }
    return userRef

};

export const AddDataToDatabase = async (data) => {
    console.log(data);
    firestore.collection('shopData').doc(data.name).set({
        items: [...data.items]
    })
    .then(() => {
        console.log('Document successfully written!')
    })
    .catch(error => {
        console.error("Error writing document: ", error)
    })
}


export const auth = firebase.auth();

firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);




export default firebase;