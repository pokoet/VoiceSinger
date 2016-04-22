
Template.musicdetail.helpers({
	allsinger:function(){
		return singer.find();
	},
	getproname:function(id){
		return production.findOne({_id:id}).title;
	},
	getalbumname:function(id){
		return production.findOne({_id:id}).title;
	}
});

