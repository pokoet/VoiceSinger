//searchsingerhomepage
Template.index.events({
	'keyup .search': function(e){
		e.preventDefault();
		var key = $('.search input').val();
		
		//alert(key);
		if( key.length > 0 )
			Session.set("showsinger","test");
		else
			Session.set("showsinger", undefined);
	}
});
