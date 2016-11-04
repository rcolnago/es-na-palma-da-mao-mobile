import { IScope, IPromise } from 'angular';
import { Summary } from '../shared/index';
import { TransparencyService } from '../shared/index';

export class ExpenseDetailController {

    public static $inject: string[] = [ '$scope', 'transparencyService', '$stateParams' ];

    public label: string;
    public expenseDetail: Summary | undefined;

    /**
     * Creates an instance of ExpenseDetailController.
     * 
     * @param {IScope} $scope
     * @param {TransparencyService} transparencyService
     * @param {angular.ui.IStateParamsService} $stateParams
     * 
     * @memberOf ExpenseDetailController
     */
    constructor( private $scope: IScope,
        private transparencyService: TransparencyService,
        private $stateParams: angular.ui.IStateParamsService ) {
        this.$scope.$on( '$ionicView.loaded', () => this.activate() );
        this.$scope.$on( '$ionicView.beforeEnter', () => angular.element( document.querySelectorAll( 'ion-header-bar' ) ).removeClass( 'espm-header-tabs' ) );
    }


    /**
     * Ativa o controller
     *
     * @returns {void}
     */
    public activate(): void {
        this.label = this.$stateParams[ 'label' ];
        this.getExpenseDetail( this.$stateParams[ 'id' ] );
    }

    /**
     * 
     * 
     * @returns {Promise<Summary>}
     * 
     * @memberOf ExpensesController
     */
    public getExpenseDetail( expenseId: string ): IPromise<Summary> {
        return this.transparencyService.getExpenseDetail( expenseId ).then( expenseDetail => this.expenseDetail = expenseDetail );
    }
}
