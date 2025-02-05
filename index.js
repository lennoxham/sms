// 1. take values from the inputs and store them in a varible
// 2. Make calculations
// 3. Display it on our table on clicking the button (addStudent)


// 4. if inputs are empty and we click on add student button we show an error below the input
// 5. if inputs of scores are above 100 or below 0 display an error at the bottom of the input
// 6. Caculate the summary using CCS btn and disply it at the bottom of the table
// 7. Remove btn in actions to remove individual items
// 8. Style the bg based on Grade of student
// 9. When no data in table and we click on CCS btn display "No Student added"


// STEP 1, 2, 3
// Add student btn 1,2,3

// step 4 - Input validation

document.getElementById("addStudent").addEventListener("click", function () {
   
    // retrieving values from inputs
    const student = document.getElementById("studentName").value
    let mathScore = document.getElementById("maths").value 
    let englishScore = document.getElementById("english").value
    let scinceScore = document.getElementById("science").value

    // Calculating the scores and assigning grades using if statements
    const total = Number(mathScore) + Number(englishScore) + Number(scinceScore)        
    const average = (total/3).toFixed(2) // Adds 2 dp

    let grade = "F"
    if (average >= 90) {
        grade = "A"
    } else if (average >= 80) {
        grade = "B"
    } else if (average >= 70) {
        grade = "C"
    } else if (average >= 60) {
        grade = "D"
    } else {
        grade = "F"
    }

    // Updating the table
   document.getElementById("studentList").insertRow().innerHTML = `
                <td>${student}</td>
                <td>${mathScore}</td>
                <td>${scinceScore}</td>
                <td>${englishScore}</td>
                <td>${total}</td>
                <td>${average}</td>
                <td>${grade}</td>
                <td><button>Delete</button></td>
   `   

    

    // Show an error below inputs if input is empty

    if (student === "") {
        document.getElementById("nameMsg").textContent = "Name cannot be Empty!"
        document.getElementById("nameMsg").style.color = "red"
    } else {
        document.getElementById("nameMsg").textContent = ""
        document.getElementById("nameMsg").style.color = "black"
    }
    
    if (mathScore === "") {
        document.getElementById("numberMsg").textContent = "MathScore cannot be Empty!"
        document.getElementById("numberMsg").style.color = "red"
    } else {
        document.getElementById("numberMsg").textContent = ""
        document.getElementById("numberMsg").style.color = "black"
    }

    if (scinceScore === "") {
        document.getElementById("scienceMsg").textContent = "ScienceScore cannot be Empty!"
        document.getElementById("scienceMsg").style.color = "red"
    } else {
        document.getElementById("scienceMsg").textContent = ""
        document.getElementById("scienceMsg").style.color = "black"
    }

    if (englishScore === "") {
        document.getElementById("englishMsg").textContent = "EnglishScore cannot be Empty!"
        document.getElementById("englishMsg").style.color = "red"
    } else {
        document.getElementById("englishMsg").textContent = ""
        document.getElementById("englishMsg").style.color = "black"
    }
    

})