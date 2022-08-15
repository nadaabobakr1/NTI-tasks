const { boolean } = require("yargs");
const yargs = require("yargs");
const User = require("./controller/user.controller");

yargs.command({
  command: "add",
  builder: {
 
    title: {
      type: "String",
      demandOption: true,
    },
    content: {
      type: "String",
      default: "no content yet",
    },
    date: {
      type: "String",
      demandOption: true,
    },
    status: {
      type: boolean,
      default:false,
      
    },
 
  },
  handler: (argv) => User.add(argv),
});


yargs.command({
  command: "showAll",
  handler: function () {
  console.log("show All")
  User.show()  
   },
});

yargs.command({
  command: "delete",
  builder:{
    title: {
      type: "String",
      demandOption: true,
    }
  },
  handler: function (argv) {
    console.log("delete");
    User.deleteTask(argv)

  },
});

yargs.command({
  command: "editStatus",
  builder:{
    title: {
      type: "String",
      demandOption: true
    }

  },

  handler: function (argv) {
    console.log("edit status")
    User.editStatus(argv)

  }
});

yargs.command({
  command: "editTask",
  builder:{
    title: {
      type: "String",
      demandOption: true,
    },
    content: {
      type: "String",
     
    },
    date: {
      type: "String",
      
    },
  
  },
  handler: function (argv) {
    console.log("edit Task")
    User.editTask(argv)

  }

})



yargs.argv;







// yargs.command({
//   command: "showSingle",
//   handler: function () {
//   console.log("show single");
//   },
// });





// 
// 

// yargs.argv;
