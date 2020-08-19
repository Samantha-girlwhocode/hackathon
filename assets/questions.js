var userPoints = 0
var questions = [
    {
        title: "What's your native language?",
        choices: ["English", "Spanish", "Portugese", "Italian", "French"]
        

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
        choices: ["Alphabet", "Syllabic Alphabets", "Semanto-phonetic writing systems"]
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
if (questions[0].choices === [0]) {
    userPoints ++
} else if (questions[0].choices === [1]) {
    userPoints + 2 
} else if (questions[0].choices === [1]) {
    userPoints + 3 
} else if (questions[0].choices === [1]) {
    userPoints + 4 
} else if (questions[0].choices === [1]) {
    userPoints + 5 
}

// then 
// UserPoints +1
// //if questions[0].choices === [1] 
// then 
// UserPoints +2
// //if questions[0].choices === [2] 
// then 
// UserPoints +3