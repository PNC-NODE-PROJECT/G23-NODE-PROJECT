const fs = require('fs');

const PATH ="tasks.json";

function load(){
    return JSON.parse(fs.readFileSync(PATH));
}
// ---------------------------------------Function Save Data---------------------------------------------
function save(data){
    fs.writeFileSync(PATH,JSON.stringify(data,null,4));
}
// ---------------------------------------Function GetAllQuizs------------------------------------------
function getAllQuizes(){
    return load();
}
// ---------------------------------------Function CreateNewQuiz--------------------------------------
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
// ------------------------------------------------Function Deletequizs--------------------------------------------------------
function deleleQuiz(id) {
    // load data
    let quzi = load();
    let index = quzi.findIndex(quiz => quiz.id === parseInt(id));
    if(index>=0){
        quzi.splice(index, 1);

    }
    //  Save data
    save(quzi);
    return true;
  }
// ------------------------------------------------Function UpdateQuiz------------------------------------------------
  function updateQuiz(item,id) {
    //  load data
    let quize = load();
    //  Update the task with good id to 'completed'
    let status = false
    let index = quize.findIndex(quize  => quize.id === parseInt(id));
    console.log(index);
    if(index>=0){
        quize[index].question = item.question;
        quize[index].answer_1 = item.answer_1;
        quize[index].answer_2 = item.answer_2;
        quize[index].answer_3 = item.answer_3;
        quize[index].answer_4 = item.answer_4;
        status = true
    }
    //  Save data
    save(quize);
    return status;
}
module.exports.createNewQuiz=createNewQuiz;
module.exports.getAllQuizes=getAllQuizes;
module.exports.deleleQuiz=deleleQuiz;
module.exports.updateQuiz = updateQuiz;