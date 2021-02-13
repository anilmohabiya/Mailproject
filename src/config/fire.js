import firebase from 'firebase';

const firebaseConfig = {

    apiKey: "AIzaSyCAfRkT3j6CA_yWzvdhLS5JJZg4aUXqfdU",
    authDomain: "mymarket-9546a.firebaseapp.com",
    projectId: "mymarket-9546a",
    storageBucket: "mymarket-9546a.appspot.com",
    messagingSenderId: "117076877623",
    appId: "1:117076877623:web:49eb17ca5df56b8a9d7ab2",
    measurementId: "G-PDEDXP2S77"

 // apiKey: "AIzaSyCz5zDgu_rCm-VJBVZFAaUP1dfgHed-rTY",
  //authDomain: "mymarketwebsite.firebaseapp.com",
  //projectId: "mymarketwebsite",
  //storageBucket: "mymarketwebsite.appspot.com",
  //messagingSenderId: "748650528681",
  //appId: "1:748650528681:web:adfef726a82cf8c0f80eb8",
  //measurementId: "G-3RFBG9Q9MD"
};
const fire =firebase.initializeApp(firebaseConfig)

export default fire;