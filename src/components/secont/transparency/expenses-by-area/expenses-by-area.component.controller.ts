import { IScope } from 'angular';
import { Summary, SummaryItem } from '../shared/index';
import { TransitionService } from '../../../shared/index';

const byAreaSummary: Summary = {
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

export class ExpensesByAreaController {

    public static $inject: string[] = [ '$scope', 'transitionService' ];

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
        this.getExpensesByArea().then( expenses => this.expenses = expenses );
    }

    /**
     * 
     * 
     * @returns {Promise<Summary>}
     * 
     * @memberOf ExpensesController
     */
    public getExpensesByArea(): Promise<Summary> {
        return Promise.resolve( byAreaSummary );
    }

    /**
     * 
     * 
     * @param {SummaryItem} item
     * 
     * @memberOf ExpensesByAreaController
     */
    public openDetails( item: SummaryItem ): void {
        this.transitionService.changeState( 'app.transparencyExpenseDetail', { id: item.originId, label: item.label }, { type: 'slide', direction: 'left' });
    }
}
