// const elAccess = document.querySelectorAll(".item");

// const Arr = [...elAccess];

// console.log(Arr);

// Arr.forEach( el =>  )

const elAccess = document.querySelectorAll(".item");

console.log(`Number of categories : ${elAccess.length}`);

elAccess.forEach(function (item, index) {
  const category = item.querySelector("h2").textContent;
  const elements = item.querySelectorAll("li").length;
  console.log(
    `Category: ${category}, 
 Elements: ${elements}`
  );
});



const varParental = document.querySelector('body>ul')
varParental.classList.add("parental")


const varFilial = document.querySelectorAll(".item>ul")
// varFilial.classList.add("filial")

const arrFilial = [...varFilial]

arrFilial.forEach(el => 
el.classList.add("filial")
)
