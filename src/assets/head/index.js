import Head1 from './head1.png';
import Head2 from './head2.png';
import Head3 from './head3.png';
import Head4 from './head4.png';
import Head5 from './head5.png';
import Head6 from './head6.png';
import Head7 from './head7.png';
import Head8 from './head8.png';
import Head9 from './head9.png';
import Head10 from './head10.png';
import Head11 from './head11.png';
import Head12 from './head12.png';
import Head13 from './head13.png';
import Head14 from './head14.png';
import Head15 from './head15.png';
import Head16 from './head16.png';
import Head17 from './head17.png';
import Head18 from './head18.png';
import Head19 from './head19.png';
import Head20 from './head20.png';
import Head21 from './head21.png';
import Head22 from './head22.png';
import Head23 from './head23.png';
import Head24 from './head24.png';
import Head25 from './head25.png';
import Head26 from './head26.png';
import Head27 from './head27.png';
import Head28 from './head28.png';
import Head29 from './head29.png';
import Head30 from './head30.png';
import Head31 from './head31.png';
import Head32 from './head32.png';
import Head33 from './head33.png';
import Head34 from './head34.png';
import Head35 from './head35.png';
import Head36 from './head36.png';
import Head37 from './head37.png';
import Head38 from './head38.png';
import Head39 from './head39.png';
import Head40 from './head40.png';
import Head41 from './head41.png';

export const headImages = [
  Head1,
  Head2,
  Head3,
  Head4,
  Head5,
  Head6,
  Head7,
  Head8,
  Head9,
  Head10,
  Head11,
  Head12,
  Head13,
  Head14,
  Head15,
  Head16,
  Head17,
  Head18,
  Head19,
  Head20,
  Head21,
  Head22,
  Head23,
  Head24,
  Head25,
  Head26,
  Head27,
  Head28,
  Head29,
  Head30,
  Head31,
  Head32,
  Head33,
  Head34,
  Head35,
  Head36,
  Head37,
  Head38,
  Head39,
  Head40,
  Head41,
]
  .map((value) => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value);
