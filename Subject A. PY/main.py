import json
from difflib import get_close_matches #this library allows the bot to understand close matches


def load_knowledge_base(file_path: str) -> dict: # this loads the knowledge bae questions
    with open(file_path, 'r') as file:
        data: dict = json.load(file)
    return data

def find_best_match(user_question: str, questions: list[str]) -> str | None: #this checks the user response for the closest match
    matches: list = get_close_matches(user_question, questions, n=1, cutoff=0.6) #cut off decides the level of required similarity, I set it to 0.6/60%
    return matches [0] if matches else None


def get_answer_for_question(question: str, knowledge_base:dict) -> str | None: #this pulls the answer
    for q in knowledge_base["questions"]:
        if q["question"] == question: 
            return q["answer"]
        
        
def chat_bot():
    knowledge_base: dict = load_knowledge_base('knowledge_base.json')

    while True: 
        user_input: str = input('You: ')

        if user_input.lower() == 'quit': #typing this exits the process
            break

        best_match: str | None = find_best_match(user_input, [q["question"]for q in knowledge_base["questions"]])

        if best_match: 

            answer: str = get_answer_for_question(best_match, knowledge_base)
            print(f'Bot: {answer}')
        else: 

            print('Bot: Sorry, I do not recognise that question; can you please try to rephrase? ')
if __name__== '__main__':
    chat_bot()

    #the while if else statement on lines 24-38 allow the bot to check for a close match and if one isnt found, it asks the user to rephrase.
    #this error handling prevents a crash if the bot doesn't understand the input from the user