// index frontend
Session.set('SINGER-GENDER','');
Template.index.helpers({
	getSinger: function(){
		var type = Session.get('SINGER-GENDER');
		var result = '';
		if(type === 'men'){
			result = singer.find({'gender':'Male'});
		}else if (type === 'women'){
			result = singer.find({'gender':'Female'});
		}else{
			result = singer.find({});
		}
		return result;
	},
	countSinger: function(){
		var type = Session.get('SINGER-GENDER');
		var result = '';
		if(type === 'men'){
			result = singer.find({'gender':'Male'}).count();
		}else if (type === 'women'){
			result = singer.find({'gender':'Female'}).count();
		}else{
			result = singer.find({}).count();
		}
		return result;
	},
	Countmp3:function(singerId){
		//var singerId = Session.get("GETSINGER-ID");
		return musics.find({singerid:singerId}).count();
	},
	Countfavorite:function(id){
		return favorite.find({'singerId':id}).count();
	}
});
Template.index.events({
	'click #all':function(e){
		e.preventDefault();
		Session.set('SINGER-GENDER','all');
		$('#all').addClass('btn-default');
		$('#men').removeClass('btn-default');
		$('#women').removeClass('btn-default');
	},
	'click #men':function(e){
		e.preventDefault();
		Session.set('SINGER-GENDER','men');
		$('#men').addClass('btn-default');
		$('#women').removeClass('btn-default');
		$('#all').removeClass('btn-default');
	},
	'click #women':function(e){
		e.preventDefault();
		Session.set('SINGER-GENDER','women');
		$('#women').addClass('btn-default');
		$('#men').removeClass('btn-default');
		$('#all').removeClass('btn-default');
	}
});
Template.mainLayout.helpers({
	Ishome:function(){
		var url = Router.current().route.path();
		//console.log("URL=="+url);
		if(url == '/')
			return true;
		else
			return false;
	}
});
Template.mainLayout.events({
	"click .fav":function(e){
		e.preventDefault();
		var id = $('.cplay').attr('data-id');
		//alert(id);
		//Session.set('MUSIC-ID',id);
		var singer = Session.get("GETSINGER-ID");
		var user = Meteor.userId();
		var nowdate = Date.now();
		var obj = {
			musicId:id,
			singerId:singer,
			userId:user,
			timeago:nowdate,
			status:1
		}
		if(user){
			Meteor.call("AddFavorite",obj,function(error){
				if(error){
					//console.log("AddFavorite problem"+error.reason)
				}else{
					$('.fav').addClass('hidden');
					$('.unfav').removeClass('hidden');
				}
			})
		}else{
			$("#popup").click();
		}
	},
	"click .unfav":function(e){
		e.preventDefault();
		var musicid = $('.cplay').attr('data-id');
		//Session.set('MUSIC-ID',musicid);
		var audioElem = document.getElementById('audio');
		var user = Meteor.userId();
		var path = Router.current().route.path();
		if(user){
			Meteor.call("Unfavorite",musicid,user,function(error){
				if(error){
					//console.log("Unfavorite Problem");
				}else{
					if(path == '/favorite'){
						audioElem.pause();
	 					$("ul#playlist li a:first").click();
	 					$('.unfav').removeClass('hidden');
	 				}else{
	 					$('.fav').removeClass('hidden');
						$('.unfav').addClass('hidden');
	 				}
				}
			});
		}else{
			alert('Login to Unfavorite');
		}
	},
	"click #mcomment":function(e){
		var musicid = $('.cplay').attr('data-id');
		//alert(musicid);
		Session.set("MUSICID-COMMENT",musicid);
	},
	"click #send":function(e){
		e.preventDefault();
		var com = $("#comment").val();
		var user = Meteor.userId();
		var musId = Session.get("MUSICID-COMMENT");
		//alert(com+user+musId);
		var now = Date.now();
		var text = '';
		var obj = {
			text:com,
			musicId:musId,
			userId:user,
			status:1,
			timestart:now
		}
		if(com !== ""){
			if(user){
				Meteor.call('AddReview',obj,function(error){
					if(!error){
						console.log("AddReview Successfully");
						$("#errormsg").text('');
						$("#comment").val('');
					}
				});
			}else{
				text += '<div class="alert alert-danger fade in">';
					text += '<a href="#" class="close" data-dismiss="alert" aria-label="close" title="close">×</a>';
					text += '<strong>Please Login!</strong> This alert box indicates a dangerous or potentially negative action.';
				text += '</div>';
				$("#errormsg").html(text);
			}
		}else{
			text += '<div class="alert alert-danger fade in">';
				text += '<a href="#" class="close" data-dismiss="alert" aria-label="close" title="close">×</a>';
				text += '<strong>Text can not be empty!</strong> This alert box indicates a dangerous or potentially negative action.';
			text += '</div>';
			$("#errormsg").html(text);
		}
	}
});
// male 
Template.male.helpers({
	getMale: function(){
		var result = singer.find({gender:"Male"});
		//console.log(result);
		return result;
	},
	countMale: function(){
		return result = singer.find({gender:"Male"}).count();
	}
});
// female 
Template.female.helpers({
	getFemale: function(){
		var result = singer.find({gender:"Female"});
		//console.log(result);
		return result;
	},
	countFemale: function(){
		return result = singer.find({gender:"Female"}).count();
	}
});

