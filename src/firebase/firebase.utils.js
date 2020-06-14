import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyD0wOssgS2zq7qaQrkn7iacjsp0s2138Gw',
	authDomain: 'ecom-shop-3f2c2.firebaseapp.com',
	databaseURL: 'https://ecom-shop-3f2c2.firebaseio.com',
	projectId: 'ecom-shop-3f2c2',
	storageBucket: 'ecom-shop-3f2c2.appspot.com',
	messagingSenderId: '514550077909',
	appId: '1:514550077909:web:46d778a32ff2bccf0d055c',
	measurementId: 'G-W5C9LJENQ4'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
