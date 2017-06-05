/* @flow */

import React from 'react';
import { expect } from 'chai';
import { spy } from 'sinon';
import { shallow, mount } from 'enzyme';
import DropdownOption from '..';

describe('DropdownOption test suite', () => {
  it('should have a li when rendered', () => {
    expect(shallow(
      <DropdownOption>
        <div>test</div>
      </DropdownOption>
    ).node.type).to.equal('li');
  });

  it('should click event should trigger onSelect function call', () => {
    const onSelect = spy();
    const option = mount(
      <DropdownOption onSelect={onSelect}>
        <div>test</div>
      </DropdownOption>
    );
    option.childAt(0).simulate('click');
    expect(onSelect.called).to.equal(true);
  });

  it('should add custom class to li for value', () => {
    const dropDown = shallow(
      <DropdownOption value="H1">
        <div>Heading 1</div>
      </DropdownOption>
    );

    expect(dropDown.find('li.rdw-dropdownoption-default-H1').exists()).to.equal(true);
  })
});
