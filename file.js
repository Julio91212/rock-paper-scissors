const rps = document.querySelectorAll('button');
        const rock = "rock";
        const paper = "paper";
        const scissors = "scissors";
        const div = document.querySelector('#results');
        let x = 0
        let y = 0
        // define cpu's random move
        function computerPlay() {
            let move = (Math.random() <= 0.333) ? rock :
                (Math.random() <= .667) ? paper :
                scissors;
            // share cpu's move with player
            let script = (move == rock) ? div.textContent ="CPU has selected rock." :
                (move == paper) ? div.textContent ="CPU has selected paper.":
                div.textContent ="CPU has selected scissors.";
            return move
        }
        // Allow player to make selection
        // function playerChoice() {
        //     let choice = (rps.target.className)
        //     // r.addEventListener('click', () => choice(rock))
        //     // p.addEventListener('click', () => choice(paper))
        //     // s.addEventListener('click', () => choice(scissors))
        //     let confirm = (choice == rock) ? div.textContent="You have selected rock." :
        //         (choice == paper) ? div.textContent ="You have selected paper." :
        //         (choice == scissors) ? div.textContent ="You have selected scissors." :
        //         div.textContent ="Please come back when you learn how to play.";
        //     round()
        // }
        function disableButtons() {
            rps.forEach(button => {button.disabled = true
        })}
        
        // Set up a round of r-p-s
        function round(playerSelection) {
            let compSelection = computerPlay()
            let match = playerSelection + "-"+compSelection;
            console.log(match)
            let z = (match == "rock-rock") ? (++x, ++y, div.textContent="You tied.") :
                (match == "rock-paper") ? (++y, div.textContent="Paper beats rock, you lose.") : 
                (match == "rock-scissors") ? (++x, div.textContent="Rock beats scissors, you win!") :
                (match == "paper-rock") ? (++x, div.textContent="Paper beats rock, you win!") :
                (match == "paper-scissors") ? (++y, div.textContent="Scissors beats paper, you lose.") :
                (match == "paper-paper") ? (++x, ++y, div.textContent="You tied.") :
                (match == "scissors-rock") ? (++y, div.textContent="Rock beats scissors, you lose.") :
                (match == "scissors-paper") ? (++x, div.textContent="Scissors beats paper, you win!") :
                (match == "scissors-scissors") ? (++x, ++y, div.textContent="You tied.") :
                "error";
            console.log(z)
            let cut = z.slice(-2)
            let end = cut.charAt(0)
            let score = "Score"+" "+x+"-"+y;
            let result = (end == "d" && x<5 && y<5) ? (div.textContent=((z)+" "+(score))) : 
            (end == "e" && x<5 && y<5) ? (div.textContent=(z+" "+score)) :
            (end == "n" && x<5 && y<5) ? (div.textContent=(z+" "+score)) :
            (end == "d" && x==5 && y==5) ? (div.textContent=((z)+" "+(score))) :
            (x==5) ? (div.textContent="Congratulations! You won the game! Final score "+x+"-"+y, disableButtons()) :
            (y==5) ? (div.textContent="Oh no! You lost the game. Final score "+x+"-"+y, disableButtons()) :
            "error" ;
        }
        rps.forEach(button => button.addEventListener("click", function() {
            round(button.className)}))