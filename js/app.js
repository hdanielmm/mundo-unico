let dataList = [];

try {
  if (localStorage.dataForm !== null) {
    dataList = JSON.parse(localStorage.dataForm);
  }
} catch (error) {
  console.log(error);
}

console.log("dataList", dataList);

const saveInLocalStorage = () => {
  const newData = {
    name: $("#InputName").val(),
    lastName: $("#InputLastName").val(),
    email: $("#InputEmail").val(),
    phone: $("#InputPhone").val(),
    Address: $("#InputAddress").val()
  }

  dataList.push(newData);
  localStorage.dataForm = JSON.stringify(dataList);
  alert("Se guardó la información");
}

$(".btn").on("click", () => {
  saveInLocalStorage();
});