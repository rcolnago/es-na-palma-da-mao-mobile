import { IScope } from 'angular';
import { Summary, SummaryItem } from '../shared/index';
import { TransitionService } from '../../../shared/index';

const summary: Summary = {
    total: 9560899999,
    items: [
        { originId: 1, label: 'Administração Geral a Cargo da Sefaz do Secretaria da Casa Civil', value: 22333555.00, percentage: 22, color: '#8abe66', list: true, plot: true },
        { originId: 2, label: 'Administração Geral a Cargo da Seger', value: 15666.00, percentage: 15.6, color: '#607D8B', list: true, plot: true },
        { originId: 3, label: 'Administração Geral a Cargo da Sep', value: 3009.00, percentage: 3, color: '#FFC107', list: true, plot: true },
        { originId: 4, label: 'Secretaria da Casa Civil', value: 3345678990.00, percentage: 33, color: '#f44336', list: true, plot: true },
        { originId: 5, label: 'Secretaria de Estado da Cultura', value: 500.00, percentage: 5, color: '#009688', list: true, plot: true },
        { originId: 5, label: 'Secretaria de Comunicação', value: 20.00, percentage: 2, color: '#FF9800', list: true, plot: true },

        { originId: 1, label: 'Administração Geral a Cargo da Sefaz', value: 16000000000.00, percentage: 1, color: '#8abe66', list: true, plot: false },
        { originId: 2, label: 'Administração Geral a Cargo da Seger', value: 6000000000.00, percentage: 3, color: '#607D8B', list: true, plot: false },
        { originId: 3, label: 'Administração Geral a Cargo da Sep', value: 4000000000.00, percentage: 2, color: '#FFC107', list: true, plot: false },
        { originId: 4, label: 'Secretaria da Casa Civil', value: 3000000000.00, percentage: 1, color: '#f44336', list: true, plot: false },
        { originId: 5, label: 'Secretaria de Estado da Cultura', value: 1000000000.00, percentage: 1, color: '#009688', list: true, plot: false },
        { originId: 5, label: 'Secretaria de Comunicação', value: 1000000000.00, percentage: 0.1, color: '#FF9800', list: true, plot: false },
        { originId: 1, label: 'Administração Geral a Cargo da Sefaz', value: 16000000000.00, percentage: 1, color: '#8abe66', list: true, plot: false },
        { originId: 2, label: 'Administração Geral a Cargo da Seger', value: 6000000000.00, percentage: 3, color: '#607D8B', list: true, plot: false },
        { originId: 3, label: 'Administração Geral a Cargo da Sep', value: 4000000000.00, percentage: 2, color: '#FFC107', list: true, plot: false },
        { originId: 4, label: 'Secretaria da Casa Civil', value: 3000000000.00, percentage: 1, color: '#f44336', list: true, plot: false },
        { originId: 5, label: 'Secretaria de Estado da Cultura', value: 1000000000.00, percentage: 1, color: '#009688', list: true, plot: false },
        { originId: 5, label: 'Secretaria de Comunicação', value: 1000000000.00, percentage: 0.1, color: '#FF9800', list: true, plot: false },
        { originId: 1, label: 'Administração Geral a Cargo da Sefaz', value: 16000000000.00, percentage: 1, color: '#8abe66', list: true, plot: false },
        { originId: 2, label: 'Administração Geral a Cargo da Seger', value: 6000000000.00, percentage: 3, color: '#607D8B', list: true, plot: false },
        { originId: 3, label: 'Administração Geral a Cargo da Sep', value: 4000000000.00, percentage: 2, color: '#FFC107', list: true, plot: false },
        { originId: 4, label: 'Secretaria da Casa Civil', value: 3000000000.00, percentage: 1, color: '#f44336', list: true, plot: false },
        { originId: 5, label: 'Secretaria de Estado da Cultura', value: 1000000000.00, percentage: 1, color: '#009688', list: true, plot: false },
        { originId: 5, label: 'Secretaria de Comunicação', value: 1000000000.00, percentage: 0.1, color: '#FF9800', list: true, plot: false },
        { originId: 1, label: 'Administração Geral a Cargo da Sefaz', value: 16000000000.00, percentage: 1, color: '#8abe66', list: true, plot: false },
        { originId: 2, label: 'Administração Geral a Cargo da Seger', value: 6000000000.00, percentage: 3, color: '#607D8B', list: true, plot: false },
        { originId: 3, label: 'Administração Geral a Cargo da Sep', value: 4000000000.00, percentage: 2, color: '#FFC107', list: true, plot: false },
        { originId: 4, label: 'Secretaria da Casa Civil', value: 3000000000.00, percentage: 1, color: '#f44336', list: true, plot: false },
        { originId: 5, label: 'Secretaria de Estado da Cultura', value: 1000000000.00, percentage: 1, color: '#009688', list: true, plot: false },
        { originId: 5, label: 'Secretaria de Comunicação', value: 1000000000.00, percentage: 0.1, color: '#FF9800', list: true, plot: false },
        { originId: 1, label: 'Administração Geral a Cargo da Sefaz', value: 16000000000.00, percentage: 1, color: '#8abe66', list: true, plot: false },
        { originId: 2, label: 'Administração Geral a Cargo da Seger', value: 6000000000.00, percentage: 3, color: '#607D8B', list: true, plot: false },
        { originId: 3, label: 'Administração Geral a Cargo da Sep', value: 4000000000.00, percentage: 2, color: '#FFC107', list: true, plot: false },
        { originId: 4, label: 'Secretaria da Casa Civil', value: 3000000000.00, percentage: 1, color: '#f44336', list: true, plot: false },
        { originId: 5, label: 'Secretaria de Estado da Cultura', value: 1000000000.00, percentage: 1, color: '#009688', list: true, plot: false },
        { originId: 5, label: 'Secretaria de Comunicação', value: 1000000000.00, percentage: 0.1, color: '#FF9800', list: true, plot: false },
        { originId: 1, label: 'Administração Geral a Cargo da Sefaz', value: 16000000000.00, percentage: 1, color: '#8abe66', list: true, plot: false },
        { originId: 2, label: 'Administração Geral a Cargo da Seger', value: 6000000000.00, percentage: 3, color: '#607D8B', list: true, plot: false },
        { originId: 3, label: 'Administração Geral a Cargo da Sep', value: 4000000000.00, percentage: 2, color: '#FFC107', list: true, plot: false },
        { originId: 4, label: 'Secretaria da Casa Civil', value: 3000000000.00, percentage: 1, color: '#f44336', list: true, plot: false },
        { originId: 5, label: 'Secretaria de Estado da Cultura', value: 1000000000.00, percentage: 1, color: '#009688', list: true, plot: false },
        { originId: 5, label: 'Secretaria de Comunicação', value: 1000000000.00, percentage: 0.1, color: '#FF9800', list: true, plot: false },
        { originId: 1, label: 'Administração Geral a Cargo da Sefaz', value: 16000000000.00, percentage: 1, color: '#8abe66', list: true, plot: false },
        { originId: 2, label: 'Administração Geral a Cargo da Seger', value: 6000000000.00, percentage: 3, color: '#607D8B', list: true, plot: false },
        { originId: 3, label: 'Administração Geral a Cargo da Sep', value: 4000000000.00, percentage: 2, color: '#FFC107', list: true, plot: false },
        { originId: 4, label: 'Secretaria da Casa Civil', value: 3000000000.00, percentage: 1, color: '#f44336', list: true, plot: false },
        { originId: 5, label: 'Secretaria de Estado da Cultura', value: 1000000000.00, percentage: 1, color: '#009688', list: true, plot: false },
        { originId: 5, label: 'Secretaria de Comunicação', value: 1000000000.00, percentage: 0.1, color: '#FF9800', list: true, plot: false },
        { originId: 1, label: 'Administração Geral a Cargo da Sefaz', value: 16000000000.00, percentage: 1, color: '#8abe66', list: true, plot: false },
        { originId: 2, label: 'Administração Geral a Cargo da Seger', value: 6000000000.00, percentage: 3, color: '#607D8B', list: true, plot: false },
        { originId: 3, label: 'Administração Geral a Cargo da Sep', value: 4000000000.00, percentage: 2, color: '#FFC107', list: true, plot: false },
        { originId: 4, label: 'Secretaria da Casa Civil', value: 3000000000.00, percentage: 1, color: '#f44336', list: true, plot: false },
        { originId: 5, label: 'Secretaria de Estado da Cultura', value: 1000000000.00, percentage: 1, color: '#009688', list: true, plot: false },
        { originId: 5, label: 'Secretaria de Comunicação', value: 1000000000.00, percentage: 0.1, color: '#FF9800', list: true, plot: false },
        { originId: 1, label: 'Administração Geral a Cargo da Sefaz', value: 16000000000.00, percentage: 1, color: '#8abe66', list: true, plot: false },
        { originId: 2, label: 'Administração Geral a Cargo da Seger', value: 6000000000.00, percentage: 3, color: '#607D8B', list: true, plot: false },
        { originId: 3, label: 'Administração Geral a Cargo da Sep', value: 4000000000.00, percentage: 2, color: '#FFC107', list: true, plot: false },
        { originId: 4, label: 'Secretaria da Casa Civil', value: 3000000000.00, percentage: 1, color: '#f44336', list: true, plot: false },
        { originId: 5, label: 'Secretaria de Estado da Cultura', value: 1000000000.00, percentage: 1, color: '#009688', list: true, plot: false }
    ]
};



