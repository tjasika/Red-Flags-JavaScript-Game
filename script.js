const questions = [
    //red flags
    {quote: `"I'm just not ready for a relationship rn"`, redflag: true},
    {quote: `"I have to focus on myself"`, redflag: true},
    {quote: `"I've been really busy"`, redflag: true},
    {quote: `"She's just a friend"`, redflag: true},
    {quote: `"You're overreacting"`, redflag: true},
    {quote: `"Why are you so clingy?"`, redflag: true},
    {quote: `"Why are you making such a big deal out of this?"`, redflag: true},
    {quote: `"I'm not really good at relationships"`, redflag: true},
    {quote: `"You deserve better"`, redflag: true},
    {quote: `"Why are you still yapping?"`, redflag: true},
    {quote: `"You're too sensitive"`, redflag: true},
    {quote: `"I'm not looking for anything serious rn"`, redflag: true},
    {quote: `"All my exes are crazy"`, redflag: true},
    {quote: `"You're just a mess of emotions"`, redflag: true},
    {quote: `"This closeness is just not what I need right now"`, redflag: true},
    {quote: `"You always want to argue"`, redflag: true},
    {quote: `"You're the only girl I talk to, I swear"`, redflag: true},
    {quote: `"I'm not like other guys"`, redflag: true},
    {quote: `"I don't know what you want me to say"`, redflag: true},
    {quote: `"When I said I love you, I didn’t really mean it — It was just in the moment."`, redflag: true},
    {quote: `"I don't really feel anything when I kiss you"`, redflag: true},
    {quote: `"I didn’t think you’d take it so seriously"`, redflag: true},
    {quote: `"I said I <i>hoped</i> we’d last — I never said we would"`, redflag: true},
    {quote: `"I like you... I just don’t want to define anything"`, redflag: true},
    {quote: `"I meant it <i>in the moment</i>"`, redflag: true},
    {quote: `"You expect me to go blind every time a girl walks by?"`, redflag: true},
    {quote: `"You're crazy"`, redflag: true},
    {quote: `"We're just...hanging out"`, redflag: true},
    {quote: `"You're not like other girls"`, redflag: true},
    {quote: `"It's hard for me to talk about my feelings"`, redflag: true},
    {quote: `"What, I can't make a joke now?"`, redflag: true},
    {quote: `"I'm not mean, I'm just being honest"`, redflag: true},
    {quote: `"Believe whatever you want"`, redflag: true},

    //green flags
    {quote: `"I’m really into open communication."`, redflag: false},
    {quote: `"I respect your boundaries"`, redflag: false},
    {quote: `"I want us to be honest with each other."`, redflag: false},
    {quote: `"I’m excited to get to know you better"`, redflag: false},
    {quote: `"How do you feel about that?"`, redflag: false},
    {quote: `"I’m looking for a meaningful connection."`, redflag: false},
    {quote: `"I believe in teamwork in a relationship"`, redflag: false},
    {quote: `"I care about your happiness"`, redflag: false},
    {quote: `"Let’s build this together"`, redflag: false},
    {quote: `"Your feelings matter to me"`, redflag: false},
    {quote: `"I’m here when you need me"`, redflag: false},
    {quote: `"I want us both to feel comfortable"`, redflag: false},
    {quote: `"Let's work through issues together"`, redflag: false},
    {quote: `"Let’s talk about how we both feel — I’m listening."`, redflag: false},
    {quote: `"You never have to earn my attention. It’s already yours"`, redflag: false},
    {quote: `"You’re not ‘too much’ — you’re honest, and I appreciate that"`, redflag: false},
    {quote: `"If something’s bothering you, I want to know. We’re a team"`, redflag: false},
    {quote: `"You deserve consistency, and that’s what I’m giving."`, redflag: false},
    {quote: `"I want to make you feel loved, not confused."`, redflag: false},
    {quote: `"I'm proud of you"`, redflag: false},
    {quote: `"We’re on the same team"`, redflag: false},
    {quote: `"I’ll always choose communication over silence"`, redflag: false},
    {quote: `"You’re not just someone I’m dating. You’re someone I value"`, redflag: false},
    {quote: `"I love seeing you happy — your joy matters to me."`, redflag: false},
    {quote: `"You never have to question how I feel about you"`, redflag: false},
    {quote: `"Let me know what makes you feel safe — I want to get it right."`, redflag: false},
    {quote: `"I love how you think. Tell me more."`, redflag: false},
    {quote: `"I’m not perfect, but I’m willing to work through things together."`, redflag: false},
    {quote: `"I’m proud to be with you. I want people to know we’re together"`, redflag: false},
    {quote: `"Your boundaries are valid — thanks for trusting me with them"`, redflag: false},
    {quote: `"I'm not afraid of the hard conversations. They're part of real connection"`, redflag: false},
    {quote: `"I'm here for the good days and the hard ones — not just when it's easy."`, redflag: false},
    {quote: `"I admire how passionate you are — it makes me want to support you even more"`, redflag: false}
];

const positiveFeedbacks = [
    `Your therapist would be proud`,
    `You've clearly been through some character development`,
    `Protecting your peace like a pro`,
    `A queen never settles for less`,
    `The group chat would agree`,
    `Icon behaviour`,
    `We don't chase, we choose`,
    `You didn’t fall for it — growth!`,
    `Power move!`,
    `You ate`,
    `Correct and hot`,
    `Stunning decision`
];

