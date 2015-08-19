app.controller('checkCtrl',function($scope,$cordovaGeolocation,synchronousService,$state) {
    $scope.imageSrc = 'file:///android_asset/www/img/tap.png';

    $scope.zn = function() {

        $scope.imageSrc = 'file:///android_asset/www/img/req.png';

        var posOptions = {timeout: 10000, enableHighAccuracy: false};

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
                    alert("error occured")
                }

                $scope.imageSrc = 'file:///android_asset/www/img/tap.png';

                console.log(data);
            }, function(err) {
		console.log(JSON.stringify(err));
		
                alert("Please turn on your location services and connect to the internet");


                $scope.imageSrc = 'file:///android_asset/www/img/tap.png';
            });

    }
});

app.controller('helpCtrl',function($scope,$state) {
    $scope.home = function() {
        $state.go('checkin');
    }
});
