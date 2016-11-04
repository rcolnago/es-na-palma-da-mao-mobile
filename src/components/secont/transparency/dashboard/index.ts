import 'angular-ui-router';
import component from './dashboard.component';
import secontShared from '../../shared/index';
import DashboardAbout from './about/index';

const dependencies = [
    'ui.router',
    secontShared.name,
    DashboardAbout.name
];

export default angular.module( 'transparency-dashboard.component', dependencies )
    .directive( 'transparencyDashboard', component )
    .config( [
        '$stateProvider', ( $stateProvider ) => {
            $stateProvider
                .state( 'app.transparency.dashboard', {
                    url: 'dashboard',
                    data: { title: 'Transparência' },
                    views: {
                        transparencyContent: {
                            template: '<transparency-dashboard></transparency-dashboard>'
                        }
                    }
                });
        }
    ] );
