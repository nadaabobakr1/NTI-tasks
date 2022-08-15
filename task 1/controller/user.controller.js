const deal = require("./dealWithJson");
const heads = ["title", "content", "date", "status"];

const add = (argv) => { 
console.log(argv);
const user = {};
heads.forEach((head) => (user[head] = argv[head]));
const allUsers = deal.readFromJson();

  // console.log("before");
  // console.log(allUsers)

 
  allUsers.push(user);

  
  // console.log("after");
  // console.log(allUsers)


  deal.writeToJson(allUsers);
};


const show= ()=>{
  const allUsers = deal.readFromJson();
  console.log(allUsers)

}


const deleteTask=(argv)=>{
  console.log("here at delete function")
  const allUsers = deal.readFromJson()
  desiredElementIndex=allUsers.findIndex( 
    function checkTitle(task) {
    return task.title===argv.title;
  })
  allUsers.splice(desiredElementIndex,1)
  
  console.log("modified array:")

  console.log(allUsers)
  deal.writeToJson(allUsers);
 

}
const editStatus= (argv)=>{
  console.log("here at edit status function")
  const allUsers = deal.readFromJson();

  desiredElementIndex=allUsers.findIndex( 
    function checkTitle(task) {
    return task.title===argv.title;
  })
  // console.log("desired element index is")
  // console.log(desiredElementIndex)
  // console.log("argv.status is")
  // console.log(argv.status)
  allUsers[desiredElementIndex].status=true
  deal.writeToJson(allUsers);

}

const editTask= (argv)=>{
  console.log("here at edit task function")
  const allUsers = deal.readFromJson();

  desiredElementIndex=allUsers.findIndex( 
    function checkTitle(task) {
    return task.title===argv.title;
  })
  // console.log("desired element index is")
  // console.log(desiredElementIndex)
  // console.log("argv.status is")
  // console.log(argv.status)
  // allUsers[desiredElementIndex].status=argv.status
  // console.log("new status is")
  // console.log(allUsers[desiredElementIndex].status)

  if(argv.content!=null){
    allUsers[desiredElementIndex].content=argv.content
    console.log("new content is")
    console.log(allUsers[desiredElementIndex].content)
    
  deal.writeToJson(allUsers);


  }
  if(argv.date!=null){
    allUsers[desiredElementIndex].date=argv.date
    console.log("new due date is")
    console.log(allUsers[desiredElementIndex].date)
    deal.writeToJson(allUsers);

  }
 
  

}
module.exports = { add,show ,editStatus,deleteTask,editTask};
