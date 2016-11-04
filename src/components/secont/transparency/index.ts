import dashboard from './dashboard/index';
import expenses from './expenses/index';

let dependencies = [
    dashboard.name,
    expenses.name
];

export default angular.module( 'secont-transparency', dependencies )
    .config( [
        '$stateProvider', ( $stateProvider ) => {
            $stateProvider
                .state( 'app.transparency', {
                    url: 'transparency/',
                    abstract: true,
                    views: {
                        content: {
                            template: '<ion-nav-view name="transparencyContent"></ion-nav-view>'
                        }
                    }
                });
        }
    ] );
