import expenses from './expenses/index';
import shared from './shared/index';
let dependencies = [
    expenses.name,
    shared.name
];

export default angular.module( 'secont-transparency', dependencies );
