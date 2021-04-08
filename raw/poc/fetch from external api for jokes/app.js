document.querySelector('.get-jokes').addEventListener('click', getJokes);  //click event added

function getJokes(e)
 {
  const number = document.querySelector('input[type="number"]').value;          //input from box is ccatched in number

  const xhr = new XMLHttpRequest();                                           
  
  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);       //req open 

  xhr.onload = function()
   {
    if(this.status === 200)               //status checking
     {
      const response = JSON.parse(this.responseText);     //converted from json->obj
      
      let output = '';

      if(response.type === 'success')                    //obj element
      {
        response.value.forEach(function(joke)
        {
          output += `<li>${joke.joke}</li>`;
        });
      }
      else
      {
        output += '<li>Something went wrong</li>';
      }

      document.querySelector('.jokes').innerHTML = output;   //output to be display on main site
    }
  }

  xhr.send();

  e.preventDefault();       //toavoid default functionality
}