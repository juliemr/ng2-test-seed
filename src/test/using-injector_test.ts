import {APP_ID} from 'angular2/core';
import {
	describe,
	expect,
	inject,
	it
} from 'angular2/testing';

describe('default test injector', () => {
	it('should provide default id', inject([APP_ID], (id) => {
		expect(id).toBe('a');
	}));
});
