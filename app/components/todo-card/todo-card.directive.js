'use strict';

import app from '../../app.module';
import template from './todo-card.template.html';

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
        }
        //link: linkFunc,
        //controllerAs: 'vm',
        //bindToController: true // because the scope is isolated
    };
});
