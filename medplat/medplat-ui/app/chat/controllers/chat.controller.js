(function () {
    'use strict';
    var app = angular.module('imtecho');
    app.controller('ChatController', ['ChatService', '$timeout', function (ChatService, $timeout) {
        var vm = this;
        vm.messages = [];
        vm.input = '';
        vm.lang = 'en';

        vm.send = function () {
            if (!vm.input || !vm.input.trim()) return;
            var text = vm.input.trim();
            vm.messages.push({ from: 'user', text: text, ts: Date.now() });
            vm.input = '';
            ChatService.sendMessage(text, vm.lang).then(function (resp) {
                vm.messages.push({ from: 'ai', text: resp, ts: Date.now() });
            });
        };

        vm.setLanguage = function (lang) {
            vm.lang = lang;
        };

        vm.clear = function () {
            vm.messages = [];
        };
    }]);
}());
