const fs = require('fs');

const PATH ="tasks.json";

function load(){
    return JSON.parse(fs.readFileSync(PATH));
}

function save(data){
    fs.writeFileSync(PATH,JSON.stringify(data,null,4));
}

function getAllQuizes(){
    return load();
}

function createNewQuiz(question,answers_1,answers_2,answers_3,answers_4){
    let quizs=load();
    let id =null;
    if (quizs.length > 0){
        id=quizs[quizs.length-1].id + 1;
    }else{
        id=1
    }
    let newquiz = {"id":id,"question":question,"answer_1":answers_1,"answer_2":answers_2,"answer_3":answers_3,"answer_4":answers_4}
    quizs.push(newquiz);
    save(quizs);
    
}

function deleleQuiz(id) {
    // TODO: load data
    let quzi = load();
    // TODO: Mission 4 - Remove the task with good id
    let index = quzi.findIndex(quiz => quiz.id === parseInt(id));
    if(index>=0){
        quzi.splice(index, 1);

    }
    // TODO: Save data
    save(quzi);
    return true;
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