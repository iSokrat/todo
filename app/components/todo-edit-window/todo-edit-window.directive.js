'use strict';

import app from '../../app.module';
import template from './todo-edit-window.template.html';

app.directive('todoEditWindow', function() {
	return {
        restrict: 'E',
        template: template,
        scope: {}
        //link: linkFunc,
        //controllerAs: 'vm',
        //bindToController: true // because the scope is isolated
    };
});
