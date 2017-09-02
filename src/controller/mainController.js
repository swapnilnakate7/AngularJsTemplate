/**
 * Created by swapnilnakate on 27.08.17
 */
angular.module('angularApp')
    .controller('mainController', [ '$scope', 'mainFactory', 'mainService', 'mainProvider', function ($scope, mainFactory, mainService, mainProvider) {
        
        $scope.getFactory  = mainFactory.getPrivate();
        $scope.getService  = mainService.getPrivate();
        $scope.getProvider = mainProvider.getPrivate();

    }]);