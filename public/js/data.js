//  Initialize Firebase
var config = {
  apiKey: 'AIzaSyBMN5Wjo5fxoFRPJGxFFUHpfr9tPjV9lCc',
  authDomain: 'memorabilia-lab.firebaseapp.com',
  databaseURL: 'https://memorabilia-lab.firebaseio.com',
  projectId: 'memorabilia-lab',
  storageBucket: 'memorabilia-lab.appspot.com',
  messagingSenderId: '120465628541'
};
firebase.initializeApp(config);

function loginGoogle() {
  	if (!firebase.auth().currentUser) {
  	 var provider = new firebase.auth.GoogleAuthProvider();
  	 provider.addScope('https://www.googleapis.com/auth/plus.login');
  	 firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
			  var token = result.credential.accessToken;
			  // The signed-in user info.
			  var user = result.user;

			  var name = result.user.displayName;
			  $('#page').css('display', 'none') && $('#page-2').css('display', 'block');
			  $('#well').text('Bienvenido' + name + 'a Memorabilia');
    }).catch(function(error) {
			  // Handle Errors here.
			  var errorCode = error.code;
			  var errorMessage = error.message;
			  // The email of the user's account used.
			  var email = error.email;
			  // The firebase.auth.AuthCredential type that was used.
			  var credential = error.credential;

			  if (errorCode === 'auth/account-exists-with-different-credential') {
			  	alert('Es el mismo usuario');
			  }
    });
  	} else {
  		firebase.auth().signOut();
  	}
}

function loginFacebook() {
  	if (!firebase.auth().currentUser) {
  	 var provider = new firebase.auth.FacebookAuthProvider();
  	 provider.addScope('public_profile');
  	 firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
			  var token = result.credential.accessToken;
			  // The signed-in user info.
			  var user = result.user;

			  var name = user.displayName;
			  $('#page').css('display', 'none') && $('#page-2').css('display', 'block');
			  $('#well').text('Bienvenido' + name + 'a Memorabilia');
    }).catch(function(error) {
			  // Handle Errors here.
			  var errorCode = error.code;
			  var errorMessage = error.message;
			  // The email of the user's account used.
			  var email = error.email;
			  // The firebase.auth.AuthCredential type that was used.
			  var credential = error.credential;

			  if (errorCode === 'auth/account-exists-with-different-credential') {
			  	alert('Es el mismo usuario');
			  }
    });
  	} else {
  		firebase.auth().signOut();
  	}
}

$('#btn-google').on('click', loginGoogle);
$('#btn-fb').on('click', loginFacebook);
