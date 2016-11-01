import 'angular-ui-router';
import component from './expenses.component';

const dependencies = [
    'ui.router'
];

export default angular.module( 'transparency-expenses.component', dependencies )
    .directive( 'transparencyExpenses', component )
    .config( [
        '$stateProvider', ( $stateProvider ) => {
            $stateProvider
                .state( 'app.transparencyExpenses', {
                    url: 'transparency/expenses',
                    data: { title: 'Despesas' },
                    views: {
                        content: {
                            template: '<transparency-expenses></transparency-expenses>'
                        }
                    }
                });
        }
    ] );




