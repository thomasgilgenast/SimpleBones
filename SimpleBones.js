var house_members = [
	{name: 'Sam', location: 'London', hunger: 0},
	{name: 'Sydney', location: 'Australia', hunger: 0},
	{name: 'Derp', location: 'Hungary', hunger: 0}
];

if (Meteor.isClient) {
	Template.house_members_list.helpers({
		house_members: house_members
	});
}