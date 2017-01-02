angular.module('gdgXBoomerang')
.factory('Config', function () {
    return {
        // TODO Modify these to configure your app
        'name'          : 'GDG Port Harcourt',
        'id'            : '100461466728650662561',
        'googleApi'     : 'AIzaSyC6hw2FdbmEkUOenU5Tc_6N9wCCAcCazlk',
        'pwaId'         : '5915725140705884785', // Picasa Web Album id, must belong to Google+ id above
        'domain'        : 'http://www.phc.gdg.ng',
        'twitter'       : 'GDGPHC',
        'facebook'      : 'gdgportharcourt',
        'youtube'       : 'UCX83RpHPrQwTBJ46xCtmIjw',
        'meetup'        : '#',
        // Change to 'EEEE, MMMM d, y - H:mm' for 24 hour time format.
        'dateFormat'    : 'EEEE, MMMM d, y - h:mm a',
        'cover' : {
            title: 'Worldwide GDG Events',
            subtitle: 'Directory of developer events organized by tags and displayed on a global map.',
            button: {
                text: 'Find local events',
                url: 'http://developers.google.com/events'
            }
        },
        'activities': {
            techTalks: true,
            codeLabs: true,
            hackathons: true,
            devFests: true,
            appClinics: true,
            panels: true,
            designSprints: true,
            roundTables: true
        },
        'HUB_IP': 'https://hub.gdgx.io'
        // To update the snippet which is used for sharing, see the TODO in the index.html.
    };
});
