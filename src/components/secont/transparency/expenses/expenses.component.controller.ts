import { IScope, IFilterOrderBy } from 'angular';
import { Summary, Chart } from '../../shared/index';

export class ExpensesController {

    public static $inject: string[] = ['$scope', 'orderByFilter', 'currencyFilter'];

    public showChart = true;
    public sortDesc = false;
    public expenses: Summary = {
        total: 2567345489,
        items: [
            { originId: 1, label: 'Administração Geral a Cargo da Sefaz', value: 16000000000.00, percentage: 44, color: '#8abe66' },
            { originId: 2, label: 'Administração Geral a Cargo da Seger', value: 6000000000.00, percentage: 12, color: '#607D8B' },
            { originId: 3, label: 'Administração Geral a Cargo da Sep', value: 4000000000.00, percentage: 8, color: '#FFC107' },
            { originId: 4, label: 'Secretaria da Casa Civil', value: 3000000000.00, percentage: 6, color: '#f44336' },
            { originId: 5, label: 'Secretaria de Estado da Cultura', value: 1000000000.00, percentage: 29, color: '#009688' },
            { originId: 5, label: 'Teste', value: 1000000000.00, percentage: 1, color: '#FF9800' }
        ]
    };

    public chart: Chart | undefined = undefined;


    /**
     * Creates an instance of ExpensesController.
     * 
     * @param {IScope} $scope
     * 
     * @memberOf ExpensesController
     */
    constructor(private $scope: IScope, private orderBy: IFilterOrderBy) {
        this.$scope.$on('$ionicView.beforeEnter', () => this.activate());
    }


    /**
     * Ativa o controller
     *
     * @returns {void}
     */
    public activate(): void {
        angular.element(document.querySelectorAll('ion-header-bar')).removeClass('espm-header-tabs');
        this.toggleSort();
        this.chart = {
            labels: this.expenses.items.map(item => item.label),
            values: this.expenses.items.map(item => item.percentage),
            colors: this.expenses.items.map(item => item.color)
        };
    }

    /**
     * 
     * 
     * 
     * @memberOf ExpensesController
     */
    public toggleSort(): void {
        this.sortDesc = !this.sortDesc;
        this.expenses.items = this.orderBy(this.expenses.items, 'percentage', this.sortDesc);
    }

    /**
     * 
     * 
     * @type {void}
     * @memberOf ExpensesController
     */
    public toggleChart(): void {
        this.showChart = !this.showChart;
    }

    /**
     * 
     * 
     * @param {number} originId
     * 
     * @memberOf ExpensesController
     */
    public goToExpense(originId: number) {
        // Goto
    }
}
