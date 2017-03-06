'use strict';

import app from '../../../app.module';
import template from './todo-block-header.template.html';

app.directive('todoBlockHeader', function() {
	return {
        restrict: 'E',
        template: template,
        scope: {
        	title: '=',
            id: '='
        }
        //link: linkFunc,
        //controllerAs: 'vm',
        //bindToController: true // because the scope is isolated
    };
});
