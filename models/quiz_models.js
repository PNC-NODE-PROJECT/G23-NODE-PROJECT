const fs = require('fs');

const PATH ="tasks.json";

function load(){
    return JSON.parse(fs.readFileSync(PATH))
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

module.exports.createNewQuiz=createNewQuiz;
module.exports.getAllQuizes=getAllQuizes;