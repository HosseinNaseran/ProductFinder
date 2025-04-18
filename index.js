let product = document.querySelector("input");
product.addEventListener("change", function () {
    product.value = product.value + " - "

})

function submit() {
    const input = document.querySelector("input").value;
    if (!input) {
        alert("لطفا یک ایدی تایپ کنید");
        return;
    }
}

let search = document.querySelector("button");
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
)