export class RevenuesController {

    public static $inject: string[] = [ '$scope', 'transitionService' ];

    public revenues: Summary | undefined;

    /**
     * Creates an instance of RevenuesController.
     * 
     * @param {IScope} $scope
     * @param {TransitionService} transitionService
     * 
     * @memberOf RevenuesController
     */
    constructor( private $scope: IScope, private transitionService: TransitionService ) {
        this.$scope.$on( '$ionicView.loaded', () => this.activate() );
        this.$scope.$on( '$ionicView.beforeEnter', () => angular.element( document.querySelectorAll( 'ion-header-bar' ) ).removeClass( 'espm-header-tabs' ) );
    }


    /**
     * Ativa o controller
     *
     * @returns {void}
     */
    public activate(): void {
        this.getRevenues().then( revenues => this.revenues = revenues );
    }

    /**
     * 
     * 
     * @returns {Promise<Summary>}
     * 
     * @memberOf RevenuesController
     */
    public getRevenues(): Promise<Summary> {
        return Promise.resolve( summary );
    }

    /**
     * 
     * 
     * @param {SummaryItem} item
     * 
     * @memberOf RevenuesController
     */
    public openDetails( item: SummaryItem ): void {
        this.transitionService.changeState( 'app.transparencyRevenueDetail', { id: item.originId, label: item.label  }, { type: 'slide', direction: 'left' });
    }
}
