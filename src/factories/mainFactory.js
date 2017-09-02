/**
 * Created by swapnilnakate on 27.08.17
 */
angular.module('angularApp')
    .factory('mainFactory', [ function () {

        var thisIsPrivate = "mainFactory";
        
        function getPrivate() {
            return thisIsPrivate;
        }

        return {
            getPrivate: getPrivate
        };
    }]);