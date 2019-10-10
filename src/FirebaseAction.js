import firebase from 'firebase/app';
import firestore from 'firebase/firestore';
import config from './firebase-config.js';


firebase.initializeApp(config);
const db = firebase.firestore();


export const addTodo = (todo,day,month) => {
  db.collection('todo').doc(month).collection(day).doc().set({
    todo:todo,
    day:day,
    created: firebase.firestore.FieldValue.serverTimestamp(),
    }).then(doc => {
      })
      .catch(error => {
        console.log(error);
      });
}


export const fetchTodo = (month,setTodoList) => {

  var newTodoData=[];
  for (var count = 0; count < 32; count++) {
    db.collection('todo').doc(month).collection(""+month+count).get()
      .then(function(querySnapshot){
        if(querySnapshot)
        querySnapshot.forEach(function(doc){

          //idの追加、無駄な要素を削除するために展開している
          const data = {
            todo:doc.data().todo,
            docId:doc.id,
            day:doc.data().day
          }
          newTodoData.push(data)
      })
      if (newTodoData.length >= 1){
          setTodoList(newTodoData)
      }
    });
  }
}


export const deleteTodo = (todoData,month) => {
  db.collection("todo").doc(month).collection(todoData.day).doc(todoData.docId).delete().then(function() {
    console.log("Document successfully deleted!");
}).catch(function(error) {
    console.error("Error removing document: ", error);
});
}
  