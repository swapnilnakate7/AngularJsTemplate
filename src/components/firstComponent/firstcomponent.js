/**
 * Created by swapnilnakate on 27.08.17
 */
angular.module('angularApp')
    .component('firstComponent', {
        controller: function () {
           this.label = 'This is Component'
        },
        templateUrl: 'src/components/firstcomponent/index.html'
    });