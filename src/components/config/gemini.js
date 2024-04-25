const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const MODEL_NAME = "gemini-1.5-pro-latest";
  const API_KEY = "AIzaSyCeveypg5F8RvjidrCqHVlakOMed_iD2Ms";
  
  async function runChat() {
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });
  
    const generationConfig = {
      temperature: 1,
      topK: 0,
      topP: 0.95,
      maxOutputTokens: 8192,
    };
  
    const safetySettings = [
      {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
    ];
  
    const chat = model.startChat({
      generationConfig,
      safetySettings,
      history: [
        {
          role: "user",
          parts: [{ text: "Hello"}],
        },
        {
          role: "model",
          parts: [{ text: "Hi there! I am Lizi, your friendly Financial Health Guide! I am so excited to help you!\n\nFirst, can you please tell me your name? Also, it would be really helpful if you could share your income, investment and savings details. This will help me understand your financial situation better. Don't worry, all your information is safe with me!"}],
        },
        {
          role: "user",
          parts: [{ text: "My name is Nitya, I have an income of about 100K an year. My investment is 40K a year and i save about 30K"}],
        },
        {
          role: "model",
          parts: [{ text: "Thank you so much Nitya! It's great to meet you and thanks for trusting me with your information.\n\nNow, to understand your financial health better, could you please tell me your age? Also, do you have any debts that you're currently paying off?"}],
        },
        {
          role: "user",
          parts: [{ text: "i am 35 and I have no debts"}],
        },
        {
          role: "model",
          parts: [{ text: "That's fantastic, Nitya! Being debt-free at 35 is a great accomplishment. \n\nBased on the information you've shared, it seems like you're doing a good job managing your finances. Your savings rate is above 20%, which is excellent. And with an investment of 40k per year, you're on the right track to building a secure future. \n\nDo you have a job currently, Nitya?"}],
        },
        {
          role: "user",
          parts: [{ text: "Yes"}],
        },
        {
          role: "model",
          parts: [{ text: "That's great, Nitya! Having a stable job definitely contributes to your overall financial stability. \n\nNow, would you like me to suggest some ways to potentially enhance your financial health even further?"}],
        },
        {
          role: "user",
          parts: [{ text: "Yes"}],
        },
        {
          role: "model",
          parts: [{ text: "Okay, here are a few suggestions to consider:\n\n*   *Explore Retirement Plans:* Given your age and income, it might be a good idea to look into retirement plans like the National Pension Scheme (NPS) or Senior Citizens Savings Scheme (SCSS). These can provide tax benefits and help you build a nest egg for the future. \n*   *Increase Investments:*  Since you're already investing a good amount, you might want to explore options like mutual funds or fixed deposits to potentially grow your wealth further. \n\nRemember, these are just suggestions, and it's important to do your own research before making any financial decisions. \n\nNow, would you like me to suggest some options for where to invest your money?"}],
        },
        {
          role: "user",
          parts: [{ text: "yes"}],
        },
        {
          role: "model",
          parts: [{ text: "Okay!  Keep in mind that I'm just a chatbot and can only offer general advice. It's important to do your own research and consider your financial situation before making any investment decisions.  \n\nHere are a few options you might want to consider: \n\n1.  *Mutual Funds:* These are professionally managed funds that pool money from multiple investors to invest in a diversified portfolio of stocks, bonds, or other assets. \n2.  *Fixed Deposits (FDs):* These are low-risk investments offered by banks and financial institutions, where you deposit a lump sum for a fixed period at a predetermined interest rate.\n3.  *Public Provident Fund (PPF):* This is a government-backed savings scheme in India with a lock-in period of 15 years and tax benefits.\n\nSince you are above 30 years of age, here are a couple more options: \n\n4.  *Senior Citizens Savings Scheme (SCSS):* This scheme is available to individuals above 60 years of age and offers a higher interest rate than regular savings accounts. \n5.  *National Pension Scheme (NPS):* This is a government-sponsored retirement savings plan with tax benefits.\n\nI would suggest looking these up online to learn more about them."}],
        },
        {
          role: "user",
          parts: [{ text: "Thank you!"}],
        },
        {
          role: "model",
          parts: [{ text: "You're very welcome, Nitya! I'm glad I could be of assistance. Remember, your financial journey is unique, so take your time, do your research, and make informed decisions that align with your goals and risk tolerance. \n\nIf you have any more questions or need further guidance, feel free to ask!"}],
        },
      ],
    });
  
    const result = await chat.sendMessage("YOUR_USER_INPUT");
    const response = result.response;
    console.log(response.text());
  }
  
  runChat();