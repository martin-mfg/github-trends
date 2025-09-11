/* eslint-disable react/no-array-index-key */

import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { Card } from '../../../components';

const SelectCardStage = ({ selectedCard, setSelectedCard }) => {
  const userId = useSelector((state) => state.user.userId);
  return (
    <div className="w-full flex flex-wrap">
      {[
        {
          title: 'Lorem Ipsum',
          description: 'Lorem ipsum dolor sit amet.',
          imageSrc: 'pin/?repo=anuraghazra/github-readme-stats',
        },
        {
          title: 'Lorem Ipsum',
          description: 'Lorem ipsum dolor sit amet.',
          imageSrc: 'gist/?id=bbfce31e0217a3689c8d961a356cb10d',
        },
        {
          title: 'Lorem Ipsum',
          description: 'Lorem ipsum dolor sit amet.',
          imageSrc: 'wakatime/?username=ffflabs&langs_count=6',
        },
        {
          title: 'Language Contributions',
          description: 'See your overall language breakdown',
          imageSrc: `top-langs/?&username=${userId}`,
        },
        {
          title: 'Repository Contributions',
          description: 'See your most contributed repositories',
          imageSrc: `?&username=${userId}`,
        },
      ].map((card, index) => (
        <button
          className="p-2 lg:p-4"
          key={index}
          type="button"
          onClick={() => setSelectedCard(card.imageSrc)}
        >
          <Card
            title={card.title}
            description={card.description}
            imageSrc={card.imageSrc}
            selected={selectedCard === card.imageSrc}
          />
        </button>
      ))}
    </div>
  );
};

SelectCardStage.propTypes = {
  selectedCard: PropTypes.string.isRequired,
  setSelectedCard: PropTypes.func.isRequired,
};

export default SelectCardStage;