const negativeFeedbacks = [
    `Girl, not <i>again</i>...`,
    `You just gave him a second chance...`,
    `We need to have a talk`,
    `And you <i>believed</i> that?!`,
    `You're not wrong… you're just in denial`,
    `He <i>literally</i> said that to six other women this week`,
    `And now you’re explaining basic empathy... again`,
    `And just like that, you're writing him a paragraph`,
    `I thought we were past that`,
    `Honey, no...`,
    `The math is not mathing`
];

const quoteElement = document.getElementById('quote');
const feedback = document.getElementById('feedback');

const redButton = document.getElementById('red-flag');
const greenButton = document.getElementById('green-flag');
const nextButton = document.getElementById('next-btn');
const restartButton = document.querySelector('.restart-btn');

const roundInfo = document.querySelector('.round-info');
const scoreInfo = document.querySelector('.score-info');

let currentIndex = 0;
let score = 0;
let mistakes = 0;
let currentQuestion = null;
let selectedQuotes = [];

let timerInterval;
let timeLeft = 100;
let timerBar = document.getElementById('progress-fill');

startTimer = (duration = 5) => {
    clearInterval(timerInterval);
    timeLeft = 100;
    const intervalTime = 100;
    const decrement = 100 / (duration * 1000 / intervalTime);

    timerInterval = setInterval(() => {
        timeLeft -= decrement;
        if(timeLeft <= 0) {
            timeLeft = 0;
            clearInterval(timerInterval);
            handleTimeOut();
        }
        timerBar.style.width = `${timeLeft}%`;
    }, intervalTime)
}

handleTimeOut = () => {
    mistakes++;
    const lives = document.querySelectorAll(".dot");
    lives[mistakes - 1].style.opacity = 0.5;
    redButton.disabled = true;
    greenButton.disabled = true;
    nextButton.style.display = 'inline-block';
    quoteElement.innerHTML = `Time Out!`;
}

shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) { 
    const j = Math.floor(Math.random() * (i + 1));         
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}
}

start = () => {
    shuffle(questions);
    selectedQuotes = questions.slice(0, 10);
    currentIndex = 0;
    score = 0;
    mistakes = 0;
    nextButton.style.display = "none";
    restartButton.style.display = "none";
    showQuestion();
}

showQuestion = () => {
    if(currentIndex >= 10 || mistakes >= 4) {
        endGame();
        return;
    }
    currentQuestion = selectedQuotes[currentIndex];
    let round = currentIndex + 1;
    roundInfo.innerHTML = `Round ${round} of 10`;
    scoreInfo.innerHTML = `Score: ${score} / 10`;
    quoteElement.innerHTML = currentQuestion.quote;

    quoteElement.classList.remove('incorrect');
    quoteElement.classList.remove('correct');
    redButton.disabled = false;
    greenButton.disabled = false;
    redButton.style.display = "inline-block";
    greenButton.style.display = "inline-block"
    feedback.style.display = "none";
    nextButton.style.display = "none";
    startTimer();
}

endGame = () => {
    if(mistakes >= 4) {
       //add better styling!
        quoteElement.innerHTML = `You lose! <br> 4 flags later and you're still saying 'he's actually a really good guy'.`;
    } else {
        if(score == 10) {
            quoteElement.innerHTML = `10/10! <br> Not a single red flag made it past you. Iconic.`
        } else {
            quoteElement.innerHTML = `You win! <br> You scored ${score} / 10`;
        }
        
    }
    nextButton.style.display = "none";
    redButton.style.display = "none";
    greenButton.style.display = "none";
    scoreInfo.innerHTML = `Score: ${score} / 10`;
    restartButton.style.display = "inline-block";
}

checkAnswer = (isRed) => {
    clearInterval(timerInterval);
    redButton.disabled = true;
    greenButton.disabled = true;
    const correct = (currentQuestion.redflag == isRed);
    if(correct) {
        score++;
        let index = Math.floor(Math.random() * positiveFeedbacks.length);
        feedback.innerHTML = positiveFeedbacks[index];
        quoteElement.classList.add('correct');
        quoteElement.innerHTML = `Correct!`;
    } else {
        mistakes++;
        const lives = document.querySelectorAll(".dot");
        lives[mistakes - 1].style.opacity = 0.5;
        let index = Math.floor(Math.random() * negativeFeedbacks.length);
        feedback.innerHTML = negativeFeedbacks[index];
        quoteElement.classList.add('incorrect');
        quoteElement.innerHTML = `Inorrect!`;
    }

    feedback.style.display = "block";

    setTimeout(() => {
        feedback.style.display = "none";
    }, 1500);

    nextButton.style.display = "inline-block";
}

nextQuestion = () => {
    currentIndex++;
    showQuestion();
}

redButton.addEventListener('click', () => checkAnswer(true));
greenButton.addEventListener('click', () => checkAnswer(false));
nextButton.addEventListener('click', nextQuestion);
restartButton.addEventListener('click', start);

document.addEventListener('DOMContentLoaded', start);