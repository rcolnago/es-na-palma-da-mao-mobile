import { IScope, IFilterOrderBy } from 'angular';
import { SummaryItem, Chart } from '../shared/index';


const summary = {
    total: 2567345489,
    items: [
        { originId: 1, label: 'Administração Geral a Cargo da Sefaz do Secretaria da Casa Civil', value: 16000000000.00, percentage: 44, color: '#8abe66', list: true, plot: true },
        { originId: 2, label: 'Administração Geral a Cargo da Seger', value: 6000000000.00, percentage: 12, color: '#607D8B', list: true, plot: true },
        { originId: 3, label: 'Administração Geral a Cargo da Sep', value: 4000000000.00, percentage: 8, color: '#FFC107', list: true, plot: true },
        { originId: 4, label: 'Secretaria da Casa Civil', value: 3000000000.00, percentage: 6, color: '#f44336', list: true, plot: true },
        { originId: 5, label: 'Secretaria de Estado da Cultura', value: 1000000000.00, percentage: 29, color: '#009688', list: true, plot: true },
        { originId: 5, label: 'Teste', value: 1000000000.00, percentage: 1, color: '#FF9800', list: true, plot: true },

        { originId: 1, label: 'Administração Geral a Cargo da Sefaz', value: 16000000000.00, percentage: 1, color: '#8abe66', list: true, plot: false },
        { originId: 2, label: 'Administração Geral a Cargo da Seger', value: 6000000000.00, percentage: 3, color: '#607D8B', list: true, plot: false },
        { originId: 3, label: 'Administração Geral a Cargo da Sep', value: 4000000000.00, percentage: 2, color: '#FFC107', list: true, plot: false },
        { originId: 4, label: 'Secretaria da Casa Civil', value: 3000000000.00, percentage: 1, color: '#f44336', list: true, plot: false },
        { originId: 5, label: 'Secretaria de Estado da Cultura', value: 1000000000.00, percentage: 1, color: '#009688', list: true, plot: false },
        { originId: 5, label: 'Teste', value: 1000000000.00, percentage: 0.1, color: '#FF9800', list: true, plot: false },
        { originId: 1, label: 'Administração Geral a Cargo da Sefaz', value: 16000000000.00, percentage: 1, color: '#8abe66', list: true, plot: false },
        { originId: 2, label: 'Administração Geral a Cargo da Seger', value: 6000000000.00, percentage: 3, color: '#607D8B', list: true, plot: false },
        { originId: 3, label: 'Administração Geral a Cargo da Sep', value: 4000000000.00, percentage: 2, color: '#FFC107', list: true, plot: false },
        { originId: 4, label: 'Secretaria da Casa Civil', value: 3000000000.00, percentage: 1, color: '#f44336', list: true, plot: false },
        { originId: 5, label: 'Secretaria de Estado da Cultura', value: 1000000000.00, percentage: 1, color: '#009688', list: true, plot: false },
        { originId: 5, label: 'Teste', value: 1000000000.00, percentage: 0.1, color: '#FF9800', list: true, plot: false },
        { originId: 1, label: 'Administração Geral a Cargo da Sefaz', value: 16000000000.00, percentage: 1, color: '#8abe66', list: true, plot: false },
        { originId: 2, label: 'Administração Geral a Cargo da Seger', value: 6000000000.00, percentage: 3, color: '#607D8B', list: true, plot: false },
        { originId: 3, label: 'Administração Geral a Cargo da Sep', value: 4000000000.00, percentage: 2, color: '#FFC107', list: true, plot: false },
        { originId: 4, label: 'Secretaria da Casa Civil', value: 3000000000.00, percentage: 1, color: '#f44336', list: true, plot: false },
        { originId: 5, label: 'Secretaria de Estado da Cultura', value: 1000000000.00, percentage: 1, color: '#009688', list: true, plot: false },
        { originId: 5, label: 'Teste', value: 1000000000.00, percentage: 0.1, color: '#FF9800', list: true, plot: false },
        { originId: 1, label: 'Administração Geral a Cargo da Sefaz', value: 16000000000.00, percentage: 1, color: '#8abe66', list: true, plot: false },
        { originId: 2, label: 'Administração Geral a Cargo da Seger', value: 6000000000.00, percentage: 3, color: '#607D8B', list: true, plot: false },
        { originId: 3, label: 'Administração Geral a Cargo da Sep', value: 4000000000.00, percentage: 2, color: '#FFC107', list: true, plot: false },
        { originId: 4, label: 'Secretaria da Casa Civil', value: 3000000000.00, percentage: 1, color: '#f44336', list: true, plot: false },
        { originId: 5, label: 'Secretaria de Estado da Cultura', value: 1000000000.00, percentage: 1, color: '#009688', list: true, plot: false },
        { originId: 5, label: 'Teste', value: 1000000000.00, percentage: 0.1, color: '#FF9800', list: true, plot: false },
        { originId: 1, label: 'Administração Geral a Cargo da Sefaz', value: 16000000000.00, percentage: 1, color: '#8abe66', list: true, plot: false },
        { originId: 2, label: 'Administração Geral a Cargo da Seger', value: 6000000000.00, percentage: 3, color: '#607D8B', list: true, plot: false },
        { originId: 3, label: 'Administração Geral a Cargo da Sep', value: 4000000000.00, percentage: 2, color: '#FFC107', list: true, plot: false },
        { originId: 4, label: 'Secretaria da Casa Civil', value: 3000000000.00, percentage: 1, color: '#f44336', list: true, plot: false },
        { originId: 5, label: 'Secretaria de Estado da Cultura', value: 1000000000.00, percentage: 1, color: '#009688', list: true, plot: false },
        { originId: 5, label: 'Teste', value: 1000000000.00, percentage: 0.1, color: '#FF9800', list: true, plot: false },
        { originId: 1, label: 'Administração Geral a Cargo da Sefaz', value: 16000000000.00, percentage: 1, color: '#8abe66', list: true, plot: false },
        { originId: 2, label: 'Administração Geral a Cargo da Seger', value: 6000000000.00, percentage: 3, color: '#607D8B', list: true, plot: false },
        { originId: 3, label: 'Administração Geral a Cargo da Sep', value: 4000000000.00, percentage: 2, color: '#FFC107', list: true, plot: false },
        { originId: 4, label: 'Secretaria da Casa Civil', value: 3000000000.00, percentage: 1, color: '#f44336', list: true, plot: false },
        { originId: 5, label: 'Secretaria de Estado da Cultura', value: 1000000000.00, percentage: 1, color: '#009688', list: true, plot: false },
        { originId: 5, label: 'Teste', value: 1000000000.00, percentage: 0.1, color: '#FF9800', list: true, plot: false },
        { originId: 1, label: 'Administração Geral a Cargo da Sefaz', value: 16000000000.00, percentage: 1, color: '#8abe66', list: true, plot: false },
        { originId: 2, label: 'Administração Geral a Cargo da Seger', value: 6000000000.00, percentage: 3, color: '#607D8B', list: true, plot: false },
        { originId: 3, label: 'Administração Geral a Cargo da Sep', value: 4000000000.00, percentage: 2, color: '#FFC107', list: true, plot: false },
        { originId: 4, label: 'Secretaria da Casa Civil', value: 3000000000.00, percentage: 1, color: '#f44336', list: true, plot: false },
        { originId: 5, label: 'Secretaria de Estado da Cultura', value: 1000000000.00, percentage: 1, color: '#009688', list: true, plot: false },
        { originId: 5, label: 'Teste', value: 1000000000.00, percentage: 0.1, color: '#FF9800', list: true, plot: false },
        { originId: 1, label: 'Administração Geral a Cargo da Sefaz', value: 16000000000.00, percentage: 1, color: '#8abe66', list: true, plot: false },
        { originId: 2, label: 'Administração Geral a Cargo da Seger', value: 6000000000.00, percentage: 3, color: '#607D8B', list: true, plot: false },
        { originId: 3, label: 'Administração Geral a Cargo da Sep', value: 4000000000.00, percentage: 2, color: '#FFC107', list: true, plot: false },
        { originId: 4, label: 'Secretaria da Casa Civil', value: 3000000000.00, percentage: 1, color: '#f44336', list: true, plot: false },
        { originId: 5, label: 'Secretaria de Estado da Cultura', value: 1000000000.00, percentage: 1, color: '#009688', list: true, plot: false },
        { originId: 5, label: 'Teste', value: 1000000000.00, percentage: 0.1, color: '#FF9800', list: true, plot: false },
        { originId: 1, label: 'Administração Geral a Cargo da Sefaz', value: 16000000000.00, percentage: 1, color: '#8abe66', list: true, plot: false },
        { originId: 2, label: 'Administração Geral a Cargo da Seger', value: 6000000000.00, percentage: 3, color: '#607D8B', list: true, plot: false },
        { originId: 3, label: 'Administração Geral a Cargo da Sep', value: 4000000000.00, percentage: 2, color: '#FFC107', list: true, plot: false },
        { originId: 4, label: 'Secretaria da Casa Civil', value: 3000000000.00, percentage: 1, color: '#f44336', list: true, plot: false },
        { originId: 5, label: 'Secretaria de Estado da Cultura', value: 1000000000.00, percentage: 1, color: '#009688', list: true, plot: false },
        { originId: 5, label: 'Teste', value: 1000000000.00, percentage: 0.1, color: '#FF9800', list: true, plot: false },
        { originId: 1, label: 'Administração Geral a Cargo da Sefaz', value: 16000000000.00, percentage: 1, color: '#8abe66', list: true, plot: false },
        { originId: 2, label: 'Administração Geral a Cargo da Seger', value: 6000000000.00, percentage: 3, color: '#607D8B', list: true, plot: false },
        { originId: 3, label: 'Administração Geral a Cargo da Sep', value: 4000000000.00, percentage: 2, color: '#FFC107', list: true, plot: false },
        { originId: 4, label: 'Secretaria da Casa Civil', value: 3000000000.00, percentage: 1, color: '#f44336', list: true, plot: false },
        { originId: 5, label: 'Secretaria de Estado da Cultura', value: 1000000000.00, percentage: 1, color: '#009688', list: true, plot: false },
        { originId: 5, label: 'Teste', value: 1000000000.00, percentage: 0.1, color: '#FF9800', list: true, plot: false },
        { originId: 1, label: 'Administração Geral a Cargo da Sefaz', value: 16000000000.00, percentage: 1, color: '#8abe66', list: true, plot: false },
        { originId: 2, label: 'Administração Geral a Cargo da Seger', value: 6000000000.00, percentage: 3, color: '#607D8B', list: true, plot: false },
        { originId: 3, label: 'Administração Geral a Cargo da Sep', value: 4000000000.00, percentage: 2, color: '#FFC107', list: true, plot: false },
        { originId: 4, label: 'Secretaria da Casa Civil', value: 3000000000.00, percentage: 1, color: '#f44336', list: true, plot: false },
        { originId: 5, label: 'Secretaria de Estado da Cultura', value: 1000000000.00, percentage: 1, color: '#009688', list: true, plot: false },
        { originId: 5, label: 'Teste', value: 1000000000.00, percentage: 0.1, color: '#FF9800', list: true, plot: false },
        { originId: 1, label: 'Administração Geral a Cargo da Sefaz', value: 16000000000.00, percentage: 1, color: '#8abe66', list: true, plot: false },
        { originId: 2, label: 'Administração Geral a Cargo da Seger', value: 6000000000.00, percentage: 3, color: '#607D8B', list: true, plot: false },
        { originId: 3, label: 'Administração Geral a Cargo da Sep', value: 4000000000.00, percentage: 2, color: '#FFC107', list: true, plot: false },
        { originId: 4, label: 'Secretaria da Casa Civil', value: 3000000000.00, percentage: 1, color: '#f44336', list: true, plot: false },
        { originId: 5, label: 'Secretaria de Estado da Cultura', value: 1000000000.00, percentage: 1, color: '#009688', list: true, plot: false },
        { originId: 5, label: 'Teste', value: 1000000000.00, percentage: 0.1, color: '#FF9800', list: true, plot: false },
        { originId: 1, label: 'Administração Geral a Cargo da Sefaz', value: 16000000000.00, percentage: 1, color: '#8abe66', list: true, plot: false },
        { originId: 2, label: 'Administração Geral a Cargo da Seger', value: 6000000000.00, percentage: 3, color: '#607D8B', list: true, plot: false },
        { originId: 3, label: 'Administração Geral a Cargo da Sep', value: 4000000000.00, percentage: 2, color: '#FFC107', list: true, plot: false },
        { originId: 4, label: 'Secretaria da Casa Civil', value: 3000000000.00, percentage: 1, color: '#f44336', list: true, plot: false },
        { originId: 5, label: 'Secretaria de Estado da Cultura', value: 1000000000.00, percentage: 1, color: '#009688', list: true, plot: false },
        { originId: 5, label: 'Teste', value: 1000000000.00, percentage: 0.1, color: '#FF9800', list: true, plot: false },
        { originId: 1, label: 'Administração Geral a Cargo da Sefaz', value: 16000000000.00, percentage: 1, color: '#8abe66', list: true, plot: false },
        { originId: 2, label: 'Administração Geral a Cargo da Seger', value: 6000000000.00, percentage: 3, color: '#607D8B', list: true, plot: false },
        { originId: 3, label: 'Administração Geral a Cargo da Sep', value: 4000000000.00, percentage: 2, color: '#FFC107', list: true, plot: false },
        { originId: 4, label: 'Secretaria da Casa Civil', value: 3000000000.00, percentage: 1, color: '#f44336', list: true, plot: false },
        { originId: 5, label: 'Secretaria de Estado da Cultura', value: 1000000000.00, percentage: 1, color: '#009688', list: true, plot: false },
        { originId: 5, label: 'Teste', value: 1000000000.00, percentage: 0.1, color: '#FF9800', list: true, plot: false },
        { originId: 1, label: 'Administração Geral a Cargo da Sefaz', value: 16000000000.00, percentage: 1, color: '#8abe66', list: true, plot: false },
        { originId: 2, label: 'Administração Geral a Cargo da Seger', value: 6000000000.00, percentage: 3, color: '#607D8B', list: true, plot: false },
        { originId: 3, label: 'Administração Geral a Cargo da Sep', value: 4000000000.00, percentage: 2, color: '#FFC107', list: true, plot: false },
        { originId: 4, label: 'Secretaria da Casa Civil', value: 3000000000.00, percentage: 1, color: '#f44336', list: true, plot: false },
        { originId: 5, label: 'Secretaria de Estado da Cultura', value: 1000000000.00, percentage: 1, color: '#009688', list: true, plot: false },
        { originId: 5, label: 'Teste', value: 1000000000.00, percentage: 0.1, color: '#FF9800', list: true, plot: false },
        { originId: 1, label: 'Administração Geral a Cargo da Sefaz', value: 16000000000.00, percentage: 1, color: '#8abe66', list: true, plot: false },
        { originId: 2, label: 'Administração Geral a Cargo da Seger', value: 6000000000.00, percentage: 3, color: '#607D8B', list: true, plot: false },
        { originId: 3, label: 'Administração Geral a Cargo da Sep', value: 4000000000.00, percentage: 2, color: '#FFC107', list: true, plot: false },
        { originId: 4, label: 'Secretaria da Casa Civil', value: 3000000000.00, percentage: 1, color: '#f44336', list: true, plot: false },
        { originId: 5, label: 'Secretaria de Estado da Cultura', value: 1000000000.00, percentage: 1, color: '#009688', list: true, plot: false },
        { originId: 5, label: 'Teste', value: 1000000000.00, percentage: 0.1, color: '#FF9800', list: true, plot: false }
    ]
};



