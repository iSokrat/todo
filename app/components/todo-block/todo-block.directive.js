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
            id: '='
        },
        //link: linkFunc,
        //controllerAs: 'vm'
    };
});
