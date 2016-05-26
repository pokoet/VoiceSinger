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
	Session.set("searchsingersidebar", undefined);
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
	Timeplay:function(srcmusic){
		console.log('MYSRC=='+srcmusic);
		var audio = new Audio(srcmusic);
			//audio.type('audio/mpeg');
			console.log('duration=='+audio.duration);
		console.log('SRC-MUSIC=='+audio);
		var durmins = Math.floor(audio.duration / 60);
		var dursecs = Math.floor(audio.duration - durmins * 60);
		console.log('DUMIN=='+durmins);
		console.log('dursecs=='+dursecs);
		return durmins+":"+dursecs;
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

	}
});

