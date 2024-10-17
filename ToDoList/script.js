
document.addEventListener("DOMContentLoaded", function() {

    
    const input = document.getElementById("itemInput");
    const addButton = document.getElementById("addButton");
    const deleteButton = document.getElementById("deleteButton");
    const itemList = document.getElementById("itemList");

   
    addButton.addEventListener("click", function() {
        const newItemText = input.value.trim(); 

        if (newItemText !== "") { 
            const newItem = document.createElement("li"); 
            newItem.textContent = newItemText; 

       
            newItem.addEventListener("click", function() {
                
                newItem.classList.toggle("selected");
            });

      
            itemList.appendChild(newItem);

           
            input.value = "";
        } else {
            alert("Please enter a valid item");
        }
    });

  
    deleteButton.addEventListener("click", function() {
        const selectedItems = document.querySelectorAll(".selected");
        selectedItems.forEach(function(item) {
            item.remove(); 
        });
    });
});
