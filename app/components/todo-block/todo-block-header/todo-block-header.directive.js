'use strict';

import app from '../../../app.module';
import template from './todo-block-header.template.html';
import controller from './todo-block-header.controller';

app.directive('todoBlockHeader', function() {
	return {
        restrict: 'E',
        template: template,
        scope: {
        	title: '=',
            blockId: '=',
            bgcolor: '='
        },
        controller,
        controllerAs: 'todoBlock',
        bindToController: true // because the scope is isolated
    };
});
