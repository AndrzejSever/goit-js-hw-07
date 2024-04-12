

const wayImput = document.querySelector('#name-input');


const waySpan = document.querySelector('#name-output');

wayImput.addEventListener("input", (event) => {

  const eventTarget = event.currentTarget.value

  if (eventTarget == "") {    
     waySpan.textContent = "Anonymous";
    return
  };
 
  waySpan.textContent = eventTarget;

});

  