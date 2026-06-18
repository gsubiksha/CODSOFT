const quiz=[
{
question:"HTML stands for?",
options:[
"Hyper Text Markup Language",
"High Text Machine Language",
"Hyper Tool Mark Language"
],
answer:0
},

{
question:"CSS is used for?",
options:[
"Styling",
"Coding",
"Database"
],
answer:0
},

{
question:"JavaScript is used for?",
options:[
"Interaction",
"Drawing",
"Storage"
],
answer:0
}
];

let current=0;
let score=0;

function loadQuestion(){

document.getElementById("question").innerHTML=
quiz[current].question;

document.getElementById("btn0").innerHTML=
quiz[current].options[0];

document.getElementById("btn1").innerHTML=
quiz[current].options[1];

document.getElementById("btn2").innerHTML=
quiz[current].options[2];
}

function checkAnswer(i){

if(i===quiz[current].answer){
score++;
}

document.getElementById("score").innerHTML=
"Score : "+score;
}

function nextQuestion(){

current++;

if(current<quiz.length){
loadQuestion();
}
else{
document.getElementById("question").innerHTML=
"Quiz Completed";
}
}

loadQuestion();