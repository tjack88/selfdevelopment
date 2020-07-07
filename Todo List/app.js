let inputValue = document.querySelector('#inputValue');
let addItem = document.querySelector('#addItem');
let dataOutput = document.querySelector('#dataOutput');
let currentLs = localStorage.getItem("toDoList");
let currentLsToArray = JSON.parse(currentLs);
let errorMessage = document.querySelector('#error');
let tasks = [];

function toDoList() {

    /* Adding items to local storage */
    /******************************* */

    addItem.addEventListener('click', () => {
        // Grab value from text input
        let value = inputValue.value;
        
        // If no value is entered into text inout
        if (value === '') {
            // Error message is output
            errorMessage.textContent = 'Please enter a value';

            // Prevent empty value from being pushed to local storage
            return false;
        } else if (localStorage.length === 0) { // If local storage is currently empty
            
            // Add value to empty array
            tasks.push(value);

            // Convert array to string and set in local storage
            localStorage.setItem("toDoList", JSON.stringify(tasks));

            // Reload page
            location.reload();
        } else { // If local storage is NOT currently empty

            // Retrieve current data in local storage
            let getData = localStorage.getItem("toDoList");

            // Convert retrieved data back to array
            let tasksToArray = JSON.parse(getData);

            // Add new entered value to array
            tasksToArray.push(value);

            // Re-convert array back to string and overwrite current value in local storage
            localStorage.setItem("toDoList", JSON.stringify(tasksToArray));

            // Reload page
            location.reload();
        }
    })



    /* Appending items to list and creating remove item buttons */
    /********************************************************** */

    // Creating the list element
    var list = document.createElement('ul')

    // Looping through array items
    currentLsToArray.forEach((e, index) => {
        
        // Creating the list item
        let item = document.createElement('li');

        // Creating the button element
        let button = document.createElement('button');

        // Set button label
        button.innerHTML = "remove";

        // Setting list item contents
        item.appendChild(document.createTextNode(e));

        // Setting remove button contents
        item.appendChild(button);

        // Add it to the list
        list.appendChild(item);



        /* Removing items from list */
        /************************** */

        button.addEventListener('click', function() {
            // Delete element from array
            currentLsToArray.splice(index, 1);

            // Re-convert array back to string and overwrite current value in local storage
            localStorage.setItem("toDoList", JSON.stringify(currentLsToArray));

            // Reload page
            location.reload();
        });
    })

    // Return constructed list
    return list;
}

// Output list items to page
dataOutput.appendChild(toDoList());

