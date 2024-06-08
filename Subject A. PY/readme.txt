Hello! This is a brief set of instructions about how to use this product!

Product description:
This project is a virtual customer service assistant that uses a pre-determined set
of questions and responses.
The bot can respond to many customer service related inquiries and it is able to
recognise non exact matches thanks to the get_close_match library.

Features:
- This project utilises a set of common customer FAQ's and programmed responses
- It can recognise close matches
- If the user sends an empty response; it will ask them to give a new one.

Usage:
1. To activate the code, you must run it in terminal
2. It will then start and "You:" will appear
3. You will write a reponse in you, and the bot will then respond

Configuration:
- The questions may be changed by the business by updating the knowledge_base.json file

Dependencies:
- Dependencies:

Python (>= 3.6)
- json: Python library for working with JSON data.
- difflib.get_close_matches: Python library for finding the best matches for a given query within a list of strings.