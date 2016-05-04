Template.musicdetail.events({
    'click #login': function(event){
        event.preventDefault();
        var email = $('#email').val();
        var password = $('#login-pass').val();
        Meteor.loginWithPassword(email, password,function(error){
        	if(error){
        		console.log("LOGIN PROBLEM"+error.reason)
        	}else{
        		console.log("LOGIN SUCCESS!!!");
        	}
        });
    },
    'click #register': function(event){
        event.preventDefault();
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();
        Accounts.createUser({
            email: email,
            password: password
        });
        Router.go('home');
    }
});
