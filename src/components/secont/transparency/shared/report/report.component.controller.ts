import { IFilterOrderBy } from 'angular';
import { Summary, SummaryItem, Chart } from '../index';

export class ReportController {

    public static $inject: string[] = [ 'orderByFilter' ];

    public onItemClick: ( item: { item: SummaryItem }) => void;
    public summary: Summary;
    public label: string;
    public showChart = true;
    public sortDesc = false;
    public total: number;
    public expenses: SummaryItem[] | undefined;
    public chart: Chart | undefined = undefined;


    /**
     * Creates an instance of ReportController.
     * 
     * @param {IFilterOrderBy} orderBy
     * 
     * @memberOf ReportController
     */
    constructor( private orderBy: IFilterOrderBy ) { }


    /**
     * Ativa o controller
     *
     * @returns {void}
     */
    public $onChanges( changes ): void {

        if ( changes.summary ) {
            const summary = <Summary>changes.summary.currentValue;
            if ( summary ) {
                const expenses = summary.items.filter( i => i.list );
                this.expenses = this.orderBy( expenses, 'percentage', true );
                this.total = summary.total;
                this.plotChart( summary.items.filter( i => i.plot ) );
            }
        }
        if ( changes.label ) {
            this.label = changes.label.currentValue;
        }
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
    public toggleSort(): void {
        this.sortDesc = !this.sortDesc;
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
    public onClick( item: SummaryItem ) {
        this.onItemClick( { item: item });
    }
}
