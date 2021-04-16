


let path = require("path");
let fs = require("fs");
let inquirer = require("inquirer"); 
const { start } = require("repl");
let Manager = require("./lib/Manager");
let Intern = require("./lib/Intern");
let Engineer = require("./lib/Engineer");
const { addListener } = require("process");
let templatesDir = path.resolve(__dirname, "../templates");

let team = [];

startBuldingTeam();
function startBuldingTeam(){
  console.log("Pleas bulid your team?")
  inquirer.prompt([
    {
      type:'input',
      name:'ManagerName',
      message:'What is your team managers name?'
      
      
    },
    {
      type: 'input',
      name: "id",
      message:'What is your team id?'
    },
    {
      type: 'input',
      name: "email",
      message:'What is your team email?'
    },
    {
      type: 'input',
      name: "officeNumber",
      message:'What is your team Manager officeNumber?'
    }
  ]).then(response =>{
    console.log(response)
    let manager = new Manager(response.ManagerName,response.id,response.email,response.officeNumber) 
    team.push(manager)
    addMember()
  })} 
  function addMember(){
    inquirer.prompt([
      {
        type: "list",
        name: "members",
        message: "What type of team member do you want to add?",
        choices: ["intern","Engineer", " I dont want to add any one eles."]
      }
    ]).then(response =>{
      if(response.members==="intern"){
        addintern()
      }
      else if(response.members==="Engineer"){
        addEngineer()
      }
      else{
        addcreatMyTeam()
      }
    })

    
  }
  function addintern(){
    inquirer.prompt([
      {
        type:'input',
        name:'name',
        message:'Who is your Intern?'
        
        
      },
      {
        type: 'input',
        name: "id",
        message:'What is your interns id?'
      },
      {
        type: 'input',
        name: "email",
        message:'What is your interns email?'
      },
      {
        type: 'input',
        name: "schoolName",
        message:'What is your interns school name?'
      }
    ]).then(response => {
      let intern = new Intern(response.name,response.id,response.email,response.schoolName) 
    team.push(intern)
    addMember()
    }) 

    
  }
  function addEngineer(){
    inquirer.prompt([
      {
        type:'input',
        name:'name',
        message:'Who is your Engineer?'
        
        
      },
      {
        type: 'input',
        name: "id",
        message:'What is your Engineer id?'
      },
      {
        type: 'input',
        name: "email",
        message:'What is your Engineer email?'
      },
      {
        type: 'input',
        name: "Engineersgitgub",
        message:'What is your Engineer github?'
      }
    ]).then(response => {
      let engineer = new Engineer(response.name,response.id,response.email,response.Engineersgitgub) 
    team.push(engineer)
    addMember()
    
  })
}
  function addcreatMyTeam(){
    console.log(team)
  }
