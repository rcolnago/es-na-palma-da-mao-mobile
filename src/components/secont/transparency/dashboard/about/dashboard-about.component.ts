import './dashboard-about.component.css';
import template = require( './dashboard-about.component.html' );

const directive = () => {
    return {
        template: template,
        restrict: 'E',
        replace: true,
        bindToController: false
    };
};

export default directive;
