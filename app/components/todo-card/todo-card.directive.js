'use strict';

import app from '../../app.module';
import template from './todo-card.template.html';
import controller from './todo-card.controller';

app.directive('todoCard', function() {
	return {
        restrict: 'E',
        template: template,
        scope: {
        	title: '=',
            description: '=',
            bgcolor: '=',
            cardId: '=',
            blockId: '='
        },
        controller,
        controllerAs: 'todoCard',
        bindToController: true // because the scope is isolated
    };
});
