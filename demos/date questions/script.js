
let blueQuestions = 
        ["When you’re feeling down, what always cheers you up?",
        "If you were an animal, which animal would you be?",
        "Do you have any tics or weird habits?",
        "FREEBIE - ASK ANY QUESTION YOU LIKE",
        "What's the closest you’ve ever come to being arrested?",
        "If you could get away with anything that you do?",
        "Have you ever seen something you can’t explain?",
        "If past lives are real, what was yours?",
        "Do you believe in extraterrestrial life? Elaborate on why or why not."];

let greenQuestions = 
        ["What is your favorite color?", 
        "What is your favorite animal?", 
        "Where are you from?",
        "What is one thing you are very good at?",
        "What is one thing you are very bad at?",
        "What's your favorite hobby right now?",
        "What’s something you can’t go a day without doing?",
        "What did you want to be when you were younger?",
        "Tell me a really, really stupid joke that made you laugh.",
        "What are you the most proud of?",
        "If your life was a movie or a book what would be the title to it?",
        "What’s the coolest place you’ve traveled to?",
        "Where’s somewhere you’d like to travel to?",
        "What skill would you love to master?",
        "What song do you sing most often in the car?",
        "Do you play any instruments? Do you want to?",
        "What would be your ideal way to spend the weekend?",
        "What's one thing on your bucket list?",
        "What’s your favorite app?",
        "What’s your most often used app?",
        "What app do you wish you used less?",
        "What is your go-to Karaoke song?",
        "What do you like to do for fun?",
        "What would you like to ask me?",
        "Do you believe in ghosts?",
        "What’s your guilty pleasure?",
        "What are you currently reading?",
        "What was the last movie you saw?",
        "What was the last show you watched?"];  

let yellowQuestions = 
        ["What’s the one thing that people always misunderstand about you?",
        "What is your favorite lyric from a song? Why?",
        "If you are in a bad mood, do you prefer to be left alone or have someone to cheer you up?",
        "Are you religious or spiritual?",
        "Do you have any hidden quirks?",
        "What’s a pet peeve you have?",
        "Do you believe in fate?",
        "Do you believe in soul mates?",
        "What kind of partner are you?",
        "When was the last time you changed your opinion on something big?",
        "What’s your love language?",
        "What’s your dream house look like?",
        "What is one personal “rule” that you never break?",
        "What are two things you value most about a person?",
        "What is your greatest fear?"];              

let redQuestions = 
        ["What’s your biggest regret in life?",
        "Are you confrontational?",
        "What’s one thing that bothers you most about the world today?",
        "What is the darkest thought you’ve ever had? What about the darkest thing you’ve never told anybody?",
        "Is there something out there, a thought, an idea, a current event, or a fear that you find deeply unsettling?",
        "When have you felt the lowest in your life?",
        "If you were given a choice to choose your manner of death, how would you die?",
        "Name the one bad quality you wouldn’t mind in a partner.",
        "Pro life or pro choice? Why?",
        "Out of the negative emotions of greed, anger, jealousy and hate, which one would you say affects you the most?",
        "Name the one worst quality you cannot tolerate in a partner.",
        "When you are about to go to sleep for the night, how do you do it? Lights on/off? TV on/off? Total silence? Etc.",
        "What are you the most ashamed of?",
        "How would you summarize your life purpose?",
        "What question do you wish you knew the answer to?",
        "What red flags or toxic traits do you have?",
        "Biggest turn off?",
        "Biggest turn on?",
        "What’s your philosophy in life?",
        "What’s the one thing you would like to change about yourself?",
        "What's something you're physically insecure about?",
        "What's something you're emotionally insecure about?",
        "What's something you're mentally insecure about?",
        "What do you want out of a relationship?"];



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
