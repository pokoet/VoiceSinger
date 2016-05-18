Session.set("MORE-MUSIC",100);
var processScroll = true;
$(window).scroll(function() {
    if (processScroll && $(window).scrollTop() > $(document).height() - $(window).height() - 600) {
        processScroll = false;
        //var oldLimit = Session.get('querylimit');
        //oldLimit += 16;
        //Session.set('querylimit', oldLimit);
        var route=window.location.href;
        //console.log('Router: '+route);
        if(route.indexOf('/playlist')>-1){
            var val=Session.get('MORE-MUSIC');
            val=val+50;
            //console.log('SUB '+val);
            Session.set('MORE-MUSIC',val);
        }
        processScroll = true;
    }
});
Tracker.autorun(function () {
	 var limit=Session.get('MORE-MUSIC');
	 //console.log('MA NEW LIM= '+limit);
	 var id = Session.get("GETSINGER-ID");
	 if(limit){
	 		//console.log('come on');
			 var lim=Session.get('MORE-MUSIC');
			 //console.log('MORE-MUSIC'+lim);
			 Meteor.subscribe("musicsList",id,lim);
	 }
});
Template.playlist.rendered=function(){
	Tracker.autorun(function () {
		//alert('autorun');
		var userid = Meteor.userId();
	    var mId = Session.get("MUSIC-ID");
	    if(mId){
		    var fav = favorite.find({ musicId: mId, userId: userid }).count();
		    if(fav > 0){
		    	$('.fav').addClass('hidden');
		    	$('.unfav').removeClass('hidden');
		    }else{
		    	$('.fav').removeClass('hidden');
		    	$('.unfav').addClass('hidden');
		    }
		}
	});
};
Template.playlist.helpers({
	Myplaylist:function(){
		var id = Session.get("GETSINGER-ID");
		var result = musics.find({singerid:id});
		return result;
	},
	getsidebarsinger: function(){
		var result = singer.find();
		return result;
	},
	getproname:function(id){
		return production.findOne({_id:id}).title;
	},
	getalbumname:function(id){
		return production.findOne({_id:id}).title;
	},
	parthImage:function(id){
		var result = singer.findOne({_id:id}).image;
		if(result)
			return "/img/singer/"+result;
	},
	Timeplay:function(){
		var audio = new Audio();
		//audio.loop = true;
		audio.src = "/mp3/Sunday/Vol-208/01. Kror kmean komhos - Eva.mp3";
		audio.loop = true;
		//console.log("MY_SRC="+audio.duration);
		var durmins = Math.floor(audio.duration / 60);
		var dursecs = Math.floor(audio.duration - durmins * 60);
		//console.log("MYDUR="+durmins);
		//console.log("MYSEC="+dursecs);
		return durmins+":"+dursecs;
	},
	Countmp3:function(){
		var singerId = Session.get("GETSINGER-ID");
		return musics.find({singerid:singerId}).count();
	},
	Countlike:function(){
		return like.find({status:'like'}).count();
	},
	Countunlike:function(){
		return like.find({status:'unlike'}).count();
	},
	Getview:function(){
		var id = Session.get("GETSINGER-ID");
		Meteor.call("Countview",id,function(error,result){
			if(error){
				console.log("Countview Problem"+error.reason);
			}else{
				console.log("Countview Successfully");
				Session.set("COUNT-VIEW",result);
			}
		});
		return Session.get("COUNT-VIEW");
	},
	Isfavorite:function(){
		var userid = Meteor.userId();
		var id = $('.cplay').attr('data-id');
		//console.log("MID==="+id);
	    var mId = Session.get("MUSIC-ID");
	    if(mId){
		    var fav = favorite.find({ musicId: mId, userId: userid }).count();
		    if(fav > 0){
		    	return true;
		    }else{
		    	return false;
		    }
		}
	}
});
Template.playlist.events({
	"click #currentplay":function(e){
		e.preventDefault();
		var audioElem = document.getElementById('audio');
		//alert(audioElem);
		if (audioElem.paused){
		    audioElem.play();
			$("#currentplay").addClass("fa-pause");
			$("#currentplay").removeClass("fa-play");
		}
		else{
		    audioElem.pause();
			$("#currentplay").removeClass("fa-pause");
			$("#currentplay").addClass("fa-play");
		}		
	},
	"click .play":function(e){
		e.preventDefault();
		//var play = $(e.currenTarget).

	},
	"click .fav":function(e){
		e.preventDefault();
		var id = $('.cplay').attr('data-id');
		Session.set('MUSIC-ID',id);
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
			$('.fav').addClass('hidden');
			$('.unfav').removeClass('hidden');
			Meteor.call("AddFavorite",obj,function(error){
				if(error){
					//console.log("AddFavorite problem"+error.reason)
				}else{
					//console.log("AddFavorite Successfully");
				}
			})
		}else{
			$("#popup").click();
		}
	},
	"click .unfav":function(e){
		e.preventDefault();
		var musicid = $('.cplay').attr('data-id');
		Session.set('MUSIC-ID',musicid);
		var user = Meteor.userId();
		if(user){
			$('.fav').removeClass('hidden');
			$('.unfav').addClass('hidden');
			Meteor.call("Unfavorite",musicid,user,function(error){
				if(error){
					//console.log("Unfavorite Problem");
				}else{
				}
			});
		}else{
			alert('Login to Unfavorite');
		}
	}
});

