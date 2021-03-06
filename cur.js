var curApp = angular.module('curApp', ['tmh.dynamicLocale'])
.config(function(tmhDynamicLocaleProvider) {
    tmhDynamicLocaleProvider.localeLocationPattern('https://code.angularjs.org/1.4.7/i18n/angular-locale_{{locale}}.js');
  })

.controller('curController',
   function ($scope, $filter,tmhDynamicLocale) {



    $scope.harrybojangles = function () {
        switch ($scope.country) {
            case "USA":
                $scope.result = $scope.cur;
                tmhDynamicLocale.set('en');
                break;

            case "German":
                $scope.result =  $scope.cur;
                tmhDynamicLocale.set('de');
                break;

            case "French":
                $scope.result = $scope.cur;
                tmhDynamicLocale.set('fr');
                break;
	    case "Arabic":
                $scope.result = $scope.cur;
                tmhDynamicLocale.set('ar');
                break;
            case "Japanese":
                $scope.result = $scope.cur;
                tmhDynamicLocale.set('ja-jp');
                break;
            case "Korean":
                $scope.result = $scope.cur;
                tmhDynamicLocale.set('ko');
                break;
            case "Chinese":
                $scope.result = $scope.cur;
                tmhDynamicLocale.set('zh');
                break;

            default:
                $scope.result = $scope.cur;
		tmhDynamicLocale.set('en');
                break;

        }
    };
 $scope.$watch('country', function () {
        console.log("Calling Drop Down");
        $scope.harrybojangles();
    }, true);



    $scope.$watch('cur', function (val) {
        console.log("Calling on enter data");
        $scope.harrybojangles();
    }, true);
   
}
);
