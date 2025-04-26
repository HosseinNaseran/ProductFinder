let searchId = document.querySelector("input");
searchId.addEventListener("change", function () {
    searchId.value = searchId.value + " - "

})



function submit() {
    let input = document.querySelector("input").value;
    if (!input) {
        alert("لطفا یک ایدی تایپ کنید");
        
    return;
    }
    
}

/*let search = document.querySelector("button");
search.addEventListener("click", function submit() {
    
fetch('https://jsonplaceholder.typicode.com/posts')
.then((response) => response.json())
.then(posts => {
    if (posts.id == parseInt(product.value)) {
        alert(posts)
        
        }
        else{
            alert("محصول مورد نظر یافت نشد")
    }
    
    }
    )
    }
    )*/
   let enteredIds = []
   let products = []

   fetch("https://jsonplaceholder.typicode.com/posts")
   .then(response => response.json())
   .then(data => {
       products = data;
    })
    
    
    searchId.addEventListener("change", function () {
        let enteredvalue = parseInt(searchId.value)
        if (Number(enteredvalue)) {
            enteredIds.push(enteredvalue)
            
        }
        else {
            alert("لطفا عین آدم عدد وارد کنید")
        }
        
    })
    
    
    
    
    let searched = document.querySelector("button");
    searched.addEventListener("click", function submit(){
        document.getElementById("result").style.display="flex"
        
        
        
        let filteredproduct =
            products.filter((product) => enteredIds.includes(product.id))
            
        
      /*  let mainproduct = 
            
            filteredproduct.map((product) => product = {product} )*/
        
        
        
        
        
        
        if (filteredproduct.length > 0) {
            
            
            //  console.log(filteredproduct)
            document.getElementById("result")
            .innerHTML= JSON.stringify(filteredproduct)

            
        

    }
    else {
        alert("محصول مورد نطر پیدا نشد")
    }

})



