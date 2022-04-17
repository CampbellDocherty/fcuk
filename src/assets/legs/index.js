import Legs1 from './legs1.png';
import Legs2 from './legs2.png';
import Legs3 from './legs3.png';
import Legs4 from './legs4.png';
import Legs5 from './legs5.png';
import Legs9 from './legs9.png';
import Legs10 from './legs10.png';
import Legs12 from './legs12.png';
import Legs13 from './legs13.png';
import Legs15 from './legs15.png';
import Legs16 from './legs16.png';
import Legs17 from './legs17.png';
import Legs18 from './legs18.png';
import Legs19 from './legs19.png';
import Legs20 from './legs20.png';
import Legs23 from './legs23.png';
import Legs24 from './legs24.png';
import Legs25 from './legs25.png';
import Legs26 from './legs26.png';
import Legs27 from './legs27.png';
import Legs28 from './legs28.png';
import Legs29 from './legs29.png';
import Legs30 from './legs30.png';
import Legs31 from './legs31.png';
import Legs32 from './legs32.png';
import Legs33 from './legs33.png';
import Legs34 from './legs34.png';
import Legs35 from './legs35.png';
import Legs36 from './legs36.png';
import Legs37 from './legs37.png';
import Legs38 from './legs38.png';
import Legs39 from './legs39.png';
import Legs41 from './legs41.png';

export const legsImages = [
  Legs1,
  Legs2,
  Legs3,
  Legs4,
  Legs5,
  Legs9,
  Legs10,
  Legs12,
  Legs13,
  Legs15,
  Legs16,
  Legs17,
  Legs18,
  Legs19,
  Legs20,
  Legs23,
  Legs24,
  Legs25,
  Legs26,
  Legs27,
  Legs28,
  Legs29,
  Legs30,
  Legs31,
  Legs32,
  Legs33,
  Legs34,
  Legs35,
  Legs36,
  Legs37,
  Legs38,
  Legs39,
  Legs41,
]
  .map((value) => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value);
