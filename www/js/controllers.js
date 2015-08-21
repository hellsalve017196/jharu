//checking controller
app.controller('checkCtrl',function($scope,$cordovaGeolocation,$cordovaNetwork,synchronousService,$state) {
    $scope.imageSrc = 'file:///android_asset/www/img/tap.png';

    //navigate to maps
    $scope.maps = function()
    {
        if($cordovaNetwork.isOnline())
        {
            $state.go('map');
        }
        else
        {
            alert("Check Internet Connection and Try Again");
        }
    }

    //navigate to help
    $scope.tuto = function($scope)
    {
        $state.go("help");
    }

    //check in
    $scope.zn = function() {
        if($cordovaNetwork.isOnline())
        {
            $scope.imageSrc = 'file:///android_asset/www/img/req.png';

            var posOptions = {timeout: 8000, enableHighAccuracy: true,maximumAge:5000};

            $cordovaGeolocation.getCurrentPosition(posOptions)
                .then(function (position) {

                    var lat  = position.coords.latitude.toFixed(6);
                    var long = position.coords.longitude.toFixed(6);

                    url = 'http://agatafeedmill.com/maps/index.php/main/insert_geolocation/'+lat+'/'+long;


                    data = synchronousService(url);

                    if(data == 1)
                    {
                        $state.go('success');
                    }
                    else
                    {
                        alert("error occured in the server")
                    }



                    $scope.imageSrc = 'file:///android_asset/www/img/tap.png';

                    console.log(data);
                }, function(err) {
                    if(err.code != 3)
                    {
                        alert("Please turn on your location services and connect to the internet");
                    }

                    $scope.imageSrc = 'file:///android_asset/www/img/tap.png';
                });
        }
        else
        {
            alert("Check Internet Connection and Try Again");
        }

    }
});

//help controller
app.controller('helpCtrl',function($scope,$state) {
    $scope.home = function() {
        $state.go('checkin');
    }
});

//success ctrl
app.controller('successCtrl',function($scope,$state) {
    $scope.home = function() {
        $state.go('checkin');
    }
});

//map controller
app.controller('mapCtrl',function($scope) {

    $scope.map = {center: { latitude: 23.710711, longitude: 90.407478 }, zoom: 8,
                    markersr:[
                        {
                            id: 101,
                            latitude:  23.710711,
                            longitude: 90.407478,
                            icon:''
                        },
                        {
                            id: 102,
                            latitude:  23.710111,
                            longitude: 90.407178,
                            icon: ''
                        },
                        {
                            id: 103,
                            latitude:  23.720111,
                            longitude: 90.307178,
                            icon: ''
                        },
                        {
                            id: 104,
                            latitude:  23.610111,
                            longitude: 90.207178,
                            icon: ''
                        },
                        {
                            id: 105,
                            latitude:  23.710222,
                            longitude: 90.407555,
                            icon: ''
                        },
                        {
                            id: 106,
                            latitude:  23.110111,
                            longitude: 90.107178,
                            icon: ''
                        }
                    ]
                };

});
