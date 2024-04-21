import react from 'react';
import Header from '../Header/header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faYoutube} from '@fortawesome/free-brands-svg-icons';
import {faNewspaper} from '@fortawesome/free-regular-svg-icons';



function budget(){
    return(
        <div>
            <Header />
            <h2 class=" pt-8 flex justify-center font-bold text-2xl text-gray-700 transition-all duration-1000 hover:font-normal hover:text-red-500">BUDGET</h2>
            <div class=" border border-gray-300 p-4 rounded-lg">
  <p class="pt-4 text-blue-500 text-lg font-bold italic text-center">
  Plan and Learn About budget with Fintel !!
  </p>
</div >
<div class="pt-9">
<table class=" w-full mx-auto border-collapse border border-gray-200">
  <thead>
    <tr>
      <th class="px-4 py-2 bg-gray-100 border border-gray-200">Types of Budgets</th>
      <th class="px-4 py-2 bg-gray-100 border border-gray-200">Reading Reference</th>
      <th class="px-4 py-2 bg-gray-100 border border-gray-200">Links</th>
      <th class="px-4 py-2 bg-gray-100 border border-gray-200">Test your knowledge</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="font-bold font-mono px-4 py-2 border border-gray-200">Government Budgets</td>
      <td class="px-4 py-2 border border-gray-200">
      <a href="https://www.britannica.com/money/government-budget" class="text-blue-500 right-4"><FontAwesomeIcon icon={faNewspaper} />Article-A</a>
      </td>
      <td class="px-4 py-2 border border-gray-200">
        <a href="https://www.youtube.com/results?search_query=government+budget+" class="text-red-500">
 
 <FontAwesomeIcon icon={faYoutube} /></a>
      </td>
      <td class="px-4 py-2 border border-gray-200">
        <a href="link2.html" class="text-blue-500">Link 2</a>
      </td>
    </tr>
    <tr>
      <td class="font-bold font-mono px-4 py-2 border border-gray-200">Personal Finance and Budgeting</td>
      <td class="px-4 py-2 border border-gray-200">
      <a href="https://www.britannica.com/money/government-budget" class="text-blue-500 right-4"><FontAwesomeIcon icon={faNewspaper} />Article-A</a>
      </td>
      <td class="px-4 py-2 border border-gray-200">
        <a href="https://www.youtube.com/results?search_query=government+budget+" class="text-red-500">
 
 <FontAwesomeIcon icon={faYoutube} /></a>
      </td>
      <td class="px-4 py-2 border border-gray-200">
        <a href="link2.html" class="text-blue-500">Link 2</a>
      </td>
    </tr>
    <tr>
      <td class="font-bold font-mono px-4 py-2 border border-gray-200">Climate and Environmental Budgets: </td>
      <td class="px-4 py-2 border border-gray-200">
      <a href="https://www.britannica.com/money/government-budget" class="text-blue-500 right-4"><FontAwesomeIcon icon={faNewspaper} />Article-A</a>
      </td>
      <td class="px-4 py-2 border border-gray-200">
        <a href="https://www.youtube.com/results?search_query=government+budget+" class="text-red-500">
 
 <FontAwesomeIcon icon={faYoutube} /></a>
      </td>
      <td class="px-4 py-2 border border-gray-200">
        <a href="link2.html" class="text-blue-500">Link 2</a>
      </td>
    </tr>
    <tr>
      <td class=" font-bold font-mono px-4 py-2 border border-gray-200">Healthcare Budgets</td>
      <td class="px-4 py-2 border border-gray-200">
      <a href="https://www.britannica.com/money/government-budget" class="text-blue-500 right-4"><FontAwesomeIcon icon={faNewspaper} />Article-A</a>
      </td>
      <td class="px-4 py-2 border border-gray-200">
        <a href="https://www.youtube.com/results?search_query=government+budget+" class="text-red-500">
 
 <FontAwesomeIcon icon={faYoutube} /></a>
      </td>
      <td class="px-4 py-2 border border-gray-200">
        <a href="link2.html" class="text-blue-500">Link 2</a>
      </td>
    </tr>
    <tr>
      <td class=" font-bold font-mono px-4 py-2 border border-gray-200">Education Budgets</td>
      <td class="px-4 py-2 border border-gray-200">
      <a href="https://www.britannica.com/money/government-budget" class="text-blue-500 right-4"><FontAwesomeIcon icon={faNewspaper} />Article-A</a>
      </td>
      <td class="px-4 py-2 border border-gray-200">
        <a href="https://www.youtube.com/results?search_query=government+budget+" class="text-red-500">
 
 <FontAwesomeIcon icon={faYoutube} /></a>
      </td>
      <td class="px-4 py-2 border border-gray-200">
        <a href="link2.html" class="text-blue-500">Link 2</a>
      </td>
    </tr>
   
    
    
    
      </tbody>
      </table>
        </div>
        </div>
    )
};

export default budget;