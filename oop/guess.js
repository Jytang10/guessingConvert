

class GuessObj {
    constructor(){
        this.secretNumber = null;
        this.guess_start = this.guess_start.bind(this);
        this.attachHandlers = this.attachHandlers.bind(this);
        this.handleGuess = this.handleGuess.bind(this);
        this.randomNumGenerator = new RandomGenerator(1,10);
        this.inputCheckObj = new Input($("#userGuess"));
        this.inputCheckObj.setRange(1,10);
    }
    guess_start(){
        this.randomNumGenerator.generate();
        this.secretNumber = this.randomNumGenerator.getNum();
        this.attachHandlers();
        console.log(this.secretNumber);
    }
    attachHandlers(){
        $("#submitGuess").click( this.handleGuess );
        $("#userGuess").focus( this.clearGuess );
    }
    handleGuess(){
        if(this.inputCheckObj.test().result === false){
            this.displayResult('invalid range. Must be between 1 and 10');
            return;
        }
        this.userGuess = parseInt( $("#userGuess").val());
        if(this.userGuess == this.secretNumber){
            this.displayResult('you got it!');
        } else if (this.userGuess < this.secretNumber){
            this.displayResult('too low!');
        } else if (this.userGuess > this.secretNumber){
            this.displayResult('too high!');
        }
    }
    clearGuess(){
        $("#userGuess").val('');
    }
    displayResult(message){
        $("#display").text( message );
    }
}

