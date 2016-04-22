announcements = new Meteor.Collection('announcements');
singer = new Meteor.Collection('singer');
singer.initEasySearch('singername');// easy search collection singer by title
production = new Meteor.Collection('production');
musics = new Meteor.Collection('musics');


