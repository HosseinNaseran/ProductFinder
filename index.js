/*
var searchId = document.querySelector("input");
searchId.addEventListener("change", function () {
  let text = searchId.value;
  var past = text.split("-");
  searchId.value = past + "-";
});

function submit() {
  let input = document.querySelector("input").value;
  if (!input) {
    alert("لطفا یک ایدی تایپ کنید");

    return;
  }
}

// let enteredIds = []
let products = fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => {
    products = data;
  });

searchId.addEventListener("change", function () {
  let enteredvalue = parseInt();
  if (Number(enteredvalue)) {
    enteredIds.push(enteredvalue);
  } else {
    alert("لطفا عین آدم عدد وارد کنید");
  }
});

let searched = document.querySelector("button");
searched.addEventListener("click", function submit() {
  document.getElementById("result").style.display = "flex";

  var filteredproduct = products.filter((product) =>
    searchId.includes(product.id)
  );

  let mainproduct = filteredproduct.map((product) => (product = { product }));

  if (mainproduct.length > 0) {
    //  console.log(filteredproduct)
    document.getElementById("result").innerHTML = JSON.stringify(mainproduct);
  } else {
    alert("محصول مورد نطر پیدا نشد");
  }
});
*/

///////////////////////////////////////////////////////////////////////////////////////

let searchId = (onchange = (e) => {
  if (!isNaN == e.target.value) {
    alert("لطفا چیزی وارد کنید");
  } else if (!Number(e.target.value)) {
    alert("لطفا عین آدم عدد وارد کنید");
  } else {
    searchId = e.target.value;
  }
});

/*fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => {
    product = data;
    console.log(product);
  });*/

function submit() {
  document.getElementById("result").style.display = "flex";

  fetch(`https://jsonplaceholder.typicode.com/posts/${searchId}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("محصول مورد نظر پیدا نشد");
      }
      return response.json();
    })
    .then((data) => {
      document.getElementById("result").innerHTML = JSON.stringify(data);
    })
    .catch((error) => {
      alert(error.message);
    });
}
