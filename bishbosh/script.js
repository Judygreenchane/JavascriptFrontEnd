
document.addEventListener("DOMContentLoaded", function () {
   
    const button = document.getElementById("btnresult")

   
    button.addEventListener("click", function () {
       
        const num1 = document.getElementById("num1").value
        const num2 = document.getElementById("num2").value
        const limit = document.getElementById("limit").value

        const output =document.querySelector('#output');
       
        if (isNaN(num1) || isNaN(num2) || isNaN(limit)){
            document.getElementById("result").textContent = "Please enter valid numbers"
        } else {

            for(let i=1;i<=limit;i++){
                if(i% num1==0 && i%num2==0)
                    document.getElementById("output").innerHTML += `Bish Bosh <br>` 
                else if(i%num1==0)
                    output.innerHTML+=`Bish <br>`
               
                else if(i%num2==0)
                 output.innerHTML+=`Bosh <br>`
                else
                output.innerHTML+=`${i} <br>`

            }


           
        }
    });
});


