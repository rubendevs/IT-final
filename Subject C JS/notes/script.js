//This section controls the getlivechat button.
function toggleChat() {
  const chatBox = document.getElementById('chatBox');
  const button = document.querySelector('.chat-btn'); 

  // This toggles on/off the display
  chatBox.style.display = chatBox.style.display === 'block' ? 'none' : 'block';
}//This starts the chat by letting the user click the startChat button; which in turn displays the displayMessage
function startChat() {
  displayMessage('🤖 Hey there, My name is John! How can I help you today?'); //The Display message
  const botSound = document.getElementById('botSound'); //This is the pop sound that the bot plays
  botSound.play(); //this makes it play
  document.getElementById('initialQuestions').style.display = 'block';
  document.getElementById('start').style.display = 'none';
  
}
  //this gets the first set of questions from index
  function getInitalQuestion(buttonID){

    //this gets the id of the button clicked by user
    const userInput = buttonID
    const botSound = document.getElementById('botSound');

    //this checks the id and displays the corresponding category
    switch(userInput) {
      case "order":
        displayMessage('Order');
        botSound.play();
        document.getElementById('followUp').style.display = 'none';
        document.getElementById('orders').style.display = 'block';
        document.getElementById('initialQuestions').style.display = 'none';
        break;
      case "account":
        displayMessage('Account');
        botSound.play();
        document.getElementById('accounts').style.display = 'block';
        document.getElementById('initialQuestions').style.display = 'none';
        document.getElementById('followUp').style.display = 'none';
        break;
      case "payment":
        displayMessage('Payment');
        botSound.play();
        document.getElementById('payments').style.display = 'block';
        document.getElementById('initialQuestions').style.display = 'none';
        document.getElementById('followUp').style.display = 'none';
        break;
      case "shipping":
        displayMessage('Shipping');
        botSound.play();
        document.getElementById('shippings').style.display = 'block';
        document.getElementById('initialQuestions').style.display = 'none';
        document.getElementById('followUp').style.display = 'none';
        break;
      case "issues":
        displayMessage('Issues');
        botSound.play();
        document.getElementById('issuess').style.display = 'block';
        document.getElementById('initialQuestions').style.display = 'none';
        document.getElementById('followUp').style.display = 'none';
        break;
      default:
        console.log('Default')
    }
  }
  //this gets what question from the user input has and retrieves the answer from the question sheet
  function getQuestion(buttonID){
    const userInput = buttonID
    getAnswer(userInput)
  }
  //this displays the follow up yes or no question and hides the previous questions
  function showFollowUp(initialQuestion) {
    document.getElementById('followUp').style.display = 'block';
    displayMessage('🤖 Did this fix your issue?');
  }

  //the response to the yes or no question sent by the user. Includes a reset to ask a new question 
  function followUpResponse(answer) {
    const botSound = document.getElementById('botSound');
    if (answer === 'yes') {
        displayMessage('🤖 Thank you for using our service!', 'bot');
        document.getElementById('followUp').style.display = 'none';
    } else if (answer === 'no') {
        displayMessage('No');
        displayMessage('🤖 Please call our support line on: 32999999');
        document.getElementById('followUp').style.display = 'none';
    } else if (answer === 'Ask a new question') {
        displayMessage('🤖 How can I help you today?', 'bot');
        document.getElementById('followUp').style.display = 'none';
        document.getElementById('initialQuestions').style.display = 'block';
    }
    botSound.play(); //plays the bot pop sound
  }
  // This section formats the way that the user text looks in the box
  function getAnswer(userInput) {
    const elementsToHide = ['followUp', 'orders', 'accounts', 'payments', 'shippings', 'issuess', 'initialQuestions']; //hides these elements once user input is given
elementsToHide.forEach(elementId => {
    document.getElementById(elementId).style.display = 'none';
});
    const initialQuestion = userInput

    const chatBody = document.getElementById('chatBody');
    const response = questions.find(q => q.question.toString() === userInput);
  
   // This plays the 'pop' user message sound
   const messageSound = document.getElementById('messageSound');
   messageSound.play();

  // This adds the user's message to the chat
  const userMessage = document.createElement('div');
  userMessage.className = 'chat-message user';
  userMessage.textContent = userInput;

  // This is the user's message output the question 
  displayMessage(userInput, 'user');

  // This adds a delay before displaying the bot's response
  setTimeout(() => {
    const botSound = document.getElementById('botSound');
    botSound.play();
    displayMessage(response ? response.answer : "🤖 I'm sorry, I don't understand that question.");
    showFollowUp(initialQuestion);
  }, 3000); // Bot response delay in ms. this is done to make it more conversational
  // This clears the input field after the user sends a message
  
}
// This defines a function that allows the user message to be displayed in the chatbox, styling it based off of who has sent it (user or bot)
function displayMessage(text, sender) {
  const chatBody = document.getElementById('chatBody');
  const message = document.createElement('div');
  message.className = `chat-message ${sender}`;
  message.textContent = text;
  chatBody.appendChild(message);

  // This keeps the livechat scrolled to the bottom of the chat body
  chatBody.scrollTop = chatBody.scrollHeight;
}
