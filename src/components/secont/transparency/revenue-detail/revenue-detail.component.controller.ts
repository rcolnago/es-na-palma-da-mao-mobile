import { IScope, IPromise } from 'angular';
import { Summary } from '../shared/index';
import { TransparencyService } from '../shared/index';

export class RevenueDetailController {

    public static $inject: string[] = [ '$scope', 'transparencyService', '$stateParams' ];

    public revenueDetail: Summary | undefined;
    public label: string;

    /**
     * Creates an instance of RevenueDetailController.
     * 
     * @param {IScope} $scope
     * @param {TransparencyService} transparencyService
     * @param {angular.ui.IStateParamsService} $stateParams
     * 
     * @memberOf RevenueDetailController
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
        this.getRevenueDetail( this.$stateParams[ 'id' ] );
    }

    /**
     * 
     * 
     * @returns {Promise<Summary>}
     * 
     * @memberOf revenuesController
     */
    public getRevenueDetail( revenueId: string ): IPromise<Summary> {
        return this.transparencyService.getRevenueDetail( revenueId ).then( revenueDetail => this.revenueDetail = revenueDetail );
    }
}
