
import React, { useEffect } from 'react';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { firebaseConfig } from "./firebaseConfig"


// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
  


export default function FirebaseFetch(collectionName) {

    const [data, setData] = React.useState({})

    const getData = () => {
        getDocs(collection(db, collectionName))
          .then((res) => {
            let newData = res.docs.map((doc) => ({...doc.data(), id:doc.id }));
            setData(newData)
          })
          .catch(err => console.log("[getData] err:" + err));
    }

    useEffect(()=>{
        getData();
    }, [])

    return(data[0])

}
  
