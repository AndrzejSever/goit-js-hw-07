

const wayImput = document.querySelector('#name-input');

const waySpan = document.querySelector('#name-output');

wayImput.addEventListener("input", (event) => {

  const eventTarget = event.currentTarget.value.trim()
  console.log(eventTarget)

  if (eventTarget == ""){   
     waySpan.textContent = "Anonymous";
    return
  };
 
  waySpan.textContent = eventTarget;
});


  