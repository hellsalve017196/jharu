app.service('synchronousService', [function () {
    var serviceMethod = function (url) {
        var request;
        if (window.XMLHttpRequest) {
            request = new XMLHttpRequest();
        }

        request.open('GET', url, false);
        request.send(null);

        if (request.status === 200) {
            return request.responseText;
        }
    };
    return serviceMethod;
}]);
