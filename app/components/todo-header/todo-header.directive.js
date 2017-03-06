'use strict';

import app from '../../app.module';
import template from './todo-header.template.html';

app.directive('todoHeader', function() {
	return {
        restrict: 'E',
        template: template,
        scope: {
        },
        //link: linkFunc,
        //controllerAs: 'vm'
    };
});
