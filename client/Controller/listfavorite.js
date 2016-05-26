Template.listfavorite.helpers({
	Myplaylist:function(musicId){
		var result = musics.findOne({'_id':musicId});
		return result;
	},
	Getlistfavorite:function(){
		var user = Meteor.userId();
		return favorite.find({'userId':user});
	},
	parthImage:function(id){
		console.log("FASID=="+id);
		var result = singer.findOne({_id:id}).image;
		if(result){
			return "/img/singer/"+result;
		}
	},
	Firstfavorite:function(){
		var musicId = Session.get('SINGERFAV-ID');
		console.log("FAVID=="+musicId);
		if(musicId !== ''){
			return musics.findOne({_id:musicId});
		}else{
			return ;
		}
	},
	getalbum:function(){
		var musicid = Session.get('DATA-ID');
		var re = musics.findOne({'_id':musicid});
		var pro = re.production;
		var al = re.albums;
		var pro = production.findOne({'_id':re.production}).title;
		var album = production.findOne({'_id':re.albums}).title;
		var obj = {
			mypro:pro,
			myalbum:album
		}
		return obj;
	}
});
Template.listfavorite.events({
	// "click .fav":function(e){
	// 	e.preventDefault();
	// 	var id = $('.cplay').attr('data-id');
	// 	//alert(id);
	// 	//Session.set('MUSIC-ID',id);
	// 	var singer = Session.get("GETSINGER-ID");
	// 	var user = Meteor.userId();
	// 	var nowdate = Date.now();
	// 	var obj = {
	// 		musicId:id,
	// 		singerId:singer,
	// 		userId:user,
	// 		timeago:nowdate,
	// 		status:1
	// 	}
	// 	if(user){
	// 		$('.fav').addClass('hidden');
	// 		$('.unfav').removeClass('hidden');
	// 		Meteor.call("AddFavorite",obj,function(error){
	// 			if(error){
	// 				//console.log("AddFavorite problem"+error.reason)
	// 			}else{
	// 				//console.log("AddFavorite Successfully");
	// 			}
	// 		})
	// 	}else{
	// 		$("#popup").click();
	// 	}
	// },
	// "click .unfav":function(e){
	// 	e.preventDefault();
	// 	var musicid = $('.cplay').attr('data-id');
	// 	var audioElem = document.getElementById('audio');
	// 	var user = Meteor.userId();
	// 	if(user){
	// 		$('.fav').removeClass('hidden');
	// 		$('.unfav').addClass('hidden');
	// 		Meteor.call("Unfavorite",musicid,user,function(error){
	// 			if(error){
	// 				//console.log("Unfavorite Problem");
	// 			}else{
	// 				audioElem.pause();
	// 				$("ul#playlist li a:first").click();
	// 			}
	// 		});
	// 	}else{
	// 		alert('Login to Unfavorite');
	// 	}
	// }
});