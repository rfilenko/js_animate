// var container = document.getElementById("wrapper");

// for (var i = 0; i < 100; i++) {
//     container.innerHTML += '<div class="red"></div>';
// }
window.onload = function(){

	var container = document.getElementById("wrapper"); //selecting #wrapper

	for (var i = 0; i < 100; i++) {
	    container.innerHTML += '<div class="red"></div>'; //creating div with .red
	}

	container.innerHTML += '<div class="gitAccount">https://github.com/rfilenko</div>'; //creating div with .gitAccount

	var redSq = document.getElementsByClassName('red');  //variable for selecting all .red divs
	var gitAccount = document.getElementsByClassName('gitAccount'); //variable for selecting div with .gitAccount


	function git() {
		TweenMax.to(container, 9, {backgroundColor: "#f7f7f9"});
		TweenMax.to(gitAccount, 1, {rotation: 360, scale: 1.4, opacity:1,delay: 9});
	}

	TweenMax.staggerTo(redSq, 1, {scale:0, ease:Bounce.easeOut, onComplete:git}, 0.1);
	
};





