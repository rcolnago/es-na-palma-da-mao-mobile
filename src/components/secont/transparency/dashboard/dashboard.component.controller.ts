import { IScope } from 'angular';
import { TransitionService } from '../../../shared/index';

export class DashboardController {

    public static $inject: string[] = [ '$scope', 'transitionService' ];

    /**
     * Creates an instance of DashboardController.
     * 
     * @param {IScope} $scope
     * @param {TransitionService} transitionService
     * 
     * @memberOf DashboardController
     */
    constructor( private $scope: IScope, private transitionService: TransitionService ) {
        this.$scope.$on( '$ionicView.beforeEnter', () => this.activate() );
    }

    /**
     * Ativa o controller
     *
     * @returns {void}
     */
    public activate(): void {
        angular.element( document.querySelectorAll( 'ion-header-bar' ) ).removeClass( 'espm-header-tabs' );
    }

    /**
     * 
     * 
     * @param {number} state
     * 
     * @memberOf ExpensesController
     */
    public goTo( state: string ) {
        this.transitionService.changeState( state, { type: 'slide', direction: 'up' });
    }
}
