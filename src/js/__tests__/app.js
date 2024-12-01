import Team from '../app';

// для изоляции тестов перед каждым создается новая команда и одни и те же персонажи
let team;
let warrior;
let mage;
let archer;

beforeEach(() => {
  team = new Team();
  warrior = { name: 'Warrior', level: 10 };
  mage = { name: 'Mage', level: 5 };
  archer = { name: 'Archer', level: 7 };
});

test('Метод add: добавляет персонажа в команду', () => {
  team.add(warrior);
  expect(team.members.has(warrior)).toBe(true);
});

test('Метод add: выбрасывает ошибку для дублирующего персонажа', () => {
  team.add(warrior);
  expect(() => team.add(warrior)).toThrow('Персонаж уже находится в команде!');
});

test('Метод addAll: добавляет несколько персонажей без задвоения', () => {
  team.addAll(warrior, mage, archer, warrior); // Повтор warrior не должен вызвать ошибку
  expect(team.members.size).toBe(3); // Все уникальные персонажи
});

test('Метод toArray: конвертирует Set в массив', () => {
  team.addAll(warrior, mage);
  const result = team.toArray();
  expect(result).toEqual([warrior, mage]);
});
