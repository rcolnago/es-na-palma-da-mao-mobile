import 'angular-ui-router';
import component from './revenues.component';

const dependencies = [
    'ui.router'
];

export default angular.module( 'revenues.component', dependencies )
    .directive( 'revenues', component )
    .config( [
        '$stateProvider', ( $stateProvider ) => {
            $stateProvider
                .state( 'app.transparencyRevenues', {
                    url: 'transparency/revenues',
                    views: {
                        content: {
                            template: '<revenues></revenues>'
                        }
                    }
                });
        }
    ] );




