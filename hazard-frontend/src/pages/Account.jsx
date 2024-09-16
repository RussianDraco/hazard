import React from 'react'

import { useAuth0 } from "@auth0/auth0-react"

const auth0_token = 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImJOOUlheG1JLVl6bVk3RF9vOEtoRyJ9.eyJpc3MiOiJodHRwczovL2Rldi1nb3AzN29iZ2N5d3gzc3FoLnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJqMzBYV0Y4Mlpza3RlcjZOVUdwb0J5R0FJTmtLdjkxU0BjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly9kZXYtZ29wMzdvYmdjeXd4M3NxaC51cy5hdXRoMC5jb20vYXBpL3YyLyIsImlhdCI6MTcyNjQwMzQ2NCwiZXhwIjoxNzI2NzQzNDY0LCJzY29wZSI6InJlYWQ6Y2xpZW50X2dyYW50cyBjcmVhdGU6Y2xpZW50X2dyYW50cyBkZWxldGU6Y2xpZW50X2dyYW50cyB1cGRhdGU6Y2xpZW50X2dyYW50cyByZWFkOnVzZXJzIHVwZGF0ZTp1c2VycyBkZWxldGU6dXNlcnMgY3JlYXRlOnVzZXJzIHJlYWQ6dXNlcnNfYXBwX21ldGFkYXRhIHVwZGF0ZTp1c2Vyc19hcHBfbWV0YWRhdGEgZGVsZXRlOnVzZXJzX2FwcF9tZXRhZGF0YSBjcmVhdGU6dXNlcnNfYXBwX21ldGFkYXRhIHJlYWQ6dXNlcl9jdXN0b21fYmxvY2tzIGNyZWF0ZTp1c2VyX2N1c3RvbV9ibG9ja3MgZGVsZXRlOnVzZXJfY3VzdG9tX2Jsb2NrcyBjcmVhdGU6dXNlcl90aWNrZXRzIHJlYWQ6Y2xpZW50cyB1cGRhdGU6Y2xpZW50cyBkZWxldGU6Y2xpZW50cyBjcmVhdGU6Y2xpZW50cyByZWFkOmNsaWVudF9rZXlzIHVwZGF0ZTpjbGllbnRfa2V5cyBkZWxldGU6Y2xpZW50X2tleXMgY3JlYXRlOmNsaWVudF9rZXlzIHJlYWQ6Y29ubmVjdGlvbnMgdXBkYXRlOmNvbm5lY3Rpb25zIGRlbGV0ZTpjb25uZWN0aW9ucyBjcmVhdGU6Y29ubmVjdGlvbnMgcmVhZDpyZXNvdXJjZV9zZXJ2ZXJzIHVwZGF0ZTpyZXNvdXJjZV9zZXJ2ZXJzIGRlbGV0ZTpyZXNvdXJjZV9zZXJ2ZXJzIGNyZWF0ZTpyZXNvdXJjZV9zZXJ2ZXJzIHJlYWQ6ZGV2aWNlX2NyZWRlbnRpYWxzIHVwZGF0ZTpkZXZpY2VfY3JlZGVudGlhbHMgZGVsZXRlOmRldmljZV9jcmVkZW50aWFscyBjcmVhdGU6ZGV2aWNlX2NyZWRlbnRpYWxzIHJlYWQ6cnVsZXMgdXBkYXRlOnJ1bGVzIGRlbGV0ZTpydWxlcyBjcmVhdGU6cnVsZXMgcmVhZDpydWxlc19jb25maWdzIHVwZGF0ZTpydWxlc19jb25maWdzIGRlbGV0ZTpydWxlc19jb25maWdzIHJlYWQ6aG9va3MgdXBkYXRlOmhvb2tzIGRlbGV0ZTpob29rcyBjcmVhdGU6aG9va3MgcmVhZDphY3Rpb25zIHVwZGF0ZTphY3Rpb25zIGRlbGV0ZTphY3Rpb25zIGNyZWF0ZTphY3Rpb25zIHJlYWQ6ZW1haWxfcHJvdmlkZXIgdXBkYXRlOmVtYWlsX3Byb3ZpZGVyIGRlbGV0ZTplbWFpbF9wcm92aWRlciBjcmVhdGU6ZW1haWxfcHJvdmlkZXIgYmxhY2tsaXN0OnRva2VucyByZWFkOnN0YXRzIHJlYWQ6aW5zaWdodHMgcmVhZDp0ZW5hbnRfc2V0dGluZ3MgdXBkYXRlOnRlbmFudF9zZXR0aW5ncyByZWFkOmxvZ3MgcmVhZDpsb2dzX3VzZXJzIHJlYWQ6c2hpZWxkcyBjcmVhdGU6c2hpZWxkcyB1cGRhdGU6c2hpZWxkcyBkZWxldGU6c2hpZWxkcyByZWFkOmFub21hbHlfYmxvY2tzIGRlbGV0ZTphbm9tYWx5X2Jsb2NrcyB1cGRhdGU6dHJpZ2dlcnMgcmVhZDp0cmlnZ2VycyByZWFkOmdyYW50cyBkZWxldGU6Z3JhbnRzIHJlYWQ6Z3VhcmRpYW5fZmFjdG9ycyB1cGRhdGU6Z3VhcmRpYW5fZmFjdG9ycyByZWFkOmd1YXJkaWFuX2Vucm9sbG1lbnRzIGRlbGV0ZTpndWFyZGlhbl9lbnJvbGxtZW50cyBjcmVhdGU6Z3VhcmRpYW5fZW5yb2xsbWVudF90aWNrZXRzIHJlYWQ6dXNlcl9pZHBfdG9rZW5zIGNyZWF0ZTpwYXNzd29yZHNfY2hlY2tpbmdfam9iIGRlbGV0ZTpwYXNzd29yZHNfY2hlY2tpbmdfam9iIHJlYWQ6Y3VzdG9tX2RvbWFpbnMgZGVsZXRlOmN1c3RvbV9kb21haW5zIGNyZWF0ZTpjdXN0b21fZG9tYWlucyB1cGRhdGU6Y3VzdG9tX2RvbWFpbnMgcmVhZDplbWFpbF90ZW1wbGF0ZXMgY3JlYXRlOmVtYWlsX3RlbXBsYXRlcyB1cGRhdGU6ZW1haWxfdGVtcGxhdGVzIHJlYWQ6bWZhX3BvbGljaWVzIHVwZGF0ZTptZmFfcG9saWNpZXMgcmVhZDpyb2xlcyBjcmVhdGU6cm9sZXMgZGVsZXRlOnJvbGVzIHVwZGF0ZTpyb2xlcyByZWFkOnByb21wdHMgdXBkYXRlOnByb21wdHMgcmVhZDpicmFuZGluZyB1cGRhdGU6YnJhbmRpbmcgZGVsZXRlOmJyYW5kaW5nIHJlYWQ6bG9nX3N0cmVhbXMgY3JlYXRlOmxvZ19zdHJlYW1zIGRlbGV0ZTpsb2dfc3RyZWFtcyB1cGRhdGU6bG9nX3N0cmVhbXMgY3JlYXRlOnNpZ25pbmdfa2V5cyByZWFkOnNpZ25pbmdfa2V5cyB1cGRhdGU6c2lnbmluZ19rZXlzIHJlYWQ6bGltaXRzIHVwZGF0ZTpsaW1pdHMgY3JlYXRlOnJvbGVfbWVtYmVycyByZWFkOnJvbGVfbWVtYmVycyBkZWxldGU6cm9sZV9tZW1iZXJzIHJlYWQ6ZW50aXRsZW1lbnRzIHJlYWQ6YXR0YWNrX3Byb3RlY3Rpb24gdXBkYXRlOmF0dGFja19wcm90ZWN0aW9uIHJlYWQ6b3JnYW5pemF0aW9uc19zdW1tYXJ5IGNyZWF0ZTphdXRoZW50aWNhdGlvbl9tZXRob2RzIHJlYWQ6YXV0aGVudGljYXRpb25fbWV0aG9kcyB1cGRhdGU6YXV0aGVudGljYXRpb25fbWV0aG9kcyBkZWxldGU6YXV0aGVudGljYXRpb25fbWV0aG9kcyByZWFkOm9yZ2FuaXphdGlvbnMgdXBkYXRlOm9yZ2FuaXphdGlvbnMgY3JlYXRlOm9yZ2FuaXphdGlvbnMgZGVsZXRlOm9yZ2FuaXphdGlvbnMgY3JlYXRlOm9yZ2FuaXphdGlvbl9tZW1iZXJzIHJlYWQ6b3JnYW5pemF0aW9uX21lbWJlcnMgZGVsZXRlOm9yZ2FuaXphdGlvbl9tZW1iZXJzIGNyZWF0ZTpvcmdhbml6YXRpb25fY29ubmVjdGlvbnMgcmVhZDpvcmdhbml6YXRpb25fY29ubmVjdGlvbnMgdXBkYXRlOm9yZ2FuaXphdGlvbl9jb25uZWN0aW9ucyBkZWxldGU6b3JnYW5pemF0aW9uX2Nvbm5lY3Rpb25zIGNyZWF0ZTpvcmdhbml6YXRpb25fbWVtYmVyX3JvbGVzIHJlYWQ6b3JnYW5pemF0aW9uX21lbWJlcl9yb2xlcyBkZWxldGU6b3JnYW5pemF0aW9uX21lbWJlcl9yb2xlcyBjcmVhdGU6b3JnYW5pemF0aW9uX2ludml0YXRpb25zIHJlYWQ6b3JnYW5pemF0aW9uX2ludml0YXRpb25zIGRlbGV0ZTpvcmdhbml6YXRpb25faW52aXRhdGlvbnMgcmVhZDpzY2ltX2NvbmZpZyBjcmVhdGU6c2NpbV9jb25maWcgdXBkYXRlOnNjaW1fY29uZmlnIGRlbGV0ZTpzY2ltX2NvbmZpZyBjcmVhdGU6c2NpbV90b2tlbiByZWFkOnNjaW1fdG9rZW4gZGVsZXRlOnNjaW1fdG9rZW4gZGVsZXRlOnBob25lX3Byb3ZpZGVycyBjcmVhdGU6cGhvbmVfcHJvdmlkZXJzIHJlYWQ6cGhvbmVfcHJvdmlkZXJzIHVwZGF0ZTpwaG9uZV9wcm92aWRlcnMgZGVsZXRlOnBob25lX3RlbXBsYXRlcyBjcmVhdGU6cGhvbmVfdGVtcGxhdGVzIHJlYWQ6cGhvbmVfdGVtcGxhdGVzIHVwZGF0ZTpwaG9uZV90ZW1wbGF0ZXMgY3JlYXRlOmVuY3J5cHRpb25fa2V5cyByZWFkOmVuY3J5cHRpb25fa2V5cyB1cGRhdGU6ZW5jcnlwdGlvbl9rZXlzIGRlbGV0ZTplbmNyeXB0aW9uX2tleXMgcmVhZDpzZXNzaW9ucyBkZWxldGU6c2Vzc2lvbnMgcmVhZDpyZWZyZXNoX3Rva2VucyBkZWxldGU6cmVmcmVzaF90b2tlbnMgY3JlYXRlOnNlbGZfc2VydmljZV9wcm9maWxlcyByZWFkOnNlbGZfc2VydmljZV9wcm9maWxlcyB1cGRhdGU6c2VsZl9zZXJ2aWNlX3Byb2ZpbGVzIGRlbGV0ZTpzZWxmX3NlcnZpY2VfcHJvZmlsZXMgY3JlYXRlOnNzb19hY2Nlc3NfdGlja2V0cyByZWFkOmZvcm1zIHVwZGF0ZTpmb3JtcyBkZWxldGU6Zm9ybXMgY3JlYXRlOmZvcm1zIHJlYWQ6Zmxvd3MgdXBkYXRlOmZsb3dzIGRlbGV0ZTpmbG93cyBjcmVhdGU6Zmxvd3MgcmVhZDpmbG93c192YXVsdCByZWFkOmZsb3dzX3ZhdWx0X2Nvbm5lY3Rpb25zIHVwZGF0ZTpmbG93c192YXVsdF9jb25uZWN0aW9ucyBkZWxldGU6Zmxvd3NfdmF1bHRfY29ubmVjdGlvbnMgY3JlYXRlOmZsb3dzX3ZhdWx0X2Nvbm5lY3Rpb25zIHJlYWQ6Zmxvd3NfZXhlY3V0aW9ucyBkZWxldGU6Zmxvd3NfZXhlY3V0aW9ucyByZWFkOmNvbm5lY3Rpb25zX29wdGlvbnMgdXBkYXRlOmNvbm5lY3Rpb25zX29wdGlvbnMgcmVhZDpjbGllbnRfY3JlZGVudGlhbHMgY3JlYXRlOmNsaWVudF9jcmVkZW50aWFscyB1cGRhdGU6Y2xpZW50X2NyZWRlbnRpYWxzIGRlbGV0ZTpjbGllbnRfY3JlZGVudGlhbHMiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMiLCJhenAiOiJqMzBYV0Y4Mlpza3RlcjZOVUdwb0J5R0FJTmtLdjkxUyJ9.QaN4H4fEPJ4oOkd5jMQeJhA5yePHiI5QguUspXaG1v3LHHs2x04y-9C1qndyDSpYLj4WlgnC3Z6c5kZFBfCU7aTCLgJvhC4pFt9X3N2K8VG3BRZfvNu3Col4GLbHlAZ_iJAKrYEnJ2GqQZMc2haDZiMryOeppwr_wP1ZWH-mqC6Rdf9WlbHhuqkNhw_niV4zPdN89l8okmhw_P5QGc2G6JqljyNxjErg22-pWuVzUyhTtHrPoyEvcsGvsPhWadha9L1-YH7vRVs-1Bz7FMapMprV63_x4tZBjoc7DgfovUVOnmT0hv0Y9PRYzXcq6_ERPwVXdUBaLZEviunYz-PlmA'
const url = 'https://dev-gop37obgcywx3sqh.us.auth0.com/api/v2/users/'

