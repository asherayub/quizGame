function start() {
    // to change to content on click
    document.querySelector(".main").classList.add("d-none");
    document.querySelector(".questions").classList.remove("d-none");



    // change innerHTML of the questions and options
    document.querySelector(".start").addEventListener("click", function(){
        let questionNumber = "question" + 1;
        alert(questionNumber);
        document.querySelector(".question-statement").innerHTML = questionNumber.question;
        document.querySelector(".opt1").innerHTML = questionNumber.opt1;
        document.querySelector(".opt2").innerHTML = questionNumber.opt2;
        document.querySelector(".opt3").innerHTML = questionNumber.opt3;
        document.querySelector(".opt4").innerHTML = questionNumber.opt4;

    });

    // go to next question
    

}



function questions(question, opt1, opt2, opt3, opt4) {
    this.question = question;
    this.opt1 = opt1;
    this.opt2 = opt2;
    this.opt3 = opt3;
    this.opt4 = opt4;
}
var question1 = new questions("1. What is the extension of JavaScript files", "(a) .js", "(b) .java", "(c) .cpp", "(d) .swift");
var question2 = new questions("2. Javascript is an ___ language?", "(a) Object Oriented", "(b) Object Based", "(c) Procedural", "(d) None of above");
var question3 = new questions("3. Which keyword is used to define variables?", "(a) var", "(b) let", "(c) both a and b", "(d) None of above");
var question4 = new questions("Which of the following method is used to access HTML element in JS?", "(a) getElementById", "(b) getElementByClassName", "(c) both a and b", "(d) None of above");
var question5 = new questions("How can a data type be declared to be a constant?", "(a) const", "(b) var", "(c) let", "(d) constant");