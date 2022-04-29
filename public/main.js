let score = document.querySelector('#score');
let nextPage=document.getElementById("next");
let submits=document.getElementById("submits");
let wrapper=document.getElementById("wrapper");
let editQuizs=document.getElementById("editQuizs");
let hidethequestion=document.getElementById("allScore");
let numbers=document.querySelector("#showscores");
let backto=document.querySelector("#backtos");
let hideThpquizcreat=document.querySelector(".question");


hidethequestion.style.display="none";
nextPage.style.display="none";
numbers.style.display="none";
backto.style.display="none";
hideThpquizcreat.style.display="none"

function next(){
  // get value from forms iniput name and email password
  let nameInput = document.querySelector('#name').value;
  // let emailInput = document.querySelector('#mail').value;
  let passwordInput = document.querySelector('#password').value;
  
  // check if inputemail wrong
  if (nameInput.length === 0 || passwordInput.length === 0 ){
    alert("Sorry You Missing Input...!");
  }
  else{
    editQuizs.style.display="none";
  nextPage.style.display="block";
  wrapper.style.display="none";
  };
  getbackenow.style.display="none"
  hideThpquizcreat.style.display="none";
  neashower.style.display="none"
};

// submits.style.display="none";
// MAIN----------------------------------------------------
let buttonNext = document.getElementById('btnNext');
buttonNext.addEventListener("click",next);

//  come to play the quiz when you click on next button
let getQuiz = document.getElementById("play-quiz");
getQuiz.style.display="none";

function playQuiz(e){
  e.preventDefault()
  hidethequestion.style.display="block";
  editQuizs.style.display="none";
  container.style.display="none";
  hideThpquizcreat.style.display="none"
};
let btnShow= document.getElementById("btn-quiz");
btnShow.addEventListener("click",playQuiz);
getQuiz.style.display="none";
let container=document.querySelector(".container")


function edit(e){
  e.preventDefault();
  getQuiz.style.display="block";
  editQuizs.style.display="block";
  container.style.display="none";
  hidethequestion.style.display="none";
  getbackenow.style.display="block";
  hideThpquizcreat.style.display="none"
  };
// Getting Id and class from HTMl
  let btnHide= document.getElementById("btn-edit-quiz");
  btnHide.addEventListener("click",edit);
  let quest=document.querySelector(".optional");
  let tion1=document.querySelector("#tion1");
  let tion2=document.querySelector("#tion2");
  let tion3=document.querySelector("#tion3");
  let tion4 = document.querySelector("#tion4");

  let firsQuestion=0;
  var ObjectDelete=[];
  // engryment id or name about the radio in answers and Id or name
  squestionsId=0;
  questionname=0;
  // Function about how to make the questions in browswer
  function maker_the_question(){
    // add the question to object and desplay to broswer-----------
    let object=[{Question:quest.value,answers1:tion1.value,answers2:tion2.value,answers3:tion3.value,answers4:tion4.value}];
    localStorage.setItem("Heng",JSON.stringify( object));
    for (let value of object){
      // Creating the form to show about questions------------------------------
      let create_question=document.querySelector(".biganswer");
      let div =document.createElement("div");
      div.classList="make_question";
      create_question.appendChild(div);
      let keepTheform=document.createElement("div");
      keepTheform.classList="flexDelete";
      create_question.appendChild(keepTheform);
      let bigquestiton=document.createElement("form");
      bigquestiton.className="title_question";
      let create_deletes=document.createElement("button");
      create_deletes.classList="delectts";
      create_deletes.id="delectts"
      keepTheform.appendChild(bigquestiton);
      keepTheform.appendChild(create_deletes);
      bigquestiton.textContent=quest.value;
      div.appendChild(keepTheform);
      create_deletes.textContent="Delete";
      // Show about question1 --------------------===================
      let question1=document.createElement("input");
      let label=document.createElement("label");
      label.classList="allanswerses"
      question1.type="radio";
      question1.name=questionname.toString();
      question1.id=squestionsId.toString();
      question1.classList="quest1";
      label.textContent=tion1.value;
      div.appendChild(question1);
      div.appendChild(label);
      
      
      // Show about  question2----------------------====================
      let question2=document.createElement("input");
      let labels2=document.createElement("label");
      question2.type="radio";
      question2.name=questionname.toString();
      question2.id=squestionsId.toString();
      question2.classList="quest1";
      labels2.textContent=tion2.value;
      div.appendChild(question2);
      div.appendChild(labels2)
      
      
    // Show about question 3--------------===================
      let question3=document.createElement("input");
      question3.type="radio";
      question3.name=questionname.toString();
      question3.id=squestionsId.toString();
      question3.classList="quest1";
      let labeles3=document.createElement("label");
      labeles3.textContent=tion3.value;
      div.appendChild(question3);
      div.appendChild(labeles3)
      
      
     
      // Reloat the name input when we aready input===================
      quest.value="";
      tion1.value="";
      tion2.value="";
      tion3.value="";
      tion4.value="";
      // console.log(create_question);
    };
    questionname+=1;
    squestionsId+=1;
    // loop on for for delect questions===============
    let forms = document.querySelectorAll(".delectts");
    for (let form of forms){
      form.addEventListener("click",deleteForm);
    }
    hideThpquizcreat.style.display="block";
  };
