import TestUtils from 'react-addons-test-utils';
import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import Search from './search';

describe('Search', function () {
  let root, rootElem;
  beforeEach(function() {
    root = TestUtils.renderIntoDocument(<Search/>);
    rootElem = ReactDOM.findDOMNode(root);
  });
  it('renders without problems', function () {
    expect(root).toExist();
  });
  it('renders with one input', function() {
    let inputs = rootElem.querySelectorAll('input');
    expect(inputs.length).toEqual(1);
  });
});
