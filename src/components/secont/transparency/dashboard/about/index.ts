import 'angular-ui-router';
import component from './dashboard-about.component';

const dependencies = [
    'ui.router'
];

export default angular.module( 'transparency-dashboardAbout.component', dependencies )
    .directive( 'transparencyDashboardAbout', component )
    .config( [
        '$stateProvider', ( $stateProvider ) => {
            $stateProvider
                .state( 'app.transparency.dashboardAbout', {
                    url: 'dashboardAbout',
                    data: { title: 'Transparência' },
                    views: {
                        transparencyContent: {
                            template: '<transparency-dashboard-about></transparency-dashboard-about>'
                        }
                    }
                });
        }
    ] );
