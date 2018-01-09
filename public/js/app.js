window.setTimeout(function() {
  if(firebase.auth().currentUser != null){
    console.log(firebase.auth().currentUser);
  } else {
    console.log('no está logueado');
    window.location.href = '../login.html';
  }
},500);

$(document).ready(function() {
  var nameUserChat = $('#name');
  var valTextChat = $('#message');
  var btnSend = $('#btn-send');
  var contChat = $('#content-chat');

  // mandar información a firebase para el chat
  
  btnSend.on('click', function() {
    var name = nameUserChat.val();
    var msg = valTextChat.val();

    firebase.database().ref('chat').push({
      name: name,
      message: msg
    });
  });

  // obtiene data de la base de datos

  firebase.database().ref('chat').on('value', function(snapshot) {
    contChat.html('');
    snapshot.forEach(function(elm) {
      var element = elm.val();
      var txtName = element.name;
      var txtMsg = element.message;
      var tName = $('<li/>', {
        'class': 'li',
      }).text(txtName + ': ');
      var tMsg = $('<li/>', {
        'class': 'li',
      }).text(txtMsg);
      contChat.append(tName);
      contChat.append(tMsg);
    });
  });
});
