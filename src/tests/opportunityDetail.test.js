import React from 'react';
import expect from 'expect';
import { mount, shallow, render } from 'enzyme';
import { Link } from 'react-router';
import block from 'block-ui';
import OpportunityDetail from '../components/opportunities/opportunityDetail.component';
import { Provider } from 'react-redux';
import jQuery from 'jquery';
import localStorage from 'mock-local-storage';
var window = document.defaultView;
global.window = window
global.jQuery = require('jquery');
global.$ = require('jquery');
import configureStore from '../store/configureStore';

const store = configureStore();
function breadCrumb() {
    return true
}
var props = {
    params: { opportunityId: 1 },
    breadCrumb: breadCrumb
};
describe('Opportunity Detail Presentational component', () => {
    it('Should have active tab with text Opportunity', function (done) {
        const wrapper = mount(<Provider store={store}><OpportunityDetail {...props} /></Provider>);
        expect(wrapper.find('a').first().text()).toEqual('Opportunity');
        done();
    });

    //Only tests unconditional rendered values.
    it('Should have class portlet-title for all title', function (done) {
        const wrapper = mount(<Provider store={store}><OpportunityDetail {...props} /></Provider>);
        expect(wrapper.find('div.portlet-title').length).toBe(5);
        done();
    });

    //Only tests unconditional rendered values.
    it('Should have class portlet-body for active tabs and table', function (done) {
        const wrapper = mount(<Provider store={store}><OpportunityDetail {...props} /></Provider>);
        expect(wrapper.find('div.portlet-body').length).toBe(4);
        done();
    });


    it('Should have a link for Edit opportunity,cancel,delete', function (done) {
        const wrapper = mount(<Provider store={store}><OpportunityDetail {...props} /></Provider>);
        expect(wrapper.find(Link).length).toBe(1);
        done();
    });

});