// TODO: write your code here
// Создайте класс Team с методами add, addAll и toArray.
// Класс должен хранить данные о персонажах команды в поле типа Set:

// class Team {
//   constructor() {
//       this.members = new Set();
//   }
//   ...
// }
// Метод add должен добавлять выбранного персонажа в команду (объект класса Character).
//   При этом такой объект уже существует в команде - дублирования происходить не должно,
//   должна генерироваться ошибка.

// Метод addAll должен иметь возможность добавлять произвольное количество персонажей
//   (используйте rest-parameters) в команду. При этом задвоения быть не должно,
//    ошибка генерироваться не должна.

// Метод toArray должен производить конвертацию Set в массив.

export default class Team {
  constructor() {
    this.members = new Set();
  }

  // Метод для добавления одного персонажа
  add(character) {
    if (this.members.has(character)) {
      throw new Error("Персонаж уже находится в команде!");
    }
    this.members.add(character);
  }

  // Метод для добавления нескольких персонажей
  addAll(...characters) {
    characters.forEach(character => {
      // if (!this.members.has(character)) {
      //   this.members.add(character);
      // }
      // по замечанию аспиранта добавлен меиод с валидацией:
      try {
        this.add(character); // Используем метод add для добавления
      } catch (error) {
        // Игнорируем ошибки для addAll, так как дублирования допускаются
      }
    });
  }

  // Метод для преобразования в массив
  toArray() {
    return Array.from(this.members);
  }
}
