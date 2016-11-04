import 'angular-ui-router';
import component from './expenses.component';

import secontShared from '../../shared/index';

const dependencies = [
    'ui.router',
    secontShared.name
];

export default angular.module( 'transparency-expenses.component', dependencies )
    .directive( 'transparencyExpenses', component )
    .config( [
        '$stateProvider', ( $stateProvider ) => {
            $stateProvider
                .state( 'app.transparency.expenses', {
                    url: 'transparency/expenses',
                    data: { title: 'Despesas' },
                    views: {
                        transparencyContent: {
                            template: '<transparency-expenses></transparency-expenses>'
                        }
                    }
                });
        }
    ] );