// Show only new quiz for user creaters ===============
let backgotoback=document.querySelector(".backAndBack")
let newshower=document.querySelector(".backAndBack");
let neashower=document.querySelector(".backAndshownewquiz");
  function newQuiz (){
    editQuizs.style.display="block";
    newshower.style.display="none";
    neashower.style.display="none";
    backgotoback.style.display="block";
  }
  let newQuizsss =document.querySelector(".backAndshownewquiz");
  newQuizsss.addEventListener("click",newQuiz)
  // button click make the question.==========
  let creaters=document.querySelector(".addtogo");
  creaters.addEventListener("click",maker_the_question);
  // function for deleting the question from make
  function deleteForm(e){
    e.target.parentElement.parentElement.remove()
  }
  

  // Will show only quiz to create from User by the quiz 
  let takerAdd=document.querySelector("#editQuizs");
  let showers=document.querySelector(".question");
  let helpshow=document.querySelector(".backAndBack");
  let showNewquiz=document.querySelector(".backAndshownewquiz");
  function showOnlyQuizMake(){
    takerAdd.style.display="none";
    showers.style.display="block";
    helpshow.style.display="none";
    showNewquiz.style.display="block";
  }
  let showOnlyQuiz=document.querySelector(".nexstst");
  showOnlyQuiz.addEventListener("click",showOnlyQuizMake);


  function getback(){
    container.style.display="block";
    takerAdd.style.display="none";
    getbackenow.style.display="none"
    hideThpquizcreat.style.display="none"
  }
  let getbackenow= document.querySelector(".backs")
  getbackenow.addEventListener("click",getback);

  // Object for geting score for the question=======================
  
  let arrQ = [
    {id:"ques1",question:"1.Find the Verb past simple in the box correct verb.",
    chooseAnswer:["Weak-up","get-up late","Wrote","Speaking"],
    correctAnswer: "Wrote"},

    {id:"ques2",question:"2.Which one is the correct sentences in the box?",
    chooseAnswer:["They run on me","She goes to school","Somthing more","You try me"],
    correctAnswer:"She goes to school"},

    {id:"ques3",question:"3.How.........you make it when you get home?.",
    chooseAnswer:["do","working","practice","Money book"],
    correctAnswer:"do"},
  ];

  // function and loop geting score----------------------------
  function submitTask(){
    let answers = document.querySelectorAll(".answers");
    for (let answer of answers){
      if (answer.checked){
        arrayOfAnswer.push(answer.value);
        // console.log(arrayOfAnswer)
      };
    };
    checkAnswer ()
  }
  let arrayOfAnswer = [];
  scorechang=0;
  let changscore=document.querySelectorAll("#score");
  changscore.textContent=changscore;
  function checkAnswer (){
    let score = 0;
  for (let i in arrQ){
    if (arrayOfAnswer[i] === arrQ[i].correctAnswer){
      score += 20;
    }
  };
  let getscore=document.querySelector("#scores");
  getscore.textContent=score;
};
document.querySelector("#btnSubmit").addEventListener("click",submitTask);
let showonlyscores=document.querySelector("#showscores");

function backstoquiz(){
  container.style.display="block";
  showonlyscores.style.display="none";
  backto.style.display="none"
  
}
let backgoquiz=document.querySelector("#backtos");
backgoquiz.addEventListener("click",backstoquiz);

// Small broswer will show when we submit about question======>
function showonlyscore(){
  hidethequestion.style.display="none";
  showonlyscores.style.display="block";
  container.style.display="none";
  backto.style.display="block"
};
let willseeonlyscore=document.querySelector("#btnSubmit");
willseeonlyscore.addEventListener("click",showonlyscore);

// get data from server 
// const dom_display_container_1 = document.getElementById("display-container-1");
function appear_question(datas){
  const dom_display_container = document.getElementById("display-container");
  for(let i=0; i<datas.length; i++){
    data=datas[i];
    console.log(datas)
    let card = document.createElement("div");
    card.className="card";
    let answer_container = document.createElement("div");
    answer_container.className="answer-container";
    
    let question = document.createElement("spam");
    question.className="question";
    question.textContent=data.title;
    card.appendChild(question);
    card.appendChild(answer_container);


    let answer_1 = document.createElement("p");
    answer_1.className="answers";
    answer_1.textContent=data.Answer1;

    let answer_2 = document.createElement("p");
    answer_2.className="answers";
    answer_2.textContent=data.Answer2;

    let answer_3 = document.createElement("p");
    answer_3.className="answers";
    answer_3.textContent=data.Answer3;

    answer_container.appendChild(answer_1);
    answer_container.appendChild(answer_2);
    answer_container.appendChild(answer_3);

    dom_display_container.appendChild(card);
       
    // dom_display_container_1.appendChild(card);
    
  }
}

function getAllData() {
  axios.get("/api/quiz").then((res)=>{
    appear_question(res.data);
    console.log(res.data);
  })
}
getAllData();
