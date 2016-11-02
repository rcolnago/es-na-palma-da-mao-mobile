import { GraphService } from './graph.service';

export default angular.module( 'graph.shared', [] )
                      .service( 'graphService', GraphService );

export * from './graph.service';
export * from './models/index';
