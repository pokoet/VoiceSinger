Meteor.methods({
	likesinger:function(obj){
		like.insert(obj);
	},
	unlikesinger:function(id){
		like.remove({_id:id});
	}
});