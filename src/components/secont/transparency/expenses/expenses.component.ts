import './expenses.component.css';
import template = require( './expenses.component.html' );
import { ExpensesController } from './expenses.component.controller';

const directive = () => {
    return {
        template: template,
        controller: ExpensesController,
        restrict: 'E',
        controllerAs: 'vm', // scope: {},
        replace: true,
        bindToController: true
    };
};

export default directive;