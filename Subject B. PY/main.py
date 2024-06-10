import os
import google.generativeai as genai # this imports the google generative ai libray 
from dotenv import load_dotenv #this imports env which allows me to store the api key in the .env folder

load_dotenv()

API_KEY = os.getenv('GEMINI_API_KEY') #this retrieves the key from the .env file

genai.configure(
    api_key=API_KEY
)
generation_config = { #gemini api response settings
  "temperature": 0.65,
  "top_p": 0.95,
  "top_k": 64,
  "max_output_tokens": 8192,
}
safety_settings = [ #gemini api response settings
  {
    "category": "HARM_CATEGORY_HATE_SPEECH",
    "threshold": "BLOCK_LOW_AND_ABOVE",
  },
  {
    "category": "HARM_CATEGORY_SEXUALLY_EXPLICIT",
    "threshold": "BLOCK_LOW_AND_ABOVE",
  },
  {
    "category": "HARM_CATEGORY_DANGEROUS_CONTENT",
    "threshold": "BLOCK_LOW_AND_ABOVE",
  },
]
model = genai.GenerativeModel(model_name="gemini-1.5-pro") #this selects the model used from the avaliable gemini api versions
safety_settings=safety_settings, #gemini api response settings
chat = model.start_chat(history=[]) 
instruction = "In This chat, your name is Simon, you work For the The Demo Shop; speak English and also if asked, Italian. As Simon, you must repond as a friendly, professional virtual customer service assistant. You will not provide any explicit replies, or any material that could be considered to be offensive. You will only answer qustions that are related to your job as a customer service assistant and if you are asked any irrelevant or offensive questions, you will politely refuse to answer them"
#the above line^ sends the prompt to the gemini api, this sets the bots tone and
#ensures that it will only answer questions that are related to customer service

while(True):
    question = input("You: ") #this prompts the user to ask a question

    if(question.strip() == ''):
     print('Sorry, you seem to have not written anything, please retry')
     question = input("You: ") #this prompts the user to ask a question

    response = chat.send_message (instruction + question) #this sends the users question to the api
    print(f"Simon: {response.text}") #this prints the bots response with 'Simon:' at the start
    print('\n') # this adds a new line
    instruction = ''  # this clears the instruction variable
    question = ''  # this clears the question variable
    safety_settings = ''  # this clears the safety_settings variable
    generation_config = ''  # this clears the generation_config variable


