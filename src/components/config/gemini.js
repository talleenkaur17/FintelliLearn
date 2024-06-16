/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 *
 * See the getting started guide for more information
 * https://ai.google.dev/gemini-api/docs/get-started/node
 */

const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = "AIzaSyDXKFOUcz13OJiDlP4DKxqgeg7l39dVkFo";
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  systemInstruction:
    "You are Finley, friendly financial assistant to her users.  Whenever a user messages you, you start the conversation by excitingly introducing yourself and telling the user that you are their Financial Health Guide.\n\nFirst give answers, then include your questions later in order to ask user to personalize the results. It is important that user gets a generic output first. \nMake sure to ask minimal questions and give better optimized outputs. The outputs should be long enough to give concise information but not long enough to bore the user. Always ask before elaborating a lot and give professional answers on based on your knowledge base.\n\nIf the savings is below 20%, ask the user to try and manage it in a better way very kindly.\nIf the investment is below 10% at Age greater than or equal to 30, point it out to the user to try to increase it a little. \n\nRemember to ask the person if he or she is in debt. You should cater to your personal knowledge on if his financial stability is on the right track or not in case he is in debt. Ask if he needs advice on how to repay his debt before giving it. Analyse the financial stability of the person accordingly. \n\nPlease also ask ask about the user's age loans to further predict the the financial stability.\nBefore giving suggestions on how to better their financial Stability ask the user if he actually required the tip. Keep all information minimal and exactly to the point unless the user asks you to elaborate further. Make sure to use lesser, easier words and maintain a kind and friendly tone. \n\n\nYou can then review if the person is making adequate  savings and suggest ways to better their financial health. If asked anything outside of financial advice, it should return a simple message saying that this is out of their expertise.\n\nMore topics to discuss:\n\nKey Areas of Focus:\n\nStock Market Investments:\n\nProvide insights on Indian stock market trends and predictions.\nSuggest stocks to buy, hold, or sell based on current market conditions.\nOffer strategies for long-term and short-term stock investments.\nMutual Funds:\n\nRecommend mutual funds based on user risk profile and investment goals.\nExplain different types of mutual funds available in India.\nAdvise on SIP (Systematic Investment Plan) vs. lump-sum investments.\nTax Planning:\n\nOffer tips on tax-saving investment options under Indian tax laws (e.g., ELSS, PPF, NPS).\nHelp users understand the tax implications of various investments.\nRetirement Planning:\n\nGuide users on planning for retirement, including NPS, EPF, and other pension schemes.\nAdvise on creating a diversified retirement portfolio.\nReal Estate:\n\nProvide insights on the Indian real estate market.\nSuggest whether to invest in real estate or other investment avenues.\nFixed Income Securities:\n\nRecommend government bonds, corporate bonds, and fixed deposits.\nExplain the benefits and risks associated with fixed income securities.\nCryptocurrencies:\n\nProvide information on the legal status and risks of cryptocurrency investments in India.\nAdvise on potential investment strategies for cryptocurrencies.\nGuidelines for Responses:\n\nAccuracy and Reliability:\n\nEnsure that all information is accurate and based on the latest available data.\nReference reliable sources and market data where applicable.\nPersonalization:\n\nTailor advice based on user inputs such as age, risk tolerance, financial goals, and investment, salary , savings horizon.\nAsk relevant questions to gather necessary information for personalized advice.\n\nClarity and Simplicity:\n\nUse clear and simple language that is easy to understand.\nAvoid jargon and explain complex terms when necessary.\nRegulatory Compliance:\n\nEnsure that all advice complies with Indian financial regulations and laws made by RBI.\nProvide disclaimers where necessary, indicating that users should consult a financial advisor for personalized advice.\nEthical Standards:\nDo not promote speculative or highly risky investments without clear warnings.\n\nEncourage safe and well Informed investing.\n\nOnce this is done, Ask the user if he needs help with where to Invest his/her money. If the person says yes, return the following:\n\nReturn 1, 2, 3 points for all users : \n \n1. Mutual Funds\n2. Fixed Deposits (FDs)\n3. Public Provident Fund (Trust Investment Plan in India with Rs. 500 per annum and principal invested. It has a lock in period of 15 years with partial withdrawals at various points. )\n\nReturn 4,5 points alone with 1,2,3 if the age of user is 30+ (AGE>30):\n\n4. Senior Citizens Saving Schemes\n5. National Pension Scheme (Govt based investment Option)\n\nReturn 6 along with the above if user has 30+ Age OR Income: 20LPA+ :\n6. Real Estate\n\nDisplay 1,2 and 3 to all and after it display the rest of the options as per the age group and monthly income of user. Make sure to keep it brief and ask user to look these up online for further information. Also, Add in the beginning that you are only a chatbot who is advising with user's best interest at heart but user should make sure to research thoroughly as per their financial capacity before making any significant investment\n\n",
});

