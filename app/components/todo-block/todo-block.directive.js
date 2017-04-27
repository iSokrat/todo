'use strict';

import app from '../../app.module';
import template from './todo-block.template.html';
import controller from './todo-block.controller';

app.directive('todoBlock', function() {
	return {
        restrict: 'E',
        template: template,
        scope: {
        	title: '=',
            bgcolor: '=',
            todoCards: '=',
            id: '='
        },
        controller,
        controllerAs: 'todoBlock',
        bindToController: true
    };
});
