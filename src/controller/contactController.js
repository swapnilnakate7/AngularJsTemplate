/**
 * Created by semianchuk on 08.10.16.
 */
angular.module('angularApp')
    .controller('contactController', [ '$scope',  function ($scope) {

        $scope.contactMe = {
            email  : 'nakate.swapnil7@gmail.com',
            github : 'https://github.com/swapnilnakate7'
        }

    }]);