export class ExpensesController {

    public static $inject: string[] = [ '$scope', 'orderByFilter' ];

    public showChart = true;
    public sortDesc = false;
    public total: number;
    public expenses: SummaryItem[] | undefined;
    public chart: Chart | undefined = undefined;


    /**
     * Creates an instance of ExpensesController.
     * 
     * @param {IScope} $scope
     * 
     * @memberOf ExpensesController
     */
    constructor( private $scope: IScope, private orderBy: IFilterOrderBy ) {
        this.$scope.$on( '$ionicView.loaded', () => this.activate() );
        this.$scope.$on( '$ionicView.beforeEnter', () => angular.element( document.querySelectorAll( 'ion-header-bar' ) ).removeClass( 'espm-header-tabs' ) );
    }


    /**
     * Ativa o controller
     *
     * @returns {void}
     */
    public activate(): void {
        // buscar expenses
        this.total = summary.total;
        this.expenses = summary.items.filter( i => i.list );
        this.plotChart( summary.items.filter( i => i.plot ) );
        this.toggleSort( summary.items );
    }

    /**
     * 
     * 
     * @param {SummaryItem[]} items
     * 
     * @memberOf ExpensesController
     */
    public plotChart( expenses: SummaryItem[] ): void {
        this.chart = {
            labels: expenses.map( item => item.label ),
            values: expenses.map( item => item.percentage ),
            colors: expenses.map( item => item.color )
        };
    }

    /**
     * 
     * 
     * 
     * @memberOf ExpensesController
     */
    public toggleSort( expenses: SummaryItem[] ): void {
        this.sortDesc = !this.sortDesc;
        this.expenses = this.orderBy( expenses, 'percentage', this.sortDesc );
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
    public goToExpense( originId: number ) {
        // Goto
    }
}
