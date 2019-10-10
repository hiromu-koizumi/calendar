import firebase from 'firebase/app';
import firestore from 'firebase/firestore';
import config from './firebase-config.js';


firebase.initializeApp(config);
const db = firebase.firestore();


export const addTodo = (todo,day,month) => {
  db.collection('todo').doc(month).collection("detail").doc(day).set({
    todo:todo,
    day:day,
    created: firebase.firestore.FieldValue.serverTimestamp()
    }).then(doc => {
        console.log(`${doc.id}をDBに保存した`);
      })
      .catch(error => {
        console.log(error);
      });
}


export const fetchTodo = (month,setTodoList) => {

  var newTodoData=[];
    
    db.collection('todo').doc(month).collection('detail').get()
      .then(function(querySnapshot){
        querySnapshot.forEach(function(doc){
          newTodoData.push(doc.data())
      })
      if (newTodoData.length >= 1){
          setTodoList(newTodoData)
      }
    });
  }
  