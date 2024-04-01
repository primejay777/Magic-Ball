const communicate = [
    "Hello!",
    "How are you?",
    "Thank you.",
    "You're welcome.",
    "Excuse me.",
    "I'm sorry.",
    "Yes, please.",
    "No, thank you.",
    "Good morning.",
    "Good evening.",
    "Goodbye.",
    "Have a nice day!",
    "Can you help me?",
    "What's your name?",
    "How old are you?",
    "Where are you from?",
    "I don't know.",
    "I understand.",
    "I don't understand.",
    "Please wait.",
    "Let's go!",
    "See you later.",
    "Cheers!",
    "Congratulations!",
    "Happy birthday!",
    "Merry Christmas!",
    "Happy New Year!",
    "How much is it?",
    "Can I have a menu?",
    "Where is the restroom?"
];




function reply() {
    let num = Math.floor(Math.random() * 30);
    let answer = document.getElementById("answer");
    answer.textContent = communicate[num];
    answer.style.fontSize = '18px';
    answer.style.textAlign = 'center';
    answer.style.paddingTop = '80px';
    setTimeout(stop, 3000);

    function stop() {
        answer.textContent = '8';
        answer.style.fontSize = '130px';
        answer.style.margin = '0 15px';
        answer.style.padding = '30px 10px'
    }
    
};



