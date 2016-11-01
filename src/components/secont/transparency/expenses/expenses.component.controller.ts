import { IScope } from 'angular';

export class ExpensesController {

    public static $inject: string[] = [ '$scope' ];

    public chart: { label: string, data: number }[] | undefined = undefined;
    public labels: string[] | undefined;
    public values: number[] | undefined;

    /**
     * Creates an instance of ExpensesController.
     * 
     * @param {IScope} $scope
     * 
     * @memberOf ExpensesController
     */
    constructor( private $scope: IScope ) {
        this.$scope.$on( '$ionicView.beforeEnter', () => this.activate() );
    }


    /**
     * Ativa o controller
     *
     * @returns {void}
     */
    public activate(): void {
        angular.element( document.querySelectorAll( 'ion-header-bar' ) ).removeClass( 'espm-header-tabs' );

        this.chart = [
            { label: 'Valor 1', data: 500 },
            { label: 'Valor 2', data: 100 },
            { label: 'Valor 3', data: 170 }
        ];
        this.labels = this.chart.map( item => item.label );
        this.values = this.chart.map( item => item.data );

    }
}
