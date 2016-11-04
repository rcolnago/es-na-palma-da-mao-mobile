import 'angular-ui-router';
import component from './expense-detail.component';

const dependencies = [
    'ui.router'
];

export default angular.module( 'expense-detail.component', dependencies )
    .directive( 'expenseDetail', component )
    .config( [
        '$stateProvider', ( $stateProvider ) => {
            $stateProvider
                .state( 'app.transparencyExpenseDetail', {
                    url: 'transparency/expense/:id/:label',
                    views: {
                        content: {
                            template: '<expense-detail></expense-detail>'
                        }
                    }
                });
        }
    ] );




