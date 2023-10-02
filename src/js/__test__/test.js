import Daemon from '../Daemon';
import Magician from '../Magician';

test('Атака мага без дурмана', () => {
  const user = new Magician('USER_2');
  user.attack = 100;
  const result = user.attack;
  expect(result(2)).toEqual(90);
});

test('Атака демона под дурманом', () => {
  const user = new Daemon('Diablo');
  user.attack = 100;
  user.stoned = true;
  const result = user.attack;
  expect(result(2)).toEqual(85);
});

test('Атака мага под дурманом', () => {
  const user = new Magician('USER_1');
  user.attack = 90;
  user.stoned = true;
  const result = user.attack;
  expect(result(3)).toEqual(62);
});

test('Атака демона под дурманом', () => {
  const user = new Daemon('USER_2');
  user.attack = 100;
  user.stoned = true;
  const result = user.attack;
  expect(result(2)).toEqual(85);
});
