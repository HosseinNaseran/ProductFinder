let searchId = (onchange = (e) => {
  if (!isNaN == e.target.value) {
    alert("لطفا چیزی وارد کنید");
  } else if (!Number(e.target.value)) {
    alert("لطفا عین آدم عدد وارد کنید");
  } else {
    searchId = e.target.value;
  }
});

function submit() {
  document.getElementById("result").style.display = "table";

  fetch(`https://jsonplaceholder.typicode.com/posts/${searchId}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("محصول مورد نظر پیدا نشد");
      }
      return response.json();
    })
    .then((data) => {
     

      const keys = Object.keys(data);
//////////////////////////////////////////////////////////////////////////////////////////////
    /* const tableHead = document.getElementById("name");
      tableHead.innerHTML = "<th>" + keys + "</th>";

      const tableBody = document.getElementById("td");
      // tableBody.innerHTML = "<tr>" + "<td>"+ JSON.stringify(data)+"</td>" + "</tr>";
      //  tableBody.innerHTML = "<td>"+keys.map(value=> data[value]) +"</td>"
      tableBody.innerHTML = keys.map((value) => `<td>${data[value]}</td>`);
      */
 /////////////////////////////////////////////////////////////////////////////////////////////


      let tableHead = document.getElementById("name");
      tableHead.innerHTML =
       "<th>" + keys[0] + "</th>" + 
       "<th>" + keys[1] + "</th>" +
       "<th>" + keys[2] + "</th>" +
       "<th>" + keys[3] + "</th>"
       let tableBody = document.getElementById("body");
       tableBody.innerHTML = 
       "<td>"+keys.map(value=> data[value])[0] +"</td>" + 
       "<td>"+keys.map(value=> data[value])[1] +"</td>" +
       "<td>"+keys.map(value=> data[value])[2] +"</td>" +
       "<td>"+keys.map(value=> data[value])[3] +"</td>"
      })

    .catch((error) => {
      alert(error.message);
    });
}
