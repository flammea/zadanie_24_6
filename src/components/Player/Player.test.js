import Player from './Player';
import React from 'react';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<Player />);
});

it('renders correct name', () => {
  const playerNamePassed = 'Ania';
  const playerComponent = shallow(<Player name={playerNamePassed} />);

  const playerNameRendered = playerComponent.find('.Player__name').text();

  expect(playerNameRendered).toEqual(playerNamePassed);
});

it('renders correct score', () => {
  const playerScorePassed = 4;
  const playerComponent = shallow(<Player score={playerScorePassed} />);

  const playerScoreRendered = Number(playerComponent.find('.Player__score').text());

  expect(playerScoreRendered).toEqual(playerScorePassed);
});


it('should call onPlayerScoreChange with 1 when plus button is clicked', () => {
  const mockedOnPlayerScoreChange = jest.fn();
  const playerComponent = shallow(<Player onPlayerScoreChange={mockedOnPlayerScoreChange} />);

  const plusButton = playerComponent.find('.Player__button');

  plusButton.simulate('click');

  expect(mockedOnPlayerScoreChange).toBeCalledWith(1);
});