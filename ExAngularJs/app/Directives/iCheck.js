angular.module('angular-icheck', [])
    .directive('iCheck', ['$timeout', '$parse', function ($timeout, $parse) {
    return {
        require: 'ngModel',
        link: function ($scope, element, $attrs, ngModel) {
            return $timeout(function () {
                var value = $attrs.value;
                var $element = $(element);
                var Class = $element.prop('class').split(" ");
                // Instantiate the iCheck control.                            
                $element.iCheck({
                    checkboxClass: 'icheckbox_'+Class[0],
                    radioClass: 'iradio_'+Class[0],
                    increaseArea: '20%'
                });

                 //If the model changes, update the iCheck control.
                $scope.$watch($attrs.ngModel, function (newValue) {
                    $element.iCheck('update');
                });

                 //If the iCheck control changes, update the model.
                $element.on('ifChanged', function (event) {
                    if ($element.attr('type') === 'radio' && $attrs.ngModel) {
                        $scope.$apply(function () {
                            ngModel.$setViewValue(value);
                        });
                    }
                    if ($element.attr('type') === 'checkbox' && $attrs.ngModel) {
                        $scope.$apply(function () {
                            if (ngModel.$modelValue) {
                                ngModel.$setViewValue(false);
                            }
                            else {
                                ngModel.$setViewValue(true);
                            }
                        });
                    }
                });

            });
        }
    }
}]);