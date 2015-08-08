app.controller('checkCtrl',function($scope,$cordovaGeolocation,synchronousService) {
            $scope.zn = function() {

                var posOptions = {timeout: 10000, enableHighAccuracy: false};

                $cordovaGeolocation.getCurrentPosition(posOptions)
                    .then(function (position) {
                        var lat  = position.coords.latitude.toFixed(6);
                        var long = position.coords.longitude.toFixed(6);

                        url = 'http://agatafeedmill.com/maps/index.php/main/insert_geolocation/'+lat+'/'+long;

                        data = JSON.parse(synchronousService(url));

                        if(data.flag == 1)
                        {
                            alert("Coordinates Successfully send");
                        }
                        else
                        {
                            alert("error occured")
                        }

                        console.log(data);
                    }, function(err) {
                        alert("error occured");
                    });

            }
    });