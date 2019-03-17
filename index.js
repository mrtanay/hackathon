var db = firebase.firestore();

function storeData(){
  var nameText = document.getElementById("name_field").value;
  //var usernameText = document.getElementById("username_field").value;
  //var addressText = document.getElementById("address_field").value;
  var phoneText = document.getElementById("phone_field").value;
  var address_dom = document.getElementById("myList");
  var address_index = address_dom.options[address_dom.selectedIndex].value;
  var address_text = address_dom.options[address_dom.selectedIndex].text;

  db.collection("Users").doc().set({
    name: nameText,
    //username: usernameText,
    //address: addressText,
    phone: phoneText,
    location_index: address_index,
    location_name: address_text
  })
  .then(function(){
  })
  .catch(function(){
  })
}