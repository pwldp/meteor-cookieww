Package.describe({
        summary: "Avatec - Cookie Warning Window packaged for Meteor to deal with the EU Cookie Law."
});

Package.on_use(function (api){
        api.use(['jquery-cookie'], 'client');
        api.add_files('lib/cookieww', 'client');
        api.add_files('load_cookieww.js', 'client');
});
