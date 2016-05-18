
Template.listsearch.rendered=function(){
	
};
Template.listsearch.helpers({
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
		console.log("MY_SRC="+audio.duration);
		var durmins = Math.floor(audio.duration / 60);
		var dursecs = Math.floor(audio.duration - durmins * 60);
		console.log("MYDUR="+durmins);
		console.log("MYSEC="+dursecs);
		return durmins+":"+dursecs;
	},
	Countmp3:function(){
		var singerId = Session.get("SINGER-ID");
		//var singerId = singer.findOne({'singername':name})._id;
		return musics.find({singerid:singerId}).count();
	},
	Countlike:function(){
		return like.find({status:'like'}).count();
	},
	Countunlike:function(){
		return like.find({status:'unlike'}).count();
	},
	Getview:function(){
		var id = Session.get("SINGER-ID");
		Meteor.call("Countview",id,function(error,result){
			if(error){
				console.log("Countview Problem"+error.reason);
			}else{
				console.log("Countview Successfully");
				Session.set("COUNT-VIEW",result);
			}
		});
		return Session.get("COUNT-VIEW");
	}
});
Template.listsearch.events({
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
	}
});

