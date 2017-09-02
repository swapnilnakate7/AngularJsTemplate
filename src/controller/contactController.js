/**
 * Created by swapnilnakate on 27.08.17
 */
angular.module('angularApp')
    .controller('contactController', [ '$scope',  function ($scope) {

        $scope.contactMe = {
            email  : 'nakate.swapnil7@gmail.com',
            github : 'https://github.com/swapnilnakate7'
        }

    }]);
