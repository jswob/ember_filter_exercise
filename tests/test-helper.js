import Application from 'ember-filter-exercise/app';
import config from 'ember-filter-exercise/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
