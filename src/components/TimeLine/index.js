import {Chrono} from 'react-chrono'

import './index.css'

const items = [
  {
    title: 'May 1940',
    cardTitle: 'Chennai Super Kings',
    cardSubtitle: 'Men of the British Expeditionary Force.',
    cardDetailedText:
      'On 10 May 1940, Hitler began his long-awaited offensive in the west by invading neutral Holland and attacking northern France.',
  },
  {
    title: 'May 1940',
    cardTitle: 'Dunkirk',
    cardSubtitle: 'Men of the British Expeditionary Force.',
    cardDetailedText:
      'On 10 May 1940, Hitler began his long-awaited offensive in the west by invading neutral Holland and attacking northern France.',
  },
  {
    title: 'May 1940',
    cardTitle: 'Dunkirk',
    cardSubtitle: 'Men of the British Expeditionary Force.',
    cardDetailedText:
      'On 10 May 1940, Hitler began his long-awaited offensive in the west by invading neutral Holland and attacking northern France.',
  },

  {
    title: '7 December 1941',
    cardTitle: 'Pearl Harbor',
    media: {
      source: {
        url: 'https://www.youtube.com/embed/f6cz9gtMTeI',
        type: 'mp4',
      },
      type: 'VIDEO',
      name: 'Pearl Harbor',
    },
  },
  {
    title: '7 December 1941',
    cardTitle: 'Pearl Harbor',
    media: {
      source: {
        url: 'https://dai.ly/x834x0z',
        type: 'mp4',
      },
      type: 'VIDEO',
      name: 'Pearl Harbor',
    },
  },
  {
    title: 'May 1940',
    cardTitle: 'Dunkirk',
    media: {
      name: 'dunkirk beach',
      source: {
        url: 'http://someurl/image.jpg',
      },
      type: 'IMAGE',
    },
  },
]

const TimeLine = () => (
  <div className="chrono-container">
    <Chrono
      cardHeight={300}
      cardLess={false}
      activeItemIndex={1}
      slideShow
      //   cardPositionHorizontal="TOP" #this is used in the 'HORIZONTAL MODE'
      items={items}
      enableOutline
      cardWidth={500}
      mode="VERTICAL_ALTERNATING"
      slideItemDuration={2000}
      theme={{
        primary: 'green',
        secondary: 'yellow',
        cardBgColor: 'orange',
        cardForeColor: 'blue',
        titleColor: 'black',
      }}
    >
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/csk-logo-img.png"
          className="image"
          alt="chennai-super-kings"
        />
      </div>
      <div>
        <h1>Mumbai Indians</h1>
        <p>IPL Team winner for the year 2019 is Mumbai Indians.</p>
      </div>
    </Chrono>
  </div>
)

export default TimeLine
