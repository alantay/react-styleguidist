import React from 'react';
import ComponentsList from './ComponentsList';
import { ComponentsListRenderer } from './ComponentsListRenderer';

it('should set the correct href for items', () => {
	const components = [
		{
			name: 'Button',
			slug: 'button',
		},
		{
			name: 'Input',
			slug: 'input',
		},
	];

	const actual = shallow(<ComponentsList items={components} classes={{}} />);
	expect(actual).toMatchSnapshot();
});

it('should set a parameter on link when useHashId is activated', () => {
	const components = [
		{
			name: 'Button',
			slug: 'button',
		},
		{
			name: 'Input',
			slug: 'input',
		},
	];

	const actual = shallow(
		<ComponentsList
			items={components}
			classes={{}}
			useRouterLinks
			hashPath={['Components']}
			useHashId
		/>
	);
	expect(actual).toMatchSnapshot();
});

it('should set a sub route on link when useHashId is deactivated', () => {
	const components = [
		{
			name: 'Button',
			slug: 'button',
		},
		{
			name: 'Input',
			slug: 'input',
		},
	];

	const actual = shallow(
		<ComponentsList
			items={components}
			classes={{}}
			useRouterLinks
			hashPath={['Components']}
			useHashId={false}
		/>
	);
	expect(actual).toMatchSnapshot();
});

it('should render sections with nested components', () => {
	const components = [
		{
			name: 'Button',
			slug: 'button',
			href: '#button',
		},
		{
			name: 'Input',
			slug: 'input',
			href: '#input',
		},
	];
	const actual = shallow(<ComponentsListRenderer items={components} classes={{}} />);

	expect(actual).toMatchSnapshot();
});

it('should return null when the list is empty', () => {
	const actual = shallow(<ComponentsListRenderer items={[]} classes={{}} />);

	expect(actual.getElement()).toBe(null);
});

it('should ignore items without name', () => {
	const components = [
		{
			name: 'Button',
			slug: 'button',
			href: '#button',
		},
		{
			slug: 'input',
			href: '#input',
		},
	];
	const actual = shallow(<ComponentsListRenderer items={components} classes={{}} />);

	expect(actual).toMatchSnapshot();
});