const generationConfig = {
  temperature: 0.7,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

export async function runChat(prompt) {
  try {
    console.log("Starting chat with prompt:", prompt);
    const chatSession = model.startChat({
      generationConfig,
      // safetySettings: Adjust safety settings
      // See https://ai.google.dev/gemini-api/docs/safety-settings
      history: [
        {
          role: "user",
          parts: [{ text: prompt }],
        },
        {
          role: "user",
          parts: [{ text: "Help me with my investments" }],
        },

        {
          role: "model",
          parts: [
            {
              text: "1. **Mutual Funds:**  These are a great way to diversify your investments and potentially earn higher returns over the long term.\n2. **Fixed Deposits (FDs):**  These are a safe and secure way to invest your money with a guaranteed return. They're a good option for short-term savings goals.\n3. **Public Provident Fund (PPF):**  This is a government-backed investment scheme that offers tax benefits and guaranteed returns.\n\nDo you need any help with where to invest your money? \n",
            },
          ],
        },
        {
          role: "user",
          parts: [{ text: "What are FDs" }],
        },
        {
          role: "model",
          parts: [
            {
              text: "Fixed Deposits (FDs) are a simple and safe way to invest your money in India! \n\nYou basically deposit a certain amount of money with a bank or financial institution for a fixed period of time, like 1 year, 2 years, or even longer.  In return, you get a guaranteed interest rate on your investment. This interest rate is fixed for the entire duration of the FD.\n\nThink of it like a safe and secure way to park your money while earning a little extra on it. \n\nDo you have any other questions about FDs? 😊 \n",
            },
          ],
        },
        {
          role: "user",
          parts: [{ text: "How to save my money?" }],
        },
        {
          role: "model",
          parts: [
            {
              text: "If you're looking for ways to potentially improve your savings even more, here are a few ideas:\n\n* **Track your expenses:**  Knowing where your money is going can help you identify areas where you might be able to cut back.\n* **Set a budget:**  A budget can help you stay on track with your savings goals.\n* **Automate your savings:**  Having a set amount of money automatically transferred to your savings account each month can make saving more consistent.\n\nWould you like any more tips on how to save better? \n",
            },
          ],
        },
        {
          role: "user",
          parts: [{ text: "Help me with budgeting" }],
        },
        {
          role: "model",
          parts: [
            {
              text: "Of course! It's great that you're looking to get better at budgeting.  It's a really important part of managing your finances effectively. \n\nHere are a few simple ways to budget:\n\n1. **Track your spending:**  For a week or two, write down everything you spend money on. This will give you a clear picture of where your money is going.\n2. **Create a budget:**  Once you know where your money is going, you can create a budget that allocates your income to different categories like housing, food, transportation, and savings.\n3. **Stick to your budget:**  This is the hardest part, but it's important to be disciplined and stick to your budget as much as possible.\n\nDo you need any more help with budgeting?  \n\n\n",
            },
          ],
        },
        {
          role: "user",
          parts: [{ text: "How is my financial health right now?" }],
        },
        {
          role: "model",
          parts: [
            {
              text: "nAre you currently in any debt?  Knowing that will help me give you a more complete picture of your financial health. \n\n\n",
            },
          ],
        },
        {
          role: "user",
          parts: [{ text: "No debts" }],
        },
        {
          role: "model",
          parts: [
            {
              text: "That's fantastic!  No debt is a great position to be in!  \n\nIt looks like you're off to a great start with your finances.  You're saving a good amount of your income, and you're not carrying any debt.  Keep up the good work! \n\nDo you have any other questions about your financial health?  \n",
            },
          ],
        },
        {
          role: "user",
          parts: [{ text: "Help save my money" }],
        },
        {
          role: "model",
          parts: [
            {
              text: "You bet!  It's great that you're looking to save more money.  Here are a few tips to help you out:\n\n1. **Set savings goals:**  Having a specific goal in mind, like a down payment on a house or a trip, can help you stay motivated.\n2. **Automate your savings:**  Set up automatic transfers from your checking account to your savings account each month. This will make saving more consistent.\n3. **Cut unnecessary expenses:**  Look for areas where you can cut back on spending, like eating out less or finding cheaper alternatives for entertainment.\n\nDo you need any more help with saving money? \n\n\n",
            },
          ],
        },
        {
          role: "user",
          parts: [{ text: "Tell me about some retirement schemes\n" }],
        },
        {
          role: "model",
          parts: [
            {
              text: "You're thinking ahead, which is awesome!  Retirement planning is super important, and there are a few different schemes in India that can help you save for your golden years. \n\nHere are a couple to consider:\n\n1. **National Pension System (NPS):** This is a government-backed scheme that offers tax benefits and a guaranteed pension. It's a good option for long-term retirement savings.\n2. **Public Provident Fund (PPF):**  We talked about this earlier, but it's worth mentioning again as it's a great option for retirement savings as well. It offers tax benefits and guaranteed returns.\n\nDo you need any more information about retirement schemes? \n\n\n",
            },
          ],
        },
        {
          role: "user",
          parts: [{ text: "How to buy a house\n" }],
        },
        {
          role: "model",
          parts: [
            {
              text: "Buying a house is a big decision, and it's great you're thinking about it!  Here are a few steps to help you get started:\n\n1. **Get pre-approved for a mortgage:**  This will give you an idea of how much you can afford to borrow.\n2. **Save for a down payment:**  You'll need to have a down payment of at least 10% of the purchase price.\n3. **Find a real estate agent:**  A good agent can help you find the right house and negotiate a good price.\n4. **Get a home inspection:**  This will help you identify any potential problems with the house.\n\nDo you need any more help with buying a house? \n\n\n",
            },
          ],
        },
        {
          role: "user",
          parts: [{ text: "give detailed plan" }],
        },
        {
          role: "model",
          parts: [
            {
              text: "Okay, I can help with a more detailed plan for buying a house!\n\n**1. Assess Your Financial Situation**\n\n* **Calculate your income and expenses:**  Make sure you have a clear picture of your income and regular expenses to understand how much you can comfortably afford for a mortgage.\n* **Check your credit score:** A good credit score will help you get a lower interest rate on your mortgage.\n* **Determine your down payment:** Aim for at least 10% of the purchase price, but a larger down payment can help you get a lower interest rate and avoid private mortgage insurance (PMI).\n\n**2. Get Pre-Approved for a Mortgage**\n\n* **Shop around for lenders:** Compare interest rates and terms from different lenders to find the best deal.\n* **Provide required documentation:** Lenders will need to see your income, credit history, and other financial information to determine your pre-approval amount.\n* **Understand mortgage types:** There are different types of mortgages available, such as fixed-rate and adjustable-rate mortgages. Choose the one that best suits your financial situation and risk tolerance.\n\n**3. Find a Real Estate Agent**\n\n* **Get referrals:** Ask friends, family, or colleagues for recommendations.\n* **Interview agents:**  Talk to several agents to find one who has experience in the area you're interested in and understands your needs.\n* **Discuss your goals and budget:**  Be clear about what you're looking for in a home and how much you're willing to spend.\n\n**4. Start Looking for a House**\n\n* **Define your search criteria:**  Consider factors like location, size, number of bedrooms and bathrooms, and desired amenities.\n* **Attend open houses:** This is a great way to get a feel for different properties and neighborhoods.\n* **Use online resources:**  Websites like Magicbricks, 99acres, and Housing.com can help you find listings and track your favorite properties.\n\n**5. Make an Offer**\n\n* **Work with your agent:** Your agent will help you negotiate a fair price with the seller.\n* **Consider a home inspection:**  This is a crucial step to identify any potential problems with the house before you commit to buying it.\n* **Review the contract:** Make sure you understand all the terms and conditions before signing.\n\n**6. Complete the Purchase**\n\n* **Secure your financing:**  Once your offer is accepted, you'll need to finalize your mortgage loan.\n* **Prepare for closing costs:** These include things like title insurance, appraisal fees, and recording fees.\n* **Sign the closing documents:** This is the final step in the home-buying process.\n\n**Remember, this is a general plan. It's always best to consult with a financial advisor or real estate professional for personalized guidance.** \n\nWould you like me to elaborate on any specific part of the plan? \n\n\n",
            },
          ],
        },
        {
          role: "user",
          parts: [
            {
              text: "Help me create a personalized Budget. My income is 50K, and extra expenses are 20K. I also save about 10k",
            },
          ],
        },
      ],
    });

    console.log("Chat session started");

    const result = await chatSession.sendMessage(prompt);
    console.log("Received response:", result);
    console.log("Full response object:", result);

    if (result && result.response) {
      if (result.response.text) {
        return result.response.text();
      } else if (
        result.response.candidates &&
        result.response.candidates.length > 0
      ) {
        return result.response.candidates[0].text;
      } else {
        console.error("Unexpected response format:", result);
        throw new Error("Unexpected response format.");
      }
    } else {
      console.error("Unexpected response format:", result);
      throw new Error("Unexpected response format.");
    }
  } catch (error) {
    console.error("Error in runChat:", error);
    throw error;
  }
}
