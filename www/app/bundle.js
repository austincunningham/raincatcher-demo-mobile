require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var ngModule;
try {
  ngModule = angular.module('wfm.appform.directives');
} catch (e) {
  ngModule = angular.module('wfm.appform.directives', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/appform-field-date.tpl.html',
    '<!--\n' +
    ' CONFIDENTIAL\n' +
    ' Copyright 2016 Red Hat, Inc. and/or its affiliates.\n' +
    ' This is unpublished proprietary source code of Red Hat.\n' +
    '-->\n' +
    '\n' +
    '<md-input-container class="md-block" class="{{field.props.fieldCode}} appform-field-number">\n' +
    '  <label for="inputDate" class="">{{field.props.name}}</label>\n' +
    '  <input type="date"\n' +
    '    placeholder="{{ctrl.field.props.helpText}}"\n' +
    '    name="inputDate"\n' +
    '    ng-model="ctrl.model.date"\n' +
    '    ng-change="ctrl.updateModel()"\n' +
    '    min="{{field.props.fieldOptions.validation.min}}"\n' +
    '    max="{{field.props.fieldOptions.validation.max}}"\n' +
    '    ng-required="ctrl.field.props.required"\n' +
    '  ></input>\n' +
    '  <div ng-messages="$parent.fieldForm.inputName.$error" ng-show="$parent.fieldForm.inputName.$dirty || $parent.fieldForm.$submitted">\n' +
    '    <div ng-message="required">A {{field.props.name}} is required.</div>\n' +
    '    <div ng-message="number">You did not enter a valid datae</div>\n' +
    '    <div ng-message="max" class="help-block">Value must be less than {{field.props.fieldOptions.validation.max}}.</div>\n' +
    '    <div ng-message="min" class="help-block">Value must be larger than {{field.props.fieldOptions.validation.min}}.</div>\n' +
    '  </div>\n' +
    '</md-input-container>\n' +
    '');
}]);

},{}],2:[function(require,module,exports){
var ngModule;
try {
  ngModule = angular.module('wfm.appform.directives');
} catch (e) {
  ngModule = angular.module('wfm.appform.directives', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/appform-field-datetime.tpl.html',
    '<!--\n' +
    ' CONFIDENTIAL\n' +
    ' Copyright 2016 Red Hat, Inc. and/or its affiliates.\n' +
    ' This is unpublished proprietary source code of Red Hat.\n' +
    '-->\n' +
    '\n' +
    '<p class="md-caption">{{field.props.name}}</p>\n' +
    '<div layout="row">\n' +
    '  <md-input-container flex class="md-block" class="{{field.props.fieldCode}} appform-field-number">\n' +
    '    <label for="inputDate" class="">Date</label>\n' +
    '    <input type="date"\n' +
    '      placeholder="{{ctrl.field.props.helpText}}"\n' +
    '      name="inputDate"\n' +
    '      ng-model="ctrl.model.date"\n' +
    '      ng-change="ctrl.updateModel()"\n' +
    '      min="{{field.props.fieldOptions.validation.min}}"\n' +
    '      max="{{field.props.fieldOptions.validation.max}}"\n' +
    '      ng-required="ctrl.field.props.required"\n' +
    '    ></input>\n' +
    '    <div ng-messages="$parent.fieldForm.inputName.$error" ng-show="$parent.fieldForm.inputName.$dirty || $parent.fieldForm.$submitted">\n' +
    '      <div ng-message="required">A {{field.props.name}} is required.</div>\n' +
    '      <div ng-message="number">You did not enter a valid date</div>\n' +
    '      <div ng-message="max" class="help-block">Value must be less than {{field.props.fieldOptions.validation.max}}.</div>\n' +
    '      <div ng-message="min" class="help-block">Value must be larger than {{field.props.fieldOptions.validation.min}}.</div>\n' +
    '    </div>\n' +
    '  </md-input-container>\n' +
    '  <md-input-container flex class="md-block" class="{{field.props.fieldCode}} appform-field-number">\n' +
    '    <label for="inputTime" class="">Time</label>\n' +
    '    <input type="time"\n' +
    '      placeholder="{{ctrl.field.props.helpText}}"\n' +
    '      name="inputTime"\n' +
    '      ng-model="ctrl.model.time"\n' +
    '      ng-required="ctrl.field.props.required"\n' +
    '    ></input>\n' +
    '    <div ng-messages="$parent.fieldForm.inputName.$error" ng-show="$parent.fieldForm.inputName.$dirty || $parent.fieldForm.$submitted">\n' +
    '      <div ng-message="required">A {{field.props.name}} is required.</div>\n' +
    '      <div ng-message="number">You did not enter a valid time</div>\n' +
    '      <div ng-message="max" class="help-block">Value must be less than {{field.props.fieldOptions.validation.max}}.</div>\n' +
    '      <div ng-message="min" class="help-block">Value must be larger than {{field.props.fieldOptions.validation.min}}.</div>\n' +
    '    </div>\n' +
    '  </md-input-container>\n' +
    '</div>\n' +
    '');
}]);

},{}],3:[function(require,module,exports){
var ngModule;
try {
  ngModule = angular.module('wfm.appform.directives');
} catch (e) {
  ngModule = angular.module('wfm.appform.directives', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/appform-field-location.tpl.html',
    '<!--\n' +
    ' CONFIDENTIAL\n' +
    ' Copyright 2016 Red Hat, Inc. and/or its affiliates.\n' +
    ' This is unpublished proprietary source code of Red Hat.\n' +
    '-->\n' +
    '<p class="md-caption">{{field.props.name}}</p>\n' +
    '<p>{{field.props.helpText}}</p>\n' +
    '\n' +
    '<md-button type="button" ng-click="ctrl.setLocation($event)" class="md-raised md-primary">\n' +
    '  <md-icon md-font-set="material-icons">location_searching</md-icon>\n' +
    '  Get Location\n' +
    '</md-button>\n' +
    '\n' +
    '<div layout="row">\n' +
    '  <md-input-container class="{{field.props.fieldCode}} appform-field-location md-block" flex>\n' +
    '    <input type="number"\n' +
    '      placeholder="Latitude"\n' +
    '      name="inputNameX"\n' +
    '      ng-model="ctrl.model.value.lat"\n' +
    '      ng-required="ctrl.field.props.required"\n' +
    '    ></input>\n' +
    '\n' +
    '    <div ng-messages="$parent.fieldForm.inputNameX.$error" ng-show="$parent.fieldForm.inputNameX.$dirty || $parent.fieldForm.$submitted">\n' +
    '      <div ng-message="required">A {{field.props.name}} latitude is required.</div>\n' +
    '    </div>\n' +
    '  </md-input-container>\n' +
    '\n' +
    '  <md-input-container class="{{field.props.fieldCode}} appform-field-location md-block" flex>\n' +
    '    <input type="number"\n' +
    '      placeholder="Longitude"\n' +
    '      name="inputNameY"\n' +
    '      ng-model="ctrl.model.value.long"\n' +
    '      ng-required="ctrl.field.props.required"\n' +
    '    ></input>\n' +
    '    <div ng-messages="$parent.fieldForm.inputNameY.$error" ng-show="$parent.fieldForm.inputNameY.$dirty || $parent.fieldForm.$submitted">\n' +
    '      <div ng-message="required">A {{field.props.name}} longitude is required.</div>\n' +
    '    </div>\n' +
    '  </md-input-container>\n' +
    '</div>\n' +
    '');
}]);

},{}],4:[function(require,module,exports){
var ngModule;
try {
  ngModule = angular.module('wfm.appform.directives');
} catch (e) {
  ngModule = angular.module('wfm.appform.directives', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/appform-field-number.tpl.html',
    '<!--\n' +
    ' CONFIDENTIAL\n' +
    ' Copyright 2016 Red Hat, Inc. and/or its affiliates.\n' +
    ' This is unpublished proprietary source code of Red Hat.\n' +
    '-->\n' +
    '<md-input-container class="md-block" class="{{field.props.fieldCode}} appform-field-number">\n' +
    '  <label for="inputName" class="">{{field.props.name}}</label>\n' +
    '  <input type="number"\n' +
    '    placeholder="{{ctrl.field.props.helpText}}"\n' +
    '    name="inputName"\n' +
    '    ng-model="ctrl.model.value"\n' +
    '    min="{{field.props.fieldOptions.validation.min}}"\n' +
    '    max="{{field.props.fieldOptions.validation.max}}"\n' +
    '    ng-required="ctrl.field.props.required"\n' +
    '  ></input>\n' +
    '  <div ng-messages="$parent.fieldForm.inputName.$error" ng-show="$parent.fieldForm.inputName.$dirty || $parent.fieldForm.$submitted">\n' +
    '    <div ng-message="required">A {{field.props.name}} is required.</div>\n' +
    '    <div ng-message="number">You did not enter a valid number</div>\n' +
    '    <div ng-message="max" class="help-block">Value must be less than {{field.props.fieldOptions.validation.max}}.</div>\n' +
    '    <div ng-message="min" class="help-block">Value must be larger than {{field.props.fieldOptions.validation.min}}.</div>\n' +
    '  </div>\n' +
    '</md-input-container>\n' +
    '');
}]);

},{}],5:[function(require,module,exports){
var ngModule;
try {
  ngModule = angular.module('wfm.appform.directives');
} catch (e) {
  ngModule = angular.module('wfm.appform.directives', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/appform-field-photo.tpl.html',
    '<!--\n' +
    ' CONFIDENTIAL\n' +
    ' Copyright 2016 Red Hat, Inc. and/or its affiliates.\n' +
    ' This is unpublished proprietary source code of Red Hat.\n' +
    '-->\n' +
    '<div>\n' +
    '  <md-button type="button" ng-click="ctrl.capture($event)" class="md-raised md-primary">{{ctrl.model.value ? \'Replace\' : \'Take a\'}} photo</md-button>\n' +
    '  <br>\n' +
    '  <img class=\'appform-photo\' ng-if="field.value.localURI" ng-src="{{field.value.localURI}}" alt="photo"></img>\n' +
    '  <img class=\'appform-photo\' ng-if="ctrl.model.value" ng-src="{{ctrl.model.value}}" alt="photo"></img>\n' +
    '</div>\n' +
    '');
}]);

},{}],6:[function(require,module,exports){
var ngModule;
try {
  ngModule = angular.module('wfm.appform.directives');
} catch (e) {
  ngModule = angular.module('wfm.appform.directives', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/appform-field-time.tpl.html',
    '<!--\n' +
    ' CONFIDENTIAL\n' +
    ' Copyright 2016 Red Hat, Inc. and/or its affiliates.\n' +
    ' This is unpublished proprietary source code of Red Hat.\n' +
    '-->\n' +
    '\n' +
    '<md-input-container class="md-block" class="{{field.props.fieldCode}} appform-field-number">\n' +
    '  <label for="inputTime" class="">{{field.props.name}}</label>\n' +
    '  <input type="time"\n' +
    '    placeholder="{{ctrl.field.props.helpText}}"\n' +
    '    name="inputTime"\n' +
    '    ng-model="ctrl.model.time"\n' +
    '    ng-change="ctrl.updateModel()"\n' +
    '    ng-required="ctrl.field.props.required"\n' +
    '  ></input>\n' +
    '  <div ng-messages="$parent.fieldForm.inputName.$error" ng-show="$parent.fieldForm.inputName.$dirty || $parent.fieldForm.$submitted">\n' +
    '    <div ng-message="required">A {{field.props.name}} is required.</div>\n' +
    '    <div ng-message="number">You did not enter a valid time</div>\n' +
    '    <div ng-message="max" class="help-block">Value must be less than {{field.props.fieldOptions.validation.max}}.</div>\n' +
    '    <div ng-message="min" class="help-block">Value must be larger than {{field.props.fieldOptions.validation.min}}.</div>\n' +
    '  </div>\n' +
    '</md-input-container>\n' +
    '');
}]);

},{}],7:[function(require,module,exports){
var ngModule;
try {
  ngModule = angular.module('wfm.appform.directives');
} catch (e) {
  ngModule = angular.module('wfm.appform.directives', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/appform-field.tpl.html',
    '<!--\n' +
    ' CONFIDENTIAL\n' +
    ' Copyright 2016 Red Hat, Inc. and/or its affiliates.\n' +
    ' This is unpublished proprietary source code of Red Hat.\n' +
    '-->\n' +
    '<ng-form name="fieldForm" ng-submit="ctrl.submit()">\n' +
    '  <div ng-switch="ctrl.field.props.type">\n' +
    '\n' +
    '    <div ng-switch-when="number">\n' +
    '      <appform-field-number model="ctrl.model" field="ctrl.field"></appform-field-number>\n' +
    '    </div>\n' +
    '\n' +
    '    <div ng-switch-when="dateTime" ng-switch="ctrl.field.props.fieldOptions.definition.datetimeUnit">\n' +
    '      <div ng-switch-when="date">\n' +
    '        <appform-field-date model="ctrl.model" field="ctrl.field"></appform-field-date>\n' +
    '      </div>\n' +
    '       <div ng-switch-when="datetime">\n' +
    '         <appform-field-datetime model="ctrl.model" field="ctrl.field"></appform-field-datetime>\n' +
    '       </div>\n' +
    '       <div ng-switch-when="time">\n' +
    '         <appform-field-time model="ctrl.model" field="ctrl.field"></appform-field-time>\n' +
    '       </div>\n' +
    '       <div ng-switch-default>\n' +
    '         {{ctrl.field.props.fieldOptions.definition.datetimeUnit}}\n' +
    '       </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div ng-switch-when="location">\n' +
    '      <appform-field-location model="ctrl.model" field="ctrl.field"></appform-field-location>\n' +
    '    </div>\n' +
    '\n' +
    '    <div ng-switch-when="signature" flex class="appform-signature">\n' +
    '      <md-input-container class="md-block">\n' +
    '        <p class="md-caption">{{ctrl.field.props.name}}</p>\n' +
    '        <signature-form value="ctrl.model.value"></signature-form>\n' +
    '      </md-input-container>\n' +
    '    </div>\n' +
    '\n' +
    '    <div ng-switch-when="photo" flex class="appform-photo">\n' +
    '      <appform-field-photo model="ctrl.model" field="ctrl.field"></appform-field-photo>\n' +
    '    </div>\n' +
    '\n' +
    '    <div ng-switch-default flex>\n' +
    '      <md-input-container class="md-block">\n' +
    '        <label>{{ctrl.field.props.type}}</label>\n' +
    '        <input\n' +
    '          type="text"\n' +
    '          name="inputName"\n' +
    '          ng-model="ctrl.model.value"\n' +
    '          ng-required="ctrl.field.props.required"\n' +
    '          ng-class="ctrl.field.props.type"\n' +
    '        ></input>\n' +
    '        <div ng-messages="fieldForm.inputName.$error" ng-show="fieldForm.inputName.$dirty || fieldForm.$submitted">\n' +
    '          <div ng-message="required" ng-show="ctrl.field.props.helpText">{{ctrl.field.props.helpText}}</div>\n' +
    '          <div ng-message="required" ng-hide="ctrl.field.props.helpText">A {{ctrl.field.props.name}} is required.</div>\n' +
    '        </div>\n' +
    '      </md-input-container>\n' +
    '    </div>\n' +
    '\n' +
    '  </div>\n' +
    '</ng-form>\n' +
    '');
}]);

},{}],8:[function(require,module,exports){
var ngModule;
try {
  ngModule = angular.module('wfm.appform.directives');
} catch (e) {
  ngModule = angular.module('wfm.appform.directives', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/appform-submission.tpl.html',
    '<!--\n' +
    ' CONFIDENTIAL\n' +
    ' Copyright 2016 Red Hat, Inc. and/or its affiliates.\n' +
    ' This is unpublished proprietary source code of Red Hat.\n' +
    '-->\n' +
    '\n' +
    '<md-subheader>{{ctrl.form.props.name}}</md-subheader>\n' +
    '\n' +
    '<md-list class="appform-view">\n' +
    '\n' +
    '  <md-list-item ng-if="! ctrl.fields" class="loading">\n' +
    '    Loading appForm submission...\n' +
    '  </md-list-item>\n' +
    '\n' +
    '  <div ng-repeat="field in ctrl.fields">\n' +
    '    <ng-switch on="field.props.type">\n' +
    '      <div ng-switch-when="signature">\n' +
    '        <md-list-item class="md-2-line with-image">\n' +
    '          <md-icon md-font-set="material-icons">gesture</md-icon>\n' +
    '          <div class="md-list-item-text">\n' +
    '            <h3>\n' +
    '              <signature ng-if="field.value.localURI" value="field.value.localURI" alt="Signature"></signature>\n' +
    '              <signature ng-if="!field.value.localURI" value="field.value.imgHeader + field.value.data" alt="Signature"></signature>\n' +
    '            </h3>\n' +
    '            <p>{{field.props.name}}</p>\n' +
    '          </div>\n' +
    '          <md-divider></md-divider>\n' +
    '        </md-list-item>\n' +
    '      </div>\n' +
    '\n' +
    '      <div ng-switch-when="location">\n' +
    '        <md-list-item class="md-3-line">\n' +
    '          <md-icon md-font-set="material-icons">place</md-icon>\n' +
    '          <div class="md-list-item-text">\n' +
    '            <h3>{{field.value.lat}}N, {{field.value.long}}W</h3>\n' +
    '            <p>{{field.props.name}}</p>\n' +
    '          </div>\n' +
    '        </md-list-item>\n' +
    '      </div>\n' +
    '\n' +
    '      <div ng-switch-when="number">\n' +
    '        <md-list-item class="md-2-line">\n' +
    '          <md-icon md-font-set="material-icons">filter_4</md-icon>\n' +
    '          <div class="md-list-item-text">\n' +
    '            <h3>{{field.value}}</h3>\n' +
    '            <p>{{field.props.name}}</p>\n' +
    '          </div>\n' +
    '          <md-divider></md-divider>\n' +
    '        </md-list-item>\n' +
    '      </div>\n' +
    '\n' +
    '      <div ng-switch-when="photo">\n' +
    '        <md-list-item class="md-2-line with-image">\n' +
    '          <md-icon md-font-set="material-icons">camera</md-icon>\n' +
    '          <div class="md-list-item-text">\n' +
    '            <h3>\n' +
    '              <img ng-if="field.value.localURI" ng-src="{{field.value.localURI}}" alt="photo"></img>\n' +
    '              <img ng-if="!field.value.localURI" ng-src="{{field.value.imgHeader + field.value.data}}" alt="photo"></img>\n' +
    '            </h3>\n' +
    '          </div>\n' +
    '          <md-divider></md-divider>\n' +
    '        </md-list-item>\n' +
    '      </div>\n' +
    '\n' +
    '      <div ng-switch-default>\n' +
    '        <md-list-item class="md-2-line">\n' +
    '          <md-icon md-font-set="material-icons">text_format</md-icon>\n' +
    '          <div class="md-list-item-text">\n' +
    '            <h3>{{field.value}}</h3>\n' +
    '            <p>{{field.props.name}}</p>\n' +
    '          </div>\n' +
    '          <md-divider></md-divider>\n' +
    '        </md-list-item>\n' +
    '      </div>\n' +
    '    </ng-switch>\n' +
    '  </div>\n' +
    '</md-list>\n' +
    '');
}]);

},{}],9:[function(require,module,exports){
var ngModule;
try {
  ngModule = angular.module('wfm.appform.directives');
} catch (e) {
  ngModule = angular.module('wfm.appform.directives', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/appform.tpl.html',
    '<!--\n' +
    ' CONFIDENTIAL\n' +
    ' Copyright 2016 Red Hat, Inc. and/or its affiliates.\n' +
    ' This is unpublished proprietary source code of Red Hat.\n' +
    '-->\n' +
    '<div class="app-form" layout-padding >\n' +
    '\n' +
    '<form name="workorderForm" novalidate>\n' +
    '  <div ng-repeat="field in ctrl.fields">\n' +
    '    <appform-field field="field" model="ctrl.model[field.props.fieldCode || field.props._id]"></appform-field>\n' +
    '  </div>\n' +
    '\n' +
    '  <div class="workflow-actions md-padding md-whiteframe-z4">\n' +
    '    <md-button class="md-primary md-hue-1" ng-click="ctrl.back($event)">Back</md-button>\n' +
    '    <md-button type="button" ng-click="ctrl.done($event, workorderForm.$valid)" class="md-primary">Continue</md-button>\n' +
    '  </div><!-- workflow-actions-->\n' +
    '\n' +
    '</form>\n' +
    '\n' +
    '</div><!-- app-form -->\n' +
    '');
}]);

},{}],10:[function(require,module,exports){
require('./appform-field-date.tpl.html.js');
require('./appform-field-datetime.tpl.html.js');
require('./appform-field-location.tpl.html.js');
require('./appform-field-number.tpl.html.js');
require('./appform-field-photo.tpl.html.js');
require('./appform-field-time.tpl.html.js');
require('./appform-field.tpl.html.js');
require('./appform-submission.tpl.html.js');
require('./appform.tpl.html.js');

},{"./appform-field-date.tpl.html.js":1,"./appform-field-datetime.tpl.html.js":2,"./appform-field-location.tpl.html.js":3,"./appform-field-number.tpl.html.js":4,"./appform-field-photo.tpl.html.js":5,"./appform-field-time.tpl.html.js":6,"./appform-field.tpl.html.js":7,"./appform-submission.tpl.html.js":8,"./appform.tpl.html.js":9}],11:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

module.exports = 'wfm.appform';

angular.module('wfm.appform', [
  'wfm.core.mediator'
, require('./directive')
])

.run(function(mediator) {
  require('../appform-mediator')(mediator);
});

},{"../appform-mediator":14,"./directive":12}],12:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

var ngModule = angular.module('wfm.appform.directives', [
  'wfm.core.mediator',
  require('./service'),
  require('fh-wfm-signature')
]);
module.exports = 'wfm.appform.directives';

var _ = require('lodash');
require('../../dist');

ngModule.run(function(appformClient) {
  appformClient.init();
})

ngModule.directive('appformSubmission', function($templateCache, $q, appformClient) {
  return {
    restrict: 'E'
  , template: $templateCache.get('wfm-template/appform-submission.tpl.html')
  , scope: {
      submissionLocalId: '=submissionLocalId'
    , submissionId: '=submissionId'
    , submission: '=submission'
    }
  , controller: function($scope) {
      var self = this;
      var submissionPromise;
      if ($scope.submission) {
        submissionPromise = $q.when($scope.submission);
      } else if ($scope.submissionId) {
        submissionPromise = appformClient.getSubmission($scope.submissionId);
      } else if ($scope.submissionLocalId) {
        submissionPromise = appformClient.getSubmissionLocal($scope.submissionLocalId);
      } else {
        console.error('appformSubmission called with no submission');
      }
      submissionPromise.then(function(submission) {
        var formPromise = submission.form ? $q.when(submission.form) : appformClient.getForm(submission.props.formId);
        return formPromise.then(function(form) {
          self.form = form;
        })
        .then(function() {
          return appformClient.getFields(submission);
        })
      })
      .then(function(fields) {
        self.fields = fields;
      }, function(error) {
        console.error(error);
      });
    }
  , controllerAs: 'ctrl'
  };
});

ngModule.directive('appform', function($templateCache, $q, mediator, appformClient) {
  return {
    restrict: 'E'
  , template: $templateCache.get('wfm-template/appform.tpl.html')
  , scope: {
      form: '=',
      formId: '='
    }
  , controller: function($scope, $element) {
    var self = this;
    var form;
    var formPromise = $scope.form ? $q.when($scope.form) : appformClient.getForm($scope.formId);
    formPromise.then(function(_form) {
      form = _form;
      self.fields = form.fields;
      self.model = {};
      _.forEach(self.fields, function(field) {
        self.model[field.props.fieldCode || field.props._id] = {};
      });
    })
    self.back = function(event) {
      event.preventDefault();
      event.stopPropagation();
      mediator.publish('wfm:workflow:step:back');
    }
    self.done = function(event, isValid) {
      event.stopPropagation();
      event.stopPropagation();
      $scope.$broadcast('parentFormSubmitted');
      if (!isValid) {
        console.log('invalid', event)
        var firstInvalid = $element[0].querySelector('input.ng-invalid');
        // if we find one, set focus
        if (firstInvalid) {
          firstInvalid.focus();
        }
      } else {
        var submissionFields = [];
        _.forEach(self.fields, function(field) {
          var value = self.model[field.props.fieldCode || field.props._id].value;
          submissionFields.push({
            fieldId: field.props._id,
            value: value
          });
        })
        appformClient.createSubmission(form, submissionFields)
        .then(appformClient.submitSubmission)
        .then(appformClient.composeSubmissionResult)
        .then(function(submissionResult) {
          mediator.publish('wfm:workflow:step:done', submissionResult);
        }, function(error) {
          console.error('submissionFields', submissionFields);
          throw new Error(error);
        });
      };
    }
  }
  , controllerAs: 'ctrl'
  };
});

ngModule.directive('appformField', function($templateCache, $timeout, mediator) {
  return {
    restrict: 'E'
  , template: $templateCache.get('wfm-template/appform-field.tpl.html')
  , scope: {
      field: '=',
      model: '='
    }
  , link: function (scope, element, attrs, ctrl) {
      var parentForm = element.parent();
      while (parentForm && parentForm.prop('tagName') !== 'FORM') {
        parentForm = parentForm.parent();
      };
      if (parentForm) {
        var formController = element.find('ng-form').controller('form');
        scope.$on('parentFormSubmitted',function(event) {
          ctrl.submit(element);
          formController.$setSubmitted();
        });
      };
    }
  , controller: function($scope) {
    var self = this;
    self.field = $scope.field;
    self.model = {};
    if ($scope.model && $scope.model.value) {
      self.model = angular.copy($scope.model);
    } else if (self.field.props.fieldOptions.definition && self.field.props.fieldOptions.definition.defaultValue) {
      self.model.value = self.field.props.fieldOptions.definition.defaultValue;
    };
    self.submit = function(element) {

      if (self.field.props.type === 'location') {
        var inputs = element[0].getElementsByTagName('input');
        self.model.value = {
          lat: inputs[0].value,
          long: inputs[1].value
        }
      }
      $scope.model.value = self.model.value;
    }
  }
  , controllerAs: 'ctrl'
  };
});

ngModule.directive('appformFieldLocation', function($templateCache, $timeout, mediator) {
  return {
    restrict: 'E'
  , template: $templateCache.get('wfm-template/appform-field-location.tpl.html')
  , scope: {
      field: '='
    , model: '='
    }
  , controller: function($scope) {
    var self = this;
    self.field = $scope.field;
    self.model = $scope.model ? angular.copy($scope.model) : {};
    self.model.value = self.model.value || {};
    self.isValid = function(form, element) {
      console.log('form', form);
      console.log('element', element);
    }
    self.setLocation = function(event) {
      event.stopPropagation();
      event.stopPropagation();
      navigator.geolocation.getCurrentPosition(function(pos) {
        $scope.$apply(function() {
          self.model.value.lat = parseFloat(pos.coords.latitude);
          self.model.value.long = parseFloat(pos.coords.longitude);
          console.log('position set', self.model.value)
        });
      }, function(err) {
        alert('Unable to get current position');
        self.model.value.lat = -1;
        self.model.value.long = -1;
      });
    }
  }
  , controllerAs: 'ctrl'
  };
});

ngModule.directive('appformFieldPhoto', function($templateCache, $window, mediator, mobileCamera, desktopCamera) {
  return {
    restrict: 'E'
  , template: $templateCache.get('wfm-template/appform-field-photo.tpl.html')
  , scope: {
      field: '='
    , model: '='
    }
  , controller: function($scope) {
    var self = this;
    self.field = $scope.field;
    self.model = $scope.model; // ? angular.copy($scope.model) : {};
    self.isValid = function(form, element) {
      console.log('form', form);
      console.log('element', element);
    }
    self.capture = function(event) {
      event.stopPropagation();
      event.stopPropagation();
      if ($window.cordova) {
        mobileCamera.capture()
        .then(function(capture) {
          self.model.value = capture;
        })
      } else {
        desktopCamera.capture()
        .then(function(dataUrl) {
          self.model.value = dataUrl;
        });
      }
    }
  }
  , controllerAs: 'ctrl'
  };
});

ngModule.directive('appformFieldNumber', function($templateCache, $window, $document, $timeout, mediator) {
 return {
   restrict: 'E'
 , template: $templateCache.get('wfm-template/appform-field-number.tpl.html')
 , scope: {
   field: '=',
   model: '=',
 }
 , controller: function($scope) {
   var self = this;
   self.field = $scope.field;
   self.model = $scope.model;
   if (self.field.props.fieldOptions.definition && self.field.props.fieldOptions.definition.defaultValue) {
     self.model.value = parseFloat(self.field.props.fieldOptions.definition.defaultValue);
   };
 }
 , controllerAs: 'ctrl'
 };
});

function getDate(d){
  return 'YYYY-MM-DD'.replace('YYYY', d.getFullYear()).replace('MM', twoDigi(d.getMonth()+1)).replace('DD', twoDigi(d.getDate()));
};

function getTime(d){
  return 'HH:mm'.replace('HH', twoDigi(d.getHours())).replace('mm', twoDigi(d.getMinutes()));
};

function twoDigi(num){
  if (num < 10){
    return '0' + num.toString();
  } else {
    return num.toString();
  }
}

ngModule.directive('appformFieldDatetime', function($templateCache, $window, $document, $timeout, mediator) {
 return {
   restrict: 'E'
 , template: $templateCache.get('wfm-template/appform-field-datetime.tpl.html')
 , scope: {
   field: '=',
   model: '=',
 }
 , controller: function($scope) {
   var self = this;
   self.field = $scope.field;
   self.model = $scope.model;
   if (self.field.props.fieldOptions.definition && self.field.props.fieldOptions.definition.defaultValue) {
     self.model.value = new Date(self.field.props.fieldOptions.definition.defaultValue);
   };
   self.updateModel = function() {
     var date = new Date(self.model.date);
     var time = new Date(self.model.time);
     $scope.model.value = getDate(date) + ' ' + getTime(time);
   }
 }
 , controllerAs: 'ctrl'
 };
});

ngModule.directive('appformFieldDate', function($templateCache, $window, $document, $timeout, mediator) {
 return {
   restrict: 'E'
 , template: $templateCache.get('wfm-template/appform-field-date.tpl.html')
 , scope: {
   field: '=',
   model: '=',
 }
 , controller: function($scope) {
   var self = this;
   self.field = $scope.field;
   self.model = $scope.model;
   if (self.field.props.fieldOptions.definition && self.field.props.fieldOptions.definition.defaultValue) {
     self.model.value = new Date(self.field.props.fieldOptions.definition.defaultValue);
   };
   self.updateModel = function() {
     var date = new Date(self.model.date);
     $scope.model.value = getDate(date);
   }
 }
 , controllerAs: 'ctrl'
 };
});

ngModule.directive('appformFieldTime', function($templateCache, $window, $document, $timeout, mediator) {
 return {
   restrict: 'E'
 , template: $templateCache.get('wfm-template/appform-field-time.tpl.html')
 , scope: {
   field: '=',
   model: '=',
 }
 , controller: function($scope) {
   var self = this;
   self.field = $scope.field;
   self.model = $scope.model;
   if (self.field.props.fieldOptions.definition && self.field.props.fieldOptions.definition.defaultValue) {
     self.model.value = new Date(self.field.props.fieldOptions.definition.defaultValue);
   };
   self.updateModel = function() {
     var time = new Date(self.model.time);
     $scope.model.value = getTime(time);
   }
 }
 , controllerAs: 'ctrl'
 };
});

},{"../../dist":10,"./service":13,"fh-wfm-signature":51,"lodash":"lodash"}],13:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

var client = require('../appform')

module.exports = 'wfm.appform.service';

angular.module('wfm.appform.service', [])

.service('appformClient', function($q) {
  var service = {};

  var methods = [
    'init',
    'list',
    'getForm',
    'getSubmissionLocal',
    'getSubmission',
    'getSubmissions',
    'getFields',
    'createSubmission',
    'submitSubmission',
    'uploadSubmission',
    'composeSubmissionResult',
    'syncStepResult',
    'watchSubmissionModel'
  ];

  methods.forEach(function(method) {
    service[method] = function() {
      return $q.when(client[method].apply(client, arguments));
    };
  });

  return service;
});

},{"../appform":15}],14:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

var client = require('./appform')

function wrapper(mediator) {
  var initPromise = client.init();
  mediator.subscribe('wfm:appform:init', function() {
    initPromise
    .then(function() {
      mediator.publish('done:wfm:appform:init');
    }, function(error) {
      mediator.publish('error:appform:init', error);
    });
  });

  mediator.subscribe('init', function() {
    mediator.publish('promise:init', initPromise);
  });

  mediator.subscribe('wfm:appform:form:list', function() {
    client.list()
    .then(function(forms) {
      mediator.publish('done:wfm:appform:form:list', forms);
    }, function(error) {
      mediator.publish('error:appform:form:list', error);
    });
  });

  mediator.subscribe('wfm:appform:form:read', function(formId) {
    client.getForm(formId)
    .then(function(form) {
      mediator.publish('done:wfm:appform:form:read:' + formId, form);
    }, function(error) {
      mediator.publish('error:appform:form:read:' + formId, error);
    });
  });

  mediator.subscribe('wfm:appform:submission:local:read', function(submissionLocalId) {
    client.getSubmissionLocal(submissionLocalId)
    .then(function(submission) {
      mediator.publish('done:wfm:appform:submission:local:read:'+submissionLocalId, submission);
    }, function(error) {
      mediator.publish('error:appform:submission:local:read:'+submissionLocalId, error);
    });
  });

  mediator.subscribe('wfm:appform:submission:remote:read', function(submissionId) {
    client.getSubmission(submissionId)
    .then(function(submission) {
      mediator.publish('done:wfm:appform:submission:remote:read:'+submissionId, submission);
    }, function(error) {
      mediator.publish('error:appform:submission:remote:read:'+submissionId, error);
    });
  });

  mediator.subscribe('wfm:appform:submission:list:remote:read', function(submissionIds, id) {
    client.getSubmissions(submissionIds)
    .then(function(submissions) {
      mediator.publish('done:wfm:appform:submission:list:remote:read:'+id, submissions);
    }, function(error) {
      mediator.publish('error:appform:submission:list:remote:read:'+id, error);
    });
  });

  mediator.subscribe('wfm:appform:submission:field:list', function(submission) {
    client.getFields(submission)
    .then(function(fields) {
      mediator.publish('done:wfm:appform:submission:field:list:'+submission.getLocalId(), fields);
    }, function(error) {
      mediator.publish('error:appform:submission:field:list:'+submission.getLocalId(), error);
    });
  });

  mediator.subscribe('wfm:appform:submission:create', function(form, submissionFields, ts) {
    client.createSubmission(form, submissionFields)
    .then(function(submission) {
      mediator.publish('done:wfm:appform:submission:create:' + ts, submission);
    }, function(error) {
      mediator.publish('error:appform:submission:create:' + ts, error);
    });
  });

  mediator.subscribe('wfm:appform:submission:submit', function(submission) {
    client.submitSubmission(submission)
    .then(function(submission) {
      mediator.publish('done:wfm:appform:submission:submit:' + submission.getLocalId(), submission);
    }, function(error) {
      mediator.publish('error:appform:submission:submit:' + submission.getLocalId(), error);
    });
  });

  mediator.subscribe('wfm:appform:submission:upload', function(submission) {
    client.uploadSubmission(submission)
    .then(function(submissionId) {
      mediator.publish('done:wfm:appform:submission:upload:' + submission.props._ludid, submissionId);
    }, function(error) {
      mediator.publish('error:appform:submission:upload:' + submission.props._ludid, error);
    });
  });

  client.addSubmissionCompleteListener(function(submissionResult, metaData) {
    if (metaData) {
      var event = {
        submissionResult: submissionResult,
        metaData: metaData
      }
      console.log('metaData', metaData);
      mediator.publish('wfm:appform:submission:complete', event)
    }
  })
};

module.exports = wrapper;

},{"./appform":15}],15:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

var q = require('q');
var _ = require('lodash');

var client = {};
var initPromise;

client.init = function() {
  if (initPromise) {
    return initPromise;
  }
  var deferred = q.defer();
  var self = this;
  self.listeners = [];
  initPromise = deferred.promise;
  $fh.on('fhinit', function(error, host) {
    if (error) {
      deferred.reject(new Error(error));
      return;
    }
    $fh.forms.init(function(error) {
      if (error) {
        deferred.reject(new Error(error));
      } else {
        console.log('Forms initialized.');
        deferred.resolve();
      }
    });
  });
  $fh.forms.on("submission:submitted", function(submissionId) {
    var submission = this;
    var metaData = submission.get('metaData');
    if (self.listeners.length) {
      self.composeSubmissionResult(submission).then(function(submissionResult) {
        self.listeners.forEach(function(listener) {
          listener(submissionResult, metaData);
        });
      });
    }
  });
  return initPromise;
};

client.addSubmissionCompleteListener = function(listener) {
  this.listeners.push(listener);
};

client.list = function() {
  var deferred = q.defer();
  initPromise.then(function() {
    $fh.forms.getForms(function(error, formsModel) {
      if (error) {
        deferred.reject(new Error(error));
        return;
      }
      var forms = formsModel.props.forms;
      deferred.resolve(forms);
    });
  });
  return deferred.promise;
};

client.getForm = function(formId) {
  var deferred = q.defer();
  initPromise.then(function() {
    $fh.forms.getForm({formId: formId}, function (error, form) {
      if (error) {
        deferred.reject(new Error(error));
        return;
      }
      deferred.resolve(form);
    });
  });
  return deferred.promise;
}

client.getSubmissionLocal = function(submissionLocalId) {
  var deferred = q.defer();
  initPromise.then(function() {
    $fh.forms.getSubmissions(function(error, submissions) {
      if (error) {
        deferred.reject(new Error(error));
        return;
      }
      submissions.getSubmissionByMeta({_ludid: submissionLocalId}, function(error, submission) {
        if (error) {
          deferred.reject(new Error(error));
          return;
        }
        deferred.resolve(submission);
      });
    });
  });
  return deferred.promise;
}

client.getSubmission = function(submissionId) {
  var deferred = q.defer();
  initPromise.then(function() {
    $fh.forms.downloadSubmission({submissionId: submissionId}, function(error, submission) {
      if (error) {
        deferred.reject(new Error(error));
        return;
      }
      deferred.resolve(submission);
    });
  });
  return deferred.promise;
}

client.getSubmissions = function(submissionIds) {
  var self = this;
  var promises = submissionIds.map(function(submissionId) {
    return initPromise.then(function() {
      self.getSubmission(submissionId);
    });
  });
  return q.allSettled(promises);
}

client.getFields = function(submission) {
  var deferred = q.defer();
  initPromise.then(function() {
    submission.getForm(function(error, form) {
      if (error) {
        deferred.reject(new Error(error));
        return;
      }
      var fields = form.fields;
      var qs = [];
      _.forOwn(fields, function(field, key) {
        var _deferred = q.defer();
        qs.push(_deferred.promise);
        submission.getInputValueByFieldId(field.getFieldId(), function(error, fieldValues) {
          if (error) {
            _deferred.reject(new Error(error));
            return;
          }
          field.value = fieldValues[0];
          _deferred.resolve(fieldValues);
        });
      });
      q.all(qs).then(function() {
        deferred.resolve(fields);
      }, function(error) {
        deferred.reject(new Error(error));
      });
    });
  });
  return deferred.promise;
}

/**
* The fields parameter is an array of {fieldId: <...>, value: <...>} objects
*/
client.createSubmission = function(form, submissionFields) {
  var deferred = q.defer();
  initPromise.then(function() {
    var submission = form.newSubmission();
    var ds = [];
    _.forEach(submissionFields, function(field) {
      var d = q.defer();
      ds.push(d.promise);
      submission.addInputValue(field, function(error, result) {
        if (error) {
          d.reject(error);
        } else {
          d.resolve(result);
        }
      });
    });
    q.all(ds)
    .then(function() {
      deferred.resolve(submission);
    }, function(error) {
      deferred.reject(new Error(error));
    });
  });
  return deferred.promise;
};

client.submitSubmission = function(submission) {
  var deferred = q.defer();
  initPromise.then(function() {
    submission.submit(function(error, submitResponse) {
      if (error) {
        deferred.reject(new Error(error));
        return;
      };
      deferred.resolve(submission);
    });
  });
  return deferred.promise;
};

client.uploadSubmission = function(submission) {
  var deferred = q.defer();
  initPromise.then(function() {
    submission.upload(function(error, uploadTask) {
      if (error) {
        deferred.reject(new Error(error));
        return;
      };
      uploadTask.submissionModel(function(error, submissionModel) {
        if (error) {
          deferred.reject(new Error(error));
          return;
        };
        deferred.resolve(submissionModel);
      })
    });
  });
  return deferred.promise;
};

client.composeSubmissionResult = function(submission) {
  var submissionResult = {
      submissionLocalId: submission.props._ludid
    , formId: submission.props.formId
    , status: submission.props.status
  };
  if (submission.props._id) {
    submissionResult.submissionId = submission.props._id;
  }
  return q.when(submissionResult);
};

client.syncStepResult = function(workorder, stepResult) {
  // kick-off an appform upload, update the workorder when complete
  var self = this;

  return initPromise
    .then(function() {
      return self.getSubmissionLocal(stepResult.submission.submissionLocalId);
    })
    .then(function(submission) {
      submission.set('metaData', {
        wfm: {
          workorderId: workorder.id,
          step: stepResult.step,
          timestamp: stepResult.timestamp
        }
      });
      return submission;
    })
    .then(self.uploadSubmission)
    .then(function(submissionModel) {
      self.watchSubmissionModel(submissionModel); // need this to trigget the global event
      return submissionModel;
    });
};

client.watchSubmissionModel = function(submissionModel) {
  var deferred = q.defer();
  submissionModel.on('submitted', function(submissionId) {
    $fh.forms.downloadSubmission({submissionId: submissionId}, function(error, remoteSubmission) {
      if (error) {
        deferred.reject(error);
        return;
      };
      deferred.resolve(remoteSubmission);
    });
  });
  //  TODO: Do we need a timeout here to cleanup submissionModel listeners?
  return deferred.promise;
};

module.exports = client;

},{"lodash":"lodash","q":"q"}],16:[function(require,module,exports){
var ngModule;
try {
  ngModule = angular.module('wfm.camera.directives');
} catch (e) {
  ngModule = angular.module('wfm.camera.directives', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/camera.tpl.html',
    '<!--\n' +
    ' CONFIDENTIAL\n' +
    ' Copyright 2016 Red Hat, Inc. and/or its affiliates.\n' +
    ' This is unpublished proprietary source code of Red Hat.\n' +
    '-->\n' +
    '<div class="wfm-camera" flex>\n' +
    '  <md-button class="md-icon-button" aria-label="Back" ng-click="ctrl.cancel()" flex>\n' +
    '    <md-icon md-font-set="material-icons">arrow_back</md-icon>\n' +
    '  </md-button>\n' +
    '  <video  ng-show="ctrl.cameraOn" autoplay></video>\n' +
    '  <canvas ng-hide="ctrl.cameraOn"></canvas>\n' +
    '  <div class="wfm-camera-actions" style="z-index: 1000">\n' +
    '    <md-button ng-show="ctrl.cameraOn" class="wfm-camera-btn" ng-click="ctrl.snap()"></md-button>\n' +
    '    <md-button ng-hide="ctrl.cameraOn" class="wfm-camera-confirmation-btn md-warn" ng-click="ctrl.startCamera()">\n' +
    '      <md-icon md-font-set="material-icons">close</md-icon>\n' +
    '    </md-button>\n' +
    '    <md-button ng-hide="ctrl.cameraOn" class="wfm-camera-confirmation-btn" ng-click="ctrl.done()">\n' +
    '      <md-icon md-font-set="material-icons">check</md-icon>\n' +
    '    </md-button>\n' +
    '  </div>\n' +
    '</div>\n' +
    '');
}]);

},{}],17:[function(require,module,exports){
require('./camera.tpl.html.js');

},{"./camera.tpl.html.js":16}],18:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

module.exports = 'wfm.camera';

angular.module('wfm.camera', [
  require('./directive')
, require('./service')
]);

},{"./directive":19,"./service":20}],19:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

var ngModule = angular.module('wfm.camera.directives', ['wfm.core.mediator']);
module.exports = 'wfm.camera.directives';

require('../../dist');

ngModule.directive('camera', function($templateCache, mediator, $window, $timeout) {
  return {
    restrict: 'E',
    template: $templateCache.get('wfm-template/camera.tpl.html'),
    scope: {
      model: '=',
      autostart: '='
    },
    compile: function (element) {
      element.attr('flex', true);
    },
    controller: function($scope, $element) {
      var self = this,
          element = $element[0],
          canvas = element.getElementsByTagName('canvas')[0],
          context = canvas.getContext('2d'),
          video = element.getElementsByTagName('video')[0],
          stream, width, height, zoom;

      $timeout(function() {
        height = element.offsetHeight;
        width = element.offsetWidth;
        video.height = height;
        canvas.height = height;
        canvas.width = width;

        self.cameraOn = false;
        if ($scope.autostart) {
          self.startCamera();
        }
      })

      context.scale(-1, 1);

      self.snap = function() {
        var sx = (video.clientWidth - width ) / 2;
        context.drawImage(video, sx/zoom, 0, width/zoom, height/zoom, 0, 0, width, height);
        self.stopCamera();
      };

      self.startCamera = function() {
        // TODO: https://www.npmjs.com/package/getusermedia-js
        var getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia
        getUserMedia.call(navigator, { 'video': true }, function(_stream) {
          stream = _stream;
          video.src = $window.URL.createObjectURL(stream);
          video.play();
          $scope.$apply(function() {
            $scope.model = null;
            self.cameraOn = true;
            var videoWidth;
            video.onloadstart = function() {
              videoWidth = video.clientWidth;
            }
            video.oncanplay = function() {
              zoom = videoWidth / video.clientWidth;
              video.style.left = -(video.clientWidth - width ) / 2 + 'px';
            };
          });
        }, function(error) {
          console.error('Video capture error: ', error.code);
        });
      }

      self.stopCamera = function() {
        stream.getVideoTracks()[0].stop();
        self.cameraOn = false;
      }

      self.cancel = function() {
        self.stopCamera();
        mediator.publish('wfm:camera:cancel');
      }

      self.done = function() {
        $scope.model = canvas.toDataURL();
      }

      $scope.$on('$destroy', function() {
        self.stopCamera();
      });
    },
    controllerAs: 'ctrl'
  };
})

},{"../../dist":17}],20:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

var camera = require('../camera');

module.exports = 'wfm.camera.service';

angular.module('wfm.camera.service', ['wfm.core.mediator'])

.factory('mobileCamera', function($q, $window, mediator) {
  return camera;
})

.factory('desktopCamera', function($mdDialog, mediator) {
  var camera = {};
  camera.capture = function(ev) {
    return $mdDialog.show({
      controller: function CameraCtrl($scope, mediator) {
        var self = this;
        $scope.data = null;

        $scope.$watch('data', function() {
          if (! _.isEmpty($scope.data) ) {
            $mdDialog.hide($scope.data);
          }
        })

        mediator.subscribeForScope('wfm:camera:cancel', $scope, function() {
          $mdDialog.cancel('Photo capture cancelled.');
        });
      },
      template: '<camera model="data" autostart="true"></camera>',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: false,
      fullscreen: true
    });
  };

  return camera;
})
;

},{"../camera":21}],21:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

var q = require('q');

function Camera() {
  this.init();
};

Camera.prototype.init = function() {
  var self = this;
  var deferred = q.defer();
  if (window.cordova) {
    document.addEventListener("deviceready", function cameraReady() {
      deferred.resolve();
    }, false);
  } else {
    deferred.resolve();
  };

  self.initPromise = deferred.promise;
  return self.initPromise;
};

Camera.prototype.clearCache = function() {
  window.navigator.camera.cleanup();
};

Camera.prototype.capture = function () {
  var self = this;
  var deferred = q.defer();
  self.initPromise.then(function() {
    window.navigator.camera.getPicture(function captureSuccess(fileURI) {
      var fileName = fileURI.substr(fileURI.lastIndexOf('/') + 1);
      deferred.resolve({
        fileName: fileName,
        fileURI: fileURI
      });
    }, function captureFailure(error) {
      deferred.reject(error);
    }, {
      quality: 100,
      destinationType: window.navigator.camera.DestinationType.FILE_URI,
      encodingType: window.Camera.EncodingType.JPEG,
      correctOrientation: true
    });
  });
  return deferred.promise;
};

var camera = new Camera();
module.exports = camera;

},{"q":"q"}],22:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

var config = require('../config');

module.exports = 'wfm.file.directives';

angular.module('wfm.file.directives', [])

.directive('wfmImg', function($q) {
  function init() {
    var self = this;
    var deferred = $q.defer();
    $fh.on('fhinit', function(error, host) {
      if (error) {
        deferred.reject(new Error(error));
        return;
      }
      var cloudUrl = $fh.getCloudURL();
      deferred.resolve(cloudUrl);
    });

    return deferred.promise;
  };

  var initPromise = init();

  return {
    restrict: 'A',
    scope: {
      uid: '='
    },
    link: function(scope, element, attrs) {
      scope.$watch('uid', function(uid) {
        initPromise.then(function(cloudUrl) {
          element[0].src = cloudUrl + config.apiPath + '/get/' + uid;
          console.log(element[0].src);
        });
      });
    }
  }
})
;

},{"../config":24}],23:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

var client = require('../file'),
    config = require('../config'),
    _ = require('lodash');

module.exports = 'wfm.file.service';

angular.module('wfm.file.service', [
  require('./directive')
])

.factory('fileClient', function($q) {
  var fileClient = {};

  _.forOwn(client, function(value, key) {
    if (typeof value  === 'function') {
      fileClient[key] = function() {
        return $q.when(client[key].apply(client, arguments));
      }
    } else {
      fileClient[key] = value;
    }
  });

  return fileClient;
})
;

},{"../config":24,"../file":25,"./directive":22,"lodash":"lodash"}],24:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

module.exports = {
  apiHost: 'http://localhost:8080'
, apiPath: '/file/wfm'
}

},{}],25:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

var config = require('./config'),
    q = require('q');

var client = {};

client.init = function() {
  var deferredFhinit = q.defer();
  $fh.on('fhinit', function(error, host) {
    if (error) {
      deferredFhinit.reject(new Error(error));
      return;
    }
    client.cloudUrl = $fh.getCloudURL();
    deferredFhinit.resolve();
  });

  var deferredReady = q.defer();
  if (window.cordova) {
    document.addEventListener("deviceready", function cameraReady() {
      deferredReady.resolve();
    }, false);
  } else {
    deferredReady.resolve();
  };

  client.initPromise = q.all([deferredFhinit.promise, deferredReady.promise])
  return client.initPromise;
};

client.uploadDataUrl = function(userId, dataUrl) {
  var deferred = q.defer();
  if (arguments.length < 2) {
    deferred.reject('Both userId and a dataUrl parameters are required.');
  } else {
    $fh.cloud({
      path: config.apiPath + '/owner/'+userId+'/upload/base64/photo.png',
      method: 'post',
      data: dataUrl
    },
    function(res) {
      deferred.resolve(res);
    },
    function(message, props) {
      var e = new Error(message);
      e.props = props;
      deferred.reject(e);
    });
  }
  return deferred.promise;
}

client.list = function(userId) {
  var url = arguments.length === 0 ? config.apiPath + '/all'
    : config.apiPath + '/owner/' + userId;
  var deferred = q.defer();
  $fh.cloud({
      path: url,
      method: 'get'
    },
    function(res) {
      deferred.resolve(res);
    },
    function(message, props) {
      var e = new Error(message);
      e.props = props;
      deferred.reject(e);
    }
  );
  return deferred.promise;
};

function fileUpload(fileURI, serverURI, fileUploadOptions) {
  var deferred = q.defer();
  var transfer = new FileTransfer();
  transfer.upload(fileURI, serverURI, function uploadSuccess(response) {
    deferred.resolve(response);
  }, function uploadFailure(error) {
    deferred.reject(error);
  }, fileUploadOptions);
  return deferred.promise;
};

function fileUploadRetry(fileURI, serverURI, fileUploadOptions, timeout, retries) {
  return fileUpload(fileURI, serverURI, fileUploadOptions)
  .then(function (response) {
    return response;
  }, function (error) {
    if (retries == 0) {
      throw new Error("Can't upload to " + JSON.stringify(serverURI));
    };
    return q.delay(timeout)
    .then(function () {
      return fileUploadRetry(fileURI, serverURI, fileUploadOptions, timeout, retries - 1);
    });
  });
};

client.uploadFile = function(userId, fileURI, options) {
  if (arguments.length < 2) {
    return q.reject('userId and fileURI parameters are required.');
  } else {
    options = options || {};
    var fileUploadOptions = new FileUploadOptions();
    fileUploadOptions.fileKey = options.fileKey || 'binaryfile';
    fileUploadOptions.fileName = options.fileName;
    fileUploadOptions.mimeType = options.mimeType || 'image/jpeg';
    fileUploadOptions.params = {
      ownerId: userId,
      fileName: options.fileName
    };
    var timeout = options.timeout || 2000;
    var retries = options.retries || 1;
    return client.initPromise.then(function() {
      var serverURI = window.encodeURI(client.cloudUrl + config.apiPath + '/upload/binary');
      return fileUploadRetry(fileURI, serverURI, fileUploadOptions, timeout, retries);
    })
  };
};

client.init();

module.exports = client;

},{"./config":24,"q":"q"}],26:[function(require,module,exports){
require('./workorder-map.tpl.html.js');

},{"./workorder-map.tpl.html.js":27}],27:[function(require,module,exports){
var ngModule;
try {
  ngModule = angular.module('wfm.map.directives');
} catch (e) {
  ngModule = angular.module('wfm.map.directives', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/workorder-map.tpl.html',
    '<!--\n' +
    ' CONFIDENTIAL\n' +
    ' Copyright 2016 Red Hat, Inc. and/or its affiliates.\n' +
    ' This is unpublished proprietary source code of Red Hat.\n' +
    '-->\n' +
    '<div id=\'gmap_canvas\'></div>\n' +
    '');
}]);

},{}],28:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

var ngModule = angular.module('wfm.map.directives', ['wfm.core.mediator']);
module.exports = 'wfm.map.directives';

require('../../dist');

ngModule.directive('workorderMap', function($templateCache, mediator, $window, $document, $timeout) {
  function initMap(element, center) {
    var myOptions = {
      zoom:14,
      center:new google.maps.LatLng(center[0], center[1]),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(element[0].querySelector('#gmap_canvas'), myOptions);
    return map;
  };

  function resizeMap(element, parent) {
    var mapElement = element[0].querySelector('#gmap_canvas')
    var height = parent.clientHeight;
    var width = parent.clientWidth;
    mapElement.style.height = height + 'px';
    mapElement.style.width = width + 'px';

    console.log('Map dimensions:', width, height);
    google.maps.event.trigger(mapElement, 'resize');
  };

  function addMarkers(map, element, workorders) {
    workorders.forEach(function(workorder) {
      if (workorder.location) {
        // var lat = center[0] + (Math.random() - 0.5) * 0.05;
        // var long = center[1] + (Math.random() - 0.5) * 0.2;
        var lat = workorder.location[0];
        var long = workorder.location[1];
        var marker = new google.maps.Marker({map: map,position: new google.maps.LatLng(lat, long)});
        var infowindow = new google.maps.InfoWindow({content:'<strong>Workorder #'+workorder.id+'</strong><br>'+workorder.address+'<br>'});
        google.maps.event.addListener(marker, 'click', function(){
          infowindow.open(map,marker);
        });
      }
    });
  };

  function findParent(document, element, selector) {
    if (!selector) {
      return element.parentElement;
    }
    var matches = document.querySelectorAll(selector);
    var parent = element.parentElement;
    while(parent) {
      var isParentMatch = Array.prototype.some.call(matches, function(_match) {
        return parent === _match;
      });
      if (isParentMatch) {
        break;
      };
      var parent = parent.parentElement;
      console.log('parent', parent)
    }
    return parent || element.parentElement;
  }

  return {
    restrict: 'E',
    template: $templateCache.get('wfm-template/workorder-map.tpl.html'),
    scope: {
      list: '=',
      center: '=',
      workorders: '=',
      containerSelector: '@'
    },
    link: function (scope, element, attrs, ctrl) {
      var map = initMap(element, scope.center || [49.27, -123.08]);
      addMarkers(map, element, scope.workorders);
      var parent = findParent($document[0], element[0], scope.containerSelector);
      var resizeListener = function() {
        resizeMap(element, parent);
      }
      $timeout(resizeListener);
      angular.element($window).on('resize', resizeListener); // TODO: throttle this
      scope.$on('$destroy', function() {
        angular.element($window).off('resize', resizeListener);
      });
    },
    controller: function($scope, $window, $element) {

    },
    controllerAs: 'ctrl'
  };
})

},{"../../dist":26}],29:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

module.exports = 'wfm.map';

angular.module('wfm.map', [
  require('./directive')
, require('./service')
])

},{"./directive":28,"./service":30}],30:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

var ngModule = angular.module('wfm.map.services', ['wfm.core.mediator']);
module.exports = 'wfm.map.services';

ngModule.factory('mapClient', function() {
  var mapClient = {};
  mapClient.getCoords = function(address) {
    // invoke the google API to return the co-ordinates of the given location
    // https://developers.google.com/maps/documentation/geocoding/intro
  }
})

},{}],31:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

var mediator = require('../mediator');

angular.module('wfm.core.mediator', ['ng'])

.factory('mediator', function mediatorService($q, $log) {
  var originalRequest = mediator.request;

  // monkey patch the request function, wrapping the returned promise as an angular promise
  mediator.request = function() {
    var promise = originalRequest.apply(mediator, arguments);
    return $q.when(promise);
  };

  mediator.subscribeForScope = function(topic,scope,fn) {
    var subscriber = mediator.subscribe(topic,fn);
    scope.$on("$destroy", function() {
      mediator.remove(topic, subscriber.id);
    });

  };

  return mediator;
});

module.exports = 'wfm.core.mediator';

},{"../mediator":32}],32:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

var _ = require('lodash');
var Mediator = require('mediator-js').Mediator;
var q = require('q');

var mediator = new Mediator();

mediator.promise = function() {
  var deferred = q.defer();
  var cb = function(data) {
    deferred.resolve(data);
  };
  var args = [];
  Array.prototype.push.apply(args, arguments);
  args.splice(1, 0, cb);
  mediator.once.apply(mediator, args);
  return deferred.promise;
}

mediator.request = function(topic, parameters, options) {
  var topics = {}, subs = {}, complete = false, timeout;
  var deferred = q.defer();
  options = options || {};

  topics.request = topic;
  topics.done = options.doneTopic || 'done:' + topic;
  topics.error = options.errorTopic || 'error:' + topic;

  var uid = null;
  if (_.has(options, 'uid')) {
    uid = options.uid;
  } else if (typeof parameters !== "undefined" && parameters !== null) {
    uid = parameters instanceof Array ? parameters[0] : parameters;
  }

  if (uid !== null) {
     topics.done += ':' + uid;
     topics.error += ':' + uid;
  }

  if (!options.timeout) {
    options.timeout = 2000;
  };

  var cleanUp = function() {
    complete = true;
    clearTimeout(timeout);
    mediator.remove(topics.done, subs.done.id);
    mediator.remove(topics.error, subs.error.id);
  };

  subs.done = mediator.subscribe(topics.done, function(result) {
    cleanUp();
    deferred.resolve(result);
  });

  subs.error = mediator.subscribe(topics.error, function(error) {
    cleanUp();
    deferred.reject(error);
  });

  var args = [topics.request];
  if (parameters instanceof Array) {
    Array.prototype.push.apply(args, parameters);
  } else {
    args.push(parameters);
  }
  mediator.publish.apply(mediator, args);

  timeout = setTimeout(function() {
    if (!complete) {
      cleanUp();
      deferred.reject(new Error('Mediator request timeout for topic ' +  topic));
    }
  }, options.timeout);

  return deferred.promise;
};

module.exports = mediator;

},{"lodash":"lodash","mediator-js":"mediator-js","q":"q"}],33:[function(require,module,exports){
require('./message-detail.tpl.html.js');
require('./message-form.tpl.html.js');
require('./message-list.tpl.html.js');

},{"./message-detail.tpl.html.js":34,"./message-form.tpl.html.js":35,"./message-list.tpl.html.js":36}],34:[function(require,module,exports){
var ngModule;
try {
  ngModule = angular.module('wfm.message.directives');
} catch (e) {
  ngModule = angular.module('wfm.message.directives', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/message-detail.tpl.html',
    '<!--\n' +
    ' CONFIDENTIAL\n' +
    ' Copyright 2016 Red Hat, Inc. and/or its affiliates.\n' +
    ' This is unpublished proprietary source code of Red Hat.\n' +
    '-->\n' +
    '<md-toolbar class="content-toolbar">\n' +
    '  <div class="md-toolbar-tools">\n' +
    '    <md-button ng-click="ctrl.closeMessage($event, ctrl.message)" hide-gt-sm class="md-icon-button">\n' +
    '      <md-icon aria-label="Close" md-font-set="material-icons">close</md-icon>\n' +
    '    </md-button>\n' +
    '    <h3>\n' +
    '     {{ctrl.message.subject}}\n' +
    '    </h3>\n' +
    '  </div>\n' +
    '</md-toolbar>\n' +
    '<div class="wfm-maincol-scroll">\n' +
    '  <div class="message" layout-padding layout-margin>\n' +
    '\n' +
    '    <div class="message-header">\n' +
    '      <div class="md-body-1">\n' +
    '        <span>From:</span> {{ctrl.message.sender.name}}\n' +
    '      </div>\n' +
    '      <div class="md-body-1">\n' +
    '        <span>To:</span> {{ctrl.message.receiver.name}}\n' +
    '      </div>\n' +
    '      <div class="md-body-1">\n' +
    '        <span>Status:</span> {{ctrl.message.status}}\n' +
    '      </div>\n' +
    '      <!--<div class="md-body-1 time-stamp">11:38 AM (3 hours ago)</div>-->\n' +
    '    </div>\n' +
    '\n' +
    '    <md-divider></md-divider>\n' +
    '\n' +
    '    <p class="md-body-1">{{ctrl.message.content}}</p>\n' +
    '  </div>\n' +
    '</div>\n' +
    '');
}]);

},{}],35:[function(require,module,exports){
var ngModule;
try {
  ngModule = angular.module('wfm.message.directives');
} catch (e) {
  ngModule = angular.module('wfm.message.directives', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/message-form.tpl.html',
    '<!--\n' +
    ' CONFIDENTIAL\n' +
    ' Copyright 2016 Red Hat, Inc. and/or its affiliates.\n' +
    ' This is unpublished proprietary source code of Red Hat.\n' +
    '-->\n' +
    '<md-toolbar class="content-toolbar md-primary">\n' +
    '  <div class="md-toolbar-tools">\n' +
    '    <h3>New message</h3>\n' +
    '  </div>\n' +
    '</md-toolbar>\n' +
    '<div class="wfm-maincol-scroll">\n' +
    '\n' +
    '<form name="messageForm" ng-submit="ctrl.done(messageForm.$valid)" novalidate layout-padding layout-margin>\n' +
    '  <!--\n' +
    '  <md-input-container>\n' +
    '    <label for="messageState">Status</label>\n' +
    '    <input type="text" id="inputmessageType" name="messageStatus" ng-model="ctrl.model.status" disabled="true">\n' +
    '  </md-input-container>\n' +
    '  -->\n' +
    '<div>\n' +
    '  <md-input-container class="md-block" ng-class="{ \'has-error\' : messageForm.receiver.$invalid && !messageForm.receiver.$pristine }">\n' +
    '    <label for="selectReceiver">To</label>\n' +
    '    <md-select ng-model="ctrl.model.receiver" name="receiver" id="selectReceiver" required>\n' +
    '       <md-option ng-repeat="worker in ctrl.workers" value="{{worker}}">{{worker.name}} ({{worker.position}})</md-option>\n' +
    '     </md-select>\n' +
    '     <div ng-messages="messageForm.receiver.$error" ng-if="ctrl.submitted || messageForm.receiver.$dirty">\n' +
    '       <div ng-message="required">The To: field is required.</div>\n' +
    '     </div>\n' +
    '  </md-input-container>\n' +
    '</div>\n' +
    '\n' +
    '<div>\n' +
    '  <md-input-container class="md-block" ng-class="{ \'has-error\' : messageForm.subject.$invalid && !messageForm.subject.$pristine }">\n' +
    '    <label for="inputSubject">Subject</label>\n' +
    '    <input type="text" id="inputSubject" name="subject" ng-model="ctrl.model.subject" required>\n' +
    '    <div ng-messages="messageForm.subject.$error" ng-if="ctrl.submitted || messageForm.subject.$dirty">\n' +
    '      <div ng-message="required">A subject is required.</div>\n' +
    '    </div>\n' +
    '  </md-input-container>\n' +
    '</div>\n' +
    '\n' +
    '<div>\n' +
    '  <md-input-container class="md-block" ng-class="{ \'has-error\' : messageForm.content.$invalid && !messageForm.content.$pristine }">\n' +
    '    <label for="inputContent">Message</label>\n' +
    '    <textarea id="inputContent" name="content" ng-model="ctrl.model.content" required md-maxlength="350"></textarea>\n' +
    '\n' +
    '    <div ng-messages="messageForm.content.$error" ng-show="ctrl.submitted || messageForm.content.$dirty">\n' +
    '      <div ng-message="required">Message content is required.</div>\n' +
    '    </div>\n' +
    '  </md-input-container>\n' +
    '</div>\n' +
    '\n' +
    '  <md-button type="submit" class="md-raised md-primary">Send message</md-button>\n' +
    '</form>\n' +
    '\n' +
    '</div>\n' +
    '');
}]);

},{}],36:[function(require,module,exports){
var ngModule;
try {
  ngModule = angular.module('wfm.message.directives');
} catch (e) {
  ngModule = angular.module('wfm.message.directives', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/message-list.tpl.html',
    '<!--\n' +
    ' CONFIDENTIAL\n' +
    ' Copyright 2016 Red Hat, Inc. and/or its affiliates.\n' +
    ' This is unpublished proprietary source code of Red Hat.\n' +
    '-->\n' +
    '<md-toolbar>\n' +
    '  <div class="md-toolbar-tools">\n' +
    '    <h3>\n' +
    '      <span>Messages</span>\n' +
    '    </h3>\n' +
    '  </div>\n' +
    '</md-toolbar>\n' +
    '\n' +
    '<form action="#" class="persistent-search"  hide-xs hide-sm>\n' +
    '  <label for="search"><i class="material-icons">search</i></label>\n' +
    '  <input type="text" id="search" placeholder="Search" ng-model="searchValue" ng-change="ctrl.applyFilter(searchValue)">\n' +
    '</form>\n' +
    '\n' +
    '\n' +
    '<div class="messages">\n' +
    '\n' +
    '  <md-list>\n' +
    '    <md-list-item class="md-3-line" ng-repeat="message in ctrl.list | reverse" ng-click="ctrl.selectMessage($event, message)" class="md-3-line workorder-item"\n' +
    '     ng-class="{active: ctrl.selected.id === message.id, new: message.status === \'unread\'}">\n' +
    '      <img ng-src="{{message.sender.avatar}}" class="md-avatar" alt="{{message.sender.name}}" />\n' +
    '      <div class="md-list-item-text" layout="column">\n' +
    '        <!--<span class="md-caption time-stamp">13 mins ago</span>-->\n' +
    '        <h3>{{message.sender.name}}</h3>\n' +
    '        <h4>{{message.subject}}</h4>\n' +
    '        <p>{{message.content}}</p>\n' +
    '      </div>\n' +
    '      <md-divider md-inset></md-divider>\n' +
    '    </md-list-item>\n' +
    '  </md-list>\n' +
    '\n' +
    '</div>\n' +
    '');
}]);

},{}],37:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

var ngModule = angular.module('wfm.message.directives', ['wfm.core.mediator']);
module.exports = 'wfm.message.directives';

require('../../dist');

ngModule.directive('messageList', function($templateCache, mediator) {
  return {
    restrict: 'E'
  , template: $templateCache.get('wfm-template/message-list.tpl.html')
  , scope: {
      list : '=list',
      selectedModel: '='
    }
  , controller: function($scope) {
        var self = this;
        self.list = $scope.list;
        self.selected = $scope.selectedModel;
        self.selectMessage = function(event, message) {
        self.selectedMessageId = message.id;
        mediator.publish('wfm:message:selected', message);
        event.preventDefault();
        event.stopPropagation();
      }
      self.ismessageShown = function(message) {
        return self.shownmessage === message;
      };

      self.applyFilter = function(term) {
        term = term.toLowerCase();
        self.list = $scope.list.filter(function(message) {
          return String(message.sender.name).toLowerCase().indexOf(term) !== -1
            || String(message.subject).toLowerCase().indexOf(term) !== -1;
        });
      };
    }
  , controllerAs: 'ctrl'
  };
})

.directive('messageForm', function($templateCache, mediator) {
  return {
    restrict: 'E'
  , template: $templateCache.get('wfm-template/message-form.tpl.html')
  , scope: {
    message : '=value'
  , workers: '='
    }
  , controller: function($scope) {
      var self = this;
      self.model = angular.copy($scope.message);
      self.workers = $scope.workers;
      self.submitted = false;
      self.done = function(isValid) {
        self.submitted = true;
        self.model.receiver = JSON.parse(self.model.receiver);
        self.model.receiverId = self.model.receiver.id;
        self.model.status = "unread";
        if (isValid) {
            mediator.publish('wfm:message:created', self.model);
        }
      }
    }
  , controllerAs: 'ctrl'
  };
})

.directive('messageDetail', function($templateCache, mediator) {
  return {
    restrict: 'E'
  , template: $templateCache.get('wfm-template/message-detail.tpl.html')
  , scope: {
    message : '=message'
    }
  , controller: function($scope) {
      var self = this;
      self.message = $scope.message;
      self.showSelectButton = !! $scope.$parent.messages;
      self.selectmessage = function(event, message) {
        mediator.publish('wfm:message:selected', message);
        event.preventDefault();
        event.stopPropagation();
      }
      self.closeMessage = function(event, message) {
        mediator.publish('wfm:message:close:' + message.id);
        event.preventDefault();
        event.stopPropagation();
      }
    }
  , controllerAs: 'ctrl'
  };
})
;

},{"../../dist":33}],38:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

module.exports = 'wfm.message';

angular.module('wfm.message', [
  require('./directive')
, require('./sync-service')
])

},{"./directive":37,"./sync-service":39}],39:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

var config = require('../config')
  , _ = require('lodash')
  ;

module.exports = 'wfm.message.sync';

function removeLocalVars(object) {
  _.keys(object).filter(function(key) {
    return key.indexOf('_') === 0;
  }).forEach(function(localKey) {
    delete object[localKey];
  });
  if (object.results) {
    _.values(object.results).forEach(function(result) {
      _.keys(result.submission).filter(function(key) {
        return key.indexOf('_') === 0;
      }).forEach(function(localKey) {
        delete result.submission[localKey];
      });
    });
  };
};

function wrapManager($q, $timeout, manager) {
  var wrappedManager = _.create(manager);
  wrappedManager.new = function() {
    var deferred = $q.defer();
    $timeout(function() {
      var message = {
        type: 'Message'
      , status: 'New'
      };
      deferred.resolve(message);
    }, 0);
    return deferred.promise;
  };

  return wrappedManager;
}

angular.module('wfm.message.sync', [require('fh-wfm-sync')])
.factory('messageSync', function($q, $timeout, syncService) {
  syncService.init($fh, config.syncOptions);
  var messageSync = {};
  messageSync.createManager = function(queryParams) {
    if (messageSync.manager) {
      return $q.when(messageSync.manager);
    } else {
      return messageSync.managerPromise = syncService.manage(config.datasetId, null, queryParams)
      .then(function(manager) {
        messageSync.manager = wrapManager($q, $timeout, manager);
        console.log('Sync is managing dataset:', config.datasetId, 'with filter: ', queryParams);
        return messageSync.manager;
      })
    }
  };
  messageSync.removeManager = function() {
    if (messageSync.manager) {
      return messageSync.manager.safeStop()
      .then(function() {
        delete messageSync.manager;
      })
    }
  }
  return messageSync;
})
.filter('reverse', function() {
  return function(items) {
    return items.slice().reverse();
  };
});
;

},{"../config":40,"fh-wfm-sync":53,"lodash":"lodash"}],40:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

module.exports = {
  apiHost: 'http://localhost:8080',
  apiPath: '/api/wfm/message',
  datasetId : 'messages',
  syncOptions : {
    "sync_frequency" : 5,
    "storage_strategy": "dom",
    "do_console_log": false
  }
}

},{}],41:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

module.exports = 'wfm.result';

angular.module('wfm.result', [
  require('./service')
])

},{"./service":42}],42:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

var config = require('../config')
  , _ = require('lodash')
  ;

module.exports = 'wfm.result.sync';

function wrapManager($q, $timeout, manager) {
  var wrappedManager = _.create(manager);
  wrappedManager.getByWorkorderId = function(workorderId) {
    return wrappedManager.list()
    .then(function(results) {
      return wrappedManager.filterByWorkorder(results, workorderId);
    });
  };
  wrappedManager.filterByWorkorder = function(resultsArray, workorderId) {
    var deferred = $q.defer();
    var filtered = resultsArray.filter(function(result) {
      return String(result.workorderId) === String(workorderId);
    });
    var result =  filtered && filtered.length ? filtered[0] : {};
    deferred.resolve(result);
    return deferred.promise;
  };
  wrappedManager.extractAppformSubmissionIds = function(result) {
    var submissionIds = null;
    if ( result && result.stepResults && ! _.isEmpty(result.stepResults)) {
      var appformStepResults = _.filter(result.stepResults, function(stepResult) {
        return !! stepResult.step.formId;
      });
      if (! _.isEmpty(appformStepResults)) {
        submissionIds = _.map(appformStepResults, function(stepResult) {
          return stepResult.submission.submissionId;
        }).filter(function(id) {
          return !! id;
        });
      };
    };
    return submissionIds;
  }
  return wrappedManager;
}

angular.module('wfm.result.sync', [require('fh-wfm-sync')])
.factory('resultSync', function($q, $timeout, syncService) {
  syncService.init($fh, config.syncOptions);
  var resultSync = {};
  resultSync.managerPromise = syncService.manage(config.datasetId)
  .then(function(manager) {
    resultSync.manager = wrapManager($q, $timeout, manager);
    console.log('Sync is managing dataset:', config.datasetId);
    return resultSync.manager;
  });
  return resultSync;
})

.filter('isEmpty', function () {
  return function (object) {
    return (Object.keys(object).length === 0);
  };
})

.run(function(mediator, resultSync) {
  mediator.subscribe('wfm:appform:submission:complete', function(event) {
    var metaData = event.metaData.wfm;
    var submissionResult = event.submissionResult;
    resultSync.managerPromise
    .then(function(manager) {
      return manager.getByWorkorderId(metaData.workorderId)
      .then(function(result) {
        var stepResult = result.stepResults[metaData.step.code];
        stepResult.submission = submissionResult;
        return manager.update(result);
      })
    })
    .then(function(result) {
      mediator.publish('wfm:result:remote-update:' + result.workorderId, result);
    })
  })
})
;

},{"../config":43,"fh-wfm-sync":53,"lodash":"lodash"}],43:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

module.exports = {
  apiHost: 'http://localhost:8080',
  apiPath: '/api/wfm/result',
  datasetId : 'result',
  syncOptions : {
    "sync_frequency" : 5,
    "storage_strategy": "dom",
    "do_console_log": false
  }
}

},{}],44:[function(require,module,exports){
require('./risk-assessment-form.tpl.html.js');
require('./risk-assessment.tpl.html.js');

},{"./risk-assessment-form.tpl.html.js":45,"./risk-assessment.tpl.html.js":46}],45:[function(require,module,exports){
var ngModule;
try {
  ngModule = angular.module('wfm.risk-assessment');
} catch (e) {
  ngModule = angular.module('wfm.risk-assessment', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/risk-assessment-form.tpl.html',
    '<!--\n' +
    ' CONFIDENTIAL\n' +
    ' Copyright 2016 Red Hat, Inc. and/or its affiliates.\n' +
    ' This is unpublished proprietary source code of Red Hat.\n' +
    '-->\n' +
    '  <div ng-show="riskAssessmentStep === 0" layout-padding class="risk-assesssment">\n' +
    '      <h2 class="md-title">Risk assessment complete?</h2>\n' +
    '      <p class="md-body-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>\n' +
    '\n' +
    '      <p class="md-body-1">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n' +
    '\n' +
    '    <div class="workflow-actions md-padding md-whiteframe-z4">\n' +
    '      <md-button class="md-primary md-warn" ng-click="ctrl.answerComplete($event, true)">No</md-button>\n' +
    '      <md-button class="md-primary" ng-click="ctrl.answerComplete($event, true)">Yes</md-button>\n' +
    '    </div><!-- workflow-actions-->\n' +
    '\n' +
    '  </div>\n' +
    '\n' +
    '  <div ng-if="riskAssessmentStep == 1" layout-padding>\n' +
    '\n' +
    '    <h3 class="md-title">Signature</h3>\n' +
    '    <p class="md-caption">Draw your signature inside the square</p>\n' +
    '    <signature-form value="ctrl.model.signature"></signature-form>\n' +
    '\n' +
    '    <div class="workflow-actions md-padding md-whiteframe-z4">\n' +
    '      <md-button class="md-primary md-hue-1" ng-click="ctrl.back($event)">Back</md-button>\n' +
    '      <md-button class="md-primary" ng-click="ctrl.done($event)">Continue</md-button>\n' +
    '    </div><!-- workflow-actions-->\n' +
    '  </div>\n' +
    '');
}]);

},{}],46:[function(require,module,exports){
var ngModule;
try {
  ngModule = angular.module('wfm.risk-assessment');
} catch (e) {
  ngModule = angular.module('wfm.risk-assessment', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/risk-assessment.tpl.html',
    '<!--\n' +
    ' CONFIDENTIAL\n' +
    ' Copyright 2016 Red Hat, Inc. and/or its affiliates.\n' +
    ' This is unpublished proprietary source code of Red Hat.\n' +
    '-->\n' +
    '  <md-subheader>Risk Assessment</md-subheader>\n' +
    '\n' +
    '  <md-list class="risk-assessment">\n' +
    '\n' +
    '    <md-list-item class="md-2-line" >\n' +
    '      <md-icon md-font-set="material-icons" ng-if="riskAssessment.complete" class="success">check_circle</md-icon>\n' +
    '      <md-icon md-font-set="material-icons" ng-if="! riskAssessment.complete" class="danger">cancel</md-icon>\n' +
    '      <div class="md-list-item-text">\n' +
    '        <h3 ng-if="riskAssessment.complete">Complete</h3>\n' +
    '        <h3 ng-if="! riskAssessment.complete">Uncompleted</h3>\n' +
    '        <p>Risk Assessment</p>\n' +
    '      </div>\n' +
    '    <md-divider></md-divider>\n' +
    '    </md-list-item>\n' +
    '\n' +
    '    <md-list-item class="md-2-line with-image">\n' +
    '      <md-icon md-font-set="material-icons">gesture</md-icon>\n' +
    '      <div class="md-list-item-text">\n' +
    '        <h3><signature value="riskAssessment.signature"></signature></h3>\n' +
    '        <p>Risk Assessment signature</p>\n' +
    '      </div>\n' +
    '    </md-list-item>\n' +
    '\n' +
    '</md-list>\n' +
    '');
}]);

},{}],47:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

var ngModule = angular.module('wfm.risk-assessment', ['wfm.core.mediator', require('fh-wfm-signature')])

require('../../dist');

ngModule.directive('riskAssessment', function($templateCache, mediator) {
  return {
    restrict: 'E'
  , template: $templateCache.get('wfm-template/risk-assessment.tpl.html')
  , scope: {
      riskAssessment: "=value"
    }
  , controller: function($scope) {
      var self = this;
    }
  , controllerAs: 'ctrl'
  };
})

ngModule.directive('riskAssessmentForm', function($templateCache, mediator) {
  return {
    restrict: 'E'
  , template: $templateCache.get('wfm-template/risk-assessment-form.tpl.html')
  , scope: {
    }
  , controller: function($scope) {
      var self = this;
      $scope.riskAssessmentStep = 0
      self.model = {};
      self.answerComplete = function(event, answer) {
        self.model.complete = answer;
        $scope.riskAssessmentStep++;
        event.preventDefault();
        event.stopPropagation();
      };
      self.back = function(event) {
        mediator.publish('wfm:workflow:step:back');
        event.preventDefault();
        event.stopPropagation();
      }
      self.done = function(event) {
        mediator.publish('wfm:workflow:step:done', self.model);
        event.preventDefault();
        event.stopPropagation();
      };
    }
  , controllerAs: 'ctrl'
  };
})
;

module.exports = 'wfm.risk-assessment';

},{"../../dist":44,"fh-wfm-signature":51}],48:[function(require,module,exports){
require('./signature-form.tpl.html.js');
require('./signature.tpl.html.js');

},{"./signature-form.tpl.html.js":49,"./signature.tpl.html.js":50}],49:[function(require,module,exports){
var ngModule;
try {
  ngModule = angular.module('wfm.signature');
} catch (e) {
  ngModule = angular.module('wfm.signature', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/signature-form.tpl.html',
    '<!--\n' +
    ' CONFIDENTIAL\n' +
    ' Copyright 2016 Red Hat, Inc. and/or its affiliates.\n' +
    ' This is unpublished proprietary source code of Red Hat.\n' +
    '-->\n' +
    '<div class="signature-form">\n' +
    '  <canvas tabindex="0"></canvas>\n' +
    '</div>\n' +
    '');
}]);

},{}],50:[function(require,module,exports){
var ngModule;
try {
  ngModule = angular.module('wfm.signature');
} catch (e) {
  ngModule = angular.module('wfm.signature', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/signature.tpl.html',
    '<!--\n' +
    ' CONFIDENTIAL\n' +
    ' Copyright 2016 Red Hat, Inc. and/or its affiliates.\n' +
    ' This is unpublished proprietary source code of Red Hat.\n' +
    '-->\n' +
    '<img ng-src="{{ctrl.signature}}"></img>\n' +
    '');
}]);

},{}],51:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

var canvasDrawr = require('../canvas-drawr');

module.exports = 'wfm.signature';

var ngModule = angular.module('wfm.signature', ['wfm.core.mediator'])

require('../../dist');

ngModule.directive('signatureForm', function($templateCache, $document, $timeout, mediator) {
  return {
    restrict: 'E'
  , template: $templateCache.get('wfm-template/signature-form.tpl.html')
  , scope: {
      value: '=',
      options: '='
    }
  , link: function (scope, element, attrs, ctrl) {
      var options = scope.options || {};
      console.log('touch support', 'ontouchstart' in $document[0]);
      var drawr = 'ontouchstart' in $document[0]
        ? new canvasDrawr.CanvasDrawr(element, options, $document)
        : new canvasDrawr.CanvasDrawrMouse(element, options, $document);

      var $canvas = angular.element(element[0].getElementsByTagName('canvas')[0]);
      $timeout(function() {
        $canvas.on('blur', function() {
          scope.$apply(function() {
            ctrl.submit(element);
          })
        });
      })
    }
  , controller: function($scope) {
      var self = this;
      self.submit = function(element) {
        var canvas = element[0].getElementsByTagName('canvas')[0];
        $scope.value = canvas.toDataURL();
      }
    }
  , controllerAs: 'ctrl'
  };
})

ngModule.directive('signature', function($templateCache) {
  return {
    restrict: 'E'
  , template: $templateCache.get('wfm-template/signature.tpl.html')
  , scope: {
      value: '='
    }
  , controller: function($scope) {
      var self = this;
      self.signature = $scope.value;
    }
  , controllerAs: 'ctrl'
  };
})
;

},{"../../dist":48,"../canvas-drawr":52}],52:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

var CanvasDrawrMouse = function (element, options) {
  var canvas = element[0].getElementsByTagName('canvas')[0];
  var ctx = canvas.getContext("2d");
  canvas.style.width = '100%';
  canvas.width = (window.innerWidth);
  canvas.height = 200;
  canvas.style.width = '';

  // set props from options, but the defaults are for the cool kids
  ctx.lineWidth = options.size || 5;
  ctx.lineCap = options.lineCap || "round";
  options.color = options.color || 'blue';

  // last known position
  var pos = { x: 0, y: 0 };

  canvas.addEventListener('mousemove', draw);
  canvas.addEventListener('mousedown', setPosition);
  canvas.addEventListener('mouseup', stop);
  canvas.addEventListener('mouseout', stop);

  // new position from mouse event
  function setPosition(e) {
    e.preventDefault();
    e.stopPropagation();
    canvas.focus();
    var rect = canvas.getBoundingClientRect();
    var offset = {
      top: rect.top,
      left: rect.left
    };
    pos.x = e.clientX - offset.left;
    pos.y = e.clientY - offset.top;
  }

  function draw(e) {
    e.preventDefault();
    e.stopPropagation();
    // mouse left button must be pressed
    if (e.buttons !== 1) return;

    ctx.beginPath(); // begin

    ctx.strokeStyle = options.color;

    ctx.moveTo(pos.x, pos.y); // from

    var rect = canvas.getBoundingClientRect();
    var offset = {
      top: rect.top,
      left: rect.left
    };
    pos.x = e.clientX - offset.left;
    pos.y = e.clientY - offset.top;
    ctx.lineTo(pos.x, pos.y); // to

    ctx.stroke(); // draw it!

  }

  function stop() {
    canvas.blur();
  }
};

var CanvasDrawr = function(element, options, $document) {
  var canvas = element[0].getElementsByTagName('canvas')[0];
  var ctx = canvas.getContext('2d');
  canvas.style.width = '100%'
  canvas.width = canvas.offsetWidth;
  canvas.style.width = '';

  // set props from options, but the defaults are for the cool kids
  ctx.lineWidth = options.size || 5;
  ctx.lineCap = options.lineCap || 'round';
  options.color = options.color || 'blue';
  ctx.pX = undefined;
  ctx.pY = undefined;

  var lines = [,,];
  var rect = canvas.getBoundingClientRect();

  var offset = {
    top: rect.top + $document[0].body.scrollTop,
    left: rect.left + $document[0].body.scrollLeft
  };

  var self = {
    //bind click events
    init: function() {
      // use anguler.element#on for automatic listener cleanup
      var canvasNg = angular.element(canvas);
      //set pX and pY from first click
      canvasNg.on('touchstart', self.preDraw);
      canvasNg.on('touchmove', self.draw);
      canvasNg.on('touchend', self.stop);
      canvasNg.on('touchcancel', self.stop);
    },

    preDraw: function(event) {
      canvas.focus();
      rect = canvas.getBoundingClientRect();
      offset = {
        top: rect.top + $document[0].body.scrollTop,
        left: rect.left + $document[0].body.scrollLeft
      };

      for (var i = 0; i < event.touches.length; i++) {
        var touch = event.touches[i];
        var id      = touch.identifier;

        lines[id] = {
          x     : touch.pageX - offset.left,
          y     : touch.pageY - offset.top,
          color : options.color
        };
      };
      event.preventDefault();
      event.cancelBubble = true;
    },

    draw: function(event) {
      for (var i = 0; i < event.touches.length; i++) {
        var touch = event.touches[i];
        var id = touch.identifier,

        moveX = touch.pageX - offset.left - lines[id].x,
        moveY = touch.pageY - offset.top - lines[id].y;

        var ret = self.move(id, moveX, moveY);
        lines[id].x = ret.x;
        lines[id].y = ret.y;
      };

      event.preventDefault();
    },

    move: function(i, changeX, changeY) {
      ctx.strokeStyle = lines[i].color;
      ctx.beginPath();
      ctx.moveTo(lines[i].x, lines[i].y);

      ctx.lineTo(lines[i].x + changeX, lines[i].y + changeY);
      ctx.stroke();
      ctx.closePath();

      return { x: lines[i].x + changeX, y: lines[i].y + changeY };
    },

    stop: function() {
      canvas.blur();
    }
  };

  return self.init();
}

module.exports = {
  CanvasDrawr: CanvasDrawr,
  CanvasDrawrMouse: CanvasDrawrMouse
};

},{}],53:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

var sync = require('../client')

module.exports = 'wfm.sync.service';

angular.module('wfm.sync.service', [])

.factory('syncService', function($q) {
  var syncService = {};
  var managerPromise;

  function ManagerWrapper(_manager) {
    this.manager = _manager;
    var self = this;

    var methodNames = ['create', 'read', 'update', 'delete', 'list', 'start', 'stop', 'safeStop', 'getQueueSize', 'forceSync', 'waitForSync'];
    methodNames.forEach(function(methodName) {
      self[methodName] = function() {
        return $q.when(self.manager[methodName].apply(self.manager, arguments));
      }
    });
  };

  syncService.init = function($fh, syncOptions) {
    sync.init($fh, syncOptions);
  }

  syncService.manage = function(datasetId, options, queryParams, metaData) {
    return $q.when(sync.manage(datasetId, options, queryParams, metaData))
    .then(function(_manager) {
      var manager = new ManagerWrapper(_manager);
      manager.stream = _manager.stream;
      return manager;
    });
  };

  return syncService;
})
;

},{"../client":54}],54:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

var _ = require('lodash')
  , q = require('q')
  , defaultConfig = require('./config')
  , Rx = require('rx')
  ;

var $fh, initialized = false, notificationStream, listeners = [];

function transformDataSet(syncData) {
  var result = _.values(syncData).map(function(syncData) {
    return syncData.data;
  });
  return _.sortBy(result, function(o) { return o.id; });
}

function formatError(code, msg) {
  var error = 'Error';
  if (code && msg) {
    error += ' ' + code + ': ' + msg;
  } else if (code && !msg) {
    error += ': ' + code;
  } else if (!code && msg) {
    error += ': ' + msg;
  } else {
    error += ': no error details available'
  }
  return error;
}

function init(_$fh, _syncOptions) {
  if (initialized) {
    console.log('sync-client already initalized.');
  } else {
    console.log('sync-client initalizing.');
    $fh = _$fh;
    notificationStream = Rx.Observable.create(function (observer) {
      addListener(function(notification) {
        observer.onNext(notification);
      });
    })
    .share();
    var syncOptions = _.defaults(_syncOptions, defaultConfig.syncOptions);

    $fh.sync.init(syncOptions);
    initialized = true;
    $fh.sync.notify(function(notification) {
      listeners.forEach(function(listener) {
        listener.call(undefined, notification);
      });
    });
  }
};

function manage(datasetId, options, queryParams, metaData) {
  var deferred = q.defer();
  if (!initialized) {
    deferred.resolve('Sync not yet initialized.  Call sync-client.init() first.');
  } else {
    //manage the dataSet
    $fh.sync.manage(datasetId, options, queryParams, metaData, function() {
      var manager = new DataManager(datasetId);
      manager.stream = notificationStream.filter(function(notification) {
        return notification.dataset_id == datasetId;
      })
      deferred.resolve(manager);
    });
  }
  return deferred.promise;
}

function addListener(listener) {
  listeners.push(listener);
}

function DataManager(datasetId) {
  this.datasetId = datasetId;
}

DataManager.prototype.list = function() {
  var deferred = q.defer();
  $fh.sync.doList(this.datasetId, function(res) {
    var objects = transformDataSet(res);
    deferred.resolve(objects);
  }, function(code, msg) {
    deferred.reject(new Error(formatError(code, msg)));
  });
  return deferred.promise;
};

DataManager.prototype.create = function(object) {
  var deferred = q.defer();
  var self = this;
  $fh.sync.doCreate(self.datasetId, object, function(msg) {
    // success
    self.stream.filter(function(notification) {
      return notification.code == 'local_update_applied'
        && notification.message == 'create'
        ; // && notification.uid == object._localuid;  TODO: get the sync framework to include the temporary uid in the notification
    }).take(1).toPromise(q.Promise)
    .then(function(notification) {
      object._localuid = msg.uid;
      return self.update(object);
    })
    .then(function(result) {
      deferred.resolve(result);
    })
  }, function(code, msg) {
    // failure
    deferred.reject(new Error(formatError(code, msg)));
  });
  return deferred.promise;
};

DataManager.prototype.read = function(id) {
  var deferred = q.defer();
  $fh.sync.doRead(this.datasetId, id, function(res) {
    // success
    deferred.resolve(res.data);
  }, function(code, msg) {
    // failure
    deferred.reject(new Error(formatError(code, msg)));
  });
  return deferred.promise;
};

DataManager.prototype.update = function(object) {
  var deferred = q.defer();
  var self = this;
  var uidPromise = _.has(object, 'id')
    ? q.when(String(object.id))
    : self.read(object._localuid).then(function(_object) {
      console.log('_object', _object)
      if (_.has(_object, 'id')) {
        object.id = _object.id;
        return String(_object.id);
      } else {
        return object._localuid;
      }
    });
  uidPromise.then(function(uid) {
    console.log('updating with id', uid)
  $fh.sync.doUpdate(self.datasetId, uid, object, function(msg) {
    // success
    self.stream.filter(function(notification) {
      return notification.code === 'local_update_applied'
        && notification.message === 'update'
        && notification.uid === uid;
    }).take(1).toPromise(q.Promise)
    .then(function(notification) {
      return self.read(uid);
    })
    .then(function(result) {
      console.log('result', result)
      deferred.resolve(result);
    })
  }, function(code, msg) {
    // failure
    console.error('Error updating', object);
    deferred.reject(new Error(formatError(code, msg)));
  });
});
  return deferred.promise;
};

DataManager.prototype.delete = function(object) {
  var deferred = q.defer();
  var self = this;
  $fh.sync.doDelete(self.datasetId, object.id, function(res) {
    // success
    var uid = String(object.id);
    self.stream.filter(function(notification) {
      return notification.code === 'local_update_applied'
        && notification.message === 'delete'
        && String(notification.uid) === uid;
    }).take(1).toPromise(q.Promise)
    .then(function(notification) {
      deferred.resolve(notification.message);
    })
  }, function(code, msg) {
    // failure
    deferred.reject(new Error(formatError(code, msg)));
  });
  return deferred.promise;
};

DataManager.prototype.start = function() {
  var deferred = q.defer();
  $fh.sync.startSync(this.datasetId, function(){
    deferred.resolve('sync loop started');
  }, function(error){
    deferred.reject(error);
  });
  return deferred.promise;
};

DataManager.prototype.stop = function() {
  var deferred = q.defer();
  var self = this;
  $fh.sync.stopSync(this.datasetId, function(){
    if (self.recordDeltaReceivedSubscription) {
      self.recordDeltaReceivedSubscription.dispose();
    }
    deferred.resolve('sync loop stopped');
  }, function(error){
    deferred.reject(error);
  });
  return deferred.promise;
};

DataManager.prototype.forceSync = function() {
  var deferred = q.defer();
  $fh.sync.forceSync(this.datasetId, function(){
    deferred.resolve('sync loop will run');
  }, function(error){
    deferred.reject(error);
  });
  return deferred.promise;
};

DataManager.prototype.getQueueSize = function() {
  var deferred = q.defer();
  $fh.sync.getPending(this.datasetId, function(pending) {
    deferred.resolve(_.size(pending));
  });
  return deferred.promise;
}

DataManager.prototype.safeStop = function(userOptions) {
  var deferred = q.defer();
  var defaultOptions = {
    timeout: 2000
  }
  var self = this;
  var options = _.defaults(userOptions, defaultOptions);
  self.getQueueSize()
  .then(function(size) {
    if (size === 0) {
      self.stop().then(deferred.resolve);
    } else {
      deferred.notify('Calling forceSync sync before stop');
      return self.forceSync()
      .then(self.waitForSync.bind(self))
      .timeout(options.timeout)
      .then(self.getQueueSize.bind(self))
      .then(function(size) {
        if (size > 0) {
          deferred.reject(new Error('forceSync failed, outstanding results still present'));
        };
      })
      .then(self.stop.bind(self))
      .then(function() {
        deferred.resolve()
      }, function(error) {
        deferred.reject(new Error('forceSync timeout'));
      });
    }
  });
  return deferred.promise;
}

DataManager.prototype.waitForSync = function() {
  var deferred = q.defer();
  var self = this;
  self.stream.filter(function(notification) {
    return notification.code == 'sync_complete' || notification.code == 'sync_failed';
  }).take(1).toPromise(q.Promise)
  .then(function(notification) {
    if (notification.code === 'sync_complete') {
      deferred.resolve(notification);
    } else if (notification.code === 'sync_failed') {
      deferred.reject(new Error('Sync Failed', notification));
    }
  });
  return deferred.promise;
}

DataManager.prototype.publishRecordDeltaReceived = function(mediator) {
  var self = this;
  self.recordDeltaReceivedSubscription = self.stream.filter(function(notification) {
    return notification.code == 'record_delta_received'
  }).subscribe(function(notification) {
    mediator.publish('wfm:sync:record_delta_received:' + self.datasetId, notification);
  })
};

module.exports = {
  init: init
, manage: manage
, addListener: addListener
}

},{"./config":55,"lodash":"lodash","q":"q","rx":"rx"}],55:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

module.exports = {
  syncOptions : {
    "sync_frequency" : 5,
    "storage_strategy": "dom",
    "do_console_log": false
  }
}

},{}],56:[function(require,module,exports){
var ngModule;
try {
  ngModule = angular.module('wfm.user.directives');
} catch (e) {
  ngModule = angular.module('wfm.user.directives', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/group-form.tpl.html',
    '<!--\n' +
    ' CONFIDENTIAL\n' +
    ' Copyright 2016 Red Hat, Inc. and/or its affiliates.\n' +
    ' This is unpublished proprietary source code of Red Hat.\n' +
    '-->\n' +
    '<md-toolbar class="content-toolbar">\n' +
    '  <div class="md-toolbar-tools">\n' +
    '    <h3>\n' +
    '      Group #{{ctrl.model.id}}\n' +
    '    </h3>\n' +
    '\n' +
    '    <span flex></span>\n' +
    '    <md-button class="md-icon-button" aria-label="Close" ng-click="ctrl.selectGroup($event, ctrl.model)">\n' +
    '      <md-icon md-font-set="material-icons">close</md-icon>\n' +
    '    </md-button>\n' +
    '  </div>\n' +
    '</md-toolbar>\n' +
    '<md-button class="md-fab" aria-label="New group" ui-sref="app.group.new">\n' +
    '  <md-icon md-font-set="material-icons">add</md-icon>\n' +
    '</md-button>\n' +
    '\n' +
    '<div class="wfm-maincol-scroll">\n' +
    '<form name="groupForm" ng-submit="ctrl.done(groupForm.$valid)" novalidate layout-padding layout-margin>\n' +
    '\n' +
    '  <md-input-container class="md-block">\n' +
    '    <label for="groupname">Group Name</label>\n' +
    '    <input type="text" id="groupname" name="groupname" ng-model="ctrl.model.name" required>\n' +
    '    <div ng-messages="workorderForm.groupname.$error" ng-if="ctrl.submitted || groupForm.groupname.$dirty">\n' +
    '      <div ng-message="required">A name is required.</div>\n' +
    '    </div>\n' +
    '  </md-input-container>\n' +
    '\n' +
    '  <md-input-container class="md-block">\n' +
    '    <label for="assignee">Role</label>\n' +
    '    <md-select ng-model="ctrl.model.role" name="assignee" id="assignee">\n' +
    '       <md-option value="admin">Admin</md-option>\n' +
    '       <md-option value="manager">Manager</md-option>\n' +
    '       <md-option value="worker">Worker</md-option>\n' +
    '     </md-select>\n' +
    '  </md-input-container>\n' +
    '\n' +
    '  <md-button type="submit" class="md-raised md-primary">{{ctrl.model.id || ctrl.model.id === 0 ? \'Update\' : \'Create\'}} Group</md-button>\n' +
    '</form>\n' +
    '</div>\n' +
    '');
}]);

},{}],57:[function(require,module,exports){
var ngModule;
try {
  ngModule = angular.module('wfm.user.directives');
} catch (e) {
  ngModule = angular.module('wfm.user.directives', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/group-list.tpl.html',
    '<!--\n' +
    ' CONFIDENTIAL\n' +
    ' Copyright 2016 Red Hat, Inc. and/or its affiliates.\n' +
    ' This is unpublished proprietary source code of Red Hat.\n' +
    '-->\n' +
    '<md-toolbar>\n' +
    '  <div class="md-toolbar-tools">\n' +
    '    <h3>\n' +
    '      <span>Groups</span>\n' +
    '    </h3>\n' +
    '  </div>\n' +
    '</md-toolbar>\n' +
    '\n' +
    '<form action="#" class="persistent-search">\n' +
    '  <label for="search"><i class="material-icons">search</i></label>\n' +
    '  <input type="text" id="search" placeholder="Search" ng-model="searchValue" ng-change="ctrl.applyFilter(searchValue)">\n' +
    '</form>\n' +
    '\n' +
    '<md-list>\n' +
    '  <md-list-item class="md-2-line" ng-click="ctrl.selectGroup($event, group)" ng-repeat="group in ctrl.groups" ng-class="{active: ctrl.selected.id === group.id}">\n' +
    '    <div class="md-list-item-text">\n' +
    '      <h3>{{group.name}}</h3>\n' +
    '    </div>\n' +
    '    <md-divider></md-divider>\n' +
    '  </md-list-item>\n' +
    '</md-list>\n' +
    '');
}]);

},{}],58:[function(require,module,exports){
var ngModule;
try {
  ngModule = angular.module('wfm.user.directives');
} catch (e) {
  ngModule = angular.module('wfm.user.directives', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/group.tpl.html',
    '<!--\n' +
    ' CONFIDENTIAL\n' +
    ' Copyright 2016 Red Hat, Inc. and/or its affiliates.\n' +
    ' This is unpublished proprietary source code of Red Hat.\n' +
    '-->\n' +
    '<md-list>\n' +
    '  <md-list-item class="md-2-line" >\n' +
    '    <md-icon md-font-set="material-icons">group</md-icon>\n' +
    '    <div class="md-list-item-text">\n' +
    '      <h3>{{ctrl.group.id}}</h3>\n' +
    '      <p>Group id</p>\n' +
    '    </div>\n' +
    '    <md-divider></md-divider>\n' +
    '  </md-list-item>\n' +
    '\n' +
    '  <md-list-item class="md-2-line" >\n' +
    '    <md-icon md-font-set="material-icons">group</md-icon>\n' +
    '    <div class="md-list-item-text">\n' +
    '      <h3>{{ctrl.group.name}}</h3>\n' +
    '      <p>Group name</p>\n' +
    '    </div>\n' +
    '    <md-divider></md-divider>\n' +
    '  </md-list-item>\n' +
    '\n' +
    '  <md-list-item class="md-2-line" >\n' +
    '    <md-icon md-font-set="material-icons">group</md-icon>\n' +
    '    <div class="md-list-item-text">\n' +
    '      <h3>{{ctrl.group.role}}</h3>\n' +
    '      <p>Role</p>\n' +
    '    </div>\n' +
    '    <md-divider></md-divider>\n' +
    '  </md-list-item>\n' +
    '</md-list>\n' +
    '\n' +
    '<md-toolbar class="content-toolbar">\n' +
    '  <div class="md-toolbar-tools">\n' +
    '    <h3>\n' +
    '      Members\n' +
    '    </h3>\n' +
    '  </div>\n' +
    '</md-toolbar>\n' +
    '<md-list>\n' +
    '  <md-list-item class="md-2-line" ng-click="ctrl.selectMember($event, member)" ng-repeat="member in ctrl.members">\n' +
    '    <img alt="user.name" ng-src="{{member.avatar}}" class="md-avatar" />\n' +
    '    <div class="md-list-item-text">\n' +
    '      <h3>{{member.name}}</h3>\n' +
    '      <p>{{member.position}}</p>\n' +
    '    </div>\n' +
    '    <md-divider></md-divider>\n' +
    '  </md-list-item>\n' +
    '</md-list>\n' +
    '');
}]);

},{}],59:[function(require,module,exports){
require('./group-form.tpl.html.js');
require('./group-list.tpl.html.js');
require('./group.tpl.html.js');
require('./worker-form.tpl.html.js');
require('./worker-list.tpl.html.js');
require('./worker.tpl.html.js');

},{"./group-form.tpl.html.js":56,"./group-list.tpl.html.js":57,"./group.tpl.html.js":58,"./worker-form.tpl.html.js":60,"./worker-list.tpl.html.js":61,"./worker.tpl.html.js":62}],60:[function(require,module,exports){
var ngModule;
try {
  ngModule = angular.module('wfm.user.directives');
} catch (e) {
  ngModule = angular.module('wfm.user.directives', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/worker-form.tpl.html',
    '<!--\n' +
    ' CONFIDENTIAL\n' +
    ' Copyright 2016 Red Hat, Inc. and/or its affiliates.\n' +
    ' This is unpublished proprietary source code of Red Hat.\n' +
    '-->\n' +
    '<md-toolbar class="content-toolbar">\n' +
    '  <div class="md-toolbar-tools">\n' +
    '    <h3>\n' +
    '      Worker ID {{ctrl.model.id}}\n' +
    '    </h3>\n' +
    '\n' +
    '    <span flex></span>\n' +
    '    <md-button class="md-icon-button" aria-label="Close" ng-click="ctrl.selectWorker($event, ctrl.model)">\n' +
    '      <md-icon md-font-set="material-icons">close</md-icon>\n' +
    '    </md-button>\n' +
    '  </div>\n' +
    '</md-toolbar>\n' +
    '<md-button class="md-fab" aria-label="New Workorder" ui-sref="app.worker.new">\n' +
    '  <md-icon md-font-set="material-icons">add</md-icon>\n' +
    '</md-button>\n' +
    '\n' +
    '<div class="wfm-maincol-scroll">\n' +
    '\n' +
    '<form name="workerForm" ng-submit="ctrl.done(workerForm.$valid)" novalidate layout-padding layout-margin>\n' +
    '\n' +
    '  <md-input-container class="md-block">\n' +
    '    <label for="workername">Worker Name</label>\n' +
    '    <input type="text" id="workername" name="workername" ng-model="ctrl.model.name" required>\n' +
    '    <div ng-messages="workerForm.workername.$error" ng-if="ctrl.submitted || workerForm.workername.$dirty">\n' +
    '      <div ng-message="required">A name is required.</div>\n' +
    '    </div>\n' +
    '  </md-input-container>\n' +
    '\n' +
    '  <md-input-container class="md-block">\n' +
    '    <label for="workername">Username</label>\n' +
    '    <input type="text" id="username" name="username" ng-model="ctrl.model.username" required>\n' +
    '    <div ng-messages="workerForm.username.$error" ng-if="ctrl.submitted || workerForm.username.$dirty">\n' +
    '      <div ng-message="required">A username is required.</div>\n' +
    '    </div>\n' +
    '  </md-input-container>\n' +
    '\n' +
    '  <md-input-container class="md-block">\n' +
    '    <label for="workername">Banner</label>\n' +
    '    <input type="text" id="banner" name="banner" ng-model="ctrl.model.banner">\n' +
    '    <div ng-messages="workerForm.banner.$error" ng-if="ctrl.submitted || workerForm.banner.$dirty"></div>\n' +
    '  </md-input-container>\n' +
    '\n' +
    '  <md-input-container class="md-block">\n' +
    '    <label for="workername">Avatar</label>\n' +
    '    <input type="text" id="avatar" name="avatar" ng-model="ctrl.model.avatar">\n' +
    '    <div ng-messages="workerForm.avatar.$error" ng-if="ctrl.submitted || workerForm.avatar.$dirty"></div>\n' +
    '  </md-input-container>\n' +
    '\n' +
    '  <md-input-container class="md-block">\n' +
    '    <label for="workername">Phone number</label>\n' +
    '    <input type="text" id="phonenumber" name="phonenumber" ng-model="ctrl.model.phone" required>\n' +
    '    <div ng-messages="workerForm.phonenumber.$error" ng-if="ctrl.submitted || workerForm.phonenumber.$dirty">\n' +
    '      <div ng-message="required">A phone number is required.</div>\n' +
    '    </div>\n' +
    '  </md-input-container>\n' +
    '\n' +
    '  <md-input-container class="md-block">\n' +
    '    <label for="workername">Email</label>\n' +
    '    <input type="text" id="email" name="email" ng-model="ctrl.model.email" required>\n' +
    '    <div ng-messages="workerForm.email.$error" ng-if="ctrl.submitted || workerForm.email.$dirty">\n' +
    '      <div ng-message="required">An email is required.</div>\n' +
    '    </div>\n' +
    '  </md-input-container>\n' +
    '\n' +
    '  <md-input-container class="md-block">\n' +
    '    <label for="workername">Position</label>\n' +
    '    <input type="text" id="position" name="position" ng-model="ctrl.model.position" required>\n' +
    '    <div ng-messages="workerForm.position.$error" ng-if="ctrl.submitted || workerForm.position.$dirty">\n' +
    '      <div ng-message="required">An position is required.</div>\n' +
    '    </div>\n' +
    '  </md-input-container>\n' +
    '\n' +
    '  <md-input-container class="md-block">\n' +
    '    <label for="assignee">Group</label>\n' +
    '    <md-select ng-model="ctrl.model.group" name="group" id="group">\n' +
    '       <md-option ng-repeat="group in ctrl.groups" value="{{group.id}}">{{group.name}}</md-option>\n' +
    '     </md-select>\n' +
    '  </md-input-container> \n' +
    '\n' +
    '  <md-button type="submit" class="md-raised md-primary">{{ctrl.model.id || ctrl.model.id === 0 ? \'Update\' : \'Create\'}} Worker</md-button>\n' +
    '</form>\n' +
    '</div>\n' +
    '');
}]);

},{}],61:[function(require,module,exports){
var ngModule;
try {
  ngModule = angular.module('wfm.user.directives');
} catch (e) {
  ngModule = angular.module('wfm.user.directives', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/worker-list.tpl.html',
    '<!--\n' +
    ' CONFIDENTIAL\n' +
    ' Copyright 2016 Red Hat, Inc. and/or its affiliates.\n' +
    ' This is unpublished proprietary source code of Red Hat.\n' +
    '-->\n' +
    '<md-toolbar>\n' +
    '  <div class="md-toolbar-tools">\n' +
    '    <h3>\n' +
    '      <span>Workers</span>\n' +
    '    </h3>\n' +
    '  </div>\n' +
    '</md-toolbar>\n' +
    '\n' +
    '<form action="#" class="persistent-search">\n' +
    '  <label for="search"><i class="material-icons">search</i></label>\n' +
    '  <input type="text" name="search" placeholder="Search" ng-model="searchValue" ng-change="ctrl.applyFilter(searchValue)">\n' +
    '</form>\n' +
    '\n' +
    '<md-list>\n' +
    '  <md-list-item class="md-2-line" ng-click="ctrl.selectWorker($event, user)"  ng-repeat="user in ctrl.workers" ng-class="{active: ctrl.selected.id === user.id}">\n' +
    '    <img alt="user.name" ng-src="{{user.avatar}}" class="md-avatar" />\n' +
    '    <div class="md-list-item-text">\n' +
    '      <h3>{{user.name}}</h3>\n' +
    '      <p>{{user.position}}</p>\n' +
    '    </div>\n' +
    '    <md-divider></md-divider>\n' +
    '  </md-list-item>\n' +
    '</md-list>\n' +
    '');
}]);

},{}],62:[function(require,module,exports){
var ngModule;
try {
  ngModule = angular.module('wfm.user.directives');
} catch (e) {
  ngModule = angular.module('wfm.user.directives', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/worker.tpl.html',
    '<!--\n' +
    ' CONFIDENTIAL\n' +
    ' Copyright 2016 Red Hat, Inc. and/or its affiliates.\n' +
    ' This is unpublished proprietary source code of Red Hat.\n' +
    '-->\n' +
    '<md-content class="wfm-maincol-scroll wfm-maincol-scroll_with-menu">\n' +
    '  <div class="user-info-header" ng-style="ctrl.style">\n' +
    '    <h1 class="md-display-1">{{ctrl.worker.name}}</h1>\n' +
    '  </div>\n' +
    '  <md-list>\n' +
    '    <md-list-item class="md-2-line" >\n' +
    '      <md-icon md-font-set="material-icons">person</md-icon>\n' +
    '      <div class="md-list-item-text">\n' +
    '        <h3>{{ctrl.worker.username}}</h3>\n' +
    '        <p>Username</p>\n' +
    '      </div>\n' +
    '      <md-divider></md-divider>\n' +
    '    </md-list-item>\n' +
    '\n' +
    '    <md-list-item class="md-2-line" >\n' +
    '      <md-icon md-font-set="material-icons">phone</md-icon>\n' +
    '      <div class="md-list-item-text">\n' +
    '        <h3>{{ctrl.worker.phone}}</h3>\n' +
    '        <p>Phone Number</p>\n' +
    '      </div>\n' +
    '      <md-divider></md-divider>\n' +
    '    </md-list-item>\n' +
    '\n' +
    '    <md-list-item class="md-2-line" >\n' +
    '      <md-icon md-font-set="material-icons">email</md-icon>\n' +
    '      <div class="md-list-item-text">\n' +
    '        <h3>{{ctrl.worker.email}}</h3>\n' +
    '        <p>Email</p>\n' +
    '      </div>\n' +
    '      <md-divider></md-divider>\n' +
    '    </md-list-item>\n' +
    '\n' +
    '    <md-list-item class="md-2-line" >\n' +
    '      <md-icon md-font-set="material-icons">portrait</md-icon>\n' +
    '      <div class="md-list-item-text">\n' +
    '        <h3>{{ctrl.worker.position}}</h3>\n' +
    '        <p>Position</p>\n' +
    '      </div>\n' +
    '      <md-divider></md-divider>\n' +
    '    </md-list-item>\n' +
    '\n' +
    '    <md-list-item class="md-2-line" >\n' +
    '      <md-icon md-font-set="material-icons">group</md-icon>\n' +
    '      <div class="md-list-item-text">\n' +
    '        <h3>{{ctrl.group.name}}</h3>\n' +
    '        <p>Group</p>\n' +
    '      </div>\n' +
    '      <md-divider></md-divider>\n' +
    '    </md-list-item>\n' +
    '\n' +
    '    <md-subheader class="md-no-sticky">Notes</md-subheader>\n' +
    '    <p class="md-body-1" layout-padding layout-margin>{{ctrl.worker.notes}}</p>\n' +
    '  </md-content>\n' +
    '');
}]);

},{}],63:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

var ngModule = angular.module('wfm.user.directives', ['wfm.core.mediator']);
module.exports = 'wfm.user.directives';

require('../../dist');

ngModule.directive('workerList', function($templateCache, mediator) {
  return {
    restrict: 'E'
  , template: $templateCache.get('wfm-template/worker-list.tpl.html')
  , scope: {
      workers : '=',
      selectedModel: '='
    }
  , controller: function($scope) {
      var self = this;
      self.workers = $scope.workers;
      self.selected = $scope.selectedModel;
      self.selectWorker = function(event, worker) {
        mediator.publish('wfm:worker:selected', worker);
        event.preventDefault();
        event.stopPropagation();
      }
      self.isWorkerShown = function(worker) {
        return self.shownWorker === worker;
      };

      self.applyFilter = function(term) {
        term = term.toLowerCase();
        self.workers = $scope.workers.filter(function(worker) {
          return String(worker.id).indexOf(term) !== -1
            || String(worker.name).toLowerCase().indexOf(term) !== -1;
        });
      };
    }
  , controllerAs: 'ctrl'
  };
})
.directive('worker', function($templateCache, mediator) {
  return {
    restrict: 'E'
  , template: $templateCache.get('wfm-template/worker.tpl.html')
  , scope: {
      worker : '=',
      group : '='
    }
  , controller: function($scope) {
      var self = this;
      self.worker = $scope.worker;
      self.group = $scope.group;
      var bannerUrl = self.worker.banner || self.worker.avatar;
      self.style = {
        'background-image': 'url(' + bannerUrl + ')',
        'background-position': self.worker.banner ? 'center center' : 'top center',
        'background-size': self.worker.banner ? 'auto' : 'contain',
        'background-repeat': 'no-repeat'
      }
    }
  , controllerAs: 'ctrl'
  };
})
.directive('workerForm', function($templateCache, mediator) {
  return {
    restrict: 'E'
  , template: $templateCache.get('wfm-template/worker-form.tpl.html')
  , scope: {
      worker : '=value',
      groups : '='
    }
  , controller: function($scope) {
      var self = this;
      self.groups = $scope.groups;
      self.model = angular.copy($scope.worker);
      self.submitted = false;
      self.selectWorker = function(event, worker) {
        if(worker.id) {
          mediator.publish('wfm:worker:selected', worker);
        }
        else {
          mediator.publish('wfm:worker:list');
        }
        event.preventDefault();
        event.stopPropagation();
      }
      self.done = function(isValid) {
        self.submitted = true;
        if (isValid) {
          if (!self.model.id && self.model.id !== 0) {
            mediator.publish('wfm:worker:created', self.model);
          } else {
            mediator.publish('wfm:worker:updated', self.model);
          }
        }
      }
    }
  , controllerAs: 'ctrl'
  };
})
.directive('groupList', function($templateCache, mediator) {
  return {
    restrict: 'E'
  , template: $templateCache.get('wfm-template/group-list.tpl.html')
  , scope: {
      groups : '=',
      selectedModel: '='
    }
  , controller: function($scope) {
      var self = this;
      self.groups = $scope.groups;
      self.selected = $scope.selectedModel;
      self.selectGroup = function(event, group) {
        mediator.publish('wfm:group:selected', group);
        event.preventDefault();
        event.stopPropagation();
      }
      self.isGroupShown = function(group) {
        return self.shownGroup === group;
      };

      self.applyFilter = function(term) {
        term = term.toLowerCase();
        self.groups = $scope.groups.filter(function(group) {
          return String(group.id).indexOf(term) !== -1
            || String(group.name).toLowerCase().indexOf(term) !== -1;
        });
      };
    }
  , controllerAs: 'ctrl'
  };
})
.directive('group', function($templateCache, mediator) {
  return {
    restrict: 'E'
  , template: $templateCache.get('wfm-template/group.tpl.html')
  , scope: {
      group : '=',
      members : '='
    }
  , controller: function($scope) {
      var self = this;
      self.group = $scope.group;
      self.members = $scope.members;
      self.selectMember = function(event, member) {
        mediator.publish('wfm:worker:selected', member);
        event.preventDefault();
        event.stopPropagation();
      }
    }
  , controllerAs: 'ctrl'
  };
})
.directive('groupForm', function($templateCache, mediator) {
    return {
      restrict: 'E'
    , template: $templateCache.get('wfm-template/group-form.tpl.html')
    , scope: {
        group : '=value'
      }
    , controller: function($scope) {
        var self = this;
        self.model = angular.copy($scope.group);
        self.submitted = false;
        self.selectGroup = function(event, group) {
          if(group.id) {
            mediator.publish('wfm:group:selected', group);
          }
          else {
            mediator.publish('wfm:group:list');
          }
          event.preventDefault();
          event.stopPropagation();
        }
        self.done = function(isValid) {
          self.submitted = true;
          if (isValid) {
            if (!self.model.id && self.model.id !== 0) {
              mediator.publish('wfm:group:created', self.model);
            } else {
              mediator.publish('wfm:group:updated', self.model);
            }
          }
        }
      }
    , controllerAs: 'ctrl'
    };
  });

},{"../../dist":59}],64:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

var ngModule = angular.module('wfm.user.services', ['wfm.core.mediator'])
module.exports = 'wfm.user.services';

var UserClient = require('../user/user-client'),
    GroupClient = require('../group/group-client'),
    MembershipClient = require('../membership/membership-client');
 
function wrapClient($q, client, methodNames) {
  var wrapper = {};
  methodNames.forEach(function(methodName) {
    wrapper[methodName] = function() {
      return $q.when(client[methodName].apply(client, arguments));
    }
  });
  return wrapper;
}

ngModule.factory('userClient', function($q, mediator) {
  var methodNames = ['create', 'read', 'update', 'delete', 'list', 'auth', 'hasSession', 'clearSession', 'verify', 'getProfile'];
  var userClient = wrapClient($q, new UserClient(mediator), methodNames);
  return userClient;
});

ngModule.factory('groupClient', function($q, mediator) {
  var methodNames = ['create', 'read', 'update', 'delete', 'list', 'membership'];
  var groupClient = wrapClient($q, new GroupClient(mediator), methodNames);
  return groupClient;
});

ngModule.factory('membershipClient', function($q, mediator) {
  var methodNames = ['create', 'read', 'update', 'delete', 'list', 'membership'];
  var groupClient = wrapClient($q, new MembershipClient(mediator), methodNames);
  return groupClient;
});

},{"../group/group-client":67,"../membership/membership-client":69,"../user/user-client":71}],65:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

module.exports = 'wfm.user';

angular.module('wfm.user', [
  require('./directive')
, require('./service.js')
])

},{"./directive":63,"./service.js":64}],66:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

module.exports = {
  apiPath: '/api/wfm/group'
}

},{}],67:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

var q = require('q');
var _ = require('lodash');
var config = require('./config-group');

var GroupClient = function(mediator) {
  this.mediator = mediator;
  this.initComplete = false;
  this.initPromise = this.init();
};

var xhr = function(_options) {
  var defaultOptions = {
    path: '/',
    method: 'get',
    contentType: 'application/json'
  }
  var options = _.defaults(_options, defaultOptions);
  var deferred = q.defer();
  $fh.cloud(options, function(res) {
    deferred.resolve(res);
  }, function(message, props) {
    var e = new Error(message);
    e.props = props;
    deferred.reject(e);
  });
  return deferred.promise;
};

GroupClient.prototype.init = function() {
  var deferred = q.defer();
  var self = this;
  $fh.on('fhinit', function(error, host) {
    if (error) {
      deferred.reject(new Error(error));
      return;
    }
    self.appid = $fh.getFHParams().appid;
    self.initComplete = true;
    deferred.resolve();
  });
  return deferred.promise;
}

GroupClient.prototype.list = function() {
  return xhr({
    path: config.apiPath
  });
};

GroupClient.prototype.read = function(id) {
  return xhr({
    path: config.apiPath + '/' + id
  });
};

GroupClient.prototype.update = function(group) {
  var self = this;
  return xhr({
    path: config.apiPath + '/' + group.id,
    method: 'put',
    data: group
  });
};

GroupClient.prototype.create = function(group) {
  return xhr({
    path: config.apiPath,
    method: 'post',
    data: group
  });
};

GroupClient.prototype.delete = function(group) {
  var self = this;
  return xhr({
    path: config.apiPath + '/' + group.id,
    method: 'delete',
    data: group
  });
};

module.exports = function(mediator) {
  return new GroupClient(mediator);
}

},{"./config-group":66,"lodash":"lodash","q":"q"}],68:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

module.exports = {
  apiPath: '/api/wfm/membership'
}

},{}],69:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

var q = require('q');
var _ = require('lodash');
var config = require('./config-membership');

var MembershipClient = function(mediator) {
  this.mediator = mediator;
  this.initComplete = false;
  this.initPromise = this.init();
};

var xhr = function(_options) {
  var defaultOptions = {
    path: '/',
    method: 'get',
    contentType: 'application/json'
  }
  var options = _.defaults(_options, defaultOptions);
  var deferred = q.defer();
  $fh.cloud(options, function(res) {
    deferred.resolve(res);
  }, function(message, props) {
    var e = new Error(message);
    e.props = props;
    deferred.reject(e);
  });
  return deferred.promise;
};

MembershipClient.prototype.init = function() {
  var deferred = q.defer();
  var self = this;
  $fh.on('fhinit', function(error, host) {
    if (error) {
      deferred.reject(new Error(error));
      return;
    }
    self.appid = $fh.getFHParams().appid;
    self.initComplete = true;
    deferred.resolve();
  });
  return deferred.promise;
}

MembershipClient.prototype.list = function() {
  return xhr({
    path: config.apiPath
  });
};

MembershipClient.prototype.read = function(id) {
  return xhr({
    path: config.apiPath + '/' + id
  });
};

MembershipClient.prototype.update = function(membership) {
  var self = this;
  return xhr({
    path: config.apiPath + '/' + membership.id,
    method: 'put',
    data: membership
  });
};

MembershipClient.prototype.create = function(membership) {
  return xhr({
    path: config.apiPath,
    method: 'post',
    data: membership
  });
};

MembershipClient.prototype.delete = function(membership) {
  var self = this;
  return xhr({
    path: config.apiPath + '/' + membership.id,
    method: 'delete',
    data: membership
  });
};

module.exports = function(mediator) {
  return new MembershipClient(mediator);
}

},{"./config-membership":68,"lodash":"lodash","q":"q"}],70:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

module.exports = {
  apiHost: 'http://localhost:8080',
  apiPath: '/api/wfm/user',
  authpolicyPath: '/box/srv/1.1/admin/authpolicy'
}

},{}],71:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

var q = require('q');
var _ = require('lodash');
var config = require('./config-user');

var UserClient = function(mediator) {
  this.mediator = mediator;
  this.initComplete = false;
  this.initPromise = this.init();
};

var xhr = function(_options) {
  var defaultOptions = {
    path: '/',
    method: 'get',
    contentType: 'application/json'
  }
  var options = _.defaults(_options, defaultOptions);
  var deferred = q.defer();
  $fh.cloud(options, function(res) {
    deferred.resolve(res);
  }, function(message, props) {
    var e = new Error(message);
    e.props = props;
    deferred.reject(e);
  });
  return deferred.promise;
};

var storeProfile = function(profileData) {
  localStorage.setItem('fh.wfm.profileData', JSON.stringify(profileData));
};

var retrieveProfileData = function() {
  var json = localStorage.getItem('fh.wfm.profileData');
  return json ? JSON.parse(json) : null;
}

UserClient.prototype.init = function() {
  var deferred = q.defer();
  var self = this;
  $fh.on('fhinit', function(error, host) {
    if (error) {
      deferred.reject(new Error(error));
      return;
    }
    self.appid = $fh.getFHParams().appid;
    self.initComplete = true;
    deferred.resolve();
  });
  return deferred.promise;
}

UserClient.prototype.list = function() {
  return xhr({
    path: config.apiPath
  });
};

UserClient.prototype.read = function(id) {
  return xhr({
    path: config.apiPath + '/' + id
  });
};

UserClient.prototype.update = function(user) {
  var self = this;
  return xhr({
    path: config.apiPath + '/' + user.id,
    method: 'put',
    data: user
  });
};

UserClient.prototype.delete = function(user) {
  var self = this;
  return xhr({
    path: config.apiPath + '/' + user.id,
    method: 'delete',
    data: user
  });
};

UserClient.prototype.create = function(user) {
  return xhr({
    path: config.apiPath,
    method: 'post',
    data: user
  });
};

UserClient.prototype.auth = function(username, password) {
  var deferred = q.defer();
  var self = this;
  this.initPromise.then(function() {
    $fh.auth({
      policyId: 'wfm',
      clientToken: self.appid,
      params: {
        userId: username,
        password: password
      }
    }, function (res) {
      // res.sessionToken; // The platform session identifier
      // res.authResponse; // The authetication information returned from the authetication service.
      var profileData = res.authResponse;
      if (typeof profileData === 'string' || profileData instanceof String) {
        try {
          profileData = JSON.parse(profileData);
        } catch(e) {
          console.error(e)
          console.log('Unable to parse the $fh.auth response. Using a workaround');
          profileData = JSON.parse(profileData.replace(/,\s/g, ',').replace(/[^,={}]+/g, '"$&"').replace(/=/g, ':'))
        }
      }
      storeProfile(profileData);
      self.mediator.publish('wfm:auth:profile:change', profileData);
      deferred.resolve(res);
    }, function (msg, err) {
      console.log(msg, err);
      var errorMsg = err.message;
      /* Possible errors:
      unknown_policyId - The policyId provided did not match any defined policy. Check the Auth Policies defined. See Auth Policies Administration
      user_not_found - The Auth Policy associated with the policyId provided has been set up to require that all users authenticating exist on the platform, but this user does not exists.
      user_not_approved - - The Auth Policy associated with the policyId provided has been set up to require that all users authenticating are in a list of approved users, but this user is not in that list.
      user_disabled - The user has been disabled from logging in.
      user_purge_data - The user has been flagged for data purge and all local data should be deleted.
      device_disabled - The device has been disabled. No user or apps can log in from the requesting device.
      device_purge_data - The device has been flagged for data purge and all local data should be deleted.
      */
      if (errorMsg == "user_purge_data" || errorMsg == "device_purge_data") {
        // TODO: User or device has been black listed from administration console and all local data should be wiped
        console.log('User or device has been black listed from administration console and all local data should be wiped');
      } else {
        console.log("Authentication failed - " + errorMsg);
        deferred.reject(errorMsg);
      }
    });
  })
  return deferred.promise;
}

UserClient.prototype.hasSession = function() {
  var deferred = q.defer();
  $fh.auth.hasSession(function(err, exists){
    if(err) {
      console.log('Failed to check session: ', err);
      deferred.reject(err);
    } else if (exists){
      //user is already authenticated
      //optionally we can also verify the session is acutally valid from client. This requires network connection.
      deferred.resolve(true)
    } else {
      deferred.resolve(false);
    }
  });
  return deferred.promise;
}

UserClient.prototype.clearSession = function() {
  var deferred = q.defer();
  var self = this;
  $fh.auth.clearSession(function(err){
    if(err) {
      console.log('Failed to clear session: ', err);
      deferred.reject(err);
    } else {
      storeProfile(null);
      self.mediator.publish('wfm:auth:profile:change', null);
      deferred.resolve(true);
    }
  });
  return deferred.promise;
}

UserClient.prototype.verify = function() {
  var deferred = q.defer();
  $fh.auth.verify(function(err, valid){
    if(err){
      console.log('failed to verify session');
      deferred.reject(err);
      return;
    } else if(valid) {
      console.log('session is valid');
      deferred.resolve(true)
    } else {
      console.log('session is not valid');
      deferred.resolve(false);
    }
  });
  return deferred.promise;
}

UserClient.prototype.getProfile = function() {
  return q.when(retrieveProfileData());
}

module.exports = function(mediator) {
  return new UserClient(mediator);
}

},{"./config-user":70,"lodash":"lodash","q":"q"}],72:[function(require,module,exports){
require('./vehicle-inspection-form.tpl.html.js');
require('./vehicle-inspection.tpl.html.js');

},{"./vehicle-inspection-form.tpl.html.js":73,"./vehicle-inspection.tpl.html.js":74}],73:[function(require,module,exports){
var ngModule;
try {
  ngModule = angular.module('wfm.workorder');
} catch (e) {
  ngModule = angular.module('wfm.workorder', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/vehicle-inspection-form.tpl.html',
    '<!--\n' +
    ' CONFIDENTIAL\n' +
    ' Copyright 2016 Red Hat, Inc. and/or its affiliates.\n' +
    ' This is unpublished proprietary source code of Red Hat.\n' +
    '-->\n' +
    '  <div layout="row" class="wfm-inspection-row">\n' +
    '    <div flex="40" layout="row" layout-align="start center">\n' +
    '      <span class="md-body-2">\n' +
    '        <md-icon md-font-set="material-icons">local_gas_station</md-icon>\n' +
    '        Fuel (%)\n' +
    '      </span>\n' +
    '    </div>\n' +
    '    <md-slider flex md-discrete ng-model="ctrl.model.fuel" step="25" min="0" max="100" aria-label="rating">\n' +
    '    </md-slider>\n' +
    '  </div>\n' +
    '\n' +
    '    <md-divider></md-divider>\n' +
    '\n' +
    '  <div layout="row" class="wfm-inspection-row">\n' +
    '    <div flex="30" layout="row" layout-align="start center">\n' +
    '      <span class="md-body-2">\n' +
    '        <md-icon md-font-set="material-icons">album</md-icon>\n' +
    '        Tires\n' +
    '      </span>\n' +
    '    </div>\n' +
    '    <div flex layout-align="start start">\n' +
    '      <md-radio-group layout ng-model="ctrl.model.tires">\n' +
    '        <md-radio-button ng-value="false" >Fail</md-radio-button>\n' +
    '        <md-radio-button ng-value="true"> Pass </md-radio-button>\n' +
    '      </md-radio-group>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '\n' +
    '    <md-divider></md-divider>\n' +
    '\n' +
    '  <div layout="row" class="wfm-inspection-row">\n' +
    '    <div flex="30" layout="row" layout-align="start center">\n' +
    '      <span class="md-body-2">\n' +
    '        <md-icon md-font-set="material-icons">brightness_low</md-icon>\n' +
    '        Lights\n' +
    '      </span>\n' +
    '    </div>\n' +
    '    <div flex layout-align="start start">\n' +
    '      <md-radio-group layout ng-model="ctrl.model.lights">\n' +
    '        <md-radio-button ng-value="false">Fail</md-radio-button>\n' +
    '        <md-radio-button ng-value="true"> Pass </md-radio-button>\n' +
    '      </md-radio-group>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '\n' +
    '\n' +
    '    <div class="workflow-actions md-padding md-whiteframe-z4">\n' +
    '      <md-button class="md-primary md-hue-1" ng-click="ctrl.back($event)">Back</md-button>\n' +
    '      <md-button class="md-primary" ng-click="ctrl.done($event)">Continue</md-button>\n' +
    '    </div><!-- workflow-actions-->\n' +
    '');
}]);

},{}],74:[function(require,module,exports){
var ngModule;
try {
  ngModule = angular.module('wfm.workorder');
} catch (e) {
  ngModule = angular.module('wfm.workorder', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/vehicle-inspection.tpl.html',
    '<!--\n' +
    ' CONFIDENTIAL\n' +
    ' Copyright 2016 Red Hat, Inc. and/or its affiliates.\n' +
    ' This is unpublished proprietary source code of Red Hat.\n' +
    '-->\n' +
    '\n' +
    '  <md-subheader>Vehicle Inspection</md-subheader>\n' +
    '\n' +
    '  <md-list class="risk-assessment">\n' +
    '\n' +
    '    <md-list-item class="md-2-line" >\n' +
    '      <md-icon md-font-set="material-icons">local_gas_station</md-icon>\n' +
    '      <div class="md-list-item-text">\n' +
    '        <h3>{{vehicleInspection.fuel}} %</h3>\n' +
    '        <p>Fuel</p>\n' +
    '      </div>\n' +
    '    <md-divider></md-divider>\n' +
    '    </md-list-item>\n' +
    '\n' +
    '    <md-list-item class="md-2-line" >\n' +
    '      <md-icon md-font-set="material-icons" ng-if="vehicleInspection.tires" class="success">check_circle</md-icon>\n' +
    '      <md-icon md-font-set="material-icons" ng-if="! vehicleInspection.tires" class="danger">cancel</md-icon>\n' +
    '      <div class="md-list-item-text">\n' +
    '        <h3 ng-if="vehicleInspection.tires">Pass</h3>\n' +
    '        <h3 ng-if="! vehicleInspection.tires">Fail</h3>\n' +
    '        <p>Tires</p>\n' +
    '      </div>\n' +
    '    <md-divider></md-divider>\n' +
    '    </md-list-item>\n' +
    '\n' +
    '    <md-list-item class="md-2-line" >\n' +
    '      <md-icon md-font-set="material-icons" ng-if="vehicleInspection.lights" class="success">check_circle</md-icon>\n' +
    '      <md-icon md-font-set="material-icons" ng-if="! vehicleInspection.lights" class="danger">cancel</md-icon>\n' +
    '      <div class="md-list-item-text">\n' +
    '        <h3 ng-if="vehicleInspection.lights">Pass</h3>\n' +
    '        <h3 ng-if="! vehicleInspection.lights">Fail</h3>\n' +
    '        <p>Lights</p>\n' +
    '      </div>\n' +
    '    </md-list-item>\n' +
    '\n' +
    '</md-list>\n' +
    '');
}]);

},{}],75:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

var _ = require('lodash');

var ngModule = angular.module('wfm.vehicle-inspection', ['wfm.core.mediator']);

require('../../dist');

ngModule.directive('vehicleInspection', function($templateCache, mediator) {
  return {
    restrict: 'E'
  , template: $templateCache.get('wfm-template/vehicle-inspection.tpl.html')
  , scope: {
      vehicleInspection: '=value'
    }
  };
})

ngModule.directive('vehicleInspectionForm', function($templateCache, mediator) {
  return {
    restrict: 'E'
  , template: $templateCache.get('wfm-template/vehicle-inspection-form.tpl.html')
  , scope: {
    }
  , controller: function() {
    var self = this;
    self.model = {};
    self.back = function(event) {
      mediator.publish('wfm:workflow:step:back');
      event.preventDefault();
      event.stopPropagation();
    }
    self.done = function(event) {
      mediator.publish('wfm:workflow:step:done', self.model);
      event.preventDefault();
      event.stopPropagation();
    }
  }
  , controllerAs: 'ctrl'
  };
})

module.exports = 'wfm.vehicle-inspection';

},{"../../dist":72,"lodash":"lodash"}],76:[function(require,module,exports){
require('./workflow-form.tpl.html.js');
require('./workflow-progress.tpl.html.js');
require('./workflow-step-detail.tpl.html.js');
require('./workflow-step-form.tpl.html.js');

},{"./workflow-form.tpl.html.js":77,"./workflow-progress.tpl.html.js":78,"./workflow-step-detail.tpl.html.js":79,"./workflow-step-form.tpl.html.js":80}],77:[function(require,module,exports){
var ngModule;
try {
  ngModule = angular.module('wfm.workflow.directives');
} catch (e) {
  ngModule = angular.module('wfm.workflow.directives', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/workflow-form.tpl.html',
    '<!--\n' +
    ' CONFIDENTIAL\n' +
    ' Copyright 2016 Red Hat, Inc. and/or its affiliates.\n' +
    ' This is unpublished proprietary source code of Red Hat.\n' +
    '-->\n' +
    '<md-toolbar class="content-toolbar md-primary">\n' +
    '  <div class="md-toolbar-tools">\n' +
    '    <h3>{{ctrl.model.id ? \'Update\' : \'Create\'}} workflow</h3>\n' +
    '    <span flex></span>\n' +
    '    <md-button class="md-icon-button" aria-label="Close" ng-click="ctrl.selectWorkflow($event, workflow)">\n' +
    '      <md-icon md-font-set="material-icons">close</md-icon>\n' +
    '    </md-button>\n' +
    '  </div>\n' +
    '</md-toolbar>\n' +
    '\n' +
    '<div class="wfm-maincol-scroll">\n' +
    '<form name="workflowForm" ng-submit="ctrl.done(workflowForm.$valid)" novalidate layout-padding layout-margin>\n' +
    '\n' +
    '<div>\n' +
    '  <md-input-container class="md-block">\n' +
    '    <label>Title</label>\n' +
    '    <input type="text" id="title" name="title" ng-model="ctrl.model.title" required>\n' +
    '    <div ng-messages="workflow.title.$error" ng-if="ctrl.submitted || workflowForm.title.$dirty">\n' +
    '      <div ng-message="required">A title is required.</div>\n' +
    '    </div>\n' +
    '  </md-input-container>\n' +
    '</div>\n' +
    '\n' +
    '  <md-button type="submit" class="md-raised md-primary">{{ctrl.model.id ? \'Update\' : \'Create\'}} Workflow</md-button>\n' +
    '</form>\n' +
    '</div>\n' +
    '');
}]);

},{}],78:[function(require,module,exports){
var ngModule;
try {
  ngModule = angular.module('wfm.workflow.directives');
} catch (e) {
  ngModule = angular.module('wfm.workflow.directives', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/workflow-progress.tpl.html',
    '<!--\n' +
    ' CONFIDENTIAL\n' +
    ' Copyright 2016 Red Hat, Inc. and/or its affiliates.\n' +
    ' This is unpublished proprietary source code of Red Hat.\n' +
    '-->\n' +
    '<div class="workflow-progress" ng-class="{close: ctrl.closed}">\n' +
    '\n' +
    '<md-button class="md-icon-button md-warm expand-collapse">\n' +
    '  <md-icon ng-show="ctrl.closed" md-font-set="material-icons" ng-click="ctrl.open()">keyboard_arrow_down</md-icon>\n' +
    '  <md-icon ng-show="!ctrl.closed" md-font-set="material-icons" ng-click="ctrl.close()">keyboard_arrow_up</md-icon>\n' +
    '</md-button>\n' +
    '\n' +
    '<div class="scroll-box">\n' +
    '  <ol>\n' +
    '    <li ng-class="{active: \'-1\' == ctrl.stepIndex, complete: -1 < ctrl.stepIndex}">\n' +
    '      <span class="md-caption"><md-icon md-font-set="material-icons">visibility</md-icon></span>Overview\n' +
    '    </li>\n' +
    '    <li ng-repeat="step in ctrl.steps" ng-class="{active: $index == ctrl.stepIndex, complete: $index < ctrl.stepIndex}">\n' +
    '      <span class="md-caption">{{$index + 1}}</span>{{step.name}}\n' +
    '    </li>\n' +
    '    <li ng-class="{active: ctrl.steps.length <= ctrl.stepIndex, complete: ctrl.steps.length <= ctrl.stepIndex}">\n' +
    '      <span class="md-caption"><md-icon md-font-set="material-icons">done</md-icon></span>Summary\n' +
    '    </li>\n' +
    '  </ol>\n' +
    '</div>\n' +
    '\n' +
    '\n' +
    '</div><!-- workflow-progress -->\n' +
    '');
}]);

},{}],79:[function(require,module,exports){
var ngModule;
try {
  ngModule = angular.module('wfm.workflow.directives');
} catch (e) {
  ngModule = angular.module('wfm.workflow.directives', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/workflow-step-detail.tpl.html',
    '<h2 class="md-title">{{step.name}}</h2>\n' +
    '<md-list>\n' +
    '  <md-list-item class="md-2-line" >\n' +
    '    <md-icon md-font-set="material-icons">label</md-icon>\n' +
    '    <div class="md-list-item-text">\n' +
    '      <h3>{{step.code}}</h3>\n' +
    '      <p>Code</p>\n' +
    '    </div>\n' +
    '  </md-list-item>\n' +
    '  <md-divider></md-divider>\n' +
    '  <md-divider></md-divider>\n' +
    '  <div ng-show="step.formId">\n' +
    '    <md-list-item class="md-2-line">\n' +
    '      <md-icon md-font-set="material-icons">label</md-icon>\n' +
    '      <div class="md-list-item-text">\n' +
    '        <h3>{{step.formId}}</h3>\n' +
    '        <p>FormId</p>\n' +
    '      </div>\n' +
    '    </md-list-item>\n' +
    '    <md-divider></md-divider>\n' +
    '  </div>\n' +
    '</md-list>\n' +
    '<div ng-show="step.templates">\n' +
    '  <div ng-show="step.templates.view">\n' +
    '    <md-list-item class="md-2-line">\n' +
    '      <md-icon md-font-set="material-icons">label</md-icon>\n' +
    '      <div class="md-list-item-text">\n' +
    '        <h3>{{step.templates.view}}</h3>\n' +
    '        <p>Template view</p>\n' +
    '      </div>\n' +
    '    </md-list-item>\n' +
    '    <md-divider></md-divider>\n' +
    '  </div>\n' +
    '  <div ng-show="step.templates.form">\n' +
    '    <md-list-item class="md-2-line">\n' +
    '      <md-icon md-font-set="material-icons">label</md-icon>\n' +
    '      <div class="md-list-item-text">\n' +
    '        <h3>{{step.templates.form}}</h3>\n' +
    '        <p>Template form</p>\n' +
    '      </div>\n' +
    '    </md-list-item>\n' +
    '    <md-divider></md-divider>\n' +
    '</div>\n' +
    '</div>\n' +
    '</md-list>\n' +
    '');
}]);

},{}],80:[function(require,module,exports){
var ngModule;
try {
  ngModule = angular.module('wfm.workflow.directives');
} catch (e) {
  ngModule = angular.module('wfm.workflow.directives', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/workflow-step-form.tpl.html',
    '<!--\n' +
    ' CONFIDENTIAL\n' +
    ' Copyright 2016 Red Hat, Inc. and/or its affiliates.\n' +
    ' This is unpublished proprietary source code of Red Hat.\n' +
    '-->\n' +
    '<md-toolbar class="content-toolbar md-primary" ng-show="step">\n' +
    '  <div class="md-toolbar-tools">\n' +
    '    <h3>Update step</h3>\n' +
    '    <span flex></span>\n' +
    '    <md-button class="md-icon-button" aria-label="Close" ng-click="ctrl.selectWorkflow($event, workflow)">\n' +
    '      <md-icon md-font-set="material-icons">close</md-icon>\n' +
    '    </md-button>\n' +
    '  </div>\n' +
    '</md-toolbar>\n' +
    '\n' +
    '<form name="workflowStepForm" ng-submit="ctrl.done(workflowStepForm.$valid)" novalidate layout-padding layout-margin>\n' +
    '\n' +
    '<div>\n' +
    '  <md-input-container class="md-block">\n' +
    '    <label>Code</label>\n' +
    '    <input type="text" id="code" name="code" ng-model="ctrl.model.step.code" required>\n' +
    '    <div ng-messages="workflow.model.step.$error" ng-if="ctrl.submitted || workflowForm.title.$dirty">\n' +
    '      <div ng-message="required">A code is required.</div>\n' +
    '    </div>\n' +
    '  </md-input-container>\n' +
    '  <md-input-container class="md-block">\n' +
    '    <label>Name</label>\n' +
    '    <input type="text" id="name" name="name" ng-model="ctrl.model.step.name" required>\n' +
    '    <div ng-messages="workflow.name.$error" ng-if="ctrl.submitted || workflowForm.name.$dirty">\n' +
    '      <div ng-message="required">A name is required.</div>\n' +
    '    </div>\n' +
    '  </md-input-container>\n' +
    '  <md-input-container class="md-block">\n' +
    '    <label>FormID</label>\n' +
    '    <input type="text" id="formId" name="formId" ng-model="ctrl.model.step.formId">\n' +
    '  </md-input-container>\n' +
    '  <md-input-container class="md-block">\n' +
    '    <label>form template</label>\n' +
    '    <input type="text" id="form" name="form" ng-model="ctrl.model.step.templates.form">\n' +
    '  </md-input-container>\n' +
    '  <md-input-container class="md-block">\n' +
    '    <label>view template</label>\n' +
    '    <input type="text" id="view" name="view" ng-model="ctrl.model.step.templates.view">\n' +
    '  </md-input-container>\n' +
    '\n' +
    '</div>\n' +
    '\n' +
    '  <md-button type="submit" class="md-raised md-primary">{{ctrl.model.isNew ? \'Add\' : \'Update\'}} step</md-button>\n' +
    '</form>\n' +
    '');
}]);

},{}],81:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

var _ = require('lodash');

var ngModule = angular.module('wfm.workflow.directives', [
  'wfm.core.mediator'
]);
module.exports = 'wfm.workflow.directives';

require('../../dist');

ngModule.directive('workflowProgress', function($templateCache, $timeout) {
  function parseStepIndex(ctrl, stepIndex) {
    ctrl.stepIndex = stepIndex;
    ctrl.step = ctrl.steps[ctrl.stepIndex];
  }
  function scrollToActive(element) {
    element = element[0];
    var active = element.querySelector('li.active');
    if (!active) {
      active = element.querySelector('li');
    };
    var scroller = element.querySelector('.scroll-box');
    var offset = active.offsetTop;
    scroller.scrollTop = offset;
  }
  return {
    restrict: 'E'
  , template: $templateCache.get('wfm-template/workflow-progress.tpl.html')
  , scope: {
      stepIndex: '=',
      workflow: '='
    }
  , link: function (scope, element, attrs) {
      $timeout(function() {
        scrollToActive(element);
      }, 0);
    }
  , controller: function($scope, $element) {
      var self = this;
      self.workflow = $scope.workflow;
      self.steps = $scope.workflow.steps;
      self.open = function() {
        self.closed = false;
      }
      self.close = function() {
        scrollToActive($element);
        self.closed = true;
      }
      parseStepIndex(self, $scope.stepIndex ? parseInt($scope.stepIndex) : 0)

      $scope.$watch('stepIndex', function() {
        console.log('stepIndex changed')
        parseStepIndex(self, $scope.stepIndex ? parseInt($scope.stepIndex) : 0);
        self.closed = true;
        $timeout(function() {
          scrollToActive($element);
        }, 0);
      });
    }
  , controllerAs: 'ctrl'
  };
})

.directive('workflowStep', function($templateRequest, $compile, mediator) {
  return {
    restrict: 'E'
  , scope: {
      step: '=' // { ..., template: "an html template to use", templatePath: "a template path to load"}
    , workorder: '='
    }
  , link: function (scope, element, attrs) {
      scope.$watch('step', function(step) {
        if (scope.step) {
          if (scope.step.formId) {
            element.html('<appform form-id="step.formId"></appform>');
            $compile(element.contents())(scope);
          } else if (scope.step.templatePath) {
            $templateRequest(scope.step.templatePath).then(function(template) {
              element.html(template);
              $compile(element.contents())(scope);
            });
          } else {
            element.html(scope.step.templates.form);
            $compile(element.contents())(scope);
          };
        };
      });
    }
  , controller: function() {
      var self = this;
      self.mediator = mediator;
    }
  , controllerAs: 'ctrl'
  };
})

.directive('workflowResult', function($compile) {
  var render = function(scope, element, attrs) {
    if (scope.workflow.steps && scope.result) {
      element.children().remove();
      scope.workflow.steps.forEach(function(step, stepIndex) {
        if (scope.result.stepResults && scope.result.stepResults[step.code]) {
          element.append('<md-divider></md-divider>');
          var template = '';
          template = '<workorder-submission-result'
          template += ' result="result.stepResults[\''+step.code+'\']"'
          template += ' step="workflow.steps[\''+stepIndex+'\']"'
          template += '></workorder-submission-result>';
          console.log(template);
          element.append(template);
        }
      });
      $compile(element.contents())(scope);
    };
  }
  return {
    restrict: 'E'
  , scope: {
      workflow: '='
    , result: '='
    }
  , link: function (scope, element, attrs) {
      render(scope, element, attrs);
    }
  };
})
.directive('workflowForm', function($templateCache, mediator) {
    return {
      restrict: 'E'
    , template: $templateCache.get('wfm-template/workflow-form.tpl.html')
    , scope: {
      workflow : '=value'
      }
    , controller: function($scope) {
        var self = this;
        self.model = angular.copy($scope.workflow);
        self.submitted = false;
        self.done = function(isValid) {
          self.submitted = true;
          if (isValid) {
            if (!self.model.id && self.model.id !== 0) {
              self.model.steps = [];
              mediator.publish('wfm:workflow:created', self.model);
            }  else {
              mediator.publish('wfm:workflow:updated', self.model);
            }
          }
        };
        self.selectWorkflow = function(event, workflow) {
          if(workflow.id) {
            mediator.publish('wfm:workflow:selected', workflow);
          }
          else {
            mediator.publish('wfm:workflow:list');
          }
          event.preventDefault();
          event.stopPropagation();
        }
      }
    , controllerAs: 'ctrl'
    };
  })
.directive('workflowStepForm', function($templateCache, mediator) {
    return {
      restrict: 'E'
    , template: $templateCache.get('wfm-template/workflow-step-form.tpl.html')
    , scope: {
      workflow : '=',
      step : '='
      }
    , controller: function($scope) {
        var self = this;
        var existingStep;
        self.submitted = false;
        if(!$scope.step){
          self.model = {
            step : {
              templates : {}
            },
            workflow : angular.copy($scope.workflow),
            isNew : true
          }
        }
        else {
          self.model = {
            workflow : angular.copy($scope.workflow),
            step : angular.copy($scope.step)
          }
          existingStep = $scope.workflow.steps.filter(function(item) {return item.code == $scope.step.code;}).length>0;
        }

        self.done = function(isValid) {
          self.submitted = true;
          if (isValid) {
              //we check if the step already exist or not, if it exsit we remove the old element
              if(existingStep){
                $scope.workflow.steps = $scope.workflow.steps.filter(function(item) {return item.code != $scope.step.code;});
              }
              //we add the new or updated step
              $scope.workflow.steps.push(self.model.step);
              mediator.publish('wfm:workflow:updated', $scope.workflow);
          }
        };

        self.selectWorkflow = function(event, workflow) {
          mediator.publish('wfm:workflow:selected', workflow);
          event.preventDefault();
          event.stopPropagation();
        }
      }
    , controllerAs: 'ctrl'
    };
  })
  .directive('workflowStepDetail', function($templateCache, mediator) {
      return {
        restrict: 'E'
      , template: $templateCache.get('wfm-template/workflow-step-detail.tpl.html')
      , scope: {
          step : '='
        }
      };
    })
;

},{"../../dist":76,"lodash":"lodash"}],82:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

var config = require('../config')
  , _ = require('lodash')
  ;

module.exports = 'wfm.workflow.sync';

function wrapManager($q, $timeout, manager) {
  var wrappedManager = _.create(manager);
  wrappedManager.new = function() {
    var deferred = $q.defer();
    $timeout(function() {
      var workflow = {
        title: ''
      };
      deferred.resolve(workflow);
    }, 0);
    return deferred.promise;
  };

  return wrappedManager;
}

angular.module('wfm.workflow.sync', [require('fh-wfm-sync')])
.factory('workflowSync', function($q, $timeout, syncService) {
  syncService.init($fh, config.syncOptions);
  var workflowSync = {};
  workflowSync.createManager = function(queryParams) {
    if (workflowSync.manager) {
      return $q.when(workflowSync.manager);
    } else {
      return workflowSync.managerPromise = syncService.manage(config.datasetId, null, queryParams)
      .then(function(manager) {
        workflowSync.manager = wrapManager($q, $timeout, manager);
        console.log('Sync is managing dataset:', config.datasetId, 'with filter: ', queryParams);
        // TODO: we should refactor these utilities functions somewhere else probably
        workflowSync.manager.stepReview = function(steps, result) {
          var stepIndex = -1;
          var complete;
          if (result && result.stepResults && result.stepResults.length !== 0) {
            complete = true;
            for (var i=0; i < steps.length; i++) {
              var step = steps[i];
              var stepResult = result.stepResults[step.code];
              if (stepResult && (stepResult.status === 'complete' || stepResult.status === 'pending')) {
                stepIndex = i;
                if (stepResult.status === 'pending') {
                  complete = false;
                }
              } else {
                break;
              };
            };
          }
          return {
            nextStepIndex: stepIndex,
            complete: complete // false is any steps are "pending"
          };
        }

        workflowSync.manager.nextStepIndex = function(steps, result) {
          return this.stepReview(steps, result).nextStepIndex;
        }

        workflowSync.manager.checkStatus = function(workorder, workflow, result) {
          var status;
          var stepReview = this.stepReview(workflow.steps, result);
          if (stepReview.nextStepIndex >= workflow.steps.length - 1 && stepReview.complete) {
            status = 'Complete';
          } else if (!workorder.assignee) {
            status = 'Unassigned';
          } else if (stepReview.nextStepIndex < 0) {
            status = 'New';
          } else {
            status = 'In Progress';
          }
          return status;
        }
        return workflowSync.manager;
      })
    }
  };
  workflowSync.removeManager = function() {
    if (workflowSync.manager) {
      return workflowSync.manager.safeStop()
      .then(function() {
        delete workflowSync.manager;
      })
    }
  };
  return workflowSync;
})
;

},{"../config":84,"fh-wfm-sync":53,"lodash":"lodash"}],83:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

module.exports = 'wfm.workflow';

angular.module('wfm.workflow', [
  require('./directive')
, require('./service.js')
])

},{"./directive":81,"./service.js":82}],84:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

module.exports = {
  apiHost: 'http://localhost:8080',
  apiPath: '/api/wfm/workflow',
  datasetId : 'workflows',
  syncOptions : {
    "sync_frequency" : 5,
    "storage_strategy": "dom",
    "do_console_log": false
  }
}

},{}],85:[function(require,module,exports){
require('./workorder-form.tpl.html.js');
require('./workorder-list.tpl.html.js');
require('./workorder.tpl.html.js');

},{"./workorder-form.tpl.html.js":86,"./workorder-list.tpl.html.js":87,"./workorder.tpl.html.js":88}],86:[function(require,module,exports){
var ngModule;
try {
  ngModule = angular.module('wfm.workorder.directives');
} catch (e) {
  ngModule = angular.module('wfm.workorder.directives', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/workorder-form.tpl.html',
    '<!--\n' +
    ' CONFIDENTIAL\n' +
    ' Copyright 2016 Red Hat, Inc. and/or its affiliates.\n' +
    ' This is unpublished proprietary source code of Red Hat.\n' +
    '-->\n' +
    '<md-toolbar class="content-toolbar md-primary">\n' +
    '  <div class="md-toolbar-tools">\n' +
    '    <h3>{{ctrl.model.id ? \'Update\' : \'Create\'}} work order ID {{ctrl.model.id}}</h3>\n' +
    '    <md-button class="md-icon-button" aria-label="{{ctrl.status}}">\n' +
    '      <workorder-status status="ctrl.status"></workorder-status>\n' +
    '    </md-button>\n' +
    '\n' +
    '    <span flex></span>\n' +
    '    <md-button class="md-icon-button" aria-label="Close" ng-click="ctrl.selectWorkorder($event, ctrl.model)">\n' +
    '      <md-icon md-font-set="material-icons">close</md-icon>\n' +
    '    </md-button>\n' +
    '  </div>\n' +
    '</md-toolbar>\n' +
    '\n' +
    '<div class="wfm-maincol-scroll">\n' +
    '<form name="workorderForm" ng-submit="ctrl.done(workorderForm.$valid)" novalidate layout-padding layout-margin>\n' +
    '\n' +
    '  <!--\n' +
    '  <md-input-container>\n' +
    '    <label for="workorderState">Status</label>\n' +
    '    <input type="text" id="inputWorkorderType" name="workorderStatus" ng-model="ctrl.model.status" disabled="true">\n' +
    '  </md-input-container>\n' +
    '  -->\n' +
    '\n' +
    '<div layout-gt-sm="row">\n' +
    '  <md-input-container class="md-block" flex-gt-sm>\n' +
    '    <label for="workorderType">Type</label>\n' +
    '    <md-select ng-model="ctrl.model.type" name="workorderType" id="workorderType">\n' +
    '       <md-option value="Job Order">Job Order</md-option>\n' +
    '       <md-option value="Type 02">Type 02</md-option>\n' +
    '       <md-option value="Type 03">Type 03</md-option>\n' +
    '       <md-option value="Type 04">Type 04</md-option>\n' +
    '     </md-select>\n' +
    '  </md-input-container>\n' +
    '\n' +
    '  <md-input-container class="md-block" flex-gt-sm>\n' +
    '    <label for="workflow">Workflow</label>\n' +
    '    <md-select ng-model="ctrl.model.workflowId" name="workflow" id="workflow" required>\n' +
    '       <md-option ng-repeat="workflow in ctrl.workflows" value="{{workflow.id}}">{{workflow.id}} - {{workflow.title}}</md-option>\n' +
    '     </md-select>\n' +
    '     <div ng-messages="workorderForm.workflow.$error" ng-if="ctrl.submitted || workorderForm.workflow.$dirty">\n' +
    '       <div ng-message="required">A workflow is required.</div>\n' +
    '     </div>\n' +
    '  </md-input-container>\n' +
    '</div>\n' +
    '\n' +
    '<div>\n' +
    '  <md-input-container class="md-block">\n' +
    '    <label for="assignee">Assignee</label>\n' +
    '    <md-select ng-model="ctrl.model.assignee" name="assignee" id="assignee">\n' +
    '       <md-option ng-repeat="worker in ctrl.workers" value="{{worker.id}}">{{worker.name}} ({{worker.position}})</md-option>\n' +
    '     </md-select>\n' +
    '  </md-input-container>\n' +
    '</div>\n' +
    '\n' +
    '<div>\n' +
    '  <md-input-container class="md-block">\n' +
    '    <label>Title</label>\n' +
    '    <input type="text" id="inputTitle" name="title" ng-model="ctrl.model.title" required>\n' +
    '    <div ng-messages="workorderForm.title.$error" ng-if="ctrl.submitted || workorderForm.title.$dirty">\n' +
    '      <div ng-message="required">A title is required.</div>\n' +
    '    </div>\n' +
    '  </md-input-container>\n' +
    '</div>\n' +
    '\n' +
    '<div>\n' +
    '  <md-input-container class="md-block">\n' +
    '    <label for="inputAddress">Address</label>\n' +
    '    <input type="text"  id="inputAddress" name="address" ng-model="ctrl.model.address" required>\n' +
    '    <div ng-messages="workorderForm.address.$error" ng-show="ctrl.submitted || workorderForm.address.$dirty">\n' +
    '      <div ng-message="required">An address is required.</div>\n' +
    '    </div>\n' +
    '  </md-input-container>\n' +
    '</div>\n' +
    '\n' +
    '<div layout-gt-sm="row">\n' +
    '  <md-input-container class="md-block" flex-gt-sm>\n' +
    '    <label for="inputAddress">Lattitude</label>\n' +
    '    <input type="text"  id="inputLattitude" name="lattitude" ng-model="ctrl.model.location[0]" required>\n' +
    '    <div ng-messages="workorderForm.lattitude.$error" ng-show="ctrl.submitted || workorderForm.lattitude.$dirty">\n' +
    '      <div ng-message="required">An lattitude is required.</div>\n' +
    '    </div>\n' +
    '  </md-input-container>\n' +
    '  <md-input-container class="md-block" flex-gt-sm>\n' +
    '    <label for="inputAddress">Longitude</label>\n' +
    '    <input type="text"  id="inputLattitude" name="longitude" ng-model="ctrl.model.location[1]" required>\n' +
    '    <div ng-messages="workorderForm.longitude.$error" ng-show="ctrl.submitted || workorderForm.longitude.$dirty">\n' +
    '      <div ng-message="required">An longitude is required.</div>\n' +
    '    </div>\n' +
    '  </md-input-container>\n' +
    '</div>\n' +
    '\n' +
    '<div layout-gt-sm="row">\n' +
    '  <md-input-container class="md-block" flex-gt-sm>\n' +
    '    <label for="inputFinishDate">Finish Date</label>\n' +
    '    <input type="date"  id="inputFinishDate" name="finishDate" ng-model="ctrl.model.finishDate" required>\n' +
    '    <div ng-messages="workorderForm.finishDate.$error" ng-show="ctrl.submitted || workorderForm.finishDate.$dirty">\n' +
    '      <div ng-message="required">A finish date is required.</div>\n' +
    '    </div>\n' +
    '  </md-input-container>\n' +
    '  <md-input-container class="md-block" flex-gt-sm>\n' +
    '    <label for="inputFinishTime" >Finish Time</label>\n' +
    '    <input type="time"  id="inputFinishTime" name="finishTime" ng-model="ctrl.model.finishTime" required>\n' +
    '    <div ng-messages="workorderForm.finishTime.$error" ng-show="ctrl.submitted || workorderForm.finishTime.$dirty">\n' +
    '      <div ng-message="required">A finish time is required.</div>\n' +
    '    </div>\n' +
    '  </md-input-container>\n' +
    '</div>\n' +
    '\n' +
    '<div>\n' +
    '  <md-input-container class="md-block" ng-class="{ \'has-error\' : workorderForm.summary.$invalid && !workorderForm.summary.$pristine }">\n' +
    '    <label for="inputSummary">Summary</label>\n' +
    '    <textarea id="inputSummary" name="summary" ng-model="ctrl.model.summary" required md-maxlength="150"></textarea>\n' +
    '\n' +
    '    <div ng-messages="workorderForm.summary.$error" ng-show="ctrl.submitted || workorderForm.summary.$dirty">\n' +
    '      <div ng-message="required">A summary date is required.</div>\n' +
    '    </div>\n' +
    '  </md-input-container>\n' +
    '</div>\n' +
    '\n' +
    '  <md-button type="submit" class="md-raised md-primary">{{ctrl.model.id ? \'Update\' : \'Create\'}} Workorder</md-button>\n' +
    '</form>\n' +
    '</div">\n' +
    '');
}]);

},{}],87:[function(require,module,exports){
var ngModule;
try {
  ngModule = angular.module('wfm.workorder.directives');
} catch (e) {
  ngModule = angular.module('wfm.workorder.directives', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/workorder-list.tpl.html',
    '<!--\n' +
    ' CONFIDENTIAL\n' +
    ' Copyright 2016 Red Hat, Inc. and/or its affiliates.\n' +
    ' This is unpublished proprietary source code of Red Hat.\n' +
    '-->\n' +
    '<md-toolbar>\n' +
    '  <div class="md-toolbar-tools">\n' +
    '    <h3>\n' +
    '      <span>Workorders</span>\n' +
    '    </h3>\n' +
    '  </div>\n' +
    '</md-toolbar>\n' +
    '\n' +
    '<form action="#" class="persistent-search" hide-xs hide-sm>\n' +
    '  <label for="search"><i class="material-icons">search</i></label>\n' +
    '  <input type="text" name="search" placeholder="Search" ng-model="searchValue" ng-change="ctrl.applyFilter(searchValue)">\n' +
    '</form>\n' +
    '\n' +
    '<md-list>\n' +
    '  <md-list-item\n' +
    '    ng-repeat="workorder in ctrl.workorders"\n' +
    '    ng-click="ctrl.selectWorkorder($event, workorder)"\n' +
    '    ng-class="{active: ctrl.selected.id === workorder.id}"\n' +
    '    class="md-3-line workorder-item"\n' +
    '  >\n' +
    '<!--\n' +
    '  TODO: change class name according to the color:\n' +
    '    "success" = green\n' +
    '    danger = "red"\n' +
    '    warning = "yellow"\n' +
    '    no class = grey\n' +
    '  -->\n' +
    '  <workorder-status class="" status="ctrl.resultMap[workorder.id].status"></workorder-status>\n' +
    '\n' +
    '    <div class="md-list-item-text">\n' +
    '      <h3>\n' +
    '        {{workorder.type}} -\n' +
    '        <span ng-if="workorder.id">{{workorder.id}}</span>\n' +
    '        <span ng-if="! workorder.id" style="font-style: italic;">&lt;local&gt;</span>\n' +
    '      </h3>\n' +
    '      <h4>{{workorder.title}}</h4>\n' +
    '      <p>{{workorder.address}}</p>\n' +
    '    </div>\n' +
    '    <md-divider></md-divider>\n' +
    '  </md-list-item>\n' +
    '</md-list>\n' +
    '');
}]);

},{}],88:[function(require,module,exports){
var ngModule;
try {
  ngModule = angular.module('wfm.workorder.directives');
} catch (e) {
  ngModule = angular.module('wfm.workorder.directives', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/workorder.tpl.html',
    '<!--\n' +
    ' CONFIDENTIAL\n' +
    ' Copyright 2016 Red Hat, Inc. and/or its affiliates.\n' +
    ' This is unpublished proprietary source code of Red Hat.\n' +
    '-->\n' +
    '  <md-list>\n' +
    '\n' +
    '    <md-list-item class="md-2-line" >\n' +
    '      <md-icon>\n' +
    '      <workorder-status status="status"></workorder-status>\n' +
    '    </md-icon>\n' +
    '        <div class="md-list-item-text">\n' +
    '           <h3>{{status || "New"}}</h3>\n' +
    '           <p>Status</p>\n' +
    '        </div>\n' +
    '      </md-list-item>\n' +
    '    </md-button>\n' +
    '    <md-divider></md-divider>\n' +
    '\n' +
    '    <md-list-item class="md-2-line md-long-text">\n' +
    '      <md-icon md-font-set="material-icons">place</md-icon>\n' +
    '      <div class="md-list-item-text">\n' +
    '         <h3>{{workorder.location[0]}}, {{workorder.location[1]}}</h3>\n' +
    '         <p>\n' +
    '           {{workorder.address}}\n' +
    '         </p>\n' +
    '      </div>\n' +
    '    </md-list-item>\n' +
    '    <md-divider></md-divider>\n' +
    '\n' +
    '    <md-list-item class="md-2-line" >\n' +
    '      <md-icon md-font-set="material-icons">assignment</md-icon>\n' +
    '      <div class="md-list-item-text">\n' +
    '        <h3>{{workorder.title}}</h3>\n' +
    '        <p>Workorder</p>\n' +
    '      </div>\n' +
    '    </md-list-item>\n' +
    '    <md-divider></md-divider>\n' +
    '\n' +
    '    <md-list-item class="md-2-line" >\n' +
    '      <md-icon md-font-set="material-icons">event</md-icon>\n' +
    '      <div class="md-list-item-text">\n' +
    '        <h3>{{workorder.startTimestamp | date:\'yyyy-MM-dd\' }}</h3>\n' +
    '        <p>Finish Date</p>\n' +
    '      </div>\n' +
    '    </md-list-item>\n' +
    '    <md-divider></md-divider>\n' +
    '\n' +
    '    <md-list-item class="md-2-line" >\n' +
    '      <md-icon md-font-set="material-icons">schedule</md-icon>\n' +
    '      <div class="md-list-item-text">\n' +
    '        <h3>{{workorder.startTimestamp | date:\'HH:mm:ss Z\' }}</h3>\n' +
    '        <p>Finish Time</p>\n' +
    '      </div>\n' +
    '    </md-list-item>\n' +
    '    <md-divider></md-divider>\n' +
    '\n' +
    '    <md-list-item class="md-2-line" ng-show="assignee && assignee.name">\n' +
    '      <md-icon md-font-set="material-icons">person</md-icon>\n' +
    '      <div class="md-list-item-text">\n' +
    '        <h3>{{assignee.name}}</h3>\n' +
    '        <p>Asignee</p>\n' +
    '      </div>\n' +
    '    </md-list-item>\n' +
    '    <md-divider></md-divider>\n' +
    '\n' +
    '  </md-list>\n' +
    '\n' +
    '  <md-subheader class="md-no-sticky">Work Summary</md-subheader>\n' +
    '  <p class="md-body-1" layout-padding layout-margin>\n' +
    '    {{workorder.summary}}\n' +
    '  </p>\n' +
    '');
}]);

},{}],89:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

var ngModule = angular.module('wfm.workorder.directives', ['wfm.core.mediator']);
module.exports = 'wfm.workorder.directives';

require('../../dist');

var getStatusIcon = function(status) {
  var statusIcon;
  switch(status) {
    case 'In Progress':
      statusIcon = 'autorenew';
      break;
    case 'Complete':
      statusIcon = 'assignment_turned_in';
      break;
    case 'Aborted':
      statusIcon = 'assignment_late';
      break;
    case 'On Hold':
      statusIcon = 'pause';
      break;
    case 'Unassigned':
      statusIcon = 'assignment_ind';
      break;
    case 'New':
      statusIcon = 'new_releases';
      break;
    default:
      statusIcon = 'radio_button_unchecked';
  }
  return statusIcon;
}

ngModule.directive('workorderList', function($templateCache, mediator) {
  return {
    restrict: 'E'
  , template: $templateCache.get('wfm-template/workorder-list.tpl.html')
  , scope: {
      workorders : '=',
      resultMap: '=',
      selectedModel: '='
    }
  , controller: function($scope) {
      var self = this;
      self.workorders = $scope.workorders;
      $scope.$watch('workorders', function() {
        self.workorders = $scope.workorders;
      })
      self.resultMap = $scope.resultMap;
      self.selected = $scope.selectedModel;
      self.selectWorkorder = function(event, workorder) {
        // self.selectedWorkorderId = workorder.id;
        mediator.publish('wfm:workorder:selected', workorder);
        event.preventDefault();
        event.stopPropagation();
      }
      self.isWorkorderShown = function(workorder) {
        return self.shownWorkorder === workorder;
      };

      self.applyFilter = function(term) {
        term = term.toLowerCase();
        self.workorders = $scope.workorders.filter(function(workorder) {
          return String(workorder.id).indexOf(term) !== -1
            || String(workorder.title).toLowerCase().indexOf(term) !== -1;
        });
      };
    }
  , controllerAs: 'ctrl'
  };
})

.directive('workorder', function($templateCache, mediator) {
  return {
    restrict: 'E'
  , template: $templateCache.get('wfm-template/workorder.tpl.html')
  , scope: {
    workorder: '=',
    assignee: '=',
    status: '='
    }
  , controller: function($scope) {
      var self = this;
      self.showSelectButton = !! $scope.$parent.workorders;
      self.selectWorkorder = function(event, workorder) {
        if(workorder.id) {
          mediator.publish('wfm:workorder:selected', workorder);
        }
        else {
          mediator.publish('wfm:workorder:list');
        }

        event.preventDefault();
        event.stopPropagation();
      }
    }
  , controllerAs: 'ctrl'
  };
})

.directive('workorderForm', function($templateCache, mediator) {
  return {
    restrict: 'E'
  , template: $templateCache.get('wfm-template/workorder-form.tpl.html')
  , scope: {
    workorder : '=value'
  , workflows: '='
  , workers: '='
  , status: '='
    }
  , controller: function($scope) {
      var self = this;
      self.model = angular.copy($scope.workorder);
      self.workflows = $scope.workflows;
      self.workers = $scope.workers;
      self.submitted = false;
      if (self.model && self.model.startTimestamp) {
        self.model.finishDate = new Date(self.model.startTimestamp);
        self.model.finishTime = new Date(self.model.startTimestamp);
      };
      self.selectWorkorder = function(event, workorder) {
        if(workorder.id) {
          mediator.publish('wfm:workorder:selected', workorder);
        }
        else {
          mediator.publish('wfm:workorder:list');
        }
        event.preventDefault();
        event.stopPropagation();
      }
      self.done = function(isValid) {
        self.submitted = true;
        if (isValid) {
          self.model.startTimestamp = new Date(self.model.finishDate); // TODO: incorporate self.model.finishTime
          self.model.startTimestamp.setHours(
            self.model.finishTime.getHours(),
            self.model.finishTime.getMinutes(),
            self.model.finishTime.getSeconds(),
            self.model.finishTime.getMilliseconds()
          );
          self.model.finishDate = new Date(self.model.startTimestamp);
          self.model.finishTime = new Date(self.model.startTimestamp);
          if (!self.model.id && self.model.id !== 0) {
            mediator.publish('wfm:workorder:created', self.model);
          } else {
            mediator.publish('wfm:workorder:updated', self.model);
          }
        }
      }
    }
  , controllerAs: 'ctrl'
  };
})

.directive('workorderStatus', function($templateCache, mediator) {
  return {
    restrict: 'E'
  , template: '<md-icon md-font-set="material-icons">{{statusIcon}}<md-tooltip>{{status}}</md-tooltip></md-icon>'
  , scope: {
      status : '=status'
    }
  , controller: function($scope) {
      $scope.statusIcon = getStatusIcon($scope.status);
    }
  , controllerAs: 'ctrl'
  }
})

.directive('workorderSubmissionResult', function($compile) {
  var render = function(scope, element, attrs) {
    if (!scope.result) {
      return;
    }
    var result = scope.result;
    var template = '';
    if (scope.step.formId) {
      var submission = result.submission;
      var tag, subId;
      if (submission._submission) {
        tag = 'submission';
        subId = submission._submission
        template = '<appform-submission submission="result.submission._submission"></appform-submission>';
      } else if (submission.submissionId) {
        template = '<appform-submission submission-id="\''+submission.submissionId+'\'"></appform-submission>';
      } else if (submission.submissionLocalId) {
        template = '<appform-submission submission-local-id="\''+submission.submissionLocalId+'\'"></appform-submission>';
      };
    } else {
      template = scope.step.templates.view;
    }
    element.append(template);
    $compile(element.contents())(scope);
  };

  return {
    restrict: 'E'
  , scope: {
      result: '='
    , step: '='
    }
  , link: function (scope, element, attrs) {
      render(scope, element, attrs);
    }
  };
})
;

},{"../../dist":85}],90:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

var config = require('../config')
  , _ = require('lodash')
  ;

module.exports = 'wfm.workorder.sync';

function wrapManager($q, $timeout, manager) {
  var wrappedManager = _.create(manager);
  wrappedManager.new = function() {
    var deferred = $q.defer();
    $timeout(function() {
      var workorder = {
        type: 'Job Order'
      , status: 'New'
      };
      deferred.resolve(workorder);
    }, 0);
    return deferred.promise;
  };

  return wrappedManager;
}

angular.module('wfm.workorder.sync', [require('fh-wfm-sync')])
.factory('workorderSync', function($q, $timeout, syncService) {
  syncService.init($fh, config.syncOptions);
  var workorderSync = {};
  workorderSync.createManager = function(queryParams) {
    if (workorderSync.manager) {
      return $q.when(workorderSync.manager);
    } else {
      return workorderSync.managerPromise = syncService.manage(config.datasetId, null, queryParams)
      .then(function(manager) {
        workorderSync.manager = wrapManager($q, $timeout, manager);
        console.log('Sync is managing dataset:', config.datasetId, 'with filter: ', queryParams);
        return workorderSync.manager;
      })
    }
  };
  workorderSync.removeManager = function() {
    if (workorderSync.manager) {
      return workorderSync.manager.safeStop()
      .then(function() {
        delete workorderSync.manager;
      })
    }
  }
  return workorderSync;
})
;

},{"../config":92,"fh-wfm-sync":53,"lodash":"lodash"}],91:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

module.exports = 'wfm.workorder';

angular.module('wfm.workorder', [
  require('./directive')
, require('./sync-service')
])

},{"./directive":89,"./sync-service":90}],92:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

module.exports = {
  apiHost: 'http://localhost:8080',
  apiPath: '/api/wfm/workorder',
  datasetId : 'workorders',
  syncOptions : {
    "sync_frequency" : 5,
    "storage_strategy": "dom",
    "do_console_log": false
  }
}

},{}],93:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = setTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    clearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        setTimeout(drainQueue, 0);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],94:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

var angular = require('angular');
var _ = require('lodash');
require('feedhenry');

angular.module('wfm-mobile', [
, require('angular-messages')
, require('angular-ui-router')
, require('angular-material')
, require('fh-wfm-message')
, require('fh-wfm-mediator')
, require('fh-wfm-workorder')
, require('fh-wfm-result')
, require('fh-wfm-workflow')
, require('fh-wfm-appform')
, require('fh-wfm-risk-assessment')
, require('fh-wfm-vehicle-inspection')
, require('fh-wfm-user')
, require('fh-wfm-map')
, require('fh-wfm-file')
, require('fh-wfm-camera')

, require('./workorder/workorder')
, require('./workflow/workflow')
, require('./message/message')
, require('./map/map')
, require('./setting/setting')
, require('./auth/auth')
, require('./calendar/calendar')
, require('./file/file')
])

.config(function($stateProvider, $urlRouterProvider) {
  // if none of the states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/workorders');

  $stateProvider
    .state('app', {
      abstract: true,
      templateUrl: 'app/main.tpl.html',
      resolve: {
        profileData: function(userClient) {
          return userClient.getProfile();
        },
        syncManagers: function(syncPool, profileData) {
          return syncPool.syncManagerMap(profileData);
        },
        workorderManager: function(syncManagers) {
          return syncManagers.workorders;
        },
        workflowManager: function(syncManagers) {
          return syncManagers.workflows;
        },
        resultManager: function(syncManagers) {
          return syncManagers.result;
        },
        messageManager: function(syncManagers) {
          return syncManagers.messages;
        }
      },
      controller: function($rootScope, $scope, $state, $mdSidenav, mediator, profileData, userClient, workorderSync, messageSync) {
        $scope.profileData = profileData;
        $scope.toggleSidenav = function(event, menuId) {
          $mdSidenav(menuId).toggle();
          event.stopPropagation();
        };
        $scope.navigateTo = function(state, params) {
          if (state) {
            $state.go(state, params);
          }
        }
      }
    })
})

.run(function($rootScope, $state, mediator, syncPool) {
  mediator.subscribe('wfm:auth:profile:change', function(_profileData) {
    if (_profileData === null) { // a logout
      syncPool.removeManagers().then(function() {
        $state.go('app.login', undefined, {reload: true});
      }, function(err) {
        console.err(err);
      });
    } else {
      syncPool.syncManagerMap(_profileData)  // created managers will be cached
      .then(syncPool.forceSync)
      .then(function() {
        if ($rootScope.toState) {
          $state.go($rootScope.toState, $rootScope.toParams, {reload: true});
          delete $rootScope.toState;
          delete $rootScope.toParams;
        } else {
          $state.go('app.workorders', undefined, {reload: true});
        };
      });
    };
  });
})

.factory('syncPool', function($q, $state, mediator, workorderSync, workflowSync, resultSync, messageSync) {
  var syncPool = {};

  syncPool.removeManagers = function() {
    var promises = [];
    // add any additonal manager cleanups here
    // TODO: replace this with a mediator event that modules can listen for
    promises.push(workorderSync.removeManager());
    promises.push(messageSync.removeManager());
    promises.push(workflowSync.removeManager());
    // promises.push(resultSync.removeManager());
    return $q.all(promises);
  }

  syncPool.syncManagerMap = function(profileData) {
    if (! profileData) {
      return $q.when({});
    }
    var promises = [];
    if (profileData && profileData.id) {
      var filter = {
        key: 'assignee',
        value: profileData.id
      };
      var messageFilter = {
        key: 'receiverId',
        value: profileData.id
      }
    };
    // add any additonal manager creates here
    promises.push(workorderSync.createManager({filter: filter}));
    promises.push(workflowSync.createManager());
    promises.push(messageSync.createManager({filter: messageFilter}));
    promises.push(resultSync.managerPromise);
    return $q.all(promises).then(function(managers) {
      var map = {};
      managers.forEach(function(managerWrapper) {
        map[managerWrapper.manager.datasetId] = managerWrapper;
      });
      map.workorders.manager.publishRecordDeltaReceived(mediator)
      return map;
    });
  }

  syncPool.forceSync = function(managers) {
    var promises = [];
    _.forOwn(managers, function(manager) {
      promises.push(
        manager.forceSync()
          .then(manager.waitForSync)
          .then(function() {
            return manager;
          })
      );
    });
    return $q.all(promises)
  }

  return syncPool;
})

.run(function($rootScope, $state, $q, mediator, userClient) {
  var initPromises = [];
  var initListener = mediator.subscribe('promise:init', function(promise) {
    initPromises.push(promise);
  });
  mediator.publish('init');
  console.log(initPromises.length, 'init promises to resolve.');
  var all = (initPromises.length > 0) ? $q.all(initPromises) : $q.when(null);
  all.then(function() {
    $rootScope.ready = true;
    console.log(initPromises.length, 'init promises resolved.');
    mediator.remove('promise:init', initListener.id);
    return null;
  });

  $rootScope.$on('$stateChangeStart', function(e, toState, toParams, fromState, fromParams) {
    if(toState.name !== "app.login"){
      userClient.hasSession().then(function(hasSession) {
        if(!hasSession) {
          e.preventDefault();
          $rootScope.toState = toState;
          $rootScope.toParams = toParams;
          $state.go('app.login');
        }
      });
    };
  });
  $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
    console.error('State change error: ', error, {
      event: event,
      toState: toState,
      toParams: toParams,
      fromState: fromState,
      fromParams: fromParams,
      error: error
    });
    if (error['get stack']) {
      console.error(error['get stack']());
    }
    event.preventDefault();
  });
});

},{"./auth/auth":95,"./calendar/calendar":96,"./file/file":97,"./map/map":98,"./message/message":99,"./setting/setting":100,"./workflow/workflow":101,"./workorder/workorder":102,"angular":"angular","angular-material":"angular-material","angular-messages":"angular-messages","angular-ui-router":"angular-ui-router","feedhenry":"feedhenry","fh-wfm-appform":11,"fh-wfm-camera":18,"fh-wfm-file":23,"fh-wfm-map":29,"fh-wfm-mediator":31,"fh-wfm-message":38,"fh-wfm-result":41,"fh-wfm-risk-assessment":47,"fh-wfm-user":65,"fh-wfm-vehicle-inspection":75,"fh-wfm-workflow":83,"fh-wfm-workorder":91,"lodash":"lodash"}],95:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

module.exports = 'wfm-mobile.auth';

angular.module('wfm-mobile.auth', [
  'ui.router',
, 'wfm.core.mediator'
])

.config(function($stateProvider) {
  $stateProvider
    .state('app.login', {
        url: '/login',
        templateUrl: 'app/auth/login.tpl.html',
        controller: 'LoginCtrl as ctrl',
        resolve: {
          hasSession: function(userClient) {
            return userClient.hasSession();
          }
        }
      })
    .state('app.profile', {
        url: '/profile',
        templateUrl: 'app/auth/profile.tpl.html',
        controller: 'ProfileCtrl as ctrl',
      })
})

.controller('LoginCtrl', function(userClient, hasSession) {
  var self = this;

  self.hasSession = hasSession;

  self.loginMessages = {success: false, error: false};

  self.login = function(valid) {
    if (valid) {
      userClient.auth(self.username, self.password)
      .then(function() {
        self.loginMessages.success = true;
      }, function(err) {
        console.log(err);
        self.loginMessages.error = true;
      });
    }
  }

  self.logout = function() {
    userClient.clearSession()
  }
})

.controller('ProfileCtrl', function() {
})
;

},{}],96:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

module.exports = 'wfm-mobile.calendar';

angular.module('wfm-mobile.calendar', [
  'ui.router',
, 'wfm.core.mediator'
])

.config(function($stateProvider) {
  $stateProvider
    .state('app.calendar', {
      url: '/calendar',
      resolve: {
        workorders: function(workorderManager) {
          return workorderManager.list();
        }
      },
      templateUrl: 'app/calendar/calendar.tpl.html',
      controller: 'calendarCtrl as ctrl',
    })
})

.controller('calendarCtrl', function (workorders) {
  this.workorders = workorders;
})

;

},{}],97:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

module.exports = 'wfm-mobile.file';

var _ = require('lodash');

angular.module('wfm-mobile.file', [
  'ui.router',
  'wfm.core.mediator'
])

.config(function($stateProvider) {
  $stateProvider
  .state('app.file', {
    url: '/file',
    templateUrl: 'app/file/file-list.tpl.html',
    controller: 'FileListCtrl as ctrl',
    resolve: {
      profileData: function(userClient) {
        return userClient.getProfile();
      },
      files: function(fileClient, profileData) {
        return fileClient.list(profileData.id);
      }
    }
  })
})

.controller('FileListCtrl', function($state, $window, $mdDialog, mobileCamera, desktopCamera, fileClient, files, profileData) {
  self = this;
  self.files = files.slice().reverse();

  var captureThenUpload = function() {
    if ($window.cordova) {
      return mobileCamera.capture()
      .then(function(capture) {
        return fileClient.uploadFile(profileData.id, capture.fileURI, {fileName: capture.fileName}).then(mobileCamera.clearCache);
      })
    } else {
      return desktopCamera.capture()
      .then(function(dataUrl) {
        return fileClient.uploadDataUrl(profileData.id, dataUrl)
      })
    }
  }

  self.capturePhoto = function() {
    captureThenUpload().then(function() {
      console.log('Photo upload complete');
      $state.go('app.file', undefined, {reload:true});
      return;
    }, function(error) {
      console.error(error);
    });
  }
})
;

},{"lodash":"lodash"}],98:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

module.exports = 'wfm-mobile.map';

angular.module('wfm-mobile.map', [
  'ui.router',
, 'wfm.core.mediator'
])

.config(function($stateProvider) {
  $stateProvider
    .state('app.map', {
      url: '/map',
      resolve: {
        workorders: function(workorderManager) {
          return workorderManager.list();
        }
      },
      templateUrl: 'app/map/map.tpl.html',
      controller: 'MapCtrl as ctrl',
    })
})

.controller('MapCtrl', function ($window, $document, $timeout, workorders) {
  this.center = [49.28, -123.12];
  this.workorders = workorders;
})

;

},{}],99:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

module.exports = 'wfm-mobile.messages';

angular.module('wfm-mobile.messages', [
  'ui.router',
, 'wfm.core.mediator'
])

.config(function($stateProvider) {
  $stateProvider
    .state('app.message', {
        url: '/messages',
        templateUrl: 'app/message/message-list.tpl.html',
        controller: 'MessagesCtrl as ctrl',
        resolve: {
          messages: function(messageManager) {
            return messageManager.list();
          }
      }
    })
    .state('app.message-detail', {
      url: '/message/:messageId',
      templateUrl: 'app/message/message-detail.tpl.html',
      controller: 'MessageDetailController as ctrl',
      resolve: {
        message: function($stateParams, messageManager) {
          return messageManager.read($stateParams.messageId);
        }
      }
    })
})
.run(function($state, mediator) {
  mediator.subscribe('wfm:message:selected', function(message) {
    $state.go('app.message-detail', {
      messageId: message.id
    });
  });
})
.controller('MessagesCtrl', function($scope, $filter, mediator, messages) {
  var self = this;
  self.messages = messages;
})
.controller('MessageDetailController', function ($scope, $state, mediator, message, messageManager) {
  mediator.subscribeForScope('wfm:message:close:' + message.id, $scope, function() {
    $state.go('app.message');
  })
  var self = this;
  self.message = message;
  message.status = "read";
  messageManager.update(message);
})
;

module.exports = 'wfm-mobile.messages';

},{}],100:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

module.exports = 'wfm-mobile.setting';

angular.module('wfm-mobile.setting', [
  'ui.router',
, 'wfm.core.mediator'
])

.config(function($stateProvider) {
  $stateProvider
    .state('app.setting', {
        url: '/settings',
        templateUrl: 'app/setting/setting-list.tpl.html',
        controller: 'SettingCtrl as ctrl',
      })
})

.controller('SettingCtrl', function($document) {
  var self = this;
  self.enabled = $document[0].body.classList.contains('wfm-night');;

  self.setNightTimeMode = function() {
    console.log(self.enabled);
    if (self.enabled) {
      $document[0].body.classList.add('wfm-night');
    } else {
      $document[0].body.classList.remove('wfm-night');
    }
  }
})
;

},{}],101:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';
var _ = require('lodash');

angular.module('wfm-mobile.workflow', [
  'ui.router',
, 'wfm.core.mediator'
])

.run(function($state, mediator) {
  mediator.subscribe('wfm:workorder:selected', function(workorder) {
    $state.go('app.workflow.begin', {
      workorderId: workorder.id
    });
  });
})

.config(function($stateProvider) {
  $stateProvider
    .state('app.workflow', {
      abstract: true,
      url: '/workflow/workorder/:workorderId',
      resolve: {
        workflows: function(workflowManager) {
          return workflowManager.list();
        },
        workorder: function($stateParams, workorderManager) {
          return workorderManager.read($stateParams.workorderId);
        },
        result: function($stateParams, resultManager, workflowManager, workorder, workflows) {
          var workflow = workflows.filter(function(workflow) {
            return String(workflow.id) === String(workorder.workflowId);
          });
          if (workflow.length) {
            workflow = workflow[0];
          }
          return resultManager.getByWorkorderId($stateParams.workorderId)
            .then(function(result) {
              var oldStatus = result.status;
              result.status = workflowManager.checkStatus(workorder, workflow, result);
              if (oldStatus !== result.status) {
                var create = ! (result.id || result._localuid || result.id === 0);
                if (create) {
                  return resultManager.create(result)
                } else {
                  return resultManager.update(result);
                };
              } else {
                return result;
              };
            });
        }
      },
      views: {
        '': {
          template: '<div ui-view></div>'
        },
        'toolbar@app': {
          templateUrl: 'app/workflow/workflow-toolbar.tpl.html',
          controller: function($scope, workorder) {
            $scope.workorder = workorder;
          },
          resolve: {
            workorder: function($stateParams, workorderManager) {
              return workorderManager.read($stateParams.workorderId);
            }
          }
        }
      }
    })
    .state('app.workflow.begin', {
      url: '/begin',
      templateUrl: 'app/workflow/workflow-begin.tpl.html',
      controller: 'WorkflowController as ctrl',
    })
    .state('app.workflow.steps', {
      url: '/steps',
      templateUrl: 'app/workflow/workflow-steps.tpl.html',
      controller: 'WorkflowStepController as ctrl',
    })
    .state('app.workflow.complete', {
      url: '/complete',
      templateUrl: 'app/workflow/workflow-complete.tpl.html',
      controller: 'WorkflowController as ctrl',
    })
})

.controller('WorkflowController', function($state, workflowManager, resultManager, workflows, workorder, result) {
  var self = this;
  console.log('workorder', workorder)
  self.workorder = workorder;
  var workflow = workflows.filter(function(workflow) {
    return String(workflow.id) === String(workorder.workflowId);
  });
  if (workflow.length) {
    self.workflow = workflow[0];
  }

  self.result = result;

  self.stepIndex = workflowManager.nextStepIndex(self.workflow.steps, self.result);

  self.begin = function() {
    $state.go('app.workflow.steps', {
      workorderId: workorder.id
    });
  }
})


.controller('WorkflowStepController', function($scope, $state, mediator, workflowManager, resultManager, appformClient, workflows, workorder, result, profileData) {
  console.log('manager', resultManager);
  var self = this;

  self.workorder = workorder;
  var workflow = workflows.filter(function(workflow) {
    return String(workflow.id) === String(workorder.workflowId);
  });
  if (workflow.length) {
    self.workflow = workflow[0];
  }
  self.result = result;
  self.result.stepResults = self.result.stepResults || {};
  self.result.workorderId = self.result.workorderId || workorder.id;

  self.result.status = workflowManager.checkStatus(self.workorder, self.workflow, self.result);

  self.stepIndex = workflowManager.nextStepIndex(self.workflow.steps, self.result);

  self.next = function() {
    self.stepIndex++;
    if (self.stepIndex < self.workflow.steps.length) {
      self.stepCurrent = self.workflow.steps[self.stepIndex];
    } else {
      $state.go('app.workflow.complete', {
        workorderId: self.workorder.id
      });
    }
  };

  self.next();

  var backSubscription = mediator.subscribe('wfm:workflow:step:back', function(submission) {
    self.stepIndex--;
    if (self.stepIndex >= 0) {
      self.stepCurrent = self.workflow.steps[self.stepIndex];
    } else {
      $state.go('app.workflow.begin', {
        workorderId: self.workorder.id
      });
    }
  });

  var stepSubscription = mediator.subscribe('wfm:workflow:step:done', function(submission) {
    console.log('Done called for workflow step', self.stepCurrent.code);
    var step = angular.copy(self.stepCurrent);
    delete step['$$hashKey']; // this property breaks appform submissions;
    var create = ! (self.result.id || self.result._localuid || self.result.id === 0);
    var stepResult = {
      step: step,
      submission: submission,
      type: step.formId ? 'appform' : 'static',
      status: step.formId ? 'pending' : 'complete',
      timestamp: new Date().getTime(),
      submitter: profileData.id
    }
    self.result.stepResults[step.code] = stepResult;
    self.result.status = workflowManager.checkStatus(self.workorder, self.workflow, self.result);
    var promise = ! create ? resultManager.update(self.result) : resultManager.create(self.result)
    promise.then(function(promiseResult) {
      if (create) {
        resultManager.stream.filter(function(notification) {
          return notification.code === 'remote_update_applied'
            && notification.message.hash === self.result._localuid;
        }).take(1).subscribe(function(notification) {
          self.result.id = notification.uid;
        });
      }
      console.log('result save successful');
      if (step.formId) {
        appformClient.syncStepResult(workorder, stepResult)
        .then(function(remoteSubmission) {
          self.next();
        }, function(error) {
          console.error(error);
          throw error;
        });
      } else {
        self.next();
      }
    }, function(error) {
      console.error(error);
      throw error;
    });
  });

  $scope.$on("$destroy", function() {
    mediator.remove('wfm:workflow:step:done', stepSubscription.id);
    mediator.remove('wfm:workflow:step:back', backSubscription.id);
  });
})

module.exports = 'wfm-mobile.workflow';

},{"lodash":"lodash"}],102:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

angular.module('wfm-mobile.workorders', [
  'ui.router'
])

.config(function($stateProvider) {
  $stateProvider
    .state('app.workorders', {
        url: '/workorders',
        templateUrl: 'app/workorder/workorder-list.tpl.html',
        controller: 'WorkordersCtrl as ctrl',
        resolve: {
          workorders: function(workorderManager) {
            return workorderManager.list();
          },
          resultMap: function(resultManager) {
            return resultManager.list()
            .then(function(results) {
              var map = {};
              results.forEach(function(result) {
                map[result.workorderId] = result;
              });
              return map;
            })
          }
        }
      })
})

.controller('WorkordersCtrl', function($scope, $filter, workorderManager, mediator, workorders, resultMap) {
  var self = this;
  self.workorders = workorders;
  self.resultMap = resultMap;
  mediator.subscribeForScope('wfm:auth:profile:change', $scope, function(profileData) {
    if (!profileData) {
      self.workorders = [];
    }
  })
  mediator.subscribeForScope('wfm:sync:record_delta_received:workorders', $scope, function(notification) {
    console.log(notification);
     workorderManager.list().then(function(workorders) {
       self.workorders = workorders;
     })
  })
})

;

module.exports = 'wfm-mobile.workorders';

},{}]},{},[94])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvZmgtd2ZtLWFwcGZvcm0vZGlzdC9hcHBmb3JtLWZpZWxkLWRhdGUudHBsLmh0bWwuanMiLCJub2RlX21vZHVsZXMvZmgtd2ZtLWFwcGZvcm0vZGlzdC9hcHBmb3JtLWZpZWxkLWRhdGV0aW1lLnRwbC5odG1sLmpzIiwibm9kZV9tb2R1bGVzL2ZoLXdmbS1hcHBmb3JtL2Rpc3QvYXBwZm9ybS1maWVsZC1sb2NhdGlvbi50cGwuaHRtbC5qcyIsIm5vZGVfbW9kdWxlcy9maC13Zm0tYXBwZm9ybS9kaXN0L2FwcGZvcm0tZmllbGQtbnVtYmVyLnRwbC5odG1sLmpzIiwibm9kZV9tb2R1bGVzL2ZoLXdmbS1hcHBmb3JtL2Rpc3QvYXBwZm9ybS1maWVsZC1waG90by50cGwuaHRtbC5qcyIsIm5vZGVfbW9kdWxlcy9maC13Zm0tYXBwZm9ybS9kaXN0L2FwcGZvcm0tZmllbGQtdGltZS50cGwuaHRtbC5qcyIsIm5vZGVfbW9kdWxlcy9maC13Zm0tYXBwZm9ybS9kaXN0L2FwcGZvcm0tZmllbGQudHBsLmh0bWwuanMiLCJub2RlX21vZHVsZXMvZmgtd2ZtLWFwcGZvcm0vZGlzdC9hcHBmb3JtLXN1Ym1pc3Npb24udHBsLmh0bWwuanMiLCJub2RlX21vZHVsZXMvZmgtd2ZtLWFwcGZvcm0vZGlzdC9hcHBmb3JtLnRwbC5odG1sLmpzIiwibm9kZV9tb2R1bGVzL2ZoLXdmbS1hcHBmb3JtL2Rpc3QvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZmgtd2ZtLWFwcGZvcm0vbGliL2FuZ3VsYXIvYXBwZm9ybS1uZy5qcyIsIm5vZGVfbW9kdWxlcy9maC13Zm0tYXBwZm9ybS9saWIvYW5ndWxhci9kaXJlY3RpdmUuanMiLCJub2RlX21vZHVsZXMvZmgtd2ZtLWFwcGZvcm0vbGliL2FuZ3VsYXIvc2VydmljZS5qcyIsIm5vZGVfbW9kdWxlcy9maC13Zm0tYXBwZm9ybS9saWIvYXBwZm9ybS1tZWRpYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9maC13Zm0tYXBwZm9ybS9saWIvYXBwZm9ybS5qcyIsIm5vZGVfbW9kdWxlcy9maC13Zm0tY2FtZXJhL2Rpc3QvY2FtZXJhLnRwbC5odG1sLmpzIiwibm9kZV9tb2R1bGVzL2ZoLXdmbS1jYW1lcmEvZGlzdC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9maC13Zm0tY2FtZXJhL2xpYi9hbmd1bGFyL2NhbWVyYS1uZy5qcyIsIm5vZGVfbW9kdWxlcy9maC13Zm0tY2FtZXJhL2xpYi9hbmd1bGFyL2RpcmVjdGl2ZS5qcyIsIm5vZGVfbW9kdWxlcy9maC13Zm0tY2FtZXJhL2xpYi9hbmd1bGFyL3NlcnZpY2UuanMiLCJub2RlX21vZHVsZXMvZmgtd2ZtLWNhbWVyYS9saWIvY2FtZXJhLmpzIiwibm9kZV9tb2R1bGVzL2ZoLXdmbS1maWxlL2xpYi9hbmd1bGFyL2RpcmVjdGl2ZS5qcyIsIm5vZGVfbW9kdWxlcy9maC13Zm0tZmlsZS9saWIvYW5ndWxhci9maWxlLW5nLmpzIiwibm9kZV9tb2R1bGVzL2ZoLXdmbS1maWxlL2xpYi9jb25maWcuanMiLCJub2RlX21vZHVsZXMvZmgtd2ZtLWZpbGUvbGliL2ZpbGUuanMiLCJub2RlX21vZHVsZXMvZmgtd2ZtLW1hcC9kaXN0L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2ZoLXdmbS1tYXAvZGlzdC93b3Jrb3JkZXItbWFwLnRwbC5odG1sLmpzIiwibm9kZV9tb2R1bGVzL2ZoLXdmbS1tYXAvbGliL2FuZ3VsYXIvZGlyZWN0aXZlLmpzIiwibm9kZV9tb2R1bGVzL2ZoLXdmbS1tYXAvbGliL2FuZ3VsYXIvbWFwLW5nLmpzIiwibm9kZV9tb2R1bGVzL2ZoLXdmbS1tYXAvbGliL2FuZ3VsYXIvc2VydmljZS5qcyIsIm5vZGVfbW9kdWxlcy9maC13Zm0tbWVkaWF0b3IvbGliL2FuZ3VsYXIvbWVkaWF0b3ItbmcuanMiLCJub2RlX21vZHVsZXMvZmgtd2ZtLW1lZGlhdG9yL2xpYi9tZWRpYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9maC13Zm0tbWVzc2FnZS9kaXN0L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2ZoLXdmbS1tZXNzYWdlL2Rpc3QvbWVzc2FnZS1kZXRhaWwudHBsLmh0bWwuanMiLCJub2RlX21vZHVsZXMvZmgtd2ZtLW1lc3NhZ2UvZGlzdC9tZXNzYWdlLWZvcm0udHBsLmh0bWwuanMiLCJub2RlX21vZHVsZXMvZmgtd2ZtLW1lc3NhZ2UvZGlzdC9tZXNzYWdlLWxpc3QudHBsLmh0bWwuanMiLCJub2RlX21vZHVsZXMvZmgtd2ZtLW1lc3NhZ2UvbGliL2FuZ3VsYXIvZGlyZWN0aXZlLmpzIiwibm9kZV9tb2R1bGVzL2ZoLXdmbS1tZXNzYWdlL2xpYi9hbmd1bGFyL21lc3NhZ2UtbmcuanMiLCJub2RlX21vZHVsZXMvZmgtd2ZtLW1lc3NhZ2UvbGliL2FuZ3VsYXIvc3luYy1zZXJ2aWNlLmpzIiwibm9kZV9tb2R1bGVzL2ZoLXdmbS1tZXNzYWdlL2xpYi9jb25maWcuanMiLCJub2RlX21vZHVsZXMvZmgtd2ZtLXJlc3VsdC9saWIvYW5ndWxhci9yZXN1bHQtbmcuanMiLCJub2RlX21vZHVsZXMvZmgtd2ZtLXJlc3VsdC9saWIvYW5ndWxhci9zZXJ2aWNlLmpzIiwibm9kZV9tb2R1bGVzL2ZoLXdmbS1yZXN1bHQvbGliL2NvbmZpZy5qcyIsIm5vZGVfbW9kdWxlcy9maC13Zm0tcmlzay1hc3Nlc3NtZW50L2Rpc3QvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZmgtd2ZtLXJpc2stYXNzZXNzbWVudC9kaXN0L3Jpc2stYXNzZXNzbWVudC1mb3JtLnRwbC5odG1sLmpzIiwibm9kZV9tb2R1bGVzL2ZoLXdmbS1yaXNrLWFzc2Vzc21lbnQvZGlzdC9yaXNrLWFzc2Vzc21lbnQudHBsLmh0bWwuanMiLCJub2RlX21vZHVsZXMvZmgtd2ZtLXJpc2stYXNzZXNzbWVudC9saWIvYW5ndWxhci9yaXNrLWFzc2Vzc21lbnQtbmcuanMiLCJub2RlX21vZHVsZXMvZmgtd2ZtLXNpZ25hdHVyZS9kaXN0L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2ZoLXdmbS1zaWduYXR1cmUvZGlzdC9zaWduYXR1cmUtZm9ybS50cGwuaHRtbC5qcyIsIm5vZGVfbW9kdWxlcy9maC13Zm0tc2lnbmF0dXJlL2Rpc3Qvc2lnbmF0dXJlLnRwbC5odG1sLmpzIiwibm9kZV9tb2R1bGVzL2ZoLXdmbS1zaWduYXR1cmUvbGliL2FuZ3VsYXIvc2lnbmF0dXJlLW5nLmpzIiwibm9kZV9tb2R1bGVzL2ZoLXdmbS1zaWduYXR1cmUvbGliL2NhbnZhcy1kcmF3ci5qcyIsIm5vZGVfbW9kdWxlcy9maC13Zm0tc3luYy9saWIvYW5ndWxhci9zeW5jLW5nLmpzIiwibm9kZV9tb2R1bGVzL2ZoLXdmbS1zeW5jL2xpYi9jbGllbnQuanMiLCJub2RlX21vZHVsZXMvZmgtd2ZtLXN5bmMvbGliL2NvbmZpZy5qcyIsIm5vZGVfbW9kdWxlcy9maC13Zm0tdXNlci9kaXN0L2dyb3VwLWZvcm0udHBsLmh0bWwuanMiLCJub2RlX21vZHVsZXMvZmgtd2ZtLXVzZXIvZGlzdC9ncm91cC1saXN0LnRwbC5odG1sLmpzIiwibm9kZV9tb2R1bGVzL2ZoLXdmbS11c2VyL2Rpc3QvZ3JvdXAudHBsLmh0bWwuanMiLCJub2RlX21vZHVsZXMvZmgtd2ZtLXVzZXIvZGlzdC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9maC13Zm0tdXNlci9kaXN0L3dvcmtlci1mb3JtLnRwbC5odG1sLmpzIiwibm9kZV9tb2R1bGVzL2ZoLXdmbS11c2VyL2Rpc3Qvd29ya2VyLWxpc3QudHBsLmh0bWwuanMiLCJub2RlX21vZHVsZXMvZmgtd2ZtLXVzZXIvZGlzdC93b3JrZXIudHBsLmh0bWwuanMiLCJub2RlX21vZHVsZXMvZmgtd2ZtLXVzZXIvbGliL2FuZ3VsYXIvZGlyZWN0aXZlLmpzIiwibm9kZV9tb2R1bGVzL2ZoLXdmbS11c2VyL2xpYi9hbmd1bGFyL3NlcnZpY2UuanMiLCJub2RlX21vZHVsZXMvZmgtd2ZtLXVzZXIvbGliL2FuZ3VsYXIvdXNlci1uZy5qcyIsIm5vZGVfbW9kdWxlcy9maC13Zm0tdXNlci9saWIvZ3JvdXAvY29uZmlnLWdyb3VwLmpzIiwibm9kZV9tb2R1bGVzL2ZoLXdmbS11c2VyL2xpYi9ncm91cC9ncm91cC1jbGllbnQuanMiLCJub2RlX21vZHVsZXMvZmgtd2ZtLXVzZXIvbGliL21lbWJlcnNoaXAvY29uZmlnLW1lbWJlcnNoaXAuanMiLCJub2RlX21vZHVsZXMvZmgtd2ZtLXVzZXIvbGliL21lbWJlcnNoaXAvbWVtYmVyc2hpcC1jbGllbnQuanMiLCJub2RlX21vZHVsZXMvZmgtd2ZtLXVzZXIvbGliL3VzZXIvY29uZmlnLXVzZXIuanMiLCJub2RlX21vZHVsZXMvZmgtd2ZtLXVzZXIvbGliL3VzZXIvdXNlci1jbGllbnQuanMiLCJub2RlX21vZHVsZXMvZmgtd2ZtLXZlaGljbGUtaW5zcGVjdGlvbi9kaXN0L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2ZoLXdmbS12ZWhpY2xlLWluc3BlY3Rpb24vZGlzdC92ZWhpY2xlLWluc3BlY3Rpb24tZm9ybS50cGwuaHRtbC5qcyIsIm5vZGVfbW9kdWxlcy9maC13Zm0tdmVoaWNsZS1pbnNwZWN0aW9uL2Rpc3QvdmVoaWNsZS1pbnNwZWN0aW9uLnRwbC5odG1sLmpzIiwibm9kZV9tb2R1bGVzL2ZoLXdmbS12ZWhpY2xlLWluc3BlY3Rpb24vbGliL2FuZ3VsYXIvdmVoaWNsZS1pbnNwZWN0aW9uLW5nLmpzIiwibm9kZV9tb2R1bGVzL2ZoLXdmbS13b3JrZmxvdy9kaXN0L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2ZoLXdmbS13b3JrZmxvdy9kaXN0L3dvcmtmbG93LWZvcm0udHBsLmh0bWwuanMiLCJub2RlX21vZHVsZXMvZmgtd2ZtLXdvcmtmbG93L2Rpc3Qvd29ya2Zsb3ctcHJvZ3Jlc3MudHBsLmh0bWwuanMiLCJub2RlX21vZHVsZXMvZmgtd2ZtLXdvcmtmbG93L2Rpc3Qvd29ya2Zsb3ctc3RlcC1kZXRhaWwudHBsLmh0bWwuanMiLCJub2RlX21vZHVsZXMvZmgtd2ZtLXdvcmtmbG93L2Rpc3Qvd29ya2Zsb3ctc3RlcC1mb3JtLnRwbC5odG1sLmpzIiwibm9kZV9tb2R1bGVzL2ZoLXdmbS13b3JrZmxvdy9saWIvYW5ndWxhci9kaXJlY3RpdmUuanMiLCJub2RlX21vZHVsZXMvZmgtd2ZtLXdvcmtmbG93L2xpYi9hbmd1bGFyL3NlcnZpY2UuanMiLCJub2RlX21vZHVsZXMvZmgtd2ZtLXdvcmtmbG93L2xpYi9hbmd1bGFyL3dvcmtmbG93LW5nLmpzIiwibm9kZV9tb2R1bGVzL2ZoLXdmbS13b3JrZmxvdy9saWIvY29uZmlnLmpzIiwibm9kZV9tb2R1bGVzL2ZoLXdmbS13b3Jrb3JkZXIvZGlzdC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9maC13Zm0td29ya29yZGVyL2Rpc3Qvd29ya29yZGVyLWZvcm0udHBsLmh0bWwuanMiLCJub2RlX21vZHVsZXMvZmgtd2ZtLXdvcmtvcmRlci9kaXN0L3dvcmtvcmRlci1saXN0LnRwbC5odG1sLmpzIiwibm9kZV9tb2R1bGVzL2ZoLXdmbS13b3Jrb3JkZXIvZGlzdC93b3Jrb3JkZXIudHBsLmh0bWwuanMiLCJub2RlX21vZHVsZXMvZmgtd2ZtLXdvcmtvcmRlci9saWIvYW5ndWxhci9kaXJlY3RpdmUuanMiLCJub2RlX21vZHVsZXMvZmgtd2ZtLXdvcmtvcmRlci9saWIvYW5ndWxhci9zeW5jLXNlcnZpY2UuanMiLCJub2RlX21vZHVsZXMvZmgtd2ZtLXdvcmtvcmRlci9saWIvYW5ndWxhci93b3Jrb3JkZXItbmcuanMiLCJub2RlX21vZHVsZXMvZmgtd2ZtLXdvcmtvcmRlci9saWIvY29uZmlnLmpzIiwibm9kZV9tb2R1bGVzL2dydW50LWJyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsInNyYy9hcHAvYXBwLmpzIiwic3JjL2FwcC9hdXRoL2F1dGguanMiLCJzcmMvYXBwL2NhbGVuZGFyL2NhbGVuZGFyLmpzIiwic3JjL2FwcC9maWxlL2ZpbGUuanMiLCJzcmMvYXBwL21hcC9tYXAuanMiLCJzcmMvYXBwL21lc3NhZ2UvbWVzc2FnZS5qcyIsInNyYy9hcHAvc2V0dGluZy9zZXR0aW5nLmpzIiwic3JjL2FwcC93b3JrZmxvdy93b3JrZmxvdy5qcyIsInNyYy9hcHAvd29ya29yZGVyL3dvcmtvcmRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3VkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hDQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaklBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEZBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakJBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFEQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDelNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOU1BO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakJBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0lBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9NQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBuZ01vZHVsZTtcbnRyeSB7XG4gIG5nTW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ3dmbS5hcHBmb3JtLmRpcmVjdGl2ZXMnKTtcbn0gY2F0Y2ggKGUpIHtcbiAgbmdNb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgnd2ZtLmFwcGZvcm0uZGlyZWN0aXZlcycsIFtdKTtcbn1cblxubmdNb2R1bGUucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbiAoJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KCd3Zm0tdGVtcGxhdGUvYXBwZm9ybS1maWVsZC1kYXRlLnRwbC5odG1sJyxcbiAgICAnPCEtLVxcbicgK1xuICAgICcgQ09ORklERU5USUFMXFxuJyArXG4gICAgJyBDb3B5cmlnaHQgMjAxNiBSZWQgSGF0LCBJbmMuIGFuZC9vciBpdHMgYWZmaWxpYXRlcy5cXG4nICtcbiAgICAnIFRoaXMgaXMgdW5wdWJsaXNoZWQgcHJvcHJpZXRhcnkgc291cmNlIGNvZGUgb2YgUmVkIEhhdC5cXG4nICtcbiAgICAnLS0+XFxuJyArXG4gICAgJ1xcbicgK1xuICAgICc8bWQtaW5wdXQtY29udGFpbmVyIGNsYXNzPVwibWQtYmxvY2tcIiBjbGFzcz1cInt7ZmllbGQucHJvcHMuZmllbGRDb2RlfX0gYXBwZm9ybS1maWVsZC1udW1iZXJcIj5cXG4nICtcbiAgICAnICA8bGFiZWwgZm9yPVwiaW5wdXREYXRlXCIgY2xhc3M9XCJcIj57e2ZpZWxkLnByb3BzLm5hbWV9fTwvbGFiZWw+XFxuJyArXG4gICAgJyAgPGlucHV0IHR5cGU9XCJkYXRlXCJcXG4nICtcbiAgICAnICAgIHBsYWNlaG9sZGVyPVwie3tjdHJsLmZpZWxkLnByb3BzLmhlbHBUZXh0fX1cIlxcbicgK1xuICAgICcgICAgbmFtZT1cImlucHV0RGF0ZVwiXFxuJyArXG4gICAgJyAgICBuZy1tb2RlbD1cImN0cmwubW9kZWwuZGF0ZVwiXFxuJyArXG4gICAgJyAgICBuZy1jaGFuZ2U9XCJjdHJsLnVwZGF0ZU1vZGVsKClcIlxcbicgK1xuICAgICcgICAgbWluPVwie3tmaWVsZC5wcm9wcy5maWVsZE9wdGlvbnMudmFsaWRhdGlvbi5taW59fVwiXFxuJyArXG4gICAgJyAgICBtYXg9XCJ7e2ZpZWxkLnByb3BzLmZpZWxkT3B0aW9ucy52YWxpZGF0aW9uLm1heH19XCJcXG4nICtcbiAgICAnICAgIG5nLXJlcXVpcmVkPVwiY3RybC5maWVsZC5wcm9wcy5yZXF1aXJlZFwiXFxuJyArXG4gICAgJyAgPjwvaW5wdXQ+XFxuJyArXG4gICAgJyAgPGRpdiBuZy1tZXNzYWdlcz1cIiRwYXJlbnQuZmllbGRGb3JtLmlucHV0TmFtZS4kZXJyb3JcIiBuZy1zaG93PVwiJHBhcmVudC5maWVsZEZvcm0uaW5wdXROYW1lLiRkaXJ0eSB8fCAkcGFyZW50LmZpZWxkRm9ybS4kc3VibWl0dGVkXCI+XFxuJyArXG4gICAgJyAgICA8ZGl2IG5nLW1lc3NhZ2U9XCJyZXF1aXJlZFwiPkEge3tmaWVsZC5wcm9wcy5uYW1lfX0gaXMgcmVxdWlyZWQuPC9kaXY+XFxuJyArXG4gICAgJyAgICA8ZGl2IG5nLW1lc3NhZ2U9XCJudW1iZXJcIj5Zb3UgZGlkIG5vdCBlbnRlciBhIHZhbGlkIGRhdGFlPC9kaXY+XFxuJyArXG4gICAgJyAgICA8ZGl2IG5nLW1lc3NhZ2U9XCJtYXhcIiBjbGFzcz1cImhlbHAtYmxvY2tcIj5WYWx1ZSBtdXN0IGJlIGxlc3MgdGhhbiB7e2ZpZWxkLnByb3BzLmZpZWxkT3B0aW9ucy52YWxpZGF0aW9uLm1heH19LjwvZGl2PlxcbicgK1xuICAgICcgICAgPGRpdiBuZy1tZXNzYWdlPVwibWluXCIgY2xhc3M9XCJoZWxwLWJsb2NrXCI+VmFsdWUgbXVzdCBiZSBsYXJnZXIgdGhhbiB7e2ZpZWxkLnByb3BzLmZpZWxkT3B0aW9ucy52YWxpZGF0aW9uLm1pbn19LjwvZGl2PlxcbicgK1xuICAgICcgIDwvZGl2PlxcbicgK1xuICAgICc8L21kLWlucHV0LWNvbnRhaW5lcj5cXG4nICtcbiAgICAnJyk7XG59XSk7XG4iLCJ2YXIgbmdNb2R1bGU7XG50cnkge1xuICBuZ01vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCd3Zm0uYXBwZm9ybS5kaXJlY3RpdmVzJyk7XG59IGNhdGNoIChlKSB7XG4gIG5nTW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ3dmbS5hcHBmb3JtLmRpcmVjdGl2ZXMnLCBbXSk7XG59XG5cbm5nTW9kdWxlLnJ1bihbJyR0ZW1wbGF0ZUNhY2hlJywgZnVuY3Rpb24gKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dCgnd2ZtLXRlbXBsYXRlL2FwcGZvcm0tZmllbGQtZGF0ZXRpbWUudHBsLmh0bWwnLFxuICAgICc8IS0tXFxuJyArXG4gICAgJyBDT05GSURFTlRJQUxcXG4nICtcbiAgICAnIENvcHlyaWdodCAyMDE2IFJlZCBIYXQsIEluYy4gYW5kL29yIGl0cyBhZmZpbGlhdGVzLlxcbicgK1xuICAgICcgVGhpcyBpcyB1bnB1Ymxpc2hlZCBwcm9wcmlldGFyeSBzb3VyY2UgY29kZSBvZiBSZWQgSGF0LlxcbicgK1xuICAgICctLT5cXG4nICtcbiAgICAnXFxuJyArXG4gICAgJzxwIGNsYXNzPVwibWQtY2FwdGlvblwiPnt7ZmllbGQucHJvcHMubmFtZX19PC9wPlxcbicgK1xuICAgICc8ZGl2IGxheW91dD1cInJvd1wiPlxcbicgK1xuICAgICcgIDxtZC1pbnB1dC1jb250YWluZXIgZmxleCBjbGFzcz1cIm1kLWJsb2NrXCIgY2xhc3M9XCJ7e2ZpZWxkLnByb3BzLmZpZWxkQ29kZX19IGFwcGZvcm0tZmllbGQtbnVtYmVyXCI+XFxuJyArXG4gICAgJyAgICA8bGFiZWwgZm9yPVwiaW5wdXREYXRlXCIgY2xhc3M9XCJcIj5EYXRlPC9sYWJlbD5cXG4nICtcbiAgICAnICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiXFxuJyArXG4gICAgJyAgICAgIHBsYWNlaG9sZGVyPVwie3tjdHJsLmZpZWxkLnByb3BzLmhlbHBUZXh0fX1cIlxcbicgK1xuICAgICcgICAgICBuYW1lPVwiaW5wdXREYXRlXCJcXG4nICtcbiAgICAnICAgICAgbmctbW9kZWw9XCJjdHJsLm1vZGVsLmRhdGVcIlxcbicgK1xuICAgICcgICAgICBuZy1jaGFuZ2U9XCJjdHJsLnVwZGF0ZU1vZGVsKClcIlxcbicgK1xuICAgICcgICAgICBtaW49XCJ7e2ZpZWxkLnByb3BzLmZpZWxkT3B0aW9ucy52YWxpZGF0aW9uLm1pbn19XCJcXG4nICtcbiAgICAnICAgICAgbWF4PVwie3tmaWVsZC5wcm9wcy5maWVsZE9wdGlvbnMudmFsaWRhdGlvbi5tYXh9fVwiXFxuJyArXG4gICAgJyAgICAgIG5nLXJlcXVpcmVkPVwiY3RybC5maWVsZC5wcm9wcy5yZXF1aXJlZFwiXFxuJyArXG4gICAgJyAgICA+PC9pbnB1dD5cXG4nICtcbiAgICAnICAgIDxkaXYgbmctbWVzc2FnZXM9XCIkcGFyZW50LmZpZWxkRm9ybS5pbnB1dE5hbWUuJGVycm9yXCIgbmctc2hvdz1cIiRwYXJlbnQuZmllbGRGb3JtLmlucHV0TmFtZS4kZGlydHkgfHwgJHBhcmVudC5maWVsZEZvcm0uJHN1Ym1pdHRlZFwiPlxcbicgK1xuICAgICcgICAgICA8ZGl2IG5nLW1lc3NhZ2U9XCJyZXF1aXJlZFwiPkEge3tmaWVsZC5wcm9wcy5uYW1lfX0gaXMgcmVxdWlyZWQuPC9kaXY+XFxuJyArXG4gICAgJyAgICAgIDxkaXYgbmctbWVzc2FnZT1cIm51bWJlclwiPllvdSBkaWQgbm90IGVudGVyIGEgdmFsaWQgZGF0ZTwvZGl2PlxcbicgK1xuICAgICcgICAgICA8ZGl2IG5nLW1lc3NhZ2U9XCJtYXhcIiBjbGFzcz1cImhlbHAtYmxvY2tcIj5WYWx1ZSBtdXN0IGJlIGxlc3MgdGhhbiB7e2ZpZWxkLnByb3BzLmZpZWxkT3B0aW9ucy52YWxpZGF0aW9uLm1heH19LjwvZGl2PlxcbicgK1xuICAgICcgICAgICA8ZGl2IG5nLW1lc3NhZ2U9XCJtaW5cIiBjbGFzcz1cImhlbHAtYmxvY2tcIj5WYWx1ZSBtdXN0IGJlIGxhcmdlciB0aGFuIHt7ZmllbGQucHJvcHMuZmllbGRPcHRpb25zLnZhbGlkYXRpb24ubWlufX0uPC9kaXY+XFxuJyArXG4gICAgJyAgICA8L2Rpdj5cXG4nICtcbiAgICAnICA8L21kLWlucHV0LWNvbnRhaW5lcj5cXG4nICtcbiAgICAnICA8bWQtaW5wdXQtY29udGFpbmVyIGZsZXggY2xhc3M9XCJtZC1ibG9ja1wiIGNsYXNzPVwie3tmaWVsZC5wcm9wcy5maWVsZENvZGV9fSBhcHBmb3JtLWZpZWxkLW51bWJlclwiPlxcbicgK1xuICAgICcgICAgPGxhYmVsIGZvcj1cImlucHV0VGltZVwiIGNsYXNzPVwiXCI+VGltZTwvbGFiZWw+XFxuJyArXG4gICAgJyAgICA8aW5wdXQgdHlwZT1cInRpbWVcIlxcbicgK1xuICAgICcgICAgICBwbGFjZWhvbGRlcj1cInt7Y3RybC5maWVsZC5wcm9wcy5oZWxwVGV4dH19XCJcXG4nICtcbiAgICAnICAgICAgbmFtZT1cImlucHV0VGltZVwiXFxuJyArXG4gICAgJyAgICAgIG5nLW1vZGVsPVwiY3RybC5tb2RlbC50aW1lXCJcXG4nICtcbiAgICAnICAgICAgbmctcmVxdWlyZWQ9XCJjdHJsLmZpZWxkLnByb3BzLnJlcXVpcmVkXCJcXG4nICtcbiAgICAnICAgID48L2lucHV0PlxcbicgK1xuICAgICcgICAgPGRpdiBuZy1tZXNzYWdlcz1cIiRwYXJlbnQuZmllbGRGb3JtLmlucHV0TmFtZS4kZXJyb3JcIiBuZy1zaG93PVwiJHBhcmVudC5maWVsZEZvcm0uaW5wdXROYW1lLiRkaXJ0eSB8fCAkcGFyZW50LmZpZWxkRm9ybS4kc3VibWl0dGVkXCI+XFxuJyArXG4gICAgJyAgICAgIDxkaXYgbmctbWVzc2FnZT1cInJlcXVpcmVkXCI+QSB7e2ZpZWxkLnByb3BzLm5hbWV9fSBpcyByZXF1aXJlZC48L2Rpdj5cXG4nICtcbiAgICAnICAgICAgPGRpdiBuZy1tZXNzYWdlPVwibnVtYmVyXCI+WW91IGRpZCBub3QgZW50ZXIgYSB2YWxpZCB0aW1lPC9kaXY+XFxuJyArXG4gICAgJyAgICAgIDxkaXYgbmctbWVzc2FnZT1cIm1heFwiIGNsYXNzPVwiaGVscC1ibG9ja1wiPlZhbHVlIG11c3QgYmUgbGVzcyB0aGFuIHt7ZmllbGQucHJvcHMuZmllbGRPcHRpb25zLnZhbGlkYXRpb24ubWF4fX0uPC9kaXY+XFxuJyArXG4gICAgJyAgICAgIDxkaXYgbmctbWVzc2FnZT1cIm1pblwiIGNsYXNzPVwiaGVscC1ibG9ja1wiPlZhbHVlIG11c3QgYmUgbGFyZ2VyIHRoYW4ge3tmaWVsZC5wcm9wcy5maWVsZE9wdGlvbnMudmFsaWRhdGlvbi5taW59fS48L2Rpdj5cXG4nICtcbiAgICAnICAgIDwvZGl2PlxcbicgK1xuICAgICcgIDwvbWQtaW5wdXQtY29udGFpbmVyPlxcbicgK1xuICAgICc8L2Rpdj5cXG4nICtcbiAgICAnJyk7XG59XSk7XG4iLCJ2YXIgbmdNb2R1bGU7XG50cnkge1xuICBuZ01vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCd3Zm0uYXBwZm9ybS5kaXJlY3RpdmVzJyk7XG59IGNhdGNoIChlKSB7XG4gIG5nTW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ3dmbS5hcHBmb3JtLmRpcmVjdGl2ZXMnLCBbXSk7XG59XG5cbm5nTW9kdWxlLnJ1bihbJyR0ZW1wbGF0ZUNhY2hlJywgZnVuY3Rpb24gKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dCgnd2ZtLXRlbXBsYXRlL2FwcGZvcm0tZmllbGQtbG9jYXRpb24udHBsLmh0bWwnLFxuICAgICc8IS0tXFxuJyArXG4gICAgJyBDT05GSURFTlRJQUxcXG4nICtcbiAgICAnIENvcHlyaWdodCAyMDE2IFJlZCBIYXQsIEluYy4gYW5kL29yIGl0cyBhZmZpbGlhdGVzLlxcbicgK1xuICAgICcgVGhpcyBpcyB1bnB1Ymxpc2hlZCBwcm9wcmlldGFyeSBzb3VyY2UgY29kZSBvZiBSZWQgSGF0LlxcbicgK1xuICAgICctLT5cXG4nICtcbiAgICAnPHAgY2xhc3M9XCJtZC1jYXB0aW9uXCI+e3tmaWVsZC5wcm9wcy5uYW1lfX08L3A+XFxuJyArXG4gICAgJzxwPnt7ZmllbGQucHJvcHMuaGVscFRleHR9fTwvcD5cXG4nICtcbiAgICAnXFxuJyArXG4gICAgJzxtZC1idXR0b24gdHlwZT1cImJ1dHRvblwiIG5nLWNsaWNrPVwiY3RybC5zZXRMb2NhdGlvbigkZXZlbnQpXCIgY2xhc3M9XCJtZC1yYWlzZWQgbWQtcHJpbWFyeVwiPlxcbicgK1xuICAgICcgIDxtZC1pY29uIG1kLWZvbnQtc2V0PVwibWF0ZXJpYWwtaWNvbnNcIj5sb2NhdGlvbl9zZWFyY2hpbmc8L21kLWljb24+XFxuJyArXG4gICAgJyAgR2V0IExvY2F0aW9uXFxuJyArXG4gICAgJzwvbWQtYnV0dG9uPlxcbicgK1xuICAgICdcXG4nICtcbiAgICAnPGRpdiBsYXlvdXQ9XCJyb3dcIj5cXG4nICtcbiAgICAnICA8bWQtaW5wdXQtY29udGFpbmVyIGNsYXNzPVwie3tmaWVsZC5wcm9wcy5maWVsZENvZGV9fSBhcHBmb3JtLWZpZWxkLWxvY2F0aW9uIG1kLWJsb2NrXCIgZmxleD5cXG4nICtcbiAgICAnICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCJcXG4nICtcbiAgICAnICAgICAgcGxhY2Vob2xkZXI9XCJMYXRpdHVkZVwiXFxuJyArXG4gICAgJyAgICAgIG5hbWU9XCJpbnB1dE5hbWVYXCJcXG4nICtcbiAgICAnICAgICAgbmctbW9kZWw9XCJjdHJsLm1vZGVsLnZhbHVlLmxhdFwiXFxuJyArXG4gICAgJyAgICAgIG5nLXJlcXVpcmVkPVwiY3RybC5maWVsZC5wcm9wcy5yZXF1aXJlZFwiXFxuJyArXG4gICAgJyAgICA+PC9pbnB1dD5cXG4nICtcbiAgICAnXFxuJyArXG4gICAgJyAgICA8ZGl2IG5nLW1lc3NhZ2VzPVwiJHBhcmVudC5maWVsZEZvcm0uaW5wdXROYW1lWC4kZXJyb3JcIiBuZy1zaG93PVwiJHBhcmVudC5maWVsZEZvcm0uaW5wdXROYW1lWC4kZGlydHkgfHwgJHBhcmVudC5maWVsZEZvcm0uJHN1Ym1pdHRlZFwiPlxcbicgK1xuICAgICcgICAgICA8ZGl2IG5nLW1lc3NhZ2U9XCJyZXF1aXJlZFwiPkEge3tmaWVsZC5wcm9wcy5uYW1lfX0gbGF0aXR1ZGUgaXMgcmVxdWlyZWQuPC9kaXY+XFxuJyArXG4gICAgJyAgICA8L2Rpdj5cXG4nICtcbiAgICAnICA8L21kLWlucHV0LWNvbnRhaW5lcj5cXG4nICtcbiAgICAnXFxuJyArXG4gICAgJyAgPG1kLWlucHV0LWNvbnRhaW5lciBjbGFzcz1cInt7ZmllbGQucHJvcHMuZmllbGRDb2RlfX0gYXBwZm9ybS1maWVsZC1sb2NhdGlvbiBtZC1ibG9ja1wiIGZsZXg+XFxuJyArXG4gICAgJyAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiXFxuJyArXG4gICAgJyAgICAgIHBsYWNlaG9sZGVyPVwiTG9uZ2l0dWRlXCJcXG4nICtcbiAgICAnICAgICAgbmFtZT1cImlucHV0TmFtZVlcIlxcbicgK1xuICAgICcgICAgICBuZy1tb2RlbD1cImN0cmwubW9kZWwudmFsdWUubG9uZ1wiXFxuJyArXG4gICAgJyAgICAgIG5nLXJlcXVpcmVkPVwiY3RybC5maWVsZC5wcm9wcy5yZXF1aXJlZFwiXFxuJyArXG4gICAgJyAgICA+PC9pbnB1dD5cXG4nICtcbiAgICAnICAgIDxkaXYgbmctbWVzc2FnZXM9XCIkcGFyZW50LmZpZWxkRm9ybS5pbnB1dE5hbWVZLiRlcnJvclwiIG5nLXNob3c9XCIkcGFyZW50LmZpZWxkRm9ybS5pbnB1dE5hbWVZLiRkaXJ0eSB8fCAkcGFyZW50LmZpZWxkRm9ybS4kc3VibWl0dGVkXCI+XFxuJyArXG4gICAgJyAgICAgIDxkaXYgbmctbWVzc2FnZT1cInJlcXVpcmVkXCI+QSB7e2ZpZWxkLnByb3BzLm5hbWV9fSBsb25naXR1ZGUgaXMgcmVxdWlyZWQuPC9kaXY+XFxuJyArXG4gICAgJyAgICA8L2Rpdj5cXG4nICtcbiAgICAnICA8L21kLWlucHV0LWNvbnRhaW5lcj5cXG4nICtcbiAgICAnPC9kaXY+XFxuJyArXG4gICAgJycpO1xufV0pO1xuIiwidmFyIG5nTW9kdWxlO1xudHJ5IHtcbiAgbmdNb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgnd2ZtLmFwcGZvcm0uZGlyZWN0aXZlcycpO1xufSBjYXRjaCAoZSkge1xuICBuZ01vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCd3Zm0uYXBwZm9ybS5kaXJlY3RpdmVzJywgW10pO1xufVxuXG5uZ01vZHVsZS5ydW4oWyckdGVtcGxhdGVDYWNoZScsIGZ1bmN0aW9uICgkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoJ3dmbS10ZW1wbGF0ZS9hcHBmb3JtLWZpZWxkLW51bWJlci50cGwuaHRtbCcsXG4gICAgJzwhLS1cXG4nICtcbiAgICAnIENPTkZJREVOVElBTFxcbicgK1xuICAgICcgQ29weXJpZ2h0IDIwMTYgUmVkIEhhdCwgSW5jLiBhbmQvb3IgaXRzIGFmZmlsaWF0ZXMuXFxuJyArXG4gICAgJyBUaGlzIGlzIHVucHVibGlzaGVkIHByb3ByaWV0YXJ5IHNvdXJjZSBjb2RlIG9mIFJlZCBIYXQuXFxuJyArXG4gICAgJy0tPlxcbicgK1xuICAgICc8bWQtaW5wdXQtY29udGFpbmVyIGNsYXNzPVwibWQtYmxvY2tcIiBjbGFzcz1cInt7ZmllbGQucHJvcHMuZmllbGRDb2RlfX0gYXBwZm9ybS1maWVsZC1udW1iZXJcIj5cXG4nICtcbiAgICAnICA8bGFiZWwgZm9yPVwiaW5wdXROYW1lXCIgY2xhc3M9XCJcIj57e2ZpZWxkLnByb3BzLm5hbWV9fTwvbGFiZWw+XFxuJyArXG4gICAgJyAgPGlucHV0IHR5cGU9XCJudW1iZXJcIlxcbicgK1xuICAgICcgICAgcGxhY2Vob2xkZXI9XCJ7e2N0cmwuZmllbGQucHJvcHMuaGVscFRleHR9fVwiXFxuJyArXG4gICAgJyAgICBuYW1lPVwiaW5wdXROYW1lXCJcXG4nICtcbiAgICAnICAgIG5nLW1vZGVsPVwiY3RybC5tb2RlbC52YWx1ZVwiXFxuJyArXG4gICAgJyAgICBtaW49XCJ7e2ZpZWxkLnByb3BzLmZpZWxkT3B0aW9ucy52YWxpZGF0aW9uLm1pbn19XCJcXG4nICtcbiAgICAnICAgIG1heD1cInt7ZmllbGQucHJvcHMuZmllbGRPcHRpb25zLnZhbGlkYXRpb24ubWF4fX1cIlxcbicgK1xuICAgICcgICAgbmctcmVxdWlyZWQ9XCJjdHJsLmZpZWxkLnByb3BzLnJlcXVpcmVkXCJcXG4nICtcbiAgICAnICA+PC9pbnB1dD5cXG4nICtcbiAgICAnICA8ZGl2IG5nLW1lc3NhZ2VzPVwiJHBhcmVudC5maWVsZEZvcm0uaW5wdXROYW1lLiRlcnJvclwiIG5nLXNob3c9XCIkcGFyZW50LmZpZWxkRm9ybS5pbnB1dE5hbWUuJGRpcnR5IHx8ICRwYXJlbnQuZmllbGRGb3JtLiRzdWJtaXR0ZWRcIj5cXG4nICtcbiAgICAnICAgIDxkaXYgbmctbWVzc2FnZT1cInJlcXVpcmVkXCI+QSB7e2ZpZWxkLnByb3BzLm5hbWV9fSBpcyByZXF1aXJlZC48L2Rpdj5cXG4nICtcbiAgICAnICAgIDxkaXYgbmctbWVzc2FnZT1cIm51bWJlclwiPllvdSBkaWQgbm90IGVudGVyIGEgdmFsaWQgbnVtYmVyPC9kaXY+XFxuJyArXG4gICAgJyAgICA8ZGl2IG5nLW1lc3NhZ2U9XCJtYXhcIiBjbGFzcz1cImhlbHAtYmxvY2tcIj5WYWx1ZSBtdXN0IGJlIGxlc3MgdGhhbiB7e2ZpZWxkLnByb3BzLmZpZWxkT3B0aW9ucy52YWxpZGF0aW9uLm1heH19LjwvZGl2PlxcbicgK1xuICAgICcgICAgPGRpdiBuZy1tZXNzYWdlPVwibWluXCIgY2xhc3M9XCJoZWxwLWJsb2NrXCI+VmFsdWUgbXVzdCBiZSBsYXJnZXIgdGhhbiB7e2ZpZWxkLnByb3BzLmZpZWxkT3B0aW9ucy52YWxpZGF0aW9uLm1pbn19LjwvZGl2PlxcbicgK1xuICAgICcgIDwvZGl2PlxcbicgK1xuICAgICc8L21kLWlucHV0LWNvbnRhaW5lcj5cXG4nICtcbiAgICAnJyk7XG59XSk7XG4iLCJ2YXIgbmdNb2R1bGU7XG50cnkge1xuICBuZ01vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCd3Zm0uYXBwZm9ybS5kaXJlY3RpdmVzJyk7XG59IGNhdGNoIChlKSB7XG4gIG5nTW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ3dmbS5hcHBmb3JtLmRpcmVjdGl2ZXMnLCBbXSk7XG59XG5cbm5nTW9kdWxlLnJ1bihbJyR0ZW1wbGF0ZUNhY2hlJywgZnVuY3Rpb24gKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dCgnd2ZtLXRlbXBsYXRlL2FwcGZvcm0tZmllbGQtcGhvdG8udHBsLmh0bWwnLFxuICAgICc8IS0tXFxuJyArXG4gICAgJyBDT05GSURFTlRJQUxcXG4nICtcbiAgICAnIENvcHlyaWdodCAyMDE2IFJlZCBIYXQsIEluYy4gYW5kL29yIGl0cyBhZmZpbGlhdGVzLlxcbicgK1xuICAgICcgVGhpcyBpcyB1bnB1Ymxpc2hlZCBwcm9wcmlldGFyeSBzb3VyY2UgY29kZSBvZiBSZWQgSGF0LlxcbicgK1xuICAgICctLT5cXG4nICtcbiAgICAnPGRpdj5cXG4nICtcbiAgICAnICA8bWQtYnV0dG9uIHR5cGU9XCJidXR0b25cIiBuZy1jbGljaz1cImN0cmwuY2FwdHVyZSgkZXZlbnQpXCIgY2xhc3M9XCJtZC1yYWlzZWQgbWQtcHJpbWFyeVwiPnt7Y3RybC5tb2RlbC52YWx1ZSA/IFxcJ1JlcGxhY2VcXCcgOiBcXCdUYWtlIGFcXCd9fSBwaG90bzwvbWQtYnV0dG9uPlxcbicgK1xuICAgICcgIDxicj5cXG4nICtcbiAgICAnICA8aW1nIGNsYXNzPVxcJ2FwcGZvcm0tcGhvdG9cXCcgbmctaWY9XCJmaWVsZC52YWx1ZS5sb2NhbFVSSVwiIG5nLXNyYz1cInt7ZmllbGQudmFsdWUubG9jYWxVUkl9fVwiIGFsdD1cInBob3RvXCI+PC9pbWc+XFxuJyArXG4gICAgJyAgPGltZyBjbGFzcz1cXCdhcHBmb3JtLXBob3RvXFwnIG5nLWlmPVwiY3RybC5tb2RlbC52YWx1ZVwiIG5nLXNyYz1cInt7Y3RybC5tb2RlbC52YWx1ZX19XCIgYWx0PVwicGhvdG9cIj48L2ltZz5cXG4nICtcbiAgICAnPC9kaXY+XFxuJyArXG4gICAgJycpO1xufV0pO1xuIiwidmFyIG5nTW9kdWxlO1xudHJ5IHtcbiAgbmdNb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgnd2ZtLmFwcGZvcm0uZGlyZWN0aXZlcycpO1xufSBjYXRjaCAoZSkge1xuICBuZ01vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCd3Zm0uYXBwZm9ybS5kaXJlY3RpdmVzJywgW10pO1xufVxuXG5uZ01vZHVsZS5ydW4oWyckdGVtcGxhdGVDYWNoZScsIGZ1bmN0aW9uICgkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoJ3dmbS10ZW1wbGF0ZS9hcHBmb3JtLWZpZWxkLXRpbWUudHBsLmh0bWwnLFxuICAgICc8IS0tXFxuJyArXG4gICAgJyBDT05GSURFTlRJQUxcXG4nICtcbiAgICAnIENvcHlyaWdodCAyMDE2IFJlZCBIYXQsIEluYy4gYW5kL29yIGl0cyBhZmZpbGlhdGVzLlxcbicgK1xuICAgICcgVGhpcyBpcyB1bnB1Ymxpc2hlZCBwcm9wcmlldGFyeSBzb3VyY2UgY29kZSBvZiBSZWQgSGF0LlxcbicgK1xuICAgICctLT5cXG4nICtcbiAgICAnXFxuJyArXG4gICAgJzxtZC1pbnB1dC1jb250YWluZXIgY2xhc3M9XCJtZC1ibG9ja1wiIGNsYXNzPVwie3tmaWVsZC5wcm9wcy5maWVsZENvZGV9fSBhcHBmb3JtLWZpZWxkLW51bWJlclwiPlxcbicgK1xuICAgICcgIDxsYWJlbCBmb3I9XCJpbnB1dFRpbWVcIiBjbGFzcz1cIlwiPnt7ZmllbGQucHJvcHMubmFtZX19PC9sYWJlbD5cXG4nICtcbiAgICAnICA8aW5wdXQgdHlwZT1cInRpbWVcIlxcbicgK1xuICAgICcgICAgcGxhY2Vob2xkZXI9XCJ7e2N0cmwuZmllbGQucHJvcHMuaGVscFRleHR9fVwiXFxuJyArXG4gICAgJyAgICBuYW1lPVwiaW5wdXRUaW1lXCJcXG4nICtcbiAgICAnICAgIG5nLW1vZGVsPVwiY3RybC5tb2RlbC50aW1lXCJcXG4nICtcbiAgICAnICAgIG5nLWNoYW5nZT1cImN0cmwudXBkYXRlTW9kZWwoKVwiXFxuJyArXG4gICAgJyAgICBuZy1yZXF1aXJlZD1cImN0cmwuZmllbGQucHJvcHMucmVxdWlyZWRcIlxcbicgK1xuICAgICcgID48L2lucHV0PlxcbicgK1xuICAgICcgIDxkaXYgbmctbWVzc2FnZXM9XCIkcGFyZW50LmZpZWxkRm9ybS5pbnB1dE5hbWUuJGVycm9yXCIgbmctc2hvdz1cIiRwYXJlbnQuZmllbGRGb3JtLmlucHV0TmFtZS4kZGlydHkgfHwgJHBhcmVudC5maWVsZEZvcm0uJHN1Ym1pdHRlZFwiPlxcbicgK1xuICAgICcgICAgPGRpdiBuZy1tZXNzYWdlPVwicmVxdWlyZWRcIj5BIHt7ZmllbGQucHJvcHMubmFtZX19IGlzIHJlcXVpcmVkLjwvZGl2PlxcbicgK1xuICAgICcgICAgPGRpdiBuZy1tZXNzYWdlPVwibnVtYmVyXCI+WW91IGRpZCBub3QgZW50ZXIgYSB2YWxpZCB0aW1lPC9kaXY+XFxuJyArXG4gICAgJyAgICA8ZGl2IG5nLW1lc3NhZ2U9XCJtYXhcIiBjbGFzcz1cImhlbHAtYmxvY2tcIj5WYWx1ZSBtdXN0IGJlIGxlc3MgdGhhbiB7e2ZpZWxkLnByb3BzLmZpZWxkT3B0aW9ucy52YWxpZGF0aW9uLm1heH19LjwvZGl2PlxcbicgK1xuICAgICcgICAgPGRpdiBuZy1tZXNzYWdlPVwibWluXCIgY2xhc3M9XCJoZWxwLWJsb2NrXCI+VmFsdWUgbXVzdCBiZSBsYXJnZXIgdGhhbiB7e2ZpZWxkLnByb3BzLmZpZWxkT3B0aW9ucy52YWxpZGF0aW9uLm1pbn19LjwvZGl2PlxcbicgK1xuICAgICcgIDwvZGl2PlxcbicgK1xuICAgICc8L21kLWlucHV0LWNvbnRhaW5lcj5cXG4nICtcbiAgICAnJyk7XG59XSk7XG4iLCJ2YXIgbmdNb2R1bGU7XG50cnkge1xuICBuZ01vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCd3Zm0uYXBwZm9ybS5kaXJlY3RpdmVzJyk7XG59IGNhdGNoIChlKSB7XG4gIG5nTW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ3dmbS5hcHBmb3JtLmRpcmVjdGl2ZXMnLCBbXSk7XG59XG5cbm5nTW9kdWxlLnJ1bihbJyR0ZW1wbGF0ZUNhY2hlJywgZnVuY3Rpb24gKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dCgnd2ZtLXRlbXBsYXRlL2FwcGZvcm0tZmllbGQudHBsLmh0bWwnLFxuICAgICc8IS0tXFxuJyArXG4gICAgJyBDT05GSURFTlRJQUxcXG4nICtcbiAgICAnIENvcHlyaWdodCAyMDE2IFJlZCBIYXQsIEluYy4gYW5kL29yIGl0cyBhZmZpbGlhdGVzLlxcbicgK1xuICAgICcgVGhpcyBpcyB1bnB1Ymxpc2hlZCBwcm9wcmlldGFyeSBzb3VyY2UgY29kZSBvZiBSZWQgSGF0LlxcbicgK1xuICAgICctLT5cXG4nICtcbiAgICAnPG5nLWZvcm0gbmFtZT1cImZpZWxkRm9ybVwiIG5nLXN1Ym1pdD1cImN0cmwuc3VibWl0KClcIj5cXG4nICtcbiAgICAnICA8ZGl2IG5nLXN3aXRjaD1cImN0cmwuZmllbGQucHJvcHMudHlwZVwiPlxcbicgK1xuICAgICdcXG4nICtcbiAgICAnICAgIDxkaXYgbmctc3dpdGNoLXdoZW49XCJudW1iZXJcIj5cXG4nICtcbiAgICAnICAgICAgPGFwcGZvcm0tZmllbGQtbnVtYmVyIG1vZGVsPVwiY3RybC5tb2RlbFwiIGZpZWxkPVwiY3RybC5maWVsZFwiPjwvYXBwZm9ybS1maWVsZC1udW1iZXI+XFxuJyArXG4gICAgJyAgICA8L2Rpdj5cXG4nICtcbiAgICAnXFxuJyArXG4gICAgJyAgICA8ZGl2IG5nLXN3aXRjaC13aGVuPVwiZGF0ZVRpbWVcIiBuZy1zd2l0Y2g9XCJjdHJsLmZpZWxkLnByb3BzLmZpZWxkT3B0aW9ucy5kZWZpbml0aW9uLmRhdGV0aW1lVW5pdFwiPlxcbicgK1xuICAgICcgICAgICA8ZGl2IG5nLXN3aXRjaC13aGVuPVwiZGF0ZVwiPlxcbicgK1xuICAgICcgICAgICAgIDxhcHBmb3JtLWZpZWxkLWRhdGUgbW9kZWw9XCJjdHJsLm1vZGVsXCIgZmllbGQ9XCJjdHJsLmZpZWxkXCI+PC9hcHBmb3JtLWZpZWxkLWRhdGU+XFxuJyArXG4gICAgJyAgICAgIDwvZGl2PlxcbicgK1xuICAgICcgICAgICAgPGRpdiBuZy1zd2l0Y2gtd2hlbj1cImRhdGV0aW1lXCI+XFxuJyArXG4gICAgJyAgICAgICAgIDxhcHBmb3JtLWZpZWxkLWRhdGV0aW1lIG1vZGVsPVwiY3RybC5tb2RlbFwiIGZpZWxkPVwiY3RybC5maWVsZFwiPjwvYXBwZm9ybS1maWVsZC1kYXRldGltZT5cXG4nICtcbiAgICAnICAgICAgIDwvZGl2PlxcbicgK1xuICAgICcgICAgICAgPGRpdiBuZy1zd2l0Y2gtd2hlbj1cInRpbWVcIj5cXG4nICtcbiAgICAnICAgICAgICAgPGFwcGZvcm0tZmllbGQtdGltZSBtb2RlbD1cImN0cmwubW9kZWxcIiBmaWVsZD1cImN0cmwuZmllbGRcIj48L2FwcGZvcm0tZmllbGQtdGltZT5cXG4nICtcbiAgICAnICAgICAgIDwvZGl2PlxcbicgK1xuICAgICcgICAgICAgPGRpdiBuZy1zd2l0Y2gtZGVmYXVsdD5cXG4nICtcbiAgICAnICAgICAgICAge3tjdHJsLmZpZWxkLnByb3BzLmZpZWxkT3B0aW9ucy5kZWZpbml0aW9uLmRhdGV0aW1lVW5pdH19XFxuJyArXG4gICAgJyAgICAgICA8L2Rpdj5cXG4nICtcbiAgICAnICAgIDwvZGl2PlxcbicgK1xuICAgICdcXG4nICtcbiAgICAnICAgIDxkaXYgbmctc3dpdGNoLXdoZW49XCJsb2NhdGlvblwiPlxcbicgK1xuICAgICcgICAgICA8YXBwZm9ybS1maWVsZC1sb2NhdGlvbiBtb2RlbD1cImN0cmwubW9kZWxcIiBmaWVsZD1cImN0cmwuZmllbGRcIj48L2FwcGZvcm0tZmllbGQtbG9jYXRpb24+XFxuJyArXG4gICAgJyAgICA8L2Rpdj5cXG4nICtcbiAgICAnXFxuJyArXG4gICAgJyAgICA8ZGl2IG5nLXN3aXRjaC13aGVuPVwic2lnbmF0dXJlXCIgZmxleCBjbGFzcz1cImFwcGZvcm0tc2lnbmF0dXJlXCI+XFxuJyArXG4gICAgJyAgICAgIDxtZC1pbnB1dC1jb250YWluZXIgY2xhc3M9XCJtZC1ibG9ja1wiPlxcbicgK1xuICAgICcgICAgICAgIDxwIGNsYXNzPVwibWQtY2FwdGlvblwiPnt7Y3RybC5maWVsZC5wcm9wcy5uYW1lfX08L3A+XFxuJyArXG4gICAgJyAgICAgICAgPHNpZ25hdHVyZS1mb3JtIHZhbHVlPVwiY3RybC5tb2RlbC52YWx1ZVwiPjwvc2lnbmF0dXJlLWZvcm0+XFxuJyArXG4gICAgJyAgICAgIDwvbWQtaW5wdXQtY29udGFpbmVyPlxcbicgK1xuICAgICcgICAgPC9kaXY+XFxuJyArXG4gICAgJ1xcbicgK1xuICAgICcgICAgPGRpdiBuZy1zd2l0Y2gtd2hlbj1cInBob3RvXCIgZmxleCBjbGFzcz1cImFwcGZvcm0tcGhvdG9cIj5cXG4nICtcbiAgICAnICAgICAgPGFwcGZvcm0tZmllbGQtcGhvdG8gbW9kZWw9XCJjdHJsLm1vZGVsXCIgZmllbGQ9XCJjdHJsLmZpZWxkXCI+PC9hcHBmb3JtLWZpZWxkLXBob3RvPlxcbicgK1xuICAgICcgICAgPC9kaXY+XFxuJyArXG4gICAgJ1xcbicgK1xuICAgICcgICAgPGRpdiBuZy1zd2l0Y2gtZGVmYXVsdCBmbGV4PlxcbicgK1xuICAgICcgICAgICA8bWQtaW5wdXQtY29udGFpbmVyIGNsYXNzPVwibWQtYmxvY2tcIj5cXG4nICtcbiAgICAnICAgICAgICA8bGFiZWw+e3tjdHJsLmZpZWxkLnByb3BzLnR5cGV9fTwvbGFiZWw+XFxuJyArXG4gICAgJyAgICAgICAgPGlucHV0XFxuJyArXG4gICAgJyAgICAgICAgICB0eXBlPVwidGV4dFwiXFxuJyArXG4gICAgJyAgICAgICAgICBuYW1lPVwiaW5wdXROYW1lXCJcXG4nICtcbiAgICAnICAgICAgICAgIG5nLW1vZGVsPVwiY3RybC5tb2RlbC52YWx1ZVwiXFxuJyArXG4gICAgJyAgICAgICAgICBuZy1yZXF1aXJlZD1cImN0cmwuZmllbGQucHJvcHMucmVxdWlyZWRcIlxcbicgK1xuICAgICcgICAgICAgICAgbmctY2xhc3M9XCJjdHJsLmZpZWxkLnByb3BzLnR5cGVcIlxcbicgK1xuICAgICcgICAgICAgID48L2lucHV0PlxcbicgK1xuICAgICcgICAgICAgIDxkaXYgbmctbWVzc2FnZXM9XCJmaWVsZEZvcm0uaW5wdXROYW1lLiRlcnJvclwiIG5nLXNob3c9XCJmaWVsZEZvcm0uaW5wdXROYW1lLiRkaXJ0eSB8fCBmaWVsZEZvcm0uJHN1Ym1pdHRlZFwiPlxcbicgK1xuICAgICcgICAgICAgICAgPGRpdiBuZy1tZXNzYWdlPVwicmVxdWlyZWRcIiBuZy1zaG93PVwiY3RybC5maWVsZC5wcm9wcy5oZWxwVGV4dFwiPnt7Y3RybC5maWVsZC5wcm9wcy5oZWxwVGV4dH19PC9kaXY+XFxuJyArXG4gICAgJyAgICAgICAgICA8ZGl2IG5nLW1lc3NhZ2U9XCJyZXF1aXJlZFwiIG5nLWhpZGU9XCJjdHJsLmZpZWxkLnByb3BzLmhlbHBUZXh0XCI+QSB7e2N0cmwuZmllbGQucHJvcHMubmFtZX19IGlzIHJlcXVpcmVkLjwvZGl2PlxcbicgK1xuICAgICcgICAgICAgIDwvZGl2PlxcbicgK1xuICAgICcgICAgICA8L21kLWlucHV0LWNvbnRhaW5lcj5cXG4nICtcbiAgICAnICAgIDwvZGl2PlxcbicgK1xuICAgICdcXG4nICtcbiAgICAnICA8L2Rpdj5cXG4nICtcbiAgICAnPC9uZy1mb3JtPlxcbicgK1xuICAgICcnKTtcbn1dKTtcbiIsInZhciBuZ01vZHVsZTtcbnRyeSB7XG4gIG5nTW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ3dmbS5hcHBmb3JtLmRpcmVjdGl2ZXMnKTtcbn0gY2F0Y2ggKGUpIHtcbiAgbmdNb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgnd2ZtLmFwcGZvcm0uZGlyZWN0aXZlcycsIFtdKTtcbn1cblxubmdNb2R1bGUucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbiAoJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KCd3Zm0tdGVtcGxhdGUvYXBwZm9ybS1zdWJtaXNzaW9uLnRwbC5odG1sJyxcbiAgICAnPCEtLVxcbicgK1xuICAgICcgQ09ORklERU5USUFMXFxuJyArXG4gICAgJyBDb3B5cmlnaHQgMjAxNiBSZWQgSGF0LCBJbmMuIGFuZC9vciBpdHMgYWZmaWxpYXRlcy5cXG4nICtcbiAgICAnIFRoaXMgaXMgdW5wdWJsaXNoZWQgcHJvcHJpZXRhcnkgc291cmNlIGNvZGUgb2YgUmVkIEhhdC5cXG4nICtcbiAgICAnLS0+XFxuJyArXG4gICAgJ1xcbicgK1xuICAgICc8bWQtc3ViaGVhZGVyPnt7Y3RybC5mb3JtLnByb3BzLm5hbWV9fTwvbWQtc3ViaGVhZGVyPlxcbicgK1xuICAgICdcXG4nICtcbiAgICAnPG1kLWxpc3QgY2xhc3M9XCJhcHBmb3JtLXZpZXdcIj5cXG4nICtcbiAgICAnXFxuJyArXG4gICAgJyAgPG1kLWxpc3QtaXRlbSBuZy1pZj1cIiEgY3RybC5maWVsZHNcIiBjbGFzcz1cImxvYWRpbmdcIj5cXG4nICtcbiAgICAnICAgIExvYWRpbmcgYXBwRm9ybSBzdWJtaXNzaW9uLi4uXFxuJyArXG4gICAgJyAgPC9tZC1saXN0LWl0ZW0+XFxuJyArXG4gICAgJ1xcbicgK1xuICAgICcgIDxkaXYgbmctcmVwZWF0PVwiZmllbGQgaW4gY3RybC5maWVsZHNcIj5cXG4nICtcbiAgICAnICAgIDxuZy1zd2l0Y2ggb249XCJmaWVsZC5wcm9wcy50eXBlXCI+XFxuJyArXG4gICAgJyAgICAgIDxkaXYgbmctc3dpdGNoLXdoZW49XCJzaWduYXR1cmVcIj5cXG4nICtcbiAgICAnICAgICAgICA8bWQtbGlzdC1pdGVtIGNsYXNzPVwibWQtMi1saW5lIHdpdGgtaW1hZ2VcIj5cXG4nICtcbiAgICAnICAgICAgICAgIDxtZC1pY29uIG1kLWZvbnQtc2V0PVwibWF0ZXJpYWwtaWNvbnNcIj5nZXN0dXJlPC9tZC1pY29uPlxcbicgK1xuICAgICcgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kLWxpc3QtaXRlbS10ZXh0XCI+XFxuJyArXG4gICAgJyAgICAgICAgICAgIDxoMz5cXG4nICtcbiAgICAnICAgICAgICAgICAgICA8c2lnbmF0dXJlIG5nLWlmPVwiZmllbGQudmFsdWUubG9jYWxVUklcIiB2YWx1ZT1cImZpZWxkLnZhbHVlLmxvY2FsVVJJXCIgYWx0PVwiU2lnbmF0dXJlXCI+PC9zaWduYXR1cmU+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgPHNpZ25hdHVyZSBuZy1pZj1cIiFmaWVsZC52YWx1ZS5sb2NhbFVSSVwiIHZhbHVlPVwiZmllbGQudmFsdWUuaW1nSGVhZGVyICsgZmllbGQudmFsdWUuZGF0YVwiIGFsdD1cIlNpZ25hdHVyZVwiPjwvc2lnbmF0dXJlPlxcbicgK1xuICAgICcgICAgICAgICAgICA8L2gzPlxcbicgK1xuICAgICcgICAgICAgICAgICA8cD57e2ZpZWxkLnByb3BzLm5hbWV9fTwvcD5cXG4nICtcbiAgICAnICAgICAgICAgIDwvZGl2PlxcbicgK1xuICAgICcgICAgICAgICAgPG1kLWRpdmlkZXI+PC9tZC1kaXZpZGVyPlxcbicgK1xuICAgICcgICAgICAgIDwvbWQtbGlzdC1pdGVtPlxcbicgK1xuICAgICcgICAgICA8L2Rpdj5cXG4nICtcbiAgICAnXFxuJyArXG4gICAgJyAgICAgIDxkaXYgbmctc3dpdGNoLXdoZW49XCJsb2NhdGlvblwiPlxcbicgK1xuICAgICcgICAgICAgIDxtZC1saXN0LWl0ZW0gY2xhc3M9XCJtZC0zLWxpbmVcIj5cXG4nICtcbiAgICAnICAgICAgICAgIDxtZC1pY29uIG1kLWZvbnQtc2V0PVwibWF0ZXJpYWwtaWNvbnNcIj5wbGFjZTwvbWQtaWNvbj5cXG4nICtcbiAgICAnICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZC1saXN0LWl0ZW0tdGV4dFwiPlxcbicgK1xuICAgICcgICAgICAgICAgICA8aDM+e3tmaWVsZC52YWx1ZS5sYXR9fU4sIHt7ZmllbGQudmFsdWUubG9uZ319VzwvaDM+XFxuJyArXG4gICAgJyAgICAgICAgICAgIDxwPnt7ZmllbGQucHJvcHMubmFtZX19PC9wPlxcbicgK1xuICAgICcgICAgICAgICAgPC9kaXY+XFxuJyArXG4gICAgJyAgICAgICAgPC9tZC1saXN0LWl0ZW0+XFxuJyArXG4gICAgJyAgICAgIDwvZGl2PlxcbicgK1xuICAgICdcXG4nICtcbiAgICAnICAgICAgPGRpdiBuZy1zd2l0Y2gtd2hlbj1cIm51bWJlclwiPlxcbicgK1xuICAgICcgICAgICAgIDxtZC1saXN0LWl0ZW0gY2xhc3M9XCJtZC0yLWxpbmVcIj5cXG4nICtcbiAgICAnICAgICAgICAgIDxtZC1pY29uIG1kLWZvbnQtc2V0PVwibWF0ZXJpYWwtaWNvbnNcIj5maWx0ZXJfNDwvbWQtaWNvbj5cXG4nICtcbiAgICAnICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZC1saXN0LWl0ZW0tdGV4dFwiPlxcbicgK1xuICAgICcgICAgICAgICAgICA8aDM+e3tmaWVsZC52YWx1ZX19PC9oMz5cXG4nICtcbiAgICAnICAgICAgICAgICAgPHA+e3tmaWVsZC5wcm9wcy5uYW1lfX08L3A+XFxuJyArXG4gICAgJyAgICAgICAgICA8L2Rpdj5cXG4nICtcbiAgICAnICAgICAgICAgIDxtZC1kaXZpZGVyPjwvbWQtZGl2aWRlcj5cXG4nICtcbiAgICAnICAgICAgICA8L21kLWxpc3QtaXRlbT5cXG4nICtcbiAgICAnICAgICAgPC9kaXY+XFxuJyArXG4gICAgJ1xcbicgK1xuICAgICcgICAgICA8ZGl2IG5nLXN3aXRjaC13aGVuPVwicGhvdG9cIj5cXG4nICtcbiAgICAnICAgICAgICA8bWQtbGlzdC1pdGVtIGNsYXNzPVwibWQtMi1saW5lIHdpdGgtaW1hZ2VcIj5cXG4nICtcbiAgICAnICAgICAgICAgIDxtZC1pY29uIG1kLWZvbnQtc2V0PVwibWF0ZXJpYWwtaWNvbnNcIj5jYW1lcmE8L21kLWljb24+XFxuJyArXG4gICAgJyAgICAgICAgICA8ZGl2IGNsYXNzPVwibWQtbGlzdC1pdGVtLXRleHRcIj5cXG4nICtcbiAgICAnICAgICAgICAgICAgPGgzPlxcbicgK1xuICAgICcgICAgICAgICAgICAgIDxpbWcgbmctaWY9XCJmaWVsZC52YWx1ZS5sb2NhbFVSSVwiIG5nLXNyYz1cInt7ZmllbGQudmFsdWUubG9jYWxVUkl9fVwiIGFsdD1cInBob3RvXCI+PC9pbWc+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgPGltZyBuZy1pZj1cIiFmaWVsZC52YWx1ZS5sb2NhbFVSSVwiIG5nLXNyYz1cInt7ZmllbGQudmFsdWUuaW1nSGVhZGVyICsgZmllbGQudmFsdWUuZGF0YX19XCIgYWx0PVwicGhvdG9cIj48L2ltZz5cXG4nICtcbiAgICAnICAgICAgICAgICAgPC9oMz5cXG4nICtcbiAgICAnICAgICAgICAgIDwvZGl2PlxcbicgK1xuICAgICcgICAgICAgICAgPG1kLWRpdmlkZXI+PC9tZC1kaXZpZGVyPlxcbicgK1xuICAgICcgICAgICAgIDwvbWQtbGlzdC1pdGVtPlxcbicgK1xuICAgICcgICAgICA8L2Rpdj5cXG4nICtcbiAgICAnXFxuJyArXG4gICAgJyAgICAgIDxkaXYgbmctc3dpdGNoLWRlZmF1bHQ+XFxuJyArXG4gICAgJyAgICAgICAgPG1kLWxpc3QtaXRlbSBjbGFzcz1cIm1kLTItbGluZVwiPlxcbicgK1xuICAgICcgICAgICAgICAgPG1kLWljb24gbWQtZm9udC1zZXQ9XCJtYXRlcmlhbC1pY29uc1wiPnRleHRfZm9ybWF0PC9tZC1pY29uPlxcbicgK1xuICAgICcgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kLWxpc3QtaXRlbS10ZXh0XCI+XFxuJyArXG4gICAgJyAgICAgICAgICAgIDxoMz57e2ZpZWxkLnZhbHVlfX08L2gzPlxcbicgK1xuICAgICcgICAgICAgICAgICA8cD57e2ZpZWxkLnByb3BzLm5hbWV9fTwvcD5cXG4nICtcbiAgICAnICAgICAgICAgIDwvZGl2PlxcbicgK1xuICAgICcgICAgICAgICAgPG1kLWRpdmlkZXI+PC9tZC1kaXZpZGVyPlxcbicgK1xuICAgICcgICAgICAgIDwvbWQtbGlzdC1pdGVtPlxcbicgK1xuICAgICcgICAgICA8L2Rpdj5cXG4nICtcbiAgICAnICAgIDwvbmctc3dpdGNoPlxcbicgK1xuICAgICcgIDwvZGl2PlxcbicgK1xuICAgICc8L21kLWxpc3Q+XFxuJyArXG4gICAgJycpO1xufV0pO1xuIiwidmFyIG5nTW9kdWxlO1xudHJ5IHtcbiAgbmdNb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgnd2ZtLmFwcGZvcm0uZGlyZWN0aXZlcycpO1xufSBjYXRjaCAoZSkge1xuICBuZ01vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCd3Zm0uYXBwZm9ybS5kaXJlY3RpdmVzJywgW10pO1xufVxuXG5uZ01vZHVsZS5ydW4oWyckdGVtcGxhdGVDYWNoZScsIGZ1bmN0aW9uICgkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoJ3dmbS10ZW1wbGF0ZS9hcHBmb3JtLnRwbC5odG1sJyxcbiAgICAnPCEtLVxcbicgK1xuICAgICcgQ09ORklERU5USUFMXFxuJyArXG4gICAgJyBDb3B5cmlnaHQgMjAxNiBSZWQgSGF0LCBJbmMuIGFuZC9vciBpdHMgYWZmaWxpYXRlcy5cXG4nICtcbiAgICAnIFRoaXMgaXMgdW5wdWJsaXNoZWQgcHJvcHJpZXRhcnkgc291cmNlIGNvZGUgb2YgUmVkIEhhdC5cXG4nICtcbiAgICAnLS0+XFxuJyArXG4gICAgJzxkaXYgY2xhc3M9XCJhcHAtZm9ybVwiIGxheW91dC1wYWRkaW5nID5cXG4nICtcbiAgICAnXFxuJyArXG4gICAgJzxmb3JtIG5hbWU9XCJ3b3Jrb3JkZXJGb3JtXCIgbm92YWxpZGF0ZT5cXG4nICtcbiAgICAnICA8ZGl2IG5nLXJlcGVhdD1cImZpZWxkIGluIGN0cmwuZmllbGRzXCI+XFxuJyArXG4gICAgJyAgICA8YXBwZm9ybS1maWVsZCBmaWVsZD1cImZpZWxkXCIgbW9kZWw9XCJjdHJsLm1vZGVsW2ZpZWxkLnByb3BzLmZpZWxkQ29kZSB8fCBmaWVsZC5wcm9wcy5faWRdXCI+PC9hcHBmb3JtLWZpZWxkPlxcbicgK1xuICAgICcgIDwvZGl2PlxcbicgK1xuICAgICdcXG4nICtcbiAgICAnICA8ZGl2IGNsYXNzPVwid29ya2Zsb3ctYWN0aW9ucyBtZC1wYWRkaW5nIG1kLXdoaXRlZnJhbWUtejRcIj5cXG4nICtcbiAgICAnICAgIDxtZC1idXR0b24gY2xhc3M9XCJtZC1wcmltYXJ5IG1kLWh1ZS0xXCIgbmctY2xpY2s9XCJjdHJsLmJhY2soJGV2ZW50KVwiPkJhY2s8L21kLWJ1dHRvbj5cXG4nICtcbiAgICAnICAgIDxtZC1idXR0b24gdHlwZT1cImJ1dHRvblwiIG5nLWNsaWNrPVwiY3RybC5kb25lKCRldmVudCwgd29ya29yZGVyRm9ybS4kdmFsaWQpXCIgY2xhc3M9XCJtZC1wcmltYXJ5XCI+Q29udGludWU8L21kLWJ1dHRvbj5cXG4nICtcbiAgICAnICA8L2Rpdj48IS0tIHdvcmtmbG93LWFjdGlvbnMtLT5cXG4nICtcbiAgICAnXFxuJyArXG4gICAgJzwvZm9ybT5cXG4nICtcbiAgICAnXFxuJyArXG4gICAgJzwvZGl2PjwhLS0gYXBwLWZvcm0gLS0+XFxuJyArXG4gICAgJycpO1xufV0pO1xuIiwicmVxdWlyZSgnLi9hcHBmb3JtLWZpZWxkLWRhdGUudHBsLmh0bWwuanMnKTtcbnJlcXVpcmUoJy4vYXBwZm9ybS1maWVsZC1kYXRldGltZS50cGwuaHRtbC5qcycpO1xucmVxdWlyZSgnLi9hcHBmb3JtLWZpZWxkLWxvY2F0aW9uLnRwbC5odG1sLmpzJyk7XG5yZXF1aXJlKCcuL2FwcGZvcm0tZmllbGQtbnVtYmVyLnRwbC5odG1sLmpzJyk7XG5yZXF1aXJlKCcuL2FwcGZvcm0tZmllbGQtcGhvdG8udHBsLmh0bWwuanMnKTtcbnJlcXVpcmUoJy4vYXBwZm9ybS1maWVsZC10aW1lLnRwbC5odG1sLmpzJyk7XG5yZXF1aXJlKCcuL2FwcGZvcm0tZmllbGQudHBsLmh0bWwuanMnKTtcbnJlcXVpcmUoJy4vYXBwZm9ybS1zdWJtaXNzaW9uLnRwbC5odG1sLmpzJyk7XG5yZXF1aXJlKCcuL2FwcGZvcm0udHBsLmh0bWwuanMnKTtcbiIsIi8qKlxuKiBDT05GSURFTlRJQUxcbiogQ29weXJpZ2h0IDIwMTYgUmVkIEhhdCwgSW5jLiBhbmQvb3IgaXRzIGFmZmlsaWF0ZXMuXG4qIFRoaXMgaXMgdW5wdWJsaXNoZWQgcHJvcHJpZXRhcnkgc291cmNlIGNvZGUgb2YgUmVkIEhhdC5cbioqL1xuJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICd3Zm0uYXBwZm9ybSc7XG5cbmFuZ3VsYXIubW9kdWxlKCd3Zm0uYXBwZm9ybScsIFtcbiAgJ3dmbS5jb3JlLm1lZGlhdG9yJ1xuLCByZXF1aXJlKCcuL2RpcmVjdGl2ZScpXG5dKVxuXG4ucnVuKGZ1bmN0aW9uKG1lZGlhdG9yKSB7XG4gIHJlcXVpcmUoJy4uL2FwcGZvcm0tbWVkaWF0b3InKShtZWRpYXRvcik7XG59KTtcbiIsIi8qKlxuKiBDT05GSURFTlRJQUxcbiogQ29weXJpZ2h0IDIwMTYgUmVkIEhhdCwgSW5jLiBhbmQvb3IgaXRzIGFmZmlsaWF0ZXMuXG4qIFRoaXMgaXMgdW5wdWJsaXNoZWQgcHJvcHJpZXRhcnkgc291cmNlIGNvZGUgb2YgUmVkIEhhdC5cbioqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgbmdNb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgnd2ZtLmFwcGZvcm0uZGlyZWN0aXZlcycsIFtcbiAgJ3dmbS5jb3JlLm1lZGlhdG9yJyxcbiAgcmVxdWlyZSgnLi9zZXJ2aWNlJyksXG4gIHJlcXVpcmUoJ2ZoLXdmbS1zaWduYXR1cmUnKVxuXSk7XG5tb2R1bGUuZXhwb3J0cyA9ICd3Zm0uYXBwZm9ybS5kaXJlY3RpdmVzJztcblxudmFyIF8gPSByZXF1aXJlKCdsb2Rhc2gnKTtcbnJlcXVpcmUoJy4uLy4uL2Rpc3QnKTtcblxubmdNb2R1bGUucnVuKGZ1bmN0aW9uKGFwcGZvcm1DbGllbnQpIHtcbiAgYXBwZm9ybUNsaWVudC5pbml0KCk7XG59KVxuXG5uZ01vZHVsZS5kaXJlY3RpdmUoJ2FwcGZvcm1TdWJtaXNzaW9uJywgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUsICRxLCBhcHBmb3JtQ2xpZW50KSB7XG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdFJ1xuICAsIHRlbXBsYXRlOiAkdGVtcGxhdGVDYWNoZS5nZXQoJ3dmbS10ZW1wbGF0ZS9hcHBmb3JtLXN1Ym1pc3Npb24udHBsLmh0bWwnKVxuICAsIHNjb3BlOiB7XG4gICAgICBzdWJtaXNzaW9uTG9jYWxJZDogJz1zdWJtaXNzaW9uTG9jYWxJZCdcbiAgICAsIHN1Ym1pc3Npb25JZDogJz1zdWJtaXNzaW9uSWQnXG4gICAgLCBzdWJtaXNzaW9uOiAnPXN1Ym1pc3Npb24nXG4gICAgfVxuICAsIGNvbnRyb2xsZXI6IGZ1bmN0aW9uKCRzY29wZSkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgdmFyIHN1Ym1pc3Npb25Qcm9taXNlO1xuICAgICAgaWYgKCRzY29wZS5zdWJtaXNzaW9uKSB7XG4gICAgICAgIHN1Ym1pc3Npb25Qcm9taXNlID0gJHEud2hlbigkc2NvcGUuc3VibWlzc2lvbik7XG4gICAgICB9IGVsc2UgaWYgKCRzY29wZS5zdWJtaXNzaW9uSWQpIHtcbiAgICAgICAgc3VibWlzc2lvblByb21pc2UgPSBhcHBmb3JtQ2xpZW50LmdldFN1Ym1pc3Npb24oJHNjb3BlLnN1Ym1pc3Npb25JZCk7XG4gICAgICB9IGVsc2UgaWYgKCRzY29wZS5zdWJtaXNzaW9uTG9jYWxJZCkge1xuICAgICAgICBzdWJtaXNzaW9uUHJvbWlzZSA9IGFwcGZvcm1DbGllbnQuZ2V0U3VibWlzc2lvbkxvY2FsKCRzY29wZS5zdWJtaXNzaW9uTG9jYWxJZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdhcHBmb3JtU3VibWlzc2lvbiBjYWxsZWQgd2l0aCBubyBzdWJtaXNzaW9uJyk7XG4gICAgICB9XG4gICAgICBzdWJtaXNzaW9uUHJvbWlzZS50aGVuKGZ1bmN0aW9uKHN1Ym1pc3Npb24pIHtcbiAgICAgICAgdmFyIGZvcm1Qcm9taXNlID0gc3VibWlzc2lvbi5mb3JtID8gJHEud2hlbihzdWJtaXNzaW9uLmZvcm0pIDogYXBwZm9ybUNsaWVudC5nZXRGb3JtKHN1Ym1pc3Npb24ucHJvcHMuZm9ybUlkKTtcbiAgICAgICAgcmV0dXJuIGZvcm1Qcm9taXNlLnRoZW4oZnVuY3Rpb24oZm9ybSkge1xuICAgICAgICAgIHNlbGYuZm9ybSA9IGZvcm07XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBhcHBmb3JtQ2xpZW50LmdldEZpZWxkcyhzdWJtaXNzaW9uKTtcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgICAudGhlbihmdW5jdGlvbihmaWVsZHMpIHtcbiAgICAgICAgc2VsZi5maWVsZHMgPSBmaWVsZHM7XG4gICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgLCBjb250cm9sbGVyQXM6ICdjdHJsJ1xuICB9O1xufSk7XG5cbm5nTW9kdWxlLmRpcmVjdGl2ZSgnYXBwZm9ybScsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlLCAkcSwgbWVkaWF0b3IsIGFwcGZvcm1DbGllbnQpIHtcbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0UnXG4gICwgdGVtcGxhdGU6ICR0ZW1wbGF0ZUNhY2hlLmdldCgnd2ZtLXRlbXBsYXRlL2FwcGZvcm0udHBsLmh0bWwnKVxuICAsIHNjb3BlOiB7XG4gICAgICBmb3JtOiAnPScsXG4gICAgICBmb3JtSWQ6ICc9J1xuICAgIH1cbiAgLCBjb250cm9sbGVyOiBmdW5jdGlvbigkc2NvcGUsICRlbGVtZW50KSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciBmb3JtO1xuICAgIHZhciBmb3JtUHJvbWlzZSA9ICRzY29wZS5mb3JtID8gJHEud2hlbigkc2NvcGUuZm9ybSkgOiBhcHBmb3JtQ2xpZW50LmdldEZvcm0oJHNjb3BlLmZvcm1JZCk7XG4gICAgZm9ybVByb21pc2UudGhlbihmdW5jdGlvbihfZm9ybSkge1xuICAgICAgZm9ybSA9IF9mb3JtO1xuICAgICAgc2VsZi5maWVsZHMgPSBmb3JtLmZpZWxkcztcbiAgICAgIHNlbGYubW9kZWwgPSB7fTtcbiAgICAgIF8uZm9yRWFjaChzZWxmLmZpZWxkcywgZnVuY3Rpb24oZmllbGQpIHtcbiAgICAgICAgc2VsZi5tb2RlbFtmaWVsZC5wcm9wcy5maWVsZENvZGUgfHwgZmllbGQucHJvcHMuX2lkXSA9IHt9O1xuICAgICAgfSk7XG4gICAgfSlcbiAgICBzZWxmLmJhY2sgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgbWVkaWF0b3IucHVibGlzaCgnd2ZtOndvcmtmbG93OnN0ZXA6YmFjaycpO1xuICAgIH1cbiAgICBzZWxmLmRvbmUgPSBmdW5jdGlvbihldmVudCwgaXNWYWxpZCkge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICRzY29wZS4kYnJvYWRjYXN0KCdwYXJlbnRGb3JtU3VibWl0dGVkJyk7XG4gICAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2ludmFsaWQnLCBldmVudClcbiAgICAgICAgdmFyIGZpcnN0SW52YWxpZCA9ICRlbGVtZW50WzBdLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Lm5nLWludmFsaWQnKTtcbiAgICAgICAgLy8gaWYgd2UgZmluZCBvbmUsIHNldCBmb2N1c1xuICAgICAgICBpZiAoZmlyc3RJbnZhbGlkKSB7XG4gICAgICAgICAgZmlyc3RJbnZhbGlkLmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBzdWJtaXNzaW9uRmllbGRzID0gW107XG4gICAgICAgIF8uZm9yRWFjaChzZWxmLmZpZWxkcywgZnVuY3Rpb24oZmllbGQpIHtcbiAgICAgICAgICB2YXIgdmFsdWUgPSBzZWxmLm1vZGVsW2ZpZWxkLnByb3BzLmZpZWxkQ29kZSB8fCBmaWVsZC5wcm9wcy5faWRdLnZhbHVlO1xuICAgICAgICAgIHN1Ym1pc3Npb25GaWVsZHMucHVzaCh7XG4gICAgICAgICAgICBmaWVsZElkOiBmaWVsZC5wcm9wcy5faWQsXG4gICAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgYXBwZm9ybUNsaWVudC5jcmVhdGVTdWJtaXNzaW9uKGZvcm0sIHN1Ym1pc3Npb25GaWVsZHMpXG4gICAgICAgIC50aGVuKGFwcGZvcm1DbGllbnQuc3VibWl0U3VibWlzc2lvbilcbiAgICAgICAgLnRoZW4oYXBwZm9ybUNsaWVudC5jb21wb3NlU3VibWlzc2lvblJlc3VsdClcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24oc3VibWlzc2lvblJlc3VsdCkge1xuICAgICAgICAgIG1lZGlhdG9yLnB1Ymxpc2goJ3dmbTp3b3JrZmxvdzpzdGVwOmRvbmUnLCBzdWJtaXNzaW9uUmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdzdWJtaXNzaW9uRmllbGRzJywgc3VibWlzc2lvbkZpZWxkcyk7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgIH1cbiAgfVxuICAsIGNvbnRyb2xsZXJBczogJ2N0cmwnXG4gIH07XG59KTtcblxubmdNb2R1bGUuZGlyZWN0aXZlKCdhcHBmb3JtRmllbGQnLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSwgJHRpbWVvdXQsIG1lZGlhdG9yKSB7XG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdFJ1xuICAsIHRlbXBsYXRlOiAkdGVtcGxhdGVDYWNoZS5nZXQoJ3dmbS10ZW1wbGF0ZS9hcHBmb3JtLWZpZWxkLnRwbC5odG1sJylcbiAgLCBzY29wZToge1xuICAgICAgZmllbGQ6ICc9JyxcbiAgICAgIG1vZGVsOiAnPSdcbiAgICB9XG4gICwgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbGVtZW50LCBhdHRycywgY3RybCkge1xuICAgICAgdmFyIHBhcmVudEZvcm0gPSBlbGVtZW50LnBhcmVudCgpO1xuICAgICAgd2hpbGUgKHBhcmVudEZvcm0gJiYgcGFyZW50Rm9ybS5wcm9wKCd0YWdOYW1lJykgIT09ICdGT1JNJykge1xuICAgICAgICBwYXJlbnRGb3JtID0gcGFyZW50Rm9ybS5wYXJlbnQoKTtcbiAgICAgIH07XG4gICAgICBpZiAocGFyZW50Rm9ybSkge1xuICAgICAgICB2YXIgZm9ybUNvbnRyb2xsZXIgPSBlbGVtZW50LmZpbmQoJ25nLWZvcm0nKS5jb250cm9sbGVyKCdmb3JtJyk7XG4gICAgICAgIHNjb3BlLiRvbigncGFyZW50Rm9ybVN1Ym1pdHRlZCcsZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICBjdHJsLnN1Ym1pdChlbGVtZW50KTtcbiAgICAgICAgICBmb3JtQ29udHJvbGxlci4kc2V0U3VibWl0dGVkKCk7XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICB9XG4gICwgY29udHJvbGxlcjogZnVuY3Rpb24oJHNjb3BlKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHNlbGYuZmllbGQgPSAkc2NvcGUuZmllbGQ7XG4gICAgc2VsZi5tb2RlbCA9IHt9O1xuICAgIGlmICgkc2NvcGUubW9kZWwgJiYgJHNjb3BlLm1vZGVsLnZhbHVlKSB7XG4gICAgICBzZWxmLm1vZGVsID0gYW5ndWxhci5jb3B5KCRzY29wZS5tb2RlbCk7XG4gICAgfSBlbHNlIGlmIChzZWxmLmZpZWxkLnByb3BzLmZpZWxkT3B0aW9ucy5kZWZpbml0aW9uICYmIHNlbGYuZmllbGQucHJvcHMuZmllbGRPcHRpb25zLmRlZmluaXRpb24uZGVmYXVsdFZhbHVlKSB7XG4gICAgICBzZWxmLm1vZGVsLnZhbHVlID0gc2VsZi5maWVsZC5wcm9wcy5maWVsZE9wdGlvbnMuZGVmaW5pdGlvbi5kZWZhdWx0VmFsdWU7XG4gICAgfTtcbiAgICBzZWxmLnN1Ym1pdCA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcblxuICAgICAgaWYgKHNlbGYuZmllbGQucHJvcHMudHlwZSA9PT0gJ2xvY2F0aW9uJykge1xuICAgICAgICB2YXIgaW5wdXRzID0gZWxlbWVudFswXS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW5wdXQnKTtcbiAgICAgICAgc2VsZi5tb2RlbC52YWx1ZSA9IHtcbiAgICAgICAgICBsYXQ6IGlucHV0c1swXS52YWx1ZSxcbiAgICAgICAgICBsb25nOiBpbnB1dHNbMV0udmFsdWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgJHNjb3BlLm1vZGVsLnZhbHVlID0gc2VsZi5tb2RlbC52YWx1ZTtcbiAgICB9XG4gIH1cbiAgLCBjb250cm9sbGVyQXM6ICdjdHJsJ1xuICB9O1xufSk7XG5cbm5nTW9kdWxlLmRpcmVjdGl2ZSgnYXBwZm9ybUZpZWxkTG9jYXRpb24nLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSwgJHRpbWVvdXQsIG1lZGlhdG9yKSB7XG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdFJ1xuICAsIHRlbXBsYXRlOiAkdGVtcGxhdGVDYWNoZS5nZXQoJ3dmbS10ZW1wbGF0ZS9hcHBmb3JtLWZpZWxkLWxvY2F0aW9uLnRwbC5odG1sJylcbiAgLCBzY29wZToge1xuICAgICAgZmllbGQ6ICc9J1xuICAgICwgbW9kZWw6ICc9J1xuICAgIH1cbiAgLCBjb250cm9sbGVyOiBmdW5jdGlvbigkc2NvcGUpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgc2VsZi5maWVsZCA9ICRzY29wZS5maWVsZDtcbiAgICBzZWxmLm1vZGVsID0gJHNjb3BlLm1vZGVsID8gYW5ndWxhci5jb3B5KCRzY29wZS5tb2RlbCkgOiB7fTtcbiAgICBzZWxmLm1vZGVsLnZhbHVlID0gc2VsZi5tb2RlbC52YWx1ZSB8fCB7fTtcbiAgICBzZWxmLmlzVmFsaWQgPSBmdW5jdGlvbihmb3JtLCBlbGVtZW50KSB7XG4gICAgICBjb25zb2xlLmxvZygnZm9ybScsIGZvcm0pO1xuICAgICAgY29uc29sZS5sb2coJ2VsZW1lbnQnLCBlbGVtZW50KTtcbiAgICB9XG4gICAgc2VsZi5zZXRMb2NhdGlvbiA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihmdW5jdGlvbihwb3MpIHtcbiAgICAgICAgJHNjb3BlLiRhcHBseShmdW5jdGlvbigpIHtcbiAgICAgICAgICBzZWxmLm1vZGVsLnZhbHVlLmxhdCA9IHBhcnNlRmxvYXQocG9zLmNvb3Jkcy5sYXRpdHVkZSk7XG4gICAgICAgICAgc2VsZi5tb2RlbC52YWx1ZS5sb25nID0gcGFyc2VGbG9hdChwb3MuY29vcmRzLmxvbmdpdHVkZSk7XG4gICAgICAgICAgY29uc29sZS5sb2coJ3Bvc2l0aW9uIHNldCcsIHNlbGYubW9kZWwudmFsdWUpXG4gICAgICAgIH0pO1xuICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgIGFsZXJ0KCdVbmFibGUgdG8gZ2V0IGN1cnJlbnQgcG9zaXRpb24nKTtcbiAgICAgICAgc2VsZi5tb2RlbC52YWx1ZS5sYXQgPSAtMTtcbiAgICAgICAgc2VsZi5tb2RlbC52YWx1ZS5sb25nID0gLTE7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgLCBjb250cm9sbGVyQXM6ICdjdHJsJ1xuICB9O1xufSk7XG5cbm5nTW9kdWxlLmRpcmVjdGl2ZSgnYXBwZm9ybUZpZWxkUGhvdG8nLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSwgJHdpbmRvdywgbWVkaWF0b3IsIG1vYmlsZUNhbWVyYSwgZGVza3RvcENhbWVyYSkge1xuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnRSdcbiAgLCB0ZW1wbGF0ZTogJHRlbXBsYXRlQ2FjaGUuZ2V0KCd3Zm0tdGVtcGxhdGUvYXBwZm9ybS1maWVsZC1waG90by50cGwuaHRtbCcpXG4gICwgc2NvcGU6IHtcbiAgICAgIGZpZWxkOiAnPSdcbiAgICAsIG1vZGVsOiAnPSdcbiAgICB9XG4gICwgY29udHJvbGxlcjogZnVuY3Rpb24oJHNjb3BlKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHNlbGYuZmllbGQgPSAkc2NvcGUuZmllbGQ7XG4gICAgc2VsZi5tb2RlbCA9ICRzY29wZS5tb2RlbDsgLy8gPyBhbmd1bGFyLmNvcHkoJHNjb3BlLm1vZGVsKSA6IHt9O1xuICAgIHNlbGYuaXNWYWxpZCA9IGZ1bmN0aW9uKGZvcm0sIGVsZW1lbnQpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdmb3JtJywgZm9ybSk7XG4gICAgICBjb25zb2xlLmxvZygnZWxlbWVudCcsIGVsZW1lbnQpO1xuICAgIH1cbiAgICBzZWxmLmNhcHR1cmUgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGlmICgkd2luZG93LmNvcmRvdmEpIHtcbiAgICAgICAgbW9iaWxlQ2FtZXJhLmNhcHR1cmUoKVxuICAgICAgICAudGhlbihmdW5jdGlvbihjYXB0dXJlKSB7XG4gICAgICAgICAgc2VsZi5tb2RlbC52YWx1ZSA9IGNhcHR1cmU7XG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZXNrdG9wQ2FtZXJhLmNhcHR1cmUoKVxuICAgICAgICAudGhlbihmdW5jdGlvbihkYXRhVXJsKSB7XG4gICAgICAgICAgc2VsZi5tb2RlbC52YWx1ZSA9IGRhdGFVcmw7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAsIGNvbnRyb2xsZXJBczogJ2N0cmwnXG4gIH07XG59KTtcblxubmdNb2R1bGUuZGlyZWN0aXZlKCdhcHBmb3JtRmllbGROdW1iZXInLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSwgJHdpbmRvdywgJGRvY3VtZW50LCAkdGltZW91dCwgbWVkaWF0b3IpIHtcbiByZXR1cm4ge1xuICAgcmVzdHJpY3Q6ICdFJ1xuICwgdGVtcGxhdGU6ICR0ZW1wbGF0ZUNhY2hlLmdldCgnd2ZtLXRlbXBsYXRlL2FwcGZvcm0tZmllbGQtbnVtYmVyLnRwbC5odG1sJylcbiAsIHNjb3BlOiB7XG4gICBmaWVsZDogJz0nLFxuICAgbW9kZWw6ICc9JyxcbiB9XG4gLCBjb250cm9sbGVyOiBmdW5jdGlvbigkc2NvcGUpIHtcbiAgIHZhciBzZWxmID0gdGhpcztcbiAgIHNlbGYuZmllbGQgPSAkc2NvcGUuZmllbGQ7XG4gICBzZWxmLm1vZGVsID0gJHNjb3BlLm1vZGVsO1xuICAgaWYgKHNlbGYuZmllbGQucHJvcHMuZmllbGRPcHRpb25zLmRlZmluaXRpb24gJiYgc2VsZi5maWVsZC5wcm9wcy5maWVsZE9wdGlvbnMuZGVmaW5pdGlvbi5kZWZhdWx0VmFsdWUpIHtcbiAgICAgc2VsZi5tb2RlbC52YWx1ZSA9IHBhcnNlRmxvYXQoc2VsZi5maWVsZC5wcm9wcy5maWVsZE9wdGlvbnMuZGVmaW5pdGlvbi5kZWZhdWx0VmFsdWUpO1xuICAgfTtcbiB9XG4gLCBjb250cm9sbGVyQXM6ICdjdHJsJ1xuIH07XG59KTtcblxuZnVuY3Rpb24gZ2V0RGF0ZShkKXtcbiAgcmV0dXJuICdZWVlZLU1NLUREJy5yZXBsYWNlKCdZWVlZJywgZC5nZXRGdWxsWWVhcigpKS5yZXBsYWNlKCdNTScsIHR3b0RpZ2koZC5nZXRNb250aCgpKzEpKS5yZXBsYWNlKCdERCcsIHR3b0RpZ2koZC5nZXREYXRlKCkpKTtcbn07XG5cbmZ1bmN0aW9uIGdldFRpbWUoZCl7XG4gIHJldHVybiAnSEg6bW0nLnJlcGxhY2UoJ0hIJywgdHdvRGlnaShkLmdldEhvdXJzKCkpKS5yZXBsYWNlKCdtbScsIHR3b0RpZ2koZC5nZXRNaW51dGVzKCkpKTtcbn07XG5cbmZ1bmN0aW9uIHR3b0RpZ2kobnVtKXtcbiAgaWYgKG51bSA8IDEwKXtcbiAgICByZXR1cm4gJzAnICsgbnVtLnRvU3RyaW5nKCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG51bS50b1N0cmluZygpO1xuICB9XG59XG5cbm5nTW9kdWxlLmRpcmVjdGl2ZSgnYXBwZm9ybUZpZWxkRGF0ZXRpbWUnLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSwgJHdpbmRvdywgJGRvY3VtZW50LCAkdGltZW91dCwgbWVkaWF0b3IpIHtcbiByZXR1cm4ge1xuICAgcmVzdHJpY3Q6ICdFJ1xuICwgdGVtcGxhdGU6ICR0ZW1wbGF0ZUNhY2hlLmdldCgnd2ZtLXRlbXBsYXRlL2FwcGZvcm0tZmllbGQtZGF0ZXRpbWUudHBsLmh0bWwnKVxuICwgc2NvcGU6IHtcbiAgIGZpZWxkOiAnPScsXG4gICBtb2RlbDogJz0nLFxuIH1cbiAsIGNvbnRyb2xsZXI6IGZ1bmN0aW9uKCRzY29wZSkge1xuICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgc2VsZi5maWVsZCA9ICRzY29wZS5maWVsZDtcbiAgIHNlbGYubW9kZWwgPSAkc2NvcGUubW9kZWw7XG4gICBpZiAoc2VsZi5maWVsZC5wcm9wcy5maWVsZE9wdGlvbnMuZGVmaW5pdGlvbiAmJiBzZWxmLmZpZWxkLnByb3BzLmZpZWxkT3B0aW9ucy5kZWZpbml0aW9uLmRlZmF1bHRWYWx1ZSkge1xuICAgICBzZWxmLm1vZGVsLnZhbHVlID0gbmV3IERhdGUoc2VsZi5maWVsZC5wcm9wcy5maWVsZE9wdGlvbnMuZGVmaW5pdGlvbi5kZWZhdWx0VmFsdWUpO1xuICAgfTtcbiAgIHNlbGYudXBkYXRlTW9kZWwgPSBmdW5jdGlvbigpIHtcbiAgICAgdmFyIGRhdGUgPSBuZXcgRGF0ZShzZWxmLm1vZGVsLmRhdGUpO1xuICAgICB2YXIgdGltZSA9IG5ldyBEYXRlKHNlbGYubW9kZWwudGltZSk7XG4gICAgICRzY29wZS5tb2RlbC52YWx1ZSA9IGdldERhdGUoZGF0ZSkgKyAnICcgKyBnZXRUaW1lKHRpbWUpO1xuICAgfVxuIH1cbiAsIGNvbnRyb2xsZXJBczogJ2N0cmwnXG4gfTtcbn0pO1xuXG5uZ01vZHVsZS5kaXJlY3RpdmUoJ2FwcGZvcm1GaWVsZERhdGUnLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSwgJHdpbmRvdywgJGRvY3VtZW50LCAkdGltZW91dCwgbWVkaWF0b3IpIHtcbiByZXR1cm4ge1xuICAgcmVzdHJpY3Q6ICdFJ1xuICwgdGVtcGxhdGU6ICR0ZW1wbGF0ZUNhY2hlLmdldCgnd2ZtLXRlbXBsYXRlL2FwcGZvcm0tZmllbGQtZGF0ZS50cGwuaHRtbCcpXG4gLCBzY29wZToge1xuICAgZmllbGQ6ICc9JyxcbiAgIG1vZGVsOiAnPScsXG4gfVxuICwgY29udHJvbGxlcjogZnVuY3Rpb24oJHNjb3BlKSB7XG4gICB2YXIgc2VsZiA9IHRoaXM7XG4gICBzZWxmLmZpZWxkID0gJHNjb3BlLmZpZWxkO1xuICAgc2VsZi5tb2RlbCA9ICRzY29wZS5tb2RlbDtcbiAgIGlmIChzZWxmLmZpZWxkLnByb3BzLmZpZWxkT3B0aW9ucy5kZWZpbml0aW9uICYmIHNlbGYuZmllbGQucHJvcHMuZmllbGRPcHRpb25zLmRlZmluaXRpb24uZGVmYXVsdFZhbHVlKSB7XG4gICAgIHNlbGYubW9kZWwudmFsdWUgPSBuZXcgRGF0ZShzZWxmLmZpZWxkLnByb3BzLmZpZWxkT3B0aW9ucy5kZWZpbml0aW9uLmRlZmF1bHRWYWx1ZSk7XG4gICB9O1xuICAgc2VsZi51cGRhdGVNb2RlbCA9IGZ1bmN0aW9uKCkge1xuICAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKHNlbGYubW9kZWwuZGF0ZSk7XG4gICAgICRzY29wZS5tb2RlbC52YWx1ZSA9IGdldERhdGUoZGF0ZSk7XG4gICB9XG4gfVxuICwgY29udHJvbGxlckFzOiAnY3RybCdcbiB9O1xufSk7XG5cbm5nTW9kdWxlLmRpcmVjdGl2ZSgnYXBwZm9ybUZpZWxkVGltZScsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlLCAkd2luZG93LCAkZG9jdW1lbnQsICR0aW1lb3V0LCBtZWRpYXRvcikge1xuIHJldHVybiB7XG4gICByZXN0cmljdDogJ0UnXG4gLCB0ZW1wbGF0ZTogJHRlbXBsYXRlQ2FjaGUuZ2V0KCd3Zm0tdGVtcGxhdGUvYXBwZm9ybS1maWVsZC10aW1lLnRwbC5odG1sJylcbiAsIHNjb3BlOiB7XG4gICBmaWVsZDogJz0nLFxuICAgbW9kZWw6ICc9JyxcbiB9XG4gLCBjb250cm9sbGVyOiBmdW5jdGlvbigkc2NvcGUpIHtcbiAgIHZhciBzZWxmID0gdGhpcztcbiAgIHNlbGYuZmllbGQgPSAkc2NvcGUuZmllbGQ7XG4gICBzZWxmLm1vZGVsID0gJHNjb3BlLm1vZGVsO1xuICAgaWYgKHNlbGYuZmllbGQucHJvcHMuZmllbGRPcHRpb25zLmRlZmluaXRpb24gJiYgc2VsZi5maWVsZC5wcm9wcy5maWVsZE9wdGlvbnMuZGVmaW5pdGlvbi5kZWZhdWx0VmFsdWUpIHtcbiAgICAgc2VsZi5tb2RlbC52YWx1ZSA9IG5ldyBEYXRlKHNlbGYuZmllbGQucHJvcHMuZmllbGRPcHRpb25zLmRlZmluaXRpb24uZGVmYXVsdFZhbHVlKTtcbiAgIH07XG4gICBzZWxmLnVwZGF0ZU1vZGVsID0gZnVuY3Rpb24oKSB7XG4gICAgIHZhciB0aW1lID0gbmV3IERhdGUoc2VsZi5tb2RlbC50aW1lKTtcbiAgICAgJHNjb3BlLm1vZGVsLnZhbHVlID0gZ2V0VGltZSh0aW1lKTtcbiAgIH1cbiB9XG4gLCBjb250cm9sbGVyQXM6ICdjdHJsJ1xuIH07XG59KTtcbiIsIi8qKlxuKiBDT05GSURFTlRJQUxcbiogQ29weXJpZ2h0IDIwMTYgUmVkIEhhdCwgSW5jLiBhbmQvb3IgaXRzIGFmZmlsaWF0ZXMuXG4qIFRoaXMgaXMgdW5wdWJsaXNoZWQgcHJvcHJpZXRhcnkgc291cmNlIGNvZGUgb2YgUmVkIEhhdC5cbioqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgY2xpZW50ID0gcmVxdWlyZSgnLi4vYXBwZm9ybScpXG5cbm1vZHVsZS5leHBvcnRzID0gJ3dmbS5hcHBmb3JtLnNlcnZpY2UnO1xuXG5hbmd1bGFyLm1vZHVsZSgnd2ZtLmFwcGZvcm0uc2VydmljZScsIFtdKVxuXG4uc2VydmljZSgnYXBwZm9ybUNsaWVudCcsIGZ1bmN0aW9uKCRxKSB7XG4gIHZhciBzZXJ2aWNlID0ge307XG5cbiAgdmFyIG1ldGhvZHMgPSBbXG4gICAgJ2luaXQnLFxuICAgICdsaXN0JyxcbiAgICAnZ2V0Rm9ybScsXG4gICAgJ2dldFN1Ym1pc3Npb25Mb2NhbCcsXG4gICAgJ2dldFN1Ym1pc3Npb24nLFxuICAgICdnZXRTdWJtaXNzaW9ucycsXG4gICAgJ2dldEZpZWxkcycsXG4gICAgJ2NyZWF0ZVN1Ym1pc3Npb24nLFxuICAgICdzdWJtaXRTdWJtaXNzaW9uJyxcbiAgICAndXBsb2FkU3VibWlzc2lvbicsXG4gICAgJ2NvbXBvc2VTdWJtaXNzaW9uUmVzdWx0JyxcbiAgICAnc3luY1N0ZXBSZXN1bHQnLFxuICAgICd3YXRjaFN1Ym1pc3Npb25Nb2RlbCdcbiAgXTtcblxuICBtZXRob2RzLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgc2VydmljZVttZXRob2RdID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gJHEud2hlbihjbGllbnRbbWV0aG9kXS5hcHBseShjbGllbnQsIGFyZ3VtZW50cykpO1xuICAgIH07XG4gIH0pO1xuXG4gIHJldHVybiBzZXJ2aWNlO1xufSk7XG4iLCIvKipcbiogQ09ORklERU5USUFMXG4qIENvcHlyaWdodCAyMDE2IFJlZCBIYXQsIEluYy4gYW5kL29yIGl0cyBhZmZpbGlhdGVzLlxuKiBUaGlzIGlzIHVucHVibGlzaGVkIHByb3ByaWV0YXJ5IHNvdXJjZSBjb2RlIG9mIFJlZCBIYXQuXG4qKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIGNsaWVudCA9IHJlcXVpcmUoJy4vYXBwZm9ybScpXG5cbmZ1bmN0aW9uIHdyYXBwZXIobWVkaWF0b3IpIHtcbiAgdmFyIGluaXRQcm9taXNlID0gY2xpZW50LmluaXQoKTtcbiAgbWVkaWF0b3Iuc3Vic2NyaWJlKCd3Zm06YXBwZm9ybTppbml0JywgZnVuY3Rpb24oKSB7XG4gICAgaW5pdFByb21pc2VcbiAgICAudGhlbihmdW5jdGlvbigpIHtcbiAgICAgIG1lZGlhdG9yLnB1Ymxpc2goJ2RvbmU6d2ZtOmFwcGZvcm06aW5pdCcpO1xuICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICBtZWRpYXRvci5wdWJsaXNoKCdlcnJvcjphcHBmb3JtOmluaXQnLCBlcnJvcik7XG4gICAgfSk7XG4gIH0pO1xuXG4gIG1lZGlhdG9yLnN1YnNjcmliZSgnaW5pdCcsIGZ1bmN0aW9uKCkge1xuICAgIG1lZGlhdG9yLnB1Ymxpc2goJ3Byb21pc2U6aW5pdCcsIGluaXRQcm9taXNlKTtcbiAgfSk7XG5cbiAgbWVkaWF0b3Iuc3Vic2NyaWJlKCd3Zm06YXBwZm9ybTpmb3JtOmxpc3QnLCBmdW5jdGlvbigpIHtcbiAgICBjbGllbnQubGlzdCgpXG4gICAgLnRoZW4oZnVuY3Rpb24oZm9ybXMpIHtcbiAgICAgIG1lZGlhdG9yLnB1Ymxpc2goJ2RvbmU6d2ZtOmFwcGZvcm06Zm9ybTpsaXN0JywgZm9ybXMpO1xuICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICBtZWRpYXRvci5wdWJsaXNoKCdlcnJvcjphcHBmb3JtOmZvcm06bGlzdCcsIGVycm9yKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgbWVkaWF0b3Iuc3Vic2NyaWJlKCd3Zm06YXBwZm9ybTpmb3JtOnJlYWQnLCBmdW5jdGlvbihmb3JtSWQpIHtcbiAgICBjbGllbnQuZ2V0Rm9ybShmb3JtSWQpXG4gICAgLnRoZW4oZnVuY3Rpb24oZm9ybSkge1xuICAgICAgbWVkaWF0b3IucHVibGlzaCgnZG9uZTp3Zm06YXBwZm9ybTpmb3JtOnJlYWQ6JyArIGZvcm1JZCwgZm9ybSk7XG4gICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgIG1lZGlhdG9yLnB1Ymxpc2goJ2Vycm9yOmFwcGZvcm06Zm9ybTpyZWFkOicgKyBmb3JtSWQsIGVycm9yKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgbWVkaWF0b3Iuc3Vic2NyaWJlKCd3Zm06YXBwZm9ybTpzdWJtaXNzaW9uOmxvY2FsOnJlYWQnLCBmdW5jdGlvbihzdWJtaXNzaW9uTG9jYWxJZCkge1xuICAgIGNsaWVudC5nZXRTdWJtaXNzaW9uTG9jYWwoc3VibWlzc2lvbkxvY2FsSWQpXG4gICAgLnRoZW4oZnVuY3Rpb24oc3VibWlzc2lvbikge1xuICAgICAgbWVkaWF0b3IucHVibGlzaCgnZG9uZTp3Zm06YXBwZm9ybTpzdWJtaXNzaW9uOmxvY2FsOnJlYWQ6JytzdWJtaXNzaW9uTG9jYWxJZCwgc3VibWlzc2lvbik7XG4gICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgIG1lZGlhdG9yLnB1Ymxpc2goJ2Vycm9yOmFwcGZvcm06c3VibWlzc2lvbjpsb2NhbDpyZWFkOicrc3VibWlzc2lvbkxvY2FsSWQsIGVycm9yKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgbWVkaWF0b3Iuc3Vic2NyaWJlKCd3Zm06YXBwZm9ybTpzdWJtaXNzaW9uOnJlbW90ZTpyZWFkJywgZnVuY3Rpb24oc3VibWlzc2lvbklkKSB7XG4gICAgY2xpZW50LmdldFN1Ym1pc3Npb24oc3VibWlzc2lvbklkKVxuICAgIC50aGVuKGZ1bmN0aW9uKHN1Ym1pc3Npb24pIHtcbiAgICAgIG1lZGlhdG9yLnB1Ymxpc2goJ2RvbmU6d2ZtOmFwcGZvcm06c3VibWlzc2lvbjpyZW1vdGU6cmVhZDonK3N1Ym1pc3Npb25JZCwgc3VibWlzc2lvbik7XG4gICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgIG1lZGlhdG9yLnB1Ymxpc2goJ2Vycm9yOmFwcGZvcm06c3VibWlzc2lvbjpyZW1vdGU6cmVhZDonK3N1Ym1pc3Npb25JZCwgZXJyb3IpO1xuICAgIH0pO1xuICB9KTtcblxuICBtZWRpYXRvci5zdWJzY3JpYmUoJ3dmbTphcHBmb3JtOnN1Ym1pc3Npb246bGlzdDpyZW1vdGU6cmVhZCcsIGZ1bmN0aW9uKHN1Ym1pc3Npb25JZHMsIGlkKSB7XG4gICAgY2xpZW50LmdldFN1Ym1pc3Npb25zKHN1Ym1pc3Npb25JZHMpXG4gICAgLnRoZW4oZnVuY3Rpb24oc3VibWlzc2lvbnMpIHtcbiAgICAgIG1lZGlhdG9yLnB1Ymxpc2goJ2RvbmU6d2ZtOmFwcGZvcm06c3VibWlzc2lvbjpsaXN0OnJlbW90ZTpyZWFkOicraWQsIHN1Ym1pc3Npb25zKTtcbiAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgbWVkaWF0b3IucHVibGlzaCgnZXJyb3I6YXBwZm9ybTpzdWJtaXNzaW9uOmxpc3Q6cmVtb3RlOnJlYWQ6JytpZCwgZXJyb3IpO1xuICAgIH0pO1xuICB9KTtcblxuICBtZWRpYXRvci5zdWJzY3JpYmUoJ3dmbTphcHBmb3JtOnN1Ym1pc3Npb246ZmllbGQ6bGlzdCcsIGZ1bmN0aW9uKHN1Ym1pc3Npb24pIHtcbiAgICBjbGllbnQuZ2V0RmllbGRzKHN1Ym1pc3Npb24pXG4gICAgLnRoZW4oZnVuY3Rpb24oZmllbGRzKSB7XG4gICAgICBtZWRpYXRvci5wdWJsaXNoKCdkb25lOndmbTphcHBmb3JtOnN1Ym1pc3Npb246ZmllbGQ6bGlzdDonK3N1Ym1pc3Npb24uZ2V0TG9jYWxJZCgpLCBmaWVsZHMpO1xuICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICBtZWRpYXRvci5wdWJsaXNoKCdlcnJvcjphcHBmb3JtOnN1Ym1pc3Npb246ZmllbGQ6bGlzdDonK3N1Ym1pc3Npb24uZ2V0TG9jYWxJZCgpLCBlcnJvcik7XG4gICAgfSk7XG4gIH0pO1xuXG4gIG1lZGlhdG9yLnN1YnNjcmliZSgnd2ZtOmFwcGZvcm06c3VibWlzc2lvbjpjcmVhdGUnLCBmdW5jdGlvbihmb3JtLCBzdWJtaXNzaW9uRmllbGRzLCB0cykge1xuICAgIGNsaWVudC5jcmVhdGVTdWJtaXNzaW9uKGZvcm0sIHN1Ym1pc3Npb25GaWVsZHMpXG4gICAgLnRoZW4oZnVuY3Rpb24oc3VibWlzc2lvbikge1xuICAgICAgbWVkaWF0b3IucHVibGlzaCgnZG9uZTp3Zm06YXBwZm9ybTpzdWJtaXNzaW9uOmNyZWF0ZTonICsgdHMsIHN1Ym1pc3Npb24pO1xuICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICBtZWRpYXRvci5wdWJsaXNoKCdlcnJvcjphcHBmb3JtOnN1Ym1pc3Npb246Y3JlYXRlOicgKyB0cywgZXJyb3IpO1xuICAgIH0pO1xuICB9KTtcblxuICBtZWRpYXRvci5zdWJzY3JpYmUoJ3dmbTphcHBmb3JtOnN1Ym1pc3Npb246c3VibWl0JywgZnVuY3Rpb24oc3VibWlzc2lvbikge1xuICAgIGNsaWVudC5zdWJtaXRTdWJtaXNzaW9uKHN1Ym1pc3Npb24pXG4gICAgLnRoZW4oZnVuY3Rpb24oc3VibWlzc2lvbikge1xuICAgICAgbWVkaWF0b3IucHVibGlzaCgnZG9uZTp3Zm06YXBwZm9ybTpzdWJtaXNzaW9uOnN1Ym1pdDonICsgc3VibWlzc2lvbi5nZXRMb2NhbElkKCksIHN1Ym1pc3Npb24pO1xuICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICBtZWRpYXRvci5wdWJsaXNoKCdlcnJvcjphcHBmb3JtOnN1Ym1pc3Npb246c3VibWl0OicgKyBzdWJtaXNzaW9uLmdldExvY2FsSWQoKSwgZXJyb3IpO1xuICAgIH0pO1xuICB9KTtcblxuICBtZWRpYXRvci5zdWJzY3JpYmUoJ3dmbTphcHBmb3JtOnN1Ym1pc3Npb246dXBsb2FkJywgZnVuY3Rpb24oc3VibWlzc2lvbikge1xuICAgIGNsaWVudC51cGxvYWRTdWJtaXNzaW9uKHN1Ym1pc3Npb24pXG4gICAgLnRoZW4oZnVuY3Rpb24oc3VibWlzc2lvbklkKSB7XG4gICAgICBtZWRpYXRvci5wdWJsaXNoKCdkb25lOndmbTphcHBmb3JtOnN1Ym1pc3Npb246dXBsb2FkOicgKyBzdWJtaXNzaW9uLnByb3BzLl9sdWRpZCwgc3VibWlzc2lvbklkKTtcbiAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgbWVkaWF0b3IucHVibGlzaCgnZXJyb3I6YXBwZm9ybTpzdWJtaXNzaW9uOnVwbG9hZDonICsgc3VibWlzc2lvbi5wcm9wcy5fbHVkaWQsIGVycm9yKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgY2xpZW50LmFkZFN1Ym1pc3Npb25Db21wbGV0ZUxpc3RlbmVyKGZ1bmN0aW9uKHN1Ym1pc3Npb25SZXN1bHQsIG1ldGFEYXRhKSB7XG4gICAgaWYgKG1ldGFEYXRhKSB7XG4gICAgICB2YXIgZXZlbnQgPSB7XG4gICAgICAgIHN1Ym1pc3Npb25SZXN1bHQ6IHN1Ym1pc3Npb25SZXN1bHQsXG4gICAgICAgIG1ldGFEYXRhOiBtZXRhRGF0YVxuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coJ21ldGFEYXRhJywgbWV0YURhdGEpO1xuICAgICAgbWVkaWF0b3IucHVibGlzaCgnd2ZtOmFwcGZvcm06c3VibWlzc2lvbjpjb21wbGV0ZScsIGV2ZW50KVxuICAgIH1cbiAgfSlcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gd3JhcHBlcjtcbiIsIi8qKlxuKiBDT05GSURFTlRJQUxcbiogQ29weXJpZ2h0IDIwMTYgUmVkIEhhdCwgSW5jLiBhbmQvb3IgaXRzIGFmZmlsaWF0ZXMuXG4qIFRoaXMgaXMgdW5wdWJsaXNoZWQgcHJvcHJpZXRhcnkgc291cmNlIGNvZGUgb2YgUmVkIEhhdC5cbioqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgcSA9IHJlcXVpcmUoJ3EnKTtcbnZhciBfID0gcmVxdWlyZSgnbG9kYXNoJyk7XG5cbnZhciBjbGllbnQgPSB7fTtcbnZhciBpbml0UHJvbWlzZTtcblxuY2xpZW50LmluaXQgPSBmdW5jdGlvbigpIHtcbiAgaWYgKGluaXRQcm9taXNlKSB7XG4gICAgcmV0dXJuIGluaXRQcm9taXNlO1xuICB9XG4gIHZhciBkZWZlcnJlZCA9IHEuZGVmZXIoKTtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICBzZWxmLmxpc3RlbmVycyA9IFtdO1xuICBpbml0UHJvbWlzZSA9IGRlZmVycmVkLnByb21pc2U7XG4gICRmaC5vbignZmhpbml0JywgZnVuY3Rpb24oZXJyb3IsIGhvc3QpIHtcbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIGRlZmVycmVkLnJlamVjdChuZXcgRXJyb3IoZXJyb3IpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgJGZoLmZvcm1zLmluaXQoZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBkZWZlcnJlZC5yZWplY3QobmV3IEVycm9yKGVycm9yKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygnRm9ybXMgaW5pdGlhbGl6ZWQuJyk7XG4gICAgICAgIGRlZmVycmVkLnJlc29sdmUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG4gICRmaC5mb3Jtcy5vbihcInN1Ym1pc3Npb246c3VibWl0dGVkXCIsIGZ1bmN0aW9uKHN1Ym1pc3Npb25JZCkge1xuICAgIHZhciBzdWJtaXNzaW9uID0gdGhpcztcbiAgICB2YXIgbWV0YURhdGEgPSBzdWJtaXNzaW9uLmdldCgnbWV0YURhdGEnKTtcbiAgICBpZiAoc2VsZi5saXN0ZW5lcnMubGVuZ3RoKSB7XG4gICAgICBzZWxmLmNvbXBvc2VTdWJtaXNzaW9uUmVzdWx0KHN1Ym1pc3Npb24pLnRoZW4oZnVuY3Rpb24oc3VibWlzc2lvblJlc3VsdCkge1xuICAgICAgICBzZWxmLmxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uKGxpc3RlbmVyKSB7XG4gICAgICAgICAgbGlzdGVuZXIoc3VibWlzc2lvblJlc3VsdCwgbWV0YURhdGEpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBpbml0UHJvbWlzZTtcbn07XG5cbmNsaWVudC5hZGRTdWJtaXNzaW9uQ29tcGxldGVMaXN0ZW5lciA9IGZ1bmN0aW9uKGxpc3RlbmVyKSB7XG4gIHRoaXMubGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xufTtcblxuY2xpZW50Lmxpc3QgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGRlZmVycmVkID0gcS5kZWZlcigpO1xuICBpbml0UHJvbWlzZS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICRmaC5mb3Jtcy5nZXRGb3JtcyhmdW5jdGlvbihlcnJvciwgZm9ybXNNb2RlbCkge1xuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIGRlZmVycmVkLnJlamVjdChuZXcgRXJyb3IoZXJyb3IpKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIGZvcm1zID0gZm9ybXNNb2RlbC5wcm9wcy5mb3JtcztcbiAgICAgIGRlZmVycmVkLnJlc29sdmUoZm9ybXMpO1xuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG59O1xuXG5jbGllbnQuZ2V0Rm9ybSA9IGZ1bmN0aW9uKGZvcm1JZCkge1xuICB2YXIgZGVmZXJyZWQgPSBxLmRlZmVyKCk7XG4gIGluaXRQcm9taXNlLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgJGZoLmZvcm1zLmdldEZvcm0oe2Zvcm1JZDogZm9ybUlkfSwgZnVuY3Rpb24gKGVycm9yLCBmb3JtKSB7XG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgZGVmZXJyZWQucmVqZWN0KG5ldyBFcnJvcihlcnJvcikpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBkZWZlcnJlZC5yZXNvbHZlKGZvcm0pO1xuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG59XG5cbmNsaWVudC5nZXRTdWJtaXNzaW9uTG9jYWwgPSBmdW5jdGlvbihzdWJtaXNzaW9uTG9jYWxJZCkge1xuICB2YXIgZGVmZXJyZWQgPSBxLmRlZmVyKCk7XG4gIGluaXRQcm9taXNlLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgJGZoLmZvcm1zLmdldFN1Ym1pc3Npb25zKGZ1bmN0aW9uKGVycm9yLCBzdWJtaXNzaW9ucykge1xuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIGRlZmVycmVkLnJlamVjdChuZXcgRXJyb3IoZXJyb3IpKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgc3VibWlzc2lvbnMuZ2V0U3VibWlzc2lvbkJ5TWV0YSh7X2x1ZGlkOiBzdWJtaXNzaW9uTG9jYWxJZH0sIGZ1bmN0aW9uKGVycm9yLCBzdWJtaXNzaW9uKSB7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIGRlZmVycmVkLnJlamVjdChuZXcgRXJyb3IoZXJyb3IpKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShzdWJtaXNzaW9uKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG59XG5cbmNsaWVudC5nZXRTdWJtaXNzaW9uID0gZnVuY3Rpb24oc3VibWlzc2lvbklkKSB7XG4gIHZhciBkZWZlcnJlZCA9IHEuZGVmZXIoKTtcbiAgaW5pdFByb21pc2UudGhlbihmdW5jdGlvbigpIHtcbiAgICAkZmguZm9ybXMuZG93bmxvYWRTdWJtaXNzaW9uKHtzdWJtaXNzaW9uSWQ6IHN1Ym1pc3Npb25JZH0sIGZ1bmN0aW9uKGVycm9yLCBzdWJtaXNzaW9uKSB7XG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgZGVmZXJyZWQucmVqZWN0KG5ldyBFcnJvcihlcnJvcikpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBkZWZlcnJlZC5yZXNvbHZlKHN1Ym1pc3Npb24pO1xuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG59XG5cbmNsaWVudC5nZXRTdWJtaXNzaW9ucyA9IGZ1bmN0aW9uKHN1Ym1pc3Npb25JZHMpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICB2YXIgcHJvbWlzZXMgPSBzdWJtaXNzaW9uSWRzLm1hcChmdW5jdGlvbihzdWJtaXNzaW9uSWQpIHtcbiAgICByZXR1cm4gaW5pdFByb21pc2UudGhlbihmdW5jdGlvbigpIHtcbiAgICAgIHNlbGYuZ2V0U3VibWlzc2lvbihzdWJtaXNzaW9uSWQpO1xuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIHEuYWxsU2V0dGxlZChwcm9taXNlcyk7XG59XG5cbmNsaWVudC5nZXRGaWVsZHMgPSBmdW5jdGlvbihzdWJtaXNzaW9uKSB7XG4gIHZhciBkZWZlcnJlZCA9IHEuZGVmZXIoKTtcbiAgaW5pdFByb21pc2UudGhlbihmdW5jdGlvbigpIHtcbiAgICBzdWJtaXNzaW9uLmdldEZvcm0oZnVuY3Rpb24oZXJyb3IsIGZvcm0pIHtcbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBkZWZlcnJlZC5yZWplY3QobmV3IEVycm9yKGVycm9yKSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBmaWVsZHMgPSBmb3JtLmZpZWxkcztcbiAgICAgIHZhciBxcyA9IFtdO1xuICAgICAgXy5mb3JPd24oZmllbGRzLCBmdW5jdGlvbihmaWVsZCwga2V5KSB7XG4gICAgICAgIHZhciBfZGVmZXJyZWQgPSBxLmRlZmVyKCk7XG4gICAgICAgIHFzLnB1c2goX2RlZmVycmVkLnByb21pc2UpO1xuICAgICAgICBzdWJtaXNzaW9uLmdldElucHV0VmFsdWVCeUZpZWxkSWQoZmllbGQuZ2V0RmllbGRJZCgpLCBmdW5jdGlvbihlcnJvciwgZmllbGRWYWx1ZXMpIHtcbiAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgIF9kZWZlcnJlZC5yZWplY3QobmV3IEVycm9yKGVycm9yKSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGZpZWxkLnZhbHVlID0gZmllbGRWYWx1ZXNbMF07XG4gICAgICAgICAgX2RlZmVycmVkLnJlc29sdmUoZmllbGRWYWx1ZXMpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgcS5hbGwocXMpLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgIGRlZmVycmVkLnJlc29sdmUoZmllbGRzKTtcbiAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgIGRlZmVycmVkLnJlamVjdChuZXcgRXJyb3IoZXJyb3IpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG59XG5cbi8qKlxuKiBUaGUgZmllbGRzIHBhcmFtZXRlciBpcyBhbiBhcnJheSBvZiB7ZmllbGRJZDogPC4uLj4sIHZhbHVlOiA8Li4uPn0gb2JqZWN0c1xuKi9cbmNsaWVudC5jcmVhdGVTdWJtaXNzaW9uID0gZnVuY3Rpb24oZm9ybSwgc3VibWlzc2lvbkZpZWxkcykge1xuICB2YXIgZGVmZXJyZWQgPSBxLmRlZmVyKCk7XG4gIGluaXRQcm9taXNlLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgdmFyIHN1Ym1pc3Npb24gPSBmb3JtLm5ld1N1Ym1pc3Npb24oKTtcbiAgICB2YXIgZHMgPSBbXTtcbiAgICBfLmZvckVhY2goc3VibWlzc2lvbkZpZWxkcywgZnVuY3Rpb24oZmllbGQpIHtcbiAgICAgIHZhciBkID0gcS5kZWZlcigpO1xuICAgICAgZHMucHVzaChkLnByb21pc2UpO1xuICAgICAgc3VibWlzc2lvbi5hZGRJbnB1dFZhbHVlKGZpZWxkLCBmdW5jdGlvbihlcnJvciwgcmVzdWx0KSB7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIGQucmVqZWN0KGVycm9yKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkLnJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcS5hbGwoZHMpXG4gICAgLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICBkZWZlcnJlZC5yZXNvbHZlKHN1Ym1pc3Npb24pO1xuICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICBkZWZlcnJlZC5yZWplY3QobmV3IEVycm9yKGVycm9yKSk7XG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbn07XG5cbmNsaWVudC5zdWJtaXRTdWJtaXNzaW9uID0gZnVuY3Rpb24oc3VibWlzc2lvbikge1xuICB2YXIgZGVmZXJyZWQgPSBxLmRlZmVyKCk7XG4gIGluaXRQcm9taXNlLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgc3VibWlzc2lvbi5zdWJtaXQoZnVuY3Rpb24oZXJyb3IsIHN1Ym1pdFJlc3BvbnNlKSB7XG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgZGVmZXJyZWQucmVqZWN0KG5ldyBFcnJvcihlcnJvcikpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9O1xuICAgICAgZGVmZXJyZWQucmVzb2x2ZShzdWJtaXNzaW9uKTtcbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xufTtcblxuY2xpZW50LnVwbG9hZFN1Ym1pc3Npb24gPSBmdW5jdGlvbihzdWJtaXNzaW9uKSB7XG4gIHZhciBkZWZlcnJlZCA9IHEuZGVmZXIoKTtcbiAgaW5pdFByb21pc2UudGhlbihmdW5jdGlvbigpIHtcbiAgICBzdWJtaXNzaW9uLnVwbG9hZChmdW5jdGlvbihlcnJvciwgdXBsb2FkVGFzaykge1xuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIGRlZmVycmVkLnJlamVjdChuZXcgRXJyb3IoZXJyb3IpKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfTtcbiAgICAgIHVwbG9hZFRhc2suc3VibWlzc2lvbk1vZGVsKGZ1bmN0aW9uKGVycm9yLCBzdWJtaXNzaW9uTW9kZWwpIHtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgZGVmZXJyZWQucmVqZWN0KG5ldyBFcnJvcihlcnJvcikpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfTtcbiAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShzdWJtaXNzaW9uTW9kZWwpO1xuICAgICAgfSlcbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xufTtcblxuY2xpZW50LmNvbXBvc2VTdWJtaXNzaW9uUmVzdWx0ID0gZnVuY3Rpb24oc3VibWlzc2lvbikge1xuICB2YXIgc3VibWlzc2lvblJlc3VsdCA9IHtcbiAgICAgIHN1Ym1pc3Npb25Mb2NhbElkOiBzdWJtaXNzaW9uLnByb3BzLl9sdWRpZFxuICAgICwgZm9ybUlkOiBzdWJtaXNzaW9uLnByb3BzLmZvcm1JZFxuICAgICwgc3RhdHVzOiBzdWJtaXNzaW9uLnByb3BzLnN0YXR1c1xuICB9O1xuICBpZiAoc3VibWlzc2lvbi5wcm9wcy5faWQpIHtcbiAgICBzdWJtaXNzaW9uUmVzdWx0LnN1Ym1pc3Npb25JZCA9IHN1Ym1pc3Npb24ucHJvcHMuX2lkO1xuICB9XG4gIHJldHVybiBxLndoZW4oc3VibWlzc2lvblJlc3VsdCk7XG59O1xuXG5jbGllbnQuc3luY1N0ZXBSZXN1bHQgPSBmdW5jdGlvbih3b3Jrb3JkZXIsIHN0ZXBSZXN1bHQpIHtcbiAgLy8ga2ljay1vZmYgYW4gYXBwZm9ybSB1cGxvYWQsIHVwZGF0ZSB0aGUgd29ya29yZGVyIHdoZW4gY29tcGxldGVcbiAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gIHJldHVybiBpbml0UHJvbWlzZVxuICAgIC50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHNlbGYuZ2V0U3VibWlzc2lvbkxvY2FsKHN0ZXBSZXN1bHQuc3VibWlzc2lvbi5zdWJtaXNzaW9uTG9jYWxJZCk7XG4gICAgfSlcbiAgICAudGhlbihmdW5jdGlvbihzdWJtaXNzaW9uKSB7XG4gICAgICBzdWJtaXNzaW9uLnNldCgnbWV0YURhdGEnLCB7XG4gICAgICAgIHdmbToge1xuICAgICAgICAgIHdvcmtvcmRlcklkOiB3b3Jrb3JkZXIuaWQsXG4gICAgICAgICAgc3RlcDogc3RlcFJlc3VsdC5zdGVwLFxuICAgICAgICAgIHRpbWVzdGFtcDogc3RlcFJlc3VsdC50aW1lc3RhbXBcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gc3VibWlzc2lvbjtcbiAgICB9KVxuICAgIC50aGVuKHNlbGYudXBsb2FkU3VibWlzc2lvbilcbiAgICAudGhlbihmdW5jdGlvbihzdWJtaXNzaW9uTW9kZWwpIHtcbiAgICAgIHNlbGYud2F0Y2hTdWJtaXNzaW9uTW9kZWwoc3VibWlzc2lvbk1vZGVsKTsgLy8gbmVlZCB0aGlzIHRvIHRyaWdnZXQgdGhlIGdsb2JhbCBldmVudFxuICAgICAgcmV0dXJuIHN1Ym1pc3Npb25Nb2RlbDtcbiAgICB9KTtcbn07XG5cbmNsaWVudC53YXRjaFN1Ym1pc3Npb25Nb2RlbCA9IGZ1bmN0aW9uKHN1Ym1pc3Npb25Nb2RlbCkge1xuICB2YXIgZGVmZXJyZWQgPSBxLmRlZmVyKCk7XG4gIHN1Ym1pc3Npb25Nb2RlbC5vbignc3VibWl0dGVkJywgZnVuY3Rpb24oc3VibWlzc2lvbklkKSB7XG4gICAgJGZoLmZvcm1zLmRvd25sb2FkU3VibWlzc2lvbih7c3VibWlzc2lvbklkOiBzdWJtaXNzaW9uSWR9LCBmdW5jdGlvbihlcnJvciwgcmVtb3RlU3VibWlzc2lvbikge1xuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIGRlZmVycmVkLnJlamVjdChlcnJvcik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH07XG4gICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlbW90ZVN1Ym1pc3Npb24pO1xuICAgIH0pO1xuICB9KTtcbiAgLy8gIFRPRE86IERvIHdlIG5lZWQgYSB0aW1lb3V0IGhlcmUgdG8gY2xlYW51cCBzdWJtaXNzaW9uTW9kZWwgbGlzdGVuZXJzP1xuICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gY2xpZW50O1xuIiwidmFyIG5nTW9kdWxlO1xudHJ5IHtcbiAgbmdNb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgnd2ZtLmNhbWVyYS5kaXJlY3RpdmVzJyk7XG59IGNhdGNoIChlKSB7XG4gIG5nTW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ3dmbS5jYW1lcmEuZGlyZWN0aXZlcycsIFtdKTtcbn1cblxubmdNb2R1bGUucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbiAoJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KCd3Zm0tdGVtcGxhdGUvY2FtZXJhLnRwbC5odG1sJyxcbiAgICAnPCEtLVxcbicgK1xuICAgICcgQ09ORklERU5USUFMXFxuJyArXG4gICAgJyBDb3B5cmlnaHQgMjAxNiBSZWQgSGF0LCBJbmMuIGFuZC9vciBpdHMgYWZmaWxpYXRlcy5cXG4nICtcbiAgICAnIFRoaXMgaXMgdW5wdWJsaXNoZWQgcHJvcHJpZXRhcnkgc291cmNlIGNvZGUgb2YgUmVkIEhhdC5cXG4nICtcbiAgICAnLS0+XFxuJyArXG4gICAgJzxkaXYgY2xhc3M9XCJ3Zm0tY2FtZXJhXCIgZmxleD5cXG4nICtcbiAgICAnICA8bWQtYnV0dG9uIGNsYXNzPVwibWQtaWNvbi1idXR0b25cIiBhcmlhLWxhYmVsPVwiQmFja1wiIG5nLWNsaWNrPVwiY3RybC5jYW5jZWwoKVwiIGZsZXg+XFxuJyArXG4gICAgJyAgICA8bWQtaWNvbiBtZC1mb250LXNldD1cIm1hdGVyaWFsLWljb25zXCI+YXJyb3dfYmFjazwvbWQtaWNvbj5cXG4nICtcbiAgICAnICA8L21kLWJ1dHRvbj5cXG4nICtcbiAgICAnICA8dmlkZW8gIG5nLXNob3c9XCJjdHJsLmNhbWVyYU9uXCIgYXV0b3BsYXk+PC92aWRlbz5cXG4nICtcbiAgICAnICA8Y2FudmFzIG5nLWhpZGU9XCJjdHJsLmNhbWVyYU9uXCI+PC9jYW52YXM+XFxuJyArXG4gICAgJyAgPGRpdiBjbGFzcz1cIndmbS1jYW1lcmEtYWN0aW9uc1wiIHN0eWxlPVwiei1pbmRleDogMTAwMFwiPlxcbicgK1xuICAgICcgICAgPG1kLWJ1dHRvbiBuZy1zaG93PVwiY3RybC5jYW1lcmFPblwiIGNsYXNzPVwid2ZtLWNhbWVyYS1idG5cIiBuZy1jbGljaz1cImN0cmwuc25hcCgpXCI+PC9tZC1idXR0b24+XFxuJyArXG4gICAgJyAgICA8bWQtYnV0dG9uIG5nLWhpZGU9XCJjdHJsLmNhbWVyYU9uXCIgY2xhc3M9XCJ3Zm0tY2FtZXJhLWNvbmZpcm1hdGlvbi1idG4gbWQtd2FyblwiIG5nLWNsaWNrPVwiY3RybC5zdGFydENhbWVyYSgpXCI+XFxuJyArXG4gICAgJyAgICAgIDxtZC1pY29uIG1kLWZvbnQtc2V0PVwibWF0ZXJpYWwtaWNvbnNcIj5jbG9zZTwvbWQtaWNvbj5cXG4nICtcbiAgICAnICAgIDwvbWQtYnV0dG9uPlxcbicgK1xuICAgICcgICAgPG1kLWJ1dHRvbiBuZy1oaWRlPVwiY3RybC5jYW1lcmFPblwiIGNsYXNzPVwid2ZtLWNhbWVyYS1jb25maXJtYXRpb24tYnRuXCIgbmctY2xpY2s9XCJjdHJsLmRvbmUoKVwiPlxcbicgK1xuICAgICcgICAgICA8bWQtaWNvbiBtZC1mb250LXNldD1cIm1hdGVyaWFsLWljb25zXCI+Y2hlY2s8L21kLWljb24+XFxuJyArXG4gICAgJyAgICA8L21kLWJ1dHRvbj5cXG4nICtcbiAgICAnICA8L2Rpdj5cXG4nICtcbiAgICAnPC9kaXY+XFxuJyArXG4gICAgJycpO1xufV0pO1xuIiwicmVxdWlyZSgnLi9jYW1lcmEudHBsLmh0bWwuanMnKTtcbiIsIi8qKlxuKiBDT05GSURFTlRJQUxcbiogQ29weXJpZ2h0IDIwMTYgUmVkIEhhdCwgSW5jLiBhbmQvb3IgaXRzIGFmZmlsaWF0ZXMuXG4qIFRoaXMgaXMgdW5wdWJsaXNoZWQgcHJvcHJpZXRhcnkgc291cmNlIGNvZGUgb2YgUmVkIEhhdC5cbioqL1xuJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICd3Zm0uY2FtZXJhJztcblxuYW5ndWxhci5tb2R1bGUoJ3dmbS5jYW1lcmEnLCBbXG4gIHJlcXVpcmUoJy4vZGlyZWN0aXZlJylcbiwgcmVxdWlyZSgnLi9zZXJ2aWNlJylcbl0pO1xuIiwiLyoqXG4qIENPTkZJREVOVElBTFxuKiBDb3B5cmlnaHQgMjAxNiBSZWQgSGF0LCBJbmMuIGFuZC9vciBpdHMgYWZmaWxpYXRlcy5cbiogVGhpcyBpcyB1bnB1Ymxpc2hlZCBwcm9wcmlldGFyeSBzb3VyY2UgY29kZSBvZiBSZWQgSGF0LlxuKiovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBuZ01vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCd3Zm0uY2FtZXJhLmRpcmVjdGl2ZXMnLCBbJ3dmbS5jb3JlLm1lZGlhdG9yJ10pO1xubW9kdWxlLmV4cG9ydHMgPSAnd2ZtLmNhbWVyYS5kaXJlY3RpdmVzJztcblxucmVxdWlyZSgnLi4vLi4vZGlzdCcpO1xuXG5uZ01vZHVsZS5kaXJlY3RpdmUoJ2NhbWVyYScsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlLCBtZWRpYXRvciwgJHdpbmRvdywgJHRpbWVvdXQpIHtcbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0UnLFxuICAgIHRlbXBsYXRlOiAkdGVtcGxhdGVDYWNoZS5nZXQoJ3dmbS10ZW1wbGF0ZS9jYW1lcmEudHBsLmh0bWwnKSxcbiAgICBzY29wZToge1xuICAgICAgbW9kZWw6ICc9JyxcbiAgICAgIGF1dG9zdGFydDogJz0nXG4gICAgfSxcbiAgICBjb21waWxlOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgZWxlbWVudC5hdHRyKCdmbGV4JywgdHJ1ZSk7XG4gICAgfSxcbiAgICBjb250cm9sbGVyOiBmdW5jdGlvbigkc2NvcGUsICRlbGVtZW50KSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgICAgZWxlbWVudCA9ICRlbGVtZW50WzBdLFxuICAgICAgICAgIGNhbnZhcyA9IGVsZW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2NhbnZhcycpWzBdLFxuICAgICAgICAgIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKSxcbiAgICAgICAgICB2aWRlbyA9IGVsZW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3ZpZGVvJylbMF0sXG4gICAgICAgICAgc3RyZWFtLCB3aWR0aCwgaGVpZ2h0LCB6b29tO1xuXG4gICAgICAkdGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgaGVpZ2h0ID0gZWxlbWVudC5vZmZzZXRIZWlnaHQ7XG4gICAgICAgIHdpZHRoID0gZWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICAgICAgdmlkZW8uaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICBjYW52YXMud2lkdGggPSB3aWR0aDtcblxuICAgICAgICBzZWxmLmNhbWVyYU9uID0gZmFsc2U7XG4gICAgICAgIGlmICgkc2NvcGUuYXV0b3N0YXJ0KSB7XG4gICAgICAgICAgc2VsZi5zdGFydENhbWVyYSgpO1xuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICBjb250ZXh0LnNjYWxlKC0xLCAxKTtcblxuICAgICAgc2VsZi5zbmFwID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBzeCA9ICh2aWRlby5jbGllbnRXaWR0aCAtIHdpZHRoICkgLyAyO1xuICAgICAgICBjb250ZXh0LmRyYXdJbWFnZSh2aWRlbywgc3gvem9vbSwgMCwgd2lkdGgvem9vbSwgaGVpZ2h0L3pvb20sIDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xuICAgICAgICBzZWxmLnN0b3BDYW1lcmEoKTtcbiAgICAgIH07XG5cbiAgICAgIHNlbGYuc3RhcnRDYW1lcmEgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gVE9ETzogaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvZ2V0dXNlcm1lZGlhLWpzXG4gICAgICAgIHZhciBnZXRVc2VyTWVkaWEgPSBuYXZpZ2F0b3IuZ2V0VXNlck1lZGlhIHx8IG5hdmlnYXRvci53ZWJraXRHZXRVc2VyTWVkaWEgfHwgbmF2aWdhdG9yLm1vekdldFVzZXJNZWRpYVxuICAgICAgICBnZXRVc2VyTWVkaWEuY2FsbChuYXZpZ2F0b3IsIHsgJ3ZpZGVvJzogdHJ1ZSB9LCBmdW5jdGlvbihfc3RyZWFtKSB7XG4gICAgICAgICAgc3RyZWFtID0gX3N0cmVhbTtcbiAgICAgICAgICB2aWRlby5zcmMgPSAkd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoc3RyZWFtKTtcbiAgICAgICAgICB2aWRlby5wbGF5KCk7XG4gICAgICAgICAgJHNjb3BlLiRhcHBseShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICRzY29wZS5tb2RlbCA9IG51bGw7XG4gICAgICAgICAgICBzZWxmLmNhbWVyYU9uID0gdHJ1ZTtcbiAgICAgICAgICAgIHZhciB2aWRlb1dpZHRoO1xuICAgICAgICAgICAgdmlkZW8ub25sb2Fkc3RhcnQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgdmlkZW9XaWR0aCA9IHZpZGVvLmNsaWVudFdpZHRoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmlkZW8ub25jYW5wbGF5ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHpvb20gPSB2aWRlb1dpZHRoIC8gdmlkZW8uY2xpZW50V2lkdGg7XG4gICAgICAgICAgICAgIHZpZGVvLnN0eWxlLmxlZnQgPSAtKHZpZGVvLmNsaWVudFdpZHRoIC0gd2lkdGggKSAvIDIgKyAncHgnO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdWaWRlbyBjYXB0dXJlIGVycm9yOiAnLCBlcnJvci5jb2RlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHNlbGYuc3RvcENhbWVyYSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBzdHJlYW0uZ2V0VmlkZW9UcmFja3MoKVswXS5zdG9wKCk7XG4gICAgICAgIHNlbGYuY2FtZXJhT24gPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgc2VsZi5jYW5jZWwgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgc2VsZi5zdG9wQ2FtZXJhKCk7XG4gICAgICAgIG1lZGlhdG9yLnB1Ymxpc2goJ3dmbTpjYW1lcmE6Y2FuY2VsJyk7XG4gICAgICB9XG5cbiAgICAgIHNlbGYuZG9uZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAkc2NvcGUubW9kZWwgPSBjYW52YXMudG9EYXRhVVJMKCk7XG4gICAgICB9XG5cbiAgICAgICRzY29wZS4kb24oJyRkZXN0cm95JywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHNlbGYuc3RvcENhbWVyYSgpO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBjb250cm9sbGVyQXM6ICdjdHJsJ1xuICB9O1xufSlcbiIsIi8qKlxuKiBDT05GSURFTlRJQUxcbiogQ29weXJpZ2h0IDIwMTYgUmVkIEhhdCwgSW5jLiBhbmQvb3IgaXRzIGFmZmlsaWF0ZXMuXG4qIFRoaXMgaXMgdW5wdWJsaXNoZWQgcHJvcHJpZXRhcnkgc291cmNlIGNvZGUgb2YgUmVkIEhhdC5cbioqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgY2FtZXJhID0gcmVxdWlyZSgnLi4vY2FtZXJhJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gJ3dmbS5jYW1lcmEuc2VydmljZSc7XG5cbmFuZ3VsYXIubW9kdWxlKCd3Zm0uY2FtZXJhLnNlcnZpY2UnLCBbJ3dmbS5jb3JlLm1lZGlhdG9yJ10pXG5cbi5mYWN0b3J5KCdtb2JpbGVDYW1lcmEnLCBmdW5jdGlvbigkcSwgJHdpbmRvdywgbWVkaWF0b3IpIHtcbiAgcmV0dXJuIGNhbWVyYTtcbn0pXG5cbi5mYWN0b3J5KCdkZXNrdG9wQ2FtZXJhJywgZnVuY3Rpb24oJG1kRGlhbG9nLCBtZWRpYXRvcikge1xuICB2YXIgY2FtZXJhID0ge307XG4gIGNhbWVyYS5jYXB0dXJlID0gZnVuY3Rpb24oZXYpIHtcbiAgICByZXR1cm4gJG1kRGlhbG9nLnNob3coe1xuICAgICAgY29udHJvbGxlcjogZnVuY3Rpb24gQ2FtZXJhQ3RybCgkc2NvcGUsIG1lZGlhdG9yKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgJHNjb3BlLmRhdGEgPSBudWxsO1xuXG4gICAgICAgICRzY29wZS4kd2F0Y2goJ2RhdGEnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICBpZiAoISBfLmlzRW1wdHkoJHNjb3BlLmRhdGEpICkge1xuICAgICAgICAgICAgJG1kRGlhbG9nLmhpZGUoJHNjb3BlLmRhdGEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBtZWRpYXRvci5zdWJzY3JpYmVGb3JTY29wZSgnd2ZtOmNhbWVyYTpjYW5jZWwnLCAkc2NvcGUsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICRtZERpYWxvZy5jYW5jZWwoJ1Bob3RvIGNhcHR1cmUgY2FuY2VsbGVkLicpO1xuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICB0ZW1wbGF0ZTogJzxjYW1lcmEgbW9kZWw9XCJkYXRhXCIgYXV0b3N0YXJ0PVwidHJ1ZVwiPjwvY2FtZXJhPicsXG4gICAgICBwYXJlbnQ6IGFuZ3VsYXIuZWxlbWVudChkb2N1bWVudC5ib2R5KSxcbiAgICAgIHRhcmdldEV2ZW50OiBldixcbiAgICAgIGNsaWNrT3V0c2lkZVRvQ2xvc2U6IGZhbHNlLFxuICAgICAgZnVsbHNjcmVlbjogdHJ1ZVxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBjYW1lcmE7XG59KVxuO1xuIiwiLyoqXG4qIENPTkZJREVOVElBTFxuKiBDb3B5cmlnaHQgMjAxNiBSZWQgSGF0LCBJbmMuIGFuZC9vciBpdHMgYWZmaWxpYXRlcy5cbiogVGhpcyBpcyB1bnB1Ymxpc2hlZCBwcm9wcmlldGFyeSBzb3VyY2UgY29kZSBvZiBSZWQgSGF0LlxuKiovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBxID0gcmVxdWlyZSgncScpO1xuXG5mdW5jdGlvbiBDYW1lcmEoKSB7XG4gIHRoaXMuaW5pdCgpO1xufTtcblxuQ2FtZXJhLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oKSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgdmFyIGRlZmVycmVkID0gcS5kZWZlcigpO1xuICBpZiAod2luZG93LmNvcmRvdmEpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiZGV2aWNlcmVhZHlcIiwgZnVuY3Rpb24gY2FtZXJhUmVhZHkoKSB7XG4gICAgICBkZWZlcnJlZC5yZXNvbHZlKCk7XG4gICAgfSwgZmFsc2UpO1xuICB9IGVsc2Uge1xuICAgIGRlZmVycmVkLnJlc29sdmUoKTtcbiAgfTtcblxuICBzZWxmLmluaXRQcm9taXNlID0gZGVmZXJyZWQucHJvbWlzZTtcbiAgcmV0dXJuIHNlbGYuaW5pdFByb21pc2U7XG59O1xuXG5DYW1lcmEucHJvdG90eXBlLmNsZWFyQ2FjaGUgPSBmdW5jdGlvbigpIHtcbiAgd2luZG93Lm5hdmlnYXRvci5jYW1lcmEuY2xlYW51cCgpO1xufTtcblxuQ2FtZXJhLnByb3RvdHlwZS5jYXB0dXJlID0gZnVuY3Rpb24gKCkge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHZhciBkZWZlcnJlZCA9IHEuZGVmZXIoKTtcbiAgc2VsZi5pbml0UHJvbWlzZS50aGVuKGZ1bmN0aW9uKCkge1xuICAgIHdpbmRvdy5uYXZpZ2F0b3IuY2FtZXJhLmdldFBpY3R1cmUoZnVuY3Rpb24gY2FwdHVyZVN1Y2Nlc3MoZmlsZVVSSSkge1xuICAgICAgdmFyIGZpbGVOYW1lID0gZmlsZVVSSS5zdWJzdHIoZmlsZVVSSS5sYXN0SW5kZXhPZignLycpICsgMSk7XG4gICAgICBkZWZlcnJlZC5yZXNvbHZlKHtcbiAgICAgICAgZmlsZU5hbWU6IGZpbGVOYW1lLFxuICAgICAgICBmaWxlVVJJOiBmaWxlVVJJXG4gICAgICB9KTtcbiAgICB9LCBmdW5jdGlvbiBjYXB0dXJlRmFpbHVyZShlcnJvcikge1xuICAgICAgZGVmZXJyZWQucmVqZWN0KGVycm9yKTtcbiAgICB9LCB7XG4gICAgICBxdWFsaXR5OiAxMDAsXG4gICAgICBkZXN0aW5hdGlvblR5cGU6IHdpbmRvdy5uYXZpZ2F0b3IuY2FtZXJhLkRlc3RpbmF0aW9uVHlwZS5GSUxFX1VSSSxcbiAgICAgIGVuY29kaW5nVHlwZTogd2luZG93LkNhbWVyYS5FbmNvZGluZ1R5cGUuSlBFRyxcbiAgICAgIGNvcnJlY3RPcmllbnRhdGlvbjogdHJ1ZVxuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG59O1xuXG52YXIgY2FtZXJhID0gbmV3IENhbWVyYSgpO1xubW9kdWxlLmV4cG9ydHMgPSBjYW1lcmE7XG4iLCIvKipcbiogQ09ORklERU5USUFMXG4qIENvcHlyaWdodCAyMDE2IFJlZCBIYXQsIEluYy4gYW5kL29yIGl0cyBhZmZpbGlhdGVzLlxuKiBUaGlzIGlzIHVucHVibGlzaGVkIHByb3ByaWV0YXJ5IHNvdXJjZSBjb2RlIG9mIFJlZCBIYXQuXG4qKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIGNvbmZpZyA9IHJlcXVpcmUoJy4uL2NvbmZpZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICd3Zm0uZmlsZS5kaXJlY3RpdmVzJztcblxuYW5ndWxhci5tb2R1bGUoJ3dmbS5maWxlLmRpcmVjdGl2ZXMnLCBbXSlcblxuLmRpcmVjdGl2ZSgnd2ZtSW1nJywgZnVuY3Rpb24oJHEpIHtcbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcbiAgICAkZmgub24oJ2ZoaW5pdCcsIGZ1bmN0aW9uKGVycm9yLCBob3N0KSB7XG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgZGVmZXJyZWQucmVqZWN0KG5ldyBFcnJvcihlcnJvcikpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgY2xvdWRVcmwgPSAkZmguZ2V0Q2xvdWRVUkwoKTtcbiAgICAgIGRlZmVycmVkLnJlc29sdmUoY2xvdWRVcmwpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gIH07XG5cbiAgdmFyIGluaXRQcm9taXNlID0gaW5pdCgpO1xuXG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdBJyxcbiAgICBzY29wZToge1xuICAgICAgdWlkOiAnPSdcbiAgICB9LFxuICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuICAgICAgc2NvcGUuJHdhdGNoKCd1aWQnLCBmdW5jdGlvbih1aWQpIHtcbiAgICAgICAgaW5pdFByb21pc2UudGhlbihmdW5jdGlvbihjbG91ZFVybCkge1xuICAgICAgICAgIGVsZW1lbnRbMF0uc3JjID0gY2xvdWRVcmwgKyBjb25maWcuYXBpUGF0aCArICcvZ2V0LycgKyB1aWQ7XG4gICAgICAgICAgY29uc29sZS5sb2coZWxlbWVudFswXS5zcmMpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufSlcbjtcbiIsIi8qKlxuKiBDT05GSURFTlRJQUxcbiogQ29weXJpZ2h0IDIwMTYgUmVkIEhhdCwgSW5jLiBhbmQvb3IgaXRzIGFmZmlsaWF0ZXMuXG4qIFRoaXMgaXMgdW5wdWJsaXNoZWQgcHJvcHJpZXRhcnkgc291cmNlIGNvZGUgb2YgUmVkIEhhdC5cbioqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgY2xpZW50ID0gcmVxdWlyZSgnLi4vZmlsZScpLFxuICAgIGNvbmZpZyA9IHJlcXVpcmUoJy4uL2NvbmZpZycpLFxuICAgIF8gPSByZXF1aXJlKCdsb2Rhc2gnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAnd2ZtLmZpbGUuc2VydmljZSc7XG5cbmFuZ3VsYXIubW9kdWxlKCd3Zm0uZmlsZS5zZXJ2aWNlJywgW1xuICByZXF1aXJlKCcuL2RpcmVjdGl2ZScpXG5dKVxuXG4uZmFjdG9yeSgnZmlsZUNsaWVudCcsIGZ1bmN0aW9uKCRxKSB7XG4gIHZhciBmaWxlQ2xpZW50ID0ge307XG5cbiAgXy5mb3JPd24oY2xpZW50LCBmdW5jdGlvbih2YWx1ZSwga2V5KSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGZpbGVDbGllbnRba2V5XSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gJHEud2hlbihjbGllbnRba2V5XS5hcHBseShjbGllbnQsIGFyZ3VtZW50cykpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmaWxlQ2xpZW50W2tleV0gPSB2YWx1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBmaWxlQ2xpZW50O1xufSlcbjtcbiIsIi8qKlxuKiBDT05GSURFTlRJQUxcbiogQ29weXJpZ2h0IDIwMTYgUmVkIEhhdCwgSW5jLiBhbmQvb3IgaXRzIGFmZmlsaWF0ZXMuXG4qIFRoaXMgaXMgdW5wdWJsaXNoZWQgcHJvcHJpZXRhcnkgc291cmNlIGNvZGUgb2YgUmVkIEhhdC5cbioqL1xuJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgYXBpSG9zdDogJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MCdcbiwgYXBpUGF0aDogJy9maWxlL3dmbSdcbn1cbiIsIi8qKlxuKiBDT05GSURFTlRJQUxcbiogQ29weXJpZ2h0IDIwMTYgUmVkIEhhdCwgSW5jLiBhbmQvb3IgaXRzIGFmZmlsaWF0ZXMuXG4qIFRoaXMgaXMgdW5wdWJsaXNoZWQgcHJvcHJpZXRhcnkgc291cmNlIGNvZGUgb2YgUmVkIEhhdC5cbioqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgY29uZmlnID0gcmVxdWlyZSgnLi9jb25maWcnKSxcbiAgICBxID0gcmVxdWlyZSgncScpO1xuXG52YXIgY2xpZW50ID0ge307XG5cbmNsaWVudC5pbml0ID0gZnVuY3Rpb24oKSB7XG4gIHZhciBkZWZlcnJlZEZoaW5pdCA9IHEuZGVmZXIoKTtcbiAgJGZoLm9uKCdmaGluaXQnLCBmdW5jdGlvbihlcnJvciwgaG9zdCkge1xuICAgIGlmIChlcnJvcikge1xuICAgICAgZGVmZXJyZWRGaGluaXQucmVqZWN0KG5ldyBFcnJvcihlcnJvcikpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjbGllbnQuY2xvdWRVcmwgPSAkZmguZ2V0Q2xvdWRVUkwoKTtcbiAgICBkZWZlcnJlZEZoaW5pdC5yZXNvbHZlKCk7XG4gIH0pO1xuXG4gIHZhciBkZWZlcnJlZFJlYWR5ID0gcS5kZWZlcigpO1xuICBpZiAod2luZG93LmNvcmRvdmEpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiZGV2aWNlcmVhZHlcIiwgZnVuY3Rpb24gY2FtZXJhUmVhZHkoKSB7XG4gICAgICBkZWZlcnJlZFJlYWR5LnJlc29sdmUoKTtcbiAgICB9LCBmYWxzZSk7XG4gIH0gZWxzZSB7XG4gICAgZGVmZXJyZWRSZWFkeS5yZXNvbHZlKCk7XG4gIH07XG5cbiAgY2xpZW50LmluaXRQcm9taXNlID0gcS5hbGwoW2RlZmVycmVkRmhpbml0LnByb21pc2UsIGRlZmVycmVkUmVhZHkucHJvbWlzZV0pXG4gIHJldHVybiBjbGllbnQuaW5pdFByb21pc2U7XG59O1xuXG5jbGllbnQudXBsb2FkRGF0YVVybCA9IGZ1bmN0aW9uKHVzZXJJZCwgZGF0YVVybCkge1xuICB2YXIgZGVmZXJyZWQgPSBxLmRlZmVyKCk7XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMikge1xuICAgIGRlZmVycmVkLnJlamVjdCgnQm90aCB1c2VySWQgYW5kIGEgZGF0YVVybCBwYXJhbWV0ZXJzIGFyZSByZXF1aXJlZC4nKTtcbiAgfSBlbHNlIHtcbiAgICAkZmguY2xvdWQoe1xuICAgICAgcGF0aDogY29uZmlnLmFwaVBhdGggKyAnL293bmVyLycrdXNlcklkKycvdXBsb2FkL2Jhc2U2NC9waG90by5wbmcnLFxuICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICBkYXRhOiBkYXRhVXJsXG4gICAgfSxcbiAgICBmdW5jdGlvbihyZXMpIHtcbiAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzKTtcbiAgICB9LFxuICAgIGZ1bmN0aW9uKG1lc3NhZ2UsIHByb3BzKSB7XG4gICAgICB2YXIgZSA9IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICAgIGUucHJvcHMgPSBwcm9wcztcbiAgICAgIGRlZmVycmVkLnJlamVjdChlKTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbn1cblxuY2xpZW50Lmxpc3QgPSBmdW5jdGlvbih1c2VySWQpIHtcbiAgdmFyIHVybCA9IGFyZ3VtZW50cy5sZW5ndGggPT09IDAgPyBjb25maWcuYXBpUGF0aCArICcvYWxsJ1xuICAgIDogY29uZmlnLmFwaVBhdGggKyAnL293bmVyLycgKyB1c2VySWQ7XG4gIHZhciBkZWZlcnJlZCA9IHEuZGVmZXIoKTtcbiAgJGZoLmNsb3VkKHtcbiAgICAgIHBhdGg6IHVybCxcbiAgICAgIG1ldGhvZDogJ2dldCdcbiAgICB9LFxuICAgIGZ1bmN0aW9uKHJlcykge1xuICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXMpO1xuICAgIH0sXG4gICAgZnVuY3Rpb24obWVzc2FnZSwgcHJvcHMpIHtcbiAgICAgIHZhciBlID0gbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgICAgZS5wcm9wcyA9IHByb3BzO1xuICAgICAgZGVmZXJyZWQucmVqZWN0KGUpO1xuICAgIH1cbiAgKTtcbiAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG59O1xuXG5mdW5jdGlvbiBmaWxlVXBsb2FkKGZpbGVVUkksIHNlcnZlclVSSSwgZmlsZVVwbG9hZE9wdGlvbnMpIHtcbiAgdmFyIGRlZmVycmVkID0gcS5kZWZlcigpO1xuICB2YXIgdHJhbnNmZXIgPSBuZXcgRmlsZVRyYW5zZmVyKCk7XG4gIHRyYW5zZmVyLnVwbG9hZChmaWxlVVJJLCBzZXJ2ZXJVUkksIGZ1bmN0aW9uIHVwbG9hZFN1Y2Nlc3MocmVzcG9uc2UpIHtcbiAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc3BvbnNlKTtcbiAgfSwgZnVuY3Rpb24gdXBsb2FkRmFpbHVyZShlcnJvcikge1xuICAgIGRlZmVycmVkLnJlamVjdChlcnJvcik7XG4gIH0sIGZpbGVVcGxvYWRPcHRpb25zKTtcbiAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG59O1xuXG5mdW5jdGlvbiBmaWxlVXBsb2FkUmV0cnkoZmlsZVVSSSwgc2VydmVyVVJJLCBmaWxlVXBsb2FkT3B0aW9ucywgdGltZW91dCwgcmV0cmllcykge1xuICByZXR1cm4gZmlsZVVwbG9hZChmaWxlVVJJLCBzZXJ2ZXJVUkksIGZpbGVVcGxvYWRPcHRpb25zKVxuICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH0sIGZ1bmN0aW9uIChlcnJvcikge1xuICAgIGlmIChyZXRyaWVzID09IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbid0IHVwbG9hZCB0byBcIiArIEpTT04uc3RyaW5naWZ5KHNlcnZlclVSSSkpO1xuICAgIH07XG4gICAgcmV0dXJuIHEuZGVsYXkodGltZW91dClcbiAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZmlsZVVwbG9hZFJldHJ5KGZpbGVVUkksIHNlcnZlclVSSSwgZmlsZVVwbG9hZE9wdGlvbnMsIHRpbWVvdXQsIHJldHJpZXMgLSAxKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5jbGllbnQudXBsb2FkRmlsZSA9IGZ1bmN0aW9uKHVzZXJJZCwgZmlsZVVSSSwgb3B0aW9ucykge1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpIHtcbiAgICByZXR1cm4gcS5yZWplY3QoJ3VzZXJJZCBhbmQgZmlsZVVSSSBwYXJhbWV0ZXJzIGFyZSByZXF1aXJlZC4nKTtcbiAgfSBlbHNlIHtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICB2YXIgZmlsZVVwbG9hZE9wdGlvbnMgPSBuZXcgRmlsZVVwbG9hZE9wdGlvbnMoKTtcbiAgICBmaWxlVXBsb2FkT3B0aW9ucy5maWxlS2V5ID0gb3B0aW9ucy5maWxlS2V5IHx8ICdiaW5hcnlmaWxlJztcbiAgICBmaWxlVXBsb2FkT3B0aW9ucy5maWxlTmFtZSA9IG9wdGlvbnMuZmlsZU5hbWU7XG4gICAgZmlsZVVwbG9hZE9wdGlvbnMubWltZVR5cGUgPSBvcHRpb25zLm1pbWVUeXBlIHx8ICdpbWFnZS9qcGVnJztcbiAgICBmaWxlVXBsb2FkT3B0aW9ucy5wYXJhbXMgPSB7XG4gICAgICBvd25lcklkOiB1c2VySWQsXG4gICAgICBmaWxlTmFtZTogb3B0aW9ucy5maWxlTmFtZVxuICAgIH07XG4gICAgdmFyIHRpbWVvdXQgPSBvcHRpb25zLnRpbWVvdXQgfHwgMjAwMDtcbiAgICB2YXIgcmV0cmllcyA9IG9wdGlvbnMucmV0cmllcyB8fCAxO1xuICAgIHJldHVybiBjbGllbnQuaW5pdFByb21pc2UudGhlbihmdW5jdGlvbigpIHtcbiAgICAgIHZhciBzZXJ2ZXJVUkkgPSB3aW5kb3cuZW5jb2RlVVJJKGNsaWVudC5jbG91ZFVybCArIGNvbmZpZy5hcGlQYXRoICsgJy91cGxvYWQvYmluYXJ5Jyk7XG4gICAgICByZXR1cm4gZmlsZVVwbG9hZFJldHJ5KGZpbGVVUkksIHNlcnZlclVSSSwgZmlsZVVwbG9hZE9wdGlvbnMsIHRpbWVvdXQsIHJldHJpZXMpO1xuICAgIH0pXG4gIH07XG59O1xuXG5jbGllbnQuaW5pdCgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNsaWVudDtcbiIsInJlcXVpcmUoJy4vd29ya29yZGVyLW1hcC50cGwuaHRtbC5qcycpO1xuIiwidmFyIG5nTW9kdWxlO1xudHJ5IHtcbiAgbmdNb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgnd2ZtLm1hcC5kaXJlY3RpdmVzJyk7XG59IGNhdGNoIChlKSB7XG4gIG5nTW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ3dmbS5tYXAuZGlyZWN0aXZlcycsIFtdKTtcbn1cblxubmdNb2R1bGUucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbiAoJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KCd3Zm0tdGVtcGxhdGUvd29ya29yZGVyLW1hcC50cGwuaHRtbCcsXG4gICAgJzwhLS1cXG4nICtcbiAgICAnIENPTkZJREVOVElBTFxcbicgK1xuICAgICcgQ29weXJpZ2h0IDIwMTYgUmVkIEhhdCwgSW5jLiBhbmQvb3IgaXRzIGFmZmlsaWF0ZXMuXFxuJyArXG4gICAgJyBUaGlzIGlzIHVucHVibGlzaGVkIHByb3ByaWV0YXJ5IHNvdXJjZSBjb2RlIG9mIFJlZCBIYXQuXFxuJyArXG4gICAgJy0tPlxcbicgK1xuICAgICc8ZGl2IGlkPVxcJ2dtYXBfY2FudmFzXFwnPjwvZGl2PlxcbicgK1xuICAgICcnKTtcbn1dKTtcbiIsIi8qKlxuKiBDT05GSURFTlRJQUxcbiogQ29weXJpZ2h0IDIwMTYgUmVkIEhhdCwgSW5jLiBhbmQvb3IgaXRzIGFmZmlsaWF0ZXMuXG4qIFRoaXMgaXMgdW5wdWJsaXNoZWQgcHJvcHJpZXRhcnkgc291cmNlIGNvZGUgb2YgUmVkIEhhdC5cbioqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgbmdNb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgnd2ZtLm1hcC5kaXJlY3RpdmVzJywgWyd3Zm0uY29yZS5tZWRpYXRvciddKTtcbm1vZHVsZS5leHBvcnRzID0gJ3dmbS5tYXAuZGlyZWN0aXZlcyc7XG5cbnJlcXVpcmUoJy4uLy4uL2Rpc3QnKTtcblxubmdNb2R1bGUuZGlyZWN0aXZlKCd3b3Jrb3JkZXJNYXAnLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSwgbWVkaWF0b3IsICR3aW5kb3csICRkb2N1bWVudCwgJHRpbWVvdXQpIHtcbiAgZnVuY3Rpb24gaW5pdE1hcChlbGVtZW50LCBjZW50ZXIpIHtcbiAgICB2YXIgbXlPcHRpb25zID0ge1xuICAgICAgem9vbToxNCxcbiAgICAgIGNlbnRlcjpuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKGNlbnRlclswXSwgY2VudGVyWzFdKSxcbiAgICAgIG1hcFR5cGVJZDogZ29vZ2xlLm1hcHMuTWFwVHlwZUlkLlJPQURNQVBcbiAgICB9O1xuICAgIHZhciBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGVsZW1lbnRbMF0ucXVlcnlTZWxlY3RvcignI2dtYXBfY2FudmFzJyksIG15T3B0aW9ucyk7XG4gICAgcmV0dXJuIG1hcDtcbiAgfTtcblxuICBmdW5jdGlvbiByZXNpemVNYXAoZWxlbWVudCwgcGFyZW50KSB7XG4gICAgdmFyIG1hcEVsZW1lbnQgPSBlbGVtZW50WzBdLnF1ZXJ5U2VsZWN0b3IoJyNnbWFwX2NhbnZhcycpXG4gICAgdmFyIGhlaWdodCA9IHBhcmVudC5jbGllbnRIZWlnaHQ7XG4gICAgdmFyIHdpZHRoID0gcGFyZW50LmNsaWVudFdpZHRoO1xuICAgIG1hcEVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgJ3B4JztcbiAgICBtYXBFbGVtZW50LnN0eWxlLndpZHRoID0gd2lkdGggKyAncHgnO1xuXG4gICAgY29uc29sZS5sb2coJ01hcCBkaW1lbnNpb25zOicsIHdpZHRoLCBoZWlnaHQpO1xuICAgIGdvb2dsZS5tYXBzLmV2ZW50LnRyaWdnZXIobWFwRWxlbWVudCwgJ3Jlc2l6ZScpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGFkZE1hcmtlcnMobWFwLCBlbGVtZW50LCB3b3Jrb3JkZXJzKSB7XG4gICAgd29ya29yZGVycy5mb3JFYWNoKGZ1bmN0aW9uKHdvcmtvcmRlcikge1xuICAgICAgaWYgKHdvcmtvcmRlci5sb2NhdGlvbikge1xuICAgICAgICAvLyB2YXIgbGF0ID0gY2VudGVyWzBdICsgKE1hdGgucmFuZG9tKCkgLSAwLjUpICogMC4wNTtcbiAgICAgICAgLy8gdmFyIGxvbmcgPSBjZW50ZXJbMV0gKyAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiAwLjI7XG4gICAgICAgIHZhciBsYXQgPSB3b3Jrb3JkZXIubG9jYXRpb25bMF07XG4gICAgICAgIHZhciBsb25nID0gd29ya29yZGVyLmxvY2F0aW9uWzFdO1xuICAgICAgICB2YXIgbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7bWFwOiBtYXAscG9zaXRpb246IG5ldyBnb29nbGUubWFwcy5MYXRMbmcobGF0LCBsb25nKX0pO1xuICAgICAgICB2YXIgaW5mb3dpbmRvdyA9IG5ldyBnb29nbGUubWFwcy5JbmZvV2luZG93KHtjb250ZW50Oic8c3Ryb25nPldvcmtvcmRlciAjJyt3b3Jrb3JkZXIuaWQrJzwvc3Ryb25nPjxicj4nK3dvcmtvcmRlci5hZGRyZXNzKyc8YnI+J30pO1xuICAgICAgICBnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lcihtYXJrZXIsICdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgaW5mb3dpbmRvdy5vcGVuKG1hcCxtYXJrZXIpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBmaW5kUGFyZW50KGRvY3VtZW50LCBlbGVtZW50LCBzZWxlY3Rvcikge1xuICAgIGlmICghc2VsZWN0b3IpIHtcbiAgICAgIHJldHVybiBlbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgfVxuICAgIHZhciBtYXRjaGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG4gICAgdmFyIHBhcmVudCA9IGVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICB3aGlsZShwYXJlbnQpIHtcbiAgICAgIHZhciBpc1BhcmVudE1hdGNoID0gQXJyYXkucHJvdG90eXBlLnNvbWUuY2FsbChtYXRjaGVzLCBmdW5jdGlvbihfbWF0Y2gpIHtcbiAgICAgICAgcmV0dXJuIHBhcmVudCA9PT0gX21hdGNoO1xuICAgICAgfSk7XG4gICAgICBpZiAoaXNQYXJlbnRNYXRjaCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH07XG4gICAgICB2YXIgcGFyZW50ID0gcGFyZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICBjb25zb2xlLmxvZygncGFyZW50JywgcGFyZW50KVxuICAgIH1cbiAgICByZXR1cm4gcGFyZW50IHx8IGVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdFJyxcbiAgICB0ZW1wbGF0ZTogJHRlbXBsYXRlQ2FjaGUuZ2V0KCd3Zm0tdGVtcGxhdGUvd29ya29yZGVyLW1hcC50cGwuaHRtbCcpLFxuICAgIHNjb3BlOiB7XG4gICAgICBsaXN0OiAnPScsXG4gICAgICBjZW50ZXI6ICc9JyxcbiAgICAgIHdvcmtvcmRlcnM6ICc9JyxcbiAgICAgIGNvbnRhaW5lclNlbGVjdG9yOiAnQCdcbiAgICB9LFxuICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWxlbWVudCwgYXR0cnMsIGN0cmwpIHtcbiAgICAgIHZhciBtYXAgPSBpbml0TWFwKGVsZW1lbnQsIHNjb3BlLmNlbnRlciB8fCBbNDkuMjcsIC0xMjMuMDhdKTtcbiAgICAgIGFkZE1hcmtlcnMobWFwLCBlbGVtZW50LCBzY29wZS53b3Jrb3JkZXJzKTtcbiAgICAgIHZhciBwYXJlbnQgPSBmaW5kUGFyZW50KCRkb2N1bWVudFswXSwgZWxlbWVudFswXSwgc2NvcGUuY29udGFpbmVyU2VsZWN0b3IpO1xuICAgICAgdmFyIHJlc2l6ZUxpc3RlbmVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlc2l6ZU1hcChlbGVtZW50LCBwYXJlbnQpO1xuICAgICAgfVxuICAgICAgJHRpbWVvdXQocmVzaXplTGlzdGVuZXIpO1xuICAgICAgYW5ndWxhci5lbGVtZW50KCR3aW5kb3cpLm9uKCdyZXNpemUnLCByZXNpemVMaXN0ZW5lcik7IC8vIFRPRE86IHRocm90dGxlIHRoaXNcbiAgICAgIHNjb3BlLiRvbignJGRlc3Ryb3knLCBmdW5jdGlvbigpIHtcbiAgICAgICAgYW5ndWxhci5lbGVtZW50KCR3aW5kb3cpLm9mZigncmVzaXplJywgcmVzaXplTGlzdGVuZXIpO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBjb250cm9sbGVyOiBmdW5jdGlvbigkc2NvcGUsICR3aW5kb3csICRlbGVtZW50KSB7XG5cbiAgICB9LFxuICAgIGNvbnRyb2xsZXJBczogJ2N0cmwnXG4gIH07XG59KVxuIiwiLyoqXG4qIENPTkZJREVOVElBTFxuKiBDb3B5cmlnaHQgMjAxNiBSZWQgSGF0LCBJbmMuIGFuZC9vciBpdHMgYWZmaWxpYXRlcy5cbiogVGhpcyBpcyB1bnB1Ymxpc2hlZCBwcm9wcmlldGFyeSBzb3VyY2UgY29kZSBvZiBSZWQgSGF0LlxuKiovXG4ndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gJ3dmbS5tYXAnO1xuXG5hbmd1bGFyLm1vZHVsZSgnd2ZtLm1hcCcsIFtcbiAgcmVxdWlyZSgnLi9kaXJlY3RpdmUnKVxuLCByZXF1aXJlKCcuL3NlcnZpY2UnKVxuXSlcbiIsIi8qKlxuKiBDT05GSURFTlRJQUxcbiogQ29weXJpZ2h0IDIwMTYgUmVkIEhhdCwgSW5jLiBhbmQvb3IgaXRzIGFmZmlsaWF0ZXMuXG4qIFRoaXMgaXMgdW5wdWJsaXNoZWQgcHJvcHJpZXRhcnkgc291cmNlIGNvZGUgb2YgUmVkIEhhdC5cbioqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgbmdNb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgnd2ZtLm1hcC5zZXJ2aWNlcycsIFsnd2ZtLmNvcmUubWVkaWF0b3InXSk7XG5tb2R1bGUuZXhwb3J0cyA9ICd3Zm0ubWFwLnNlcnZpY2VzJztcblxubmdNb2R1bGUuZmFjdG9yeSgnbWFwQ2xpZW50JywgZnVuY3Rpb24oKSB7XG4gIHZhciBtYXBDbGllbnQgPSB7fTtcbiAgbWFwQ2xpZW50LmdldENvb3JkcyA9IGZ1bmN0aW9uKGFkZHJlc3MpIHtcbiAgICAvLyBpbnZva2UgdGhlIGdvb2dsZSBBUEkgdG8gcmV0dXJuIHRoZSBjby1vcmRpbmF0ZXMgb2YgdGhlIGdpdmVuIGxvY2F0aW9uXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2dlb2NvZGluZy9pbnRyb1xuICB9XG59KVxuIiwiLyoqXG4qIENPTkZJREVOVElBTFxuKiBDb3B5cmlnaHQgMjAxNiBSZWQgSGF0LCBJbmMuIGFuZC9vciBpdHMgYWZmaWxpYXRlcy5cbiogVGhpcyBpcyB1bnB1Ymxpc2hlZCBwcm9wcmlldGFyeSBzb3VyY2UgY29kZSBvZiBSZWQgSGF0LlxuKiovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBtZWRpYXRvciA9IHJlcXVpcmUoJy4uL21lZGlhdG9yJyk7XG5cbmFuZ3VsYXIubW9kdWxlKCd3Zm0uY29yZS5tZWRpYXRvcicsIFsnbmcnXSlcblxuLmZhY3RvcnkoJ21lZGlhdG9yJywgZnVuY3Rpb24gbWVkaWF0b3JTZXJ2aWNlKCRxLCAkbG9nKSB7XG4gIHZhciBvcmlnaW5hbFJlcXVlc3QgPSBtZWRpYXRvci5yZXF1ZXN0O1xuXG4gIC8vIG1vbmtleSBwYXRjaCB0aGUgcmVxdWVzdCBmdW5jdGlvbiwgd3JhcHBpbmcgdGhlIHJldHVybmVkIHByb21pc2UgYXMgYW4gYW5ndWxhciBwcm9taXNlXG4gIG1lZGlhdG9yLnJlcXVlc3QgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgcHJvbWlzZSA9IG9yaWdpbmFsUmVxdWVzdC5hcHBseShtZWRpYXRvciwgYXJndW1lbnRzKTtcbiAgICByZXR1cm4gJHEud2hlbihwcm9taXNlKTtcbiAgfTtcblxuICBtZWRpYXRvci5zdWJzY3JpYmVGb3JTY29wZSA9IGZ1bmN0aW9uKHRvcGljLHNjb3BlLGZuKSB7XG4gICAgdmFyIHN1YnNjcmliZXIgPSBtZWRpYXRvci5zdWJzY3JpYmUodG9waWMsZm4pO1xuICAgIHNjb3BlLiRvbihcIiRkZXN0cm95XCIsIGZ1bmN0aW9uKCkge1xuICAgICAgbWVkaWF0b3IucmVtb3ZlKHRvcGljLCBzdWJzY3JpYmVyLmlkKTtcbiAgICB9KTtcblxuICB9O1xuXG4gIHJldHVybiBtZWRpYXRvcjtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICd3Zm0uY29yZS5tZWRpYXRvcic7XG4iLCIvKipcbiogQ09ORklERU5USUFMXG4qIENvcHlyaWdodCAyMDE2IFJlZCBIYXQsIEluYy4gYW5kL29yIGl0cyBhZmZpbGlhdGVzLlxuKiBUaGlzIGlzIHVucHVibGlzaGVkIHByb3ByaWV0YXJ5IHNvdXJjZSBjb2RlIG9mIFJlZCBIYXQuXG4qKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIF8gPSByZXF1aXJlKCdsb2Rhc2gnKTtcbnZhciBNZWRpYXRvciA9IHJlcXVpcmUoJ21lZGlhdG9yLWpzJykuTWVkaWF0b3I7XG52YXIgcSA9IHJlcXVpcmUoJ3EnKTtcblxudmFyIG1lZGlhdG9yID0gbmV3IE1lZGlhdG9yKCk7XG5cbm1lZGlhdG9yLnByb21pc2UgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGRlZmVycmVkID0gcS5kZWZlcigpO1xuICB2YXIgY2IgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgZGVmZXJyZWQucmVzb2x2ZShkYXRhKTtcbiAgfTtcbiAgdmFyIGFyZ3MgPSBbXTtcbiAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoYXJncywgYXJndW1lbnRzKTtcbiAgYXJncy5zcGxpY2UoMSwgMCwgY2IpO1xuICBtZWRpYXRvci5vbmNlLmFwcGx5KG1lZGlhdG9yLCBhcmdzKTtcbiAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG59XG5cbm1lZGlhdG9yLnJlcXVlc3QgPSBmdW5jdGlvbih0b3BpYywgcGFyYW1ldGVycywgb3B0aW9ucykge1xuICB2YXIgdG9waWNzID0ge30sIHN1YnMgPSB7fSwgY29tcGxldGUgPSBmYWxzZSwgdGltZW91dDtcbiAgdmFyIGRlZmVycmVkID0gcS5kZWZlcigpO1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICB0b3BpY3MucmVxdWVzdCA9IHRvcGljO1xuICB0b3BpY3MuZG9uZSA9IG9wdGlvbnMuZG9uZVRvcGljIHx8ICdkb25lOicgKyB0b3BpYztcbiAgdG9waWNzLmVycm9yID0gb3B0aW9ucy5lcnJvclRvcGljIHx8ICdlcnJvcjonICsgdG9waWM7XG5cbiAgdmFyIHVpZCA9IG51bGw7XG4gIGlmIChfLmhhcyhvcHRpb25zLCAndWlkJykpIHtcbiAgICB1aWQgPSBvcHRpb25zLnVpZDtcbiAgfSBlbHNlIGlmICh0eXBlb2YgcGFyYW1ldGVycyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBwYXJhbWV0ZXJzICE9PSBudWxsKSB7XG4gICAgdWlkID0gcGFyYW1ldGVycyBpbnN0YW5jZW9mIEFycmF5ID8gcGFyYW1ldGVyc1swXSA6IHBhcmFtZXRlcnM7XG4gIH1cblxuICBpZiAodWlkICE9PSBudWxsKSB7XG4gICAgIHRvcGljcy5kb25lICs9ICc6JyArIHVpZDtcbiAgICAgdG9waWNzLmVycm9yICs9ICc6JyArIHVpZDtcbiAgfVxuXG4gIGlmICghb3B0aW9ucy50aW1lb3V0KSB7XG4gICAgb3B0aW9ucy50aW1lb3V0ID0gMjAwMDtcbiAgfTtcblxuICB2YXIgY2xlYW5VcCA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbXBsZXRlID0gdHJ1ZTtcbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgbWVkaWF0b3IucmVtb3ZlKHRvcGljcy5kb25lLCBzdWJzLmRvbmUuaWQpO1xuICAgIG1lZGlhdG9yLnJlbW92ZSh0b3BpY3MuZXJyb3IsIHN1YnMuZXJyb3IuaWQpO1xuICB9O1xuXG4gIHN1YnMuZG9uZSA9IG1lZGlhdG9yLnN1YnNjcmliZSh0b3BpY3MuZG9uZSwgZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgY2xlYW5VcCgpO1xuICAgIGRlZmVycmVkLnJlc29sdmUocmVzdWx0KTtcbiAgfSk7XG5cbiAgc3Vicy5lcnJvciA9IG1lZGlhdG9yLnN1YnNjcmliZSh0b3BpY3MuZXJyb3IsIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgY2xlYW5VcCgpO1xuICAgIGRlZmVycmVkLnJlamVjdChlcnJvcik7XG4gIH0pO1xuXG4gIHZhciBhcmdzID0gW3RvcGljcy5yZXF1ZXN0XTtcbiAgaWYgKHBhcmFtZXRlcnMgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGFyZ3MsIHBhcmFtZXRlcnMpO1xuICB9IGVsc2Uge1xuICAgIGFyZ3MucHVzaChwYXJhbWV0ZXJzKTtcbiAgfVxuICBtZWRpYXRvci5wdWJsaXNoLmFwcGx5KG1lZGlhdG9yLCBhcmdzKTtcblxuICB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICBpZiAoIWNvbXBsZXRlKSB7XG4gICAgICBjbGVhblVwKCk7XG4gICAgICBkZWZlcnJlZC5yZWplY3QobmV3IEVycm9yKCdNZWRpYXRvciByZXF1ZXN0IHRpbWVvdXQgZm9yIHRvcGljICcgKyAgdG9waWMpKTtcbiAgICB9XG4gIH0sIG9wdGlvbnMudGltZW91dCk7XG5cbiAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1lZGlhdG9yO1xuIiwicmVxdWlyZSgnLi9tZXNzYWdlLWRldGFpbC50cGwuaHRtbC5qcycpO1xucmVxdWlyZSgnLi9tZXNzYWdlLWZvcm0udHBsLmh0bWwuanMnKTtcbnJlcXVpcmUoJy4vbWVzc2FnZS1saXN0LnRwbC5odG1sLmpzJyk7XG4iLCJ2YXIgbmdNb2R1bGU7XG50cnkge1xuICBuZ01vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCd3Zm0ubWVzc2FnZS5kaXJlY3RpdmVzJyk7XG59IGNhdGNoIChlKSB7XG4gIG5nTW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ3dmbS5tZXNzYWdlLmRpcmVjdGl2ZXMnLCBbXSk7XG59XG5cbm5nTW9kdWxlLnJ1bihbJyR0ZW1wbGF0ZUNhY2hlJywgZnVuY3Rpb24gKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dCgnd2ZtLXRlbXBsYXRlL21lc3NhZ2UtZGV0YWlsLnRwbC5odG1sJyxcbiAgICAnPCEtLVxcbicgK1xuICAgICcgQ09ORklERU5USUFMXFxuJyArXG4gICAgJyBDb3B5cmlnaHQgMjAxNiBSZWQgSGF0LCBJbmMuIGFuZC9vciBpdHMgYWZmaWxpYXRlcy5cXG4nICtcbiAgICAnIFRoaXMgaXMgdW5wdWJsaXNoZWQgcHJvcHJpZXRhcnkgc291cmNlIGNvZGUgb2YgUmVkIEhhdC5cXG4nICtcbiAgICAnLS0+XFxuJyArXG4gICAgJzxtZC10b29sYmFyIGNsYXNzPVwiY29udGVudC10b29sYmFyXCI+XFxuJyArXG4gICAgJyAgPGRpdiBjbGFzcz1cIm1kLXRvb2xiYXItdG9vbHNcIj5cXG4nICtcbiAgICAnICAgIDxtZC1idXR0b24gbmctY2xpY2s9XCJjdHJsLmNsb3NlTWVzc2FnZSgkZXZlbnQsIGN0cmwubWVzc2FnZSlcIiBoaWRlLWd0LXNtIGNsYXNzPVwibWQtaWNvbi1idXR0b25cIj5cXG4nICtcbiAgICAnICAgICAgPG1kLWljb24gYXJpYS1sYWJlbD1cIkNsb3NlXCIgbWQtZm9udC1zZXQ9XCJtYXRlcmlhbC1pY29uc1wiPmNsb3NlPC9tZC1pY29uPlxcbicgK1xuICAgICcgICAgPC9tZC1idXR0b24+XFxuJyArXG4gICAgJyAgICA8aDM+XFxuJyArXG4gICAgJyAgICAge3tjdHJsLm1lc3NhZ2Uuc3ViamVjdH19XFxuJyArXG4gICAgJyAgICA8L2gzPlxcbicgK1xuICAgICcgIDwvZGl2PlxcbicgK1xuICAgICc8L21kLXRvb2xiYXI+XFxuJyArXG4gICAgJzxkaXYgY2xhc3M9XCJ3Zm0tbWFpbmNvbC1zY3JvbGxcIj5cXG4nICtcbiAgICAnICA8ZGl2IGNsYXNzPVwibWVzc2FnZVwiIGxheW91dC1wYWRkaW5nIGxheW91dC1tYXJnaW4+XFxuJyArXG4gICAgJ1xcbicgK1xuICAgICcgICAgPGRpdiBjbGFzcz1cIm1lc3NhZ2UtaGVhZGVyXCI+XFxuJyArXG4gICAgJyAgICAgIDxkaXYgY2xhc3M9XCJtZC1ib2R5LTFcIj5cXG4nICtcbiAgICAnICAgICAgICA8c3Bhbj5Gcm9tOjwvc3Bhbj4ge3tjdHJsLm1lc3NhZ2Uuc2VuZGVyLm5hbWV9fVxcbicgK1xuICAgICcgICAgICA8L2Rpdj5cXG4nICtcbiAgICAnICAgICAgPGRpdiBjbGFzcz1cIm1kLWJvZHktMVwiPlxcbicgK1xuICAgICcgICAgICAgIDxzcGFuPlRvOjwvc3Bhbj4ge3tjdHJsLm1lc3NhZ2UucmVjZWl2ZXIubmFtZX19XFxuJyArXG4gICAgJyAgICAgIDwvZGl2PlxcbicgK1xuICAgICcgICAgICA8ZGl2IGNsYXNzPVwibWQtYm9keS0xXCI+XFxuJyArXG4gICAgJyAgICAgICAgPHNwYW4+U3RhdHVzOjwvc3Bhbj4ge3tjdHJsLm1lc3NhZ2Uuc3RhdHVzfX1cXG4nICtcbiAgICAnICAgICAgPC9kaXY+XFxuJyArXG4gICAgJyAgICAgIDwhLS08ZGl2IGNsYXNzPVwibWQtYm9keS0xIHRpbWUtc3RhbXBcIj4xMTozOCBBTSAoMyBob3VycyBhZ28pPC9kaXY+LS0+XFxuJyArXG4gICAgJyAgICA8L2Rpdj5cXG4nICtcbiAgICAnXFxuJyArXG4gICAgJyAgICA8bWQtZGl2aWRlcj48L21kLWRpdmlkZXI+XFxuJyArXG4gICAgJ1xcbicgK1xuICAgICcgICAgPHAgY2xhc3M9XCJtZC1ib2R5LTFcIj57e2N0cmwubWVzc2FnZS5jb250ZW50fX08L3A+XFxuJyArXG4gICAgJyAgPC9kaXY+XFxuJyArXG4gICAgJzwvZGl2PlxcbicgK1xuICAgICcnKTtcbn1dKTtcbiIsInZhciBuZ01vZHVsZTtcbnRyeSB7XG4gIG5nTW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ3dmbS5tZXNzYWdlLmRpcmVjdGl2ZXMnKTtcbn0gY2F0Y2ggKGUpIHtcbiAgbmdNb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgnd2ZtLm1lc3NhZ2UuZGlyZWN0aXZlcycsIFtdKTtcbn1cblxubmdNb2R1bGUucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbiAoJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KCd3Zm0tdGVtcGxhdGUvbWVzc2FnZS1mb3JtLnRwbC5odG1sJyxcbiAgICAnPCEtLVxcbicgK1xuICAgICcgQ09ORklERU5USUFMXFxuJyArXG4gICAgJyBDb3B5cmlnaHQgMjAxNiBSZWQgSGF0LCBJbmMuIGFuZC9vciBpdHMgYWZmaWxpYXRlcy5cXG4nICtcbiAgICAnIFRoaXMgaXMgdW5wdWJsaXNoZWQgcHJvcHJpZXRhcnkgc291cmNlIGNvZGUgb2YgUmVkIEhhdC5cXG4nICtcbiAgICAnLS0+XFxuJyArXG4gICAgJzxtZC10b29sYmFyIGNsYXNzPVwiY29udGVudC10b29sYmFyIG1kLXByaW1hcnlcIj5cXG4nICtcbiAgICAnICA8ZGl2IGNsYXNzPVwibWQtdG9vbGJhci10b29sc1wiPlxcbicgK1xuICAgICcgICAgPGgzPk5ldyBtZXNzYWdlPC9oMz5cXG4nICtcbiAgICAnICA8L2Rpdj5cXG4nICtcbiAgICAnPC9tZC10b29sYmFyPlxcbicgK1xuICAgICc8ZGl2IGNsYXNzPVwid2ZtLW1haW5jb2wtc2Nyb2xsXCI+XFxuJyArXG4gICAgJ1xcbicgK1xuICAgICc8Zm9ybSBuYW1lPVwibWVzc2FnZUZvcm1cIiBuZy1zdWJtaXQ9XCJjdHJsLmRvbmUobWVzc2FnZUZvcm0uJHZhbGlkKVwiIG5vdmFsaWRhdGUgbGF5b3V0LXBhZGRpbmcgbGF5b3V0LW1hcmdpbj5cXG4nICtcbiAgICAnICA8IS0tXFxuJyArXG4gICAgJyAgPG1kLWlucHV0LWNvbnRhaW5lcj5cXG4nICtcbiAgICAnICAgIDxsYWJlbCBmb3I9XCJtZXNzYWdlU3RhdGVcIj5TdGF0dXM8L2xhYmVsPlxcbicgK1xuICAgICcgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJpbnB1dG1lc3NhZ2VUeXBlXCIgbmFtZT1cIm1lc3NhZ2VTdGF0dXNcIiBuZy1tb2RlbD1cImN0cmwubW9kZWwuc3RhdHVzXCIgZGlzYWJsZWQ9XCJ0cnVlXCI+XFxuJyArXG4gICAgJyAgPC9tZC1pbnB1dC1jb250YWluZXI+XFxuJyArXG4gICAgJyAgLS0+XFxuJyArXG4gICAgJzxkaXY+XFxuJyArXG4gICAgJyAgPG1kLWlucHV0LWNvbnRhaW5lciBjbGFzcz1cIm1kLWJsb2NrXCIgbmctY2xhc3M9XCJ7IFxcJ2hhcy1lcnJvclxcJyA6IG1lc3NhZ2VGb3JtLnJlY2VpdmVyLiRpbnZhbGlkICYmICFtZXNzYWdlRm9ybS5yZWNlaXZlci4kcHJpc3RpbmUgfVwiPlxcbicgK1xuICAgICcgICAgPGxhYmVsIGZvcj1cInNlbGVjdFJlY2VpdmVyXCI+VG88L2xhYmVsPlxcbicgK1xuICAgICcgICAgPG1kLXNlbGVjdCBuZy1tb2RlbD1cImN0cmwubW9kZWwucmVjZWl2ZXJcIiBuYW1lPVwicmVjZWl2ZXJcIiBpZD1cInNlbGVjdFJlY2VpdmVyXCIgcmVxdWlyZWQ+XFxuJyArXG4gICAgJyAgICAgICA8bWQtb3B0aW9uIG5nLXJlcGVhdD1cIndvcmtlciBpbiBjdHJsLndvcmtlcnNcIiB2YWx1ZT1cInt7d29ya2VyfX1cIj57e3dvcmtlci5uYW1lfX0gKHt7d29ya2VyLnBvc2l0aW9ufX0pPC9tZC1vcHRpb24+XFxuJyArXG4gICAgJyAgICAgPC9tZC1zZWxlY3Q+XFxuJyArXG4gICAgJyAgICAgPGRpdiBuZy1tZXNzYWdlcz1cIm1lc3NhZ2VGb3JtLnJlY2VpdmVyLiRlcnJvclwiIG5nLWlmPVwiY3RybC5zdWJtaXR0ZWQgfHwgbWVzc2FnZUZvcm0ucmVjZWl2ZXIuJGRpcnR5XCI+XFxuJyArXG4gICAgJyAgICAgICA8ZGl2IG5nLW1lc3NhZ2U9XCJyZXF1aXJlZFwiPlRoZSBUbzogZmllbGQgaXMgcmVxdWlyZWQuPC9kaXY+XFxuJyArXG4gICAgJyAgICAgPC9kaXY+XFxuJyArXG4gICAgJyAgPC9tZC1pbnB1dC1jb250YWluZXI+XFxuJyArXG4gICAgJzwvZGl2PlxcbicgK1xuICAgICdcXG4nICtcbiAgICAnPGRpdj5cXG4nICtcbiAgICAnICA8bWQtaW5wdXQtY29udGFpbmVyIGNsYXNzPVwibWQtYmxvY2tcIiBuZy1jbGFzcz1cInsgXFwnaGFzLWVycm9yXFwnIDogbWVzc2FnZUZvcm0uc3ViamVjdC4kaW52YWxpZCAmJiAhbWVzc2FnZUZvcm0uc3ViamVjdC4kcHJpc3RpbmUgfVwiPlxcbicgK1xuICAgICcgICAgPGxhYmVsIGZvcj1cImlucHV0U3ViamVjdFwiPlN1YmplY3Q8L2xhYmVsPlxcbicgK1xuICAgICcgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJpbnB1dFN1YmplY3RcIiBuYW1lPVwic3ViamVjdFwiIG5nLW1vZGVsPVwiY3RybC5tb2RlbC5zdWJqZWN0XCIgcmVxdWlyZWQ+XFxuJyArXG4gICAgJyAgICA8ZGl2IG5nLW1lc3NhZ2VzPVwibWVzc2FnZUZvcm0uc3ViamVjdC4kZXJyb3JcIiBuZy1pZj1cImN0cmwuc3VibWl0dGVkIHx8IG1lc3NhZ2VGb3JtLnN1YmplY3QuJGRpcnR5XCI+XFxuJyArXG4gICAgJyAgICAgIDxkaXYgbmctbWVzc2FnZT1cInJlcXVpcmVkXCI+QSBzdWJqZWN0IGlzIHJlcXVpcmVkLjwvZGl2PlxcbicgK1xuICAgICcgICAgPC9kaXY+XFxuJyArXG4gICAgJyAgPC9tZC1pbnB1dC1jb250YWluZXI+XFxuJyArXG4gICAgJzwvZGl2PlxcbicgK1xuICAgICdcXG4nICtcbiAgICAnPGRpdj5cXG4nICtcbiAgICAnICA8bWQtaW5wdXQtY29udGFpbmVyIGNsYXNzPVwibWQtYmxvY2tcIiBuZy1jbGFzcz1cInsgXFwnaGFzLWVycm9yXFwnIDogbWVzc2FnZUZvcm0uY29udGVudC4kaW52YWxpZCAmJiAhbWVzc2FnZUZvcm0uY29udGVudC4kcHJpc3RpbmUgfVwiPlxcbicgK1xuICAgICcgICAgPGxhYmVsIGZvcj1cImlucHV0Q29udGVudFwiPk1lc3NhZ2U8L2xhYmVsPlxcbicgK1xuICAgICcgICAgPHRleHRhcmVhIGlkPVwiaW5wdXRDb250ZW50XCIgbmFtZT1cImNvbnRlbnRcIiBuZy1tb2RlbD1cImN0cmwubW9kZWwuY29udGVudFwiIHJlcXVpcmVkIG1kLW1heGxlbmd0aD1cIjM1MFwiPjwvdGV4dGFyZWE+XFxuJyArXG4gICAgJ1xcbicgK1xuICAgICcgICAgPGRpdiBuZy1tZXNzYWdlcz1cIm1lc3NhZ2VGb3JtLmNvbnRlbnQuJGVycm9yXCIgbmctc2hvdz1cImN0cmwuc3VibWl0dGVkIHx8IG1lc3NhZ2VGb3JtLmNvbnRlbnQuJGRpcnR5XCI+XFxuJyArXG4gICAgJyAgICAgIDxkaXYgbmctbWVzc2FnZT1cInJlcXVpcmVkXCI+TWVzc2FnZSBjb250ZW50IGlzIHJlcXVpcmVkLjwvZGl2PlxcbicgK1xuICAgICcgICAgPC9kaXY+XFxuJyArXG4gICAgJyAgPC9tZC1pbnB1dC1jb250YWluZXI+XFxuJyArXG4gICAgJzwvZGl2PlxcbicgK1xuICAgICdcXG4nICtcbiAgICAnICA8bWQtYnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cIm1kLXJhaXNlZCBtZC1wcmltYXJ5XCI+U2VuZCBtZXNzYWdlPC9tZC1idXR0b24+XFxuJyArXG4gICAgJzwvZm9ybT5cXG4nICtcbiAgICAnXFxuJyArXG4gICAgJzwvZGl2PlxcbicgK1xuICAgICcnKTtcbn1dKTtcbiIsInZhciBuZ01vZHVsZTtcbnRyeSB7XG4gIG5nTW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ3dmbS5tZXNzYWdlLmRpcmVjdGl2ZXMnKTtcbn0gY2F0Y2ggKGUpIHtcbiAgbmdNb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgnd2ZtLm1lc3NhZ2UuZGlyZWN0aXZlcycsIFtdKTtcbn1cblxubmdNb2R1bGUucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbiAoJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KCd3Zm0tdGVtcGxhdGUvbWVzc2FnZS1saXN0LnRwbC5odG1sJyxcbiAgICAnPCEtLVxcbicgK1xuICAgICcgQ09ORklERU5USUFMXFxuJyArXG4gICAgJyBDb3B5cmlnaHQgMjAxNiBSZWQgSGF0LCBJbmMuIGFuZC9vciBpdHMgYWZmaWxpYXRlcy5cXG4nICtcbiAgICAnIFRoaXMgaXMgdW5wdWJsaXNoZWQgcHJvcHJpZXRhcnkgc291cmNlIGNvZGUgb2YgUmVkIEhhdC5cXG4nICtcbiAgICAnLS0+XFxuJyArXG4gICAgJzxtZC10b29sYmFyPlxcbicgK1xuICAgICcgIDxkaXYgY2xhc3M9XCJtZC10b29sYmFyLXRvb2xzXCI+XFxuJyArXG4gICAgJyAgICA8aDM+XFxuJyArXG4gICAgJyAgICAgIDxzcGFuPk1lc3NhZ2VzPC9zcGFuPlxcbicgK1xuICAgICcgICAgPC9oMz5cXG4nICtcbiAgICAnICA8L2Rpdj5cXG4nICtcbiAgICAnPC9tZC10b29sYmFyPlxcbicgK1xuICAgICdcXG4nICtcbiAgICAnPGZvcm0gYWN0aW9uPVwiI1wiIGNsYXNzPVwicGVyc2lzdGVudC1zZWFyY2hcIiAgaGlkZS14cyBoaWRlLXNtPlxcbicgK1xuICAgICcgIDxsYWJlbCBmb3I9XCJzZWFyY2hcIj48aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+c2VhcmNoPC9pPjwvbGFiZWw+XFxuJyArXG4gICAgJyAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJzZWFyY2hcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiIG5nLW1vZGVsPVwic2VhcmNoVmFsdWVcIiBuZy1jaGFuZ2U9XCJjdHJsLmFwcGx5RmlsdGVyKHNlYXJjaFZhbHVlKVwiPlxcbicgK1xuICAgICc8L2Zvcm0+XFxuJyArXG4gICAgJ1xcbicgK1xuICAgICdcXG4nICtcbiAgICAnPGRpdiBjbGFzcz1cIm1lc3NhZ2VzXCI+XFxuJyArXG4gICAgJ1xcbicgK1xuICAgICcgIDxtZC1saXN0PlxcbicgK1xuICAgICcgICAgPG1kLWxpc3QtaXRlbSBjbGFzcz1cIm1kLTMtbGluZVwiIG5nLXJlcGVhdD1cIm1lc3NhZ2UgaW4gY3RybC5saXN0IHwgcmV2ZXJzZVwiIG5nLWNsaWNrPVwiY3RybC5zZWxlY3RNZXNzYWdlKCRldmVudCwgbWVzc2FnZSlcIiBjbGFzcz1cIm1kLTMtbGluZSB3b3Jrb3JkZXItaXRlbVwiXFxuJyArXG4gICAgJyAgICAgbmctY2xhc3M9XCJ7YWN0aXZlOiBjdHJsLnNlbGVjdGVkLmlkID09PSBtZXNzYWdlLmlkLCBuZXc6IG1lc3NhZ2Uuc3RhdHVzID09PSBcXCd1bnJlYWRcXCd9XCI+XFxuJyArXG4gICAgJyAgICAgIDxpbWcgbmctc3JjPVwie3ttZXNzYWdlLnNlbmRlci5hdmF0YXJ9fVwiIGNsYXNzPVwibWQtYXZhdGFyXCIgYWx0PVwie3ttZXNzYWdlLnNlbmRlci5uYW1lfX1cIiAvPlxcbicgK1xuICAgICcgICAgICA8ZGl2IGNsYXNzPVwibWQtbGlzdC1pdGVtLXRleHRcIiBsYXlvdXQ9XCJjb2x1bW5cIj5cXG4nICtcbiAgICAnICAgICAgICA8IS0tPHNwYW4gY2xhc3M9XCJtZC1jYXB0aW9uIHRpbWUtc3RhbXBcIj4xMyBtaW5zIGFnbzwvc3Bhbj4tLT5cXG4nICtcbiAgICAnICAgICAgICA8aDM+e3ttZXNzYWdlLnNlbmRlci5uYW1lfX08L2gzPlxcbicgK1xuICAgICcgICAgICAgIDxoND57e21lc3NhZ2Uuc3ViamVjdH19PC9oND5cXG4nICtcbiAgICAnICAgICAgICA8cD57e21lc3NhZ2UuY29udGVudH19PC9wPlxcbicgK1xuICAgICcgICAgICA8L2Rpdj5cXG4nICtcbiAgICAnICAgICAgPG1kLWRpdmlkZXIgbWQtaW5zZXQ+PC9tZC1kaXZpZGVyPlxcbicgK1xuICAgICcgICAgPC9tZC1saXN0LWl0ZW0+XFxuJyArXG4gICAgJyAgPC9tZC1saXN0PlxcbicgK1xuICAgICdcXG4nICtcbiAgICAnPC9kaXY+XFxuJyArXG4gICAgJycpO1xufV0pO1xuIiwiLyoqXG4qIENPTkZJREVOVElBTFxuKiBDb3B5cmlnaHQgMjAxNiBSZWQgSGF0LCBJbmMuIGFuZC9vciBpdHMgYWZmaWxpYXRlcy5cbiogVGhpcyBpcyB1bnB1Ymxpc2hlZCBwcm9wcmlldGFyeSBzb3VyY2UgY29kZSBvZiBSZWQgSGF0LlxuKiovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBuZ01vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCd3Zm0ubWVzc2FnZS5kaXJlY3RpdmVzJywgWyd3Zm0uY29yZS5tZWRpYXRvciddKTtcbm1vZHVsZS5leHBvcnRzID0gJ3dmbS5tZXNzYWdlLmRpcmVjdGl2ZXMnO1xuXG5yZXF1aXJlKCcuLi8uLi9kaXN0Jyk7XG5cbm5nTW9kdWxlLmRpcmVjdGl2ZSgnbWVzc2FnZUxpc3QnLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSwgbWVkaWF0b3IpIHtcbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0UnXG4gICwgdGVtcGxhdGU6ICR0ZW1wbGF0ZUNhY2hlLmdldCgnd2ZtLXRlbXBsYXRlL21lc3NhZ2UtbGlzdC50cGwuaHRtbCcpXG4gICwgc2NvcGU6IHtcbiAgICAgIGxpc3QgOiAnPWxpc3QnLFxuICAgICAgc2VsZWN0ZWRNb2RlbDogJz0nXG4gICAgfVxuICAsIGNvbnRyb2xsZXI6IGZ1bmN0aW9uKCRzY29wZSkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHNlbGYubGlzdCA9ICRzY29wZS5saXN0O1xuICAgICAgICBzZWxmLnNlbGVjdGVkID0gJHNjb3BlLnNlbGVjdGVkTW9kZWw7XG4gICAgICAgIHNlbGYuc2VsZWN0TWVzc2FnZSA9IGZ1bmN0aW9uKGV2ZW50LCBtZXNzYWdlKSB7XG4gICAgICAgIHNlbGYuc2VsZWN0ZWRNZXNzYWdlSWQgPSBtZXNzYWdlLmlkO1xuICAgICAgICBtZWRpYXRvci5wdWJsaXNoKCd3Zm06bWVzc2FnZTpzZWxlY3RlZCcsIG1lc3NhZ2UpO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIH1cbiAgICAgIHNlbGYuaXNtZXNzYWdlU2hvd24gPSBmdW5jdGlvbihtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiBzZWxmLnNob3dubWVzc2FnZSA9PT0gbWVzc2FnZTtcbiAgICAgIH07XG5cbiAgICAgIHNlbGYuYXBwbHlGaWx0ZXIgPSBmdW5jdGlvbih0ZXJtKSB7XG4gICAgICAgIHRlcm0gPSB0ZXJtLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHNlbGYubGlzdCA9ICRzY29wZS5saXN0LmZpbHRlcihmdW5jdGlvbihtZXNzYWdlKSB7XG4gICAgICAgICAgcmV0dXJuIFN0cmluZyhtZXNzYWdlLnNlbmRlci5uYW1lKS50b0xvd2VyQ2FzZSgpLmluZGV4T2YodGVybSkgIT09IC0xXG4gICAgICAgICAgICB8fCBTdHJpbmcobWVzc2FnZS5zdWJqZWN0KS50b0xvd2VyQ2FzZSgpLmluZGV4T2YodGVybSkgIT09IC0xO1xuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgfVxuICAsIGNvbnRyb2xsZXJBczogJ2N0cmwnXG4gIH07XG59KVxuXG4uZGlyZWN0aXZlKCdtZXNzYWdlRm9ybScsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlLCBtZWRpYXRvcikge1xuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnRSdcbiAgLCB0ZW1wbGF0ZTogJHRlbXBsYXRlQ2FjaGUuZ2V0KCd3Zm0tdGVtcGxhdGUvbWVzc2FnZS1mb3JtLnRwbC5odG1sJylcbiAgLCBzY29wZToge1xuICAgIG1lc3NhZ2UgOiAnPXZhbHVlJ1xuICAsIHdvcmtlcnM6ICc9J1xuICAgIH1cbiAgLCBjb250cm9sbGVyOiBmdW5jdGlvbigkc2NvcGUpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIHNlbGYubW9kZWwgPSBhbmd1bGFyLmNvcHkoJHNjb3BlLm1lc3NhZ2UpO1xuICAgICAgc2VsZi53b3JrZXJzID0gJHNjb3BlLndvcmtlcnM7XG4gICAgICBzZWxmLnN1Ym1pdHRlZCA9IGZhbHNlO1xuICAgICAgc2VsZi5kb25lID0gZnVuY3Rpb24oaXNWYWxpZCkge1xuICAgICAgICBzZWxmLnN1Ym1pdHRlZCA9IHRydWU7XG4gICAgICAgIHNlbGYubW9kZWwucmVjZWl2ZXIgPSBKU09OLnBhcnNlKHNlbGYubW9kZWwucmVjZWl2ZXIpO1xuICAgICAgICBzZWxmLm1vZGVsLnJlY2VpdmVySWQgPSBzZWxmLm1vZGVsLnJlY2VpdmVyLmlkO1xuICAgICAgICBzZWxmLm1vZGVsLnN0YXR1cyA9IFwidW5yZWFkXCI7XG4gICAgICAgIGlmIChpc1ZhbGlkKSB7XG4gICAgICAgICAgICBtZWRpYXRvci5wdWJsaXNoKCd3Zm06bWVzc2FnZTpjcmVhdGVkJywgc2VsZi5tb2RlbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICwgY29udHJvbGxlckFzOiAnY3RybCdcbiAgfTtcbn0pXG5cbi5kaXJlY3RpdmUoJ21lc3NhZ2VEZXRhaWwnLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSwgbWVkaWF0b3IpIHtcbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0UnXG4gICwgdGVtcGxhdGU6ICR0ZW1wbGF0ZUNhY2hlLmdldCgnd2ZtLXRlbXBsYXRlL21lc3NhZ2UtZGV0YWlsLnRwbC5odG1sJylcbiAgLCBzY29wZToge1xuICAgIG1lc3NhZ2UgOiAnPW1lc3NhZ2UnXG4gICAgfVxuICAsIGNvbnRyb2xsZXI6IGZ1bmN0aW9uKCRzY29wZSkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgc2VsZi5tZXNzYWdlID0gJHNjb3BlLm1lc3NhZ2U7XG4gICAgICBzZWxmLnNob3dTZWxlY3RCdXR0b24gPSAhISAkc2NvcGUuJHBhcmVudC5tZXNzYWdlcztcbiAgICAgIHNlbGYuc2VsZWN0bWVzc2FnZSA9IGZ1bmN0aW9uKGV2ZW50LCBtZXNzYWdlKSB7XG4gICAgICAgIG1lZGlhdG9yLnB1Ymxpc2goJ3dmbTptZXNzYWdlOnNlbGVjdGVkJywgbWVzc2FnZSk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgfVxuICAgICAgc2VsZi5jbG9zZU1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCwgbWVzc2FnZSkge1xuICAgICAgICBtZWRpYXRvci5wdWJsaXNoKCd3Zm06bWVzc2FnZTpjbG9zZTonICsgbWVzc2FnZS5pZCk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgfVxuICAgIH1cbiAgLCBjb250cm9sbGVyQXM6ICdjdHJsJ1xuICB9O1xufSlcbjtcbiIsIi8qKlxuKiBDT05GSURFTlRJQUxcbiogQ29weXJpZ2h0IDIwMTYgUmVkIEhhdCwgSW5jLiBhbmQvb3IgaXRzIGFmZmlsaWF0ZXMuXG4qIFRoaXMgaXMgdW5wdWJsaXNoZWQgcHJvcHJpZXRhcnkgc291cmNlIGNvZGUgb2YgUmVkIEhhdC5cbioqL1xuJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICd3Zm0ubWVzc2FnZSc7XG5cbmFuZ3VsYXIubW9kdWxlKCd3Zm0ubWVzc2FnZScsIFtcbiAgcmVxdWlyZSgnLi9kaXJlY3RpdmUnKVxuLCByZXF1aXJlKCcuL3N5bmMtc2VydmljZScpXG5dKVxuIiwiLyoqXG4qIENPTkZJREVOVElBTFxuKiBDb3B5cmlnaHQgMjAxNiBSZWQgSGF0LCBJbmMuIGFuZC9vciBpdHMgYWZmaWxpYXRlcy5cbiogVGhpcyBpcyB1bnB1Ymxpc2hlZCBwcm9wcmlldGFyeSBzb3VyY2UgY29kZSBvZiBSZWQgSGF0LlxuKiovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBjb25maWcgPSByZXF1aXJlKCcuLi9jb25maWcnKVxuICAsIF8gPSByZXF1aXJlKCdsb2Rhc2gnKVxuICA7XG5cbm1vZHVsZS5leHBvcnRzID0gJ3dmbS5tZXNzYWdlLnN5bmMnO1xuXG5mdW5jdGlvbiByZW1vdmVMb2NhbFZhcnMob2JqZWN0KSB7XG4gIF8ua2V5cyhvYmplY3QpLmZpbHRlcihmdW5jdGlvbihrZXkpIHtcbiAgICByZXR1cm4ga2V5LmluZGV4T2YoJ18nKSA9PT0gMDtcbiAgfSkuZm9yRWFjaChmdW5jdGlvbihsb2NhbEtleSkge1xuICAgIGRlbGV0ZSBvYmplY3RbbG9jYWxLZXldO1xuICB9KTtcbiAgaWYgKG9iamVjdC5yZXN1bHRzKSB7XG4gICAgXy52YWx1ZXMob2JqZWN0LnJlc3VsdHMpLmZvckVhY2goZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICBfLmtleXMocmVzdWx0LnN1Ym1pc3Npb24pLmZpbHRlcihmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgcmV0dXJuIGtleS5pbmRleE9mKCdfJykgPT09IDA7XG4gICAgICB9KS5mb3JFYWNoKGZ1bmN0aW9uKGxvY2FsS2V5KSB7XG4gICAgICAgIGRlbGV0ZSByZXN1bHQuc3VibWlzc2lvbltsb2NhbEtleV07XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcbn07XG5cbmZ1bmN0aW9uIHdyYXBNYW5hZ2VyKCRxLCAkdGltZW91dCwgbWFuYWdlcikge1xuICB2YXIgd3JhcHBlZE1hbmFnZXIgPSBfLmNyZWF0ZShtYW5hZ2VyKTtcbiAgd3JhcHBlZE1hbmFnZXIubmV3ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcbiAgICAkdGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIHZhciBtZXNzYWdlID0ge1xuICAgICAgICB0eXBlOiAnTWVzc2FnZSdcbiAgICAgICwgc3RhdHVzOiAnTmV3J1xuICAgICAgfTtcbiAgICAgIGRlZmVycmVkLnJlc29sdmUobWVzc2FnZSk7XG4gICAgfSwgMCk7XG4gICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gIH07XG5cbiAgcmV0dXJuIHdyYXBwZWRNYW5hZ2VyO1xufVxuXG5hbmd1bGFyLm1vZHVsZSgnd2ZtLm1lc3NhZ2Uuc3luYycsIFtyZXF1aXJlKCdmaC13Zm0tc3luYycpXSlcbi5mYWN0b3J5KCdtZXNzYWdlU3luYycsIGZ1bmN0aW9uKCRxLCAkdGltZW91dCwgc3luY1NlcnZpY2UpIHtcbiAgc3luY1NlcnZpY2UuaW5pdCgkZmgsIGNvbmZpZy5zeW5jT3B0aW9ucyk7XG4gIHZhciBtZXNzYWdlU3luYyA9IHt9O1xuICBtZXNzYWdlU3luYy5jcmVhdGVNYW5hZ2VyID0gZnVuY3Rpb24ocXVlcnlQYXJhbXMpIHtcbiAgICBpZiAobWVzc2FnZVN5bmMubWFuYWdlcikge1xuICAgICAgcmV0dXJuICRxLndoZW4obWVzc2FnZVN5bmMubWFuYWdlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBtZXNzYWdlU3luYy5tYW5hZ2VyUHJvbWlzZSA9IHN5bmNTZXJ2aWNlLm1hbmFnZShjb25maWcuZGF0YXNldElkLCBudWxsLCBxdWVyeVBhcmFtcylcbiAgICAgIC50aGVuKGZ1bmN0aW9uKG1hbmFnZXIpIHtcbiAgICAgICAgbWVzc2FnZVN5bmMubWFuYWdlciA9IHdyYXBNYW5hZ2VyKCRxLCAkdGltZW91dCwgbWFuYWdlcik7XG4gICAgICAgIGNvbnNvbGUubG9nKCdTeW5jIGlzIG1hbmFnaW5nIGRhdGFzZXQ6JywgY29uZmlnLmRhdGFzZXRJZCwgJ3dpdGggZmlsdGVyOiAnLCBxdWVyeVBhcmFtcyk7XG4gICAgICAgIHJldHVybiBtZXNzYWdlU3luYy5tYW5hZ2VyO1xuICAgICAgfSlcbiAgICB9XG4gIH07XG4gIG1lc3NhZ2VTeW5jLnJlbW92ZU1hbmFnZXIgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAobWVzc2FnZVN5bmMubWFuYWdlcikge1xuICAgICAgcmV0dXJuIG1lc3NhZ2VTeW5jLm1hbmFnZXIuc2FmZVN0b3AoKVxuICAgICAgLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgIGRlbGV0ZSBtZXNzYWdlU3luYy5tYW5hZ2VyO1xuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG1lc3NhZ2VTeW5jO1xufSlcbi5maWx0ZXIoJ3JldmVyc2UnLCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGl0ZW1zKSB7XG4gICAgcmV0dXJuIGl0ZW1zLnNsaWNlKCkucmV2ZXJzZSgpO1xuICB9O1xufSk7XG47XG4iLCIvKipcbiogQ09ORklERU5USUFMXG4qIENvcHlyaWdodCAyMDE2IFJlZCBIYXQsIEluYy4gYW5kL29yIGl0cyBhZmZpbGlhdGVzLlxuKiBUaGlzIGlzIHVucHVibGlzaGVkIHByb3ByaWV0YXJ5IHNvdXJjZSBjb2RlIG9mIFJlZCBIYXQuXG4qKi9cbid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGFwaUhvc3Q6ICdodHRwOi8vbG9jYWxob3N0OjgwODAnLFxuICBhcGlQYXRoOiAnL2FwaS93Zm0vbWVzc2FnZScsXG4gIGRhdGFzZXRJZCA6ICdtZXNzYWdlcycsXG4gIHN5bmNPcHRpb25zIDoge1xuICAgIFwic3luY19mcmVxdWVuY3lcIiA6IDUsXG4gICAgXCJzdG9yYWdlX3N0cmF0ZWd5XCI6IFwiZG9tXCIsXG4gICAgXCJkb19jb25zb2xlX2xvZ1wiOiBmYWxzZVxuICB9XG59XG4iLCIvKipcbiogQ09ORklERU5USUFMXG4qIENvcHlyaWdodCAyMDE2IFJlZCBIYXQsIEluYy4gYW5kL29yIGl0cyBhZmZpbGlhdGVzLlxuKiBUaGlzIGlzIHVucHVibGlzaGVkIHByb3ByaWV0YXJ5IHNvdXJjZSBjb2RlIG9mIFJlZCBIYXQuXG4qKi9cbid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSAnd2ZtLnJlc3VsdCc7XG5cbmFuZ3VsYXIubW9kdWxlKCd3Zm0ucmVzdWx0JywgW1xuICByZXF1aXJlKCcuL3NlcnZpY2UnKVxuXSlcbiIsIi8qKlxuKiBDT05GSURFTlRJQUxcbiogQ29weXJpZ2h0IDIwMTYgUmVkIEhhdCwgSW5jLiBhbmQvb3IgaXRzIGFmZmlsaWF0ZXMuXG4qIFRoaXMgaXMgdW5wdWJsaXNoZWQgcHJvcHJpZXRhcnkgc291cmNlIGNvZGUgb2YgUmVkIEhhdC5cbioqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgY29uZmlnID0gcmVxdWlyZSgnLi4vY29uZmlnJylcbiAgLCBfID0gcmVxdWlyZSgnbG9kYXNoJylcbiAgO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICd3Zm0ucmVzdWx0LnN5bmMnO1xuXG5mdW5jdGlvbiB3cmFwTWFuYWdlcigkcSwgJHRpbWVvdXQsIG1hbmFnZXIpIHtcbiAgdmFyIHdyYXBwZWRNYW5hZ2VyID0gXy5jcmVhdGUobWFuYWdlcik7XG4gIHdyYXBwZWRNYW5hZ2VyLmdldEJ5V29ya29yZGVySWQgPSBmdW5jdGlvbih3b3Jrb3JkZXJJZCkge1xuICAgIHJldHVybiB3cmFwcGVkTWFuYWdlci5saXN0KClcbiAgICAudGhlbihmdW5jdGlvbihyZXN1bHRzKSB7XG4gICAgICByZXR1cm4gd3JhcHBlZE1hbmFnZXIuZmlsdGVyQnlXb3Jrb3JkZXIocmVzdWx0cywgd29ya29yZGVySWQpO1xuICAgIH0pO1xuICB9O1xuICB3cmFwcGVkTWFuYWdlci5maWx0ZXJCeVdvcmtvcmRlciA9IGZ1bmN0aW9uKHJlc3VsdHNBcnJheSwgd29ya29yZGVySWQpIHtcbiAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xuICAgIHZhciBmaWx0ZXJlZCA9IHJlc3VsdHNBcnJheS5maWx0ZXIoZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICByZXR1cm4gU3RyaW5nKHJlc3VsdC53b3Jrb3JkZXJJZCkgPT09IFN0cmluZyh3b3Jrb3JkZXJJZCk7XG4gICAgfSk7XG4gICAgdmFyIHJlc3VsdCA9ICBmaWx0ZXJlZCAmJiBmaWx0ZXJlZC5sZW5ndGggPyBmaWx0ZXJlZFswXSA6IHt9O1xuICAgIGRlZmVycmVkLnJlc29sdmUocmVzdWx0KTtcbiAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbiAgfTtcbiAgd3JhcHBlZE1hbmFnZXIuZXh0cmFjdEFwcGZvcm1TdWJtaXNzaW9uSWRzID0gZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgdmFyIHN1Ym1pc3Npb25JZHMgPSBudWxsO1xuICAgIGlmICggcmVzdWx0ICYmIHJlc3VsdC5zdGVwUmVzdWx0cyAmJiAhIF8uaXNFbXB0eShyZXN1bHQuc3RlcFJlc3VsdHMpKSB7XG4gICAgICB2YXIgYXBwZm9ybVN0ZXBSZXN1bHRzID0gXy5maWx0ZXIocmVzdWx0LnN0ZXBSZXN1bHRzLCBmdW5jdGlvbihzdGVwUmVzdWx0KSB7XG4gICAgICAgIHJldHVybiAhISBzdGVwUmVzdWx0LnN0ZXAuZm9ybUlkO1xuICAgICAgfSk7XG4gICAgICBpZiAoISBfLmlzRW1wdHkoYXBwZm9ybVN0ZXBSZXN1bHRzKSkge1xuICAgICAgICBzdWJtaXNzaW9uSWRzID0gXy5tYXAoYXBwZm9ybVN0ZXBSZXN1bHRzLCBmdW5jdGlvbihzdGVwUmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHN0ZXBSZXN1bHQuc3VibWlzc2lvbi5zdWJtaXNzaW9uSWQ7XG4gICAgICAgIH0pLmZpbHRlcihmdW5jdGlvbihpZCkge1xuICAgICAgICAgIHJldHVybiAhISBpZDtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgIH07XG4gICAgcmV0dXJuIHN1Ym1pc3Npb25JZHM7XG4gIH1cbiAgcmV0dXJuIHdyYXBwZWRNYW5hZ2VyO1xufVxuXG5hbmd1bGFyLm1vZHVsZSgnd2ZtLnJlc3VsdC5zeW5jJywgW3JlcXVpcmUoJ2ZoLXdmbS1zeW5jJyldKVxuLmZhY3RvcnkoJ3Jlc3VsdFN5bmMnLCBmdW5jdGlvbigkcSwgJHRpbWVvdXQsIHN5bmNTZXJ2aWNlKSB7XG4gIHN5bmNTZXJ2aWNlLmluaXQoJGZoLCBjb25maWcuc3luY09wdGlvbnMpO1xuICB2YXIgcmVzdWx0U3luYyA9IHt9O1xuICByZXN1bHRTeW5jLm1hbmFnZXJQcm9taXNlID0gc3luY1NlcnZpY2UubWFuYWdlKGNvbmZpZy5kYXRhc2V0SWQpXG4gIC50aGVuKGZ1bmN0aW9uKG1hbmFnZXIpIHtcbiAgICByZXN1bHRTeW5jLm1hbmFnZXIgPSB3cmFwTWFuYWdlcigkcSwgJHRpbWVvdXQsIG1hbmFnZXIpO1xuICAgIGNvbnNvbGUubG9nKCdTeW5jIGlzIG1hbmFnaW5nIGRhdGFzZXQ6JywgY29uZmlnLmRhdGFzZXRJZCk7XG4gICAgcmV0dXJuIHJlc3VsdFN5bmMubWFuYWdlcjtcbiAgfSk7XG4gIHJldHVybiByZXN1bHRTeW5jO1xufSlcblxuLmZpbHRlcignaXNFbXB0eScsIGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChvYmplY3QpIHtcbiAgICByZXR1cm4gKE9iamVjdC5rZXlzKG9iamVjdCkubGVuZ3RoID09PSAwKTtcbiAgfTtcbn0pXG5cbi5ydW4oZnVuY3Rpb24obWVkaWF0b3IsIHJlc3VsdFN5bmMpIHtcbiAgbWVkaWF0b3Iuc3Vic2NyaWJlKCd3Zm06YXBwZm9ybTpzdWJtaXNzaW9uOmNvbXBsZXRlJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB2YXIgbWV0YURhdGEgPSBldmVudC5tZXRhRGF0YS53Zm07XG4gICAgdmFyIHN1Ym1pc3Npb25SZXN1bHQgPSBldmVudC5zdWJtaXNzaW9uUmVzdWx0O1xuICAgIHJlc3VsdFN5bmMubWFuYWdlclByb21pc2VcbiAgICAudGhlbihmdW5jdGlvbihtYW5hZ2VyKSB7XG4gICAgICByZXR1cm4gbWFuYWdlci5nZXRCeVdvcmtvcmRlcklkKG1ldGFEYXRhLndvcmtvcmRlcklkKVxuICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgIHZhciBzdGVwUmVzdWx0ID0gcmVzdWx0LnN0ZXBSZXN1bHRzW21ldGFEYXRhLnN0ZXAuY29kZV07XG4gICAgICAgIHN0ZXBSZXN1bHQuc3VibWlzc2lvbiA9IHN1Ym1pc3Npb25SZXN1bHQ7XG4gICAgICAgIHJldHVybiBtYW5hZ2VyLnVwZGF0ZShyZXN1bHQpO1xuICAgICAgfSlcbiAgICB9KVxuICAgIC50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgbWVkaWF0b3IucHVibGlzaCgnd2ZtOnJlc3VsdDpyZW1vdGUtdXBkYXRlOicgKyByZXN1bHQud29ya29yZGVySWQsIHJlc3VsdCk7XG4gICAgfSlcbiAgfSlcbn0pXG47XG4iLCIvKipcbiogQ09ORklERU5USUFMXG4qIENvcHlyaWdodCAyMDE2IFJlZCBIYXQsIEluYy4gYW5kL29yIGl0cyBhZmZpbGlhdGVzLlxuKiBUaGlzIGlzIHVucHVibGlzaGVkIHByb3ByaWV0YXJ5IHNvdXJjZSBjb2RlIG9mIFJlZCBIYXQuXG4qKi9cbid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGFwaUhvc3Q6ICdodHRwOi8vbG9jYWxob3N0OjgwODAnLFxuICBhcGlQYXRoOiAnL2FwaS93Zm0vcmVzdWx0JyxcbiAgZGF0YXNldElkIDogJ3Jlc3VsdCcsXG4gIHN5bmNPcHRpb25zIDoge1xuICAgIFwic3luY19mcmVxdWVuY3lcIiA6IDUsXG4gICAgXCJzdG9yYWdlX3N0cmF0ZWd5XCI6IFwiZG9tXCIsXG4gICAgXCJkb19jb25zb2xlX2xvZ1wiOiBmYWxzZVxuICB9XG59XG4iLCJyZXF1aXJlKCcuL3Jpc2stYXNzZXNzbWVudC1mb3JtLnRwbC5odG1sLmpzJyk7XG5yZXF1aXJlKCcuL3Jpc2stYXNzZXNzbWVudC50cGwuaHRtbC5qcycpO1xuIiwidmFyIG5nTW9kdWxlO1xudHJ5IHtcbiAgbmdNb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgnd2ZtLnJpc2stYXNzZXNzbWVudCcpO1xufSBjYXRjaCAoZSkge1xuICBuZ01vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCd3Zm0ucmlzay1hc3Nlc3NtZW50JywgW10pO1xufVxuXG5uZ01vZHVsZS5ydW4oWyckdGVtcGxhdGVDYWNoZScsIGZ1bmN0aW9uICgkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoJ3dmbS10ZW1wbGF0ZS9yaXNrLWFzc2Vzc21lbnQtZm9ybS50cGwuaHRtbCcsXG4gICAgJzwhLS1cXG4nICtcbiAgICAnIENPTkZJREVOVElBTFxcbicgK1xuICAgICcgQ29weXJpZ2h0IDIwMTYgUmVkIEhhdCwgSW5jLiBhbmQvb3IgaXRzIGFmZmlsaWF0ZXMuXFxuJyArXG4gICAgJyBUaGlzIGlzIHVucHVibGlzaGVkIHByb3ByaWV0YXJ5IHNvdXJjZSBjb2RlIG9mIFJlZCBIYXQuXFxuJyArXG4gICAgJy0tPlxcbicgK1xuICAgICcgIDxkaXYgbmctc2hvdz1cInJpc2tBc3Nlc3NtZW50U3RlcCA9PT0gMFwiIGxheW91dC1wYWRkaW5nIGNsYXNzPVwicmlzay1hc3Nlc3NzbWVudFwiPlxcbicgK1xuICAgICcgICAgICA8aDIgY2xhc3M9XCJtZC10aXRsZVwiPlJpc2sgYXNzZXNzbWVudCBjb21wbGV0ZT88L2gyPlxcbicgK1xuICAgICcgICAgICA8cCBjbGFzcz1cIm1kLWJvZHktMVwiPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC4gRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQgaW4gdm9sdXB0YXRlIHZlbGl0IGVzc2UgY2lsbHVtIGRvbG9yZSBldSBmdWdpYXQgbnVsbGEgcGFyaWF0dXIuPC9wPlxcbicgK1xuICAgICdcXG4nICtcbiAgICAnICAgICAgPHAgY2xhc3M9XCJtZC1ib2R5LTFcIj5FeGNlcHRldXIgc2ludCBvY2NhZWNhdCBjdXBpZGF0YXQgbm9uIHByb2lkZW50LCBzdW50IGluIGN1bHBhIHF1aSBvZmZpY2lhIGRlc2VydW50IG1vbGxpdCBhbmltIGlkIGVzdCBsYWJvcnVtLjwvcD5cXG4nICtcbiAgICAnXFxuJyArXG4gICAgJyAgICA8ZGl2IGNsYXNzPVwid29ya2Zsb3ctYWN0aW9ucyBtZC1wYWRkaW5nIG1kLXdoaXRlZnJhbWUtejRcIj5cXG4nICtcbiAgICAnICAgICAgPG1kLWJ1dHRvbiBjbGFzcz1cIm1kLXByaW1hcnkgbWQtd2FyblwiIG5nLWNsaWNrPVwiY3RybC5hbnN3ZXJDb21wbGV0ZSgkZXZlbnQsIHRydWUpXCI+Tm88L21kLWJ1dHRvbj5cXG4nICtcbiAgICAnICAgICAgPG1kLWJ1dHRvbiBjbGFzcz1cIm1kLXByaW1hcnlcIiBuZy1jbGljaz1cImN0cmwuYW5zd2VyQ29tcGxldGUoJGV2ZW50LCB0cnVlKVwiPlllczwvbWQtYnV0dG9uPlxcbicgK1xuICAgICcgICAgPC9kaXY+PCEtLSB3b3JrZmxvdy1hY3Rpb25zLS0+XFxuJyArXG4gICAgJ1xcbicgK1xuICAgICcgIDwvZGl2PlxcbicgK1xuICAgICdcXG4nICtcbiAgICAnICA8ZGl2IG5nLWlmPVwicmlza0Fzc2Vzc21lbnRTdGVwID09IDFcIiBsYXlvdXQtcGFkZGluZz5cXG4nICtcbiAgICAnXFxuJyArXG4gICAgJyAgICA8aDMgY2xhc3M9XCJtZC10aXRsZVwiPlNpZ25hdHVyZTwvaDM+XFxuJyArXG4gICAgJyAgICA8cCBjbGFzcz1cIm1kLWNhcHRpb25cIj5EcmF3IHlvdXIgc2lnbmF0dXJlIGluc2lkZSB0aGUgc3F1YXJlPC9wPlxcbicgK1xuICAgICcgICAgPHNpZ25hdHVyZS1mb3JtIHZhbHVlPVwiY3RybC5tb2RlbC5zaWduYXR1cmVcIj48L3NpZ25hdHVyZS1mb3JtPlxcbicgK1xuICAgICdcXG4nICtcbiAgICAnICAgIDxkaXYgY2xhc3M9XCJ3b3JrZmxvdy1hY3Rpb25zIG1kLXBhZGRpbmcgbWQtd2hpdGVmcmFtZS16NFwiPlxcbicgK1xuICAgICcgICAgICA8bWQtYnV0dG9uIGNsYXNzPVwibWQtcHJpbWFyeSBtZC1odWUtMVwiIG5nLWNsaWNrPVwiY3RybC5iYWNrKCRldmVudClcIj5CYWNrPC9tZC1idXR0b24+XFxuJyArXG4gICAgJyAgICAgIDxtZC1idXR0b24gY2xhc3M9XCJtZC1wcmltYXJ5XCIgbmctY2xpY2s9XCJjdHJsLmRvbmUoJGV2ZW50KVwiPkNvbnRpbnVlPC9tZC1idXR0b24+XFxuJyArXG4gICAgJyAgICA8L2Rpdj48IS0tIHdvcmtmbG93LWFjdGlvbnMtLT5cXG4nICtcbiAgICAnICA8L2Rpdj5cXG4nICtcbiAgICAnJyk7XG59XSk7XG4iLCJ2YXIgbmdNb2R1bGU7XG50cnkge1xuICBuZ01vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCd3Zm0ucmlzay1hc3Nlc3NtZW50Jyk7XG59IGNhdGNoIChlKSB7XG4gIG5nTW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ3dmbS5yaXNrLWFzc2Vzc21lbnQnLCBbXSk7XG59XG5cbm5nTW9kdWxlLnJ1bihbJyR0ZW1wbGF0ZUNhY2hlJywgZnVuY3Rpb24gKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dCgnd2ZtLXRlbXBsYXRlL3Jpc2stYXNzZXNzbWVudC50cGwuaHRtbCcsXG4gICAgJzwhLS1cXG4nICtcbiAgICAnIENPTkZJREVOVElBTFxcbicgK1xuICAgICcgQ29weXJpZ2h0IDIwMTYgUmVkIEhhdCwgSW5jLiBhbmQvb3IgaXRzIGFmZmlsaWF0ZXMuXFxuJyArXG4gICAgJyBUaGlzIGlzIHVucHVibGlzaGVkIHByb3ByaWV0YXJ5IHNvdXJjZSBjb2RlIG9mIFJlZCBIYXQuXFxuJyArXG4gICAgJy0tPlxcbicgK1xuICAgICcgIDxtZC1zdWJoZWFkZXI+UmlzayBBc3Nlc3NtZW50PC9tZC1zdWJoZWFkZXI+XFxuJyArXG4gICAgJ1xcbicgK1xuICAgICcgIDxtZC1saXN0IGNsYXNzPVwicmlzay1hc3Nlc3NtZW50XCI+XFxuJyArXG4gICAgJ1xcbicgK1xuICAgICcgICAgPG1kLWxpc3QtaXRlbSBjbGFzcz1cIm1kLTItbGluZVwiID5cXG4nICtcbiAgICAnICAgICAgPG1kLWljb24gbWQtZm9udC1zZXQ9XCJtYXRlcmlhbC1pY29uc1wiIG5nLWlmPVwicmlza0Fzc2Vzc21lbnQuY29tcGxldGVcIiBjbGFzcz1cInN1Y2Nlc3NcIj5jaGVja19jaXJjbGU8L21kLWljb24+XFxuJyArXG4gICAgJyAgICAgIDxtZC1pY29uIG1kLWZvbnQtc2V0PVwibWF0ZXJpYWwtaWNvbnNcIiBuZy1pZj1cIiEgcmlza0Fzc2Vzc21lbnQuY29tcGxldGVcIiBjbGFzcz1cImRhbmdlclwiPmNhbmNlbDwvbWQtaWNvbj5cXG4nICtcbiAgICAnICAgICAgPGRpdiBjbGFzcz1cIm1kLWxpc3QtaXRlbS10ZXh0XCI+XFxuJyArXG4gICAgJyAgICAgICAgPGgzIG5nLWlmPVwicmlza0Fzc2Vzc21lbnQuY29tcGxldGVcIj5Db21wbGV0ZTwvaDM+XFxuJyArXG4gICAgJyAgICAgICAgPGgzIG5nLWlmPVwiISByaXNrQXNzZXNzbWVudC5jb21wbGV0ZVwiPlVuY29tcGxldGVkPC9oMz5cXG4nICtcbiAgICAnICAgICAgICA8cD5SaXNrIEFzc2Vzc21lbnQ8L3A+XFxuJyArXG4gICAgJyAgICAgIDwvZGl2PlxcbicgK1xuICAgICcgICAgPG1kLWRpdmlkZXI+PC9tZC1kaXZpZGVyPlxcbicgK1xuICAgICcgICAgPC9tZC1saXN0LWl0ZW0+XFxuJyArXG4gICAgJ1xcbicgK1xuICAgICcgICAgPG1kLWxpc3QtaXRlbSBjbGFzcz1cIm1kLTItbGluZSB3aXRoLWltYWdlXCI+XFxuJyArXG4gICAgJyAgICAgIDxtZC1pY29uIG1kLWZvbnQtc2V0PVwibWF0ZXJpYWwtaWNvbnNcIj5nZXN0dXJlPC9tZC1pY29uPlxcbicgK1xuICAgICcgICAgICA8ZGl2IGNsYXNzPVwibWQtbGlzdC1pdGVtLXRleHRcIj5cXG4nICtcbiAgICAnICAgICAgICA8aDM+PHNpZ25hdHVyZSB2YWx1ZT1cInJpc2tBc3Nlc3NtZW50LnNpZ25hdHVyZVwiPjwvc2lnbmF0dXJlPjwvaDM+XFxuJyArXG4gICAgJyAgICAgICAgPHA+UmlzayBBc3Nlc3NtZW50IHNpZ25hdHVyZTwvcD5cXG4nICtcbiAgICAnICAgICAgPC9kaXY+XFxuJyArXG4gICAgJyAgICA8L21kLWxpc3QtaXRlbT5cXG4nICtcbiAgICAnXFxuJyArXG4gICAgJzwvbWQtbGlzdD5cXG4nICtcbiAgICAnJyk7XG59XSk7XG4iLCIvKipcbiogQ09ORklERU5USUFMXG4qIENvcHlyaWdodCAyMDE2IFJlZCBIYXQsIEluYy4gYW5kL29yIGl0cyBhZmZpbGlhdGVzLlxuKiBUaGlzIGlzIHVucHVibGlzaGVkIHByb3ByaWV0YXJ5IHNvdXJjZSBjb2RlIG9mIFJlZCBIYXQuXG4qKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIG5nTW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ3dmbS5yaXNrLWFzc2Vzc21lbnQnLCBbJ3dmbS5jb3JlLm1lZGlhdG9yJywgcmVxdWlyZSgnZmgtd2ZtLXNpZ25hdHVyZScpXSlcblxucmVxdWlyZSgnLi4vLi4vZGlzdCcpO1xuXG5uZ01vZHVsZS5kaXJlY3RpdmUoJ3Jpc2tBc3Nlc3NtZW50JywgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUsIG1lZGlhdG9yKSB7XG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdFJ1xuICAsIHRlbXBsYXRlOiAkdGVtcGxhdGVDYWNoZS5nZXQoJ3dmbS10ZW1wbGF0ZS9yaXNrLWFzc2Vzc21lbnQudHBsLmh0bWwnKVxuICAsIHNjb3BlOiB7XG4gICAgICByaXNrQXNzZXNzbWVudDogXCI9dmFsdWVcIlxuICAgIH1cbiAgLCBjb250cm9sbGVyOiBmdW5jdGlvbigkc2NvcGUpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB9XG4gICwgY29udHJvbGxlckFzOiAnY3RybCdcbiAgfTtcbn0pXG5cbm5nTW9kdWxlLmRpcmVjdGl2ZSgncmlza0Fzc2Vzc21lbnRGb3JtJywgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUsIG1lZGlhdG9yKSB7XG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdFJ1xuICAsIHRlbXBsYXRlOiAkdGVtcGxhdGVDYWNoZS5nZXQoJ3dmbS10ZW1wbGF0ZS9yaXNrLWFzc2Vzc21lbnQtZm9ybS50cGwuaHRtbCcpXG4gICwgc2NvcGU6IHtcbiAgICB9XG4gICwgY29udHJvbGxlcjogZnVuY3Rpb24oJHNjb3BlKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAkc2NvcGUucmlza0Fzc2Vzc21lbnRTdGVwID0gMFxuICAgICAgc2VsZi5tb2RlbCA9IHt9O1xuICAgICAgc2VsZi5hbnN3ZXJDb21wbGV0ZSA9IGZ1bmN0aW9uKGV2ZW50LCBhbnN3ZXIpIHtcbiAgICAgICAgc2VsZi5tb2RlbC5jb21wbGV0ZSA9IGFuc3dlcjtcbiAgICAgICAgJHNjb3BlLnJpc2tBc3Nlc3NtZW50U3RlcCsrO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIH07XG4gICAgICBzZWxmLmJhY2sgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBtZWRpYXRvci5wdWJsaXNoKCd3Zm06d29ya2Zsb3c6c3RlcDpiYWNrJyk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgfVxuICAgICAgc2VsZi5kb25lID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgbWVkaWF0b3IucHVibGlzaCgnd2ZtOndvcmtmbG93OnN0ZXA6ZG9uZScsIHNlbGYubW9kZWwpO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIH07XG4gICAgfVxuICAsIGNvbnRyb2xsZXJBczogJ2N0cmwnXG4gIH07XG59KVxuO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICd3Zm0ucmlzay1hc3Nlc3NtZW50JztcbiIsInJlcXVpcmUoJy4vc2lnbmF0dXJlLWZvcm0udHBsLmh0bWwuanMnKTtcbnJlcXVpcmUoJy4vc2lnbmF0dXJlLnRwbC5odG1sLmpzJyk7XG4iLCJ2YXIgbmdNb2R1bGU7XG50cnkge1xuICBuZ01vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCd3Zm0uc2lnbmF0dXJlJyk7XG59IGNhdGNoIChlKSB7XG4gIG5nTW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ3dmbS5zaWduYXR1cmUnLCBbXSk7XG59XG5cbm5nTW9kdWxlLnJ1bihbJyR0ZW1wbGF0ZUNhY2hlJywgZnVuY3Rpb24gKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dCgnd2ZtLXRlbXBsYXRlL3NpZ25hdHVyZS1mb3JtLnRwbC5odG1sJyxcbiAgICAnPCEtLVxcbicgK1xuICAgICcgQ09ORklERU5USUFMXFxuJyArXG4gICAgJyBDb3B5cmlnaHQgMjAxNiBSZWQgSGF0LCBJbmMuIGFuZC9vciBpdHMgYWZmaWxpYXRlcy5cXG4nICtcbiAgICAnIFRoaXMgaXMgdW5wdWJsaXNoZWQgcHJvcHJpZXRhcnkgc291cmNlIGNvZGUgb2YgUmVkIEhhdC5cXG4nICtcbiAgICAnLS0+XFxuJyArXG4gICAgJzxkaXYgY2xhc3M9XCJzaWduYXR1cmUtZm9ybVwiPlxcbicgK1xuICAgICcgIDxjYW52YXMgdGFiaW5kZXg9XCIwXCI+PC9jYW52YXM+XFxuJyArXG4gICAgJzwvZGl2PlxcbicgK1xuICAgICcnKTtcbn1dKTtcbiIsInZhciBuZ01vZHVsZTtcbnRyeSB7XG4gIG5nTW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ3dmbS5zaWduYXR1cmUnKTtcbn0gY2F0Y2ggKGUpIHtcbiAgbmdNb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgnd2ZtLnNpZ25hdHVyZScsIFtdKTtcbn1cblxubmdNb2R1bGUucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbiAoJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KCd3Zm0tdGVtcGxhdGUvc2lnbmF0dXJlLnRwbC5odG1sJyxcbiAgICAnPCEtLVxcbicgK1xuICAgICcgQ09ORklERU5USUFMXFxuJyArXG4gICAgJyBDb3B5cmlnaHQgMjAxNiBSZWQgSGF0LCBJbmMuIGFuZC9vciBpdHMgYWZmaWxpYXRlcy5cXG4nICtcbiAgICAnIFRoaXMgaXMgdW5wdWJsaXNoZWQgcHJvcHJpZXRhcnkgc291cmNlIGNvZGUgb2YgUmVkIEhhdC5cXG4nICtcbiAgICAnLS0+XFxuJyArXG4gICAgJzxpbWcgbmctc3JjPVwie3tjdHJsLnNpZ25hdHVyZX19XCI+PC9pbWc+XFxuJyArXG4gICAgJycpO1xufV0pO1xuIiwiLyoqXG4qIENPTkZJREVOVElBTFxuKiBDb3B5cmlnaHQgMjAxNiBSZWQgSGF0LCBJbmMuIGFuZC9vciBpdHMgYWZmaWxpYXRlcy5cbiogVGhpcyBpcyB1bnB1Ymxpc2hlZCBwcm9wcmlldGFyeSBzb3VyY2UgY29kZSBvZiBSZWQgSGF0LlxuKiovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBjYW52YXNEcmF3ciA9IHJlcXVpcmUoJy4uL2NhbnZhcy1kcmF3cicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICd3Zm0uc2lnbmF0dXJlJztcblxudmFyIG5nTW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ3dmbS5zaWduYXR1cmUnLCBbJ3dmbS5jb3JlLm1lZGlhdG9yJ10pXG5cbnJlcXVpcmUoJy4uLy4uL2Rpc3QnKTtcblxubmdNb2R1bGUuZGlyZWN0aXZlKCdzaWduYXR1cmVGb3JtJywgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUsICRkb2N1bWVudCwgJHRpbWVvdXQsIG1lZGlhdG9yKSB7XG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdFJ1xuICAsIHRlbXBsYXRlOiAkdGVtcGxhdGVDYWNoZS5nZXQoJ3dmbS10ZW1wbGF0ZS9zaWduYXR1cmUtZm9ybS50cGwuaHRtbCcpXG4gICwgc2NvcGU6IHtcbiAgICAgIHZhbHVlOiAnPScsXG4gICAgICBvcHRpb25zOiAnPSdcbiAgICB9XG4gICwgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbGVtZW50LCBhdHRycywgY3RybCkge1xuICAgICAgdmFyIG9wdGlvbnMgPSBzY29wZS5vcHRpb25zIHx8IHt9O1xuICAgICAgY29uc29sZS5sb2coJ3RvdWNoIHN1cHBvcnQnLCAnb250b3VjaHN0YXJ0JyBpbiAkZG9jdW1lbnRbMF0pO1xuICAgICAgdmFyIGRyYXdyID0gJ29udG91Y2hzdGFydCcgaW4gJGRvY3VtZW50WzBdXG4gICAgICAgID8gbmV3IGNhbnZhc0RyYXdyLkNhbnZhc0RyYXdyKGVsZW1lbnQsIG9wdGlvbnMsICRkb2N1bWVudClcbiAgICAgICAgOiBuZXcgY2FudmFzRHJhd3IuQ2FudmFzRHJhd3JNb3VzZShlbGVtZW50LCBvcHRpb25zLCAkZG9jdW1lbnQpO1xuXG4gICAgICB2YXIgJGNhbnZhcyA9IGFuZ3VsYXIuZWxlbWVudChlbGVtZW50WzBdLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdjYW52YXMnKVswXSk7XG4gICAgICAkdGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgJGNhbnZhcy5vbignYmx1cicsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHNjb3BlLiRhcHBseShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGN0cmwuc3VibWl0KGVsZW1lbnQpO1xuICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgICAgfSlcbiAgICB9XG4gICwgY29udHJvbGxlcjogZnVuY3Rpb24oJHNjb3BlKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICBzZWxmLnN1Ym1pdCA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgdmFyIGNhbnZhcyA9IGVsZW1lbnRbMF0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2NhbnZhcycpWzBdO1xuICAgICAgICAkc2NvcGUudmFsdWUgPSBjYW52YXMudG9EYXRhVVJMKCk7XG4gICAgICB9XG4gICAgfVxuICAsIGNvbnRyb2xsZXJBczogJ2N0cmwnXG4gIH07XG59KVxuXG5uZ01vZHVsZS5kaXJlY3RpdmUoJ3NpZ25hdHVyZScsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdFJ1xuICAsIHRlbXBsYXRlOiAkdGVtcGxhdGVDYWNoZS5nZXQoJ3dmbS10ZW1wbGF0ZS9zaWduYXR1cmUudHBsLmh0bWwnKVxuICAsIHNjb3BlOiB7XG4gICAgICB2YWx1ZTogJz0nXG4gICAgfVxuICAsIGNvbnRyb2xsZXI6IGZ1bmN0aW9uKCRzY29wZSkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgc2VsZi5zaWduYXR1cmUgPSAkc2NvcGUudmFsdWU7XG4gICAgfVxuICAsIGNvbnRyb2xsZXJBczogJ2N0cmwnXG4gIH07XG59KVxuO1xuIiwiLyoqXG4qIENPTkZJREVOVElBTFxuKiBDb3B5cmlnaHQgMjAxNiBSZWQgSGF0LCBJbmMuIGFuZC9vciBpdHMgYWZmaWxpYXRlcy5cbiogVGhpcyBpcyB1bnB1Ymxpc2hlZCBwcm9wcmlldGFyeSBzb3VyY2UgY29kZSBvZiBSZWQgSGF0LlxuKiovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBDYW52YXNEcmF3ck1vdXNlID0gZnVuY3Rpb24gKGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgdmFyIGNhbnZhcyA9IGVsZW1lbnRbMF0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2NhbnZhcycpWzBdO1xuICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgY2FudmFzLnN0eWxlLndpZHRoID0gJzEwMCUnO1xuICBjYW52YXMud2lkdGggPSAod2luZG93LmlubmVyV2lkdGgpO1xuICBjYW52YXMuaGVpZ2h0ID0gMjAwO1xuICBjYW52YXMuc3R5bGUud2lkdGggPSAnJztcblxuICAvLyBzZXQgcHJvcHMgZnJvbSBvcHRpb25zLCBidXQgdGhlIGRlZmF1bHRzIGFyZSBmb3IgdGhlIGNvb2wga2lkc1xuICBjdHgubGluZVdpZHRoID0gb3B0aW9ucy5zaXplIHx8IDU7XG4gIGN0eC5saW5lQ2FwID0gb3B0aW9ucy5saW5lQ2FwIHx8IFwicm91bmRcIjtcbiAgb3B0aW9ucy5jb2xvciA9IG9wdGlvbnMuY29sb3IgfHwgJ2JsdWUnO1xuXG4gIC8vIGxhc3Qga25vd24gcG9zaXRpb25cbiAgdmFyIHBvcyA9IHsgeDogMCwgeTogMCB9O1xuXG4gIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBkcmF3KTtcbiAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHNldFBvc2l0aW9uKTtcbiAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBzdG9wKTtcbiAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0Jywgc3RvcCk7XG5cbiAgLy8gbmV3IHBvc2l0aW9uIGZyb20gbW91c2UgZXZlbnRcbiAgZnVuY3Rpb24gc2V0UG9zaXRpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGNhbnZhcy5mb2N1cygpO1xuICAgIHZhciByZWN0ID0gY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHZhciBvZmZzZXQgPSB7XG4gICAgICB0b3A6IHJlY3QudG9wLFxuICAgICAgbGVmdDogcmVjdC5sZWZ0XG4gICAgfTtcbiAgICBwb3MueCA9IGUuY2xpZW50WCAtIG9mZnNldC5sZWZ0O1xuICAgIHBvcy55ID0gZS5jbGllbnRZIC0gb2Zmc2V0LnRvcDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRyYXcoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIC8vIG1vdXNlIGxlZnQgYnV0dG9uIG11c3QgYmUgcHJlc3NlZFxuICAgIGlmIChlLmJ1dHRvbnMgIT09IDEpIHJldHVybjtcblxuICAgIGN0eC5iZWdpblBhdGgoKTsgLy8gYmVnaW5cblxuICAgIGN0eC5zdHJva2VTdHlsZSA9IG9wdGlvbnMuY29sb3I7XG5cbiAgICBjdHgubW92ZVRvKHBvcy54LCBwb3MueSk7IC8vIGZyb21cblxuICAgIHZhciByZWN0ID0gY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHZhciBvZmZzZXQgPSB7XG4gICAgICB0b3A6IHJlY3QudG9wLFxuICAgICAgbGVmdDogcmVjdC5sZWZ0XG4gICAgfTtcbiAgICBwb3MueCA9IGUuY2xpZW50WCAtIG9mZnNldC5sZWZ0O1xuICAgIHBvcy55ID0gZS5jbGllbnRZIC0gb2Zmc2V0LnRvcDtcbiAgICBjdHgubGluZVRvKHBvcy54LCBwb3MueSk7IC8vIHRvXG5cbiAgICBjdHguc3Ryb2tlKCk7IC8vIGRyYXcgaXQhXG5cbiAgfVxuXG4gIGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgY2FudmFzLmJsdXIoKTtcbiAgfVxufTtcblxudmFyIENhbnZhc0RyYXdyID0gZnVuY3Rpb24oZWxlbWVudCwgb3B0aW9ucywgJGRvY3VtZW50KSB7XG4gIHZhciBjYW52YXMgPSBlbGVtZW50WzBdLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdjYW52YXMnKVswXTtcbiAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICBjYW52YXMuc3R5bGUud2lkdGggPSAnMTAwJSdcbiAgY2FudmFzLndpZHRoID0gY2FudmFzLm9mZnNldFdpZHRoO1xuICBjYW52YXMuc3R5bGUud2lkdGggPSAnJztcblxuICAvLyBzZXQgcHJvcHMgZnJvbSBvcHRpb25zLCBidXQgdGhlIGRlZmF1bHRzIGFyZSBmb3IgdGhlIGNvb2wga2lkc1xuICBjdHgubGluZVdpZHRoID0gb3B0aW9ucy5zaXplIHx8IDU7XG4gIGN0eC5saW5lQ2FwID0gb3B0aW9ucy5saW5lQ2FwIHx8ICdyb3VuZCc7XG4gIG9wdGlvbnMuY29sb3IgPSBvcHRpb25zLmNvbG9yIHx8ICdibHVlJztcbiAgY3R4LnBYID0gdW5kZWZpbmVkO1xuICBjdHgucFkgPSB1bmRlZmluZWQ7XG5cbiAgdmFyIGxpbmVzID0gWywsXTtcbiAgdmFyIHJlY3QgPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgdmFyIG9mZnNldCA9IHtcbiAgICB0b3A6IHJlY3QudG9wICsgJGRvY3VtZW50WzBdLmJvZHkuc2Nyb2xsVG9wLFxuICAgIGxlZnQ6IHJlY3QubGVmdCArICRkb2N1bWVudFswXS5ib2R5LnNjcm9sbExlZnRcbiAgfTtcblxuICB2YXIgc2VsZiA9IHtcbiAgICAvL2JpbmQgY2xpY2sgZXZlbnRzXG4gICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAvLyB1c2UgYW5ndWxlci5lbGVtZW50I29uIGZvciBhdXRvbWF0aWMgbGlzdGVuZXIgY2xlYW51cFxuICAgICAgdmFyIGNhbnZhc05nID0gYW5ndWxhci5lbGVtZW50KGNhbnZhcyk7XG4gICAgICAvL3NldCBwWCBhbmQgcFkgZnJvbSBmaXJzdCBjbGlja1xuICAgICAgY2FudmFzTmcub24oJ3RvdWNoc3RhcnQnLCBzZWxmLnByZURyYXcpO1xuICAgICAgY2FudmFzTmcub24oJ3RvdWNobW92ZScsIHNlbGYuZHJhdyk7XG4gICAgICBjYW52YXNOZy5vbigndG91Y2hlbmQnLCBzZWxmLnN0b3ApO1xuICAgICAgY2FudmFzTmcub24oJ3RvdWNoY2FuY2VsJywgc2VsZi5zdG9wKTtcbiAgICB9LFxuXG4gICAgcHJlRHJhdzogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIGNhbnZhcy5mb2N1cygpO1xuICAgICAgcmVjdCA9IGNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIG9mZnNldCA9IHtcbiAgICAgICAgdG9wOiByZWN0LnRvcCArICRkb2N1bWVudFswXS5ib2R5LnNjcm9sbFRvcCxcbiAgICAgICAgbGVmdDogcmVjdC5sZWZ0ICsgJGRvY3VtZW50WzBdLmJvZHkuc2Nyb2xsTGVmdFxuICAgICAgfTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBldmVudC50b3VjaGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciB0b3VjaCA9IGV2ZW50LnRvdWNoZXNbaV07XG4gICAgICAgIHZhciBpZCAgICAgID0gdG91Y2guaWRlbnRpZmllcjtcblxuICAgICAgICBsaW5lc1tpZF0gPSB7XG4gICAgICAgICAgeCAgICAgOiB0b3VjaC5wYWdlWCAtIG9mZnNldC5sZWZ0LFxuICAgICAgICAgIHkgICAgIDogdG91Y2gucGFnZVkgLSBvZmZzZXQudG9wLFxuICAgICAgICAgIGNvbG9yIDogb3B0aW9ucy5jb2xvclxuICAgICAgICB9O1xuICAgICAgfTtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBldmVudC5jYW5jZWxCdWJibGUgPSB0cnVlO1xuICAgIH0sXG5cbiAgICBkcmF3OiBmdW5jdGlvbihldmVudCkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBldmVudC50b3VjaGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciB0b3VjaCA9IGV2ZW50LnRvdWNoZXNbaV07XG4gICAgICAgIHZhciBpZCA9IHRvdWNoLmlkZW50aWZpZXIsXG5cbiAgICAgICAgbW92ZVggPSB0b3VjaC5wYWdlWCAtIG9mZnNldC5sZWZ0IC0gbGluZXNbaWRdLngsXG4gICAgICAgIG1vdmVZID0gdG91Y2gucGFnZVkgLSBvZmZzZXQudG9wIC0gbGluZXNbaWRdLnk7XG5cbiAgICAgICAgdmFyIHJldCA9IHNlbGYubW92ZShpZCwgbW92ZVgsIG1vdmVZKTtcbiAgICAgICAgbGluZXNbaWRdLnggPSByZXQueDtcbiAgICAgICAgbGluZXNbaWRdLnkgPSByZXQueTtcbiAgICAgIH07XG5cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSxcblxuICAgIG1vdmU6IGZ1bmN0aW9uKGksIGNoYW5nZVgsIGNoYW5nZVkpIHtcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGxpbmVzW2ldLmNvbG9yO1xuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgY3R4Lm1vdmVUbyhsaW5lc1tpXS54LCBsaW5lc1tpXS55KTtcblxuICAgICAgY3R4LmxpbmVUbyhsaW5lc1tpXS54ICsgY2hhbmdlWCwgbGluZXNbaV0ueSArIGNoYW5nZVkpO1xuICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICByZXR1cm4geyB4OiBsaW5lc1tpXS54ICsgY2hhbmdlWCwgeTogbGluZXNbaV0ueSArIGNoYW5nZVkgfTtcbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICBjYW52YXMuYmx1cigpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gc2VsZi5pbml0KCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBDYW52YXNEcmF3cjogQ2FudmFzRHJhd3IsXG4gIENhbnZhc0RyYXdyTW91c2U6IENhbnZhc0RyYXdyTW91c2Vcbn07XG4iLCIvKipcbiogQ09ORklERU5USUFMXG4qIENvcHlyaWdodCAyMDE2IFJlZCBIYXQsIEluYy4gYW5kL29yIGl0cyBhZmZpbGlhdGVzLlxuKiBUaGlzIGlzIHVucHVibGlzaGVkIHByb3ByaWV0YXJ5IHNvdXJjZSBjb2RlIG9mIFJlZCBIYXQuXG4qKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIHN5bmMgPSByZXF1aXJlKCcuLi9jbGllbnQnKVxuXG5tb2R1bGUuZXhwb3J0cyA9ICd3Zm0uc3luYy5zZXJ2aWNlJztcblxuYW5ndWxhci5tb2R1bGUoJ3dmbS5zeW5jLnNlcnZpY2UnLCBbXSlcblxuLmZhY3RvcnkoJ3N5bmNTZXJ2aWNlJywgZnVuY3Rpb24oJHEpIHtcbiAgdmFyIHN5bmNTZXJ2aWNlID0ge307XG4gIHZhciBtYW5hZ2VyUHJvbWlzZTtcblxuICBmdW5jdGlvbiBNYW5hZ2VyV3JhcHBlcihfbWFuYWdlcikge1xuICAgIHRoaXMubWFuYWdlciA9IF9tYW5hZ2VyO1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHZhciBtZXRob2ROYW1lcyA9IFsnY3JlYXRlJywgJ3JlYWQnLCAndXBkYXRlJywgJ2RlbGV0ZScsICdsaXN0JywgJ3N0YXJ0JywgJ3N0b3AnLCAnc2FmZVN0b3AnLCAnZ2V0UXVldWVTaXplJywgJ2ZvcmNlU3luYycsICd3YWl0Rm9yU3luYyddO1xuICAgIG1ldGhvZE5hbWVzLmZvckVhY2goZnVuY3Rpb24obWV0aG9kTmFtZSkge1xuICAgICAgc2VsZlttZXRob2ROYW1lXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gJHEud2hlbihzZWxmLm1hbmFnZXJbbWV0aG9kTmFtZV0uYXBwbHkoc2VsZi5tYW5hZ2VyLCBhcmd1bWVudHMpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBzeW5jU2VydmljZS5pbml0ID0gZnVuY3Rpb24oJGZoLCBzeW5jT3B0aW9ucykge1xuICAgIHN5bmMuaW5pdCgkZmgsIHN5bmNPcHRpb25zKTtcbiAgfVxuXG4gIHN5bmNTZXJ2aWNlLm1hbmFnZSA9IGZ1bmN0aW9uKGRhdGFzZXRJZCwgb3B0aW9ucywgcXVlcnlQYXJhbXMsIG1ldGFEYXRhKSB7XG4gICAgcmV0dXJuICRxLndoZW4oc3luYy5tYW5hZ2UoZGF0YXNldElkLCBvcHRpb25zLCBxdWVyeVBhcmFtcywgbWV0YURhdGEpKVxuICAgIC50aGVuKGZ1bmN0aW9uKF9tYW5hZ2VyKSB7XG4gICAgICB2YXIgbWFuYWdlciA9IG5ldyBNYW5hZ2VyV3JhcHBlcihfbWFuYWdlcik7XG4gICAgICBtYW5hZ2VyLnN0cmVhbSA9IF9tYW5hZ2VyLnN0cmVhbTtcbiAgICAgIHJldHVybiBtYW5hZ2VyO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBzeW5jU2VydmljZTtcbn0pXG47XG4iLCIvKipcbiogQ09ORklERU5USUFMXG4qIENvcHlyaWdodCAyMDE2IFJlZCBIYXQsIEluYy4gYW5kL29yIGl0cyBhZmZpbGlhdGVzLlxuKiBUaGlzIGlzIHVucHVibGlzaGVkIHByb3ByaWV0YXJ5IHNvdXJjZSBjb2RlIG9mIFJlZCBIYXQuXG4qKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIF8gPSByZXF1aXJlKCdsb2Rhc2gnKVxuICAsIHEgPSByZXF1aXJlKCdxJylcbiAgLCBkZWZhdWx0Q29uZmlnID0gcmVxdWlyZSgnLi9jb25maWcnKVxuICAsIFJ4ID0gcmVxdWlyZSgncngnKVxuICA7XG5cbnZhciAkZmgsIGluaXRpYWxpemVkID0gZmFsc2UsIG5vdGlmaWNhdGlvblN0cmVhbSwgbGlzdGVuZXJzID0gW107XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybURhdGFTZXQoc3luY0RhdGEpIHtcbiAgdmFyIHJlc3VsdCA9IF8udmFsdWVzKHN5bmNEYXRhKS5tYXAoZnVuY3Rpb24oc3luY0RhdGEpIHtcbiAgICByZXR1cm4gc3luY0RhdGEuZGF0YTtcbiAgfSk7XG4gIHJldHVybiBfLnNvcnRCeShyZXN1bHQsIGZ1bmN0aW9uKG8pIHsgcmV0dXJuIG8uaWQ7IH0pO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRFcnJvcihjb2RlLCBtc2cpIHtcbiAgdmFyIGVycm9yID0gJ0Vycm9yJztcbiAgaWYgKGNvZGUgJiYgbXNnKSB7XG4gICAgZXJyb3IgKz0gJyAnICsgY29kZSArICc6ICcgKyBtc2c7XG4gIH0gZWxzZSBpZiAoY29kZSAmJiAhbXNnKSB7XG4gICAgZXJyb3IgKz0gJzogJyArIGNvZGU7XG4gIH0gZWxzZSBpZiAoIWNvZGUgJiYgbXNnKSB7XG4gICAgZXJyb3IgKz0gJzogJyArIG1zZztcbiAgfSBlbHNlIHtcbiAgICBlcnJvciArPSAnOiBubyBlcnJvciBkZXRhaWxzIGF2YWlsYWJsZSdcbiAgfVxuICByZXR1cm4gZXJyb3I7XG59XG5cbmZ1bmN0aW9uIGluaXQoXyRmaCwgX3N5bmNPcHRpb25zKSB7XG4gIGlmIChpbml0aWFsaXplZCkge1xuICAgIGNvbnNvbGUubG9nKCdzeW5jLWNsaWVudCBhbHJlYWR5IGluaXRhbGl6ZWQuJyk7XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coJ3N5bmMtY2xpZW50IGluaXRhbGl6aW5nLicpO1xuICAgICRmaCA9IF8kZmg7XG4gICAgbm90aWZpY2F0aW9uU3RyZWFtID0gUnguT2JzZXJ2YWJsZS5jcmVhdGUoZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICBhZGRMaXN0ZW5lcihmdW5jdGlvbihub3RpZmljYXRpb24pIHtcbiAgICAgICAgb2JzZXJ2ZXIub25OZXh0KG5vdGlmaWNhdGlvbik7XG4gICAgICB9KTtcbiAgICB9KVxuICAgIC5zaGFyZSgpO1xuICAgIHZhciBzeW5jT3B0aW9ucyA9IF8uZGVmYXVsdHMoX3N5bmNPcHRpb25zLCBkZWZhdWx0Q29uZmlnLnN5bmNPcHRpb25zKTtcblxuICAgICRmaC5zeW5jLmluaXQoc3luY09wdGlvbnMpO1xuICAgIGluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAkZmguc3luYy5ub3RpZnkoZnVuY3Rpb24obm90aWZpY2F0aW9uKSB7XG4gICAgICBsaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbihsaXN0ZW5lcikge1xuICAgICAgICBsaXN0ZW5lci5jYWxsKHVuZGVmaW5lZCwgbm90aWZpY2F0aW9uKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59O1xuXG5mdW5jdGlvbiBtYW5hZ2UoZGF0YXNldElkLCBvcHRpb25zLCBxdWVyeVBhcmFtcywgbWV0YURhdGEpIHtcbiAgdmFyIGRlZmVycmVkID0gcS5kZWZlcigpO1xuICBpZiAoIWluaXRpYWxpemVkKSB7XG4gICAgZGVmZXJyZWQucmVzb2x2ZSgnU3luYyBub3QgeWV0IGluaXRpYWxpemVkLiAgQ2FsbCBzeW5jLWNsaWVudC5pbml0KCkgZmlyc3QuJyk7XG4gIH0gZWxzZSB7XG4gICAgLy9tYW5hZ2UgdGhlIGRhdGFTZXRcbiAgICAkZmguc3luYy5tYW5hZ2UoZGF0YXNldElkLCBvcHRpb25zLCBxdWVyeVBhcmFtcywgbWV0YURhdGEsIGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIG1hbmFnZXIgPSBuZXcgRGF0YU1hbmFnZXIoZGF0YXNldElkKTtcbiAgICAgIG1hbmFnZXIuc3RyZWFtID0gbm90aWZpY2F0aW9uU3RyZWFtLmZpbHRlcihmdW5jdGlvbihub3RpZmljYXRpb24pIHtcbiAgICAgICAgcmV0dXJuIG5vdGlmaWNhdGlvbi5kYXRhc2V0X2lkID09IGRhdGFzZXRJZDtcbiAgICAgIH0pXG4gICAgICBkZWZlcnJlZC5yZXNvbHZlKG1hbmFnZXIpO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xufVxuXG5mdW5jdGlvbiBhZGRMaXN0ZW5lcihsaXN0ZW5lcikge1xuICBsaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG59XG5cbmZ1bmN0aW9uIERhdGFNYW5hZ2VyKGRhdGFzZXRJZCkge1xuICB0aGlzLmRhdGFzZXRJZCA9IGRhdGFzZXRJZDtcbn1cblxuRGF0YU1hbmFnZXIucHJvdG90eXBlLmxpc3QgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGRlZmVycmVkID0gcS5kZWZlcigpO1xuICAkZmguc3luYy5kb0xpc3QodGhpcy5kYXRhc2V0SWQsIGZ1bmN0aW9uKHJlcykge1xuICAgIHZhciBvYmplY3RzID0gdHJhbnNmb3JtRGF0YVNldChyZXMpO1xuICAgIGRlZmVycmVkLnJlc29sdmUob2JqZWN0cyk7XG4gIH0sIGZ1bmN0aW9uKGNvZGUsIG1zZykge1xuICAgIGRlZmVycmVkLnJlamVjdChuZXcgRXJyb3IoZm9ybWF0RXJyb3IoY29kZSwgbXNnKSkpO1xuICB9KTtcbiAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG59O1xuXG5EYXRhTWFuYWdlci5wcm90b3R5cGUuY3JlYXRlID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gIHZhciBkZWZlcnJlZCA9IHEuZGVmZXIoKTtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICAkZmguc3luYy5kb0NyZWF0ZShzZWxmLmRhdGFzZXRJZCwgb2JqZWN0LCBmdW5jdGlvbihtc2cpIHtcbiAgICAvLyBzdWNjZXNzXG4gICAgc2VsZi5zdHJlYW0uZmlsdGVyKGZ1bmN0aW9uKG5vdGlmaWNhdGlvbikge1xuICAgICAgcmV0dXJuIG5vdGlmaWNhdGlvbi5jb2RlID09ICdsb2NhbF91cGRhdGVfYXBwbGllZCdcbiAgICAgICAgJiYgbm90aWZpY2F0aW9uLm1lc3NhZ2UgPT0gJ2NyZWF0ZSdcbiAgICAgICAgOyAvLyAmJiBub3RpZmljYXRpb24udWlkID09IG9iamVjdC5fbG9jYWx1aWQ7ICBUT0RPOiBnZXQgdGhlIHN5bmMgZnJhbWV3b3JrIHRvIGluY2x1ZGUgdGhlIHRlbXBvcmFyeSB1aWQgaW4gdGhlIG5vdGlmaWNhdGlvblxuICAgIH0pLnRha2UoMSkudG9Qcm9taXNlKHEuUHJvbWlzZSlcbiAgICAudGhlbihmdW5jdGlvbihub3RpZmljYXRpb24pIHtcbiAgICAgIG9iamVjdC5fbG9jYWx1aWQgPSBtc2cudWlkO1xuICAgICAgcmV0dXJuIHNlbGYudXBkYXRlKG9iamVjdCk7XG4gICAgfSlcbiAgICAudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzdWx0KTtcbiAgICB9KVxuICB9LCBmdW5jdGlvbihjb2RlLCBtc2cpIHtcbiAgICAvLyBmYWlsdXJlXG4gICAgZGVmZXJyZWQucmVqZWN0KG5ldyBFcnJvcihmb3JtYXRFcnJvcihjb2RlLCBtc2cpKSk7XG4gIH0pO1xuICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbn07XG5cbkRhdGFNYW5hZ2VyLnByb3RvdHlwZS5yZWFkID0gZnVuY3Rpb24oaWQpIHtcbiAgdmFyIGRlZmVycmVkID0gcS5kZWZlcigpO1xuICAkZmguc3luYy5kb1JlYWQodGhpcy5kYXRhc2V0SWQsIGlkLCBmdW5jdGlvbihyZXMpIHtcbiAgICAvLyBzdWNjZXNzXG4gICAgZGVmZXJyZWQucmVzb2x2ZShyZXMuZGF0YSk7XG4gIH0sIGZ1bmN0aW9uKGNvZGUsIG1zZykge1xuICAgIC8vIGZhaWx1cmVcbiAgICBkZWZlcnJlZC5yZWplY3QobmV3IEVycm9yKGZvcm1hdEVycm9yKGNvZGUsIG1zZykpKTtcbiAgfSk7XG4gIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xufTtcblxuRGF0YU1hbmFnZXIucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICB2YXIgZGVmZXJyZWQgPSBxLmRlZmVyKCk7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgdmFyIHVpZFByb21pc2UgPSBfLmhhcyhvYmplY3QsICdpZCcpXG4gICAgPyBxLndoZW4oU3RyaW5nKG9iamVjdC5pZCkpXG4gICAgOiBzZWxmLnJlYWQob2JqZWN0Ll9sb2NhbHVpZCkudGhlbihmdW5jdGlvbihfb2JqZWN0KSB7XG4gICAgICBjb25zb2xlLmxvZygnX29iamVjdCcsIF9vYmplY3QpXG4gICAgICBpZiAoXy5oYXMoX29iamVjdCwgJ2lkJykpIHtcbiAgICAgICAgb2JqZWN0LmlkID0gX29iamVjdC5pZDtcbiAgICAgICAgcmV0dXJuIFN0cmluZyhfb2JqZWN0LmlkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBvYmplY3QuX2xvY2FsdWlkO1xuICAgICAgfVxuICAgIH0pO1xuICB1aWRQcm9taXNlLnRoZW4oZnVuY3Rpb24odWlkKSB7XG4gICAgY29uc29sZS5sb2coJ3VwZGF0aW5nIHdpdGggaWQnLCB1aWQpXG4gICRmaC5zeW5jLmRvVXBkYXRlKHNlbGYuZGF0YXNldElkLCB1aWQsIG9iamVjdCwgZnVuY3Rpb24obXNnKSB7XG4gICAgLy8gc3VjY2Vzc1xuICAgIHNlbGYuc3RyZWFtLmZpbHRlcihmdW5jdGlvbihub3RpZmljYXRpb24pIHtcbiAgICAgIHJldHVybiBub3RpZmljYXRpb24uY29kZSA9PT0gJ2xvY2FsX3VwZGF0ZV9hcHBsaWVkJ1xuICAgICAgICAmJiBub3RpZmljYXRpb24ubWVzc2FnZSA9PT0gJ3VwZGF0ZSdcbiAgICAgICAgJiYgbm90aWZpY2F0aW9uLnVpZCA9PT0gdWlkO1xuICAgIH0pLnRha2UoMSkudG9Qcm9taXNlKHEuUHJvbWlzZSlcbiAgICAudGhlbihmdW5jdGlvbihub3RpZmljYXRpb24pIHtcbiAgICAgIHJldHVybiBzZWxmLnJlYWQodWlkKTtcbiAgICB9KVxuICAgIC50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgY29uc29sZS5sb2coJ3Jlc3VsdCcsIHJlc3VsdClcbiAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzdWx0KTtcbiAgICB9KVxuICB9LCBmdW5jdGlvbihjb2RlLCBtc2cpIHtcbiAgICAvLyBmYWlsdXJlXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgdXBkYXRpbmcnLCBvYmplY3QpO1xuICAgIGRlZmVycmVkLnJlamVjdChuZXcgRXJyb3IoZm9ybWF0RXJyb3IoY29kZSwgbXNnKSkpO1xuICB9KTtcbn0pO1xuICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbn07XG5cbkRhdGFNYW5hZ2VyLnByb3RvdHlwZS5kZWxldGUgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgdmFyIGRlZmVycmVkID0gcS5kZWZlcigpO1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gICRmaC5zeW5jLmRvRGVsZXRlKHNlbGYuZGF0YXNldElkLCBvYmplY3QuaWQsIGZ1bmN0aW9uKHJlcykge1xuICAgIC8vIHN1Y2Nlc3NcbiAgICB2YXIgdWlkID0gU3RyaW5nKG9iamVjdC5pZCk7XG4gICAgc2VsZi5zdHJlYW0uZmlsdGVyKGZ1bmN0aW9uKG5vdGlmaWNhdGlvbikge1xuICAgICAgcmV0dXJuIG5vdGlmaWNhdGlvbi5jb2RlID09PSAnbG9jYWxfdXBkYXRlX2FwcGxpZWQnXG4gICAgICAgICYmIG5vdGlmaWNhdGlvbi5tZXNzYWdlID09PSAnZGVsZXRlJ1xuICAgICAgICAmJiBTdHJpbmcobm90aWZpY2F0aW9uLnVpZCkgPT09IHVpZDtcbiAgICB9KS50YWtlKDEpLnRvUHJvbWlzZShxLlByb21pc2UpXG4gICAgLnRoZW4oZnVuY3Rpb24obm90aWZpY2F0aW9uKSB7XG4gICAgICBkZWZlcnJlZC5yZXNvbHZlKG5vdGlmaWNhdGlvbi5tZXNzYWdlKTtcbiAgICB9KVxuICB9LCBmdW5jdGlvbihjb2RlLCBtc2cpIHtcbiAgICAvLyBmYWlsdXJlXG4gICAgZGVmZXJyZWQucmVqZWN0KG5ldyBFcnJvcihmb3JtYXRFcnJvcihjb2RlLCBtc2cpKSk7XG4gIH0pO1xuICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbn07XG5cbkRhdGFNYW5hZ2VyLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgZGVmZXJyZWQgPSBxLmRlZmVyKCk7XG4gICRmaC5zeW5jLnN0YXJ0U3luYyh0aGlzLmRhdGFzZXRJZCwgZnVuY3Rpb24oKXtcbiAgICBkZWZlcnJlZC5yZXNvbHZlKCdzeW5jIGxvb3Agc3RhcnRlZCcpO1xuICB9LCBmdW5jdGlvbihlcnJvcil7XG4gICAgZGVmZXJyZWQucmVqZWN0KGVycm9yKTtcbiAgfSk7XG4gIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xufTtcblxuRGF0YU1hbmFnZXIucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGRlZmVycmVkID0gcS5kZWZlcigpO1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gICRmaC5zeW5jLnN0b3BTeW5jKHRoaXMuZGF0YXNldElkLCBmdW5jdGlvbigpe1xuICAgIGlmIChzZWxmLnJlY29yZERlbHRhUmVjZWl2ZWRTdWJzY3JpcHRpb24pIHtcbiAgICAgIHNlbGYucmVjb3JkRGVsdGFSZWNlaXZlZFN1YnNjcmlwdGlvbi5kaXNwb3NlKCk7XG4gICAgfVxuICAgIGRlZmVycmVkLnJlc29sdmUoJ3N5bmMgbG9vcCBzdG9wcGVkJyk7XG4gIH0sIGZ1bmN0aW9uKGVycm9yKXtcbiAgICBkZWZlcnJlZC5yZWplY3QoZXJyb3IpO1xuICB9KTtcbiAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG59O1xuXG5EYXRhTWFuYWdlci5wcm90b3R5cGUuZm9yY2VTeW5jID0gZnVuY3Rpb24oKSB7XG4gIHZhciBkZWZlcnJlZCA9IHEuZGVmZXIoKTtcbiAgJGZoLnN5bmMuZm9yY2VTeW5jKHRoaXMuZGF0YXNldElkLCBmdW5jdGlvbigpe1xuICAgIGRlZmVycmVkLnJlc29sdmUoJ3N5bmMgbG9vcCB3aWxsIHJ1bicpO1xuICB9LCBmdW5jdGlvbihlcnJvcil7XG4gICAgZGVmZXJyZWQucmVqZWN0KGVycm9yKTtcbiAgfSk7XG4gIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xufTtcblxuRGF0YU1hbmFnZXIucHJvdG90eXBlLmdldFF1ZXVlU2l6ZSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgZGVmZXJyZWQgPSBxLmRlZmVyKCk7XG4gICRmaC5zeW5jLmdldFBlbmRpbmcodGhpcy5kYXRhc2V0SWQsIGZ1bmN0aW9uKHBlbmRpbmcpIHtcbiAgICBkZWZlcnJlZC5yZXNvbHZlKF8uc2l6ZShwZW5kaW5nKSk7XG4gIH0pO1xuICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbn1cblxuRGF0YU1hbmFnZXIucHJvdG90eXBlLnNhZmVTdG9wID0gZnVuY3Rpb24odXNlck9wdGlvbnMpIHtcbiAgdmFyIGRlZmVycmVkID0gcS5kZWZlcigpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgdGltZW91dDogMjAwMFxuICB9XG4gIHZhciBzZWxmID0gdGhpcztcbiAgdmFyIG9wdGlvbnMgPSBfLmRlZmF1bHRzKHVzZXJPcHRpb25zLCBkZWZhdWx0T3B0aW9ucyk7XG4gIHNlbGYuZ2V0UXVldWVTaXplKClcbiAgLnRoZW4oZnVuY3Rpb24oc2l6ZSkge1xuICAgIGlmIChzaXplID09PSAwKSB7XG4gICAgICBzZWxmLnN0b3AoKS50aGVuKGRlZmVycmVkLnJlc29sdmUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWZlcnJlZC5ub3RpZnkoJ0NhbGxpbmcgZm9yY2VTeW5jIHN5bmMgYmVmb3JlIHN0b3AnKTtcbiAgICAgIHJldHVybiBzZWxmLmZvcmNlU3luYygpXG4gICAgICAudGhlbihzZWxmLndhaXRGb3JTeW5jLmJpbmQoc2VsZikpXG4gICAgICAudGltZW91dChvcHRpb25zLnRpbWVvdXQpXG4gICAgICAudGhlbihzZWxmLmdldFF1ZXVlU2l6ZS5iaW5kKHNlbGYpKVxuICAgICAgLnRoZW4oZnVuY3Rpb24oc2l6ZSkge1xuICAgICAgICBpZiAoc2l6ZSA+IDApIHtcbiAgICAgICAgICBkZWZlcnJlZC5yZWplY3QobmV3IEVycm9yKCdmb3JjZVN5bmMgZmFpbGVkLCBvdXRzdGFuZGluZyByZXN1bHRzIHN0aWxsIHByZXNlbnQnKSk7XG4gICAgICAgIH07XG4gICAgICB9KVxuICAgICAgLnRoZW4oc2VsZi5zdG9wLmJpbmQoc2VsZikpXG4gICAgICAudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSgpXG4gICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICBkZWZlcnJlZC5yZWplY3QobmV3IEVycm9yKCdmb3JjZVN5bmMgdGltZW91dCcpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xufVxuXG5EYXRhTWFuYWdlci5wcm90b3R5cGUud2FpdEZvclN5bmMgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGRlZmVycmVkID0gcS5kZWZlcigpO1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHNlbGYuc3RyZWFtLmZpbHRlcihmdW5jdGlvbihub3RpZmljYXRpb24pIHtcbiAgICByZXR1cm4gbm90aWZpY2F0aW9uLmNvZGUgPT0gJ3N5bmNfY29tcGxldGUnIHx8IG5vdGlmaWNhdGlvbi5jb2RlID09ICdzeW5jX2ZhaWxlZCc7XG4gIH0pLnRha2UoMSkudG9Qcm9taXNlKHEuUHJvbWlzZSlcbiAgLnRoZW4oZnVuY3Rpb24obm90aWZpY2F0aW9uKSB7XG4gICAgaWYgKG5vdGlmaWNhdGlvbi5jb2RlID09PSAnc3luY19jb21wbGV0ZScpIHtcbiAgICAgIGRlZmVycmVkLnJlc29sdmUobm90aWZpY2F0aW9uKTtcbiAgICB9IGVsc2UgaWYgKG5vdGlmaWNhdGlvbi5jb2RlID09PSAnc3luY19mYWlsZWQnKSB7XG4gICAgICBkZWZlcnJlZC5yZWplY3QobmV3IEVycm9yKCdTeW5jIEZhaWxlZCcsIG5vdGlmaWNhdGlvbikpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xufVxuXG5EYXRhTWFuYWdlci5wcm90b3R5cGUucHVibGlzaFJlY29yZERlbHRhUmVjZWl2ZWQgPSBmdW5jdGlvbihtZWRpYXRvcikge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHNlbGYucmVjb3JkRGVsdGFSZWNlaXZlZFN1YnNjcmlwdGlvbiA9IHNlbGYuc3RyZWFtLmZpbHRlcihmdW5jdGlvbihub3RpZmljYXRpb24pIHtcbiAgICByZXR1cm4gbm90aWZpY2F0aW9uLmNvZGUgPT0gJ3JlY29yZF9kZWx0YV9yZWNlaXZlZCdcbiAgfSkuc3Vic2NyaWJlKGZ1bmN0aW9uKG5vdGlmaWNhdGlvbikge1xuICAgIG1lZGlhdG9yLnB1Ymxpc2goJ3dmbTpzeW5jOnJlY29yZF9kZWx0YV9yZWNlaXZlZDonICsgc2VsZi5kYXRhc2V0SWQsIG5vdGlmaWNhdGlvbik7XG4gIH0pXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaW5pdDogaW5pdFxuLCBtYW5hZ2U6IG1hbmFnZVxuLCBhZGRMaXN0ZW5lcjogYWRkTGlzdGVuZXJcbn1cbiIsIi8qKlxuKiBDT05GSURFTlRJQUxcbiogQ29weXJpZ2h0IDIwMTYgUmVkIEhhdCwgSW5jLiBhbmQvb3IgaXRzIGFmZmlsaWF0ZXMuXG4qIFRoaXMgaXMgdW5wdWJsaXNoZWQgcHJvcHJpZXRhcnkgc291cmNlIGNvZGUgb2YgUmVkIEhhdC5cbioqL1xuJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc3luY09wdGlvbnMgOiB7XG4gICAgXCJzeW5jX2ZyZXF1ZW5jeVwiIDogNSxcbiAgICBcInN0b3JhZ2Vfc3RyYXRlZ3lcIjogXCJkb21cIixcbiAgICBcImRvX2NvbnNvbGVfbG9nXCI6IGZhbHNlXG4gIH1cbn1cbiIsInZhciBuZ01vZHVsZTtcbnRyeSB7XG4gIG5nTW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ3dmbS51c2VyLmRpcmVjdGl2ZXMnKTtcbn0gY2F0Y2ggKGUpIHtcbiAgbmdNb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgnd2ZtLnVzZXIuZGlyZWN0aXZlcycsIFtdKTtcbn1cblxubmdNb2R1bGUucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbiAoJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KCd3Zm0tdGVtcGxhdGUvZ3JvdXAtZm9ybS50cGwuaHRtbCcsXG4gICAgJzwhLS1cXG4nICtcbiAgICAnIENPTkZJREVOVElBTFxcbicgK1xuICAgICcgQ29weXJpZ2h0IDIwMTYgUmVkIEhhdCwgSW5jLiBhbmQvb3IgaXRzIGFmZmlsaWF0ZXMuXFxuJyArXG4gICAgJyBUaGlzIGlzIHVucHVibGlzaGVkIHByb3ByaWV0YXJ5IHNvdXJjZSBjb2RlIG9mIFJlZCBIYXQuXFxuJyArXG4gICAgJy0tPlxcbicgK1xuICAgICc8bWQtdG9vbGJhciBjbGFzcz1cImNvbnRlbnQtdG9vbGJhclwiPlxcbicgK1xuICAgICcgIDxkaXYgY2xhc3M9XCJtZC10b29sYmFyLXRvb2xzXCI+XFxuJyArXG4gICAgJyAgICA8aDM+XFxuJyArXG4gICAgJyAgICAgIEdyb3VwICN7e2N0cmwubW9kZWwuaWR9fVxcbicgK1xuICAgICcgICAgPC9oMz5cXG4nICtcbiAgICAnXFxuJyArXG4gICAgJyAgICA8c3BhbiBmbGV4Pjwvc3Bhbj5cXG4nICtcbiAgICAnICAgIDxtZC1idXR0b24gY2xhc3M9XCJtZC1pY29uLWJ1dHRvblwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiIG5nLWNsaWNrPVwiY3RybC5zZWxlY3RHcm91cCgkZXZlbnQsIGN0cmwubW9kZWwpXCI+XFxuJyArXG4gICAgJyAgICAgIDxtZC1pY29uIG1kLWZvbnQtc2V0PVwibWF0ZXJpYWwtaWNvbnNcIj5jbG9zZTwvbWQtaWNvbj5cXG4nICtcbiAgICAnICAgIDwvbWQtYnV0dG9uPlxcbicgK1xuICAgICcgIDwvZGl2PlxcbicgK1xuICAgICc8L21kLXRvb2xiYXI+XFxuJyArXG4gICAgJzxtZC1idXR0b24gY2xhc3M9XCJtZC1mYWJcIiBhcmlhLWxhYmVsPVwiTmV3IGdyb3VwXCIgdWktc3JlZj1cImFwcC5ncm91cC5uZXdcIj5cXG4nICtcbiAgICAnICA8bWQtaWNvbiBtZC1mb250LXNldD1cIm1hdGVyaWFsLWljb25zXCI+YWRkPC9tZC1pY29uPlxcbicgK1xuICAgICc8L21kLWJ1dHRvbj5cXG4nICtcbiAgICAnXFxuJyArXG4gICAgJzxkaXYgY2xhc3M9XCJ3Zm0tbWFpbmNvbC1zY3JvbGxcIj5cXG4nICtcbiAgICAnPGZvcm0gbmFtZT1cImdyb3VwRm9ybVwiIG5nLXN1Ym1pdD1cImN0cmwuZG9uZShncm91cEZvcm0uJHZhbGlkKVwiIG5vdmFsaWRhdGUgbGF5b3V0LXBhZGRpbmcgbGF5b3V0LW1hcmdpbj5cXG4nICtcbiAgICAnXFxuJyArXG4gICAgJyAgPG1kLWlucHV0LWNvbnRhaW5lciBjbGFzcz1cIm1kLWJsb2NrXCI+XFxuJyArXG4gICAgJyAgICA8bGFiZWwgZm9yPVwiZ3JvdXBuYW1lXCI+R3JvdXAgTmFtZTwvbGFiZWw+XFxuJyArXG4gICAgJyAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImdyb3VwbmFtZVwiIG5hbWU9XCJncm91cG5hbWVcIiBuZy1tb2RlbD1cImN0cmwubW9kZWwubmFtZVwiIHJlcXVpcmVkPlxcbicgK1xuICAgICcgICAgPGRpdiBuZy1tZXNzYWdlcz1cIndvcmtvcmRlckZvcm0uZ3JvdXBuYW1lLiRlcnJvclwiIG5nLWlmPVwiY3RybC5zdWJtaXR0ZWQgfHwgZ3JvdXBGb3JtLmdyb3VwbmFtZS4kZGlydHlcIj5cXG4nICtcbiAgICAnICAgICAgPGRpdiBuZy1tZXNzYWdlPVwicmVxdWlyZWRcIj5BIG5hbWUgaXMgcmVxdWlyZWQuPC9kaXY+XFxuJyArXG4gICAgJyAgICA8L2Rpdj5cXG4nICtcbiAgICAnICA8L21kLWlucHV0LWNvbnRhaW5lcj5cXG4nICtcbiAgICAnXFxuJyArXG4gICAgJyAgPG1kLWlucHV0LWNvbnRhaW5lciBjbGFzcz1cIm1kLWJsb2NrXCI+XFxuJyArXG4gICAgJyAgICA8bGFiZWwgZm9yPVwiYXNzaWduZWVcIj5Sb2xlPC9sYWJlbD5cXG4nICtcbiAgICAnICAgIDxtZC1zZWxlY3QgbmctbW9kZWw9XCJjdHJsLm1vZGVsLnJvbGVcIiBuYW1lPVwiYXNzaWduZWVcIiBpZD1cImFzc2lnbmVlXCI+XFxuJyArXG4gICAgJyAgICAgICA8bWQtb3B0aW9uIHZhbHVlPVwiYWRtaW5cIj5BZG1pbjwvbWQtb3B0aW9uPlxcbicgK1xuICAgICcgICAgICAgPG1kLW9wdGlvbiB2YWx1ZT1cIm1hbmFnZXJcIj5NYW5hZ2VyPC9tZC1vcHRpb24+XFxuJyArXG4gICAgJyAgICAgICA8bWQtb3B0aW9uIHZhbHVlPVwid29ya2VyXCI+V29ya2VyPC9tZC1vcHRpb24+XFxuJyArXG4gICAgJyAgICAgPC9tZC1zZWxlY3Q+XFxuJyArXG4gICAgJyAgPC9tZC1pbnB1dC1jb250YWluZXI+XFxuJyArXG4gICAgJ1xcbicgK1xuICAgICcgIDxtZC1idXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwibWQtcmFpc2VkIG1kLXByaW1hcnlcIj57e2N0cmwubW9kZWwuaWQgfHwgY3RybC5tb2RlbC5pZCA9PT0gMCA/IFxcJ1VwZGF0ZVxcJyA6IFxcJ0NyZWF0ZVxcJ319IEdyb3VwPC9tZC1idXR0b24+XFxuJyArXG4gICAgJzwvZm9ybT5cXG4nICtcbiAgICAnPC9kaXY+XFxuJyArXG4gICAgJycpO1xufV0pO1xuIiwidmFyIG5nTW9kdWxlO1xudHJ5IHtcbiAgbmdNb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgnd2ZtLnVzZXIuZGlyZWN0aXZlcycpO1xufSBjYXRjaCAoZSkge1xuICBuZ01vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCd3Zm0udXNlci5kaXJlY3RpdmVzJywgW10pO1xufVxuXG5uZ01vZHVsZS5ydW4oWyckdGVtcGxhdGVDYWNoZScsIGZ1bmN0aW9uICgkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoJ3dmbS10ZW1wbGF0ZS9ncm91cC1saXN0LnRwbC5odG1sJyxcbiAgICAnPCEtLVxcbicgK1xuICAgICcgQ09ORklERU5USUFMXFxuJyArXG4gICAgJyBDb3B5cmlnaHQgMjAxNiBSZWQgSGF0LCBJbmMuIGFuZC9vciBpdHMgYWZmaWxpYXRlcy5cXG4nICtcbiAgICAnIFRoaXMgaXMgdW5wdWJsaXNoZWQgcHJvcHJpZXRhcnkgc291cmNlIGNvZGUgb2YgUmVkIEhhdC5cXG4nICtcbiAgICAnLS0+XFxuJyArXG4gICAgJzxtZC10b29sYmFyPlxcbicgK1xuICAgICcgIDxkaXYgY2xhc3M9XCJtZC10b29sYmFyLXRvb2xzXCI+XFxuJyArXG4gICAgJyAgICA8aDM+XFxuJyArXG4gICAgJyAgICAgIDxzcGFuPkdyb3Vwczwvc3Bhbj5cXG4nICtcbiAgICAnICAgIDwvaDM+XFxuJyArXG4gICAgJyAgPC9kaXY+XFxuJyArXG4gICAgJzwvbWQtdG9vbGJhcj5cXG4nICtcbiAgICAnXFxuJyArXG4gICAgJzxmb3JtIGFjdGlvbj1cIiNcIiBjbGFzcz1cInBlcnNpc3RlbnQtc2VhcmNoXCI+XFxuJyArXG4gICAgJyAgPGxhYmVsIGZvcj1cInNlYXJjaFwiPjxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5zZWFyY2g8L2k+PC9sYWJlbD5cXG4nICtcbiAgICAnICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInNlYXJjaFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCIgbmctbW9kZWw9XCJzZWFyY2hWYWx1ZVwiIG5nLWNoYW5nZT1cImN0cmwuYXBwbHlGaWx0ZXIoc2VhcmNoVmFsdWUpXCI+XFxuJyArXG4gICAgJzwvZm9ybT5cXG4nICtcbiAgICAnXFxuJyArXG4gICAgJzxtZC1saXN0PlxcbicgK1xuICAgICcgIDxtZC1saXN0LWl0ZW0gY2xhc3M9XCJtZC0yLWxpbmVcIiBuZy1jbGljaz1cImN0cmwuc2VsZWN0R3JvdXAoJGV2ZW50LCBncm91cClcIiBuZy1yZXBlYXQ9XCJncm91cCBpbiBjdHJsLmdyb3Vwc1wiIG5nLWNsYXNzPVwie2FjdGl2ZTogY3RybC5zZWxlY3RlZC5pZCA9PT0gZ3JvdXAuaWR9XCI+XFxuJyArXG4gICAgJyAgICA8ZGl2IGNsYXNzPVwibWQtbGlzdC1pdGVtLXRleHRcIj5cXG4nICtcbiAgICAnICAgICAgPGgzPnt7Z3JvdXAubmFtZX19PC9oMz5cXG4nICtcbiAgICAnICAgIDwvZGl2PlxcbicgK1xuICAgICcgICAgPG1kLWRpdmlkZXI+PC9tZC1kaXZpZGVyPlxcbicgK1xuICAgICcgIDwvbWQtbGlzdC1pdGVtPlxcbicgK1xuICAgICc8L21kLWxpc3Q+XFxuJyArXG4gICAgJycpO1xufV0pO1xuIiwidmFyIG5nTW9kdWxlO1xudHJ5IHtcbiAgbmdNb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgnd2ZtLnVzZXIuZGlyZWN0aXZlcycpO1xufSBjYXRjaCAoZSkge1xuICBuZ01vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCd3Zm0udXNlci5kaXJlY3RpdmVzJywgW10pO1xufVxuXG5uZ01vZHVsZS5ydW4oWyckdGVtcGxhdGVDYWNoZScsIGZ1bmN0aW9uICgkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoJ3dmbS10ZW1wbGF0ZS9ncm91cC50cGwuaHRtbCcsXG4gICAgJzwhLS1cXG4nICtcbiAgICAnIENPTkZJREVOVElBTFxcbicgK1xuICAgICcgQ29weXJpZ2h0IDIwMTYgUmVkIEhhdCwgSW5jLiBhbmQvb3IgaXRzIGFmZmlsaWF0ZXMuXFxuJyArXG4gICAgJyBUaGlzIGlzIHVucHVibGlzaGVkIHByb3ByaWV0YXJ5IHNvdXJjZSBjb2RlIG9mIFJlZCBIYXQuXFxuJyArXG4gICAgJy0tPlxcbicgK1xuICAgICc8bWQtbGlzdD5cXG4nICtcbiAgICAnICA8bWQtbGlzdC1pdGVtIGNsYXNzPVwibWQtMi1saW5lXCIgPlxcbicgK1xuICAgICcgICAgPG1kLWljb24gbWQtZm9udC1zZXQ9XCJtYXRlcmlhbC1pY29uc1wiPmdyb3VwPC9tZC1pY29uPlxcbicgK1xuICAgICcgICAgPGRpdiBjbGFzcz1cIm1kLWxpc3QtaXRlbS10ZXh0XCI+XFxuJyArXG4gICAgJyAgICAgIDxoMz57e2N0cmwuZ3JvdXAuaWR9fTwvaDM+XFxuJyArXG4gICAgJyAgICAgIDxwPkdyb3VwIGlkPC9wPlxcbicgK1xuICAgICcgICAgPC9kaXY+XFxuJyArXG4gICAgJyAgICA8bWQtZGl2aWRlcj48L21kLWRpdmlkZXI+XFxuJyArXG4gICAgJyAgPC9tZC1saXN0LWl0ZW0+XFxuJyArXG4gICAgJ1xcbicgK1xuICAgICcgIDxtZC1saXN0LWl0ZW0gY2xhc3M9XCJtZC0yLWxpbmVcIiA+XFxuJyArXG4gICAgJyAgICA8bWQtaWNvbiBtZC1mb250LXNldD1cIm1hdGVyaWFsLWljb25zXCI+Z3JvdXA8L21kLWljb24+XFxuJyArXG4gICAgJyAgICA8ZGl2IGNsYXNzPVwibWQtbGlzdC1pdGVtLXRleHRcIj5cXG4nICtcbiAgICAnICAgICAgPGgzPnt7Y3RybC5ncm91cC5uYW1lfX08L2gzPlxcbicgK1xuICAgICcgICAgICA8cD5Hcm91cCBuYW1lPC9wPlxcbicgK1xuICAgICcgICAgPC9kaXY+XFxuJyArXG4gICAgJyAgICA8bWQtZGl2aWRlcj48L21kLWRpdmlkZXI+XFxuJyArXG4gICAgJyAgPC9tZC1saXN0LWl0ZW0+XFxuJyArXG4gICAgJ1xcbicgK1xuICAgICcgIDxtZC1saXN0LWl0ZW0gY2xhc3M9XCJtZC0yLWxpbmVcIiA+XFxuJyArXG4gICAgJyAgICA8bWQtaWNvbiBtZC1mb250LXNldD1cIm1hdGVyaWFsLWljb25zXCI+Z3JvdXA8L21kLWljb24+XFxuJyArXG4gICAgJyAgICA8ZGl2IGNsYXNzPVwibWQtbGlzdC1pdGVtLXRleHRcIj5cXG4nICtcbiAgICAnICAgICAgPGgzPnt7Y3RybC5ncm91cC5yb2xlfX08L2gzPlxcbicgK1xuICAgICcgICAgICA8cD5Sb2xlPC9wPlxcbicgK1xuICAgICcgICAgPC9kaXY+XFxuJyArXG4gICAgJyAgICA8bWQtZGl2aWRlcj48L21kLWRpdmlkZXI+XFxuJyArXG4gICAgJyAgPC9tZC1saXN0LWl0ZW0+XFxuJyArXG4gICAgJzwvbWQtbGlzdD5cXG4nICtcbiAgICAnXFxuJyArXG4gICAgJzxtZC10b29sYmFyIGNsYXNzPVwiY29udGVudC10b29sYmFyXCI+XFxuJyArXG4gICAgJyAgPGRpdiBjbGFzcz1cIm1kLXRvb2xiYXItdG9vbHNcIj5cXG4nICtcbiAgICAnICAgIDxoMz5cXG4nICtcbiAgICAnICAgICAgTWVtYmVyc1xcbicgK1xuICAgICcgICAgPC9oMz5cXG4nICtcbiAgICAnICA8L2Rpdj5cXG4nICtcbiAgICAnPC9tZC10b29sYmFyPlxcbicgK1xuICAgICc8bWQtbGlzdD5cXG4nICtcbiAgICAnICA8bWQtbGlzdC1pdGVtIGNsYXNzPVwibWQtMi1saW5lXCIgbmctY2xpY2s9XCJjdHJsLnNlbGVjdE1lbWJlcigkZXZlbnQsIG1lbWJlcilcIiBuZy1yZXBlYXQ9XCJtZW1iZXIgaW4gY3RybC5tZW1iZXJzXCI+XFxuJyArXG4gICAgJyAgICA8aW1nIGFsdD1cInVzZXIubmFtZVwiIG5nLXNyYz1cInt7bWVtYmVyLmF2YXRhcn19XCIgY2xhc3M9XCJtZC1hdmF0YXJcIiAvPlxcbicgK1xuICAgICcgICAgPGRpdiBjbGFzcz1cIm1kLWxpc3QtaXRlbS10ZXh0XCI+XFxuJyArXG4gICAgJyAgICAgIDxoMz57e21lbWJlci5uYW1lfX08L2gzPlxcbicgK1xuICAgICcgICAgICA8cD57e21lbWJlci5wb3NpdGlvbn19PC9wPlxcbicgK1xuICAgICcgICAgPC9kaXY+XFxuJyArXG4gICAgJyAgICA8bWQtZGl2aWRlcj48L21kLWRpdmlkZXI+XFxuJyArXG4gICAgJyAgPC9tZC1saXN0LWl0ZW0+XFxuJyArXG4gICAgJzwvbWQtbGlzdD5cXG4nICtcbiAgICAnJyk7XG59XSk7XG4iLCJyZXF1aXJlKCcuL2dyb3VwLWZvcm0udHBsLmh0bWwuanMnKTtcbnJlcXVpcmUoJy4vZ3JvdXAtbGlzdC50cGwuaHRtbC5qcycpO1xucmVxdWlyZSgnLi9ncm91cC50cGwuaHRtbC5qcycpO1xucmVxdWlyZSgnLi93b3JrZXItZm9ybS50cGwuaHRtbC5qcycpO1xucmVxdWlyZSgnLi93b3JrZXItbGlzdC50cGwuaHRtbC5qcycpO1xucmVxdWlyZSgnLi93b3JrZXIudHBsLmh0bWwuanMnKTtcbiIsInZhciBuZ01vZHVsZTtcbnRyeSB7XG4gIG5nTW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ3dmbS51c2VyLmRpcmVjdGl2ZXMnKTtcbn0gY2F0Y2ggKGUpIHtcbiAgbmdNb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgnd2ZtLnVzZXIuZGlyZWN0aXZlcycsIFtdKTtcbn1cblxubmdNb2R1bGUucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbiAoJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KCd3Zm0tdGVtcGxhdGUvd29ya2VyLWZvcm0udHBsLmh0bWwnLFxuICAgICc8IS0tXFxuJyArXG4gICAgJyBDT05GSURFTlRJQUxcXG4nICtcbiAgICAnIENvcHlyaWdodCAyMDE2IFJlZCBIYXQsIEluYy4gYW5kL29yIGl0cyBhZmZpbGlhdGVzLlxcbicgK1xuICAgICcgVGhpcyBpcyB1bnB1Ymxpc2hlZCBwcm9wcmlldGFyeSBzb3VyY2UgY29kZSBvZiBSZWQgSGF0LlxcbicgK1xuICAgICctLT5cXG4nICtcbiAgICAnPG1kLXRvb2xiYXIgY2xhc3M9XCJjb250ZW50LXRvb2xiYXJcIj5cXG4nICtcbiAgICAnICA8ZGl2IGNsYXNzPVwibWQtdG9vbGJhci10b29sc1wiPlxcbicgK1xuICAgICcgICAgPGgzPlxcbicgK1xuICAgICcgICAgICBXb3JrZXIgSUQge3tjdHJsLm1vZGVsLmlkfX1cXG4nICtcbiAgICAnICAgIDwvaDM+XFxuJyArXG4gICAgJ1xcbicgK1xuICAgICcgICAgPHNwYW4gZmxleD48L3NwYW4+XFxuJyArXG4gICAgJyAgICA8bWQtYnV0dG9uIGNsYXNzPVwibWQtaWNvbi1idXR0b25cIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIiBuZy1jbGljaz1cImN0cmwuc2VsZWN0V29ya2VyKCRldmVudCwgY3RybC5tb2RlbClcIj5cXG4nICtcbiAgICAnICAgICAgPG1kLWljb24gbWQtZm9udC1zZXQ9XCJtYXRlcmlhbC1pY29uc1wiPmNsb3NlPC9tZC1pY29uPlxcbicgK1xuICAgICcgICAgPC9tZC1idXR0b24+XFxuJyArXG4gICAgJyAgPC9kaXY+XFxuJyArXG4gICAgJzwvbWQtdG9vbGJhcj5cXG4nICtcbiAgICAnPG1kLWJ1dHRvbiBjbGFzcz1cIm1kLWZhYlwiIGFyaWEtbGFiZWw9XCJOZXcgV29ya29yZGVyXCIgdWktc3JlZj1cImFwcC53b3JrZXIubmV3XCI+XFxuJyArXG4gICAgJyAgPG1kLWljb24gbWQtZm9udC1zZXQ9XCJtYXRlcmlhbC1pY29uc1wiPmFkZDwvbWQtaWNvbj5cXG4nICtcbiAgICAnPC9tZC1idXR0b24+XFxuJyArXG4gICAgJ1xcbicgK1xuICAgICc8ZGl2IGNsYXNzPVwid2ZtLW1haW5jb2wtc2Nyb2xsXCI+XFxuJyArXG4gICAgJ1xcbicgK1xuICAgICc8Zm9ybSBuYW1lPVwid29ya2VyRm9ybVwiIG5nLXN1Ym1pdD1cImN0cmwuZG9uZSh3b3JrZXJGb3JtLiR2YWxpZClcIiBub3ZhbGlkYXRlIGxheW91dC1wYWRkaW5nIGxheW91dC1tYXJnaW4+XFxuJyArXG4gICAgJ1xcbicgK1xuICAgICcgIDxtZC1pbnB1dC1jb250YWluZXIgY2xhc3M9XCJtZC1ibG9ja1wiPlxcbicgK1xuICAgICcgICAgPGxhYmVsIGZvcj1cIndvcmtlcm5hbWVcIj5Xb3JrZXIgTmFtZTwvbGFiZWw+XFxuJyArXG4gICAgJyAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIndvcmtlcm5hbWVcIiBuYW1lPVwid29ya2VybmFtZVwiIG5nLW1vZGVsPVwiY3RybC5tb2RlbC5uYW1lXCIgcmVxdWlyZWQ+XFxuJyArXG4gICAgJyAgICA8ZGl2IG5nLW1lc3NhZ2VzPVwid29ya2VyRm9ybS53b3JrZXJuYW1lLiRlcnJvclwiIG5nLWlmPVwiY3RybC5zdWJtaXR0ZWQgfHwgd29ya2VyRm9ybS53b3JrZXJuYW1lLiRkaXJ0eVwiPlxcbicgK1xuICAgICcgICAgICA8ZGl2IG5nLW1lc3NhZ2U9XCJyZXF1aXJlZFwiPkEgbmFtZSBpcyByZXF1aXJlZC48L2Rpdj5cXG4nICtcbiAgICAnICAgIDwvZGl2PlxcbicgK1xuICAgICcgIDwvbWQtaW5wdXQtY29udGFpbmVyPlxcbicgK1xuICAgICdcXG4nICtcbiAgICAnICA8bWQtaW5wdXQtY29udGFpbmVyIGNsYXNzPVwibWQtYmxvY2tcIj5cXG4nICtcbiAgICAnICAgIDxsYWJlbCBmb3I9XCJ3b3JrZXJuYW1lXCI+VXNlcm5hbWU8L2xhYmVsPlxcbicgK1xuICAgICcgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ1c2VybmFtZVwiIG5hbWU9XCJ1c2VybmFtZVwiIG5nLW1vZGVsPVwiY3RybC5tb2RlbC51c2VybmFtZVwiIHJlcXVpcmVkPlxcbicgK1xuICAgICcgICAgPGRpdiBuZy1tZXNzYWdlcz1cIndvcmtlckZvcm0udXNlcm5hbWUuJGVycm9yXCIgbmctaWY9XCJjdHJsLnN1Ym1pdHRlZCB8fCB3b3JrZXJGb3JtLnVzZXJuYW1lLiRkaXJ0eVwiPlxcbicgK1xuICAgICcgICAgICA8ZGl2IG5nLW1lc3NhZ2U9XCJyZXF1aXJlZFwiPkEgdXNlcm5hbWUgaXMgcmVxdWlyZWQuPC9kaXY+XFxuJyArXG4gICAgJyAgICA8L2Rpdj5cXG4nICtcbiAgICAnICA8L21kLWlucHV0LWNvbnRhaW5lcj5cXG4nICtcbiAgICAnXFxuJyArXG4gICAgJyAgPG1kLWlucHV0LWNvbnRhaW5lciBjbGFzcz1cIm1kLWJsb2NrXCI+XFxuJyArXG4gICAgJyAgICA8bGFiZWwgZm9yPVwid29ya2VybmFtZVwiPkJhbm5lcjwvbGFiZWw+XFxuJyArXG4gICAgJyAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImJhbm5lclwiIG5hbWU9XCJiYW5uZXJcIiBuZy1tb2RlbD1cImN0cmwubW9kZWwuYmFubmVyXCI+XFxuJyArXG4gICAgJyAgICA8ZGl2IG5nLW1lc3NhZ2VzPVwid29ya2VyRm9ybS5iYW5uZXIuJGVycm9yXCIgbmctaWY9XCJjdHJsLnN1Ym1pdHRlZCB8fCB3b3JrZXJGb3JtLmJhbm5lci4kZGlydHlcIj48L2Rpdj5cXG4nICtcbiAgICAnICA8L21kLWlucHV0LWNvbnRhaW5lcj5cXG4nICtcbiAgICAnXFxuJyArXG4gICAgJyAgPG1kLWlucHV0LWNvbnRhaW5lciBjbGFzcz1cIm1kLWJsb2NrXCI+XFxuJyArXG4gICAgJyAgICA8bGFiZWwgZm9yPVwid29ya2VybmFtZVwiPkF2YXRhcjwvbGFiZWw+XFxuJyArXG4gICAgJyAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImF2YXRhclwiIG5hbWU9XCJhdmF0YXJcIiBuZy1tb2RlbD1cImN0cmwubW9kZWwuYXZhdGFyXCI+XFxuJyArXG4gICAgJyAgICA8ZGl2IG5nLW1lc3NhZ2VzPVwid29ya2VyRm9ybS5hdmF0YXIuJGVycm9yXCIgbmctaWY9XCJjdHJsLnN1Ym1pdHRlZCB8fCB3b3JrZXJGb3JtLmF2YXRhci4kZGlydHlcIj48L2Rpdj5cXG4nICtcbiAgICAnICA8L21kLWlucHV0LWNvbnRhaW5lcj5cXG4nICtcbiAgICAnXFxuJyArXG4gICAgJyAgPG1kLWlucHV0LWNvbnRhaW5lciBjbGFzcz1cIm1kLWJsb2NrXCI+XFxuJyArXG4gICAgJyAgICA8bGFiZWwgZm9yPVwid29ya2VybmFtZVwiPlBob25lIG51bWJlcjwvbGFiZWw+XFxuJyArXG4gICAgJyAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInBob25lbnVtYmVyXCIgbmFtZT1cInBob25lbnVtYmVyXCIgbmctbW9kZWw9XCJjdHJsLm1vZGVsLnBob25lXCIgcmVxdWlyZWQ+XFxuJyArXG4gICAgJyAgICA8ZGl2IG5nLW1lc3NhZ2VzPVwid29ya2VyRm9ybS5waG9uZW51bWJlci4kZXJyb3JcIiBuZy1pZj1cImN0cmwuc3VibWl0dGVkIHx8IHdvcmtlckZvcm0ucGhvbmVudW1iZXIuJGRpcnR5XCI+XFxuJyArXG4gICAgJyAgICAgIDxkaXYgbmctbWVzc2FnZT1cInJlcXVpcmVkXCI+QSBwaG9uZSBudW1iZXIgaXMgcmVxdWlyZWQuPC9kaXY+XFxuJyArXG4gICAgJyAgICA8L2Rpdj5cXG4nICtcbiAgICAnICA8L21kLWlucHV0LWNvbnRhaW5lcj5cXG4nICtcbiAgICAnXFxuJyArXG4gICAgJyAgPG1kLWlucHV0LWNvbnRhaW5lciBjbGFzcz1cIm1kLWJsb2NrXCI+XFxuJyArXG4gICAgJyAgICA8bGFiZWwgZm9yPVwid29ya2VybmFtZVwiPkVtYWlsPC9sYWJlbD5cXG4nICtcbiAgICAnICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiBuZy1tb2RlbD1cImN0cmwubW9kZWwuZW1haWxcIiByZXF1aXJlZD5cXG4nICtcbiAgICAnICAgIDxkaXYgbmctbWVzc2FnZXM9XCJ3b3JrZXJGb3JtLmVtYWlsLiRlcnJvclwiIG5nLWlmPVwiY3RybC5zdWJtaXR0ZWQgfHwgd29ya2VyRm9ybS5lbWFpbC4kZGlydHlcIj5cXG4nICtcbiAgICAnICAgICAgPGRpdiBuZy1tZXNzYWdlPVwicmVxdWlyZWRcIj5BbiBlbWFpbCBpcyByZXF1aXJlZC48L2Rpdj5cXG4nICtcbiAgICAnICAgIDwvZGl2PlxcbicgK1xuICAgICcgIDwvbWQtaW5wdXQtY29udGFpbmVyPlxcbicgK1xuICAgICdcXG4nICtcbiAgICAnICA8bWQtaW5wdXQtY29udGFpbmVyIGNsYXNzPVwibWQtYmxvY2tcIj5cXG4nICtcbiAgICAnICAgIDxsYWJlbCBmb3I9XCJ3b3JrZXJuYW1lXCI+UG9zaXRpb248L2xhYmVsPlxcbicgK1xuICAgICcgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJwb3NpdGlvblwiIG5hbWU9XCJwb3NpdGlvblwiIG5nLW1vZGVsPVwiY3RybC5tb2RlbC5wb3NpdGlvblwiIHJlcXVpcmVkPlxcbicgK1xuICAgICcgICAgPGRpdiBuZy1tZXNzYWdlcz1cIndvcmtlckZvcm0ucG9zaXRpb24uJGVycm9yXCIgbmctaWY9XCJjdHJsLnN1Ym1pdHRlZCB8fCB3b3JrZXJGb3JtLnBvc2l0aW9uLiRkaXJ0eVwiPlxcbicgK1xuICAgICcgICAgICA8ZGl2IG5nLW1lc3NhZ2U9XCJyZXF1aXJlZFwiPkFuIHBvc2l0aW9uIGlzIHJlcXVpcmVkLjwvZGl2PlxcbicgK1xuICAgICcgICAgPC9kaXY+XFxuJyArXG4gICAgJyAgPC9tZC1pbnB1dC1jb250YWluZXI+XFxuJyArXG4gICAgJ1xcbicgK1xuICAgICcgIDxtZC1pbnB1dC1jb250YWluZXIgY2xhc3M9XCJtZC1ibG9ja1wiPlxcbicgK1xuICAgICcgICAgPGxhYmVsIGZvcj1cImFzc2lnbmVlXCI+R3JvdXA8L2xhYmVsPlxcbicgK1xuICAgICcgICAgPG1kLXNlbGVjdCBuZy1tb2RlbD1cImN0cmwubW9kZWwuZ3JvdXBcIiBuYW1lPVwiZ3JvdXBcIiBpZD1cImdyb3VwXCI+XFxuJyArXG4gICAgJyAgICAgICA8bWQtb3B0aW9uIG5nLXJlcGVhdD1cImdyb3VwIGluIGN0cmwuZ3JvdXBzXCIgdmFsdWU9XCJ7e2dyb3VwLmlkfX1cIj57e2dyb3VwLm5hbWV9fTwvbWQtb3B0aW9uPlxcbicgK1xuICAgICcgICAgIDwvbWQtc2VsZWN0PlxcbicgK1xuICAgICcgIDwvbWQtaW5wdXQtY29udGFpbmVyPiBcXG4nICtcbiAgICAnXFxuJyArXG4gICAgJyAgPG1kLWJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJtZC1yYWlzZWQgbWQtcHJpbWFyeVwiPnt7Y3RybC5tb2RlbC5pZCB8fCBjdHJsLm1vZGVsLmlkID09PSAwID8gXFwnVXBkYXRlXFwnIDogXFwnQ3JlYXRlXFwnfX0gV29ya2VyPC9tZC1idXR0b24+XFxuJyArXG4gICAgJzwvZm9ybT5cXG4nICtcbiAgICAnPC9kaXY+XFxuJyArXG4gICAgJycpO1xufV0pO1xuIiwidmFyIG5nTW9kdWxlO1xudHJ5IHtcbiAgbmdNb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgnd2ZtLnVzZXIuZGlyZWN0aXZlcycpO1xufSBjYXRjaCAoZSkge1xuICBuZ01vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCd3Zm0udXNlci5kaXJlY3RpdmVzJywgW10pO1xufVxuXG5uZ01vZHVsZS5ydW4oWyckdGVtcGxhdGVDYWNoZScsIGZ1bmN0aW9uICgkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoJ3dmbS10ZW1wbGF0ZS93b3JrZXItbGlzdC50cGwuaHRtbCcsXG4gICAgJzwhLS1cXG4nICtcbiAgICAnIENPTkZJREVOVElBTFxcbicgK1xuICAgICcgQ29weXJpZ2h0IDIwMTYgUmVkIEhhdCwgSW5jLiBhbmQvb3IgaXRzIGFmZmlsaWF0ZXMuXFxuJyArXG4gICAgJyBUaGlzIGlzIHVucHVibGlzaGVkIHByb3ByaWV0YXJ5IHNvdXJjZSBjb2RlIG9mIFJlZCBIYXQuXFxuJyArXG4gICAgJy0tPlxcbicgK1xuICAgICc8bWQtdG9vbGJhcj5cXG4nICtcbiAgICAnICA8ZGl2IGNsYXNzPVwibWQtdG9vbGJhci10b29sc1wiPlxcbicgK1xuICAgICcgICAgPGgzPlxcbicgK1xuICAgICcgICAgICA8c3Bhbj5Xb3JrZXJzPC9zcGFuPlxcbicgK1xuICAgICcgICAgPC9oMz5cXG4nICtcbiAgICAnICA8L2Rpdj5cXG4nICtcbiAgICAnPC9tZC10b29sYmFyPlxcbicgK1xuICAgICdcXG4nICtcbiAgICAnPGZvcm0gYWN0aW9uPVwiI1wiIGNsYXNzPVwicGVyc2lzdGVudC1zZWFyY2hcIj5cXG4nICtcbiAgICAnICA8bGFiZWwgZm9yPVwic2VhcmNoXCI+PGkgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPnNlYXJjaDwvaT48L2xhYmVsPlxcbicgK1xuICAgICcgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJzZWFyY2hcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiIG5nLW1vZGVsPVwic2VhcmNoVmFsdWVcIiBuZy1jaGFuZ2U9XCJjdHJsLmFwcGx5RmlsdGVyKHNlYXJjaFZhbHVlKVwiPlxcbicgK1xuICAgICc8L2Zvcm0+XFxuJyArXG4gICAgJ1xcbicgK1xuICAgICc8bWQtbGlzdD5cXG4nICtcbiAgICAnICA8bWQtbGlzdC1pdGVtIGNsYXNzPVwibWQtMi1saW5lXCIgbmctY2xpY2s9XCJjdHJsLnNlbGVjdFdvcmtlcigkZXZlbnQsIHVzZXIpXCIgIG5nLXJlcGVhdD1cInVzZXIgaW4gY3RybC53b3JrZXJzXCIgbmctY2xhc3M9XCJ7YWN0aXZlOiBjdHJsLnNlbGVjdGVkLmlkID09PSB1c2VyLmlkfVwiPlxcbicgK1xuICAgICcgICAgPGltZyBhbHQ9XCJ1c2VyLm5hbWVcIiBuZy1zcmM9XCJ7e3VzZXIuYXZhdGFyfX1cIiBjbGFzcz1cIm1kLWF2YXRhclwiIC8+XFxuJyArXG4gICAgJyAgICA8ZGl2IGNsYXNzPVwibWQtbGlzdC1pdGVtLXRleHRcIj5cXG4nICtcbiAgICAnICAgICAgPGgzPnt7dXNlci5uYW1lfX08L2gzPlxcbicgK1xuICAgICcgICAgICA8cD57e3VzZXIucG9zaXRpb259fTwvcD5cXG4nICtcbiAgICAnICAgIDwvZGl2PlxcbicgK1xuICAgICcgICAgPG1kLWRpdmlkZXI+PC9tZC1kaXZpZGVyPlxcbicgK1xuICAgICcgIDwvbWQtbGlzdC1pdGVtPlxcbicgK1xuICAgICc8L21kLWxpc3Q+XFxuJyArXG4gICAgJycpO1xufV0pO1xuIiwidmFyIG5nTW9kdWxlO1xudHJ5IHtcbiAgbmdNb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgnd2ZtLnVzZXIuZGlyZWN0aXZlcycpO1xufSBjYXRjaCAoZSkge1xuICBuZ01vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCd3Zm0udXNlci5kaXJlY3RpdmVzJywgW10pO1xufVxuXG5uZ01vZHVsZS5ydW4oWyckdGVtcGxhdGVDYWNoZScsIGZ1bmN0aW9uICgkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoJ3dmbS10ZW1wbGF0ZS93b3JrZXIudHBsLmh0bWwnLFxuICAgICc8IS0tXFxuJyArXG4gICAgJyBDT05GSURFTlRJQUxcXG4nICtcbiAgICAnIENvcHlyaWdodCAyMDE2IFJlZCBIYXQsIEluYy4gYW5kL29yIGl0cyBhZmZpbGlhdGVzLlxcbicgK1xuICAgICcgVGhpcyBpcyB1bnB1Ymxpc2hlZCBwcm9wcmlldGFyeSBzb3VyY2UgY29kZSBvZiBSZWQgSGF0LlxcbicgK1xuICAgICctLT5cXG4nICtcbiAgICAnPG1kLWNvbnRlbnQgY2xhc3M9XCJ3Zm0tbWFpbmNvbC1zY3JvbGwgd2ZtLW1haW5jb2wtc2Nyb2xsX3dpdGgtbWVudVwiPlxcbicgK1xuICAgICcgIDxkaXYgY2xhc3M9XCJ1c2VyLWluZm8taGVhZGVyXCIgbmctc3R5bGU9XCJjdHJsLnN0eWxlXCI+XFxuJyArXG4gICAgJyAgICA8aDEgY2xhc3M9XCJtZC1kaXNwbGF5LTFcIj57e2N0cmwud29ya2VyLm5hbWV9fTwvaDE+XFxuJyArXG4gICAgJyAgPC9kaXY+XFxuJyArXG4gICAgJyAgPG1kLWxpc3Q+XFxuJyArXG4gICAgJyAgICA8bWQtbGlzdC1pdGVtIGNsYXNzPVwibWQtMi1saW5lXCIgPlxcbicgK1xuICAgICcgICAgICA8bWQtaWNvbiBtZC1mb250LXNldD1cIm1hdGVyaWFsLWljb25zXCI+cGVyc29uPC9tZC1pY29uPlxcbicgK1xuICAgICcgICAgICA8ZGl2IGNsYXNzPVwibWQtbGlzdC1pdGVtLXRleHRcIj5cXG4nICtcbiAgICAnICAgICAgICA8aDM+e3tjdHJsLndvcmtlci51c2VybmFtZX19PC9oMz5cXG4nICtcbiAgICAnICAgICAgICA8cD5Vc2VybmFtZTwvcD5cXG4nICtcbiAgICAnICAgICAgPC9kaXY+XFxuJyArXG4gICAgJyAgICAgIDxtZC1kaXZpZGVyPjwvbWQtZGl2aWRlcj5cXG4nICtcbiAgICAnICAgIDwvbWQtbGlzdC1pdGVtPlxcbicgK1xuICAgICdcXG4nICtcbiAgICAnICAgIDxtZC1saXN0LWl0ZW0gY2xhc3M9XCJtZC0yLWxpbmVcIiA+XFxuJyArXG4gICAgJyAgICAgIDxtZC1pY29uIG1kLWZvbnQtc2V0PVwibWF0ZXJpYWwtaWNvbnNcIj5waG9uZTwvbWQtaWNvbj5cXG4nICtcbiAgICAnICAgICAgPGRpdiBjbGFzcz1cIm1kLWxpc3QtaXRlbS10ZXh0XCI+XFxuJyArXG4gICAgJyAgICAgICAgPGgzPnt7Y3RybC53b3JrZXIucGhvbmV9fTwvaDM+XFxuJyArXG4gICAgJyAgICAgICAgPHA+UGhvbmUgTnVtYmVyPC9wPlxcbicgK1xuICAgICcgICAgICA8L2Rpdj5cXG4nICtcbiAgICAnICAgICAgPG1kLWRpdmlkZXI+PC9tZC1kaXZpZGVyPlxcbicgK1xuICAgICcgICAgPC9tZC1saXN0LWl0ZW0+XFxuJyArXG4gICAgJ1xcbicgK1xuICAgICcgICAgPG1kLWxpc3QtaXRlbSBjbGFzcz1cIm1kLTItbGluZVwiID5cXG4nICtcbiAgICAnICAgICAgPG1kLWljb24gbWQtZm9udC1zZXQ9XCJtYXRlcmlhbC1pY29uc1wiPmVtYWlsPC9tZC1pY29uPlxcbicgK1xuICAgICcgICAgICA8ZGl2IGNsYXNzPVwibWQtbGlzdC1pdGVtLXRleHRcIj5cXG4nICtcbiAgICAnICAgICAgICA8aDM+e3tjdHJsLndvcmtlci5lbWFpbH19PC9oMz5cXG4nICtcbiAgICAnICAgICAgICA8cD5FbWFpbDwvcD5cXG4nICtcbiAgICAnICAgICAgPC9kaXY+XFxuJyArXG4gICAgJyAgICAgIDxtZC1kaXZpZGVyPjwvbWQtZGl2aWRlcj5cXG4nICtcbiAgICAnICAgIDwvbWQtbGlzdC1pdGVtPlxcbicgK1xuICAgICdcXG4nICtcbiAgICAnICAgIDxtZC1saXN0LWl0ZW0gY2xhc3M9XCJtZC0yLWxpbmVcIiA+XFxuJyArXG4gICAgJyAgICAgIDxtZC1pY29uIG1kLWZvbnQtc2V0PVwibWF0ZXJpYWwtaWNvbnNcIj5wb3J0cmFpdDwvbWQtaWNvbj5cXG4nICtcbiAgICAnICAgICAgPGRpdiBjbGFzcz1cIm1kLWxpc3QtaXRlbS10ZXh0XCI+XFxuJyArXG4gICAgJyAgICAgICAgPGgzPnt7Y3RybC53b3JrZXIucG9zaXRpb259fTwvaDM+XFxuJyArXG4gICAgJyAgICAgICAgPHA+UG9zaXRpb248L3A+XFxuJyArXG4gICAgJyAgICAgIDwvZGl2PlxcbicgK1xuICAgICcgICAgICA8bWQtZGl2aWRlcj48L21kLWRpdmlkZXI+XFxuJyArXG4gICAgJyAgICA8L21kLWxpc3QtaXRlbT5cXG4nICtcbiAgICAnXFxuJyArXG4gICAgJyAgICA8bWQtbGlzdC1pdGVtIGNsYXNzPVwibWQtMi1saW5lXCIgPlxcbicgK1xuICAgICcgICAgICA8bWQtaWNvbiBtZC1mb250LXNldD1cIm1hdGVyaWFsLWljb25zXCI+Z3JvdXA8L21kLWljb24+XFxuJyArXG4gICAgJyAgICAgIDxkaXYgY2xhc3M9XCJtZC1saXN0LWl0ZW0tdGV4dFwiPlxcbicgK1xuICAgICcgICAgICAgIDxoMz57e2N0cmwuZ3JvdXAubmFtZX19PC9oMz5cXG4nICtcbiAgICAnICAgICAgICA8cD5Hcm91cDwvcD5cXG4nICtcbiAgICAnICAgICAgPC9kaXY+XFxuJyArXG4gICAgJyAgICAgIDxtZC1kaXZpZGVyPjwvbWQtZGl2aWRlcj5cXG4nICtcbiAgICAnICAgIDwvbWQtbGlzdC1pdGVtPlxcbicgK1xuICAgICdcXG4nICtcbiAgICAnICAgIDxtZC1zdWJoZWFkZXIgY2xhc3M9XCJtZC1uby1zdGlja3lcIj5Ob3RlczwvbWQtc3ViaGVhZGVyPlxcbicgK1xuICAgICcgICAgPHAgY2xhc3M9XCJtZC1ib2R5LTFcIiBsYXlvdXQtcGFkZGluZyBsYXlvdXQtbWFyZ2luPnt7Y3RybC53b3JrZXIubm90ZXN9fTwvcD5cXG4nICtcbiAgICAnICA8L21kLWNvbnRlbnQ+XFxuJyArXG4gICAgJycpO1xufV0pO1xuIiwiLyoqXG4qIENPTkZJREVOVElBTFxuKiBDb3B5cmlnaHQgMjAxNiBSZWQgSGF0LCBJbmMuIGFuZC9vciBpdHMgYWZmaWxpYXRlcy5cbiogVGhpcyBpcyB1bnB1Ymxpc2hlZCBwcm9wcmlldGFyeSBzb3VyY2UgY29kZSBvZiBSZWQgSGF0LlxuKiovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBuZ01vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCd3Zm0udXNlci5kaXJlY3RpdmVzJywgWyd3Zm0uY29yZS5tZWRpYXRvciddKTtcbm1vZHVsZS5leHBvcnRzID0gJ3dmbS51c2VyLmRpcmVjdGl2ZXMnO1xuXG5yZXF1aXJlKCcuLi8uLi9kaXN0Jyk7XG5cbm5nTW9kdWxlLmRpcmVjdGl2ZSgnd29ya2VyTGlzdCcsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlLCBtZWRpYXRvcikge1xuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnRSdcbiAgLCB0ZW1wbGF0ZTogJHRlbXBsYXRlQ2FjaGUuZ2V0KCd3Zm0tdGVtcGxhdGUvd29ya2VyLWxpc3QudHBsLmh0bWwnKVxuICAsIHNjb3BlOiB7XG4gICAgICB3b3JrZXJzIDogJz0nLFxuICAgICAgc2VsZWN0ZWRNb2RlbDogJz0nXG4gICAgfVxuICAsIGNvbnRyb2xsZXI6IGZ1bmN0aW9uKCRzY29wZSkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgc2VsZi53b3JrZXJzID0gJHNjb3BlLndvcmtlcnM7XG4gICAgICBzZWxmLnNlbGVjdGVkID0gJHNjb3BlLnNlbGVjdGVkTW9kZWw7XG4gICAgICBzZWxmLnNlbGVjdFdvcmtlciA9IGZ1bmN0aW9uKGV2ZW50LCB3b3JrZXIpIHtcbiAgICAgICAgbWVkaWF0b3IucHVibGlzaCgnd2ZtOndvcmtlcjpzZWxlY3RlZCcsIHdvcmtlcik7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgfVxuICAgICAgc2VsZi5pc1dvcmtlclNob3duID0gZnVuY3Rpb24od29ya2VyKSB7XG4gICAgICAgIHJldHVybiBzZWxmLnNob3duV29ya2VyID09PSB3b3JrZXI7XG4gICAgICB9O1xuXG4gICAgICBzZWxmLmFwcGx5RmlsdGVyID0gZnVuY3Rpb24odGVybSkge1xuICAgICAgICB0ZXJtID0gdGVybS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBzZWxmLndvcmtlcnMgPSAkc2NvcGUud29ya2Vycy5maWx0ZXIoZnVuY3Rpb24od29ya2VyKSB7XG4gICAgICAgICAgcmV0dXJuIFN0cmluZyh3b3JrZXIuaWQpLmluZGV4T2YodGVybSkgIT09IC0xXG4gICAgICAgICAgICB8fCBTdHJpbmcod29ya2VyLm5hbWUpLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih0ZXJtKSAhPT0gLTE7XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICB9XG4gICwgY29udHJvbGxlckFzOiAnY3RybCdcbiAgfTtcbn0pXG4uZGlyZWN0aXZlKCd3b3JrZXInLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSwgbWVkaWF0b3IpIHtcbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0UnXG4gICwgdGVtcGxhdGU6ICR0ZW1wbGF0ZUNhY2hlLmdldCgnd2ZtLXRlbXBsYXRlL3dvcmtlci50cGwuaHRtbCcpXG4gICwgc2NvcGU6IHtcbiAgICAgIHdvcmtlciA6ICc9JyxcbiAgICAgIGdyb3VwIDogJz0nXG4gICAgfVxuICAsIGNvbnRyb2xsZXI6IGZ1bmN0aW9uKCRzY29wZSkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgc2VsZi53b3JrZXIgPSAkc2NvcGUud29ya2VyO1xuICAgICAgc2VsZi5ncm91cCA9ICRzY29wZS5ncm91cDtcbiAgICAgIHZhciBiYW5uZXJVcmwgPSBzZWxmLndvcmtlci5iYW5uZXIgfHwgc2VsZi53b3JrZXIuYXZhdGFyO1xuICAgICAgc2VsZi5zdHlsZSA9IHtcbiAgICAgICAgJ2JhY2tncm91bmQtaW1hZ2UnOiAndXJsKCcgKyBiYW5uZXJVcmwgKyAnKScsXG4gICAgICAgICdiYWNrZ3JvdW5kLXBvc2l0aW9uJzogc2VsZi53b3JrZXIuYmFubmVyID8gJ2NlbnRlciBjZW50ZXInIDogJ3RvcCBjZW50ZXInLFxuICAgICAgICAnYmFja2dyb3VuZC1zaXplJzogc2VsZi53b3JrZXIuYmFubmVyID8gJ2F1dG8nIDogJ2NvbnRhaW4nLFxuICAgICAgICAnYmFja2dyb3VuZC1yZXBlYXQnOiAnbm8tcmVwZWF0J1xuICAgICAgfVxuICAgIH1cbiAgLCBjb250cm9sbGVyQXM6ICdjdHJsJ1xuICB9O1xufSlcbi5kaXJlY3RpdmUoJ3dvcmtlckZvcm0nLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSwgbWVkaWF0b3IpIHtcbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0UnXG4gICwgdGVtcGxhdGU6ICR0ZW1wbGF0ZUNhY2hlLmdldCgnd2ZtLXRlbXBsYXRlL3dvcmtlci1mb3JtLnRwbC5odG1sJylcbiAgLCBzY29wZToge1xuICAgICAgd29ya2VyIDogJz12YWx1ZScsXG4gICAgICBncm91cHMgOiAnPSdcbiAgICB9XG4gICwgY29udHJvbGxlcjogZnVuY3Rpb24oJHNjb3BlKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICBzZWxmLmdyb3VwcyA9ICRzY29wZS5ncm91cHM7XG4gICAgICBzZWxmLm1vZGVsID0gYW5ndWxhci5jb3B5KCRzY29wZS53b3JrZXIpO1xuICAgICAgc2VsZi5zdWJtaXR0ZWQgPSBmYWxzZTtcbiAgICAgIHNlbGYuc2VsZWN0V29ya2VyID0gZnVuY3Rpb24oZXZlbnQsIHdvcmtlcikge1xuICAgICAgICBpZih3b3JrZXIuaWQpIHtcbiAgICAgICAgICBtZWRpYXRvci5wdWJsaXNoKCd3Zm06d29ya2VyOnNlbGVjdGVkJywgd29ya2VyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBtZWRpYXRvci5wdWJsaXNoKCd3Zm06d29ya2VyOmxpc3QnKTtcbiAgICAgICAgfVxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIH1cbiAgICAgIHNlbGYuZG9uZSA9IGZ1bmN0aW9uKGlzVmFsaWQpIHtcbiAgICAgICAgc2VsZi5zdWJtaXR0ZWQgPSB0cnVlO1xuICAgICAgICBpZiAoaXNWYWxpZCkge1xuICAgICAgICAgIGlmICghc2VsZi5tb2RlbC5pZCAmJiBzZWxmLm1vZGVsLmlkICE9PSAwKSB7XG4gICAgICAgICAgICBtZWRpYXRvci5wdWJsaXNoKCd3Zm06d29ya2VyOmNyZWF0ZWQnLCBzZWxmLm1vZGVsKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWVkaWF0b3IucHVibGlzaCgnd2ZtOndvcmtlcjp1cGRhdGVkJywgc2VsZi5tb2RlbCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAsIGNvbnRyb2xsZXJBczogJ2N0cmwnXG4gIH07XG59KVxuLmRpcmVjdGl2ZSgnZ3JvdXBMaXN0JywgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUsIG1lZGlhdG9yKSB7XG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdFJ1xuICAsIHRlbXBsYXRlOiAkdGVtcGxhdGVDYWNoZS5nZXQoJ3dmbS10ZW1wbGF0ZS9ncm91cC1saXN0LnRwbC5odG1sJylcbiAgLCBzY29wZToge1xuICAgICAgZ3JvdXBzIDogJz0nLFxuICAgICAgc2VsZWN0ZWRNb2RlbDogJz0nXG4gICAgfVxuICAsIGNvbnRyb2xsZXI6IGZ1bmN0aW9uKCRzY29wZSkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgc2VsZi5ncm91cHMgPSAkc2NvcGUuZ3JvdXBzO1xuICAgICAgc2VsZi5zZWxlY3RlZCA9ICRzY29wZS5zZWxlY3RlZE1vZGVsO1xuICAgICAgc2VsZi5zZWxlY3RHcm91cCA9IGZ1bmN0aW9uKGV2ZW50LCBncm91cCkge1xuICAgICAgICBtZWRpYXRvci5wdWJsaXNoKCd3Zm06Z3JvdXA6c2VsZWN0ZWQnLCBncm91cCk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgfVxuICAgICAgc2VsZi5pc0dyb3VwU2hvd24gPSBmdW5jdGlvbihncm91cCkge1xuICAgICAgICByZXR1cm4gc2VsZi5zaG93bkdyb3VwID09PSBncm91cDtcbiAgICAgIH07XG5cbiAgICAgIHNlbGYuYXBwbHlGaWx0ZXIgPSBmdW5jdGlvbih0ZXJtKSB7XG4gICAgICAgIHRlcm0gPSB0ZXJtLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHNlbGYuZ3JvdXBzID0gJHNjb3BlLmdyb3Vwcy5maWx0ZXIoZnVuY3Rpb24oZ3JvdXApIHtcbiAgICAgICAgICByZXR1cm4gU3RyaW5nKGdyb3VwLmlkKS5pbmRleE9mKHRlcm0pICE9PSAtMVxuICAgICAgICAgICAgfHwgU3RyaW5nKGdyb3VwLm5hbWUpLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih0ZXJtKSAhPT0gLTE7XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICB9XG4gICwgY29udHJvbGxlckFzOiAnY3RybCdcbiAgfTtcbn0pXG4uZGlyZWN0aXZlKCdncm91cCcsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlLCBtZWRpYXRvcikge1xuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnRSdcbiAgLCB0ZW1wbGF0ZTogJHRlbXBsYXRlQ2FjaGUuZ2V0KCd3Zm0tdGVtcGxhdGUvZ3JvdXAudHBsLmh0bWwnKVxuICAsIHNjb3BlOiB7XG4gICAgICBncm91cCA6ICc9JyxcbiAgICAgIG1lbWJlcnMgOiAnPSdcbiAgICB9XG4gICwgY29udHJvbGxlcjogZnVuY3Rpb24oJHNjb3BlKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICBzZWxmLmdyb3VwID0gJHNjb3BlLmdyb3VwO1xuICAgICAgc2VsZi5tZW1iZXJzID0gJHNjb3BlLm1lbWJlcnM7XG4gICAgICBzZWxmLnNlbGVjdE1lbWJlciA9IGZ1bmN0aW9uKGV2ZW50LCBtZW1iZXIpIHtcbiAgICAgICAgbWVkaWF0b3IucHVibGlzaCgnd2ZtOndvcmtlcjpzZWxlY3RlZCcsIG1lbWJlcik7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgfVxuICAgIH1cbiAgLCBjb250cm9sbGVyQXM6ICdjdHJsJ1xuICB9O1xufSlcbi5kaXJlY3RpdmUoJ2dyb3VwRm9ybScsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlLCBtZWRpYXRvcikge1xuICAgIHJldHVybiB7XG4gICAgICByZXN0cmljdDogJ0UnXG4gICAgLCB0ZW1wbGF0ZTogJHRlbXBsYXRlQ2FjaGUuZ2V0KCd3Zm0tdGVtcGxhdGUvZ3JvdXAtZm9ybS50cGwuaHRtbCcpXG4gICAgLCBzY29wZToge1xuICAgICAgICBncm91cCA6ICc9dmFsdWUnXG4gICAgICB9XG4gICAgLCBjb250cm9sbGVyOiBmdW5jdGlvbigkc2NvcGUpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBzZWxmLm1vZGVsID0gYW5ndWxhci5jb3B5KCRzY29wZS5ncm91cCk7XG4gICAgICAgIHNlbGYuc3VibWl0dGVkID0gZmFsc2U7XG4gICAgICAgIHNlbGYuc2VsZWN0R3JvdXAgPSBmdW5jdGlvbihldmVudCwgZ3JvdXApIHtcbiAgICAgICAgICBpZihncm91cC5pZCkge1xuICAgICAgICAgICAgbWVkaWF0b3IucHVibGlzaCgnd2ZtOmdyb3VwOnNlbGVjdGVkJywgZ3JvdXApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG1lZGlhdG9yLnB1Ymxpc2goJ3dmbTpncm91cDpsaXN0Jyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgICAgc2VsZi5kb25lID0gZnVuY3Rpb24oaXNWYWxpZCkge1xuICAgICAgICAgIHNlbGYuc3VibWl0dGVkID0gdHJ1ZTtcbiAgICAgICAgICBpZiAoaXNWYWxpZCkge1xuICAgICAgICAgICAgaWYgKCFzZWxmLm1vZGVsLmlkICYmIHNlbGYubW9kZWwuaWQgIT09IDApIHtcbiAgICAgICAgICAgICAgbWVkaWF0b3IucHVibGlzaCgnd2ZtOmdyb3VwOmNyZWF0ZWQnLCBzZWxmLm1vZGVsKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG1lZGlhdG9yLnB1Ymxpc2goJ3dmbTpncm91cDp1cGRhdGVkJywgc2VsZi5tb2RlbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgLCBjb250cm9sbGVyQXM6ICdjdHJsJ1xuICAgIH07XG4gIH0pO1xuIiwiLyoqXG4qIENPTkZJREVOVElBTFxuKiBDb3B5cmlnaHQgMjAxNiBSZWQgSGF0LCBJbmMuIGFuZC9vciBpdHMgYWZmaWxpYXRlcy5cbiogVGhpcyBpcyB1bnB1Ymxpc2hlZCBwcm9wcmlldGFyeSBzb3VyY2UgY29kZSBvZiBSZWQgSGF0LlxuKiovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBuZ01vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCd3Zm0udXNlci5zZXJ2aWNlcycsIFsnd2ZtLmNvcmUubWVkaWF0b3InXSlcbm1vZHVsZS5leHBvcnRzID0gJ3dmbS51c2VyLnNlcnZpY2VzJztcblxudmFyIFVzZXJDbGllbnQgPSByZXF1aXJlKCcuLi91c2VyL3VzZXItY2xpZW50JyksXG4gICAgR3JvdXBDbGllbnQgPSByZXF1aXJlKCcuLi9ncm91cC9ncm91cC1jbGllbnQnKSxcbiAgICBNZW1iZXJzaGlwQ2xpZW50ID0gcmVxdWlyZSgnLi4vbWVtYmVyc2hpcC9tZW1iZXJzaGlwLWNsaWVudCcpO1xuIFxuZnVuY3Rpb24gd3JhcENsaWVudCgkcSwgY2xpZW50LCBtZXRob2ROYW1lcykge1xuICB2YXIgd3JhcHBlciA9IHt9O1xuICBtZXRob2ROYW1lcy5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZE5hbWUpIHtcbiAgICB3cmFwcGVyW21ldGhvZE5hbWVdID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gJHEud2hlbihjbGllbnRbbWV0aG9kTmFtZV0uYXBwbHkoY2xpZW50LCBhcmd1bWVudHMpKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gd3JhcHBlcjtcbn1cblxubmdNb2R1bGUuZmFjdG9yeSgndXNlckNsaWVudCcsIGZ1bmN0aW9uKCRxLCBtZWRpYXRvcikge1xuICB2YXIgbWV0aG9kTmFtZXMgPSBbJ2NyZWF0ZScsICdyZWFkJywgJ3VwZGF0ZScsICdkZWxldGUnLCAnbGlzdCcsICdhdXRoJywgJ2hhc1Nlc3Npb24nLCAnY2xlYXJTZXNzaW9uJywgJ3ZlcmlmeScsICdnZXRQcm9maWxlJ107XG4gIHZhciB1c2VyQ2xpZW50ID0gd3JhcENsaWVudCgkcSwgbmV3IFVzZXJDbGllbnQobWVkaWF0b3IpLCBtZXRob2ROYW1lcyk7XG4gIHJldHVybiB1c2VyQ2xpZW50O1xufSk7XG5cbm5nTW9kdWxlLmZhY3RvcnkoJ2dyb3VwQ2xpZW50JywgZnVuY3Rpb24oJHEsIG1lZGlhdG9yKSB7XG4gIHZhciBtZXRob2ROYW1lcyA9IFsnY3JlYXRlJywgJ3JlYWQnLCAndXBkYXRlJywgJ2RlbGV0ZScsICdsaXN0JywgJ21lbWJlcnNoaXAnXTtcbiAgdmFyIGdyb3VwQ2xpZW50ID0gd3JhcENsaWVudCgkcSwgbmV3IEdyb3VwQ2xpZW50KG1lZGlhdG9yKSwgbWV0aG9kTmFtZXMpO1xuICByZXR1cm4gZ3JvdXBDbGllbnQ7XG59KTtcblxubmdNb2R1bGUuZmFjdG9yeSgnbWVtYmVyc2hpcENsaWVudCcsIGZ1bmN0aW9uKCRxLCBtZWRpYXRvcikge1xuICB2YXIgbWV0aG9kTmFtZXMgPSBbJ2NyZWF0ZScsICdyZWFkJywgJ3VwZGF0ZScsICdkZWxldGUnLCAnbGlzdCcsICdtZW1iZXJzaGlwJ107XG4gIHZhciBncm91cENsaWVudCA9IHdyYXBDbGllbnQoJHEsIG5ldyBNZW1iZXJzaGlwQ2xpZW50KG1lZGlhdG9yKSwgbWV0aG9kTmFtZXMpO1xuICByZXR1cm4gZ3JvdXBDbGllbnQ7XG59KTtcbiIsIi8qKlxuKiBDT05GSURFTlRJQUxcbiogQ29weXJpZ2h0IDIwMTYgUmVkIEhhdCwgSW5jLiBhbmQvb3IgaXRzIGFmZmlsaWF0ZXMuXG4qIFRoaXMgaXMgdW5wdWJsaXNoZWQgcHJvcHJpZXRhcnkgc291cmNlIGNvZGUgb2YgUmVkIEhhdC5cbioqL1xuJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICd3Zm0udXNlcic7XG5cbmFuZ3VsYXIubW9kdWxlKCd3Zm0udXNlcicsIFtcbiAgcmVxdWlyZSgnLi9kaXJlY3RpdmUnKVxuLCByZXF1aXJlKCcuL3NlcnZpY2UuanMnKVxuXSlcbiIsIi8qKlxuKiBDT05GSURFTlRJQUxcbiogQ29weXJpZ2h0IDIwMTYgUmVkIEhhdCwgSW5jLiBhbmQvb3IgaXRzIGFmZmlsaWF0ZXMuXG4qIFRoaXMgaXMgdW5wdWJsaXNoZWQgcHJvcHJpZXRhcnkgc291cmNlIGNvZGUgb2YgUmVkIEhhdC5cbioqL1xuJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgYXBpUGF0aDogJy9hcGkvd2ZtL2dyb3VwJ1xufVxuIiwiLyoqXG4qIENPTkZJREVOVElBTFxuKiBDb3B5cmlnaHQgMjAxNiBSZWQgSGF0LCBJbmMuIGFuZC9vciBpdHMgYWZmaWxpYXRlcy5cbiogVGhpcyBpcyB1bnB1Ymxpc2hlZCBwcm9wcmlldGFyeSBzb3VyY2UgY29kZSBvZiBSZWQgSGF0LlxuKiovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBxID0gcmVxdWlyZSgncScpO1xudmFyIF8gPSByZXF1aXJlKCdsb2Rhc2gnKTtcbnZhciBjb25maWcgPSByZXF1aXJlKCcuL2NvbmZpZy1ncm91cCcpO1xuXG52YXIgR3JvdXBDbGllbnQgPSBmdW5jdGlvbihtZWRpYXRvcikge1xuICB0aGlzLm1lZGlhdG9yID0gbWVkaWF0b3I7XG4gIHRoaXMuaW5pdENvbXBsZXRlID0gZmFsc2U7XG4gIHRoaXMuaW5pdFByb21pc2UgPSB0aGlzLmluaXQoKTtcbn07XG5cbnZhciB4aHIgPSBmdW5jdGlvbihfb3B0aW9ucykge1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgcGF0aDogJy8nLFxuICAgIG1ldGhvZDogJ2dldCcsXG4gICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICB9XG4gIHZhciBvcHRpb25zID0gXy5kZWZhdWx0cyhfb3B0aW9ucywgZGVmYXVsdE9wdGlvbnMpO1xuICB2YXIgZGVmZXJyZWQgPSBxLmRlZmVyKCk7XG4gICRmaC5jbG91ZChvcHRpb25zLCBmdW5jdGlvbihyZXMpIHtcbiAgICBkZWZlcnJlZC5yZXNvbHZlKHJlcyk7XG4gIH0sIGZ1bmN0aW9uKG1lc3NhZ2UsIHByb3BzKSB7XG4gICAgdmFyIGUgPSBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgZS5wcm9wcyA9IHByb3BzO1xuICAgIGRlZmVycmVkLnJlamVjdChlKTtcbiAgfSk7XG4gIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xufTtcblxuR3JvdXBDbGllbnQucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGRlZmVycmVkID0gcS5kZWZlcigpO1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gICRmaC5vbignZmhpbml0JywgZnVuY3Rpb24oZXJyb3IsIGhvc3QpIHtcbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIGRlZmVycmVkLnJlamVjdChuZXcgRXJyb3IoZXJyb3IpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc2VsZi5hcHBpZCA9ICRmaC5nZXRGSFBhcmFtcygpLmFwcGlkO1xuICAgIHNlbGYuaW5pdENvbXBsZXRlID0gdHJ1ZTtcbiAgICBkZWZlcnJlZC5yZXNvbHZlKCk7XG4gIH0pO1xuICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbn1cblxuR3JvdXBDbGllbnQucHJvdG90eXBlLmxpc3QgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHhocih7XG4gICAgcGF0aDogY29uZmlnLmFwaVBhdGhcbiAgfSk7XG59O1xuXG5Hcm91cENsaWVudC5wcm90b3R5cGUucmVhZCA9IGZ1bmN0aW9uKGlkKSB7XG4gIHJldHVybiB4aHIoe1xuICAgIHBhdGg6IGNvbmZpZy5hcGlQYXRoICsgJy8nICsgaWRcbiAgfSk7XG59O1xuXG5Hcm91cENsaWVudC5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oZ3JvdXApIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICByZXR1cm4geGhyKHtcbiAgICBwYXRoOiBjb25maWcuYXBpUGF0aCArICcvJyArIGdyb3VwLmlkLFxuICAgIG1ldGhvZDogJ3B1dCcsXG4gICAgZGF0YTogZ3JvdXBcbiAgfSk7XG59O1xuXG5Hcm91cENsaWVudC5wcm90b3R5cGUuY3JlYXRlID0gZnVuY3Rpb24oZ3JvdXApIHtcbiAgcmV0dXJuIHhocih7XG4gICAgcGF0aDogY29uZmlnLmFwaVBhdGgsXG4gICAgbWV0aG9kOiAncG9zdCcsXG4gICAgZGF0YTogZ3JvdXBcbiAgfSk7XG59O1xuXG5Hcm91cENsaWVudC5wcm90b3R5cGUuZGVsZXRlID0gZnVuY3Rpb24oZ3JvdXApIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICByZXR1cm4geGhyKHtcbiAgICBwYXRoOiBjb25maWcuYXBpUGF0aCArICcvJyArIGdyb3VwLmlkLFxuICAgIG1ldGhvZDogJ2RlbGV0ZScsXG4gICAgZGF0YTogZ3JvdXBcbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1lZGlhdG9yKSB7XG4gIHJldHVybiBuZXcgR3JvdXBDbGllbnQobWVkaWF0b3IpO1xufVxuIiwiLyoqXG4qIENPTkZJREVOVElBTFxuKiBDb3B5cmlnaHQgMjAxNiBSZWQgSGF0LCBJbmMuIGFuZC9vciBpdHMgYWZmaWxpYXRlcy5cbiogVGhpcyBpcyB1bnB1Ymxpc2hlZCBwcm9wcmlldGFyeSBzb3VyY2UgY29kZSBvZiBSZWQgSGF0LlxuKiovXG4ndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBhcGlQYXRoOiAnL2FwaS93Zm0vbWVtYmVyc2hpcCdcbn1cbiIsIi8qKlxuKiBDT05GSURFTlRJQUxcbiogQ29weXJpZ2h0IDIwMTYgUmVkIEhhdCwgSW5jLiBhbmQvb3IgaXRzIGFmZmlsaWF0ZXMuXG4qIFRoaXMgaXMgdW5wdWJsaXNoZWQgcHJvcHJpZXRhcnkgc291cmNlIGNvZGUgb2YgUmVkIEhhdC5cbioqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgcSA9IHJlcXVpcmUoJ3EnKTtcbnZhciBfID0gcmVxdWlyZSgnbG9kYXNoJyk7XG52YXIgY29uZmlnID0gcmVxdWlyZSgnLi9jb25maWctbWVtYmVyc2hpcCcpO1xuXG52YXIgTWVtYmVyc2hpcENsaWVudCA9IGZ1bmN0aW9uKG1lZGlhdG9yKSB7XG4gIHRoaXMubWVkaWF0b3IgPSBtZWRpYXRvcjtcbiAgdGhpcy5pbml0Q29tcGxldGUgPSBmYWxzZTtcbiAgdGhpcy5pbml0UHJvbWlzZSA9IHRoaXMuaW5pdCgpO1xufTtcblxudmFyIHhociA9IGZ1bmN0aW9uKF9vcHRpb25zKSB7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICBwYXRoOiAnLycsXG4gICAgbWV0aG9kOiAnZ2V0JyxcbiAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nXG4gIH1cbiAgdmFyIG9wdGlvbnMgPSBfLmRlZmF1bHRzKF9vcHRpb25zLCBkZWZhdWx0T3B0aW9ucyk7XG4gIHZhciBkZWZlcnJlZCA9IHEuZGVmZXIoKTtcbiAgJGZoLmNsb3VkKG9wdGlvbnMsIGZ1bmN0aW9uKHJlcykge1xuICAgIGRlZmVycmVkLnJlc29sdmUocmVzKTtcbiAgfSwgZnVuY3Rpb24obWVzc2FnZSwgcHJvcHMpIHtcbiAgICB2YXIgZSA9IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICBlLnByb3BzID0gcHJvcHM7XG4gICAgZGVmZXJyZWQucmVqZWN0KGUpO1xuICB9KTtcbiAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG59O1xuXG5NZW1iZXJzaGlwQ2xpZW50LnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oKSB7XG4gIHZhciBkZWZlcnJlZCA9IHEuZGVmZXIoKTtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICAkZmgub24oJ2ZoaW5pdCcsIGZ1bmN0aW9uKGVycm9yLCBob3N0KSB7XG4gICAgaWYgKGVycm9yKSB7XG4gICAgICBkZWZlcnJlZC5yZWplY3QobmV3IEVycm9yKGVycm9yKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHNlbGYuYXBwaWQgPSAkZmguZ2V0RkhQYXJhbXMoKS5hcHBpZDtcbiAgICBzZWxmLmluaXRDb21wbGV0ZSA9IHRydWU7XG4gICAgZGVmZXJyZWQucmVzb2x2ZSgpO1xuICB9KTtcbiAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG59XG5cbk1lbWJlcnNoaXBDbGllbnQucHJvdG90eXBlLmxpc3QgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHhocih7XG4gICAgcGF0aDogY29uZmlnLmFwaVBhdGhcbiAgfSk7XG59O1xuXG5NZW1iZXJzaGlwQ2xpZW50LnByb3RvdHlwZS5yZWFkID0gZnVuY3Rpb24oaWQpIHtcbiAgcmV0dXJuIHhocih7XG4gICAgcGF0aDogY29uZmlnLmFwaVBhdGggKyAnLycgKyBpZFxuICB9KTtcbn07XG5cbk1lbWJlcnNoaXBDbGllbnQucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKG1lbWJlcnNoaXApIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICByZXR1cm4geGhyKHtcbiAgICBwYXRoOiBjb25maWcuYXBpUGF0aCArICcvJyArIG1lbWJlcnNoaXAuaWQsXG4gICAgbWV0aG9kOiAncHV0JyxcbiAgICBkYXRhOiBtZW1iZXJzaGlwXG4gIH0pO1xufTtcblxuTWVtYmVyc2hpcENsaWVudC5wcm90b3R5cGUuY3JlYXRlID0gZnVuY3Rpb24obWVtYmVyc2hpcCkge1xuICByZXR1cm4geGhyKHtcbiAgICBwYXRoOiBjb25maWcuYXBpUGF0aCxcbiAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICBkYXRhOiBtZW1iZXJzaGlwXG4gIH0pO1xufTtcblxuTWVtYmVyc2hpcENsaWVudC5wcm90b3R5cGUuZGVsZXRlID0gZnVuY3Rpb24obWVtYmVyc2hpcCkge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHJldHVybiB4aHIoe1xuICAgIHBhdGg6IGNvbmZpZy5hcGlQYXRoICsgJy8nICsgbWVtYmVyc2hpcC5pZCxcbiAgICBtZXRob2Q6ICdkZWxldGUnLFxuICAgIGRhdGE6IG1lbWJlcnNoaXBcbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1lZGlhdG9yKSB7XG4gIHJldHVybiBuZXcgTWVtYmVyc2hpcENsaWVudChtZWRpYXRvcik7XG59XG4iLCIvKipcbiogQ09ORklERU5USUFMXG4qIENvcHlyaWdodCAyMDE2IFJlZCBIYXQsIEluYy4gYW5kL29yIGl0cyBhZmZpbGlhdGVzLlxuKiBUaGlzIGlzIHVucHVibGlzaGVkIHByb3ByaWV0YXJ5IHNvdXJjZSBjb2RlIG9mIFJlZCBIYXQuXG4qKi9cbid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGFwaUhvc3Q6ICdodHRwOi8vbG9jYWxob3N0OjgwODAnLFxuICBhcGlQYXRoOiAnL2FwaS93Zm0vdXNlcicsXG4gIGF1dGhwb2xpY3lQYXRoOiAnL2JveC9zcnYvMS4xL2FkbWluL2F1dGhwb2xpY3knXG59XG4iLCIvKipcbiogQ09ORklERU5USUFMXG4qIENvcHlyaWdodCAyMDE2IFJlZCBIYXQsIEluYy4gYW5kL29yIGl0cyBhZmZpbGlhdGVzLlxuKiBUaGlzIGlzIHVucHVibGlzaGVkIHByb3ByaWV0YXJ5IHNvdXJjZSBjb2RlIG9mIFJlZCBIYXQuXG4qKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIHEgPSByZXF1aXJlKCdxJyk7XG52YXIgXyA9IHJlcXVpcmUoJ2xvZGFzaCcpO1xudmFyIGNvbmZpZyA9IHJlcXVpcmUoJy4vY29uZmlnLXVzZXInKTtcblxudmFyIFVzZXJDbGllbnQgPSBmdW5jdGlvbihtZWRpYXRvcikge1xuICB0aGlzLm1lZGlhdG9yID0gbWVkaWF0b3I7XG4gIHRoaXMuaW5pdENvbXBsZXRlID0gZmFsc2U7XG4gIHRoaXMuaW5pdFByb21pc2UgPSB0aGlzLmluaXQoKTtcbn07XG5cbnZhciB4aHIgPSBmdW5jdGlvbihfb3B0aW9ucykge1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgcGF0aDogJy8nLFxuICAgIG1ldGhvZDogJ2dldCcsXG4gICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICB9XG4gIHZhciBvcHRpb25zID0gXy5kZWZhdWx0cyhfb3B0aW9ucywgZGVmYXVsdE9wdGlvbnMpO1xuICB2YXIgZGVmZXJyZWQgPSBxLmRlZmVyKCk7XG4gICRmaC5jbG91ZChvcHRpb25zLCBmdW5jdGlvbihyZXMpIHtcbiAgICBkZWZlcnJlZC5yZXNvbHZlKHJlcyk7XG4gIH0sIGZ1bmN0aW9uKG1lc3NhZ2UsIHByb3BzKSB7XG4gICAgdmFyIGUgPSBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgZS5wcm9wcyA9IHByb3BzO1xuICAgIGRlZmVycmVkLnJlamVjdChlKTtcbiAgfSk7XG4gIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xufTtcblxudmFyIHN0b3JlUHJvZmlsZSA9IGZ1bmN0aW9uKHByb2ZpbGVEYXRhKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdmaC53Zm0ucHJvZmlsZURhdGEnLCBKU09OLnN0cmluZ2lmeShwcm9maWxlRGF0YSkpO1xufTtcblxudmFyIHJldHJpZXZlUHJvZmlsZURhdGEgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGpzb24gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmgud2ZtLnByb2ZpbGVEYXRhJyk7XG4gIHJldHVybiBqc29uID8gSlNPTi5wYXJzZShqc29uKSA6IG51bGw7XG59XG5cblVzZXJDbGllbnQucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGRlZmVycmVkID0gcS5kZWZlcigpO1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gICRmaC5vbignZmhpbml0JywgZnVuY3Rpb24oZXJyb3IsIGhvc3QpIHtcbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIGRlZmVycmVkLnJlamVjdChuZXcgRXJyb3IoZXJyb3IpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc2VsZi5hcHBpZCA9ICRmaC5nZXRGSFBhcmFtcygpLmFwcGlkO1xuICAgIHNlbGYuaW5pdENvbXBsZXRlID0gdHJ1ZTtcbiAgICBkZWZlcnJlZC5yZXNvbHZlKCk7XG4gIH0pO1xuICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbn1cblxuVXNlckNsaWVudC5wcm90b3R5cGUubGlzdCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4geGhyKHtcbiAgICBwYXRoOiBjb25maWcuYXBpUGF0aFxuICB9KTtcbn07XG5cblVzZXJDbGllbnQucHJvdG90eXBlLnJlYWQgPSBmdW5jdGlvbihpZCkge1xuICByZXR1cm4geGhyKHtcbiAgICBwYXRoOiBjb25maWcuYXBpUGF0aCArICcvJyArIGlkXG4gIH0pO1xufTtcblxuVXNlckNsaWVudC5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24odXNlcikge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHJldHVybiB4aHIoe1xuICAgIHBhdGg6IGNvbmZpZy5hcGlQYXRoICsgJy8nICsgdXNlci5pZCxcbiAgICBtZXRob2Q6ICdwdXQnLFxuICAgIGRhdGE6IHVzZXJcbiAgfSk7XG59O1xuXG5Vc2VyQ2xpZW50LnByb3RvdHlwZS5kZWxldGUgPSBmdW5jdGlvbih1c2VyKSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgcmV0dXJuIHhocih7XG4gICAgcGF0aDogY29uZmlnLmFwaVBhdGggKyAnLycgKyB1c2VyLmlkLFxuICAgIG1ldGhvZDogJ2RlbGV0ZScsXG4gICAgZGF0YTogdXNlclxuICB9KTtcbn07XG5cblVzZXJDbGllbnQucHJvdG90eXBlLmNyZWF0ZSA9IGZ1bmN0aW9uKHVzZXIpIHtcbiAgcmV0dXJuIHhocih7XG4gICAgcGF0aDogY29uZmlnLmFwaVBhdGgsXG4gICAgbWV0aG9kOiAncG9zdCcsXG4gICAgZGF0YTogdXNlclxuICB9KTtcbn07XG5cblVzZXJDbGllbnQucHJvdG90eXBlLmF1dGggPSBmdW5jdGlvbih1c2VybmFtZSwgcGFzc3dvcmQpIHtcbiAgdmFyIGRlZmVycmVkID0gcS5kZWZlcigpO1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHRoaXMuaW5pdFByb21pc2UudGhlbihmdW5jdGlvbigpIHtcbiAgICAkZmguYXV0aCh7XG4gICAgICBwb2xpY3lJZDogJ3dmbScsXG4gICAgICBjbGllbnRUb2tlbjogc2VsZi5hcHBpZCxcbiAgICAgIHBhcmFtczoge1xuICAgICAgICB1c2VySWQ6IHVzZXJuYW1lLFxuICAgICAgICBwYXNzd29yZDogcGFzc3dvcmRcbiAgICAgIH1cbiAgICB9LCBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAvLyByZXMuc2Vzc2lvblRva2VuOyAvLyBUaGUgcGxhdGZvcm0gc2Vzc2lvbiBpZGVudGlmaWVyXG4gICAgICAvLyByZXMuYXV0aFJlc3BvbnNlOyAvLyBUaGUgYXV0aGV0aWNhdGlvbiBpbmZvcm1hdGlvbiByZXR1cm5lZCBmcm9tIHRoZSBhdXRoZXRpY2F0aW9uIHNlcnZpY2UuXG4gICAgICB2YXIgcHJvZmlsZURhdGEgPSByZXMuYXV0aFJlc3BvbnNlO1xuICAgICAgaWYgKHR5cGVvZiBwcm9maWxlRGF0YSA9PT0gJ3N0cmluZycgfHwgcHJvZmlsZURhdGEgaW5zdGFuY2VvZiBTdHJpbmcpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBwcm9maWxlRGF0YSA9IEpTT04ucGFyc2UocHJvZmlsZURhdGEpO1xuICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGUpXG4gICAgICAgICAgY29uc29sZS5sb2coJ1VuYWJsZSB0byBwYXJzZSB0aGUgJGZoLmF1dGggcmVzcG9uc2UuIFVzaW5nIGEgd29ya2Fyb3VuZCcpO1xuICAgICAgICAgIHByb2ZpbGVEYXRhID0gSlNPTi5wYXJzZShwcm9maWxlRGF0YS5yZXBsYWNlKC8sXFxzL2csICcsJykucmVwbGFjZSgvW14sPXt9XSsvZywgJ1wiJCZcIicpLnJlcGxhY2UoLz0vZywgJzonKSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgc3RvcmVQcm9maWxlKHByb2ZpbGVEYXRhKTtcbiAgICAgIHNlbGYubWVkaWF0b3IucHVibGlzaCgnd2ZtOmF1dGg6cHJvZmlsZTpjaGFuZ2UnLCBwcm9maWxlRGF0YSk7XG4gICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlcyk7XG4gICAgfSwgZnVuY3Rpb24gKG1zZywgZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhtc2csIGVycik7XG4gICAgICB2YXIgZXJyb3JNc2cgPSBlcnIubWVzc2FnZTtcbiAgICAgIC8qIFBvc3NpYmxlIGVycm9yczpcbiAgICAgIHVua25vd25fcG9saWN5SWQgLSBUaGUgcG9saWN5SWQgcHJvdmlkZWQgZGlkIG5vdCBtYXRjaCBhbnkgZGVmaW5lZCBwb2xpY3kuIENoZWNrIHRoZSBBdXRoIFBvbGljaWVzIGRlZmluZWQuIFNlZSBBdXRoIFBvbGljaWVzIEFkbWluaXN0cmF0aW9uXG4gICAgICB1c2VyX25vdF9mb3VuZCAtIFRoZSBBdXRoIFBvbGljeSBhc3NvY2lhdGVkIHdpdGggdGhlIHBvbGljeUlkIHByb3ZpZGVkIGhhcyBiZWVuIHNldCB1cCB0byByZXF1aXJlIHRoYXQgYWxsIHVzZXJzIGF1dGhlbnRpY2F0aW5nIGV4aXN0IG9uIHRoZSBwbGF0Zm9ybSwgYnV0IHRoaXMgdXNlciBkb2VzIG5vdCBleGlzdHMuXG4gICAgICB1c2VyX25vdF9hcHByb3ZlZCAtIC0gVGhlIEF1dGggUG9saWN5IGFzc29jaWF0ZWQgd2l0aCB0aGUgcG9saWN5SWQgcHJvdmlkZWQgaGFzIGJlZW4gc2V0IHVwIHRvIHJlcXVpcmUgdGhhdCBhbGwgdXNlcnMgYXV0aGVudGljYXRpbmcgYXJlIGluIGEgbGlzdCBvZiBhcHByb3ZlZCB1c2VycywgYnV0IHRoaXMgdXNlciBpcyBub3QgaW4gdGhhdCBsaXN0LlxuICAgICAgdXNlcl9kaXNhYmxlZCAtIFRoZSB1c2VyIGhhcyBiZWVuIGRpc2FibGVkIGZyb20gbG9nZ2luZyBpbi5cbiAgICAgIHVzZXJfcHVyZ2VfZGF0YSAtIFRoZSB1c2VyIGhhcyBiZWVuIGZsYWdnZWQgZm9yIGRhdGEgcHVyZ2UgYW5kIGFsbCBsb2NhbCBkYXRhIHNob3VsZCBiZSBkZWxldGVkLlxuICAgICAgZGV2aWNlX2Rpc2FibGVkIC0gVGhlIGRldmljZSBoYXMgYmVlbiBkaXNhYmxlZC4gTm8gdXNlciBvciBhcHBzIGNhbiBsb2cgaW4gZnJvbSB0aGUgcmVxdWVzdGluZyBkZXZpY2UuXG4gICAgICBkZXZpY2VfcHVyZ2VfZGF0YSAtIFRoZSBkZXZpY2UgaGFzIGJlZW4gZmxhZ2dlZCBmb3IgZGF0YSBwdXJnZSBhbmQgYWxsIGxvY2FsIGRhdGEgc2hvdWxkIGJlIGRlbGV0ZWQuXG4gICAgICAqL1xuICAgICAgaWYgKGVycm9yTXNnID09IFwidXNlcl9wdXJnZV9kYXRhXCIgfHwgZXJyb3JNc2cgPT0gXCJkZXZpY2VfcHVyZ2VfZGF0YVwiKSB7XG4gICAgICAgIC8vIFRPRE86IFVzZXIgb3IgZGV2aWNlIGhhcyBiZWVuIGJsYWNrIGxpc3RlZCBmcm9tIGFkbWluaXN0cmF0aW9uIGNvbnNvbGUgYW5kIGFsbCBsb2NhbCBkYXRhIHNob3VsZCBiZSB3aXBlZFxuICAgICAgICBjb25zb2xlLmxvZygnVXNlciBvciBkZXZpY2UgaGFzIGJlZW4gYmxhY2sgbGlzdGVkIGZyb20gYWRtaW5pc3RyYXRpb24gY29uc29sZSBhbmQgYWxsIGxvY2FsIGRhdGEgc2hvdWxkIGJlIHdpcGVkJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkF1dGhlbnRpY2F0aW9uIGZhaWxlZCAtIFwiICsgZXJyb3JNc2cpO1xuICAgICAgICBkZWZlcnJlZC5yZWplY3QoZXJyb3JNc2cpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KVxuICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbn1cblxuVXNlckNsaWVudC5wcm90b3R5cGUuaGFzU2Vzc2lvbiA9IGZ1bmN0aW9uKCkge1xuICB2YXIgZGVmZXJyZWQgPSBxLmRlZmVyKCk7XG4gICRmaC5hdXRoLmhhc1Nlc3Npb24oZnVuY3Rpb24oZXJyLCBleGlzdHMpe1xuICAgIGlmKGVycikge1xuICAgICAgY29uc29sZS5sb2coJ0ZhaWxlZCB0byBjaGVjayBzZXNzaW9uOiAnLCBlcnIpO1xuICAgICAgZGVmZXJyZWQucmVqZWN0KGVycik7XG4gICAgfSBlbHNlIGlmIChleGlzdHMpe1xuICAgICAgLy91c2VyIGlzIGFscmVhZHkgYXV0aGVudGljYXRlZFxuICAgICAgLy9vcHRpb25hbGx5IHdlIGNhbiBhbHNvIHZlcmlmeSB0aGUgc2Vzc2lvbiBpcyBhY3V0YWxseSB2YWxpZCBmcm9tIGNsaWVudC4gVGhpcyByZXF1aXJlcyBuZXR3b3JrIGNvbm5lY3Rpb24uXG4gICAgICBkZWZlcnJlZC5yZXNvbHZlKHRydWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIGRlZmVycmVkLnJlc29sdmUoZmFsc2UpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xufVxuXG5Vc2VyQ2xpZW50LnByb3RvdHlwZS5jbGVhclNlc3Npb24gPSBmdW5jdGlvbigpIHtcbiAgdmFyIGRlZmVycmVkID0gcS5kZWZlcigpO1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gICRmaC5hdXRoLmNsZWFyU2Vzc2lvbihmdW5jdGlvbihlcnIpe1xuICAgIGlmKGVycikge1xuICAgICAgY29uc29sZS5sb2coJ0ZhaWxlZCB0byBjbGVhciBzZXNzaW9uOiAnLCBlcnIpO1xuICAgICAgZGVmZXJyZWQucmVqZWN0KGVycik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0b3JlUHJvZmlsZShudWxsKTtcbiAgICAgIHNlbGYubWVkaWF0b3IucHVibGlzaCgnd2ZtOmF1dGg6cHJvZmlsZTpjaGFuZ2UnLCBudWxsKTtcbiAgICAgIGRlZmVycmVkLnJlc29sdmUodHJ1ZSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG59XG5cblVzZXJDbGllbnQucHJvdG90eXBlLnZlcmlmeSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgZGVmZXJyZWQgPSBxLmRlZmVyKCk7XG4gICRmaC5hdXRoLnZlcmlmeShmdW5jdGlvbihlcnIsIHZhbGlkKXtcbiAgICBpZihlcnIpe1xuICAgICAgY29uc29sZS5sb2coJ2ZhaWxlZCB0byB2ZXJpZnkgc2Vzc2lvbicpO1xuICAgICAgZGVmZXJyZWQucmVqZWN0KGVycik7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmKHZhbGlkKSB7XG4gICAgICBjb25zb2xlLmxvZygnc2Vzc2lvbiBpcyB2YWxpZCcpO1xuICAgICAgZGVmZXJyZWQucmVzb2x2ZSh0cnVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZygnc2Vzc2lvbiBpcyBub3QgdmFsaWQnKTtcbiAgICAgIGRlZmVycmVkLnJlc29sdmUoZmFsc2UpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xufVxuXG5Vc2VyQ2xpZW50LnByb3RvdHlwZS5nZXRQcm9maWxlID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBxLndoZW4ocmV0cmlldmVQcm9maWxlRGF0YSgpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtZWRpYXRvcikge1xuICByZXR1cm4gbmV3IFVzZXJDbGllbnQobWVkaWF0b3IpO1xufVxuIiwicmVxdWlyZSgnLi92ZWhpY2xlLWluc3BlY3Rpb24tZm9ybS50cGwuaHRtbC5qcycpO1xucmVxdWlyZSgnLi92ZWhpY2xlLWluc3BlY3Rpb24udHBsLmh0bWwuanMnKTtcbiIsInZhciBuZ01vZHVsZTtcbnRyeSB7XG4gIG5nTW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ3dmbS53b3Jrb3JkZXInKTtcbn0gY2F0Y2ggKGUpIHtcbiAgbmdNb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgnd2ZtLndvcmtvcmRlcicsIFtdKTtcbn1cblxubmdNb2R1bGUucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbiAoJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KCd3Zm0tdGVtcGxhdGUvdmVoaWNsZS1pbnNwZWN0aW9uLWZvcm0udHBsLmh0bWwnLFxuICAgICc8IS0tXFxuJyArXG4gICAgJyBDT05GSURFTlRJQUxcXG4nICtcbiAgICAnIENvcHlyaWdodCAyMDE2IFJlZCBIYXQsIEluYy4gYW5kL29yIGl0cyBhZmZpbGlhdGVzLlxcbicgK1xuICAgICcgVGhpcyBpcyB1bnB1Ymxpc2hlZCBwcm9wcmlldGFyeSBzb3VyY2UgY29kZSBvZiBSZWQgSGF0LlxcbicgK1xuICAgICctLT5cXG4nICtcbiAgICAnICA8ZGl2IGxheW91dD1cInJvd1wiIGNsYXNzPVwid2ZtLWluc3BlY3Rpb24tcm93XCI+XFxuJyArXG4gICAgJyAgICA8ZGl2IGZsZXg9XCI0MFwiIGxheW91dD1cInJvd1wiIGxheW91dC1hbGlnbj1cInN0YXJ0IGNlbnRlclwiPlxcbicgK1xuICAgICcgICAgICA8c3BhbiBjbGFzcz1cIm1kLWJvZHktMlwiPlxcbicgK1xuICAgICcgICAgICAgIDxtZC1pY29uIG1kLWZvbnQtc2V0PVwibWF0ZXJpYWwtaWNvbnNcIj5sb2NhbF9nYXNfc3RhdGlvbjwvbWQtaWNvbj5cXG4nICtcbiAgICAnICAgICAgICBGdWVsICglKVxcbicgK1xuICAgICcgICAgICA8L3NwYW4+XFxuJyArXG4gICAgJyAgICA8L2Rpdj5cXG4nICtcbiAgICAnICAgIDxtZC1zbGlkZXIgZmxleCBtZC1kaXNjcmV0ZSBuZy1tb2RlbD1cImN0cmwubW9kZWwuZnVlbFwiIHN0ZXA9XCIyNVwiIG1pbj1cIjBcIiBtYXg9XCIxMDBcIiBhcmlhLWxhYmVsPVwicmF0aW5nXCI+XFxuJyArXG4gICAgJyAgICA8L21kLXNsaWRlcj5cXG4nICtcbiAgICAnICA8L2Rpdj5cXG4nICtcbiAgICAnXFxuJyArXG4gICAgJyAgICA8bWQtZGl2aWRlcj48L21kLWRpdmlkZXI+XFxuJyArXG4gICAgJ1xcbicgK1xuICAgICcgIDxkaXYgbGF5b3V0PVwicm93XCIgY2xhc3M9XCJ3Zm0taW5zcGVjdGlvbi1yb3dcIj5cXG4nICtcbiAgICAnICAgIDxkaXYgZmxleD1cIjMwXCIgbGF5b3V0PVwicm93XCIgbGF5b3V0LWFsaWduPVwic3RhcnQgY2VudGVyXCI+XFxuJyArXG4gICAgJyAgICAgIDxzcGFuIGNsYXNzPVwibWQtYm9keS0yXCI+XFxuJyArXG4gICAgJyAgICAgICAgPG1kLWljb24gbWQtZm9udC1zZXQ9XCJtYXRlcmlhbC1pY29uc1wiPmFsYnVtPC9tZC1pY29uPlxcbicgK1xuICAgICcgICAgICAgIFRpcmVzXFxuJyArXG4gICAgJyAgICAgIDwvc3Bhbj5cXG4nICtcbiAgICAnICAgIDwvZGl2PlxcbicgK1xuICAgICcgICAgPGRpdiBmbGV4IGxheW91dC1hbGlnbj1cInN0YXJ0IHN0YXJ0XCI+XFxuJyArXG4gICAgJyAgICAgIDxtZC1yYWRpby1ncm91cCBsYXlvdXQgbmctbW9kZWw9XCJjdHJsLm1vZGVsLnRpcmVzXCI+XFxuJyArXG4gICAgJyAgICAgICAgPG1kLXJhZGlvLWJ1dHRvbiBuZy12YWx1ZT1cImZhbHNlXCIgPkZhaWw8L21kLXJhZGlvLWJ1dHRvbj5cXG4nICtcbiAgICAnICAgICAgICA8bWQtcmFkaW8tYnV0dG9uIG5nLXZhbHVlPVwidHJ1ZVwiPiBQYXNzIDwvbWQtcmFkaW8tYnV0dG9uPlxcbicgK1xuICAgICcgICAgICA8L21kLXJhZGlvLWdyb3VwPlxcbicgK1xuICAgICcgICAgPC9kaXY+XFxuJyArXG4gICAgJyAgPC9kaXY+XFxuJyArXG4gICAgJ1xcbicgK1xuICAgICcgICAgPG1kLWRpdmlkZXI+PC9tZC1kaXZpZGVyPlxcbicgK1xuICAgICdcXG4nICtcbiAgICAnICA8ZGl2IGxheW91dD1cInJvd1wiIGNsYXNzPVwid2ZtLWluc3BlY3Rpb24tcm93XCI+XFxuJyArXG4gICAgJyAgICA8ZGl2IGZsZXg9XCIzMFwiIGxheW91dD1cInJvd1wiIGxheW91dC1hbGlnbj1cInN0YXJ0IGNlbnRlclwiPlxcbicgK1xuICAgICcgICAgICA8c3BhbiBjbGFzcz1cIm1kLWJvZHktMlwiPlxcbicgK1xuICAgICcgICAgICAgIDxtZC1pY29uIG1kLWZvbnQtc2V0PVwibWF0ZXJpYWwtaWNvbnNcIj5icmlnaHRuZXNzX2xvdzwvbWQtaWNvbj5cXG4nICtcbiAgICAnICAgICAgICBMaWdodHNcXG4nICtcbiAgICAnICAgICAgPC9zcGFuPlxcbicgK1xuICAgICcgICAgPC9kaXY+XFxuJyArXG4gICAgJyAgICA8ZGl2IGZsZXggbGF5b3V0LWFsaWduPVwic3RhcnQgc3RhcnRcIj5cXG4nICtcbiAgICAnICAgICAgPG1kLXJhZGlvLWdyb3VwIGxheW91dCBuZy1tb2RlbD1cImN0cmwubW9kZWwubGlnaHRzXCI+XFxuJyArXG4gICAgJyAgICAgICAgPG1kLXJhZGlvLWJ1dHRvbiBuZy12YWx1ZT1cImZhbHNlXCI+RmFpbDwvbWQtcmFkaW8tYnV0dG9uPlxcbicgK1xuICAgICcgICAgICAgIDxtZC1yYWRpby1idXR0b24gbmctdmFsdWU9XCJ0cnVlXCI+IFBhc3MgPC9tZC1yYWRpby1idXR0b24+XFxuJyArXG4gICAgJyAgICAgIDwvbWQtcmFkaW8tZ3JvdXA+XFxuJyArXG4gICAgJyAgICA8L2Rpdj5cXG4nICtcbiAgICAnICA8L2Rpdj5cXG4nICtcbiAgICAnXFxuJyArXG4gICAgJ1xcbicgK1xuICAgICcgICAgPGRpdiBjbGFzcz1cIndvcmtmbG93LWFjdGlvbnMgbWQtcGFkZGluZyBtZC13aGl0ZWZyYW1lLXo0XCI+XFxuJyArXG4gICAgJyAgICAgIDxtZC1idXR0b24gY2xhc3M9XCJtZC1wcmltYXJ5IG1kLWh1ZS0xXCIgbmctY2xpY2s9XCJjdHJsLmJhY2soJGV2ZW50KVwiPkJhY2s8L21kLWJ1dHRvbj5cXG4nICtcbiAgICAnICAgICAgPG1kLWJ1dHRvbiBjbGFzcz1cIm1kLXByaW1hcnlcIiBuZy1jbGljaz1cImN0cmwuZG9uZSgkZXZlbnQpXCI+Q29udGludWU8L21kLWJ1dHRvbj5cXG4nICtcbiAgICAnICAgIDwvZGl2PjwhLS0gd29ya2Zsb3ctYWN0aW9ucy0tPlxcbicgK1xuICAgICcnKTtcbn1dKTtcbiIsInZhciBuZ01vZHVsZTtcbnRyeSB7XG4gIG5nTW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ3dmbS53b3Jrb3JkZXInKTtcbn0gY2F0Y2ggKGUpIHtcbiAgbmdNb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgnd2ZtLndvcmtvcmRlcicsIFtdKTtcbn1cblxubmdNb2R1bGUucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbiAoJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KCd3Zm0tdGVtcGxhdGUvdmVoaWNsZS1pbnNwZWN0aW9uLnRwbC5odG1sJyxcbiAgICAnPCEtLVxcbicgK1xuICAgICcgQ09ORklERU5USUFMXFxuJyArXG4gICAgJyBDb3B5cmlnaHQgMjAxNiBSZWQgSGF0LCBJbmMuIGFuZC9vciBpdHMgYWZmaWxpYXRlcy5cXG4nICtcbiAgICAnIFRoaXMgaXMgdW5wdWJsaXNoZWQgcHJvcHJpZXRhcnkgc291cmNlIGNvZGUgb2YgUmVkIEhhdC5cXG4nICtcbiAgICAnLS0+XFxuJyArXG4gICAgJ1xcbicgK1xuICAgICcgIDxtZC1zdWJoZWFkZXI+VmVoaWNsZSBJbnNwZWN0aW9uPC9tZC1zdWJoZWFkZXI+XFxuJyArXG4gICAgJ1xcbicgK1xuICAgICcgIDxtZC1saXN0IGNsYXNzPVwicmlzay1hc3Nlc3NtZW50XCI+XFxuJyArXG4gICAgJ1xcbicgK1xuICAgICcgICAgPG1kLWxpc3QtaXRlbSBjbGFzcz1cIm1kLTItbGluZVwiID5cXG4nICtcbiAgICAnICAgICAgPG1kLWljb24gbWQtZm9udC1zZXQ9XCJtYXRlcmlhbC1pY29uc1wiPmxvY2FsX2dhc19zdGF0aW9uPC9tZC1pY29uPlxcbicgK1xuICAgICcgICAgICA8ZGl2IGNsYXNzPVwibWQtbGlzdC1pdGVtLXRleHRcIj5cXG4nICtcbiAgICAnICAgICAgICA8aDM+e3t2ZWhpY2xlSW5zcGVjdGlvbi5mdWVsfX0gJTwvaDM+XFxuJyArXG4gICAgJyAgICAgICAgPHA+RnVlbDwvcD5cXG4nICtcbiAgICAnICAgICAgPC9kaXY+XFxuJyArXG4gICAgJyAgICA8bWQtZGl2aWRlcj48L21kLWRpdmlkZXI+XFxuJyArXG4gICAgJyAgICA8L21kLWxpc3QtaXRlbT5cXG4nICtcbiAgICAnXFxuJyArXG4gICAgJyAgICA8bWQtbGlzdC1pdGVtIGNsYXNzPVwibWQtMi1saW5lXCIgPlxcbicgK1xuICAgICcgICAgICA8bWQtaWNvbiBtZC1mb250LXNldD1cIm1hdGVyaWFsLWljb25zXCIgbmctaWY9XCJ2ZWhpY2xlSW5zcGVjdGlvbi50aXJlc1wiIGNsYXNzPVwic3VjY2Vzc1wiPmNoZWNrX2NpcmNsZTwvbWQtaWNvbj5cXG4nICtcbiAgICAnICAgICAgPG1kLWljb24gbWQtZm9udC1zZXQ9XCJtYXRlcmlhbC1pY29uc1wiIG5nLWlmPVwiISB2ZWhpY2xlSW5zcGVjdGlvbi50aXJlc1wiIGNsYXNzPVwiZGFuZ2VyXCI+Y2FuY2VsPC9tZC1pY29uPlxcbicgK1xuICAgICcgICAgICA8ZGl2IGNsYXNzPVwibWQtbGlzdC1pdGVtLXRleHRcIj5cXG4nICtcbiAgICAnICAgICAgICA8aDMgbmctaWY9XCJ2ZWhpY2xlSW5zcGVjdGlvbi50aXJlc1wiPlBhc3M8L2gzPlxcbicgK1xuICAgICcgICAgICAgIDxoMyBuZy1pZj1cIiEgdmVoaWNsZUluc3BlY3Rpb24udGlyZXNcIj5GYWlsPC9oMz5cXG4nICtcbiAgICAnICAgICAgICA8cD5UaXJlczwvcD5cXG4nICtcbiAgICAnICAgICAgPC9kaXY+XFxuJyArXG4gICAgJyAgICA8bWQtZGl2aWRlcj48L21kLWRpdmlkZXI+XFxuJyArXG4gICAgJyAgICA8L21kLWxpc3QtaXRlbT5cXG4nICtcbiAgICAnXFxuJyArXG4gICAgJyAgICA8bWQtbGlzdC1pdGVtIGNsYXNzPVwibWQtMi1saW5lXCIgPlxcbicgK1xuICAgICcgICAgICA8bWQtaWNvbiBtZC1mb250LXNldD1cIm1hdGVyaWFsLWljb25zXCIgbmctaWY9XCJ2ZWhpY2xlSW5zcGVjdGlvbi5saWdodHNcIiBjbGFzcz1cInN1Y2Nlc3NcIj5jaGVja19jaXJjbGU8L21kLWljb24+XFxuJyArXG4gICAgJyAgICAgIDxtZC1pY29uIG1kLWZvbnQtc2V0PVwibWF0ZXJpYWwtaWNvbnNcIiBuZy1pZj1cIiEgdmVoaWNsZUluc3BlY3Rpb24ubGlnaHRzXCIgY2xhc3M9XCJkYW5nZXJcIj5jYW5jZWw8L21kLWljb24+XFxuJyArXG4gICAgJyAgICAgIDxkaXYgY2xhc3M9XCJtZC1saXN0LWl0ZW0tdGV4dFwiPlxcbicgK1xuICAgICcgICAgICAgIDxoMyBuZy1pZj1cInZlaGljbGVJbnNwZWN0aW9uLmxpZ2h0c1wiPlBhc3M8L2gzPlxcbicgK1xuICAgICcgICAgICAgIDxoMyBuZy1pZj1cIiEgdmVoaWNsZUluc3BlY3Rpb24ubGlnaHRzXCI+RmFpbDwvaDM+XFxuJyArXG4gICAgJyAgICAgICAgPHA+TGlnaHRzPC9wPlxcbicgK1xuICAgICcgICAgICA8L2Rpdj5cXG4nICtcbiAgICAnICAgIDwvbWQtbGlzdC1pdGVtPlxcbicgK1xuICAgICdcXG4nICtcbiAgICAnPC9tZC1saXN0PlxcbicgK1xuICAgICcnKTtcbn1dKTtcbiIsIi8qKlxuKiBDT05GSURFTlRJQUxcbiogQ29weXJpZ2h0IDIwMTYgUmVkIEhhdCwgSW5jLiBhbmQvb3IgaXRzIGFmZmlsaWF0ZXMuXG4qIFRoaXMgaXMgdW5wdWJsaXNoZWQgcHJvcHJpZXRhcnkgc291cmNlIGNvZGUgb2YgUmVkIEhhdC5cbioqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgXyA9IHJlcXVpcmUoJ2xvZGFzaCcpO1xuXG52YXIgbmdNb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgnd2ZtLnZlaGljbGUtaW5zcGVjdGlvbicsIFsnd2ZtLmNvcmUubWVkaWF0b3InXSk7XG5cbnJlcXVpcmUoJy4uLy4uL2Rpc3QnKTtcblxubmdNb2R1bGUuZGlyZWN0aXZlKCd2ZWhpY2xlSW5zcGVjdGlvbicsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlLCBtZWRpYXRvcikge1xuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnRSdcbiAgLCB0ZW1wbGF0ZTogJHRlbXBsYXRlQ2FjaGUuZ2V0KCd3Zm0tdGVtcGxhdGUvdmVoaWNsZS1pbnNwZWN0aW9uLnRwbC5odG1sJylcbiAgLCBzY29wZToge1xuICAgICAgdmVoaWNsZUluc3BlY3Rpb246ICc9dmFsdWUnXG4gICAgfVxuICB9O1xufSlcblxubmdNb2R1bGUuZGlyZWN0aXZlKCd2ZWhpY2xlSW5zcGVjdGlvbkZvcm0nLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSwgbWVkaWF0b3IpIHtcbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0UnXG4gICwgdGVtcGxhdGU6ICR0ZW1wbGF0ZUNhY2hlLmdldCgnd2ZtLXRlbXBsYXRlL3ZlaGljbGUtaW5zcGVjdGlvbi1mb3JtLnRwbC5odG1sJylcbiAgLCBzY29wZToge1xuICAgIH1cbiAgLCBjb250cm9sbGVyOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgc2VsZi5tb2RlbCA9IHt9O1xuICAgIHNlbGYuYmFjayA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBtZWRpYXRvci5wdWJsaXNoKCd3Zm06d29ya2Zsb3c6c3RlcDpiYWNrJyk7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICAgIHNlbGYuZG9uZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBtZWRpYXRvci5wdWJsaXNoKCd3Zm06d29ya2Zsb3c6c3RlcDpkb25lJywgc2VsZi5tb2RlbCk7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICB9XG4gICwgY29udHJvbGxlckFzOiAnY3RybCdcbiAgfTtcbn0pXG5cbm1vZHVsZS5leHBvcnRzID0gJ3dmbS52ZWhpY2xlLWluc3BlY3Rpb24nO1xuIiwicmVxdWlyZSgnLi93b3JrZmxvdy1mb3JtLnRwbC5odG1sLmpzJyk7XG5yZXF1aXJlKCcuL3dvcmtmbG93LXByb2dyZXNzLnRwbC5odG1sLmpzJyk7XG5yZXF1aXJlKCcuL3dvcmtmbG93LXN0ZXAtZGV0YWlsLnRwbC5odG1sLmpzJyk7XG5yZXF1aXJlKCcuL3dvcmtmbG93LXN0ZXAtZm9ybS50cGwuaHRtbC5qcycpO1xuIiwidmFyIG5nTW9kdWxlO1xudHJ5IHtcbiAgbmdNb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgnd2ZtLndvcmtmbG93LmRpcmVjdGl2ZXMnKTtcbn0gY2F0Y2ggKGUpIHtcbiAgbmdNb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgnd2ZtLndvcmtmbG93LmRpcmVjdGl2ZXMnLCBbXSk7XG59XG5cbm5nTW9kdWxlLnJ1bihbJyR0ZW1wbGF0ZUNhY2hlJywgZnVuY3Rpb24gKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dCgnd2ZtLXRlbXBsYXRlL3dvcmtmbG93LWZvcm0udHBsLmh0bWwnLFxuICAgICc8IS0tXFxuJyArXG4gICAgJyBDT05GSURFTlRJQUxcXG4nICtcbiAgICAnIENvcHlyaWdodCAyMDE2IFJlZCBIYXQsIEluYy4gYW5kL29yIGl0cyBhZmZpbGlhdGVzLlxcbicgK1xuICAgICcgVGhpcyBpcyB1bnB1Ymxpc2hlZCBwcm9wcmlldGFyeSBzb3VyY2UgY29kZSBvZiBSZWQgSGF0LlxcbicgK1xuICAgICctLT5cXG4nICtcbiAgICAnPG1kLXRvb2xiYXIgY2xhc3M9XCJjb250ZW50LXRvb2xiYXIgbWQtcHJpbWFyeVwiPlxcbicgK1xuICAgICcgIDxkaXYgY2xhc3M9XCJtZC10b29sYmFyLXRvb2xzXCI+XFxuJyArXG4gICAgJyAgICA8aDM+e3tjdHJsLm1vZGVsLmlkID8gXFwnVXBkYXRlXFwnIDogXFwnQ3JlYXRlXFwnfX0gd29ya2Zsb3c8L2gzPlxcbicgK1xuICAgICcgICAgPHNwYW4gZmxleD48L3NwYW4+XFxuJyArXG4gICAgJyAgICA8bWQtYnV0dG9uIGNsYXNzPVwibWQtaWNvbi1idXR0b25cIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIiBuZy1jbGljaz1cImN0cmwuc2VsZWN0V29ya2Zsb3coJGV2ZW50LCB3b3JrZmxvdylcIj5cXG4nICtcbiAgICAnICAgICAgPG1kLWljb24gbWQtZm9udC1zZXQ9XCJtYXRlcmlhbC1pY29uc1wiPmNsb3NlPC9tZC1pY29uPlxcbicgK1xuICAgICcgICAgPC9tZC1idXR0b24+XFxuJyArXG4gICAgJyAgPC9kaXY+XFxuJyArXG4gICAgJzwvbWQtdG9vbGJhcj5cXG4nICtcbiAgICAnXFxuJyArXG4gICAgJzxkaXYgY2xhc3M9XCJ3Zm0tbWFpbmNvbC1zY3JvbGxcIj5cXG4nICtcbiAgICAnPGZvcm0gbmFtZT1cIndvcmtmbG93Rm9ybVwiIG5nLXN1Ym1pdD1cImN0cmwuZG9uZSh3b3JrZmxvd0Zvcm0uJHZhbGlkKVwiIG5vdmFsaWRhdGUgbGF5b3V0LXBhZGRpbmcgbGF5b3V0LW1hcmdpbj5cXG4nICtcbiAgICAnXFxuJyArXG4gICAgJzxkaXY+XFxuJyArXG4gICAgJyAgPG1kLWlucHV0LWNvbnRhaW5lciBjbGFzcz1cIm1kLWJsb2NrXCI+XFxuJyArXG4gICAgJyAgICA8bGFiZWw+VGl0bGU8L2xhYmVsPlxcbicgK1xuICAgICcgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0aXRsZVwiIG5hbWU9XCJ0aXRsZVwiIG5nLW1vZGVsPVwiY3RybC5tb2RlbC50aXRsZVwiIHJlcXVpcmVkPlxcbicgK1xuICAgICcgICAgPGRpdiBuZy1tZXNzYWdlcz1cIndvcmtmbG93LnRpdGxlLiRlcnJvclwiIG5nLWlmPVwiY3RybC5zdWJtaXR0ZWQgfHwgd29ya2Zsb3dGb3JtLnRpdGxlLiRkaXJ0eVwiPlxcbicgK1xuICAgICcgICAgICA8ZGl2IG5nLW1lc3NhZ2U9XCJyZXF1aXJlZFwiPkEgdGl0bGUgaXMgcmVxdWlyZWQuPC9kaXY+XFxuJyArXG4gICAgJyAgICA8L2Rpdj5cXG4nICtcbiAgICAnICA8L21kLWlucHV0LWNvbnRhaW5lcj5cXG4nICtcbiAgICAnPC9kaXY+XFxuJyArXG4gICAgJ1xcbicgK1xuICAgICcgIDxtZC1idXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwibWQtcmFpc2VkIG1kLXByaW1hcnlcIj57e2N0cmwubW9kZWwuaWQgPyBcXCdVcGRhdGVcXCcgOiBcXCdDcmVhdGVcXCd9fSBXb3JrZmxvdzwvbWQtYnV0dG9uPlxcbicgK1xuICAgICc8L2Zvcm0+XFxuJyArXG4gICAgJzwvZGl2PlxcbicgK1xuICAgICcnKTtcbn1dKTtcbiIsInZhciBuZ01vZHVsZTtcbnRyeSB7XG4gIG5nTW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ3dmbS53b3JrZmxvdy5kaXJlY3RpdmVzJyk7XG59IGNhdGNoIChlKSB7XG4gIG5nTW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ3dmbS53b3JrZmxvdy5kaXJlY3RpdmVzJywgW10pO1xufVxuXG5uZ01vZHVsZS5ydW4oWyckdGVtcGxhdGVDYWNoZScsIGZ1bmN0aW9uICgkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoJ3dmbS10ZW1wbGF0ZS93b3JrZmxvdy1wcm9ncmVzcy50cGwuaHRtbCcsXG4gICAgJzwhLS1cXG4nICtcbiAgICAnIENPTkZJREVOVElBTFxcbicgK1xuICAgICcgQ29weXJpZ2h0IDIwMTYgUmVkIEhhdCwgSW5jLiBhbmQvb3IgaXRzIGFmZmlsaWF0ZXMuXFxuJyArXG4gICAgJyBUaGlzIGlzIHVucHVibGlzaGVkIHByb3ByaWV0YXJ5IHNvdXJjZSBjb2RlIG9mIFJlZCBIYXQuXFxuJyArXG4gICAgJy0tPlxcbicgK1xuICAgICc8ZGl2IGNsYXNzPVwid29ya2Zsb3ctcHJvZ3Jlc3NcIiBuZy1jbGFzcz1cIntjbG9zZTogY3RybC5jbG9zZWR9XCI+XFxuJyArXG4gICAgJ1xcbicgK1xuICAgICc8bWQtYnV0dG9uIGNsYXNzPVwibWQtaWNvbi1idXR0b24gbWQtd2FybSBleHBhbmQtY29sbGFwc2VcIj5cXG4nICtcbiAgICAnICA8bWQtaWNvbiBuZy1zaG93PVwiY3RybC5jbG9zZWRcIiBtZC1mb250LXNldD1cIm1hdGVyaWFsLWljb25zXCIgbmctY2xpY2s9XCJjdHJsLm9wZW4oKVwiPmtleWJvYXJkX2Fycm93X2Rvd248L21kLWljb24+XFxuJyArXG4gICAgJyAgPG1kLWljb24gbmctc2hvdz1cIiFjdHJsLmNsb3NlZFwiIG1kLWZvbnQtc2V0PVwibWF0ZXJpYWwtaWNvbnNcIiBuZy1jbGljaz1cImN0cmwuY2xvc2UoKVwiPmtleWJvYXJkX2Fycm93X3VwPC9tZC1pY29uPlxcbicgK1xuICAgICc8L21kLWJ1dHRvbj5cXG4nICtcbiAgICAnXFxuJyArXG4gICAgJzxkaXYgY2xhc3M9XCJzY3JvbGwtYm94XCI+XFxuJyArXG4gICAgJyAgPG9sPlxcbicgK1xuICAgICcgICAgPGxpIG5nLWNsYXNzPVwie2FjdGl2ZTogXFwnLTFcXCcgPT0gY3RybC5zdGVwSW5kZXgsIGNvbXBsZXRlOiAtMSA8IGN0cmwuc3RlcEluZGV4fVwiPlxcbicgK1xuICAgICcgICAgICA8c3BhbiBjbGFzcz1cIm1kLWNhcHRpb25cIj48bWQtaWNvbiBtZC1mb250LXNldD1cIm1hdGVyaWFsLWljb25zXCI+dmlzaWJpbGl0eTwvbWQtaWNvbj48L3NwYW4+T3ZlcnZpZXdcXG4nICtcbiAgICAnICAgIDwvbGk+XFxuJyArXG4gICAgJyAgICA8bGkgbmctcmVwZWF0PVwic3RlcCBpbiBjdHJsLnN0ZXBzXCIgbmctY2xhc3M9XCJ7YWN0aXZlOiAkaW5kZXggPT0gY3RybC5zdGVwSW5kZXgsIGNvbXBsZXRlOiAkaW5kZXggPCBjdHJsLnN0ZXBJbmRleH1cIj5cXG4nICtcbiAgICAnICAgICAgPHNwYW4gY2xhc3M9XCJtZC1jYXB0aW9uXCI+e3skaW5kZXggKyAxfX08L3NwYW4+e3tzdGVwLm5hbWV9fVxcbicgK1xuICAgICcgICAgPC9saT5cXG4nICtcbiAgICAnICAgIDxsaSBuZy1jbGFzcz1cInthY3RpdmU6IGN0cmwuc3RlcHMubGVuZ3RoIDw9IGN0cmwuc3RlcEluZGV4LCBjb21wbGV0ZTogY3RybC5zdGVwcy5sZW5ndGggPD0gY3RybC5zdGVwSW5kZXh9XCI+XFxuJyArXG4gICAgJyAgICAgIDxzcGFuIGNsYXNzPVwibWQtY2FwdGlvblwiPjxtZC1pY29uIG1kLWZvbnQtc2V0PVwibWF0ZXJpYWwtaWNvbnNcIj5kb25lPC9tZC1pY29uPjwvc3Bhbj5TdW1tYXJ5XFxuJyArXG4gICAgJyAgICA8L2xpPlxcbicgK1xuICAgICcgIDwvb2w+XFxuJyArXG4gICAgJzwvZGl2PlxcbicgK1xuICAgICdcXG4nICtcbiAgICAnXFxuJyArXG4gICAgJzwvZGl2PjwhLS0gd29ya2Zsb3ctcHJvZ3Jlc3MgLS0+XFxuJyArXG4gICAgJycpO1xufV0pO1xuIiwidmFyIG5nTW9kdWxlO1xudHJ5IHtcbiAgbmdNb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgnd2ZtLndvcmtmbG93LmRpcmVjdGl2ZXMnKTtcbn0gY2F0Y2ggKGUpIHtcbiAgbmdNb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgnd2ZtLndvcmtmbG93LmRpcmVjdGl2ZXMnLCBbXSk7XG59XG5cbm5nTW9kdWxlLnJ1bihbJyR0ZW1wbGF0ZUNhY2hlJywgZnVuY3Rpb24gKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dCgnd2ZtLXRlbXBsYXRlL3dvcmtmbG93LXN0ZXAtZGV0YWlsLnRwbC5odG1sJyxcbiAgICAnPGgyIGNsYXNzPVwibWQtdGl0bGVcIj57e3N0ZXAubmFtZX19PC9oMj5cXG4nICtcbiAgICAnPG1kLWxpc3Q+XFxuJyArXG4gICAgJyAgPG1kLWxpc3QtaXRlbSBjbGFzcz1cIm1kLTItbGluZVwiID5cXG4nICtcbiAgICAnICAgIDxtZC1pY29uIG1kLWZvbnQtc2V0PVwibWF0ZXJpYWwtaWNvbnNcIj5sYWJlbDwvbWQtaWNvbj5cXG4nICtcbiAgICAnICAgIDxkaXYgY2xhc3M9XCJtZC1saXN0LWl0ZW0tdGV4dFwiPlxcbicgK1xuICAgICcgICAgICA8aDM+e3tzdGVwLmNvZGV9fTwvaDM+XFxuJyArXG4gICAgJyAgICAgIDxwPkNvZGU8L3A+XFxuJyArXG4gICAgJyAgICA8L2Rpdj5cXG4nICtcbiAgICAnICA8L21kLWxpc3QtaXRlbT5cXG4nICtcbiAgICAnICA8bWQtZGl2aWRlcj48L21kLWRpdmlkZXI+XFxuJyArXG4gICAgJyAgPG1kLWRpdmlkZXI+PC9tZC1kaXZpZGVyPlxcbicgK1xuICAgICcgIDxkaXYgbmctc2hvdz1cInN0ZXAuZm9ybUlkXCI+XFxuJyArXG4gICAgJyAgICA8bWQtbGlzdC1pdGVtIGNsYXNzPVwibWQtMi1saW5lXCI+XFxuJyArXG4gICAgJyAgICAgIDxtZC1pY29uIG1kLWZvbnQtc2V0PVwibWF0ZXJpYWwtaWNvbnNcIj5sYWJlbDwvbWQtaWNvbj5cXG4nICtcbiAgICAnICAgICAgPGRpdiBjbGFzcz1cIm1kLWxpc3QtaXRlbS10ZXh0XCI+XFxuJyArXG4gICAgJyAgICAgICAgPGgzPnt7c3RlcC5mb3JtSWR9fTwvaDM+XFxuJyArXG4gICAgJyAgICAgICAgPHA+Rm9ybUlkPC9wPlxcbicgK1xuICAgICcgICAgICA8L2Rpdj5cXG4nICtcbiAgICAnICAgIDwvbWQtbGlzdC1pdGVtPlxcbicgK1xuICAgICcgICAgPG1kLWRpdmlkZXI+PC9tZC1kaXZpZGVyPlxcbicgK1xuICAgICcgIDwvZGl2PlxcbicgK1xuICAgICc8L21kLWxpc3Q+XFxuJyArXG4gICAgJzxkaXYgbmctc2hvdz1cInN0ZXAudGVtcGxhdGVzXCI+XFxuJyArXG4gICAgJyAgPGRpdiBuZy1zaG93PVwic3RlcC50ZW1wbGF0ZXMudmlld1wiPlxcbicgK1xuICAgICcgICAgPG1kLWxpc3QtaXRlbSBjbGFzcz1cIm1kLTItbGluZVwiPlxcbicgK1xuICAgICcgICAgICA8bWQtaWNvbiBtZC1mb250LXNldD1cIm1hdGVyaWFsLWljb25zXCI+bGFiZWw8L21kLWljb24+XFxuJyArXG4gICAgJyAgICAgIDxkaXYgY2xhc3M9XCJtZC1saXN0LWl0ZW0tdGV4dFwiPlxcbicgK1xuICAgICcgICAgICAgIDxoMz57e3N0ZXAudGVtcGxhdGVzLnZpZXd9fTwvaDM+XFxuJyArXG4gICAgJyAgICAgICAgPHA+VGVtcGxhdGUgdmlldzwvcD5cXG4nICtcbiAgICAnICAgICAgPC9kaXY+XFxuJyArXG4gICAgJyAgICA8L21kLWxpc3QtaXRlbT5cXG4nICtcbiAgICAnICAgIDxtZC1kaXZpZGVyPjwvbWQtZGl2aWRlcj5cXG4nICtcbiAgICAnICA8L2Rpdj5cXG4nICtcbiAgICAnICA8ZGl2IG5nLXNob3c9XCJzdGVwLnRlbXBsYXRlcy5mb3JtXCI+XFxuJyArXG4gICAgJyAgICA8bWQtbGlzdC1pdGVtIGNsYXNzPVwibWQtMi1saW5lXCI+XFxuJyArXG4gICAgJyAgICAgIDxtZC1pY29uIG1kLWZvbnQtc2V0PVwibWF0ZXJpYWwtaWNvbnNcIj5sYWJlbDwvbWQtaWNvbj5cXG4nICtcbiAgICAnICAgICAgPGRpdiBjbGFzcz1cIm1kLWxpc3QtaXRlbS10ZXh0XCI+XFxuJyArXG4gICAgJyAgICAgICAgPGgzPnt7c3RlcC50ZW1wbGF0ZXMuZm9ybX19PC9oMz5cXG4nICtcbiAgICAnICAgICAgICA8cD5UZW1wbGF0ZSBmb3JtPC9wPlxcbicgK1xuICAgICcgICAgICA8L2Rpdj5cXG4nICtcbiAgICAnICAgIDwvbWQtbGlzdC1pdGVtPlxcbicgK1xuICAgICcgICAgPG1kLWRpdmlkZXI+PC9tZC1kaXZpZGVyPlxcbicgK1xuICAgICc8L2Rpdj5cXG4nICtcbiAgICAnPC9kaXY+XFxuJyArXG4gICAgJzwvbWQtbGlzdD5cXG4nICtcbiAgICAnJyk7XG59XSk7XG4iLCJ2YXIgbmdNb2R1bGU7XG50cnkge1xuICBuZ01vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCd3Zm0ud29ya2Zsb3cuZGlyZWN0aXZlcycpO1xufSBjYXRjaCAoZSkge1xuICBuZ01vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCd3Zm0ud29ya2Zsb3cuZGlyZWN0aXZlcycsIFtdKTtcbn1cblxubmdNb2R1bGUucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbiAoJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KCd3Zm0tdGVtcGxhdGUvd29ya2Zsb3ctc3RlcC1mb3JtLnRwbC5odG1sJyxcbiAgICAnPCEtLVxcbicgK1xuICAgICcgQ09ORklERU5USUFMXFxuJyArXG4gICAgJyBDb3B5cmlnaHQgMjAxNiBSZWQgSGF0LCBJbmMuIGFuZC9vciBpdHMgYWZmaWxpYXRlcy5cXG4nICtcbiAgICAnIFRoaXMgaXMgdW5wdWJsaXNoZWQgcHJvcHJpZXRhcnkgc291cmNlIGNvZGUgb2YgUmVkIEhhdC5cXG4nICtcbiAgICAnLS0+XFxuJyArXG4gICAgJzxtZC10b29sYmFyIGNsYXNzPVwiY29udGVudC10b29sYmFyIG1kLXByaW1hcnlcIiBuZy1zaG93PVwic3RlcFwiPlxcbicgK1xuICAgICcgIDxkaXYgY2xhc3M9XCJtZC10b29sYmFyLXRvb2xzXCI+XFxuJyArXG4gICAgJyAgICA8aDM+VXBkYXRlIHN0ZXA8L2gzPlxcbicgK1xuICAgICcgICAgPHNwYW4gZmxleD48L3NwYW4+XFxuJyArXG4gICAgJyAgICA8bWQtYnV0dG9uIGNsYXNzPVwibWQtaWNvbi1idXR0b25cIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIiBuZy1jbGljaz1cImN0cmwuc2VsZWN0V29ya2Zsb3coJGV2ZW50LCB3b3JrZmxvdylcIj5cXG4nICtcbiAgICAnICAgICAgPG1kLWljb24gbWQtZm9udC1zZXQ9XCJtYXRlcmlhbC1pY29uc1wiPmNsb3NlPC9tZC1pY29uPlxcbicgK1xuICAgICcgICAgPC9tZC1idXR0b24+XFxuJyArXG4gICAgJyAgPC9kaXY+XFxuJyArXG4gICAgJzwvbWQtdG9vbGJhcj5cXG4nICtcbiAgICAnXFxuJyArXG4gICAgJzxmb3JtIG5hbWU9XCJ3b3JrZmxvd1N0ZXBGb3JtXCIgbmctc3VibWl0PVwiY3RybC5kb25lKHdvcmtmbG93U3RlcEZvcm0uJHZhbGlkKVwiIG5vdmFsaWRhdGUgbGF5b3V0LXBhZGRpbmcgbGF5b3V0LW1hcmdpbj5cXG4nICtcbiAgICAnXFxuJyArXG4gICAgJzxkaXY+XFxuJyArXG4gICAgJyAgPG1kLWlucHV0LWNvbnRhaW5lciBjbGFzcz1cIm1kLWJsb2NrXCI+XFxuJyArXG4gICAgJyAgICA8bGFiZWw+Q29kZTwvbGFiZWw+XFxuJyArXG4gICAgJyAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImNvZGVcIiBuYW1lPVwiY29kZVwiIG5nLW1vZGVsPVwiY3RybC5tb2RlbC5zdGVwLmNvZGVcIiByZXF1aXJlZD5cXG4nICtcbiAgICAnICAgIDxkaXYgbmctbWVzc2FnZXM9XCJ3b3JrZmxvdy5tb2RlbC5zdGVwLiRlcnJvclwiIG5nLWlmPVwiY3RybC5zdWJtaXR0ZWQgfHwgd29ya2Zsb3dGb3JtLnRpdGxlLiRkaXJ0eVwiPlxcbicgK1xuICAgICcgICAgICA8ZGl2IG5nLW1lc3NhZ2U9XCJyZXF1aXJlZFwiPkEgY29kZSBpcyByZXF1aXJlZC48L2Rpdj5cXG4nICtcbiAgICAnICAgIDwvZGl2PlxcbicgK1xuICAgICcgIDwvbWQtaW5wdXQtY29udGFpbmVyPlxcbicgK1xuICAgICcgIDxtZC1pbnB1dC1jb250YWluZXIgY2xhc3M9XCJtZC1ibG9ja1wiPlxcbicgK1xuICAgICcgICAgPGxhYmVsPk5hbWU8L2xhYmVsPlxcbicgK1xuICAgICcgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJuYW1lXCIgbmFtZT1cIm5hbWVcIiBuZy1tb2RlbD1cImN0cmwubW9kZWwuc3RlcC5uYW1lXCIgcmVxdWlyZWQ+XFxuJyArXG4gICAgJyAgICA8ZGl2IG5nLW1lc3NhZ2VzPVwid29ya2Zsb3cubmFtZS4kZXJyb3JcIiBuZy1pZj1cImN0cmwuc3VibWl0dGVkIHx8IHdvcmtmbG93Rm9ybS5uYW1lLiRkaXJ0eVwiPlxcbicgK1xuICAgICcgICAgICA8ZGl2IG5nLW1lc3NhZ2U9XCJyZXF1aXJlZFwiPkEgbmFtZSBpcyByZXF1aXJlZC48L2Rpdj5cXG4nICtcbiAgICAnICAgIDwvZGl2PlxcbicgK1xuICAgICcgIDwvbWQtaW5wdXQtY29udGFpbmVyPlxcbicgK1xuICAgICcgIDxtZC1pbnB1dC1jb250YWluZXIgY2xhc3M9XCJtZC1ibG9ja1wiPlxcbicgK1xuICAgICcgICAgPGxhYmVsPkZvcm1JRDwvbGFiZWw+XFxuJyArXG4gICAgJyAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImZvcm1JZFwiIG5hbWU9XCJmb3JtSWRcIiBuZy1tb2RlbD1cImN0cmwubW9kZWwuc3RlcC5mb3JtSWRcIj5cXG4nICtcbiAgICAnICA8L21kLWlucHV0LWNvbnRhaW5lcj5cXG4nICtcbiAgICAnICA8bWQtaW5wdXQtY29udGFpbmVyIGNsYXNzPVwibWQtYmxvY2tcIj5cXG4nICtcbiAgICAnICAgIDxsYWJlbD5mb3JtIHRlbXBsYXRlPC9sYWJlbD5cXG4nICtcbiAgICAnICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiZm9ybVwiIG5hbWU9XCJmb3JtXCIgbmctbW9kZWw9XCJjdHJsLm1vZGVsLnN0ZXAudGVtcGxhdGVzLmZvcm1cIj5cXG4nICtcbiAgICAnICA8L21kLWlucHV0LWNvbnRhaW5lcj5cXG4nICtcbiAgICAnICA8bWQtaW5wdXQtY29udGFpbmVyIGNsYXNzPVwibWQtYmxvY2tcIj5cXG4nICtcbiAgICAnICAgIDxsYWJlbD52aWV3IHRlbXBsYXRlPC9sYWJlbD5cXG4nICtcbiAgICAnICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwidmlld1wiIG5hbWU9XCJ2aWV3XCIgbmctbW9kZWw9XCJjdHJsLm1vZGVsLnN0ZXAudGVtcGxhdGVzLnZpZXdcIj5cXG4nICtcbiAgICAnICA8L21kLWlucHV0LWNvbnRhaW5lcj5cXG4nICtcbiAgICAnXFxuJyArXG4gICAgJzwvZGl2PlxcbicgK1xuICAgICdcXG4nICtcbiAgICAnICA8bWQtYnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cIm1kLXJhaXNlZCBtZC1wcmltYXJ5XCI+e3tjdHJsLm1vZGVsLmlzTmV3ID8gXFwnQWRkXFwnIDogXFwnVXBkYXRlXFwnfX0gc3RlcDwvbWQtYnV0dG9uPlxcbicgK1xuICAgICc8L2Zvcm0+XFxuJyArXG4gICAgJycpO1xufV0pO1xuIiwiLyoqXG4qIENPTkZJREVOVElBTFxuKiBDb3B5cmlnaHQgMjAxNiBSZWQgSGF0LCBJbmMuIGFuZC9vciBpdHMgYWZmaWxpYXRlcy5cbiogVGhpcyBpcyB1bnB1Ymxpc2hlZCBwcm9wcmlldGFyeSBzb3VyY2UgY29kZSBvZiBSZWQgSGF0LlxuKiovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBfID0gcmVxdWlyZSgnbG9kYXNoJyk7XG5cbnZhciBuZ01vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCd3Zm0ud29ya2Zsb3cuZGlyZWN0aXZlcycsIFtcbiAgJ3dmbS5jb3JlLm1lZGlhdG9yJ1xuXSk7XG5tb2R1bGUuZXhwb3J0cyA9ICd3Zm0ud29ya2Zsb3cuZGlyZWN0aXZlcyc7XG5cbnJlcXVpcmUoJy4uLy4uL2Rpc3QnKTtcblxubmdNb2R1bGUuZGlyZWN0aXZlKCd3b3JrZmxvd1Byb2dyZXNzJywgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUsICR0aW1lb3V0KSB7XG4gIGZ1bmN0aW9uIHBhcnNlU3RlcEluZGV4KGN0cmwsIHN0ZXBJbmRleCkge1xuICAgIGN0cmwuc3RlcEluZGV4ID0gc3RlcEluZGV4O1xuICAgIGN0cmwuc3RlcCA9IGN0cmwuc3RlcHNbY3RybC5zdGVwSW5kZXhdO1xuICB9XG4gIGZ1bmN0aW9uIHNjcm9sbFRvQWN0aXZlKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50ID0gZWxlbWVudFswXTtcbiAgICB2YXIgYWN0aXZlID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdsaS5hY3RpdmUnKTtcbiAgICBpZiAoIWFjdGl2ZSkge1xuICAgICAgYWN0aXZlID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdsaScpO1xuICAgIH07XG4gICAgdmFyIHNjcm9sbGVyID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2Nyb2xsLWJveCcpO1xuICAgIHZhciBvZmZzZXQgPSBhY3RpdmUub2Zmc2V0VG9wO1xuICAgIHNjcm9sbGVyLnNjcm9sbFRvcCA9IG9mZnNldDtcbiAgfVxuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnRSdcbiAgLCB0ZW1wbGF0ZTogJHRlbXBsYXRlQ2FjaGUuZ2V0KCd3Zm0tdGVtcGxhdGUvd29ya2Zsb3ctcHJvZ3Jlc3MudHBsLmh0bWwnKVxuICAsIHNjb3BlOiB7XG4gICAgICBzdGVwSW5kZXg6ICc9JyxcbiAgICAgIHdvcmtmbG93OiAnPSdcbiAgICB9XG4gICwgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuICAgICAgJHRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHNjcm9sbFRvQWN0aXZlKGVsZW1lbnQpO1xuICAgICAgfSwgMCk7XG4gICAgfVxuICAsIGNvbnRyb2xsZXI6IGZ1bmN0aW9uKCRzY29wZSwgJGVsZW1lbnQpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIHNlbGYud29ya2Zsb3cgPSAkc2NvcGUud29ya2Zsb3c7XG4gICAgICBzZWxmLnN0ZXBzID0gJHNjb3BlLndvcmtmbG93LnN0ZXBzO1xuICAgICAgc2VsZi5vcGVuID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHNlbGYuY2xvc2VkID0gZmFsc2U7XG4gICAgICB9XG4gICAgICBzZWxmLmNsb3NlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHNjcm9sbFRvQWN0aXZlKCRlbGVtZW50KTtcbiAgICAgICAgc2VsZi5jbG9zZWQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgcGFyc2VTdGVwSW5kZXgoc2VsZiwgJHNjb3BlLnN0ZXBJbmRleCA/IHBhcnNlSW50KCRzY29wZS5zdGVwSW5kZXgpIDogMClcblxuICAgICAgJHNjb3BlLiR3YXRjaCgnc3RlcEluZGV4JywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzdGVwSW5kZXggY2hhbmdlZCcpXG4gICAgICAgIHBhcnNlU3RlcEluZGV4KHNlbGYsICRzY29wZS5zdGVwSW5kZXggPyBwYXJzZUludCgkc2NvcGUuc3RlcEluZGV4KSA6IDApO1xuICAgICAgICBzZWxmLmNsb3NlZCA9IHRydWU7XG4gICAgICAgICR0aW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHNjcm9sbFRvQWN0aXZlKCRlbGVtZW50KTtcbiAgICAgICAgfSwgMCk7XG4gICAgICB9KTtcbiAgICB9XG4gICwgY29udHJvbGxlckFzOiAnY3RybCdcbiAgfTtcbn0pXG5cbi5kaXJlY3RpdmUoJ3dvcmtmbG93U3RlcCcsIGZ1bmN0aW9uKCR0ZW1wbGF0ZVJlcXVlc3QsICRjb21waWxlLCBtZWRpYXRvcikge1xuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnRSdcbiAgLCBzY29wZToge1xuICAgICAgc3RlcDogJz0nIC8vIHsgLi4uLCB0ZW1wbGF0ZTogXCJhbiBodG1sIHRlbXBsYXRlIHRvIHVzZVwiLCB0ZW1wbGF0ZVBhdGg6IFwiYSB0ZW1wbGF0ZSBwYXRoIHRvIGxvYWRcIn1cbiAgICAsIHdvcmtvcmRlcjogJz0nXG4gICAgfVxuICAsIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcbiAgICAgIHNjb3BlLiR3YXRjaCgnc3RlcCcsIGZ1bmN0aW9uKHN0ZXApIHtcbiAgICAgICAgaWYgKHNjb3BlLnN0ZXApIHtcbiAgICAgICAgICBpZiAoc2NvcGUuc3RlcC5mb3JtSWQpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuaHRtbCgnPGFwcGZvcm0gZm9ybS1pZD1cInN0ZXAuZm9ybUlkXCI+PC9hcHBmb3JtPicpO1xuICAgICAgICAgICAgJGNvbXBpbGUoZWxlbWVudC5jb250ZW50cygpKShzY29wZSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChzY29wZS5zdGVwLnRlbXBsYXRlUGF0aCkge1xuICAgICAgICAgICAgJHRlbXBsYXRlUmVxdWVzdChzY29wZS5zdGVwLnRlbXBsYXRlUGF0aCkudGhlbihmdW5jdGlvbih0ZW1wbGF0ZSkge1xuICAgICAgICAgICAgICBlbGVtZW50Lmh0bWwodGVtcGxhdGUpO1xuICAgICAgICAgICAgICAkY29tcGlsZShlbGVtZW50LmNvbnRlbnRzKCkpKHNjb3BlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbGVtZW50Lmh0bWwoc2NvcGUuc3RlcC50ZW1wbGF0ZXMuZm9ybSk7XG4gICAgICAgICAgICAkY29tcGlsZShlbGVtZW50LmNvbnRlbnRzKCkpKHNjb3BlKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgfVxuICAsIGNvbnRyb2xsZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgc2VsZi5tZWRpYXRvciA9IG1lZGlhdG9yO1xuICAgIH1cbiAgLCBjb250cm9sbGVyQXM6ICdjdHJsJ1xuICB9O1xufSlcblxuLmRpcmVjdGl2ZSgnd29ya2Zsb3dSZXN1bHQnLCBmdW5jdGlvbigkY29tcGlsZSkge1xuICB2YXIgcmVuZGVyID0gZnVuY3Rpb24oc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XG4gICAgaWYgKHNjb3BlLndvcmtmbG93LnN0ZXBzICYmIHNjb3BlLnJlc3VsdCkge1xuICAgICAgZWxlbWVudC5jaGlsZHJlbigpLnJlbW92ZSgpO1xuICAgICAgc2NvcGUud29ya2Zsb3cuc3RlcHMuZm9yRWFjaChmdW5jdGlvbihzdGVwLCBzdGVwSW5kZXgpIHtcbiAgICAgICAgaWYgKHNjb3BlLnJlc3VsdC5zdGVwUmVzdWx0cyAmJiBzY29wZS5yZXN1bHQuc3RlcFJlc3VsdHNbc3RlcC5jb2RlXSkge1xuICAgICAgICAgIGVsZW1lbnQuYXBwZW5kKCc8bWQtZGl2aWRlcj48L21kLWRpdmlkZXI+Jyk7XG4gICAgICAgICAgdmFyIHRlbXBsYXRlID0gJyc7XG4gICAgICAgICAgdGVtcGxhdGUgPSAnPHdvcmtvcmRlci1zdWJtaXNzaW9uLXJlc3VsdCdcbiAgICAgICAgICB0ZW1wbGF0ZSArPSAnIHJlc3VsdD1cInJlc3VsdC5zdGVwUmVzdWx0c1tcXCcnK3N0ZXAuY29kZSsnXFwnXVwiJ1xuICAgICAgICAgIHRlbXBsYXRlICs9ICcgc3RlcD1cIndvcmtmbG93LnN0ZXBzW1xcJycrc3RlcEluZGV4KydcXCddXCInXG4gICAgICAgICAgdGVtcGxhdGUgKz0gJz48L3dvcmtvcmRlci1zdWJtaXNzaW9uLXJlc3VsdD4nO1xuICAgICAgICAgIGNvbnNvbGUubG9nKHRlbXBsYXRlKTtcbiAgICAgICAgICBlbGVtZW50LmFwcGVuZCh0ZW1wbGF0ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgJGNvbXBpbGUoZWxlbWVudC5jb250ZW50cygpKShzY29wZSk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnRSdcbiAgLCBzY29wZToge1xuICAgICAgd29ya2Zsb3c6ICc9J1xuICAgICwgcmVzdWx0OiAnPSdcbiAgICB9XG4gICwgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuICAgICAgcmVuZGVyKHNjb3BlLCBlbGVtZW50LCBhdHRycyk7XG4gICAgfVxuICB9O1xufSlcbi5kaXJlY3RpdmUoJ3dvcmtmbG93Rm9ybScsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlLCBtZWRpYXRvcikge1xuICAgIHJldHVybiB7XG4gICAgICByZXN0cmljdDogJ0UnXG4gICAgLCB0ZW1wbGF0ZTogJHRlbXBsYXRlQ2FjaGUuZ2V0KCd3Zm0tdGVtcGxhdGUvd29ya2Zsb3ctZm9ybS50cGwuaHRtbCcpXG4gICAgLCBzY29wZToge1xuICAgICAgd29ya2Zsb3cgOiAnPXZhbHVlJ1xuICAgICAgfVxuICAgICwgY29udHJvbGxlcjogZnVuY3Rpb24oJHNjb3BlKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgc2VsZi5tb2RlbCA9IGFuZ3VsYXIuY29weSgkc2NvcGUud29ya2Zsb3cpO1xuICAgICAgICBzZWxmLnN1Ym1pdHRlZCA9IGZhbHNlO1xuICAgICAgICBzZWxmLmRvbmUgPSBmdW5jdGlvbihpc1ZhbGlkKSB7XG4gICAgICAgICAgc2VsZi5zdWJtaXR0ZWQgPSB0cnVlO1xuICAgICAgICAgIGlmIChpc1ZhbGlkKSB7XG4gICAgICAgICAgICBpZiAoIXNlbGYubW9kZWwuaWQgJiYgc2VsZi5tb2RlbC5pZCAhPT0gMCkge1xuICAgICAgICAgICAgICBzZWxmLm1vZGVsLnN0ZXBzID0gW107XG4gICAgICAgICAgICAgIG1lZGlhdG9yLnB1Ymxpc2goJ3dmbTp3b3JrZmxvdzpjcmVhdGVkJywgc2VsZi5tb2RlbCk7XG4gICAgICAgICAgICB9ICBlbHNlIHtcbiAgICAgICAgICAgICAgbWVkaWF0b3IucHVibGlzaCgnd2ZtOndvcmtmbG93OnVwZGF0ZWQnLCBzZWxmLm1vZGVsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHNlbGYuc2VsZWN0V29ya2Zsb3cgPSBmdW5jdGlvbihldmVudCwgd29ya2Zsb3cpIHtcbiAgICAgICAgICBpZih3b3JrZmxvdy5pZCkge1xuICAgICAgICAgICAgbWVkaWF0b3IucHVibGlzaCgnd2ZtOndvcmtmbG93OnNlbGVjdGVkJywgd29ya2Zsb3cpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG1lZGlhdG9yLnB1Ymxpc2goJ3dmbTp3b3JrZmxvdzpsaXN0Jyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAsIGNvbnRyb2xsZXJBczogJ2N0cmwnXG4gICAgfTtcbiAgfSlcbi5kaXJlY3RpdmUoJ3dvcmtmbG93U3RlcEZvcm0nLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSwgbWVkaWF0b3IpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVzdHJpY3Q6ICdFJ1xuICAgICwgdGVtcGxhdGU6ICR0ZW1wbGF0ZUNhY2hlLmdldCgnd2ZtLXRlbXBsYXRlL3dvcmtmbG93LXN0ZXAtZm9ybS50cGwuaHRtbCcpXG4gICAgLCBzY29wZToge1xuICAgICAgd29ya2Zsb3cgOiAnPScsXG4gICAgICBzdGVwIDogJz0nXG4gICAgICB9XG4gICAgLCBjb250cm9sbGVyOiBmdW5jdGlvbigkc2NvcGUpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB2YXIgZXhpc3RpbmdTdGVwO1xuICAgICAgICBzZWxmLnN1Ym1pdHRlZCA9IGZhbHNlO1xuICAgICAgICBpZighJHNjb3BlLnN0ZXApe1xuICAgICAgICAgIHNlbGYubW9kZWwgPSB7XG4gICAgICAgICAgICBzdGVwIDoge1xuICAgICAgICAgICAgICB0ZW1wbGF0ZXMgOiB7fVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHdvcmtmbG93IDogYW5ndWxhci5jb3B5KCRzY29wZS53b3JrZmxvdyksXG4gICAgICAgICAgICBpc05ldyA6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgc2VsZi5tb2RlbCA9IHtcbiAgICAgICAgICAgIHdvcmtmbG93IDogYW5ndWxhci5jb3B5KCRzY29wZS53b3JrZmxvdyksXG4gICAgICAgICAgICBzdGVwIDogYW5ndWxhci5jb3B5KCRzY29wZS5zdGVwKVxuICAgICAgICAgIH1cbiAgICAgICAgICBleGlzdGluZ1N0ZXAgPSAkc2NvcGUud29ya2Zsb3cuc3RlcHMuZmlsdGVyKGZ1bmN0aW9uKGl0ZW0pIHtyZXR1cm4gaXRlbS5jb2RlID09ICRzY29wZS5zdGVwLmNvZGU7fSkubGVuZ3RoPjA7XG4gICAgICAgIH1cblxuICAgICAgICBzZWxmLmRvbmUgPSBmdW5jdGlvbihpc1ZhbGlkKSB7XG4gICAgICAgICAgc2VsZi5zdWJtaXR0ZWQgPSB0cnVlO1xuICAgICAgICAgIGlmIChpc1ZhbGlkKSB7XG4gICAgICAgICAgICAgIC8vd2UgY2hlY2sgaWYgdGhlIHN0ZXAgYWxyZWFkeSBleGlzdCBvciBub3QsIGlmIGl0IGV4c2l0IHdlIHJlbW92ZSB0aGUgb2xkIGVsZW1lbnRcbiAgICAgICAgICAgICAgaWYoZXhpc3RpbmdTdGVwKXtcbiAgICAgICAgICAgICAgICAkc2NvcGUud29ya2Zsb3cuc3RlcHMgPSAkc2NvcGUud29ya2Zsb3cuc3RlcHMuZmlsdGVyKGZ1bmN0aW9uKGl0ZW0pIHtyZXR1cm4gaXRlbS5jb2RlICE9ICRzY29wZS5zdGVwLmNvZGU7fSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLy93ZSBhZGQgdGhlIG5ldyBvciB1cGRhdGVkIHN0ZXBcbiAgICAgICAgICAgICAgJHNjb3BlLndvcmtmbG93LnN0ZXBzLnB1c2goc2VsZi5tb2RlbC5zdGVwKTtcbiAgICAgICAgICAgICAgbWVkaWF0b3IucHVibGlzaCgnd2ZtOndvcmtmbG93OnVwZGF0ZWQnLCAkc2NvcGUud29ya2Zsb3cpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBzZWxmLnNlbGVjdFdvcmtmbG93ID0gZnVuY3Rpb24oZXZlbnQsIHdvcmtmbG93KSB7XG4gICAgICAgICAgbWVkaWF0b3IucHVibGlzaCgnd2ZtOndvcmtmbG93OnNlbGVjdGVkJywgd29ya2Zsb3cpO1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAsIGNvbnRyb2xsZXJBczogJ2N0cmwnXG4gICAgfTtcbiAgfSlcbiAgLmRpcmVjdGl2ZSgnd29ya2Zsb3dTdGVwRGV0YWlsJywgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUsIG1lZGlhdG9yKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICByZXN0cmljdDogJ0UnXG4gICAgICAsIHRlbXBsYXRlOiAkdGVtcGxhdGVDYWNoZS5nZXQoJ3dmbS10ZW1wbGF0ZS93b3JrZmxvdy1zdGVwLWRldGFpbC50cGwuaHRtbCcpXG4gICAgICAsIHNjb3BlOiB7XG4gICAgICAgICAgc3RlcCA6ICc9J1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0pXG47XG4iLCIvKipcbiogQ09ORklERU5USUFMXG4qIENvcHlyaWdodCAyMDE2IFJlZCBIYXQsIEluYy4gYW5kL29yIGl0cyBhZmZpbGlhdGVzLlxuKiBUaGlzIGlzIHVucHVibGlzaGVkIHByb3ByaWV0YXJ5IHNvdXJjZSBjb2RlIG9mIFJlZCBIYXQuXG4qKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIGNvbmZpZyA9IHJlcXVpcmUoJy4uL2NvbmZpZycpXG4gICwgXyA9IHJlcXVpcmUoJ2xvZGFzaCcpXG4gIDtcblxubW9kdWxlLmV4cG9ydHMgPSAnd2ZtLndvcmtmbG93LnN5bmMnO1xuXG5mdW5jdGlvbiB3cmFwTWFuYWdlcigkcSwgJHRpbWVvdXQsIG1hbmFnZXIpIHtcbiAgdmFyIHdyYXBwZWRNYW5hZ2VyID0gXy5jcmVhdGUobWFuYWdlcik7XG4gIHdyYXBwZWRNYW5hZ2VyLm5ldyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XG4gICAgJHRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgd29ya2Zsb3cgPSB7XG4gICAgICAgIHRpdGxlOiAnJ1xuICAgICAgfTtcbiAgICAgIGRlZmVycmVkLnJlc29sdmUod29ya2Zsb3cpO1xuICAgIH0sIDApO1xuICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuICB9O1xuXG4gIHJldHVybiB3cmFwcGVkTWFuYWdlcjtcbn1cblxuYW5ndWxhci5tb2R1bGUoJ3dmbS53b3JrZmxvdy5zeW5jJywgW3JlcXVpcmUoJ2ZoLXdmbS1zeW5jJyldKVxuLmZhY3RvcnkoJ3dvcmtmbG93U3luYycsIGZ1bmN0aW9uKCRxLCAkdGltZW91dCwgc3luY1NlcnZpY2UpIHtcbiAgc3luY1NlcnZpY2UuaW5pdCgkZmgsIGNvbmZpZy5zeW5jT3B0aW9ucyk7XG4gIHZhciB3b3JrZmxvd1N5bmMgPSB7fTtcbiAgd29ya2Zsb3dTeW5jLmNyZWF0ZU1hbmFnZXIgPSBmdW5jdGlvbihxdWVyeVBhcmFtcykge1xuICAgIGlmICh3b3JrZmxvd1N5bmMubWFuYWdlcikge1xuICAgICAgcmV0dXJuICRxLndoZW4od29ya2Zsb3dTeW5jLm1hbmFnZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gd29ya2Zsb3dTeW5jLm1hbmFnZXJQcm9taXNlID0gc3luY1NlcnZpY2UubWFuYWdlKGNvbmZpZy5kYXRhc2V0SWQsIG51bGwsIHF1ZXJ5UGFyYW1zKVxuICAgICAgLnRoZW4oZnVuY3Rpb24obWFuYWdlcikge1xuICAgICAgICB3b3JrZmxvd1N5bmMubWFuYWdlciA9IHdyYXBNYW5hZ2VyKCRxLCAkdGltZW91dCwgbWFuYWdlcik7XG4gICAgICAgIGNvbnNvbGUubG9nKCdTeW5jIGlzIG1hbmFnaW5nIGRhdGFzZXQ6JywgY29uZmlnLmRhdGFzZXRJZCwgJ3dpdGggZmlsdGVyOiAnLCBxdWVyeVBhcmFtcyk7XG4gICAgICAgIC8vIFRPRE86IHdlIHNob3VsZCByZWZhY3RvciB0aGVzZSB1dGlsaXRpZXMgZnVuY3Rpb25zIHNvbWV3aGVyZSBlbHNlIHByb2JhYmx5XG4gICAgICAgIHdvcmtmbG93U3luYy5tYW5hZ2VyLnN0ZXBSZXZpZXcgPSBmdW5jdGlvbihzdGVwcywgcmVzdWx0KSB7XG4gICAgICAgICAgdmFyIHN0ZXBJbmRleCA9IC0xO1xuICAgICAgICAgIHZhciBjb21wbGV0ZTtcbiAgICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5zdGVwUmVzdWx0cyAmJiByZXN1bHQuc3RlcFJlc3VsdHMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICBjb21wbGV0ZSA9IHRydWU7XG4gICAgICAgICAgICBmb3IgKHZhciBpPTA7IGkgPCBzdGVwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICB2YXIgc3RlcCA9IHN0ZXBzW2ldO1xuICAgICAgICAgICAgICB2YXIgc3RlcFJlc3VsdCA9IHJlc3VsdC5zdGVwUmVzdWx0c1tzdGVwLmNvZGVdO1xuICAgICAgICAgICAgICBpZiAoc3RlcFJlc3VsdCAmJiAoc3RlcFJlc3VsdC5zdGF0dXMgPT09ICdjb21wbGV0ZScgfHwgc3RlcFJlc3VsdC5zdGF0dXMgPT09ICdwZW5kaW5nJykpIHtcbiAgICAgICAgICAgICAgICBzdGVwSW5kZXggPSBpO1xuICAgICAgICAgICAgICAgIGlmIChzdGVwUmVzdWx0LnN0YXR1cyA9PT0gJ3BlbmRpbmcnKSB7XG4gICAgICAgICAgICAgICAgICBjb21wbGV0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuZXh0U3RlcEluZGV4OiBzdGVwSW5kZXgsXG4gICAgICAgICAgICBjb21wbGV0ZTogY29tcGxldGUgLy8gZmFsc2UgaXMgYW55IHN0ZXBzIGFyZSBcInBlbmRpbmdcIlxuICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICB3b3JrZmxvd1N5bmMubWFuYWdlci5uZXh0U3RlcEluZGV4ID0gZnVuY3Rpb24oc3RlcHMsIHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLnN0ZXBSZXZpZXcoc3RlcHMsIHJlc3VsdCkubmV4dFN0ZXBJbmRleDtcbiAgICAgICAgfVxuXG4gICAgICAgIHdvcmtmbG93U3luYy5tYW5hZ2VyLmNoZWNrU3RhdHVzID0gZnVuY3Rpb24od29ya29yZGVyLCB3b3JrZmxvdywgcmVzdWx0KSB7XG4gICAgICAgICAgdmFyIHN0YXR1cztcbiAgICAgICAgICB2YXIgc3RlcFJldmlldyA9IHRoaXMuc3RlcFJldmlldyh3b3JrZmxvdy5zdGVwcywgcmVzdWx0KTtcbiAgICAgICAgICBpZiAoc3RlcFJldmlldy5uZXh0U3RlcEluZGV4ID49IHdvcmtmbG93LnN0ZXBzLmxlbmd0aCAtIDEgJiYgc3RlcFJldmlldy5jb21wbGV0ZSkge1xuICAgICAgICAgICAgc3RhdHVzID0gJ0NvbXBsZXRlJztcbiAgICAgICAgICB9IGVsc2UgaWYgKCF3b3Jrb3JkZXIuYXNzaWduZWUpIHtcbiAgICAgICAgICAgIHN0YXR1cyA9ICdVbmFzc2lnbmVkJztcbiAgICAgICAgICB9IGVsc2UgaWYgKHN0ZXBSZXZpZXcubmV4dFN0ZXBJbmRleCA8IDApIHtcbiAgICAgICAgICAgIHN0YXR1cyA9ICdOZXcnO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdGF0dXMgPSAnSW4gUHJvZ3Jlc3MnO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gc3RhdHVzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB3b3JrZmxvd1N5bmMubWFuYWdlcjtcbiAgICAgIH0pXG4gICAgfVxuICB9O1xuICB3b3JrZmxvd1N5bmMucmVtb3ZlTWFuYWdlciA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh3b3JrZmxvd1N5bmMubWFuYWdlcikge1xuICAgICAgcmV0dXJuIHdvcmtmbG93U3luYy5tYW5hZ2VyLnNhZmVTdG9wKClcbiAgICAgIC50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICBkZWxldGUgd29ya2Zsb3dTeW5jLm1hbmFnZXI7XG4gICAgICB9KVxuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHdvcmtmbG93U3luYztcbn0pXG47XG4iLCIvKipcbiogQ09ORklERU5USUFMXG4qIENvcHlyaWdodCAyMDE2IFJlZCBIYXQsIEluYy4gYW5kL29yIGl0cyBhZmZpbGlhdGVzLlxuKiBUaGlzIGlzIHVucHVibGlzaGVkIHByb3ByaWV0YXJ5IHNvdXJjZSBjb2RlIG9mIFJlZCBIYXQuXG4qKi9cbid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSAnd2ZtLndvcmtmbG93JztcblxuYW5ndWxhci5tb2R1bGUoJ3dmbS53b3JrZmxvdycsIFtcbiAgcmVxdWlyZSgnLi9kaXJlY3RpdmUnKVxuLCByZXF1aXJlKCcuL3NlcnZpY2UuanMnKVxuXSlcbiIsIi8qKlxuKiBDT05GSURFTlRJQUxcbiogQ29weXJpZ2h0IDIwMTYgUmVkIEhhdCwgSW5jLiBhbmQvb3IgaXRzIGFmZmlsaWF0ZXMuXG4qIFRoaXMgaXMgdW5wdWJsaXNoZWQgcHJvcHJpZXRhcnkgc291cmNlIGNvZGUgb2YgUmVkIEhhdC5cbioqL1xuJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgYXBpSG9zdDogJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MCcsXG4gIGFwaVBhdGg6ICcvYXBpL3dmbS93b3JrZmxvdycsXG4gIGRhdGFzZXRJZCA6ICd3b3JrZmxvd3MnLFxuICBzeW5jT3B0aW9ucyA6IHtcbiAgICBcInN5bmNfZnJlcXVlbmN5XCIgOiA1LFxuICAgIFwic3RvcmFnZV9zdHJhdGVneVwiOiBcImRvbVwiLFxuICAgIFwiZG9fY29uc29sZV9sb2dcIjogZmFsc2VcbiAgfVxufVxuIiwicmVxdWlyZSgnLi93b3Jrb3JkZXItZm9ybS50cGwuaHRtbC5qcycpO1xucmVxdWlyZSgnLi93b3Jrb3JkZXItbGlzdC50cGwuaHRtbC5qcycpO1xucmVxdWlyZSgnLi93b3Jrb3JkZXIudHBsLmh0bWwuanMnKTtcbiIsInZhciBuZ01vZHVsZTtcbnRyeSB7XG4gIG5nTW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ3dmbS53b3Jrb3JkZXIuZGlyZWN0aXZlcycpO1xufSBjYXRjaCAoZSkge1xuICBuZ01vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCd3Zm0ud29ya29yZGVyLmRpcmVjdGl2ZXMnLCBbXSk7XG59XG5cbm5nTW9kdWxlLnJ1bihbJyR0ZW1wbGF0ZUNhY2hlJywgZnVuY3Rpb24gKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dCgnd2ZtLXRlbXBsYXRlL3dvcmtvcmRlci1mb3JtLnRwbC5odG1sJyxcbiAgICAnPCEtLVxcbicgK1xuICAgICcgQ09ORklERU5USUFMXFxuJyArXG4gICAgJyBDb3B5cmlnaHQgMjAxNiBSZWQgSGF0LCBJbmMuIGFuZC9vciBpdHMgYWZmaWxpYXRlcy5cXG4nICtcbiAgICAnIFRoaXMgaXMgdW5wdWJsaXNoZWQgcHJvcHJpZXRhcnkgc291cmNlIGNvZGUgb2YgUmVkIEhhdC5cXG4nICtcbiAgICAnLS0+XFxuJyArXG4gICAgJzxtZC10b29sYmFyIGNsYXNzPVwiY29udGVudC10b29sYmFyIG1kLXByaW1hcnlcIj5cXG4nICtcbiAgICAnICA8ZGl2IGNsYXNzPVwibWQtdG9vbGJhci10b29sc1wiPlxcbicgK1xuICAgICcgICAgPGgzPnt7Y3RybC5tb2RlbC5pZCA/IFxcJ1VwZGF0ZVxcJyA6IFxcJ0NyZWF0ZVxcJ319IHdvcmsgb3JkZXIgSUQge3tjdHJsLm1vZGVsLmlkfX08L2gzPlxcbicgK1xuICAgICcgICAgPG1kLWJ1dHRvbiBjbGFzcz1cIm1kLWljb24tYnV0dG9uXCIgYXJpYS1sYWJlbD1cInt7Y3RybC5zdGF0dXN9fVwiPlxcbicgK1xuICAgICcgICAgICA8d29ya29yZGVyLXN0YXR1cyBzdGF0dXM9XCJjdHJsLnN0YXR1c1wiPjwvd29ya29yZGVyLXN0YXR1cz5cXG4nICtcbiAgICAnICAgIDwvbWQtYnV0dG9uPlxcbicgK1xuICAgICdcXG4nICtcbiAgICAnICAgIDxzcGFuIGZsZXg+PC9zcGFuPlxcbicgK1xuICAgICcgICAgPG1kLWJ1dHRvbiBjbGFzcz1cIm1kLWljb24tYnV0dG9uXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCIgbmctY2xpY2s9XCJjdHJsLnNlbGVjdFdvcmtvcmRlcigkZXZlbnQsIGN0cmwubW9kZWwpXCI+XFxuJyArXG4gICAgJyAgICAgIDxtZC1pY29uIG1kLWZvbnQtc2V0PVwibWF0ZXJpYWwtaWNvbnNcIj5jbG9zZTwvbWQtaWNvbj5cXG4nICtcbiAgICAnICAgIDwvbWQtYnV0dG9uPlxcbicgK1xuICAgICcgIDwvZGl2PlxcbicgK1xuICAgICc8L21kLXRvb2xiYXI+XFxuJyArXG4gICAgJ1xcbicgK1xuICAgICc8ZGl2IGNsYXNzPVwid2ZtLW1haW5jb2wtc2Nyb2xsXCI+XFxuJyArXG4gICAgJzxmb3JtIG5hbWU9XCJ3b3Jrb3JkZXJGb3JtXCIgbmctc3VibWl0PVwiY3RybC5kb25lKHdvcmtvcmRlckZvcm0uJHZhbGlkKVwiIG5vdmFsaWRhdGUgbGF5b3V0LXBhZGRpbmcgbGF5b3V0LW1hcmdpbj5cXG4nICtcbiAgICAnXFxuJyArXG4gICAgJyAgPCEtLVxcbicgK1xuICAgICcgIDxtZC1pbnB1dC1jb250YWluZXI+XFxuJyArXG4gICAgJyAgICA8bGFiZWwgZm9yPVwid29ya29yZGVyU3RhdGVcIj5TdGF0dXM8L2xhYmVsPlxcbicgK1xuICAgICcgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJpbnB1dFdvcmtvcmRlclR5cGVcIiBuYW1lPVwid29ya29yZGVyU3RhdHVzXCIgbmctbW9kZWw9XCJjdHJsLm1vZGVsLnN0YXR1c1wiIGRpc2FibGVkPVwidHJ1ZVwiPlxcbicgK1xuICAgICcgIDwvbWQtaW5wdXQtY29udGFpbmVyPlxcbicgK1xuICAgICcgIC0tPlxcbicgK1xuICAgICdcXG4nICtcbiAgICAnPGRpdiBsYXlvdXQtZ3Qtc209XCJyb3dcIj5cXG4nICtcbiAgICAnICA8bWQtaW5wdXQtY29udGFpbmVyIGNsYXNzPVwibWQtYmxvY2tcIiBmbGV4LWd0LXNtPlxcbicgK1xuICAgICcgICAgPGxhYmVsIGZvcj1cIndvcmtvcmRlclR5cGVcIj5UeXBlPC9sYWJlbD5cXG4nICtcbiAgICAnICAgIDxtZC1zZWxlY3QgbmctbW9kZWw9XCJjdHJsLm1vZGVsLnR5cGVcIiBuYW1lPVwid29ya29yZGVyVHlwZVwiIGlkPVwid29ya29yZGVyVHlwZVwiPlxcbicgK1xuICAgICcgICAgICAgPG1kLW9wdGlvbiB2YWx1ZT1cIkpvYiBPcmRlclwiPkpvYiBPcmRlcjwvbWQtb3B0aW9uPlxcbicgK1xuICAgICcgICAgICAgPG1kLW9wdGlvbiB2YWx1ZT1cIlR5cGUgMDJcIj5UeXBlIDAyPC9tZC1vcHRpb24+XFxuJyArXG4gICAgJyAgICAgICA8bWQtb3B0aW9uIHZhbHVlPVwiVHlwZSAwM1wiPlR5cGUgMDM8L21kLW9wdGlvbj5cXG4nICtcbiAgICAnICAgICAgIDxtZC1vcHRpb24gdmFsdWU9XCJUeXBlIDA0XCI+VHlwZSAwNDwvbWQtb3B0aW9uPlxcbicgK1xuICAgICcgICAgIDwvbWQtc2VsZWN0PlxcbicgK1xuICAgICcgIDwvbWQtaW5wdXQtY29udGFpbmVyPlxcbicgK1xuICAgICdcXG4nICtcbiAgICAnICA8bWQtaW5wdXQtY29udGFpbmVyIGNsYXNzPVwibWQtYmxvY2tcIiBmbGV4LWd0LXNtPlxcbicgK1xuICAgICcgICAgPGxhYmVsIGZvcj1cIndvcmtmbG93XCI+V29ya2Zsb3c8L2xhYmVsPlxcbicgK1xuICAgICcgICAgPG1kLXNlbGVjdCBuZy1tb2RlbD1cImN0cmwubW9kZWwud29ya2Zsb3dJZFwiIG5hbWU9XCJ3b3JrZmxvd1wiIGlkPVwid29ya2Zsb3dcIiByZXF1aXJlZD5cXG4nICtcbiAgICAnICAgICAgIDxtZC1vcHRpb24gbmctcmVwZWF0PVwid29ya2Zsb3cgaW4gY3RybC53b3JrZmxvd3NcIiB2YWx1ZT1cInt7d29ya2Zsb3cuaWR9fVwiPnt7d29ya2Zsb3cuaWR9fSAtIHt7d29ya2Zsb3cudGl0bGV9fTwvbWQtb3B0aW9uPlxcbicgK1xuICAgICcgICAgIDwvbWQtc2VsZWN0PlxcbicgK1xuICAgICcgICAgIDxkaXYgbmctbWVzc2FnZXM9XCJ3b3Jrb3JkZXJGb3JtLndvcmtmbG93LiRlcnJvclwiIG5nLWlmPVwiY3RybC5zdWJtaXR0ZWQgfHwgd29ya29yZGVyRm9ybS53b3JrZmxvdy4kZGlydHlcIj5cXG4nICtcbiAgICAnICAgICAgIDxkaXYgbmctbWVzc2FnZT1cInJlcXVpcmVkXCI+QSB3b3JrZmxvdyBpcyByZXF1aXJlZC48L2Rpdj5cXG4nICtcbiAgICAnICAgICA8L2Rpdj5cXG4nICtcbiAgICAnICA8L21kLWlucHV0LWNvbnRhaW5lcj5cXG4nICtcbiAgICAnPC9kaXY+XFxuJyArXG4gICAgJ1xcbicgK1xuICAgICc8ZGl2PlxcbicgK1xuICAgICcgIDxtZC1pbnB1dC1jb250YWluZXIgY2xhc3M9XCJtZC1ibG9ja1wiPlxcbicgK1xuICAgICcgICAgPGxhYmVsIGZvcj1cImFzc2lnbmVlXCI+QXNzaWduZWU8L2xhYmVsPlxcbicgK1xuICAgICcgICAgPG1kLXNlbGVjdCBuZy1tb2RlbD1cImN0cmwubW9kZWwuYXNzaWduZWVcIiBuYW1lPVwiYXNzaWduZWVcIiBpZD1cImFzc2lnbmVlXCI+XFxuJyArXG4gICAgJyAgICAgICA8bWQtb3B0aW9uIG5nLXJlcGVhdD1cIndvcmtlciBpbiBjdHJsLndvcmtlcnNcIiB2YWx1ZT1cInt7d29ya2VyLmlkfX1cIj57e3dvcmtlci5uYW1lfX0gKHt7d29ya2VyLnBvc2l0aW9ufX0pPC9tZC1vcHRpb24+XFxuJyArXG4gICAgJyAgICAgPC9tZC1zZWxlY3Q+XFxuJyArXG4gICAgJyAgPC9tZC1pbnB1dC1jb250YWluZXI+XFxuJyArXG4gICAgJzwvZGl2PlxcbicgK1xuICAgICdcXG4nICtcbiAgICAnPGRpdj5cXG4nICtcbiAgICAnICA8bWQtaW5wdXQtY29udGFpbmVyIGNsYXNzPVwibWQtYmxvY2tcIj5cXG4nICtcbiAgICAnICAgIDxsYWJlbD5UaXRsZTwvbGFiZWw+XFxuJyArXG4gICAgJyAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImlucHV0VGl0bGVcIiBuYW1lPVwidGl0bGVcIiBuZy1tb2RlbD1cImN0cmwubW9kZWwudGl0bGVcIiByZXF1aXJlZD5cXG4nICtcbiAgICAnICAgIDxkaXYgbmctbWVzc2FnZXM9XCJ3b3Jrb3JkZXJGb3JtLnRpdGxlLiRlcnJvclwiIG5nLWlmPVwiY3RybC5zdWJtaXR0ZWQgfHwgd29ya29yZGVyRm9ybS50aXRsZS4kZGlydHlcIj5cXG4nICtcbiAgICAnICAgICAgPGRpdiBuZy1tZXNzYWdlPVwicmVxdWlyZWRcIj5BIHRpdGxlIGlzIHJlcXVpcmVkLjwvZGl2PlxcbicgK1xuICAgICcgICAgPC9kaXY+XFxuJyArXG4gICAgJyAgPC9tZC1pbnB1dC1jb250YWluZXI+XFxuJyArXG4gICAgJzwvZGl2PlxcbicgK1xuICAgICdcXG4nICtcbiAgICAnPGRpdj5cXG4nICtcbiAgICAnICA8bWQtaW5wdXQtY29udGFpbmVyIGNsYXNzPVwibWQtYmxvY2tcIj5cXG4nICtcbiAgICAnICAgIDxsYWJlbCBmb3I9XCJpbnB1dEFkZHJlc3NcIj5BZGRyZXNzPC9sYWJlbD5cXG4nICtcbiAgICAnICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICBpZD1cImlucHV0QWRkcmVzc1wiIG5hbWU9XCJhZGRyZXNzXCIgbmctbW9kZWw9XCJjdHJsLm1vZGVsLmFkZHJlc3NcIiByZXF1aXJlZD5cXG4nICtcbiAgICAnICAgIDxkaXYgbmctbWVzc2FnZXM9XCJ3b3Jrb3JkZXJGb3JtLmFkZHJlc3MuJGVycm9yXCIgbmctc2hvdz1cImN0cmwuc3VibWl0dGVkIHx8IHdvcmtvcmRlckZvcm0uYWRkcmVzcy4kZGlydHlcIj5cXG4nICtcbiAgICAnICAgICAgPGRpdiBuZy1tZXNzYWdlPVwicmVxdWlyZWRcIj5BbiBhZGRyZXNzIGlzIHJlcXVpcmVkLjwvZGl2PlxcbicgK1xuICAgICcgICAgPC9kaXY+XFxuJyArXG4gICAgJyAgPC9tZC1pbnB1dC1jb250YWluZXI+XFxuJyArXG4gICAgJzwvZGl2PlxcbicgK1xuICAgICdcXG4nICtcbiAgICAnPGRpdiBsYXlvdXQtZ3Qtc209XCJyb3dcIj5cXG4nICtcbiAgICAnICA8bWQtaW5wdXQtY29udGFpbmVyIGNsYXNzPVwibWQtYmxvY2tcIiBmbGV4LWd0LXNtPlxcbicgK1xuICAgICcgICAgPGxhYmVsIGZvcj1cImlucHV0QWRkcmVzc1wiPkxhdHRpdHVkZTwvbGFiZWw+XFxuJyArXG4gICAgJyAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAgaWQ9XCJpbnB1dExhdHRpdHVkZVwiIG5hbWU9XCJsYXR0aXR1ZGVcIiBuZy1tb2RlbD1cImN0cmwubW9kZWwubG9jYXRpb25bMF1cIiByZXF1aXJlZD5cXG4nICtcbiAgICAnICAgIDxkaXYgbmctbWVzc2FnZXM9XCJ3b3Jrb3JkZXJGb3JtLmxhdHRpdHVkZS4kZXJyb3JcIiBuZy1zaG93PVwiY3RybC5zdWJtaXR0ZWQgfHwgd29ya29yZGVyRm9ybS5sYXR0aXR1ZGUuJGRpcnR5XCI+XFxuJyArXG4gICAgJyAgICAgIDxkaXYgbmctbWVzc2FnZT1cInJlcXVpcmVkXCI+QW4gbGF0dGl0dWRlIGlzIHJlcXVpcmVkLjwvZGl2PlxcbicgK1xuICAgICcgICAgPC9kaXY+XFxuJyArXG4gICAgJyAgPC9tZC1pbnB1dC1jb250YWluZXI+XFxuJyArXG4gICAgJyAgPG1kLWlucHV0LWNvbnRhaW5lciBjbGFzcz1cIm1kLWJsb2NrXCIgZmxleC1ndC1zbT5cXG4nICtcbiAgICAnICAgIDxsYWJlbCBmb3I9XCJpbnB1dEFkZHJlc3NcIj5Mb25naXR1ZGU8L2xhYmVsPlxcbicgK1xuICAgICcgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgIGlkPVwiaW5wdXRMYXR0aXR1ZGVcIiBuYW1lPVwibG9uZ2l0dWRlXCIgbmctbW9kZWw9XCJjdHJsLm1vZGVsLmxvY2F0aW9uWzFdXCIgcmVxdWlyZWQ+XFxuJyArXG4gICAgJyAgICA8ZGl2IG5nLW1lc3NhZ2VzPVwid29ya29yZGVyRm9ybS5sb25naXR1ZGUuJGVycm9yXCIgbmctc2hvdz1cImN0cmwuc3VibWl0dGVkIHx8IHdvcmtvcmRlckZvcm0ubG9uZ2l0dWRlLiRkaXJ0eVwiPlxcbicgK1xuICAgICcgICAgICA8ZGl2IG5nLW1lc3NhZ2U9XCJyZXF1aXJlZFwiPkFuIGxvbmdpdHVkZSBpcyByZXF1aXJlZC48L2Rpdj5cXG4nICtcbiAgICAnICAgIDwvZGl2PlxcbicgK1xuICAgICcgIDwvbWQtaW5wdXQtY29udGFpbmVyPlxcbicgK1xuICAgICc8L2Rpdj5cXG4nICtcbiAgICAnXFxuJyArXG4gICAgJzxkaXYgbGF5b3V0LWd0LXNtPVwicm93XCI+XFxuJyArXG4gICAgJyAgPG1kLWlucHV0LWNvbnRhaW5lciBjbGFzcz1cIm1kLWJsb2NrXCIgZmxleC1ndC1zbT5cXG4nICtcbiAgICAnICAgIDxsYWJlbCBmb3I9XCJpbnB1dEZpbmlzaERhdGVcIj5GaW5pc2ggRGF0ZTwvbGFiZWw+XFxuJyArXG4gICAgJyAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiAgaWQ9XCJpbnB1dEZpbmlzaERhdGVcIiBuYW1lPVwiZmluaXNoRGF0ZVwiIG5nLW1vZGVsPVwiY3RybC5tb2RlbC5maW5pc2hEYXRlXCIgcmVxdWlyZWQ+XFxuJyArXG4gICAgJyAgICA8ZGl2IG5nLW1lc3NhZ2VzPVwid29ya29yZGVyRm9ybS5maW5pc2hEYXRlLiRlcnJvclwiIG5nLXNob3c9XCJjdHJsLnN1Ym1pdHRlZCB8fCB3b3Jrb3JkZXJGb3JtLmZpbmlzaERhdGUuJGRpcnR5XCI+XFxuJyArXG4gICAgJyAgICAgIDxkaXYgbmctbWVzc2FnZT1cInJlcXVpcmVkXCI+QSBmaW5pc2ggZGF0ZSBpcyByZXF1aXJlZC48L2Rpdj5cXG4nICtcbiAgICAnICAgIDwvZGl2PlxcbicgK1xuICAgICcgIDwvbWQtaW5wdXQtY29udGFpbmVyPlxcbicgK1xuICAgICcgIDxtZC1pbnB1dC1jb250YWluZXIgY2xhc3M9XCJtZC1ibG9ja1wiIGZsZXgtZ3Qtc20+XFxuJyArXG4gICAgJyAgICA8bGFiZWwgZm9yPVwiaW5wdXRGaW5pc2hUaW1lXCIgPkZpbmlzaCBUaW1lPC9sYWJlbD5cXG4nICtcbiAgICAnICAgIDxpbnB1dCB0eXBlPVwidGltZVwiICBpZD1cImlucHV0RmluaXNoVGltZVwiIG5hbWU9XCJmaW5pc2hUaW1lXCIgbmctbW9kZWw9XCJjdHJsLm1vZGVsLmZpbmlzaFRpbWVcIiByZXF1aXJlZD5cXG4nICtcbiAgICAnICAgIDxkaXYgbmctbWVzc2FnZXM9XCJ3b3Jrb3JkZXJGb3JtLmZpbmlzaFRpbWUuJGVycm9yXCIgbmctc2hvdz1cImN0cmwuc3VibWl0dGVkIHx8IHdvcmtvcmRlckZvcm0uZmluaXNoVGltZS4kZGlydHlcIj5cXG4nICtcbiAgICAnICAgICAgPGRpdiBuZy1tZXNzYWdlPVwicmVxdWlyZWRcIj5BIGZpbmlzaCB0aW1lIGlzIHJlcXVpcmVkLjwvZGl2PlxcbicgK1xuICAgICcgICAgPC9kaXY+XFxuJyArXG4gICAgJyAgPC9tZC1pbnB1dC1jb250YWluZXI+XFxuJyArXG4gICAgJzwvZGl2PlxcbicgK1xuICAgICdcXG4nICtcbiAgICAnPGRpdj5cXG4nICtcbiAgICAnICA8bWQtaW5wdXQtY29udGFpbmVyIGNsYXNzPVwibWQtYmxvY2tcIiBuZy1jbGFzcz1cInsgXFwnaGFzLWVycm9yXFwnIDogd29ya29yZGVyRm9ybS5zdW1tYXJ5LiRpbnZhbGlkICYmICF3b3Jrb3JkZXJGb3JtLnN1bW1hcnkuJHByaXN0aW5lIH1cIj5cXG4nICtcbiAgICAnICAgIDxsYWJlbCBmb3I9XCJpbnB1dFN1bW1hcnlcIj5TdW1tYXJ5PC9sYWJlbD5cXG4nICtcbiAgICAnICAgIDx0ZXh0YXJlYSBpZD1cImlucHV0U3VtbWFyeVwiIG5hbWU9XCJzdW1tYXJ5XCIgbmctbW9kZWw9XCJjdHJsLm1vZGVsLnN1bW1hcnlcIiByZXF1aXJlZCBtZC1tYXhsZW5ndGg9XCIxNTBcIj48L3RleHRhcmVhPlxcbicgK1xuICAgICdcXG4nICtcbiAgICAnICAgIDxkaXYgbmctbWVzc2FnZXM9XCJ3b3Jrb3JkZXJGb3JtLnN1bW1hcnkuJGVycm9yXCIgbmctc2hvdz1cImN0cmwuc3VibWl0dGVkIHx8IHdvcmtvcmRlckZvcm0uc3VtbWFyeS4kZGlydHlcIj5cXG4nICtcbiAgICAnICAgICAgPGRpdiBuZy1tZXNzYWdlPVwicmVxdWlyZWRcIj5BIHN1bW1hcnkgZGF0ZSBpcyByZXF1aXJlZC48L2Rpdj5cXG4nICtcbiAgICAnICAgIDwvZGl2PlxcbicgK1xuICAgICcgIDwvbWQtaW5wdXQtY29udGFpbmVyPlxcbicgK1xuICAgICc8L2Rpdj5cXG4nICtcbiAgICAnXFxuJyArXG4gICAgJyAgPG1kLWJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJtZC1yYWlzZWQgbWQtcHJpbWFyeVwiPnt7Y3RybC5tb2RlbC5pZCA/IFxcJ1VwZGF0ZVxcJyA6IFxcJ0NyZWF0ZVxcJ319IFdvcmtvcmRlcjwvbWQtYnV0dG9uPlxcbicgK1xuICAgICc8L2Zvcm0+XFxuJyArXG4gICAgJzwvZGl2XCI+XFxuJyArXG4gICAgJycpO1xufV0pO1xuIiwidmFyIG5nTW9kdWxlO1xudHJ5IHtcbiAgbmdNb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgnd2ZtLndvcmtvcmRlci5kaXJlY3RpdmVzJyk7XG59IGNhdGNoIChlKSB7XG4gIG5nTW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ3dmbS53b3Jrb3JkZXIuZGlyZWN0aXZlcycsIFtdKTtcbn1cblxubmdNb2R1bGUucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbiAoJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KCd3Zm0tdGVtcGxhdGUvd29ya29yZGVyLWxpc3QudHBsLmh0bWwnLFxuICAgICc8IS0tXFxuJyArXG4gICAgJyBDT05GSURFTlRJQUxcXG4nICtcbiAgICAnIENvcHlyaWdodCAyMDE2IFJlZCBIYXQsIEluYy4gYW5kL29yIGl0cyBhZmZpbGlhdGVzLlxcbicgK1xuICAgICcgVGhpcyBpcyB1bnB1Ymxpc2hlZCBwcm9wcmlldGFyeSBzb3VyY2UgY29kZSBvZiBSZWQgSGF0LlxcbicgK1xuICAgICctLT5cXG4nICtcbiAgICAnPG1kLXRvb2xiYXI+XFxuJyArXG4gICAgJyAgPGRpdiBjbGFzcz1cIm1kLXRvb2xiYXItdG9vbHNcIj5cXG4nICtcbiAgICAnICAgIDxoMz5cXG4nICtcbiAgICAnICAgICAgPHNwYW4+V29ya29yZGVyczwvc3Bhbj5cXG4nICtcbiAgICAnICAgIDwvaDM+XFxuJyArXG4gICAgJyAgPC9kaXY+XFxuJyArXG4gICAgJzwvbWQtdG9vbGJhcj5cXG4nICtcbiAgICAnXFxuJyArXG4gICAgJzxmb3JtIGFjdGlvbj1cIiNcIiBjbGFzcz1cInBlcnNpc3RlbnQtc2VhcmNoXCIgaGlkZS14cyBoaWRlLXNtPlxcbicgK1xuICAgICcgIDxsYWJlbCBmb3I9XCJzZWFyY2hcIj48aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+c2VhcmNoPC9pPjwvbGFiZWw+XFxuJyArXG4gICAgJyAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInNlYXJjaFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCIgbmctbW9kZWw9XCJzZWFyY2hWYWx1ZVwiIG5nLWNoYW5nZT1cImN0cmwuYXBwbHlGaWx0ZXIoc2VhcmNoVmFsdWUpXCI+XFxuJyArXG4gICAgJzwvZm9ybT5cXG4nICtcbiAgICAnXFxuJyArXG4gICAgJzxtZC1saXN0PlxcbicgK1xuICAgICcgIDxtZC1saXN0LWl0ZW1cXG4nICtcbiAgICAnICAgIG5nLXJlcGVhdD1cIndvcmtvcmRlciBpbiBjdHJsLndvcmtvcmRlcnNcIlxcbicgK1xuICAgICcgICAgbmctY2xpY2s9XCJjdHJsLnNlbGVjdFdvcmtvcmRlcigkZXZlbnQsIHdvcmtvcmRlcilcIlxcbicgK1xuICAgICcgICAgbmctY2xhc3M9XCJ7YWN0aXZlOiBjdHJsLnNlbGVjdGVkLmlkID09PSB3b3Jrb3JkZXIuaWR9XCJcXG4nICtcbiAgICAnICAgIGNsYXNzPVwibWQtMy1saW5lIHdvcmtvcmRlci1pdGVtXCJcXG4nICtcbiAgICAnICA+XFxuJyArXG4gICAgJzwhLS1cXG4nICtcbiAgICAnICBUT0RPOiBjaGFuZ2UgY2xhc3MgbmFtZSBhY2NvcmRpbmcgdG8gdGhlIGNvbG9yOlxcbicgK1xuICAgICcgICAgXCJzdWNjZXNzXCIgPSBncmVlblxcbicgK1xuICAgICcgICAgZGFuZ2VyID0gXCJyZWRcIlxcbicgK1xuICAgICcgICAgd2FybmluZyA9IFwieWVsbG93XCJcXG4nICtcbiAgICAnICAgIG5vIGNsYXNzID0gZ3JleVxcbicgK1xuICAgICcgIC0tPlxcbicgK1xuICAgICcgIDx3b3Jrb3JkZXItc3RhdHVzIGNsYXNzPVwiXCIgc3RhdHVzPVwiY3RybC5yZXN1bHRNYXBbd29ya29yZGVyLmlkXS5zdGF0dXNcIj48L3dvcmtvcmRlci1zdGF0dXM+XFxuJyArXG4gICAgJ1xcbicgK1xuICAgICcgICAgPGRpdiBjbGFzcz1cIm1kLWxpc3QtaXRlbS10ZXh0XCI+XFxuJyArXG4gICAgJyAgICAgIDxoMz5cXG4nICtcbiAgICAnICAgICAgICB7e3dvcmtvcmRlci50eXBlfX0gLVxcbicgK1xuICAgICcgICAgICAgIDxzcGFuIG5nLWlmPVwid29ya29yZGVyLmlkXCI+e3t3b3Jrb3JkZXIuaWR9fTwvc3Bhbj5cXG4nICtcbiAgICAnICAgICAgICA8c3BhbiBuZy1pZj1cIiEgd29ya29yZGVyLmlkXCIgc3R5bGU9XCJmb250LXN0eWxlOiBpdGFsaWM7XCI+Jmx0O2xvY2FsJmd0Ozwvc3Bhbj5cXG4nICtcbiAgICAnICAgICAgPC9oMz5cXG4nICtcbiAgICAnICAgICAgPGg0Pnt7d29ya29yZGVyLnRpdGxlfX08L2g0PlxcbicgK1xuICAgICcgICAgICA8cD57e3dvcmtvcmRlci5hZGRyZXNzfX08L3A+XFxuJyArXG4gICAgJyAgICA8L2Rpdj5cXG4nICtcbiAgICAnICAgIDxtZC1kaXZpZGVyPjwvbWQtZGl2aWRlcj5cXG4nICtcbiAgICAnICA8L21kLWxpc3QtaXRlbT5cXG4nICtcbiAgICAnPC9tZC1saXN0PlxcbicgK1xuICAgICcnKTtcbn1dKTtcbiIsInZhciBuZ01vZHVsZTtcbnRyeSB7XG4gIG5nTW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ3dmbS53b3Jrb3JkZXIuZGlyZWN0aXZlcycpO1xufSBjYXRjaCAoZSkge1xuICBuZ01vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCd3Zm0ud29ya29yZGVyLmRpcmVjdGl2ZXMnLCBbXSk7XG59XG5cbm5nTW9kdWxlLnJ1bihbJyR0ZW1wbGF0ZUNhY2hlJywgZnVuY3Rpb24gKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dCgnd2ZtLXRlbXBsYXRlL3dvcmtvcmRlci50cGwuaHRtbCcsXG4gICAgJzwhLS1cXG4nICtcbiAgICAnIENPTkZJREVOVElBTFxcbicgK1xuICAgICcgQ29weXJpZ2h0IDIwMTYgUmVkIEhhdCwgSW5jLiBhbmQvb3IgaXRzIGFmZmlsaWF0ZXMuXFxuJyArXG4gICAgJyBUaGlzIGlzIHVucHVibGlzaGVkIHByb3ByaWV0YXJ5IHNvdXJjZSBjb2RlIG9mIFJlZCBIYXQuXFxuJyArXG4gICAgJy0tPlxcbicgK1xuICAgICcgIDxtZC1saXN0PlxcbicgK1xuICAgICdcXG4nICtcbiAgICAnICAgIDxtZC1saXN0LWl0ZW0gY2xhc3M9XCJtZC0yLWxpbmVcIiA+XFxuJyArXG4gICAgJyAgICAgIDxtZC1pY29uPlxcbicgK1xuICAgICcgICAgICA8d29ya29yZGVyLXN0YXR1cyBzdGF0dXM9XCJzdGF0dXNcIj48L3dvcmtvcmRlci1zdGF0dXM+XFxuJyArXG4gICAgJyAgICA8L21kLWljb24+XFxuJyArXG4gICAgJyAgICAgICAgPGRpdiBjbGFzcz1cIm1kLWxpc3QtaXRlbS10ZXh0XCI+XFxuJyArXG4gICAgJyAgICAgICAgICAgPGgzPnt7c3RhdHVzIHx8IFwiTmV3XCJ9fTwvaDM+XFxuJyArXG4gICAgJyAgICAgICAgICAgPHA+U3RhdHVzPC9wPlxcbicgK1xuICAgICcgICAgICAgIDwvZGl2PlxcbicgK1xuICAgICcgICAgICA8L21kLWxpc3QtaXRlbT5cXG4nICtcbiAgICAnICAgIDwvbWQtYnV0dG9uPlxcbicgK1xuICAgICcgICAgPG1kLWRpdmlkZXI+PC9tZC1kaXZpZGVyPlxcbicgK1xuICAgICdcXG4nICtcbiAgICAnICAgIDxtZC1saXN0LWl0ZW0gY2xhc3M9XCJtZC0yLWxpbmUgbWQtbG9uZy10ZXh0XCI+XFxuJyArXG4gICAgJyAgICAgIDxtZC1pY29uIG1kLWZvbnQtc2V0PVwibWF0ZXJpYWwtaWNvbnNcIj5wbGFjZTwvbWQtaWNvbj5cXG4nICtcbiAgICAnICAgICAgPGRpdiBjbGFzcz1cIm1kLWxpc3QtaXRlbS10ZXh0XCI+XFxuJyArXG4gICAgJyAgICAgICAgIDxoMz57e3dvcmtvcmRlci5sb2NhdGlvblswXX19LCB7e3dvcmtvcmRlci5sb2NhdGlvblsxXX19PC9oMz5cXG4nICtcbiAgICAnICAgICAgICAgPHA+XFxuJyArXG4gICAgJyAgICAgICAgICAge3t3b3Jrb3JkZXIuYWRkcmVzc319XFxuJyArXG4gICAgJyAgICAgICAgIDwvcD5cXG4nICtcbiAgICAnICAgICAgPC9kaXY+XFxuJyArXG4gICAgJyAgICA8L21kLWxpc3QtaXRlbT5cXG4nICtcbiAgICAnICAgIDxtZC1kaXZpZGVyPjwvbWQtZGl2aWRlcj5cXG4nICtcbiAgICAnXFxuJyArXG4gICAgJyAgICA8bWQtbGlzdC1pdGVtIGNsYXNzPVwibWQtMi1saW5lXCIgPlxcbicgK1xuICAgICcgICAgICA8bWQtaWNvbiBtZC1mb250LXNldD1cIm1hdGVyaWFsLWljb25zXCI+YXNzaWdubWVudDwvbWQtaWNvbj5cXG4nICtcbiAgICAnICAgICAgPGRpdiBjbGFzcz1cIm1kLWxpc3QtaXRlbS10ZXh0XCI+XFxuJyArXG4gICAgJyAgICAgICAgPGgzPnt7d29ya29yZGVyLnRpdGxlfX08L2gzPlxcbicgK1xuICAgICcgICAgICAgIDxwPldvcmtvcmRlcjwvcD5cXG4nICtcbiAgICAnICAgICAgPC9kaXY+XFxuJyArXG4gICAgJyAgICA8L21kLWxpc3QtaXRlbT5cXG4nICtcbiAgICAnICAgIDxtZC1kaXZpZGVyPjwvbWQtZGl2aWRlcj5cXG4nICtcbiAgICAnXFxuJyArXG4gICAgJyAgICA8bWQtbGlzdC1pdGVtIGNsYXNzPVwibWQtMi1saW5lXCIgPlxcbicgK1xuICAgICcgICAgICA8bWQtaWNvbiBtZC1mb250LXNldD1cIm1hdGVyaWFsLWljb25zXCI+ZXZlbnQ8L21kLWljb24+XFxuJyArXG4gICAgJyAgICAgIDxkaXYgY2xhc3M9XCJtZC1saXN0LWl0ZW0tdGV4dFwiPlxcbicgK1xuICAgICcgICAgICAgIDxoMz57e3dvcmtvcmRlci5zdGFydFRpbWVzdGFtcCB8IGRhdGU6XFwneXl5eS1NTS1kZFxcJyB9fTwvaDM+XFxuJyArXG4gICAgJyAgICAgICAgPHA+RmluaXNoIERhdGU8L3A+XFxuJyArXG4gICAgJyAgICAgIDwvZGl2PlxcbicgK1xuICAgICcgICAgPC9tZC1saXN0LWl0ZW0+XFxuJyArXG4gICAgJyAgICA8bWQtZGl2aWRlcj48L21kLWRpdmlkZXI+XFxuJyArXG4gICAgJ1xcbicgK1xuICAgICcgICAgPG1kLWxpc3QtaXRlbSBjbGFzcz1cIm1kLTItbGluZVwiID5cXG4nICtcbiAgICAnICAgICAgPG1kLWljb24gbWQtZm9udC1zZXQ9XCJtYXRlcmlhbC1pY29uc1wiPnNjaGVkdWxlPC9tZC1pY29uPlxcbicgK1xuICAgICcgICAgICA8ZGl2IGNsYXNzPVwibWQtbGlzdC1pdGVtLXRleHRcIj5cXG4nICtcbiAgICAnICAgICAgICA8aDM+e3t3b3Jrb3JkZXIuc3RhcnRUaW1lc3RhbXAgfCBkYXRlOlxcJ0hIOm1tOnNzIFpcXCcgfX08L2gzPlxcbicgK1xuICAgICcgICAgICAgIDxwPkZpbmlzaCBUaW1lPC9wPlxcbicgK1xuICAgICcgICAgICA8L2Rpdj5cXG4nICtcbiAgICAnICAgIDwvbWQtbGlzdC1pdGVtPlxcbicgK1xuICAgICcgICAgPG1kLWRpdmlkZXI+PC9tZC1kaXZpZGVyPlxcbicgK1xuICAgICdcXG4nICtcbiAgICAnICAgIDxtZC1saXN0LWl0ZW0gY2xhc3M9XCJtZC0yLWxpbmVcIiBuZy1zaG93PVwiYXNzaWduZWUgJiYgYXNzaWduZWUubmFtZVwiPlxcbicgK1xuICAgICcgICAgICA8bWQtaWNvbiBtZC1mb250LXNldD1cIm1hdGVyaWFsLWljb25zXCI+cGVyc29uPC9tZC1pY29uPlxcbicgK1xuICAgICcgICAgICA8ZGl2IGNsYXNzPVwibWQtbGlzdC1pdGVtLXRleHRcIj5cXG4nICtcbiAgICAnICAgICAgICA8aDM+e3thc3NpZ25lZS5uYW1lfX08L2gzPlxcbicgK1xuICAgICcgICAgICAgIDxwPkFzaWduZWU8L3A+XFxuJyArXG4gICAgJyAgICAgIDwvZGl2PlxcbicgK1xuICAgICcgICAgPC9tZC1saXN0LWl0ZW0+XFxuJyArXG4gICAgJyAgICA8bWQtZGl2aWRlcj48L21kLWRpdmlkZXI+XFxuJyArXG4gICAgJ1xcbicgK1xuICAgICcgIDwvbWQtbGlzdD5cXG4nICtcbiAgICAnXFxuJyArXG4gICAgJyAgPG1kLXN1YmhlYWRlciBjbGFzcz1cIm1kLW5vLXN0aWNreVwiPldvcmsgU3VtbWFyeTwvbWQtc3ViaGVhZGVyPlxcbicgK1xuICAgICcgIDxwIGNsYXNzPVwibWQtYm9keS0xXCIgbGF5b3V0LXBhZGRpbmcgbGF5b3V0LW1hcmdpbj5cXG4nICtcbiAgICAnICAgIHt7d29ya29yZGVyLnN1bW1hcnl9fVxcbicgK1xuICAgICcgIDwvcD5cXG4nICtcbiAgICAnJyk7XG59XSk7XG4iLCIvKipcbiogQ09ORklERU5USUFMXG4qIENvcHlyaWdodCAyMDE2IFJlZCBIYXQsIEluYy4gYW5kL29yIGl0cyBhZmZpbGlhdGVzLlxuKiBUaGlzIGlzIHVucHVibGlzaGVkIHByb3ByaWV0YXJ5IHNvdXJjZSBjb2RlIG9mIFJlZCBIYXQuXG4qKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIG5nTW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ3dmbS53b3Jrb3JkZXIuZGlyZWN0aXZlcycsIFsnd2ZtLmNvcmUubWVkaWF0b3InXSk7XG5tb2R1bGUuZXhwb3J0cyA9ICd3Zm0ud29ya29yZGVyLmRpcmVjdGl2ZXMnO1xuXG5yZXF1aXJlKCcuLi8uLi9kaXN0Jyk7XG5cbnZhciBnZXRTdGF0dXNJY29uID0gZnVuY3Rpb24oc3RhdHVzKSB7XG4gIHZhciBzdGF0dXNJY29uO1xuICBzd2l0Y2goc3RhdHVzKSB7XG4gICAgY2FzZSAnSW4gUHJvZ3Jlc3MnOlxuICAgICAgc3RhdHVzSWNvbiA9ICdhdXRvcmVuZXcnO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnQ29tcGxldGUnOlxuICAgICAgc3RhdHVzSWNvbiA9ICdhc3NpZ25tZW50X3R1cm5lZF9pbic7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdBYm9ydGVkJzpcbiAgICAgIHN0YXR1c0ljb24gPSAnYXNzaWdubWVudF9sYXRlJztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ09uIEhvbGQnOlxuICAgICAgc3RhdHVzSWNvbiA9ICdwYXVzZSc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdVbmFzc2lnbmVkJzpcbiAgICAgIHN0YXR1c0ljb24gPSAnYXNzaWdubWVudF9pbmQnO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnTmV3JzpcbiAgICAgIHN0YXR1c0ljb24gPSAnbmV3X3JlbGVhc2VzJztcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBzdGF0dXNJY29uID0gJ3JhZGlvX2J1dHRvbl91bmNoZWNrZWQnO1xuICB9XG4gIHJldHVybiBzdGF0dXNJY29uO1xufVxuXG5uZ01vZHVsZS5kaXJlY3RpdmUoJ3dvcmtvcmRlckxpc3QnLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSwgbWVkaWF0b3IpIHtcbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0UnXG4gICwgdGVtcGxhdGU6ICR0ZW1wbGF0ZUNhY2hlLmdldCgnd2ZtLXRlbXBsYXRlL3dvcmtvcmRlci1saXN0LnRwbC5odG1sJylcbiAgLCBzY29wZToge1xuICAgICAgd29ya29yZGVycyA6ICc9JyxcbiAgICAgIHJlc3VsdE1hcDogJz0nLFxuICAgICAgc2VsZWN0ZWRNb2RlbDogJz0nXG4gICAgfVxuICAsIGNvbnRyb2xsZXI6IGZ1bmN0aW9uKCRzY29wZSkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgc2VsZi53b3Jrb3JkZXJzID0gJHNjb3BlLndvcmtvcmRlcnM7XG4gICAgICAkc2NvcGUuJHdhdGNoKCd3b3Jrb3JkZXJzJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHNlbGYud29ya29yZGVycyA9ICRzY29wZS53b3Jrb3JkZXJzO1xuICAgICAgfSlcbiAgICAgIHNlbGYucmVzdWx0TWFwID0gJHNjb3BlLnJlc3VsdE1hcDtcbiAgICAgIHNlbGYuc2VsZWN0ZWQgPSAkc2NvcGUuc2VsZWN0ZWRNb2RlbDtcbiAgICAgIHNlbGYuc2VsZWN0V29ya29yZGVyID0gZnVuY3Rpb24oZXZlbnQsIHdvcmtvcmRlcikge1xuICAgICAgICAvLyBzZWxmLnNlbGVjdGVkV29ya29yZGVySWQgPSB3b3Jrb3JkZXIuaWQ7XG4gICAgICAgIG1lZGlhdG9yLnB1Ymxpc2goJ3dmbTp3b3Jrb3JkZXI6c2VsZWN0ZWQnLCB3b3Jrb3JkZXIpO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIH1cbiAgICAgIHNlbGYuaXNXb3Jrb3JkZXJTaG93biA9IGZ1bmN0aW9uKHdvcmtvcmRlcikge1xuICAgICAgICByZXR1cm4gc2VsZi5zaG93bldvcmtvcmRlciA9PT0gd29ya29yZGVyO1xuICAgICAgfTtcblxuICAgICAgc2VsZi5hcHBseUZpbHRlciA9IGZ1bmN0aW9uKHRlcm0pIHtcbiAgICAgICAgdGVybSA9IHRlcm0udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgc2VsZi53b3Jrb3JkZXJzID0gJHNjb3BlLndvcmtvcmRlcnMuZmlsdGVyKGZ1bmN0aW9uKHdvcmtvcmRlcikge1xuICAgICAgICAgIHJldHVybiBTdHJpbmcod29ya29yZGVyLmlkKS5pbmRleE9mKHRlcm0pICE9PSAtMVxuICAgICAgICAgICAgfHwgU3RyaW5nKHdvcmtvcmRlci50aXRsZSkudG9Mb3dlckNhc2UoKS5pbmRleE9mKHRlcm0pICE9PSAtMTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgIH1cbiAgLCBjb250cm9sbGVyQXM6ICdjdHJsJ1xuICB9O1xufSlcblxuLmRpcmVjdGl2ZSgnd29ya29yZGVyJywgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUsIG1lZGlhdG9yKSB7XG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdFJ1xuICAsIHRlbXBsYXRlOiAkdGVtcGxhdGVDYWNoZS5nZXQoJ3dmbS10ZW1wbGF0ZS93b3Jrb3JkZXIudHBsLmh0bWwnKVxuICAsIHNjb3BlOiB7XG4gICAgd29ya29yZGVyOiAnPScsXG4gICAgYXNzaWduZWU6ICc9JyxcbiAgICBzdGF0dXM6ICc9J1xuICAgIH1cbiAgLCBjb250cm9sbGVyOiBmdW5jdGlvbigkc2NvcGUpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIHNlbGYuc2hvd1NlbGVjdEJ1dHRvbiA9ICEhICRzY29wZS4kcGFyZW50LndvcmtvcmRlcnM7XG4gICAgICBzZWxmLnNlbGVjdFdvcmtvcmRlciA9IGZ1bmN0aW9uKGV2ZW50LCB3b3Jrb3JkZXIpIHtcbiAgICAgICAgaWYod29ya29yZGVyLmlkKSB7XG4gICAgICAgICAgbWVkaWF0b3IucHVibGlzaCgnd2ZtOndvcmtvcmRlcjpzZWxlY3RlZCcsIHdvcmtvcmRlcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgbWVkaWF0b3IucHVibGlzaCgnd2ZtOndvcmtvcmRlcjpsaXN0Jyk7XG4gICAgICAgIH1cblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIH1cbiAgICB9XG4gICwgY29udHJvbGxlckFzOiAnY3RybCdcbiAgfTtcbn0pXG5cbi5kaXJlY3RpdmUoJ3dvcmtvcmRlckZvcm0nLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSwgbWVkaWF0b3IpIHtcbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0UnXG4gICwgdGVtcGxhdGU6ICR0ZW1wbGF0ZUNhY2hlLmdldCgnd2ZtLXRlbXBsYXRlL3dvcmtvcmRlci1mb3JtLnRwbC5odG1sJylcbiAgLCBzY29wZToge1xuICAgIHdvcmtvcmRlciA6ICc9dmFsdWUnXG4gICwgd29ya2Zsb3dzOiAnPSdcbiAgLCB3b3JrZXJzOiAnPSdcbiAgLCBzdGF0dXM6ICc9J1xuICAgIH1cbiAgLCBjb250cm9sbGVyOiBmdW5jdGlvbigkc2NvcGUpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIHNlbGYubW9kZWwgPSBhbmd1bGFyLmNvcHkoJHNjb3BlLndvcmtvcmRlcik7XG4gICAgICBzZWxmLndvcmtmbG93cyA9ICRzY29wZS53b3JrZmxvd3M7XG4gICAgICBzZWxmLndvcmtlcnMgPSAkc2NvcGUud29ya2VycztcbiAgICAgIHNlbGYuc3VibWl0dGVkID0gZmFsc2U7XG4gICAgICBpZiAoc2VsZi5tb2RlbCAmJiBzZWxmLm1vZGVsLnN0YXJ0VGltZXN0YW1wKSB7XG4gICAgICAgIHNlbGYubW9kZWwuZmluaXNoRGF0ZSA9IG5ldyBEYXRlKHNlbGYubW9kZWwuc3RhcnRUaW1lc3RhbXApO1xuICAgICAgICBzZWxmLm1vZGVsLmZpbmlzaFRpbWUgPSBuZXcgRGF0ZShzZWxmLm1vZGVsLnN0YXJ0VGltZXN0YW1wKTtcbiAgICAgIH07XG4gICAgICBzZWxmLnNlbGVjdFdvcmtvcmRlciA9IGZ1bmN0aW9uKGV2ZW50LCB3b3Jrb3JkZXIpIHtcbiAgICAgICAgaWYod29ya29yZGVyLmlkKSB7XG4gICAgICAgICAgbWVkaWF0b3IucHVibGlzaCgnd2ZtOndvcmtvcmRlcjpzZWxlY3RlZCcsIHdvcmtvcmRlcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgbWVkaWF0b3IucHVibGlzaCgnd2ZtOndvcmtvcmRlcjpsaXN0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB9XG4gICAgICBzZWxmLmRvbmUgPSBmdW5jdGlvbihpc1ZhbGlkKSB7XG4gICAgICAgIHNlbGYuc3VibWl0dGVkID0gdHJ1ZTtcbiAgICAgICAgaWYgKGlzVmFsaWQpIHtcbiAgICAgICAgICBzZWxmLm1vZGVsLnN0YXJ0VGltZXN0YW1wID0gbmV3IERhdGUoc2VsZi5tb2RlbC5maW5pc2hEYXRlKTsgLy8gVE9ETzogaW5jb3Jwb3JhdGUgc2VsZi5tb2RlbC5maW5pc2hUaW1lXG4gICAgICAgICAgc2VsZi5tb2RlbC5zdGFydFRpbWVzdGFtcC5zZXRIb3VycyhcbiAgICAgICAgICAgIHNlbGYubW9kZWwuZmluaXNoVGltZS5nZXRIb3VycygpLFxuICAgICAgICAgICAgc2VsZi5tb2RlbC5maW5pc2hUaW1lLmdldE1pbnV0ZXMoKSxcbiAgICAgICAgICAgIHNlbGYubW9kZWwuZmluaXNoVGltZS5nZXRTZWNvbmRzKCksXG4gICAgICAgICAgICBzZWxmLm1vZGVsLmZpbmlzaFRpbWUuZ2V0TWlsbGlzZWNvbmRzKClcbiAgICAgICAgICApO1xuICAgICAgICAgIHNlbGYubW9kZWwuZmluaXNoRGF0ZSA9IG5ldyBEYXRlKHNlbGYubW9kZWwuc3RhcnRUaW1lc3RhbXApO1xuICAgICAgICAgIHNlbGYubW9kZWwuZmluaXNoVGltZSA9IG5ldyBEYXRlKHNlbGYubW9kZWwuc3RhcnRUaW1lc3RhbXApO1xuICAgICAgICAgIGlmICghc2VsZi5tb2RlbC5pZCAmJiBzZWxmLm1vZGVsLmlkICE9PSAwKSB7XG4gICAgICAgICAgICBtZWRpYXRvci5wdWJsaXNoKCd3Zm06d29ya29yZGVyOmNyZWF0ZWQnLCBzZWxmLm1vZGVsKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWVkaWF0b3IucHVibGlzaCgnd2ZtOndvcmtvcmRlcjp1cGRhdGVkJywgc2VsZi5tb2RlbCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAsIGNvbnRyb2xsZXJBczogJ2N0cmwnXG4gIH07XG59KVxuXG4uZGlyZWN0aXZlKCd3b3Jrb3JkZXJTdGF0dXMnLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSwgbWVkaWF0b3IpIHtcbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0UnXG4gICwgdGVtcGxhdGU6ICc8bWQtaWNvbiBtZC1mb250LXNldD1cIm1hdGVyaWFsLWljb25zXCI+e3tzdGF0dXNJY29ufX08bWQtdG9vbHRpcD57e3N0YXR1c319PC9tZC10b29sdGlwPjwvbWQtaWNvbj4nXG4gICwgc2NvcGU6IHtcbiAgICAgIHN0YXR1cyA6ICc9c3RhdHVzJ1xuICAgIH1cbiAgLCBjb250cm9sbGVyOiBmdW5jdGlvbigkc2NvcGUpIHtcbiAgICAgICRzY29wZS5zdGF0dXNJY29uID0gZ2V0U3RhdHVzSWNvbigkc2NvcGUuc3RhdHVzKTtcbiAgICB9XG4gICwgY29udHJvbGxlckFzOiAnY3RybCdcbiAgfVxufSlcblxuLmRpcmVjdGl2ZSgnd29ya29yZGVyU3VibWlzc2lvblJlc3VsdCcsIGZ1bmN0aW9uKCRjb21waWxlKSB7XG4gIHZhciByZW5kZXIgPSBmdW5jdGlvbihzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcbiAgICBpZiAoIXNjb3BlLnJlc3VsdCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgcmVzdWx0ID0gc2NvcGUucmVzdWx0O1xuICAgIHZhciB0ZW1wbGF0ZSA9ICcnO1xuICAgIGlmIChzY29wZS5zdGVwLmZvcm1JZCkge1xuICAgICAgdmFyIHN1Ym1pc3Npb24gPSByZXN1bHQuc3VibWlzc2lvbjtcbiAgICAgIHZhciB0YWcsIHN1YklkO1xuICAgICAgaWYgKHN1Ym1pc3Npb24uX3N1Ym1pc3Npb24pIHtcbiAgICAgICAgdGFnID0gJ3N1Ym1pc3Npb24nO1xuICAgICAgICBzdWJJZCA9IHN1Ym1pc3Npb24uX3N1Ym1pc3Npb25cbiAgICAgICAgdGVtcGxhdGUgPSAnPGFwcGZvcm0tc3VibWlzc2lvbiBzdWJtaXNzaW9uPVwicmVzdWx0LnN1Ym1pc3Npb24uX3N1Ym1pc3Npb25cIj48L2FwcGZvcm0tc3VibWlzc2lvbj4nO1xuICAgICAgfSBlbHNlIGlmIChzdWJtaXNzaW9uLnN1Ym1pc3Npb25JZCkge1xuICAgICAgICB0ZW1wbGF0ZSA9ICc8YXBwZm9ybS1zdWJtaXNzaW9uIHN1Ym1pc3Npb24taWQ9XCJcXCcnK3N1Ym1pc3Npb24uc3VibWlzc2lvbklkKydcXCdcIj48L2FwcGZvcm0tc3VibWlzc2lvbj4nO1xuICAgICAgfSBlbHNlIGlmIChzdWJtaXNzaW9uLnN1Ym1pc3Npb25Mb2NhbElkKSB7XG4gICAgICAgIHRlbXBsYXRlID0gJzxhcHBmb3JtLXN1Ym1pc3Npb24gc3VibWlzc2lvbi1sb2NhbC1pZD1cIlxcJycrc3VibWlzc2lvbi5zdWJtaXNzaW9uTG9jYWxJZCsnXFwnXCI+PC9hcHBmb3JtLXN1Ym1pc3Npb24+JztcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRlbXBsYXRlID0gc2NvcGUuc3RlcC50ZW1wbGF0ZXMudmlldztcbiAgICB9XG4gICAgZWxlbWVudC5hcHBlbmQodGVtcGxhdGUpO1xuICAgICRjb21waWxlKGVsZW1lbnQuY29udGVudHMoKSkoc2NvcGUpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdFJ1xuICAsIHNjb3BlOiB7XG4gICAgICByZXN1bHQ6ICc9J1xuICAgICwgc3RlcDogJz0nXG4gICAgfVxuICAsIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcbiAgICAgIHJlbmRlcihzY29wZSwgZWxlbWVudCwgYXR0cnMpO1xuICAgIH1cbiAgfTtcbn0pXG47XG4iLCIvKipcbiogQ09ORklERU5USUFMXG4qIENvcHlyaWdodCAyMDE2IFJlZCBIYXQsIEluYy4gYW5kL29yIGl0cyBhZmZpbGlhdGVzLlxuKiBUaGlzIGlzIHVucHVibGlzaGVkIHByb3ByaWV0YXJ5IHNvdXJjZSBjb2RlIG9mIFJlZCBIYXQuXG4qKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIGNvbmZpZyA9IHJlcXVpcmUoJy4uL2NvbmZpZycpXG4gICwgXyA9IHJlcXVpcmUoJ2xvZGFzaCcpXG4gIDtcblxubW9kdWxlLmV4cG9ydHMgPSAnd2ZtLndvcmtvcmRlci5zeW5jJztcblxuZnVuY3Rpb24gd3JhcE1hbmFnZXIoJHEsICR0aW1lb3V0LCBtYW5hZ2VyKSB7XG4gIHZhciB3cmFwcGVkTWFuYWdlciA9IF8uY3JlYXRlKG1hbmFnZXIpO1xuICB3cmFwcGVkTWFuYWdlci5uZXcgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xuICAgICR0aW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHdvcmtvcmRlciA9IHtcbiAgICAgICAgdHlwZTogJ0pvYiBPcmRlcidcbiAgICAgICwgc3RhdHVzOiAnTmV3J1xuICAgICAgfTtcbiAgICAgIGRlZmVycmVkLnJlc29sdmUod29ya29yZGVyKTtcbiAgICB9LCAwKTtcbiAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbiAgfTtcblxuICByZXR1cm4gd3JhcHBlZE1hbmFnZXI7XG59XG5cbmFuZ3VsYXIubW9kdWxlKCd3Zm0ud29ya29yZGVyLnN5bmMnLCBbcmVxdWlyZSgnZmgtd2ZtLXN5bmMnKV0pXG4uZmFjdG9yeSgnd29ya29yZGVyU3luYycsIGZ1bmN0aW9uKCRxLCAkdGltZW91dCwgc3luY1NlcnZpY2UpIHtcbiAgc3luY1NlcnZpY2UuaW5pdCgkZmgsIGNvbmZpZy5zeW5jT3B0aW9ucyk7XG4gIHZhciB3b3Jrb3JkZXJTeW5jID0ge307XG4gIHdvcmtvcmRlclN5bmMuY3JlYXRlTWFuYWdlciA9IGZ1bmN0aW9uKHF1ZXJ5UGFyYW1zKSB7XG4gICAgaWYgKHdvcmtvcmRlclN5bmMubWFuYWdlcikge1xuICAgICAgcmV0dXJuICRxLndoZW4od29ya29yZGVyU3luYy5tYW5hZ2VyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHdvcmtvcmRlclN5bmMubWFuYWdlclByb21pc2UgPSBzeW5jU2VydmljZS5tYW5hZ2UoY29uZmlnLmRhdGFzZXRJZCwgbnVsbCwgcXVlcnlQYXJhbXMpXG4gICAgICAudGhlbihmdW5jdGlvbihtYW5hZ2VyKSB7XG4gICAgICAgIHdvcmtvcmRlclN5bmMubWFuYWdlciA9IHdyYXBNYW5hZ2VyKCRxLCAkdGltZW91dCwgbWFuYWdlcik7XG4gICAgICAgIGNvbnNvbGUubG9nKCdTeW5jIGlzIG1hbmFnaW5nIGRhdGFzZXQ6JywgY29uZmlnLmRhdGFzZXRJZCwgJ3dpdGggZmlsdGVyOiAnLCBxdWVyeVBhcmFtcyk7XG4gICAgICAgIHJldHVybiB3b3Jrb3JkZXJTeW5jLm1hbmFnZXI7XG4gICAgICB9KVxuICAgIH1cbiAgfTtcbiAgd29ya29yZGVyU3luYy5yZW1vdmVNYW5hZ2VyID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHdvcmtvcmRlclN5bmMubWFuYWdlcikge1xuICAgICAgcmV0dXJuIHdvcmtvcmRlclN5bmMubWFuYWdlci5zYWZlU3RvcCgpXG4gICAgICAudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgZGVsZXRlIHdvcmtvcmRlclN5bmMubWFuYWdlcjtcbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIHJldHVybiB3b3Jrb3JkZXJTeW5jO1xufSlcbjtcbiIsIi8qKlxuKiBDT05GSURFTlRJQUxcbiogQ29weXJpZ2h0IDIwMTYgUmVkIEhhdCwgSW5jLiBhbmQvb3IgaXRzIGFmZmlsaWF0ZXMuXG4qIFRoaXMgaXMgdW5wdWJsaXNoZWQgcHJvcHJpZXRhcnkgc291cmNlIGNvZGUgb2YgUmVkIEhhdC5cbioqL1xuJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICd3Zm0ud29ya29yZGVyJztcblxuYW5ndWxhci5tb2R1bGUoJ3dmbS53b3Jrb3JkZXInLCBbXG4gIHJlcXVpcmUoJy4vZGlyZWN0aXZlJylcbiwgcmVxdWlyZSgnLi9zeW5jLXNlcnZpY2UnKVxuXSlcbiIsIi8qKlxuKiBDT05GSURFTlRJQUxcbiogQ29weXJpZ2h0IDIwMTYgUmVkIEhhdCwgSW5jLiBhbmQvb3IgaXRzIGFmZmlsaWF0ZXMuXG4qIFRoaXMgaXMgdW5wdWJsaXNoZWQgcHJvcHJpZXRhcnkgc291cmNlIGNvZGUgb2YgUmVkIEhhdC5cbioqL1xuJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgYXBpSG9zdDogJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MCcsXG4gIGFwaVBhdGg6ICcvYXBpL3dmbS93b3Jrb3JkZXInLFxuICBkYXRhc2V0SWQgOiAnd29ya29yZGVycycsXG4gIHN5bmNPcHRpb25zIDoge1xuICAgIFwic3luY19mcmVxdWVuY3lcIiA6IDUsXG4gICAgXCJzdG9yYWdlX3N0cmF0ZWd5XCI6IFwiZG9tXCIsXG4gICAgXCJkb19jb25zb2xlX2xvZ1wiOiBmYWxzZVxuICB9XG59XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcblxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgc2V0VGltZW91dChkcmFpblF1ZXVlLCAwKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsIi8qKlxuKiBDT05GSURFTlRJQUxcbiogQ29weXJpZ2h0IDIwMTYgUmVkIEhhdCwgSW5jLiBhbmQvb3IgaXRzIGFmZmlsaWF0ZXMuXG4qIFRoaXMgaXMgdW5wdWJsaXNoZWQgcHJvcHJpZXRhcnkgc291cmNlIGNvZGUgb2YgUmVkIEhhdC5cbioqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgYW5ndWxhciA9IHJlcXVpcmUoJ2FuZ3VsYXInKTtcbnZhciBfID0gcmVxdWlyZSgnbG9kYXNoJyk7XG5yZXF1aXJlKCdmZWVkaGVucnknKTtcblxuYW5ndWxhci5tb2R1bGUoJ3dmbS1tb2JpbGUnLCBbXG4sIHJlcXVpcmUoJ2FuZ3VsYXItbWVzc2FnZXMnKVxuLCByZXF1aXJlKCdhbmd1bGFyLXVpLXJvdXRlcicpXG4sIHJlcXVpcmUoJ2FuZ3VsYXItbWF0ZXJpYWwnKVxuLCByZXF1aXJlKCdmaC13Zm0tbWVzc2FnZScpXG4sIHJlcXVpcmUoJ2ZoLXdmbS1tZWRpYXRvcicpXG4sIHJlcXVpcmUoJ2ZoLXdmbS13b3Jrb3JkZXInKVxuLCByZXF1aXJlKCdmaC13Zm0tcmVzdWx0JylcbiwgcmVxdWlyZSgnZmgtd2ZtLXdvcmtmbG93JylcbiwgcmVxdWlyZSgnZmgtd2ZtLWFwcGZvcm0nKVxuLCByZXF1aXJlKCdmaC13Zm0tcmlzay1hc3Nlc3NtZW50JylcbiwgcmVxdWlyZSgnZmgtd2ZtLXZlaGljbGUtaW5zcGVjdGlvbicpXG4sIHJlcXVpcmUoJ2ZoLXdmbS11c2VyJylcbiwgcmVxdWlyZSgnZmgtd2ZtLW1hcCcpXG4sIHJlcXVpcmUoJ2ZoLXdmbS1maWxlJylcbiwgcmVxdWlyZSgnZmgtd2ZtLWNhbWVyYScpXG5cbiwgcmVxdWlyZSgnLi93b3Jrb3JkZXIvd29ya29yZGVyJylcbiwgcmVxdWlyZSgnLi93b3JrZmxvdy93b3JrZmxvdycpXG4sIHJlcXVpcmUoJy4vbWVzc2FnZS9tZXNzYWdlJylcbiwgcmVxdWlyZSgnLi9tYXAvbWFwJylcbiwgcmVxdWlyZSgnLi9zZXR0aW5nL3NldHRpbmcnKVxuLCByZXF1aXJlKCcuL2F1dGgvYXV0aCcpXG4sIHJlcXVpcmUoJy4vY2FsZW5kYXIvY2FsZW5kYXInKVxuLCByZXF1aXJlKCcuL2ZpbGUvZmlsZScpXG5dKVxuXG4uY29uZmlnKGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgLy8gaWYgbm9uZSBvZiB0aGUgc3RhdGVzIGFyZSBtYXRjaGVkLCB1c2UgdGhpcyBhcyB0aGUgZmFsbGJhY2tcbiAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnL3dvcmtvcmRlcnMnKTtcblxuICAkc3RhdGVQcm92aWRlclxuICAgIC5zdGF0ZSgnYXBwJywge1xuICAgICAgYWJzdHJhY3Q6IHRydWUsXG4gICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9tYWluLnRwbC5odG1sJyxcbiAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgcHJvZmlsZURhdGE6IGZ1bmN0aW9uKHVzZXJDbGllbnQpIHtcbiAgICAgICAgICByZXR1cm4gdXNlckNsaWVudC5nZXRQcm9maWxlKCk7XG4gICAgICAgIH0sXG4gICAgICAgIHN5bmNNYW5hZ2VyczogZnVuY3Rpb24oc3luY1Bvb2wsIHByb2ZpbGVEYXRhKSB7XG4gICAgICAgICAgcmV0dXJuIHN5bmNQb29sLnN5bmNNYW5hZ2VyTWFwKHByb2ZpbGVEYXRhKTtcbiAgICAgICAgfSxcbiAgICAgICAgd29ya29yZGVyTWFuYWdlcjogZnVuY3Rpb24oc3luY01hbmFnZXJzKSB7XG4gICAgICAgICAgcmV0dXJuIHN5bmNNYW5hZ2Vycy53b3Jrb3JkZXJzO1xuICAgICAgICB9LFxuICAgICAgICB3b3JrZmxvd01hbmFnZXI6IGZ1bmN0aW9uKHN5bmNNYW5hZ2Vycykge1xuICAgICAgICAgIHJldHVybiBzeW5jTWFuYWdlcnMud29ya2Zsb3dzO1xuICAgICAgICB9LFxuICAgICAgICByZXN1bHRNYW5hZ2VyOiBmdW5jdGlvbihzeW5jTWFuYWdlcnMpIHtcbiAgICAgICAgICByZXR1cm4gc3luY01hbmFnZXJzLnJlc3VsdDtcbiAgICAgICAgfSxcbiAgICAgICAgbWVzc2FnZU1hbmFnZXI6IGZ1bmN0aW9uKHN5bmNNYW5hZ2Vycykge1xuICAgICAgICAgIHJldHVybiBzeW5jTWFuYWdlcnMubWVzc2FnZXM7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBjb250cm9sbGVyOiBmdW5jdGlvbigkcm9vdFNjb3BlLCAkc2NvcGUsICRzdGF0ZSwgJG1kU2lkZW5hdiwgbWVkaWF0b3IsIHByb2ZpbGVEYXRhLCB1c2VyQ2xpZW50LCB3b3Jrb3JkZXJTeW5jLCBtZXNzYWdlU3luYykge1xuICAgICAgICAkc2NvcGUucHJvZmlsZURhdGEgPSBwcm9maWxlRGF0YTtcbiAgICAgICAgJHNjb3BlLnRvZ2dsZVNpZGVuYXYgPSBmdW5jdGlvbihldmVudCwgbWVudUlkKSB7XG4gICAgICAgICAgJG1kU2lkZW5hdihtZW51SWQpLnRvZ2dsZSgpO1xuICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9O1xuICAgICAgICAkc2NvcGUubmF2aWdhdGVUbyA9IGZ1bmN0aW9uKHN0YXRlLCBwYXJhbXMpIHtcbiAgICAgICAgICBpZiAoc3RhdGUpIHtcbiAgICAgICAgICAgICRzdGF0ZS5nbyhzdGF0ZSwgcGFyYW1zKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxufSlcblxuLnJ1bihmdW5jdGlvbigkcm9vdFNjb3BlLCAkc3RhdGUsIG1lZGlhdG9yLCBzeW5jUG9vbCkge1xuICBtZWRpYXRvci5zdWJzY3JpYmUoJ3dmbTphdXRoOnByb2ZpbGU6Y2hhbmdlJywgZnVuY3Rpb24oX3Byb2ZpbGVEYXRhKSB7XG4gICAgaWYgKF9wcm9maWxlRGF0YSA9PT0gbnVsbCkgeyAvLyBhIGxvZ291dFxuICAgICAgc3luY1Bvb2wucmVtb3ZlTWFuYWdlcnMoKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAkc3RhdGUuZ28oJ2FwcC5sb2dpbicsIHVuZGVmaW5lZCwge3JlbG9hZDogdHJ1ZX0pO1xuICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyKGVycik7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3luY1Bvb2wuc3luY01hbmFnZXJNYXAoX3Byb2ZpbGVEYXRhKSAgLy8gY3JlYXRlZCBtYW5hZ2VycyB3aWxsIGJlIGNhY2hlZFxuICAgICAgLnRoZW4oc3luY1Bvb2wuZm9yY2VTeW5jKVxuICAgICAgLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICgkcm9vdFNjb3BlLnRvU3RhdGUpIHtcbiAgICAgICAgICAkc3RhdGUuZ28oJHJvb3RTY29wZS50b1N0YXRlLCAkcm9vdFNjb3BlLnRvUGFyYW1zLCB7cmVsb2FkOiB0cnVlfSk7XG4gICAgICAgICAgZGVsZXRlICRyb290U2NvcGUudG9TdGF0ZTtcbiAgICAgICAgICBkZWxldGUgJHJvb3RTY29wZS50b1BhcmFtcztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAkc3RhdGUuZ28oJ2FwcC53b3Jrb3JkZXJzJywgdW5kZWZpbmVkLCB7cmVsb2FkOiB0cnVlfSk7XG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICB9O1xuICB9KTtcbn0pXG5cbi5mYWN0b3J5KCdzeW5jUG9vbCcsIGZ1bmN0aW9uKCRxLCAkc3RhdGUsIG1lZGlhdG9yLCB3b3Jrb3JkZXJTeW5jLCB3b3JrZmxvd1N5bmMsIHJlc3VsdFN5bmMsIG1lc3NhZ2VTeW5jKSB7XG4gIHZhciBzeW5jUG9vbCA9IHt9O1xuXG4gIHN5bmNQb29sLnJlbW92ZU1hbmFnZXJzID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHByb21pc2VzID0gW107XG4gICAgLy8gYWRkIGFueSBhZGRpdG9uYWwgbWFuYWdlciBjbGVhbnVwcyBoZXJlXG4gICAgLy8gVE9ETzogcmVwbGFjZSB0aGlzIHdpdGggYSBtZWRpYXRvciBldmVudCB0aGF0IG1vZHVsZXMgY2FuIGxpc3RlbiBmb3JcbiAgICBwcm9taXNlcy5wdXNoKHdvcmtvcmRlclN5bmMucmVtb3ZlTWFuYWdlcigpKTtcbiAgICBwcm9taXNlcy5wdXNoKG1lc3NhZ2VTeW5jLnJlbW92ZU1hbmFnZXIoKSk7XG4gICAgcHJvbWlzZXMucHVzaCh3b3JrZmxvd1N5bmMucmVtb3ZlTWFuYWdlcigpKTtcbiAgICAvLyBwcm9taXNlcy5wdXNoKHJlc3VsdFN5bmMucmVtb3ZlTWFuYWdlcigpKTtcbiAgICByZXR1cm4gJHEuYWxsKHByb21pc2VzKTtcbiAgfVxuXG4gIHN5bmNQb29sLnN5bmNNYW5hZ2VyTWFwID0gZnVuY3Rpb24ocHJvZmlsZURhdGEpIHtcbiAgICBpZiAoISBwcm9maWxlRGF0YSkge1xuICAgICAgcmV0dXJuICRxLndoZW4oe30pO1xuICAgIH1cbiAgICB2YXIgcHJvbWlzZXMgPSBbXTtcbiAgICBpZiAocHJvZmlsZURhdGEgJiYgcHJvZmlsZURhdGEuaWQpIHtcbiAgICAgIHZhciBmaWx0ZXIgPSB7XG4gICAgICAgIGtleTogJ2Fzc2lnbmVlJyxcbiAgICAgICAgdmFsdWU6IHByb2ZpbGVEYXRhLmlkXG4gICAgICB9O1xuICAgICAgdmFyIG1lc3NhZ2VGaWx0ZXIgPSB7XG4gICAgICAgIGtleTogJ3JlY2VpdmVySWQnLFxuICAgICAgICB2YWx1ZTogcHJvZmlsZURhdGEuaWRcbiAgICAgIH1cbiAgICB9O1xuICAgIC8vIGFkZCBhbnkgYWRkaXRvbmFsIG1hbmFnZXIgY3JlYXRlcyBoZXJlXG4gICAgcHJvbWlzZXMucHVzaCh3b3Jrb3JkZXJTeW5jLmNyZWF0ZU1hbmFnZXIoe2ZpbHRlcjogZmlsdGVyfSkpO1xuICAgIHByb21pc2VzLnB1c2god29ya2Zsb3dTeW5jLmNyZWF0ZU1hbmFnZXIoKSk7XG4gICAgcHJvbWlzZXMucHVzaChtZXNzYWdlU3luYy5jcmVhdGVNYW5hZ2VyKHtmaWx0ZXI6IG1lc3NhZ2VGaWx0ZXJ9KSk7XG4gICAgcHJvbWlzZXMucHVzaChyZXN1bHRTeW5jLm1hbmFnZXJQcm9taXNlKTtcbiAgICByZXR1cm4gJHEuYWxsKHByb21pc2VzKS50aGVuKGZ1bmN0aW9uKG1hbmFnZXJzKSB7XG4gICAgICB2YXIgbWFwID0ge307XG4gICAgICBtYW5hZ2Vycy5mb3JFYWNoKGZ1bmN0aW9uKG1hbmFnZXJXcmFwcGVyKSB7XG4gICAgICAgIG1hcFttYW5hZ2VyV3JhcHBlci5tYW5hZ2VyLmRhdGFzZXRJZF0gPSBtYW5hZ2VyV3JhcHBlcjtcbiAgICAgIH0pO1xuICAgICAgbWFwLndvcmtvcmRlcnMubWFuYWdlci5wdWJsaXNoUmVjb3JkRGVsdGFSZWNlaXZlZChtZWRpYXRvcilcbiAgICAgIHJldHVybiBtYXA7XG4gICAgfSk7XG4gIH1cblxuICBzeW5jUG9vbC5mb3JjZVN5bmMgPSBmdW5jdGlvbihtYW5hZ2Vycykge1xuICAgIHZhciBwcm9taXNlcyA9IFtdO1xuICAgIF8uZm9yT3duKG1hbmFnZXJzLCBmdW5jdGlvbihtYW5hZ2VyKSB7XG4gICAgICBwcm9taXNlcy5wdXNoKFxuICAgICAgICBtYW5hZ2VyLmZvcmNlU3luYygpXG4gICAgICAgICAgLnRoZW4obWFuYWdlci53YWl0Rm9yU3luYylcbiAgICAgICAgICAudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBtYW5hZ2VyO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuICAgIH0pO1xuICAgIHJldHVybiAkcS5hbGwocHJvbWlzZXMpXG4gIH1cblxuICByZXR1cm4gc3luY1Bvb2w7XG59KVxuXG4ucnVuKGZ1bmN0aW9uKCRyb290U2NvcGUsICRzdGF0ZSwgJHEsIG1lZGlhdG9yLCB1c2VyQ2xpZW50KSB7XG4gIHZhciBpbml0UHJvbWlzZXMgPSBbXTtcbiAgdmFyIGluaXRMaXN0ZW5lciA9IG1lZGlhdG9yLnN1YnNjcmliZSgncHJvbWlzZTppbml0JywgZnVuY3Rpb24ocHJvbWlzZSkge1xuICAgIGluaXRQcm9taXNlcy5wdXNoKHByb21pc2UpO1xuICB9KTtcbiAgbWVkaWF0b3IucHVibGlzaCgnaW5pdCcpO1xuICBjb25zb2xlLmxvZyhpbml0UHJvbWlzZXMubGVuZ3RoLCAnaW5pdCBwcm9taXNlcyB0byByZXNvbHZlLicpO1xuICB2YXIgYWxsID0gKGluaXRQcm9taXNlcy5sZW5ndGggPiAwKSA/ICRxLmFsbChpbml0UHJvbWlzZXMpIDogJHEud2hlbihudWxsKTtcbiAgYWxsLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgJHJvb3RTY29wZS5yZWFkeSA9IHRydWU7XG4gICAgY29uc29sZS5sb2coaW5pdFByb21pc2VzLmxlbmd0aCwgJ2luaXQgcHJvbWlzZXMgcmVzb2x2ZWQuJyk7XG4gICAgbWVkaWF0b3IucmVtb3ZlKCdwcm9taXNlOmluaXQnLCBpbml0TGlzdGVuZXIuaWQpO1xuICAgIHJldHVybiBudWxsO1xuICB9KTtcblxuICAkcm9vdFNjb3BlLiRvbignJHN0YXRlQ2hhbmdlU3RhcnQnLCBmdW5jdGlvbihlLCB0b1N0YXRlLCB0b1BhcmFtcywgZnJvbVN0YXRlLCBmcm9tUGFyYW1zKSB7XG4gICAgaWYodG9TdGF0ZS5uYW1lICE9PSBcImFwcC5sb2dpblwiKXtcbiAgICAgIHVzZXJDbGllbnQuaGFzU2Vzc2lvbigpLnRoZW4oZnVuY3Rpb24oaGFzU2Vzc2lvbikge1xuICAgICAgICBpZighaGFzU2Vzc2lvbikge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAkcm9vdFNjb3BlLnRvU3RhdGUgPSB0b1N0YXRlO1xuICAgICAgICAgICRyb290U2NvcGUudG9QYXJhbXMgPSB0b1BhcmFtcztcbiAgICAgICAgICAkc3RhdGUuZ28oJ2FwcC5sb2dpbicpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuICB9KTtcbiAgJHJvb3RTY29wZS4kb24oJyRzdGF0ZUNoYW5nZUVycm9yJywgZnVuY3Rpb24oZXZlbnQsIHRvU3RhdGUsIHRvUGFyYW1zLCBmcm9tU3RhdGUsIGZyb21QYXJhbXMsIGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignU3RhdGUgY2hhbmdlIGVycm9yOiAnLCBlcnJvciwge1xuICAgICAgZXZlbnQ6IGV2ZW50LFxuICAgICAgdG9TdGF0ZTogdG9TdGF0ZSxcbiAgICAgIHRvUGFyYW1zOiB0b1BhcmFtcyxcbiAgICAgIGZyb21TdGF0ZTogZnJvbVN0YXRlLFxuICAgICAgZnJvbVBhcmFtczogZnJvbVBhcmFtcyxcbiAgICAgIGVycm9yOiBlcnJvclxuICAgIH0pO1xuICAgIGlmIChlcnJvclsnZ2V0IHN0YWNrJ10pIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JbJ2dldCBzdGFjayddKCkpO1xuICAgIH1cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9KTtcbn0pO1xuIiwiLyoqXG4qIENPTkZJREVOVElBTFxuKiBDb3B5cmlnaHQgMjAxNiBSZWQgSGF0LCBJbmMuIGFuZC9vciBpdHMgYWZmaWxpYXRlcy5cbiogVGhpcyBpcyB1bnB1Ymxpc2hlZCBwcm9wcmlldGFyeSBzb3VyY2UgY29kZSBvZiBSZWQgSGF0LlxuKiovXG4ndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gJ3dmbS1tb2JpbGUuYXV0aCc7XG5cbmFuZ3VsYXIubW9kdWxlKCd3Zm0tbW9iaWxlLmF1dGgnLCBbXG4gICd1aS5yb3V0ZXInLFxuLCAnd2ZtLmNvcmUubWVkaWF0b3InXG5dKVxuXG4uY29uZmlnKGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICRzdGF0ZVByb3ZpZGVyXG4gICAgLnN0YXRlKCdhcHAubG9naW4nLCB7XG4gICAgICAgIHVybDogJy9sb2dpbicsXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL2F1dGgvbG9naW4udHBsLmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnTG9naW5DdHJsIGFzIGN0cmwnLFxuICAgICAgICByZXNvbHZlOiB7XG4gICAgICAgICAgaGFzU2Vzc2lvbjogZnVuY3Rpb24odXNlckNsaWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIHVzZXJDbGllbnQuaGFzU2Vzc2lvbigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAuc3RhdGUoJ2FwcC5wcm9maWxlJywge1xuICAgICAgICB1cmw6ICcvcHJvZmlsZScsXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL2F1dGgvcHJvZmlsZS50cGwuaHRtbCcsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdQcm9maWxlQ3RybCBhcyBjdHJsJyxcbiAgICAgIH0pXG59KVxuXG4uY29udHJvbGxlcignTG9naW5DdHJsJywgZnVuY3Rpb24odXNlckNsaWVudCwgaGFzU2Vzc2lvbikge1xuICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgc2VsZi5oYXNTZXNzaW9uID0gaGFzU2Vzc2lvbjtcblxuICBzZWxmLmxvZ2luTWVzc2FnZXMgPSB7c3VjY2VzczogZmFsc2UsIGVycm9yOiBmYWxzZX07XG5cbiAgc2VsZi5sb2dpbiA9IGZ1bmN0aW9uKHZhbGlkKSB7XG4gICAgaWYgKHZhbGlkKSB7XG4gICAgICB1c2VyQ2xpZW50LmF1dGgoc2VsZi51c2VybmFtZSwgc2VsZi5wYXNzd29yZClcbiAgICAgIC50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICBzZWxmLmxvZ2luTWVzc2FnZXMuc3VjY2VzcyA9IHRydWU7XG4gICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgc2VsZi5sb2dpbk1lc3NhZ2VzLmVycm9yID0gdHJ1ZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHNlbGYubG9nb3V0ID0gZnVuY3Rpb24oKSB7XG4gICAgdXNlckNsaWVudC5jbGVhclNlc3Npb24oKVxuICB9XG59KVxuXG4uY29udHJvbGxlcignUHJvZmlsZUN0cmwnLCBmdW5jdGlvbigpIHtcbn0pXG47XG4iLCIvKipcbiogQ09ORklERU5USUFMXG4qIENvcHlyaWdodCAyMDE2IFJlZCBIYXQsIEluYy4gYW5kL29yIGl0cyBhZmZpbGlhdGVzLlxuKiBUaGlzIGlzIHVucHVibGlzaGVkIHByb3ByaWV0YXJ5IHNvdXJjZSBjb2RlIG9mIFJlZCBIYXQuXG4qKi9cbid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSAnd2ZtLW1vYmlsZS5jYWxlbmRhcic7XG5cbmFuZ3VsYXIubW9kdWxlKCd3Zm0tbW9iaWxlLmNhbGVuZGFyJywgW1xuICAndWkucm91dGVyJyxcbiwgJ3dmbS5jb3JlLm1lZGlhdG9yJ1xuXSlcblxuLmNvbmZpZyhmdW5jdGlvbigkc3RhdGVQcm92aWRlcikge1xuICAkc3RhdGVQcm92aWRlclxuICAgIC5zdGF0ZSgnYXBwLmNhbGVuZGFyJywge1xuICAgICAgdXJsOiAnL2NhbGVuZGFyJyxcbiAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgd29ya29yZGVyczogZnVuY3Rpb24od29ya29yZGVyTWFuYWdlcikge1xuICAgICAgICAgIHJldHVybiB3b3Jrb3JkZXJNYW5hZ2VyLmxpc3QoKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL2NhbGVuZGFyL2NhbGVuZGFyLnRwbC5odG1sJyxcbiAgICAgIGNvbnRyb2xsZXI6ICdjYWxlbmRhckN0cmwgYXMgY3RybCcsXG4gICAgfSlcbn0pXG5cbi5jb250cm9sbGVyKCdjYWxlbmRhckN0cmwnLCBmdW5jdGlvbiAod29ya29yZGVycykge1xuICB0aGlzLndvcmtvcmRlcnMgPSB3b3Jrb3JkZXJzO1xufSlcblxuO1xuIiwiLyoqXG4qIENPTkZJREVOVElBTFxuKiBDb3B5cmlnaHQgMjAxNiBSZWQgSGF0LCBJbmMuIGFuZC9vciBpdHMgYWZmaWxpYXRlcy5cbiogVGhpcyBpcyB1bnB1Ymxpc2hlZCBwcm9wcmlldGFyeSBzb3VyY2UgY29kZSBvZiBSZWQgSGF0LlxuKiovXG4ndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gJ3dmbS1tb2JpbGUuZmlsZSc7XG5cbnZhciBfID0gcmVxdWlyZSgnbG9kYXNoJyk7XG5cbmFuZ3VsYXIubW9kdWxlKCd3Zm0tbW9iaWxlLmZpbGUnLCBbXG4gICd1aS5yb3V0ZXInLFxuICAnd2ZtLmNvcmUubWVkaWF0b3InXG5dKVxuXG4uY29uZmlnKGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICRzdGF0ZVByb3ZpZGVyXG4gIC5zdGF0ZSgnYXBwLmZpbGUnLCB7XG4gICAgdXJsOiAnL2ZpbGUnLFxuICAgIHRlbXBsYXRlVXJsOiAnYXBwL2ZpbGUvZmlsZS1saXN0LnRwbC5odG1sJyxcbiAgICBjb250cm9sbGVyOiAnRmlsZUxpc3RDdHJsIGFzIGN0cmwnLFxuICAgIHJlc29sdmU6IHtcbiAgICAgIHByb2ZpbGVEYXRhOiBmdW5jdGlvbih1c2VyQ2xpZW50KSB7XG4gICAgICAgIHJldHVybiB1c2VyQ2xpZW50LmdldFByb2ZpbGUoKTtcbiAgICAgIH0sXG4gICAgICBmaWxlczogZnVuY3Rpb24oZmlsZUNsaWVudCwgcHJvZmlsZURhdGEpIHtcbiAgICAgICAgcmV0dXJuIGZpbGVDbGllbnQubGlzdChwcm9maWxlRGF0YS5pZCk7XG4gICAgICB9XG4gICAgfVxuICB9KVxufSlcblxuLmNvbnRyb2xsZXIoJ0ZpbGVMaXN0Q3RybCcsIGZ1bmN0aW9uKCRzdGF0ZSwgJHdpbmRvdywgJG1kRGlhbG9nLCBtb2JpbGVDYW1lcmEsIGRlc2t0b3BDYW1lcmEsIGZpbGVDbGllbnQsIGZpbGVzLCBwcm9maWxlRGF0YSkge1xuICBzZWxmID0gdGhpcztcbiAgc2VsZi5maWxlcyA9IGZpbGVzLnNsaWNlKCkucmV2ZXJzZSgpO1xuXG4gIHZhciBjYXB0dXJlVGhlblVwbG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICgkd2luZG93LmNvcmRvdmEpIHtcbiAgICAgIHJldHVybiBtb2JpbGVDYW1lcmEuY2FwdHVyZSgpXG4gICAgICAudGhlbihmdW5jdGlvbihjYXB0dXJlKSB7XG4gICAgICAgIHJldHVybiBmaWxlQ2xpZW50LnVwbG9hZEZpbGUocHJvZmlsZURhdGEuaWQsIGNhcHR1cmUuZmlsZVVSSSwge2ZpbGVOYW1lOiBjYXB0dXJlLmZpbGVOYW1lfSkudGhlbihtb2JpbGVDYW1lcmEuY2xlYXJDYWNoZSk7XG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZGVza3RvcENhbWVyYS5jYXB0dXJlKClcbiAgICAgIC50aGVuKGZ1bmN0aW9uKGRhdGFVcmwpIHtcbiAgICAgICAgcmV0dXJuIGZpbGVDbGllbnQudXBsb2FkRGF0YVVybChwcm9maWxlRGF0YS5pZCwgZGF0YVVybClcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgc2VsZi5jYXB0dXJlUGhvdG8gPSBmdW5jdGlvbigpIHtcbiAgICBjYXB0dXJlVGhlblVwbG9hZCgpLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICBjb25zb2xlLmxvZygnUGhvdG8gdXBsb2FkIGNvbXBsZXRlJyk7XG4gICAgICAkc3RhdGUuZ28oJ2FwcC5maWxlJywgdW5kZWZpbmVkLCB7cmVsb2FkOnRydWV9KTtcbiAgICAgIHJldHVybjtcbiAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgfSk7XG4gIH1cbn0pXG47XG4iLCIvKipcbiogQ09ORklERU5USUFMXG4qIENvcHlyaWdodCAyMDE2IFJlZCBIYXQsIEluYy4gYW5kL29yIGl0cyBhZmZpbGlhdGVzLlxuKiBUaGlzIGlzIHVucHVibGlzaGVkIHByb3ByaWV0YXJ5IHNvdXJjZSBjb2RlIG9mIFJlZCBIYXQuXG4qKi9cbid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSAnd2ZtLW1vYmlsZS5tYXAnO1xuXG5hbmd1bGFyLm1vZHVsZSgnd2ZtLW1vYmlsZS5tYXAnLCBbXG4gICd1aS5yb3V0ZXInLFxuLCAnd2ZtLmNvcmUubWVkaWF0b3InXG5dKVxuXG4uY29uZmlnKGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICRzdGF0ZVByb3ZpZGVyXG4gICAgLnN0YXRlKCdhcHAubWFwJywge1xuICAgICAgdXJsOiAnL21hcCcsXG4gICAgICByZXNvbHZlOiB7XG4gICAgICAgIHdvcmtvcmRlcnM6IGZ1bmN0aW9uKHdvcmtvcmRlck1hbmFnZXIpIHtcbiAgICAgICAgICByZXR1cm4gd29ya29yZGVyTWFuYWdlci5saXN0KCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9tYXAvbWFwLnRwbC5odG1sJyxcbiAgICAgIGNvbnRyb2xsZXI6ICdNYXBDdHJsIGFzIGN0cmwnLFxuICAgIH0pXG59KVxuXG4uY29udHJvbGxlcignTWFwQ3RybCcsIGZ1bmN0aW9uICgkd2luZG93LCAkZG9jdW1lbnQsICR0aW1lb3V0LCB3b3Jrb3JkZXJzKSB7XG4gIHRoaXMuY2VudGVyID0gWzQ5LjI4LCAtMTIzLjEyXTtcbiAgdGhpcy53b3Jrb3JkZXJzID0gd29ya29yZGVycztcbn0pXG5cbjtcbiIsIi8qKlxuKiBDT05GSURFTlRJQUxcbiogQ29weXJpZ2h0IDIwMTYgUmVkIEhhdCwgSW5jLiBhbmQvb3IgaXRzIGFmZmlsaWF0ZXMuXG4qIFRoaXMgaXMgdW5wdWJsaXNoZWQgcHJvcHJpZXRhcnkgc291cmNlIGNvZGUgb2YgUmVkIEhhdC5cbioqL1xuJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICd3Zm0tbW9iaWxlLm1lc3NhZ2VzJztcblxuYW5ndWxhci5tb2R1bGUoJ3dmbS1tb2JpbGUubWVzc2FnZXMnLCBbXG4gICd1aS5yb3V0ZXInLFxuLCAnd2ZtLmNvcmUubWVkaWF0b3InXG5dKVxuXG4uY29uZmlnKGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICRzdGF0ZVByb3ZpZGVyXG4gICAgLnN0YXRlKCdhcHAubWVzc2FnZScsIHtcbiAgICAgICAgdXJsOiAnL21lc3NhZ2VzJyxcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvbWVzc2FnZS9tZXNzYWdlLWxpc3QudHBsLmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnTWVzc2FnZXNDdHJsIGFzIGN0cmwnLFxuICAgICAgICByZXNvbHZlOiB7XG4gICAgICAgICAgbWVzc2FnZXM6IGZ1bmN0aW9uKG1lc3NhZ2VNYW5hZ2VyKSB7XG4gICAgICAgICAgICByZXR1cm4gbWVzc2FnZU1hbmFnZXIubGlzdCgpO1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICAgIC5zdGF0ZSgnYXBwLm1lc3NhZ2UtZGV0YWlsJywge1xuICAgICAgdXJsOiAnL21lc3NhZ2UvOm1lc3NhZ2VJZCcsXG4gICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9tZXNzYWdlL21lc3NhZ2UtZGV0YWlsLnRwbC5odG1sJyxcbiAgICAgIGNvbnRyb2xsZXI6ICdNZXNzYWdlRGV0YWlsQ29udHJvbGxlciBhcyBjdHJsJyxcbiAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgbWVzc2FnZTogZnVuY3Rpb24oJHN0YXRlUGFyYW1zLCBtZXNzYWdlTWFuYWdlcikge1xuICAgICAgICAgIHJldHVybiBtZXNzYWdlTWFuYWdlci5yZWFkKCRzdGF0ZVBhcmFtcy5tZXNzYWdlSWQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbn0pXG4ucnVuKGZ1bmN0aW9uKCRzdGF0ZSwgbWVkaWF0b3IpIHtcbiAgbWVkaWF0b3Iuc3Vic2NyaWJlKCd3Zm06bWVzc2FnZTpzZWxlY3RlZCcsIGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICAkc3RhdGUuZ28oJ2FwcC5tZXNzYWdlLWRldGFpbCcsIHtcbiAgICAgIG1lc3NhZ2VJZDogbWVzc2FnZS5pZFxuICAgIH0pO1xuICB9KTtcbn0pXG4uY29udHJvbGxlcignTWVzc2FnZXNDdHJsJywgZnVuY3Rpb24oJHNjb3BlLCAkZmlsdGVyLCBtZWRpYXRvciwgbWVzc2FnZXMpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICBzZWxmLm1lc3NhZ2VzID0gbWVzc2FnZXM7XG59KVxuLmNvbnRyb2xsZXIoJ01lc3NhZ2VEZXRhaWxDb250cm9sbGVyJywgZnVuY3Rpb24gKCRzY29wZSwgJHN0YXRlLCBtZWRpYXRvciwgbWVzc2FnZSwgbWVzc2FnZU1hbmFnZXIpIHtcbiAgbWVkaWF0b3Iuc3Vic2NyaWJlRm9yU2NvcGUoJ3dmbTptZXNzYWdlOmNsb3NlOicgKyBtZXNzYWdlLmlkLCAkc2NvcGUsIGZ1bmN0aW9uKCkge1xuICAgICRzdGF0ZS5nbygnYXBwLm1lc3NhZ2UnKTtcbiAgfSlcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICBzZWxmLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICBtZXNzYWdlLnN0YXR1cyA9IFwicmVhZFwiO1xuICBtZXNzYWdlTWFuYWdlci51cGRhdGUobWVzc2FnZSk7XG59KVxuO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICd3Zm0tbW9iaWxlLm1lc3NhZ2VzJztcbiIsIi8qKlxuKiBDT05GSURFTlRJQUxcbiogQ29weXJpZ2h0IDIwMTYgUmVkIEhhdCwgSW5jLiBhbmQvb3IgaXRzIGFmZmlsaWF0ZXMuXG4qIFRoaXMgaXMgdW5wdWJsaXNoZWQgcHJvcHJpZXRhcnkgc291cmNlIGNvZGUgb2YgUmVkIEhhdC5cbioqL1xuJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICd3Zm0tbW9iaWxlLnNldHRpbmcnO1xuXG5hbmd1bGFyLm1vZHVsZSgnd2ZtLW1vYmlsZS5zZXR0aW5nJywgW1xuICAndWkucm91dGVyJyxcbiwgJ3dmbS5jb3JlLm1lZGlhdG9yJ1xuXSlcblxuLmNvbmZpZyhmdW5jdGlvbigkc3RhdGVQcm92aWRlcikge1xuICAkc3RhdGVQcm92aWRlclxuICAgIC5zdGF0ZSgnYXBwLnNldHRpbmcnLCB7XG4gICAgICAgIHVybDogJy9zZXR0aW5ncycsXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL3NldHRpbmcvc2V0dGluZy1saXN0LnRwbC5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogJ1NldHRpbmdDdHJsIGFzIGN0cmwnLFxuICAgICAgfSlcbn0pXG5cbi5jb250cm9sbGVyKCdTZXR0aW5nQ3RybCcsIGZ1bmN0aW9uKCRkb2N1bWVudCkge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHNlbGYuZW5hYmxlZCA9ICRkb2N1bWVudFswXS5ib2R5LmNsYXNzTGlzdC5jb250YWlucygnd2ZtLW5pZ2h0Jyk7O1xuXG4gIHNlbGYuc2V0TmlnaHRUaW1lTW9kZSA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnNvbGUubG9nKHNlbGYuZW5hYmxlZCk7XG4gICAgaWYgKHNlbGYuZW5hYmxlZCkge1xuICAgICAgJGRvY3VtZW50WzBdLmJvZHkuY2xhc3NMaXN0LmFkZCgnd2ZtLW5pZ2h0Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICRkb2N1bWVudFswXS5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ3dmbS1uaWdodCcpO1xuICAgIH1cbiAgfVxufSlcbjtcbiIsIi8qKlxuKiBDT05GSURFTlRJQUxcbiogQ29weXJpZ2h0IDIwMTYgUmVkIEhhdCwgSW5jLiBhbmQvb3IgaXRzIGFmZmlsaWF0ZXMuXG4qIFRoaXMgaXMgdW5wdWJsaXNoZWQgcHJvcHJpZXRhcnkgc291cmNlIGNvZGUgb2YgUmVkIEhhdC5cbioqL1xuJ3VzZSBzdHJpY3QnO1xudmFyIF8gPSByZXF1aXJlKCdsb2Rhc2gnKTtcblxuYW5ndWxhci5tb2R1bGUoJ3dmbS1tb2JpbGUud29ya2Zsb3cnLCBbXG4gICd1aS5yb3V0ZXInLFxuLCAnd2ZtLmNvcmUubWVkaWF0b3InXG5dKVxuXG4ucnVuKGZ1bmN0aW9uKCRzdGF0ZSwgbWVkaWF0b3IpIHtcbiAgbWVkaWF0b3Iuc3Vic2NyaWJlKCd3Zm06d29ya29yZGVyOnNlbGVjdGVkJywgZnVuY3Rpb24od29ya29yZGVyKSB7XG4gICAgJHN0YXRlLmdvKCdhcHAud29ya2Zsb3cuYmVnaW4nLCB7XG4gICAgICB3b3Jrb3JkZXJJZDogd29ya29yZGVyLmlkXG4gICAgfSk7XG4gIH0pO1xufSlcblxuLmNvbmZpZyhmdW5jdGlvbigkc3RhdGVQcm92aWRlcikge1xuICAkc3RhdGVQcm92aWRlclxuICAgIC5zdGF0ZSgnYXBwLndvcmtmbG93Jywge1xuICAgICAgYWJzdHJhY3Q6IHRydWUsXG4gICAgICB1cmw6ICcvd29ya2Zsb3cvd29ya29yZGVyLzp3b3Jrb3JkZXJJZCcsXG4gICAgICByZXNvbHZlOiB7XG4gICAgICAgIHdvcmtmbG93czogZnVuY3Rpb24od29ya2Zsb3dNYW5hZ2VyKSB7XG4gICAgICAgICAgcmV0dXJuIHdvcmtmbG93TWFuYWdlci5saXN0KCk7XG4gICAgICAgIH0sXG4gICAgICAgIHdvcmtvcmRlcjogZnVuY3Rpb24oJHN0YXRlUGFyYW1zLCB3b3Jrb3JkZXJNYW5hZ2VyKSB7XG4gICAgICAgICAgcmV0dXJuIHdvcmtvcmRlck1hbmFnZXIucmVhZCgkc3RhdGVQYXJhbXMud29ya29yZGVySWQpO1xuICAgICAgICB9LFxuICAgICAgICByZXN1bHQ6IGZ1bmN0aW9uKCRzdGF0ZVBhcmFtcywgcmVzdWx0TWFuYWdlciwgd29ya2Zsb3dNYW5hZ2VyLCB3b3Jrb3JkZXIsIHdvcmtmbG93cykge1xuICAgICAgICAgIHZhciB3b3JrZmxvdyA9IHdvcmtmbG93cy5maWx0ZXIoZnVuY3Rpb24od29ya2Zsb3cpIHtcbiAgICAgICAgICAgIHJldHVybiBTdHJpbmcod29ya2Zsb3cuaWQpID09PSBTdHJpbmcod29ya29yZGVyLndvcmtmbG93SWQpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmICh3b3JrZmxvdy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHdvcmtmbG93ID0gd29ya2Zsb3dbMF07XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByZXN1bHRNYW5hZ2VyLmdldEJ5V29ya29yZGVySWQoJHN0YXRlUGFyYW1zLndvcmtvcmRlcklkKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgICAgIHZhciBvbGRTdGF0dXMgPSByZXN1bHQuc3RhdHVzO1xuICAgICAgICAgICAgICByZXN1bHQuc3RhdHVzID0gd29ya2Zsb3dNYW5hZ2VyLmNoZWNrU3RhdHVzKHdvcmtvcmRlciwgd29ya2Zsb3csIHJlc3VsdCk7XG4gICAgICAgICAgICAgIGlmIChvbGRTdGF0dXMgIT09IHJlc3VsdC5zdGF0dXMpIHtcbiAgICAgICAgICAgICAgICB2YXIgY3JlYXRlID0gISAocmVzdWx0LmlkIHx8IHJlc3VsdC5fbG9jYWx1aWQgfHwgcmVzdWx0LmlkID09PSAwKTtcbiAgICAgICAgICAgICAgICBpZiAoY3JlYXRlKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0TWFuYWdlci5jcmVhdGUocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0TWFuYWdlci51cGRhdGUocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHZpZXdzOiB7XG4gICAgICAgICcnOiB7XG4gICAgICAgICAgdGVtcGxhdGU6ICc8ZGl2IHVpLXZpZXc+PC9kaXY+J1xuICAgICAgICB9LFxuICAgICAgICAndG9vbGJhckBhcHAnOiB7XG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvd29ya2Zsb3cvd29ya2Zsb3ctdG9vbGJhci50cGwuaHRtbCcsXG4gICAgICAgICAgY29udHJvbGxlcjogZnVuY3Rpb24oJHNjb3BlLCB3b3Jrb3JkZXIpIHtcbiAgICAgICAgICAgICRzY29wZS53b3Jrb3JkZXIgPSB3b3Jrb3JkZXI7XG4gICAgICAgICAgfSxcbiAgICAgICAgICByZXNvbHZlOiB7XG4gICAgICAgICAgICB3b3Jrb3JkZXI6IGZ1bmN0aW9uKCRzdGF0ZVBhcmFtcywgd29ya29yZGVyTWFuYWdlcikge1xuICAgICAgICAgICAgICByZXR1cm4gd29ya29yZGVyTWFuYWdlci5yZWFkKCRzdGF0ZVBhcmFtcy53b3Jrb3JkZXJJZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgICAuc3RhdGUoJ2FwcC53b3JrZmxvdy5iZWdpbicsIHtcbiAgICAgIHVybDogJy9iZWdpbicsXG4gICAgICB0ZW1wbGF0ZVVybDogJ2FwcC93b3JrZmxvdy93b3JrZmxvdy1iZWdpbi50cGwuaHRtbCcsXG4gICAgICBjb250cm9sbGVyOiAnV29ya2Zsb3dDb250cm9sbGVyIGFzIGN0cmwnLFxuICAgIH0pXG4gICAgLnN0YXRlKCdhcHAud29ya2Zsb3cuc3RlcHMnLCB7XG4gICAgICB1cmw6ICcvc3RlcHMnLFxuICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvd29ya2Zsb3cvd29ya2Zsb3ctc3RlcHMudHBsLmh0bWwnLFxuICAgICAgY29udHJvbGxlcjogJ1dvcmtmbG93U3RlcENvbnRyb2xsZXIgYXMgY3RybCcsXG4gICAgfSlcbiAgICAuc3RhdGUoJ2FwcC53b3JrZmxvdy5jb21wbGV0ZScsIHtcbiAgICAgIHVybDogJy9jb21wbGV0ZScsXG4gICAgICB0ZW1wbGF0ZVVybDogJ2FwcC93b3JrZmxvdy93b3JrZmxvdy1jb21wbGV0ZS50cGwuaHRtbCcsXG4gICAgICBjb250cm9sbGVyOiAnV29ya2Zsb3dDb250cm9sbGVyIGFzIGN0cmwnLFxuICAgIH0pXG59KVxuXG4uY29udHJvbGxlcignV29ya2Zsb3dDb250cm9sbGVyJywgZnVuY3Rpb24oJHN0YXRlLCB3b3JrZmxvd01hbmFnZXIsIHJlc3VsdE1hbmFnZXIsIHdvcmtmbG93cywgd29ya29yZGVyLCByZXN1bHQpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICBjb25zb2xlLmxvZygnd29ya29yZGVyJywgd29ya29yZGVyKVxuICBzZWxmLndvcmtvcmRlciA9IHdvcmtvcmRlcjtcbiAgdmFyIHdvcmtmbG93ID0gd29ya2Zsb3dzLmZpbHRlcihmdW5jdGlvbih3b3JrZmxvdykge1xuICAgIHJldHVybiBTdHJpbmcod29ya2Zsb3cuaWQpID09PSBTdHJpbmcod29ya29yZGVyLndvcmtmbG93SWQpO1xuICB9KTtcbiAgaWYgKHdvcmtmbG93Lmxlbmd0aCkge1xuICAgIHNlbGYud29ya2Zsb3cgPSB3b3JrZmxvd1swXTtcbiAgfVxuXG4gIHNlbGYucmVzdWx0ID0gcmVzdWx0O1xuXG4gIHNlbGYuc3RlcEluZGV4ID0gd29ya2Zsb3dNYW5hZ2VyLm5leHRTdGVwSW5kZXgoc2VsZi53b3JrZmxvdy5zdGVwcywgc2VsZi5yZXN1bHQpO1xuXG4gIHNlbGYuYmVnaW4gPSBmdW5jdGlvbigpIHtcbiAgICAkc3RhdGUuZ28oJ2FwcC53b3JrZmxvdy5zdGVwcycsIHtcbiAgICAgIHdvcmtvcmRlcklkOiB3b3Jrb3JkZXIuaWRcbiAgICB9KTtcbiAgfVxufSlcblxuXG4uY29udHJvbGxlcignV29ya2Zsb3dTdGVwQ29udHJvbGxlcicsIGZ1bmN0aW9uKCRzY29wZSwgJHN0YXRlLCBtZWRpYXRvciwgd29ya2Zsb3dNYW5hZ2VyLCByZXN1bHRNYW5hZ2VyLCBhcHBmb3JtQ2xpZW50LCB3b3JrZmxvd3MsIHdvcmtvcmRlciwgcmVzdWx0LCBwcm9maWxlRGF0YSkge1xuICBjb25zb2xlLmxvZygnbWFuYWdlcicsIHJlc3VsdE1hbmFnZXIpO1xuICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgc2VsZi53b3Jrb3JkZXIgPSB3b3Jrb3JkZXI7XG4gIHZhciB3b3JrZmxvdyA9IHdvcmtmbG93cy5maWx0ZXIoZnVuY3Rpb24od29ya2Zsb3cpIHtcbiAgICByZXR1cm4gU3RyaW5nKHdvcmtmbG93LmlkKSA9PT0gU3RyaW5nKHdvcmtvcmRlci53b3JrZmxvd0lkKTtcbiAgfSk7XG4gIGlmICh3b3JrZmxvdy5sZW5ndGgpIHtcbiAgICBzZWxmLndvcmtmbG93ID0gd29ya2Zsb3dbMF07XG4gIH1cbiAgc2VsZi5yZXN1bHQgPSByZXN1bHQ7XG4gIHNlbGYucmVzdWx0LnN0ZXBSZXN1bHRzID0gc2VsZi5yZXN1bHQuc3RlcFJlc3VsdHMgfHwge307XG4gIHNlbGYucmVzdWx0LndvcmtvcmRlcklkID0gc2VsZi5yZXN1bHQud29ya29yZGVySWQgfHwgd29ya29yZGVyLmlkO1xuXG4gIHNlbGYucmVzdWx0LnN0YXR1cyA9IHdvcmtmbG93TWFuYWdlci5jaGVja1N0YXR1cyhzZWxmLndvcmtvcmRlciwgc2VsZi53b3JrZmxvdywgc2VsZi5yZXN1bHQpO1xuXG4gIHNlbGYuc3RlcEluZGV4ID0gd29ya2Zsb3dNYW5hZ2VyLm5leHRTdGVwSW5kZXgoc2VsZi53b3JrZmxvdy5zdGVwcywgc2VsZi5yZXN1bHQpO1xuXG4gIHNlbGYubmV4dCA9IGZ1bmN0aW9uKCkge1xuICAgIHNlbGYuc3RlcEluZGV4Kys7XG4gICAgaWYgKHNlbGYuc3RlcEluZGV4IDwgc2VsZi53b3JrZmxvdy5zdGVwcy5sZW5ndGgpIHtcbiAgICAgIHNlbGYuc3RlcEN1cnJlbnQgPSBzZWxmLndvcmtmbG93LnN0ZXBzW3NlbGYuc3RlcEluZGV4XTtcbiAgICB9IGVsc2Uge1xuICAgICAgJHN0YXRlLmdvKCdhcHAud29ya2Zsb3cuY29tcGxldGUnLCB7XG4gICAgICAgIHdvcmtvcmRlcklkOiBzZWxmLndvcmtvcmRlci5pZFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIHNlbGYubmV4dCgpO1xuXG4gIHZhciBiYWNrU3Vic2NyaXB0aW9uID0gbWVkaWF0b3Iuc3Vic2NyaWJlKCd3Zm06d29ya2Zsb3c6c3RlcDpiYWNrJywgZnVuY3Rpb24oc3VibWlzc2lvbikge1xuICAgIHNlbGYuc3RlcEluZGV4LS07XG4gICAgaWYgKHNlbGYuc3RlcEluZGV4ID49IDApIHtcbiAgICAgIHNlbGYuc3RlcEN1cnJlbnQgPSBzZWxmLndvcmtmbG93LnN0ZXBzW3NlbGYuc3RlcEluZGV4XTtcbiAgICB9IGVsc2Uge1xuICAgICAgJHN0YXRlLmdvKCdhcHAud29ya2Zsb3cuYmVnaW4nLCB7XG4gICAgICAgIHdvcmtvcmRlcklkOiBzZWxmLndvcmtvcmRlci5pZFxuICAgICAgfSk7XG4gICAgfVxuICB9KTtcblxuICB2YXIgc3RlcFN1YnNjcmlwdGlvbiA9IG1lZGlhdG9yLnN1YnNjcmliZSgnd2ZtOndvcmtmbG93OnN0ZXA6ZG9uZScsIGZ1bmN0aW9uKHN1Ym1pc3Npb24pIHtcbiAgICBjb25zb2xlLmxvZygnRG9uZSBjYWxsZWQgZm9yIHdvcmtmbG93IHN0ZXAnLCBzZWxmLnN0ZXBDdXJyZW50LmNvZGUpO1xuICAgIHZhciBzdGVwID0gYW5ndWxhci5jb3B5KHNlbGYuc3RlcEN1cnJlbnQpO1xuICAgIGRlbGV0ZSBzdGVwWyckJGhhc2hLZXknXTsgLy8gdGhpcyBwcm9wZXJ0eSBicmVha3MgYXBwZm9ybSBzdWJtaXNzaW9ucztcbiAgICB2YXIgY3JlYXRlID0gISAoc2VsZi5yZXN1bHQuaWQgfHwgc2VsZi5yZXN1bHQuX2xvY2FsdWlkIHx8IHNlbGYucmVzdWx0LmlkID09PSAwKTtcbiAgICB2YXIgc3RlcFJlc3VsdCA9IHtcbiAgICAgIHN0ZXA6IHN0ZXAsXG4gICAgICBzdWJtaXNzaW9uOiBzdWJtaXNzaW9uLFxuICAgICAgdHlwZTogc3RlcC5mb3JtSWQgPyAnYXBwZm9ybScgOiAnc3RhdGljJyxcbiAgICAgIHN0YXR1czogc3RlcC5mb3JtSWQgPyAncGVuZGluZycgOiAnY29tcGxldGUnLFxuICAgICAgdGltZXN0YW1wOiBuZXcgRGF0ZSgpLmdldFRpbWUoKSxcbiAgICAgIHN1Ym1pdHRlcjogcHJvZmlsZURhdGEuaWRcbiAgICB9XG4gICAgc2VsZi5yZXN1bHQuc3RlcFJlc3VsdHNbc3RlcC5jb2RlXSA9IHN0ZXBSZXN1bHQ7XG4gICAgc2VsZi5yZXN1bHQuc3RhdHVzID0gd29ya2Zsb3dNYW5hZ2VyLmNoZWNrU3RhdHVzKHNlbGYud29ya29yZGVyLCBzZWxmLndvcmtmbG93LCBzZWxmLnJlc3VsdCk7XG4gICAgdmFyIHByb21pc2UgPSAhIGNyZWF0ZSA/IHJlc3VsdE1hbmFnZXIudXBkYXRlKHNlbGYucmVzdWx0KSA6IHJlc3VsdE1hbmFnZXIuY3JlYXRlKHNlbGYucmVzdWx0KVxuICAgIHByb21pc2UudGhlbihmdW5jdGlvbihwcm9taXNlUmVzdWx0KSB7XG4gICAgICBpZiAoY3JlYXRlKSB7XG4gICAgICAgIHJlc3VsdE1hbmFnZXIuc3RyZWFtLmZpbHRlcihmdW5jdGlvbihub3RpZmljYXRpb24pIHtcbiAgICAgICAgICByZXR1cm4gbm90aWZpY2F0aW9uLmNvZGUgPT09ICdyZW1vdGVfdXBkYXRlX2FwcGxpZWQnXG4gICAgICAgICAgICAmJiBub3RpZmljYXRpb24ubWVzc2FnZS5oYXNoID09PSBzZWxmLnJlc3VsdC5fbG9jYWx1aWQ7XG4gICAgICAgIH0pLnRha2UoMSkuc3Vic2NyaWJlKGZ1bmN0aW9uKG5vdGlmaWNhdGlvbikge1xuICAgICAgICAgIHNlbGYucmVzdWx0LmlkID0gbm90aWZpY2F0aW9uLnVpZDtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZygncmVzdWx0IHNhdmUgc3VjY2Vzc2Z1bCcpO1xuICAgICAgaWYgKHN0ZXAuZm9ybUlkKSB7XG4gICAgICAgIGFwcGZvcm1DbGllbnQuc3luY1N0ZXBSZXN1bHQod29ya29yZGVyLCBzdGVwUmVzdWx0KVxuICAgICAgICAudGhlbihmdW5jdGlvbihyZW1vdGVTdWJtaXNzaW9uKSB7XG4gICAgICAgICAgc2VsZi5uZXh0KCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZi5uZXh0KCk7XG4gICAgICB9XG4gICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfSk7XG4gIH0pO1xuXG4gICRzY29wZS4kb24oXCIkZGVzdHJveVwiLCBmdW5jdGlvbigpIHtcbiAgICBtZWRpYXRvci5yZW1vdmUoJ3dmbTp3b3JrZmxvdzpzdGVwOmRvbmUnLCBzdGVwU3Vic2NyaXB0aW9uLmlkKTtcbiAgICBtZWRpYXRvci5yZW1vdmUoJ3dmbTp3b3JrZmxvdzpzdGVwOmJhY2snLCBiYWNrU3Vic2NyaXB0aW9uLmlkKTtcbiAgfSk7XG59KVxuXG5tb2R1bGUuZXhwb3J0cyA9ICd3Zm0tbW9iaWxlLndvcmtmbG93JztcbiIsIi8qKlxuKiBDT05GSURFTlRJQUxcbiogQ29weXJpZ2h0IDIwMTYgUmVkIEhhdCwgSW5jLiBhbmQvb3IgaXRzIGFmZmlsaWF0ZXMuXG4qIFRoaXMgaXMgdW5wdWJsaXNoZWQgcHJvcHJpZXRhcnkgc291cmNlIGNvZGUgb2YgUmVkIEhhdC5cbioqL1xuJ3VzZSBzdHJpY3QnO1xuXG5hbmd1bGFyLm1vZHVsZSgnd2ZtLW1vYmlsZS53b3Jrb3JkZXJzJywgW1xuICAndWkucm91dGVyJ1xuXSlcblxuLmNvbmZpZyhmdW5jdGlvbigkc3RhdGVQcm92aWRlcikge1xuICAkc3RhdGVQcm92aWRlclxuICAgIC5zdGF0ZSgnYXBwLndvcmtvcmRlcnMnLCB7XG4gICAgICAgIHVybDogJy93b3Jrb3JkZXJzJyxcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvd29ya29yZGVyL3dvcmtvcmRlci1saXN0LnRwbC5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogJ1dvcmtvcmRlcnNDdHJsIGFzIGN0cmwnLFxuICAgICAgICByZXNvbHZlOiB7XG4gICAgICAgICAgd29ya29yZGVyczogZnVuY3Rpb24od29ya29yZGVyTWFuYWdlcikge1xuICAgICAgICAgICAgcmV0dXJuIHdvcmtvcmRlck1hbmFnZXIubGlzdCgpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgcmVzdWx0TWFwOiBmdW5jdGlvbihyZXN1bHRNYW5hZ2VyKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0TWFuYWdlci5saXN0KClcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3VsdHMpIHtcbiAgICAgICAgICAgICAgdmFyIG1hcCA9IHt9O1xuICAgICAgICAgICAgICByZXN1bHRzLmZvckVhY2goZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgbWFwW3Jlc3VsdC53b3Jrb3JkZXJJZF0gPSByZXN1bHQ7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICByZXR1cm4gbWFwO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG59KVxuXG4uY29udHJvbGxlcignV29ya29yZGVyc0N0cmwnLCBmdW5jdGlvbigkc2NvcGUsICRmaWx0ZXIsIHdvcmtvcmRlck1hbmFnZXIsIG1lZGlhdG9yLCB3b3Jrb3JkZXJzLCByZXN1bHRNYXApIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICBzZWxmLndvcmtvcmRlcnMgPSB3b3Jrb3JkZXJzO1xuICBzZWxmLnJlc3VsdE1hcCA9IHJlc3VsdE1hcDtcbiAgbWVkaWF0b3Iuc3Vic2NyaWJlRm9yU2NvcGUoJ3dmbTphdXRoOnByb2ZpbGU6Y2hhbmdlJywgJHNjb3BlLCBmdW5jdGlvbihwcm9maWxlRGF0YSkge1xuICAgIGlmICghcHJvZmlsZURhdGEpIHtcbiAgICAgIHNlbGYud29ya29yZGVycyA9IFtdO1xuICAgIH1cbiAgfSlcbiAgbWVkaWF0b3Iuc3Vic2NyaWJlRm9yU2NvcGUoJ3dmbTpzeW5jOnJlY29yZF9kZWx0YV9yZWNlaXZlZDp3b3Jrb3JkZXJzJywgJHNjb3BlLCBmdW5jdGlvbihub3RpZmljYXRpb24pIHtcbiAgICBjb25zb2xlLmxvZyhub3RpZmljYXRpb24pO1xuICAgICB3b3Jrb3JkZXJNYW5hZ2VyLmxpc3QoKS50aGVuKGZ1bmN0aW9uKHdvcmtvcmRlcnMpIHtcbiAgICAgICBzZWxmLndvcmtvcmRlcnMgPSB3b3Jrb3JkZXJzO1xuICAgICB9KVxuICB9KVxufSlcblxuO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICd3Zm0tbW9iaWxlLndvcmtvcmRlcnMnO1xuIl19
