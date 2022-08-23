let data = [
  {
    id: 1,
    todo: "Belajar",
    place: "Rumah",
  },
  {
    id: 2,
    todo: "Shopping",
    place: "AEON Mall",
  },
  {
    id: 3,
    todo: "Nonton Bola",
    place: "Gelora Bung Karno",
  },
];

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//RENDER LIST
const fnRenderData = (index) => {
  const listData = data.map((dataSingle) => {
    const { id, todo, place } = dataSingle;
    if (id !== index) {
      return `
    <tr>
        <td>${id}</td>
        <td>${todo}</td>
        <td>${place}</td>
        <td><input type="button" value="Edit" onclick = "fnEdit(${id})"/></td>
        <td><input type="button" value="Delete" onclick = "fnDelete(${id})"/></td
    </tr>`;
    } else {
      return `
        <tr>
            <td>${id}</td>
            <td><input value = "${todo}" type="text" id = "todoEdit"/></td>
            <td><input value = "${place}" type="text" id = "placeEdit"/></td>
            <td><input type="button" value="save" onclick="fnSave(${id})"/></td>
            <td><input type="button" value="cancel" onclick = "fnCancel()"/></td>
        </tr>`;
    }
  });

  document.getElementById("render").innerHTML = listData.join("");
};

fnRenderData();

///////////////////////////////////////////////////////////////////////////////////////////
function fnEdit(index) {
  fnRenderData(index);
}

//////////////////////////////////////////////////////////////////////////////////////////
//FUNCTION CANCEL
function fnCancel() {
  fnRenderData();
}

///////////////////////////////////////////////////////////////////////////////////////////////
//DELETE***
const fnDelete = (index) => {
  data = data.filter((dataSingle) => {
    return dataSingle.id != index;
  });
  fnRenderData();
};

////////////////////////////////////////////////////////////////////////////////////////
// FUNCTION SAVE ***

function fnSave(index) {
  const todoNew = document.getElementById("todoEdit").value;
  const placeNew = document.getElementById("placeEdit").value;

  const findIndexData = data.findIndex((dataSingle) => {
    return dataSingle.id == index;
  });

  data[findIndexData] = {
    ...data[findIndexData],
    todo: todoNew,
    place: placeNew,
  };
  fnRenderData();
}

///////////////////////////////////////////////////////////////////////////////////////////
//INPUT DATA

function fnInputData() {
  // ambil data dari HTML
  const newTodo = document.getElementById("todoInput").value;
  const newPlace = document.getElementById("placeInput").value;
  const { id } = data;
  const newId = data[data.length - 1].id + 1;

  //push new data

  data.push({ id: newId, todo: newTodo, place: newPlace });

  //kotak datanya kembali kosong
  document.getElementById("todoInput").value = "";
  document.getElementById("placeInput").value = "";

  //memanggil fungsi render

  fnRenderData();
}

console.log(data[data.length - 1].id);
