// index frontend
Session.set('SINGER-GENDER','');
Template.index.helpers({
	getSinger: function(){
		var type = Session.get('SINGER-GENDER');
		var result = '';
		if(type === 'men'){
			result = singer.find({'gender':'Male'});
		}else if (type === 'women'){
			result = singer.find({'gender':'Female'});
		}else{
			result = singer.find({});
		}
		return result;
	},
	countSinger: function(){
		var type = Session.get('SINGER-GENDER');
		var result = '';
		if(type === 'men'){
			result = singer.find({'gender':'Male'}).count();
		}else if (type === 'women'){
			result = singer.find({'gender':'Female'}).count();
		}else{
			result = singer.find({}).count();
		}
		return result;
	},
	Countmp3:function(singerId){
		//var singerId = Session.get("GETSINGER-ID");
		return musics.find({singerid:singerId}).count();
	},
	Countfavorite:function(id){
		return favorite.find({'singerId':id}).count();
	}
});
Template.index.events({
	'click #all':function(e){
		e.preventDefault();
		Session.set('SINGER-GENDER','all');
		$('#all').addClass('btn-default');
		$('#men').removeClass('btn-default');
		$('#women').removeClass('btn-default');
	},
	'click #men':function(e){
		e.preventDefault();
		Session.set('SINGER-GENDER','men');
		$('#men').addClass('btn-default');
		$('#women').removeClass('btn-default');
		$('#all').removeClass('btn-default');
	},
	'click #women':function(e){
		e.preventDefault();
		Session.set('SINGER-GENDER','women');
		$('#women').addClass('btn-default');
		$('#men').removeClass('btn-default');
		$('#all').removeClass('btn-default');
	}
});
Template.mainLayout.helpers({
	Ishome:function(){
		var url = Router.current().route.path();
		//console.log("URL=="+url);
		if(url == '/')
			return true;
		else
			return false;
	}
});
// male 
Template.male.helpers({
	getMale: function(){
		var result = singer.find({gender:"Male"});
		//console.log(result);
		return result;
	},
	countMale: function(){
		return result = singer.find({gender:"Male"}).count();
	}
});
// female 
Template.female.helpers({
	getFemale: function(){
		var result = singer.find({gender:"Female"});
		//console.log(result);
		return result;
	},
	countFemale: function(){
		return result = singer.find({gender:"Female"}).count();
	}
});

