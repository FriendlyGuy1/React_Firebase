import React, { useState, useEffect } from "react";

import firestore from "../../firebase";
import { collection, getDocs} from "firebase/firestore";

import ContactTable from "../Table/Table";

const Questions = () => {
  const [Question, SetQuestion] = useState([]);

  const getData = async () => {
    const querySnapshot = await getDocs(collection(firestore, "contacts"));

    const getQuestions = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
        }))
    SetQuestion(getQuestions)
  };
  
  

  useEffect(()=> {
    getData()
  }, [Question])


  return (
    <div>   
        <ContactTable questions={Question}/>
    </div>
  )
};

export default Questions;
