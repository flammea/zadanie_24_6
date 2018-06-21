import PlayersList from './PlayersList';
import Player from '../Player/Player';
import React from 'react';
import { shallow, mount } from 'enzyme';


it('renders without crashing', () => {
  shallow(<PlayersList players={[]} />);
});

it('renders correct number of players', () => {
	const players = [
    	{
        name: 'Kunegunda',
        score: 5
    	},
    	{
        name: 'Antoś',
        score: 0
    	}
	]
	const playerComponent = mount(<PlayersList players={players} />);
	const expectedPlayersNumber = playerComponent.find(Player).length;
	expect(expectedPlayersNumber).toEqual(2);
});

it('should call onScoreUpdate withot crashing', () => {
	const players = [
    {
        name: 'Kunegunda',
        score: 5
    	},
    	{
        name: 'Antoś',
        score: 0
    	}
	]

	const mockedOnScoreUpdate = jest.fn();
	const playerComponent = shallow(<PlayersList players={players} onScoreUpdate={mockedOnScoreUpdate} />);
	const firstPlayer = playerComponent.find(Player).first();
	const onPlayerScoreChange = firstPlayer.prop('onPlayerScoreChange');
	onPlayerScoreChange(10);
	expect(mockedOnScoreUpdate).toBeCalledWith(0, 10);

});