function setCookie(allergy_list) {
  document.cookie = "allergies=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  const d = new Date();
  d.setTime(d.getTime() + (365*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = 'allergies' + "=" + allergy_list + ";" + expires + ";path=/";
}

async function add_get_div(user_id) {
  let response = await fetch(url+user_id, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': auth0_token
    }
  })

  let allergies = await response.json()

  try {
      allergies = allergies.user_metadata['allergies']
  } catch (error) {
      allergies = [];
      console.log(error)
  }

  let allergies_element = document.getElementById('allergies')
  allergies_element.innerHTML = '';
  if (allergies.length == 0) {return allergies_element.innerHTML = '';}
  if (allergies.length == 1) {
    allergies_element.innerHTML += '<button style="margin-right: 70px; margin-top: 30px" id=' + 0 + '>' + 'Delete' + '</button>' + '<a' + ' id=' + 0 + 'b>'+ allergies[0] + '</a>' + '<br>'
    document.getElementById('0').addEventListener('click', () => delete_allergy(user_id, allergies[0]))
    return true
  }
  allergies.forEach(function (button, index) {
    let allergies_element = document.getElementById('allergies')
    allergies_element.innerHTML +=  '<button style="margin-right: 70px; margin-top: 30px" id=' + index + '>' + 'Delete' + '</button>' + '<a' + ' id=' + index + 'b>'+ button + '</a>' + '<br>'
    let element = document.getElementById(index)
    console.log(element)
    element.addEventListener('click', () => {
      delete_allergy(user_id, button)
    })
  });
  // for (let item of allergies) {
  //   console.log(allergies.indexOf(item))
  //   allergies_element.innerHTML +=  '<button style="margin-right: 70px; margin-top: 30px" id=' + allergies.indexOf(item) + '>' + 'Delete' + '</button>' + '<a' + ' id=' + allergies.indexOf(item) + 'b>'+ item + '</a>' + '<br>'
  //   document.getElementById(allergies.indexOf(item)).addEventListener('click', () => delete_allergy(user_id, item))
  //   console.log(item)
  // }
}

