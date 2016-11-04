import reportComponent from './report/report.component';
import { GraphService } from './graph.service';

export default angular.module( 'graph.shared', [] )
                      .service( 'graphService', GraphService )
                      .component( 'report', reportComponent );

export * from './graph.service';
export * from './models/index';
