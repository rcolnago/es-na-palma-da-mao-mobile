import { IScope } from 'angular';
import { GraphService } from '../../shared/index';

export class ExpensesController {

    public static $inject: string[] = [ '$scope', 'graphService' ];

    public chart: { label: string, data: number }[] | undefined = undefined;
    public labels: string[] | undefined;
    public values: number[] | undefined;
    public colors: any[] | undefined;

    public expenses: any[] | undefined;

    /**
     * Creates an instance of ExpensesController.
     * 
     * @param {IScope} $scope
     * 
     * @memberOf ExpensesController
     */
    constructor( private $scope: IScope, private graphService: GraphService ) {
        this.$scope.$on( '$ionicView.beforeEnter', () => this.activate() );
    }


    /**
     * Ativa o controller
     *
     * @returns {void}
     */
    public activate(): void {
        this.expenses = [
            { originId: 1, label: 'Administração Geral a Cargo da Sefaz', value: 16000000000.00, percentage: 88 },
            { originId: 2, label: 'Administração Geral a Cargo da Seger', value: 6000000000.00, percentage: 7 },
            { originId: 3, label: 'Administração Geral a Cargo da Sep', value: 4000000000.00, percentage: 3 },
            { originId: 4, label: 'Secretaria da Casa Civil', value: 3000000000.00, percentage: 1 },
            { originId: 5, label: 'Secretaria de Estado da Cultura', value: 1000000000.00, percentage: 0.3 },
            { originId: 5, label: 'Teste', value: 1000000000.00, percentage: 0.7}
        ];

        angular.element( document.querySelectorAll( 'ion-header-bar' ) ).removeClass( 'espm-header-tabs' );

        /*        this.chart = [
                    { label: 'Valor 1', data: 100 },
                    { label: 'Valor 2', data: 200 },
                    { label: 'Valor 3', data: 300 },
                    { label: 'Valor 4', data: 400 },
                    { label: 'Valor 5', data: 500 },
                    { label: 'Valor 6', data: 600 },
                    { label: 'Valor 7', data: 670 },
                    { label: 'Valor 8', data: 770 },
                    { label: 'Valor 9', data: 870 },
                    { label: 'Valor 10', data: 1170 },
                    { label: 'Valor 10', data: 1170 },
                    { label: 'Valor 10', data: 1170 },
                    { label: 'Valor 10', data: 1170 },
                    { label: 'Valor 10', data: 1170 },
                    { label: 'Valor 10', data: 1170 },
                    { label: 'Valor 10', data: 1170 },
                    { label: 'Valor 10', data: 1170 },
                    { label: 'Valor 10', data: 1170 },
                    { label: 'Valor 10', data: 1170 }
                ];*/
        this.labels = this.expenses.map( item => item.label );
        this.values = this.expenses.map( item => item.percentage );
        this.colors = this.graphService.defaultColors;
    }

    public goToExpense( originId: number ) {
        // Goto
    }
}
