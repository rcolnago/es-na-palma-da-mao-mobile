import revenues from './revenues/index';
import revenueDetail from './revenue-detail/index';
import shared from './shared/index';
let dependencies = [
    revenues.name,
    revenueDetail.name,
    shared.name
];

export default angular.module( 'secont-transparency', dependencies );
