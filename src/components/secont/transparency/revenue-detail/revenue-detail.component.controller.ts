import { IScope } from 'angular';
import { Summary } from '../shared/index';

const revenueDetail: Summary = {
    total: 2567345489,
    items: [
        { originId: 1, label: 'Administração Geral a Cargo da Sefaz do Secretaria da Casa Civil', value: 16000000000.00, percentage: 44, color: '#8abe66', list: true, plot: true },
        { originId: 2, label: 'Administração Geral a Cargo da Seger', value: 6000000000.00, percentage: 12, color: '#607D8B', list: true, plot: true },
        { originId: 3, label: 'Administração Geral a Cargo da Sep', value: 4000000000.00, percentage: 8, color: '#FFC107', list: true, plot: true },
        { originId: 4, label: 'Secretaria da Casa Civil', value: 3000000000.00, percentage: 6, color: '#f44336', list: true, plot: true },
        { originId: 5, label: 'Secretaria de Estado da Cultura', value: 1000000000.00, percentage: 29, color: '#009688', list: true, plot: true },
        { originId: 5, label: 'Instituto de Tecnologia da Informação', value: 1000000000.00, percentage: 1, color: '#FF9800', list: true, plot: true },

        { originId: 1, label: 'Administração Geral a Cargo da Sefaz', value: 16000000000.00, percentage: 1, color: '#8abe66', list: true, plot: false },
        { originId: 2, label: 'Administração Geral a Cargo da Seger', value: 6000000000.00, percentage: 3, color: '#607D8B', list: true, plot: false },
        { originId: 3, label: 'Administração Geral a Cargo da Sep', value: 4000000000.00, percentage: 2, color: '#FFC107', list: true, plot: false },
        { originId: 4, label: 'Secretaria da Casa Civil', value: 3000000000.00, percentage: 1, color: '#f44336', list: true, plot: false },
        { originId: 5, label: 'Secretaria de Estado da Cultura', value: 1000000000.00, percentage: 1, color: '#009688', list: true, plot: false },
        { originId: 5, label: 'Instituto de Tecnologia da Informação', value: 1000000000.00, percentage: 0.1, color: '#FF9800', list: true, plot: false },
        { originId: 1, label: 'Administração Geral a Cargo da Sefaz', value: 16000000000.00, percentage: 1, color: '#8abe66', list: true, plot: false },
        { originId: 2, label: 'Administração Geral a Cargo da Seger', value: 6000000000.00, percentage: 3, color: '#607D8B', list: true, plot: false },
        { originId: 3, label: 'Administração Geral a Cargo da Sep', value: 4000000000.00, percentage: 2, color: '#FFC107', list: true, plot: false },
        { originId: 4, label: 'Secretaria da Casa Civil', value: 3000000000.00, percentage: 1, color: '#f44336', list: true, plot: false },
        { originId: 5, label: 'Secretaria de Estado da Cultura', value: 1000000000.00, percentage: 1, color: '#009688', list: true, plot: false },
        { originId: 5, label: 'Instituto de Tecnologia da Informação', value: 1000000000.00, percentage: 0.1, color: '#FF9800', list: true, plot: false },
        { originId: 1, label: 'Administração Geral a Cargo da Sefaz', value: 16000000000.00, percentage: 1, color: '#8abe66', list: true, plot: false },
        { originId: 2, label: 'Administração Geral a Cargo da Seger', value: 6000000000.00, percentage: 3, color: '#607D8B', list: true, plot: false },
        { originId: 3, label: 'Administração Geral a Cargo da Sep', value: 4000000000.00, percentage: 2, color: '#FFC107', list: true, plot: false },
        { originId: 4, label: 'Secretaria da Casa Civil', value: 3000000000.00, percentage: 1, color: '#f44336', list: true, plot: false },
        { originId: 5, label: 'Secretaria de Estado da Cultura', value: 1000000000.00, percentage: 1, color: '#009688', list: true, plot: false },
        { originId: 5, label: 'Instituto de Tecnologia da Informação', value: 1000000000.00, percentage: 0.1, color: '#FF9800', list: true, plot: false },
        { originId: 1, label: 'Administração Geral a Cargo da Sefaz', value: 16000000000.00, percentage: 1, color: '#8abe66', list: true, plot: false },
        { originId: 2, label: 'Administração Geral a Cargo da Seger', value: 6000000000.00, percentage: 3, color: '#607D8B', list: true, plot: false },
        { originId: 3, label: 'Administração Geral a Cargo da Sep', value: 4000000000.00, percentage: 2, color: '#FFC107', list: true, plot: false },
        { originId: 4, label: 'Secretaria da Casa Civil', value: 3000000000.00, percentage: 1, color: '#f44336', list: true, plot: false },
        { originId: 5, label: 'Secretaria de Estado da Cultura', value: 1000000000.00, percentage: 1, color: '#009688', list: true, plot: false },
        { originId: 5, label: 'Instituto de Tecnologia da Informação', value: 1000000000.00, percentage: 0.1, color: '#FF9800', list: true, plot: false },
        { originId: 1, label: 'Administração Geral a Cargo da Sefaz', value: 16000000000.00, percentage: 1, color: '#8abe66', list: true, plot: false },
        { originId: 2, label: 'Administração Geral a Cargo da Seger', value: 6000000000.00, percentage: 3, color: '#607D8B', list: true, plot: false },
        { originId: 3, label: 'Administração Geral a Cargo da Sep', value: 4000000000.00, percentage: 2, color: '#FFC107', list: true, plot: false },
        { originId: 4, label: 'Secretaria da Casa Civil', value: 3000000000.00, percentage: 1, color: '#f44336', list: true, plot: false },
        { originId: 5, label: 'Secretaria de Estado da Cultura', value: 1000000000.00, percentage: 1, color: '#009688', list: true, plot: false },
        { originId: 5, label: 'Instituto de Tecnologia da Informação', value: 1000000000.00, percentage: 0.1, color: '#FF9800', list: true, plot: false },
        { originId: 1, label: 'Administração Geral a Cargo da Sefaz', value: 16000000000.00, percentage: 1, color: '#8abe66', list: true, plot: false },
        { originId: 2, label: 'Administração Geral a Cargo da Seger', value: 6000000000.00, percentage: 3, color: '#607D8B', list: true, plot: false },
        { originId: 3, label: 'Administração Geral a Cargo da Sep', value: 4000000000.00, percentage: 2, color: '#FFC107', list: true, plot: false },
        { originId: 4, label: 'Secretaria da Casa Civil', value: 3000000000.00, percentage: 1, color: '#f44336', list: true, plot: false },
        { originId: 5, label: 'Secretaria de Estado da Cultura', value: 1000000000.00, percentage: 1, color: '#009688', list: true, plot: false },
        { originId: 5, label: 'Instituto de Tecnologia da Informação', value: 1000000000.00, percentage: 0.1, color: '#FF9800', list: true, plot: false },
        { originId: 1, label: 'Administração Geral a Cargo da Sefaz', value: 16000000000.00, percentage: 1, color: '#8abe66', list: true, plot: false },
        { originId: 2, label: 'Administração Geral a Cargo da Seger', value: 6000000000.00, percentage: 3, color: '#607D8B', list: true, plot: false },
        { originId: 3, label: 'Administração Geral a Cargo da Sep', value: 4000000000.00, percentage: 2, color: '#FFC107', list: true, plot: false },
        { originId: 4, label: 'Secretaria da Casa Civil', value: 3000000000.00, percentage: 1, color: '#f44336', list: true, plot: false },
        { originId: 5, label: 'Secretaria de Estado da Cultura', value: 1000000000.00, percentage: 1, color: '#009688', list: true, plot: false },
        { originId: 5, label: 'Instituto de Tecnologia da Informação', value: 1000000000.00, percentage: 0.1, color: '#FF9800', list: true, plot: false },
        { originId: 1, label: 'Administração Geral a Cargo da Sefaz', value: 16000000000.00, percentage: 1, color: '#8abe66', list: true, plot: false },
        { originId: 2, label: 'Administração Geral a Cargo da Seger', value: 6000000000.00, percentage: 3, color: '#607D8B', list: true, plot: false },
        { originId: 3, label: 'Administração Geral a Cargo da Sep', value: 4000000000.00, percentage: 2, color: '#FFC107', list: true, plot: false },
        { originId: 4, label: 'Secretaria da Casa Civil', value: 3000000000.00, percentage: 1, color: '#f44336', list: true, plot: false },
        { originId: 5, label: 'Secretaria de Estado da Cultura', value: 1000000000.00, percentage: 1, color: '#009688', list: true, plot: false },
        { originId: 5, label: 'Instituto de Tecnologia da Informação', value: 1000000000.00, percentage: 0.1, color: '#FF9800', list: true, plot: false },
        { originId: 1, label: 'Administração Geral a Cargo da Sefaz', value: 16000000000.00, percentage: 1, color: '#8abe66', list: true, plot: false },
        { originId: 2, label: 'Administração Geral a Cargo da Seger', value: 6000000000.00, percentage: 3, color: '#607D8B', list: true, plot: false },
        { originId: 3, label: 'Administração Geral a Cargo da Sep', value: 4000000000.00, percentage: 2, color: '#FFC107', list: true, plot: false },
        { originId: 4, label: 'Secretaria da Casa Civil', value: 3000000000.00, percentage: 1, color: '#f44336', list: true, plot: false },
        { originId: 5, label: 'Secretaria de Estado da Cultura', value: 1000000000.00, percentage: 1, color: '#009688', list: true, plot: false },
        { originId: 5, label: 'Instituto de Tecnologia da Informação', value: 1000000000.00, percentage: 0.1, color: '#FF9800', list: true, plot: false },
        { originId: 1, label: 'Administração Geral a Cargo da Sefaz', value: 16000000000.00, percentage: 1, color: '#8abe66', list: true, plot: false },
        { originId: 2, label: 'Administração Geral a Cargo da Seger', value: 6000000000.00, percentage: 3, color: '#607D8B', list: true, plot: false },
        { originId: 3, label: 'Administração Geral a Cargo da Sep', value: 4000000000.00, percentage: 2, color: '#FFC107', list: true, plot: false },
        { originId: 4, label: 'Secretaria da Casa Civil', value: 3000000000.00, percentage: 1, color: '#f44336', list: true, plot: false },
        { originId: 5, label: 'Secretaria de Estado da Cultura', value: 1000000000.00, percentage: 1, color: '#009688', list: true, plot: false },
        { originId: 5, label: 'Instituto de Tecnologia da Informação', value: 1000000000.00, percentage: 0.1, color: '#FF9800', list: true, plot: false },
        { originId: 1, label: 'Administração Geral a Cargo da Sefaz', value: 16000000000.00, percentage: 1, color: '#8abe66', list: true, plot: false },
        { originId: 2, label: 'Administração Geral a Cargo da Seger', value: 6000000000.00, percentage: 3, color: '#607D8B', list: true, plot: false },
        { originId: 3, label: 'Administração Geral a Cargo da Sep', value: 4000000000.00, percentage: 2, color: '#FFC107', list: true, plot: false },
        { originId: 4, label: 'Secretaria da Casa Civil', value: 3000000000.00, percentage: 1, color: '#f44336', list: true, plot: false },
        { originId: 5, label: 'Secretaria de Estado da Cultura', value: 1000000000.00, percentage: 1, color: '#009688', list: true, plot: false },
        { originId: 5, label: 'Instituto de Tecnologia da Informação', value: 1000000000.00, percentage: 0.1, color: '#FF9800', list: true, plot: false },
        { originId: 1, label: 'Administração Geral a Cargo da Sefaz', value: 16000000000.00, percentage: 1, color: '#8abe66', list: true, plot: false },
        { originId: 2, label: 'Administração Geral a Cargo da Seger', value: 6000000000.00, percentage: 3, color: '#607D8B', list: true, plot: false },
        { originId: 3, label: 'Administração Geral a Cargo da Sep', value: 4000000000.00, percentage: 2, color: '#FFC107', list: true, plot: false },
        { originId: 4, label: 'Secretaria da Casa Civil', value: 3000000000.00, percentage: 1, color: '#f44336', list: true, plot: false },
        { originId: 5, label: 'Secretaria de Estado da Cultura', value: 1000000000.00, percentage: 1, color: '#009688', list: true, plot: false },
        { originId: 5, label: 'Instituto de Tecnologia da Informação', value: 1000000000.00, percentage: 0.1, color: '#FF9800', list: true, plot: false },
        { originId: 1, label: 'Administração Geral a Cargo da Sefaz', value: 16000000000.00, percentage: 1, color: '#8abe66', list: true, plot: false },
        { originId: 2, label: 'Administração Geral a Cargo da Seger', value: 6000000000.00, percentage: 3, color: '#607D8B', list: true, plot: false },
        { originId: 3, label: 'Administração Geral a Cargo da Sep', value: 4000000000.00, percentage: 2, color: '#FFC107', list: true, plot: false },
        { originId: 4, label: 'Secretaria da Casa Civil', value: 3000000000.00, percentage: 1, color: '#f44336', list: true, plot: false },
        { originId: 5, label: 'Secretaria de Estado da Cultura', value: 1000000000.00, percentage: 1, color: '#009688', list: true, plot: false },
        { originId: 5, label: 'Instituto de Tecnologia da Informação', value: 1000000000.00, percentage: 0.1, color: '#FF9800', list: true, plot: false },
        { originId: 1, label: 'Administração Geral a Cargo da Sefaz', value: 16000000000.00, percentage: 1, color: '#8abe66', list: true, plot: false },
        { originId: 2, label: 'Administração Geral a Cargo da Seger', value: 6000000000.00, percentage: 3, color: '#607D8B', list: true, plot: false },
        { originId: 3, label: 'Administração Geral a Cargo da Sep', value: 4000000000.00, percentage: 2, color: '#FFC107', list: true, plot: false },
        { originId: 4, label: 'Secretaria da Casa Civil', value: 3000000000.00, percentage: 1, color: '#f44336', list: true, plot: false },
        { originId: 5, label: 'Secretaria de Estado da Cultura', value: 1000000000.00, percentage: 1, color: '#009688', list: true, plot: false },
        { originId: 5, label: 'Instituto de Tecnologia da Informação', value: 1000000000.00, percentage: 0.1, color: '#FF9800', list: true, plot: false },
        { originId: 1, label: 'Administração Geral a Cargo da Sefaz', value: 16000000000.00, percentage: 1, color: '#8abe66', list: true, plot: false },
        { originId: 2, label: 'Administração Geral a Cargo da Seger', value: 6000000000.00, percentage: 3, color: '#607D8B', list: true, plot: false },
        { originId: 3, label: 'Administração Geral a Cargo da Sep', value: 4000000000.00, percentage: 2, color: '#FFC107', list: true, plot: false },
        { originId: 4, label: 'Secretaria da Casa Civil', value: 3000000000.00, percentage: 1, color: '#f44336', list: true, plot: false },
        { originId: 5, label: 'Secretaria de Estado da Cultura', value: 1000000000.00, percentage: 1, color: '#009688', list: true, plot: false },
        { originId: 5, label: 'Instituto de Tecnologia da Informação', value: 1000000000.00, percentage: 0.1, color: '#FF9800', list: true, plot: false },
        { originId: 1, label: 'Administração Geral a Cargo da Sefaz', value: 16000000000.00, percentage: 1, color: '#8abe66', list: true, plot: false },
        { originId: 2, label: 'Administração Geral a Cargo da Seger', value: 6000000000.00, percentage: 3, color: '#607D8B', list: true, plot: false },
        { originId: 3, label: 'Administração Geral a Cargo da Sep', value: 4000000000.00, percentage: 2, color: '#FFC107', list: true, plot: false },
        { originId: 4, label: 'Secretaria da Casa Civil', value: 3000000000.00, percentage: 1, color: '#f44336', list: true, plot: false },
        { originId: 5, label: 'Secretaria de Estado da Cultura', value: 1000000000.00, percentage: 1, color: '#009688', list: true, plot: false },
        { originId: 5, label: 'Instituto de Tecnologia da Informação', value: 1000000000.00, percentage: 0.1, color: '#FF9800', list: true, plot: false }
    ]
};

export class RevenueDetailController {

    public static $inject: string[] = [ '$scope', '$stateParams' ];

    public revenueDetail: Summary | undefined;
    public label: string;

    /**
     * Creates an instance of revenuesController.
     * 
     * @param {IScope} $scope
     * 
     * @memberOf revenuesController
     */
    constructor( private $scope: IScope, private $stateParams: angular.ui.IStateParamsService ) {
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
        this.getRevenueDetail( this.$stateParams[ 'id' ] ).then(() => this.revenueDetail = revenueDetail );
    }

    /**
     * 
     * 
     * @returns {Promise<Summary>}
     * 
     * @memberOf revenuesController
     */
    public getRevenueDetail( revenueId: string ): Promise<Summary> {
        return Promise.resolve( revenueDetail );
    }
}
