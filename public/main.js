let path = "http://localhost:80/quizs";



function refreshDom(quizzes){
    console.log(quizzes);
    let list =  document.querySelector('.question');
    let question = quizzes[0].question;
    let title_dom = document.createElement("p");
    title_dom.textContent = question;
    list.appendChild(title_dom);
}
function getAllQuizzes() {
    axios.get(path)
    .then(function (response) {
    refreshDom(response.data);
    })
}
  
getAllQuizzes();
// let  quize = {"id":2,"question":"me","answer":{"a":"d","b":"no"},"completed":false};
// axios.post(path,quize);
let willseeonlyscore=document.querySelector("#btnSubmit");
// willseeonlyscore.addEventListener("click",showonlyscore);
