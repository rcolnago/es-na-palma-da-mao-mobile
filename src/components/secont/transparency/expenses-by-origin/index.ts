import 'angular-ui-router';
import component from './expenses-by-origin.component';

const dependencies = [
    'ui.router'
];

export default angular.module( 'expenses-by-origin.component', dependencies )
    .directive( 'expensesByOrigin', component )
    .config( [
        '$stateProvider', ( $stateProvider ) => {
            $stateProvider
                .state( 'app.transparencyExpensesByOrigin', {
                    url: 'transparency/expenses-by-origin',
                    views: {
                        content: {
                            template: '<expenses-by-origin></expenses-by-origin>'
                        }
                    }
                });
        }
    ] );




