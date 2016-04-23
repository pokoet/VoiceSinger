
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
	}
});

