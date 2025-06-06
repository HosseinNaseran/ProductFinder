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
      /////////////////////////////////////////////////////////////////////////////
      /*
     document.getElementById("result").innerHTML = JSON.stringify(data);
       const keys = Object.keys(data);
      
    console.log(keys);
  
   
        let tableTh= document.getElementsByTagName("table");
        tableTh.innerHtml = "<tr>" + keys.map(key=>`<th>${keys}</th>`).join("") + "</tr>";
       
     
  
  
   document.getElementsByClassName("name").innerHTML =JSON.stringify(`${keys.id}`);
  document.getElementsByTagName("table").innerHTML = `<tr><td>${searchId.id}</td><td>${searchId.title}</td><td>${searchId.body}</td></tr>`;*/
      ///////////////////////////////////////////////////////////////////////////////////////////////

      const keys = Object.keys(data);

      const tableHead = document.getElementById("th");
      tableHead.innerHTML = "<th>" + keys + "</th>";

      const tableBody = document.getElementById("td");
      // tableBody.innerHTML = "<tr>" + "<td>"+ JSON.stringify(data)+"</td>" + "</tr>";
      //  tableBody.innerHTML = "<td>"+keys.map(value=> data[value]) +"</td>"
      tableBody.innerHTML = keys.map((value) => `<td>${data[value]}</td>`);

      // let {id , title , body} = keys;
      // let goods = id;
      // console.log(goods);
    })

    .catch((error) => {
      alert(error.message);
    });
}
