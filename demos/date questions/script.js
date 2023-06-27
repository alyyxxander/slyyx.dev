
let blueQuestions = 
        ["When you’re feeling down, what usually cheers you up?",
        "What’s your favorite thing to do on a rainy day?",
        "Do you have any tics or weird habits?",
        "Have you ever been arrested?",
        "If you could get away with anything that you do?",
        "Do you believe in extraterrestrial life? Why or why not?",
        "If past lives are real, what was yours?",
        "If you were an animal, which animal would you be?",
        "Have you ever seen something you can’t explain?"];

let greenQuestions = 
        ["What is your favorite animal?", 
        "Do you play any instruments? Do you want to?",
        "Where are you from?",
        "What is one thing you are very good at?",
        "What’s the coolest place you’ve traveled to?",
        "What is your favorite color?",
        "What is one thing you are very bad at?",
        "What's your favorite hobby right now?",
        "What’s something you can’t go a day without doing?",
        "What did you want to be when you were younger?",
        "Tell me a really, really stupid joke that made you laugh.",
        "What’s your favorite movie?",
        "Where’s somewhere you’d like to travel to?",
        "What are you the most proud of?",
        "If your life was a movie or a book what would be the title to it?",
        "What skill would you love to master?",
        "What would be your ideal way to spend the weekend?",
        "What's one thing on your bucket list?",
        "What’s your favorite app?",
        "What’s your most often used app?",
        "What app do you wish you used less?",
        "What’s your favorite social media platform?",
        "What is your go-to Karaoke song?",
        "What do you like to do for fun?",
        "What song do you sing most often in the car?",
        "If you are in a bad mood, do you prefer to be left alone or have someone to cheer you up?",
        "Do you believe in ghosts?",
        "What’s your guilty pleasure?",
        "What are you currently reading?",
        "What was the last movie you saw?",
        "What was the last show you watched?"];  

let yellowQuestions = 
        ["What is your favorite lyric from a song? Why?",
        "Do you have any hidden quirks?",
        "What’s a pet peeve you have?",
        "When was the last time you changed your opinion on something big?",
        "What’s your favorite thing about yourself?",
        "Do you believe in fate?",
        "What’s your love language?",
        "Do you believe in soul mates?",
        "Are you religious or spiritual?",
        "What is your greatest fear?",
        "What kind of partner are you?",
        "What is your favorite quote?",
        "What’s your dream house look like?",
        "What is one personal “rule” that you never break?",
        "What are your red flags?",
        "What are your green flags?",
        "What reg flags do you look out for?",
        "What green flags do you look out for?",
        "What’s your philosophy in life?",
        "What are two things you value most about a person?"];              

let redQuestions = 
        ["Are you confrontational?",
        "What was the last thing you lied about?",
        "What’s the one thing that people always misunderstand about you?",
        "What was your childhood like?",
        "What’s one thing that bothers you most about the world today?",
        "What is the darkest thought you’ve ever had? What about the darkest thing you’ve never told anybody?",
        "Is there something out there, a thought, an idea, a current event, or a fear that you find deeply unsettling?",
        "When have you felt the lowest in your life?",
        "If you were given a choice to choose your manner of death, how would you die?",
        "How many serious relationships have you been in?",
        "What is your biggest fear in a relationship?",
        "Name the one bad quality you wouldn’t mind in a partner.",
        "Pro life or pro choice? Why?",
        "Name the one worst quality you cannot tolerate in a partner.",
        "How do you prefer the room to be when you sleep? Warm/cold? Lights on/off? TV on/off? Total silence? Etc.",
        "What are you the most ashamed of?",
        "How would you summarize your life purpose?",
        "What question do you wish you knew the answer to?",
        "What red flags or toxic traits do you have?",
        "Biggest turn off?",
        "Biggest turn on?",
        "What’s the one thing you would like to change about yourself?",
        "What's something you're physically insecure about?",
        "What's something you're emotionally insecure about?",
        "What's something you're mentally insecure about?",
        "Out of the negative emotions of greed, anger, jealousy and hate, which one would you say affects you the most?",
        "What’s your biggest regret in life?",
        "Have you ever been in love?",
        "What do you want out of a relationship?",
        "What’s your favorite thing about your body?",
        "What’s your favorite thing about your personality?",
        "What’s your favorite thing about your mind?",];


// move questions to archivedQuestions array after they are asked
let archivedQuestions = [
    
];


let blueCount = blueQuestions.length;
let greenCount = greenQuestions.length;
let yellowCount = yellowQuestions.length;
let redCount = redQuestions.length;

//update question count and display it on the page
document.getElementById('blue-count').innerHTML = ("blue: " + blueCount);
document.getElementById('green-count').innerHTML = ("green: " + greenCount);
document.getElementById('yellow-count').innerHTML = ("yellow: " + yellowCount);
document.getElementById('red-count').innerHTML = ("red: " + redCount);


function newBlueQuestion() {
    let randomNumber = Math.floor(Math.random() * (blueQuestions.length));
    document.getElementById('blue-question').innerHTML = blueQuestions[randomNumber];
}

function newGreenQuestion() {
    let randomNumber = Math.floor(Math.random() * (greenQuestions.length));
    document.getElementById('green-question').innerHTML = greenQuestions[randomNumber];
}

function newYellowQuestion() {
    let randomNumber = Math.floor(Math.random() * (yellowQuestions.length));
    document.getElementById('yellow-question').innerHTML = yellowQuestions[randomNumber];
}

function newRedQuestion() {
    let randomNumber = Math.floor(Math.random() * (redQuestions.length));
    document.getElementById('red-question').innerHTML = redQuestions[randomNumber];
}
