
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
	"click #reload12":function(e){
		e.preventDefault();
		var id = this._id;
		Router.go("/musicdetail/"+id);
		window.location.reload()
	}
});

