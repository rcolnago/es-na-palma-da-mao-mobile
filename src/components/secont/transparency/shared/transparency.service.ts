import moment = require( 'moment' );
import { IHttpService, IPromise } from 'angular';
import { Summary } from './models/index';
import { ISettings } from '../../../shared/settings/index';

export class TransparencyService {

    public static $inject: string[] = [ '$http', 'settings' ];

    /**
     * Creates an instance of DioApiService.
     * 
     * @param {IHttpService} $http
     * @param {ISettings} settings
     */
    constructor( private $http: IHttpService, private settings: ISettings ) { }


    /**
     * 
     * 
     * @returns {IPromise<Summary>}
     * 
     * @memberOf TransparencyService
     */
    public getExpensesByArea( filter?: { year: number, month: number }): IPromise<Summary> {
        let defaults = {
            year: moment().year(),
            month: moment().month()
        };
        return this.$http
            .get( `${this.settings.api.transparency}/expenses/area`, { params: Object.assign( {}, defaults, filter || {}) })
            .then(( response: { data: Summary }) => response.data );
    }

    /**
     * 
     * 
     * @returns {IPromise<Summary>}
     * 
     * @memberOf TransparencyService
     */
    public getExpensesByOrigin( filter?: { year: number, month: number }): IPromise<Summary> {
        let defaults = {
            year: moment().year(),
            month: moment().month()
        };
        return this.$http
            .get( `${this.settings.api.transparency}/expenses/origin`, { params: Object.assign( {}, defaults, filter || {}) })
            .then(( response: { data: Summary }) => response.data );
    }
    /**
     * 
     * 
     * @returns {IPromise<Edition[]>}
     */
    public getRevenueDetail( id: string, filter?: { year: number, month: number }): IPromise<Summary> {
        let defaults = {
            year: moment().year(),
            month: moment().month()
        };
        return this.$http
            .get( `${this.settings.api.transparency}/revenue/detail/${id}`, { params: Object.assign( {}, defaults, filter || {}) })
            .then(( response: { data: Summary }) => response.data );
    }


    /**
     * 
     * 
     * @param {string} revenueId
     * @returns {IPromise<Summary>}
     * 
     * @memberOf TransparencyService
     */
    public getExpenseDetail( id: string, filter?: { year: number, month: number }): IPromise<Summary> {
        let defaults = {
            year: moment().year(),
            month: moment().month()
        };
        return this.$http
            .get( `${this.settings.api.transparency}/expenses/detail/${id}`, { params: Object.assign( {}, defaults, filter || {}) })
            .then(( response: { data: Summary }) => response.data );
    }
}

