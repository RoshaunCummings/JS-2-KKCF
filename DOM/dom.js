// 1. select the element with the id 'title' using getElementById
document.getElementById("title")

// 2.  save the reference to the element with the id 'title' to a variable
let myTitle = document.getElementById("title")

// 3. console log the new variable 
// console.log(myTitle)

// 4. Use query selector to select the first h2 
document.querySelector("h2")

//5. Use query selector to select the paragraph by its class of 'description'
document.querySelector(".description")

// 6. Use query selector all to select all the h2's on the page
console.log(document.querySelectorAll("h2"))


//7. Exercise 1 Create at least 3 different elements in the body of your html file
// In your JS file select each element and log them to the console 
// Select multiple elements with querySelectorAll() and log them to the console

// 8. use innerText property to change the text of the h1 with the id 'transform

// 9. select the element with the id 'text-output' and use innertext to change its value to 'bar'

// 10. Exercise 2: Welcome User
// Use a prompt()to ask the user for their name 
// Concatenate the user’s name into a welcome message
// Use a DOM method to output the welcome message into an html element

document.querySelector("#transform").innerText = "Sailor Moon"

// 11. Modify CSS - Select the element with the id 'text-output'
// use the style.fontSize property to set the text size to 30px
document.querySelector("#text-output").style.fontSize = "300px"

// 12. Select the body element and use style.cssText to change the text color and background color
document.querySelector("body").style.cssText = "color: white; background-color: black;"

//13. Change src attribute of the image using .src property

// 14. create a new div element
document.createElement("div")

// 15. save the new div to a variable
let myDiv = document.createElement("div")

// 16.  append the new div to the body 
document.body.append(myDiv)

// 17. use innerText to giv the new div the text "Hello World"
myDiv.innerText = "Hello World"

// 18. create and append a new p tag to the div

// 19. use .remove() to delete the new div from the page

// 20. Exercise 4 Create img Element 
// Using JS, create an <img> element 
// Use a method to give it a value for the src attribute
// Append it to the page inside another element besides the body element
// Open the html file in the browser or use Live Server to view it
// Call the remove() method on your img element to remove it from the page




  //declare function 
  function sayHello(){
    //whatever code your function will run 
    alert("Hello world!")
  }

  //call the function 
//   sayHello();



  //parameters 
  function add2nums(a, b){
    alert(a+b)
  }

  //pass in different numbers each time the function is called 
//   add2nums(2, 3)
//   add2nums(10, 2)

//addeventlistener

//select the button element 
let myButton = document.querySelector("button")

//declared event handler function 
function handleClick(){
    alert('button was clicked')
}

//use addEventListener to run the handleClick function when the button is clicked
myButton.addEventListener('click', handleClick)
//we are listening for the click event, when it happens, run the handleClick function 


//random color exercise

//select random color button 
let colorButton = document.querySelector("#random-color")

//declare event handler function 
function randomColor(){
    //255 is the max number 
    let randomR = Math.floor(Math.random() * 255 )
    let randomB = Math.floor(Math.random() * 255 )
    let randomG = Math.floor(Math.random() * 255 )

    //select the body element
    //change the background color 
    document.body.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
}

colorButton.addEventListener("click", randomColor)