
Template.listmusic.helpers({
	nameproduction:function(pro){
		return production.findOne({_id:pro}).title;
	},
	namealbum:function(album){
		return production.findOne({_id:album}).title;
	},
	getEditMusic:function(){
		var idMusic = Session.get("EditMusic");
		return musics.findOne({_id:idMusic});
	},
	getEditPro :function(){
		return production.find({parent:"0"});
	},
	getEditAlbum :function(){
		return production.find({parent:"0"});
	},
	getPro: function(){
		var resultAlbum = Session.get("EditPro");
		return production.find({parent:resultAlbum});
	}
});

Template.listmusic.events({
	//edit music
	"click #btnEditMusic": function(e, tpl){
		e.preventDefault();
		//var singer = this._id;
		//alert(singer);
		var id = Session.get("EditMusic");
		var title = $('#title').val();
		var srcmusic = $('#srcmusic').val();
		var proId = $('#proId').val();
		var album = $('#album').val();
		//alert(title+ srcmusic + proId + "----" + album);
		var attributes = {
			title:title, 
			srcmusic:srcmusic, 
			production:proId, 
			albums:album
		}
		Meteor.call('UpdateMusic',id, attributes );
		console.log("Inserted");
	},
	"click #editMusic": function(e, tpl){
		e.preventDefault();	
		var id = this._id;
		Session.set("EditMusic", id);	
	},
	"change #proId":function(){
		var getChild = $("#proId").val();
		alert(getChild);
		Session.set("EditPro", getChild);
	}
});