function addToDiv(user_id, list) {
  let allergies = document.getElementById('allergies')
  allergies.innerHTML = '';
  if (list.length == 0) {return allergies.innerHTML = '';}
  if (list.length == 1) {
    allergies.innerHTML += '<button style="margin-right: 70px; margin-top: 30px" id=' + 0 + '>' + 'Delete' + '</button>' + '<a' + ' id=' + 0 + 'b>'+ list[0] + '</a>' + '<br>'
    document.getElementById('0').addEventListener('click', () => delete_allergy(user_id, list[0]))
    return true;
  } 
  list.forEach(function (button, index) {
    let allergies_element = document.getElementById('allergies')
    allergies_element.innerHTML +=  '<button style="margin-right: 70px; margin-top: 30px" id=' + index + '>' + 'Delete' + '</button>' + '<a' + ' id=' + index + 'b>'+ button + '</a>' + '<br>'
    let element = document.getElementById(index)
    element.addEventListener('click', () => {
      delete_allergy(user_id, button)
    })
  });
  // for (let item of list) {
  //   allergies.innerHTML +=  '<button style="margin-right: 70px; margin-top: 30px" id=' + list.indexOf(item) + '>' + 'Delete' + '</button>' + '<a' + ' id=' + list.indexOf(item) + 'b>'+ item + '</a>' + '<br>'
  //   document.getElementById(list.indexOf(item)).addEventListener('click', () => delete_allergy(user_id, item))
  // }
}

