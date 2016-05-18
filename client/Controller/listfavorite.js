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
	}
});