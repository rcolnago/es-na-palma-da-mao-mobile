import expensesByArea from './expenses-by-area/index';
import revenues from './revenues/index';
import revenueDetail from './revenue-detail/index';
import expenseDetail from './expense-detail/index';
import shared from './shared/index';
let dependencies = [
    expensesByArea.name,
    expenseDetail.name,
    revenues.name,
    revenueDetail.name,
    shared.name
];

export default angular.module( 'secont-transparency', dependencies );
