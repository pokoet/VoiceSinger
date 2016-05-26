// run = function(link, player){
// 		//alert("run");
//         player.src = link.attr('data-src');
//         var mptitle = link.attr("data-title");
//         $("#mp3title").html(mptitle);
//         var playing = link.find("img").attr("class");
//         var curimage = link.attr("data-image");
// 		$(".mp3image").attr("src",curimage);
//         var dataId = link.attr('data-id');
//         Session.set("DATA-ID",dataId);
//         //alert(playing);
//     	if (playing.match('playing')) {
//     		link.find("img").addClass("cplay");
//             link.parent().nextAll("li").find("img").removeClass("cplay");
//             link.parent().prevAll("li").find("img").removeClass("cplay");
//         }
//         audio[0].load();
//         audio[0].play();
// }
// getTimeupdate = function(){
// 	var rem = parseInt(audio[0].duration - audio[0].currentTime, 10);
// 	alert(rem);
// 		var pos = (audio[0].currentTime / audio[0].duration) * 100;
// 		alert(pos);
// 		var mins = Math.floor(rem/60,10);
// 		alert(mins);
// 		var secs = rem - mins*60;
// 		alert(secs);    
// 		alert(pos+":"+mins+":"+secs);
// 		$("#durtime").html(mins+":"+secs);
// }
// // updateProgress = function(pBar) {
// // 	var percent = Math.floor((100 / audio[0].duration) * audio[0].currentTime);
// // 		pBar.style.width = percent + "%";
// // }
// // seektimeupdate = function(curtimetext,durtimetext){
// // 	var curmins = Math.floor(audio[0].currentTime / 60);
// //     var cursecs = Math.floor(audio[0].currentTime - curmins * 60);
// //     var durmins = Math.floor(audio[0].duration / 60);
// //     var dursecs = Math.floor(audio[0].duration - durmins * 60);
// //  	curtimetext.innerHTML = curmins+":"+cursecs;
// //  	durtimetext.innerHTML = durmins+":"+dursecs;
// // }
// currentPlaying = function(e){
// 	var playing = $(e.currentTarget).find("img").attr("class");
// 	if (playing.match('playing')) {
// 		$(e.currentTarget).find("img").addClass("cplay");
//         //$(e.currentTarget).addClass('yellow-star');
//         $(e.currentTarget).parent().nextAll("li").find("img").removeClass("cplay");
//         $(e.currentTarget).parent().prevAll("li").find("img").removeClass("cplay");
//     }
// }