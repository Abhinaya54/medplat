(function () {
    'use strict';
    var app = angular.module('imtecho');
    app.service('ChatService', ['$q', '$timeout', function ($q, $timeout) {
        this.sendMessage = function (text, lang) {
            var deferred = $q.defer();
            // Mock AI processing delay
            $timeout(function () {
                // Simple mock response — in a real integration replace this with API call
                var resp = 'AI (mock) response [' + (lang || 'en') + ']: ' + text;
                deferred.resolve(resp);
            }, 700);
            return deferred.promise;
        };
    }]);
}());
