import { IScope, IPromise } from 'angular';
import { Summary, SummaryItem } from '../shared/index';
import { TransitionService } from '../../../shared/index';
import { TransparencyService } from '../shared/index';

export class ExpensesByOriginController {

    public static $inject: string[] = [ '$scope', 'transparencyService', 'transitionService' ];

    public expenses: Summary | undefined;


    /**
     * Creates an instance of ExpensesController.
     * 
     * @param {IScope} $scope
     * @param {TransitionService} transitionService
     * 
     * @memberOf ExpensesController
     */
    constructor( private $scope: IScope,
        private transparencyService: TransparencyService,
        private transitionService: TransitionService ) {
        this.$scope.$on( '$ionicView.loaded', () => this.activate() );
        this.$scope.$on( '$ionicView.beforeEnter', () => angular.element( document.querySelectorAll( 'ion-header-bar' ) ).removeClass( 'espm-header-tabs' ) );
    }


    /**
     * Ativa o controller
     *
     * @returns {void}
     */
    public activate(): void {
        this.getExpensesByOrigin().then( expenses => this.expenses = expenses );
    }


    /**
     * 
     * 
     * @returns {Promise<Summary>}
     * 
     * @memberOf ExpensesController
     */
    public getExpensesByOrigin(): IPromise<Summary> {
        return this.transparencyService.getExpensesByOrigin().then( expenses => this.expenses = expenses );
    }

    /**
     * 
     * 
     * @param {SummaryItem} item
     * 
     * @memberOf ExpensesByOriginController
     */
    public openDetails( item: SummaryItem ): void {
        this.transitionService.changeState( 'app.transparency.expenseDetail', { id: item.originId, label: item.label }, { type: 'slide', direction: 'left' });
    }
}
