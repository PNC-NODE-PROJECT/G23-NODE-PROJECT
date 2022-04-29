const fs = require('fs');

const PATH ="tasks.json";

function load(){
    return JSON.parse(fs.readFileSync(PATH));
}

function save(data){
    fs.writeFileSync(PATH,JSON.stringify(data));
}

function getAllQuizes(){
    return load();
}

function createNewQuiz(question){
    let quizs=load();
    let id =null;
    if (quizs.length > 0){
        id=quizs[quizs.length-1].id + 1;
    }else{
        id=1
    }
    let newquiz = {"id":id,"question":question.question,"answer":question.answer,"correction":question.correction}
    quizs.push(newquiz);
    save(quizs);
    return true;
}

function deleleQuiz(id) {
    // TODO: load data
    let quzi = load();
    // TODO: Mission 4 - Remove the task with good id
    let index = quzi.findIndex(quzi => quzi.id === parseInt(id));
    quzi.splice(index, 1);
    // TODO: Save data
    save(quzi);
  }
  function updateQuiz(id) {
    // TODO: load data
    let quize = load();
    // TODO: Mission 5 - Update the task with good id to 'completed'
    let index = quize.findIndex(quize  => quize.id === parseInt(id));
    quize [index].completed = true;
    // TODO: Save data
    save(quize);
  }

module.exports.createNewQuiz=createNewQuiz;
module.exports.getAllQuizes=getAllQuizes;
module.exports.deleleQuiz=deleleQuiz;
module.exports.updateQuiz = updateQuiz;