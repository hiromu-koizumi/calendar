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


export const fetchMonthTodo =  async(month,setTodoList) => {

  let count = 0;
  var newTodoData=[];

  const addState =　(querySnapshot)　=>　{
      count+=1;
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
    //一ヶ月のデータの取得が終わったタイミングでstateを更新するためにif文が必要
      if(count===32){
        setTodoList(newTodoData)
      } 
    }
    for (let day = 0; day < 32; day++) {
        db.collection('todo').doc(month).collection(""+month+day).orderBy('created').get()
        .then(
        function(querySnapshot){
          addState(querySnapshot)
        }
      );
             
    }
  
  
}

export const fetchDayTodo = (day,month,setTodo) => {

  var newTodoData=[];
  db.collection("todo").doc(month).collection(day).orderBy('created').get()
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
          setTodo(newTodoData)
      }
    });
  }



export const deleteTodo = (todoData,month,setTodo,todo,todoIndex) => {
  db.collection("todo").doc(month).collection(todoData.day).doc(todoData.docId).delete().then(function() {
    todo.splice(todoIndex,1)
    const newTodo = [...todo]
    setTodo(newTodo)
    console.log("Document successfully deleted!");
}).catch(function(error) {
    console.error("Error removing document: ", error);
});
}
  