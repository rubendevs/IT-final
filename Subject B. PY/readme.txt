Welcome to my virtual Customer Service Assistant

Product description:
This project is a virtual customer service assistant that is connected to the
Gemini 1.5pro API The assistant is designed to provide responses to customer service
related inquiries. the prompt can be changed to include constraints for specific
questions, as well as their answers

Features:
- This project utilises the Gemini 1.5-pro api to process your questions and generate responses.
- Implements safety settings to ensure that responses are free from offensive or inappropriate content.
- Allows customisation of response generation parameters such as temperature, top_p, and top_k.
- Provides a user-friendly interface for interacting with the virtual assistant via command-line input.

Usage:
1. Install and unpack the zip file ensuring all dependencies are present. Make sure the API key is in the .env file
2. Run the main.py script to start the virtual customer service assistant in the terminal.
3. You can now ask Simon questions when prompted and he wil reply.

Configuration:
- API_KEY: You must set your Gemini API key in the provided.env file.
- Generation Config: You can customise the generation settings in the generation_config area.
- Safety Settings: Configure safety settings for blocking harmful content in the safety_settings list.

Dependencies:
- google-generativeai: This is the .py library for interfacing with the Gemini API.
- python-dotenv: This is the .py library for managing environment variables(env).