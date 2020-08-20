
//if english is native
function languageDisplay() {
    if (questions[0].choices === [0]) {
        spanishCounter++, frenchCounter++, italianCounter += 2, mandarinCounter += 3
        //easy, medium, hard having picked english as native
        if (questions[1].choices === [0]) {
            spanishCounter++, frenchCounter++
        } else if (questions[1].choices === [1]) {
            italianCounter++
        } else if (questions[1].choices === [2]) {
            mandarinCounter++
        };
        //time to learn having picked english as native
        if (questions[2].choices === [0]) {
            spanishCounter++, frenchCounter++
        } else if (questions[2].choices === [1]) {
            italianCounter++
        } else if (questions[2].choices === [2]) {
            mandarinCounter++
        };
    }//if spanish is native 
    else if (questions[0].choices === [1]) {
        englishCounter += 2, frenchCounter++, italianCounter++, mandarinCounter += 3
        //easy, medium, hard having picked spanish as native
        if (questions[1].choices === [0]) {
            italianCounter++, frenchCounter++
        } else if (questions[1].choices === [1]) {
            englishCounter++
        } else if (questions[1].choices === [2]) {
            mandarinCounter++
        } console.log(questions + englishCounter + questions.choices)
        //time to learn having picked spanish as native
        if (questions[2].choices === [0]) {
            italianCounter++, frenchCounter++
        } else if (questions[2].choices === [1]) {
            englishCounter++
        } else if (questions[2].choices === [2]) {
            mandarinCounter++
        }
    } //if french is native 
    else if (questions[0].choices === [2]) {
        spanishCounter++, englishCounter += 2, italianCounter++, mandarinCounter += 3
        //easy, medium, hard having picked french as native
        if (questions[1].choices === [0]) {
            spanishCounter++, italianCounter++
        } else if (questions[1].choices === [1]) {
            englishCounter++
        } else if (questions[1].choices === [2]) {
            mandarinCounter++
        }
        //time to learn having picked french as native 
        if (questions[2].choices === [0]) {
            spanishCounter++, italianCounter++
        } else if (questions[2].choices === [1]) {
            englishCounter++
        } else if (questions[2].choices === [2]) {
            mandarinCounter++
        }
    } //if italian is native 
    else if (questions[0].choices === [3]) {
        spanishCounter++, frenchCounter++, englishCounter += 2, mandarinCounter += 3
        //easy, medium, hard having picked italian as native
        if (questions[1].choices === [0]) {
            spanishCounter++, frenchCounter++
        } else if (questions[1].choices === [1]) {
            englishCounter++
        } else if (questions[1].choices === [2]) {
            mandarinCounter++
        }
        //time to learn having picked italian as native
        if (questions[2].choices === [0]) {
            spanishCounter++, frenchCounter++
        } else if (questions[2].choices === [1]) {
            englishCounter++
        } else if (questions[2].choices === [2]) {
            mandarinCounter++
        }
    } //if mandarin is native 
    else if (questions[0].choices === [4]) {
        spanishCounter++, frenchCounter++, italianCounter++, englishCounter += 3
        //easy, medium, hard having picked mandarin as native
        if (questions[1].choices === [0]) {
            spanishCounter++, frenchCounter++
        } else if (questions[1].choices === [1]) {
            italianCounter++
        } else if (questions[1].choices === [2]) {
            englishCounter++
        }
        //time to learn having picked mandarin as native
        if (questions[2].choices === [0]) {
            spanishCounter++, frenchCounter++
        } else if (questions[2].choices === [1]) {
            italianCounter++
        } else if (questions[2].choices === [2]) {
            englishCounter++
        }
    }
    //alphabets
    if (questions[3].choices === [0]) {
        spanishCounter += 5, frenchCounter += 5, italianCounter += 5, englishCounter += 5
    } else if (questions[3].choices === [1]) {
        japaneseCounter += 20
    } else if (questions[3].choices === [2]) {
        mandarinCounter += 5
    }
}
    function showCounterResults() {
        if (englishCounter > spanishCounter && englishCounter > frenchCounter && englishCounter > italianCounter && englishCounter > mandarinCounter) {
            window.alert("You get English!");
        } else if (spanishCounter > englishCounter && spanishCounter > frenchCounter && spanishCounter > italianCounter && spanishCounter > mandarinCounter) {
            window.alert("You get Spanish!");
        } else if (frenchCounter > spanishCounter && frenchCounter > englishCounter && frenchCounter > italianCounter && frenchCounter > mandarinCounter) {
            window.alert("You get French!");
        } else if (italianCounter > spanishCounter && italianCounter > frenchCounter && italianCounter > englishCounter && italianCounter > mandarinCounter) {
            window.alert("You get Italian!");
        } else if (mandarinCounter > spanishCounter && mandarinCounter > frenchCounter && mandarinCounter > italianCounter && mandarinCounter > englishCounter) {
            window.alert("You get Mandarin!");
        }
    }



    function showResults() {

        if (userPoints < 5) {
            window.alert("You get English!");
        } else if (userPoints > 5 && userPoints < 10) {
            window.alert("You get Spanish!");
        } else if (userPoints > 10 && userPoints < 15) {
            window.alert("You get French!");
        } else if (userPoints > 15 && userPoints < 20) {
            window.alert("You get Italian!");
        } else {
            window.alert("You get Mandarin!");
        }
        //
    }