async function get_allergies(user_id) {
  let response = await fetch(url+user_id, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': auth0_token
      }
  })

  let allergies = await response.json()

  try {
      allergies = allergies.user_metadata['allergies']
      addToDiv(user_id, allergies)
      setCookie(allergies)
      return allergies
  } catch (error) {
      allergies = [];
      console.log(error)
      addToDiv(user_id, allergies)
      setCookie(allergies)
      return allergies
  }
}

async function write_allergy(user_id, allergy) {
  let allergy_list = await get_allergies(user_id)
  console.log(allergy_list)

  if (allergy_list.includes(allergy)) {
      return false;
  }

  allergy_list.push(allergy)
  fetch(url+user_id, {
      method: 'PATCH',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': auth0_token
      },
      body: JSON.stringify({'user_metadata': {'allergies': allergy_list}})
  })

  addToDiv(user_id, allergy_list)
  setCookie(allergy_list)
}

async function delete_allergy(user_id, allergy) {
  let allergy_list = await get_allergies(user_id)

  let index = allergy_list.indexOf(allergy)
  console.log(allergy_list, index)
  if (index == -1) {
      console.log("jhi")
      return false;
  }

  allergy_list.splice(index)
  console.log(allergy_list)

  fetch(url+user_id, {
      method: 'PATCH',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': auth0_token
      },
      body: JSON.stringify({'user_metadata': {'allergies': allergy_list}})
  })

  addToDiv(user_id, allergy_list)
  setCookie(allergy_list)
}

