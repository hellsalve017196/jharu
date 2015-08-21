app.service('synchronousService', [function () {
    var serviceMethod = function (url) {

            var request;
            if (window.XMLHttpRequest) {
                request = new XMLHttpRequest();
            }

            try{
                request.open('GET', url, false);
                request.send(null);
            }
            catch(e)
            {
                return 0;
            }

            if (request.status === 200) {
                return request.responseText;
            }

    };
    return serviceMethod;
}]);
