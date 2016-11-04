const directive = () => {
    return {
        template: `<a ng-click="$ionicGoBack()" class="button back-button buttons button-clear header-item nav-back-btn">
            <i class="ion-android-arrow-back"></i>
        </a>`,
        restrict: 'E'
    };
};

export default directive;