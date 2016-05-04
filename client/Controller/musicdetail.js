
Template.musicdetail.rendered=function(){
	
};
Template.musicdetail.helpers({
	allsinger:function(){
		var result = singer.find();
		return result;
	},
	getsidebarsinger: function(){
		var result = singer.find();
		return result;
	},
	Issinger:function(){
		var singersidebar = Session.get("searchsingersidebar");
		if(singersidebar) return true;
		else return false;
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
	}
});
Template.musicdetail.events({
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
	"click #like":function(){
		var user = Meteor.userId();
		var singerId = this._id;
		var status = 1;
		var obj = {	
			singerId:singerId,
			status:status
		}
		if(!user){
			$("#popup").click();
		}else{
			$("#like").addClass("like");
			$("#unlike").removeClass("like");
		}
		// Meteor.call("likesinger",obj,function(error){
		// 	if(error){
		// 		console.log("Insert likesinger problem"+error.reason);
		// 	}else{
		// 		console.log("Insert likesinger successfully!!!");
		// 	}
		// });
	},
	"click #unlike":function(){
		var id = this._id;
		var user = Meteor.userId();
		if(!user){
			$("#popup").click();
		}else{
			$("#unlike").addClass("like");
			$("#like").removeClass("like");
		}
		// Meteor.call("unlikesinger",id,obj,function(error){
		// 	if(error){
		// 		console.log("Insert unlikesinger problem"+error.reason);
		// 	}else{
		// 		console.log("Insert unlikesinger successfully!!!");
		// 	}
		// });
	},
	"click #popregister":function(){
		$( "#popup" ).dialog("close");
	}
});

