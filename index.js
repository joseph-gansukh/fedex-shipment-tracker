const fedexAPI = require('fedex')

var fedex = new fedexAPI({
    environment: 'sandbox', // or live
    debug: true,
    key: '9doDUqleJG8uX9Rx',
    password: 'sneHJVXzhx5Kcg8LGNM61Zgex',
    account_number: '510087780',
    meter_number: '114087373',
    imperial: true // set to false for metric
});


fedex.track({
    SelectionDetails: {
        PackageIdentifier: {
            Type: 'TRACKING_NUMBER_OR_DOORTAG',
            Value: '7620543302'
        }
    }
}, function(err, res) {
    if (err) {
        return console.log(err);
    }

    console.log(res.CompletedTrackDetails[0].TrackDetails[0].StatusDetail.Description);
    console.log(res.CompletedTrackDetails[0].TrackDetails[0]);
    console.log(res.CompletedTrackDetails[0].TrackDetails[0].StatusDetail.Events);
});
