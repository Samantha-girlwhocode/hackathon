var userPoints = 0

var englishCounter = 0
var spanishCounter = 0
var frenchCounter = 0
var italianCounter = 0
var mandarinCounter = 0
var japaneseCounter = 0

var questions = [
    {
        title: "What's your native language?",
        choices: ["English", "Spanish", "French", "Italian", "Mandarin"]
    },
    {
        title: "Do you want to learn an easy or more challenging language?",
        choices: ["Easy", "Medium", "Hard"]
    },
    {
        title: "How much time do you have to learn it?",
        choices: ["Months", "Years", "My Whole Life"]
    },
    {
        title: "Which of these do you prefer in your language?",
        choices: ["Latin Alphabet", "Syllabic Alphabets", "Semanto-phonetic writing systems"]
    },
    {
        title: "Do you prefer a language that is more universal or more uncommon?",
        choices: [ "More uncommon", "A good in-between", "More universal"]
    }
];
questions.forEach(myFunction);

function myFunction(item,index) { 
    document.getElementById("results")
}

console.log(questions);

// on click button function 

//whatever you click becomes 



if (questions[0].choices === [0]) {
    userPoints ++
} else if (questions[0].choices === [1]) {
    userPoints + 2 
} else if (questions[0].choices === [2]) {
    userPoints + 3 
} else if (questions[0].choices === [3]) {
    userPoints + 4 
} else if (questions[0].choices === [4]) {
    userPoints + 5 
}
console.log(userPoints)
