Router.configure({
    layoutTemplate: 'mainLayout',
	loadingTemplate: 'loading',
    onAfterAction: function(){        
    }
});

Router.route('/dashboard', {
	name: 'dashboard'
});
// add user
Router.route('/user', {
	name: 'user'
});
// all user 
Router.route('/alluser', {
	name: 'alluser'
});
//login
Router.route('/login', {
	name: 'login'
});
// register
Router.route('/register', {
	name: 'register'
});
// dashboard for member
Router.route('/member', {
	name: 'member'
});
// add new announcement
Router.route('/addnew', {
	name: 'addnew'
});
Router.route('/updatenew/:_id', {
	name: 'updatenew',
	data: function(){
        var currentList = this.params._id;
        var result = announcements.findOne({ _id: currentList });
		return result;
    }
});

// add singer
Router.route('/addsinger', {
	name: 'addsinger'
});
// all singer
Router.route('/allsinger', {
	name: 'allsinger'
});
Router.route('/updatesinger/:_id', {
	name: 'updatesinger',
	data: function(){
        var id = this.params._id;
        var result = singer.findOne({_id: id });
		return result;
    }
});

// index page Male
Router.route('/artist/male', {
	name: 'male'
});
// index page Female
Router.route('/artist/female', {
	name: 'female'
});

// all production 
Router.route('/admin/allproduction', {
	name: 'allproduction'
});
// all albums 
Router.route('/admin/allalbums/:_id', {
	name: 'allalbums',
	data: function(){
	var id = this.params._id;
	var result = production.find({parent:id});
	return {getAllalbums:result};
	}	
});
// list music 
Router.route('/admin/listmusic/:_id', {
	name: 'listmusic',
	data: function(){
        var id = this.params._id;
		var result = musics.find({singerid: id }).map(function(document, index){
			document.index = index+1;
			return document;
		});
		return {getmusics:result};
    }
});
// all production 
Router.route('/admin/addproduction', {
	name: 'addproduction'
});

///////////////////////////////////// front end ////////////////////////////////////////////////
Router.route('/', {
	name: 'index',
	data: function () {
		var result = singer.find({});
		var showSinger = Session.get("showsinger");
		if(showSinger) return {singer:result};
		else return false;
		//return {singer:result};
    }
});
/*Router.route('/searchsingerhomepage', {
	name: 'searchsingerhomepage',
	data: function () {
		return {singer:singer.find()};
    }
});*/
// musicdatail 
Router.route('/musicdetail/:_id', {
	name: 'musicdetail',
	data:function(){
		var id = this.params._id;
		var result = musics.find({singerid:id});
		var singer_re = singer.find({});
		return {musicplay:result,singer:singer_re};		
	}
});

Router.route('/playlist', {
	name: 'playlist'
});
