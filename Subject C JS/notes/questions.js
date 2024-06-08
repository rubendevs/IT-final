// this file is used to separate the questions from the rest of the script.js
const questions = [
  
    // qna for ordering questions
  { question: "How can I track my order?", answer: "🤖 You can track your order by entering your order number and email address on our website at [insert order tracking page link]." },
  { question: "Can I change the shipping address on my order?", answer: "🤖 The ability to change the shipping address depends on the processing stage of your order. Please contact customer service as soon as possible at [phone number] or [email address] to inquire about changes." },
  { question: "What happens if I miss my delivery?", answer: "🤖 If you miss your delivery, the courier company will typically leave a notification card with instructions for redelivery or pickup at a designated location." },
  { question: "Can I return a product?", answer: "🤖 The return policy may vary depending on the product and if it's opened. Please refer to our return policy at [insert return policy link] for details." },
 
  // qna for account related questions
  { question: "How do I create an account?", answer: "🤖 Creating an account is easy! Simply visit our website and click on 'Sign Up' or 'Create Account.' You will be guided through the process of entering your information." },
  { question: "How do I update my account information?", answer: "🤖 You can update your account information by logging in to your account on our website and navigating to the 'Account Settings' or 'Profile' section." },
  { question: "I forgot my password. How can I reset it?", answer: "🤖 No problem! Click on the 'Forgot Password' link on the login page and follow the instructions to reset your password." },
  { question: "How can I delete my account?", answer: "🤖 To delete your account; go to 'Account Settings' and click 'Delete my Account' ." },
  // qna for payment questions
  { question: "Is my payment information secure?", answer: "🤖 Yes, we take your security seriously. We use industry-standard security measures to protect your payment information." },
  { question: "What happens if my payment is declined?", answer: "🤖 If your payment is declined, you will receive a notification and may be prompted to update your payment information or try a different payment method." },
  { question: "Can I pay with a purchase order?", answer: "🤖 We may accept purchase orders from certain institutions. Please contact customer service for more information about purchase order payments." },
  { question: "Do you offer financing options for larger purchases?", answer: "🤖 We may offer financing options for certain products or through third-party providers. Please check the product page or contact customer service for details." },

  // qna for shipping questions
  { question: "How long will it take for my order to arrive?", answer: "🤖 Delivery times vary depending on your location and chosen shipping option. You can find an estimated timeframe at checkout or by entering your tracking number on the courier's website." },
  { question: "Do you offer expedited shipping options?", answer: "🤖 We may offer expedited shipping options for an additional fee. You can see these options during checkout." },
  { question: "Can I ship my order to a different address?", answer: "🤖 Yes, you can ship your order to a different address during checkout. Simply enter the recipient's information as the shipping address." },
  { question: "Do you offer international shipping?", answer: "🤖 We may or may not offer international shipping depending on our current capabilities. Please refer to the shipping information on our website at [insert shipping page link]." },

  // qna for order issue questions
  { question: "I received the wrong item. What should I do?", answer: "🤖 We apologize for the mistake. Please contact customer service at [phone number] or [email address] with your order details and a picture of the incorrect item (if possible). We will arrange for a replacement or return." },
  { question: "My order is missing an item. What should I do?", answer: "🤖 We understand the frustration of missing items. Please contact customer service at [phone number] or [email address] with your order details and we will investigate the issue." },
  { question: "What should I do if my order arrives damaged?", answer: "🤖 We apologize for the inconvenience. Please contact customer service at [phone number] or [email address] and we will be happy to assist you with a replacement or refund." },
  { question: "Can I cancel my order?", answer: "🤖 The ability to cancel an order depends on its processing stage. Please contact customer service as soon as possible at [phone number] or [email address] to inquire about canceling your order." },
]; 