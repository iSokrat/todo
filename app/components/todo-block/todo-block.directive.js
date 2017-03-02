'use strict';

import app from '../../app.module';
import template from './todo-block.template.html';

app.directive('todoBlock', function() {
	return {
        restrict: 'E',
        template: template,
        scope: {
        	title: '=',
            todoCards: '=',
        }
        //link: linkFunc,
        //controllerAs: 'vm',
        //bindToController: true // because the scope is isolated
    };
});
