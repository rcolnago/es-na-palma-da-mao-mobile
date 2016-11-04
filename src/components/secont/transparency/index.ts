import revenues from './revenues/index';
import shared from './shared/index';
let dependencies = [
    revenues.name,
    shared.name
];

export default angular.module( 'secont-transparency', dependencies );