const Account = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (!isAuthenticated) {return alert('You are not logged in.')}

  let user_id = user.sub

  // let allergy_list = get_allergies(user_id);
  // let dt = []

  // for (let i = 0; i < allergy_list.length; i++) {
  //   console.log(allergy_list[i]); // Loop through each allergy
  //   // Here you can add it to the DOM or process it further
  //   dt.push(<p>{String(allergy_list[i])}</p>)
  // }

  // console.log(dt)

  setTimeout(() => add_get_div(user_id), 1250)

  return (
    <>
    <div className="flex justify-center translate-y-36">
        <div className="flex flex-col justify-center items-center p-6 w-[40vw] h-[60vh] rounded-3xl  shadow-xl">
            <div>
              <h1 className='text-center text-4xl mb-9' >Get Started!</h1>
              <p>Blacklist ingredients below.</p>
              <input id="allergyin" type='text' className='border-gray-500 border-solid border-2 rounded'></input>
              <button id="allergysubmit" className='ml-[10px] px-2 py-1 bg-green-400 hover:bg-green-500 transition rounded-xl' onClick={() => write_allergy(user_id, document.getElementById('allergyin').value)}>Add</button>
            </div>
            <div id="allergies" className='mt-2'></div>
        </div>
        <div className="w-[30vw] flex items-center justify-center h-64 shadow-lg ml-12">
          <div className="text w-[70%] text-center flex flex-col items-center justify-center">
          <p>1. Extract the zip file below to a regular folder</p>
          <a href='https://github.com/user-attachments/files/17005541/hazard-extension.zip'>harzard-extension.zip</a>
          <p>2. Go to chrome://extensions/ (replace chrome with your browser)</p>
          <p>3. Turn on developer mode</p>
          <p>4. Click on 'load unpacked' and upload your extracted folder.</p>
          <p>5. Enjoy!</p>
          </div>

        </div>
    </div>
    </>
  )
}

export default Account