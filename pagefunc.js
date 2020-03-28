let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreboard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = (Math.floor(Math.random() * 3));
    return choices[randomNumber];

}

function convert(letter) {
    if (letter == "r") return "Stone";
    if (letter == "p") return "Paper";
    return "Scissors";


}

function win(user, computer) {
    //console.log("USER WINS!!!");
    const smallUserword = "user".fontsize(3).sup();
    const smallCompword = "computer".fontsize(3).sup();
    const user_div = document.getElementById(user);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convert(user)}${smallUserword} beats ${convert(computer)}${smallCompword}. You Win!!`;
    user_div.classList.add('green-glow');
    setTimeout(() => user_div.classList.remove('green-glow'), 400);
}

//setTimeout(function () { console.log("hello") }, 3000);

function lose(user, computer) {
    // console.log("USER LOSE!!!");
    const smallUserword = "user".fontsize(3).sup();
    const smallCompword = "computer".fontsize(3).sup();
    const user_div = document.getElementById(user);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convert(user)}${smallUserword} loses to ${convert(computer)}${smallCompword}. You Lose :(`;
    user_div.classList.add('red-glow');
    setTimeout(() => user_div.classList.remove('red-glow'), 400);

}
function tie(user, computer) {
    //console.log("TIE!!!");
    const smallUserword = "user".fontsize(3).sup();
    const smallCompword = "computer".fontsize(3).sup();
    const user_div = document.getElementById(user);
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convert(user)}${smallUserword} Equals to ${convert(computer)}${smallCompword}. Draw...`;
    user_div.classList.add('grey-glow');
    setTimeout(() => user_div.classList.remove('grey-glow'), 400);
}
//console.log(getComputerChoice());

function game(userChoice) {
    // console.log("Hey you are" + userChoice);
    const computerChoice = getComputerChoice();
    console.log("User choice ->" + userChoice);
    console.log("Computer Choice ->" + computerChoice);

    switch (userChoice + computerChoice) {

        case "rs":
        case "pr":
        case "sp":
            // console.log("USER WINS!!!");
            win(userChoice, computerChoice);
            break;

        case "rp":
        case "ps":
        case "sr":
            //console.log("USER LOSES");
            lose(userChoice, computerChoice);
            break;

        case "rr":
        case "pp":
        case "ss":
            //console.log("TIE");
            tie(userChoice, computerChoice);
            break;
    }
}

function main() {


    rock_div.addEventListener('click', () => game("r"));

    paper_div.addEventListener('click', () => game("p"));

    scissor_div.addEventListener('click', () => game("s"));
}
main();
