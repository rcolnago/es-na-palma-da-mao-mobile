import { LatestController } from './latest.component.controller';
import LatestComponent from './latest.component';
import LatestTemplate = require('./latest.component.html');
import { Edition, DioApiService } from '../shared/index';
import { environment, $windowMock } from '../../shared/tests/index';
let expect = chai.expect;


describe( 'Dio/latest', () => {

    let sandbox: Sinon.SinonSandbox;
    beforeEach(() => sandbox = sinon.sandbox.create() );
    afterEach(() => sandbox.restore() );


    describe( 'Controller', () => {
        let controller: LatestController;
        let dioApiService: DioApiService;

        beforeEach(() => {
            environment.refresh();
            dioApiService = <DioApiService>{ getLatestEditions() { } };
            controller = new LatestController( environment.$scope, $windowMock, dioApiService );
        });

        describe( 'on instantiation', () => {

            it( 'should have a empty latest editions list', () => {
                expect( controller.latestEditions ).to.be.deep.equal( [] );
            });

            it( 'should activate on $ionicView.loaded event', () => {
                let activate = sandbox.stub( controller, 'activate' ); // replace original activate

                // simulates ionic before event trigger
                environment.onIonicLoadedEvent();

                expect( activate.called ).to.be.true;
            });
        });

        describe( 'activate()', () => {

            it( 'should call getLatestEditions()', () => {
                let getLatestEditions = sandbox.stub( controller, 'getLatestEditions' );

                controller.activate();

                expect( getLatestEditions.calledOnce ).to.be.true;
            });
        });


        describe( 'getLatestEditions()', () => {
            it( 'should fill latest editions list', () => {
                let latestEditions = <Edition[]>[ { description: '2016-01-01' }, { description: '2015-01-01' }];

                sandbox.stub( dioApiService, 'getLatestEditions' ).returnsPromise().resolves( latestEditions );

                controller.getLatestEditions();

                expect( controller.latestEditions ).to.deep.equal( latestEditions );
            });
        });

        describe( 'openEdition()', () => {
            it( 'should open edition on Web', () => {
                let $windowOpen = sandbox.stub( $windowMock, 'open' );

                controller.openEdition( 'edition-url' );

                expect( $windowOpen.calledWith( 'edition-url' ) ).to.be.true;
            });
        });
    });

    describe( 'Component', () => {
        // test the component/directive itself
        let component = LatestComponent();

        it( 'should use the right controller', () => {
            expect( component.controller ).to.equal( LatestController );
        });

        it( 'should use the right template', () => {
            expect( component.template ).to.equal( LatestTemplate );
        });

        it( 'should use controllerAs', () => {
            expect( component ).to.have.property( 'controllerAs' );
        });

        it( 'should use controllerAs "vm"', () => {
            expect( component.controllerAs ).to.equal( 'vm' );
        });

        it( 'should use bindToController: true', () => {
            expect( component ).to.have.property( 'bindToController' );
            expect( component.bindToController ).to.equal( true );
        });
    });
});
