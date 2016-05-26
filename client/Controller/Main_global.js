// Template.mainLayout.helpers({
// 	Ishome:function(){
// 		var url = Router.current().route.path();
// 		//console.log("URL=="+url);
// 		if(url == '/')
// 			return true;
// 		else
// 			return false;
// 	}
// });
// Template.mainLayout.events({
// 	"click .fav":function(e){
// 		e.preventDefault();
// 		var id = $('.cplay').attr('data-id');
// 		//alert(id);
// 		Session.set('MUSIC-ID',id);
// 		var singer = Session.get("GETSINGER-ID");
// 		var user = Meteor.userId();
// 		var nowdate = Date.now();
// 		var obj = {
// 			musicId:id,
// 			singerId:singer,
// 			userId:user,
// 			timeago:nowdate,
// 			status:1
// 		}
// 		if(user){
// 			$('.fav').addClass('hidden');
// 			$('.unfav').removeClass('hidden');
// 			Meteor.call("AddFavorite",obj,function(error){
// 				if(error){
// 					//console.log("AddFavorite problem"+error.reason)
// 				}else{
// 					//console.log("AddFavorite Successfully");
// 				}
// 			})
// 		}else{
// 			$("#popup").click();
// 		}
// 	},
// 	"click .unfav":function(e){
// 		e.preventDefault();
// 		var musicid = $('.cplay').attr('data-id');
// 		//alert(musicid);
// 		Session.set('MUSIC-ID',musicid);
// 		var user = Meteor.userId();
// 		if(user){
// 			$('.fav').removeClass('hidden');
// 			$('.unfav').addClass('hidden');
// 			Meteor.call("Unfavorite",musicid,user,function(error){
// 				if(error){
// 					//console.log("Unfavorite Problem");
// 				}else{
// 				}
// 			});
// 		}else{
// 			alert('Login to Unfavorite');
// 		}
// 	},
// 	"click #curfav":function(e){
// 		e.preventDefault();
// 		var id = $(e.currentTarget).attr('data-favid');
// 		//var play = $("ul#playlist li a:first").attr("data-src");
// 		//$("#audio").attr("src",play);
// 		var data = musics.findOne({'_id':id});
// 		var html = '' ;
// 			html += '<li class="listmp">';
// 				html += '<a href="#" class="play pfirst" id="play" data-src="'+data.srcmusic+'" data-title="'+data.title+'" data-image="" data-id="'+data._id+'">';
// 					html += '<div class="name">';
// 					html += '<span id="iconplay"><img class="playing pull-left" src="/img/icons/player_on.gif" style="height: 15px;padding-right: 15px" data-id="'+data._id+'"></span>'+data.title+'</div>';
// 					html += '<div class="date"></div>';
// 					html += '<div class="delete"><i class="fa fa-music"></i></div>';
// 				html += '</a>';
// 			html += '</li>';
// 		alert(id);
// 		$('#favlist').append(html);
// 		$("#audio").attr("src",data.srcmusic);
// 		Session.set('SINGERFAV-ID',id);
// 		Router.go('/favorite');
// 	}
// });