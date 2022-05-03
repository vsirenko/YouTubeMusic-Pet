import { Box } from '@mui/system';
import { Container } from '@mui/material';

import style from './style/style';
import MainTitle from './MainTitle';
import MainItem from './MainItem';

import useSlider from './logic/useSlider';
import ArrowIconRight from '../../assets/ArrowIconRight';
import ArrowIconLeft from '../../assets/ArrowIconLeft';

const data = [
  {
    id: 1,
    img: 'https://lh3.googleusercontent.com/kw0dTlQG6YVZ7lO_RPR9hYA-hCmIznIuEFA6zPJ-F-6qoZj9RK0vRy4seh6FQ39wNsNZNitt7pXn7oo4=w544-h544-l90-rj',
    name: 'Украинские патриотические песни',
    author: 'Океан Ельзи, Чубай, Тарта',
  },
  {
    id: 2,
    img: 'https://lh3.googleusercontent.com/pVhXfJmB5StacMmJ05rgEGQUeEkOwl4uNMKavT-7qkhiaLcbHtfUOuQS9wrlAX1dqzXgX81ZoEAlbg=w544-h544-l90-rj',
    name: 'Украинский дэнс-поп',
    author: 'Верка Сердючка, DZIDZIO, TIK, Олег Винник',
  },
  {
    id: 3,
    img: 'https://lh3.googleusercontent.com/jpWZkylkLWsW9OheqYdNZSQU03tE3-4QjYO-3oeAV5OFamZIpxjLVtlDp_HSYiS5Y4D_RlQmNrK6oQE=w544-h544-l90-rj',
    name: 'Украинский народные песни',
    author: 'Группа «Экспресс», Тарас Григорьевич Чубай,',
  },
  {
    id: 4,
    img: 'https://lh3.googleusercontent.com/qi8aOMU9IDo-SfA2vEGTQLSyn8N46CRPqNpbkEE48bX0Y1tlpEGJhbaaUj2WzjdN4OTBFbyeznad_A=w544-h544-l90-rj',
    name: 'Рок хиты Украины',
    author: 'Океан Ельзи, Вопли Видоплясова, The Hardkiss, БЕЗ ОБМЕЖЕНЬ',
  },
  {
    id: 5,
    img: 'https://lh3.googleusercontent.com/xSO1nlKCbNopPDEA-h8ESJJ2IDBphXxGqxDYSs52J7cH8c_5A-kq45Oy8pGpn5arzCL5QhMAfGHGDQ=w544-h544-l90-rj',
    name: 'КАЧ',
    author: 'КАЧ KALUSH, Alyona Alyona, Krechet, Skofka',
  },
  {
    id: 6,
    img: 'https://lh3.googleusercontent.com/jpWZkylkLWsW9OheqYdNZSQU03tE3-4QjYO-3oeAV5OFamZIpxjLVtlDp_HSYiS5Y4D_RlQmNrK6oQE=w544-h544-l90-rj',
    name: 'Украинский народные песни',
    author: 'Группа «Экспресс», Тарас Григорьевич Чубай,',
  },
  {
    id: 7,
    img: 'https://lh3.googleusercontent.com/qi8aOMU9IDo-SfA2vEGTQLSyn8N46CRPqNpbkEE48bX0Y1tlpEGJhbaaUj2WzjdN4OTBFbyeznad_A=w544-h544-l90-rj',
    name: 'Рок хиты Украины',
    author: 'Океан Ельзи, Вопли Видоплясова, The Hardkiss, БЕЗ ОБМЕЖЕНЬ',
  },
  {
    id: 8,
    img: 'https://lh3.googleusercontent.com/xSO1nlKCbNopPDEA-h8ESJJ2IDBphXxGqxDYSs52J7cH8c_5A-kq45Oy8pGpn5arzCL5QhMAfGHGDQ=w544-h544-l90-rj',
    name: 'КАЧ',
    author: 'КАЧ KALUSH, Alyona Alyona, Krechet, Skofka',
  },
];

const MainBody = () => {
  const { position, maxPosition, slidePrev, slideNext } = useSlider(data);
  return (
    <Container>
      <Box sx={style.header.wr}>
        <MainTitle title={'Noize MC'} />
        <Box sx={style.item.wr}>
          {position > 0 && (
            <Box sx={style.slider.circleL} onClick={slidePrev}>
              <ArrowIconLeft />
            </Box>
          )}
          <Box sx={{ transform: `translate3d(-${position}px, 0px, 0px)`, display: 'flex', transition: 'all .5s ease' }}>
            {data.map((item) => (
              <MainItem id={item.id} img={item.img} name={item.name} author={item.author} />
            ))}
          </Box>
          {position !== maxPosition - 975 && (
            <Box sx={style.slider.circleR} onClick={slideNext}>
              <ArrowIconRight />
            </Box>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default MainBody;
