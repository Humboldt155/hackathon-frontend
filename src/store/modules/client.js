

// initial state
// shape: [{ id, quantity }]
const state = {
    client_page: 'https://leroymerlin.ru/catalogue/search/?q=81945552',
    project_models: [
{name : 'Душевая ширма с дверью сбоку', lon: 18, let: 53, time: 0, size: 'l'},
{name : 'Смеситель термостатический', lon: 27, let: 41, time: 0, size: 'l'},
{name : 'Душевая ширма с дверью спереди', lon: 22, let: 52, time: 0, size: 'l'},
{name : 'Подвесной унитаз с бачком', lon: 23, let: 63, time: 0, size: 'l'},
{name : 'Мебель для прачечной', lon: 43, let: 41, time: 0, size: 'l'},
{name : 'Плитка ПВХ', lon: 57, let: 67, time: 0, size: 'l'},
{name : 'обратный осмос', lon: 51, let: 34, time: 0, size: 'l'},
{name : 'Пеналы, шкафчики и тумбы для ванной комнаты', lon: 37, let: 37, time: 0, size: 'l'},
{name : 'Люстра или подвес с лампочками в комплекте', lon: 65, let: 20, time: 0, size: 'l'},
{name : 'Линолеум', lon: 75, let: 83, time: 0, size: 'l'},
{name : 'Тумба под раковину', lon: 19, let: 75, time: 0, size: 'l'},
{name : 'Столешница для раковины', lon: 29, let: 43, time: 0, size: 'l'},
{name : 'Смеситель для биде', lon: 24, let: 51, time: 0, size: 'l'},
{name : 'Дверь для дверной коробки и регулируемой дверной коробки', lon: 53, let: 100, time: 0, size: 'l'},
{name : 'Водяные полотенцесушители', lon: 20, let: 64, time: 0, size: 'm'},
{name : 'Реечный подвесной потолок', lon: 36, let: 50, time: 0, size: 'm'},
{name : 'Смеситель для ванны', lon: 10, let: 58, time: 0, size: 'm'},
{name : 'Система фильтрации под мойку', lon: 51, let: 34, time: 0, size: 'm'},
{name : 'Люстра или подвес без лампочек в комплекте', lon: 81, let: 0, time: 0, size: 'm'},
{name : 'Смеситель для кухни', lon: 40, let: 43, time: 0, size: 'm'},
{name : 'Набор из насадки для душа, штанги и гибкого шланга', lon: 13, let: 48, time: 0, size: 'm'},
{name : 'Ящики для кухни', lon: 50, let: 59, time: 0, size: 'm'},
{name : 'Душевой поддон', lon: 0, let: 63, time: 0, size: 'm'},
{name : 'Настенные бордюры', lon: 32, let: 61, time: 0, size: 'm'},
{name : 'Смеситель для раковины', lon: 8, let: 55, time: 0, size: 'm'},
{name : 'Обои', lon: 77, let: 73, time: 0, size: 'm'},
{name : 'Раковина', lon: 12, let: 48, time: 0, size: 'm'},
{name : 'Крышка для унитаза и биде', lon: 35, let: 39, time: 0, size: 'm'},
{name : 'Фронтальная панель для ванны и душевого поддона', lon: 37, let: 53, time: 0, size: 'm'},
{name : 'Направляющие для раздвижных дверей', lon: 62, let: 57, time: 0, size: 'm'},
{name : 'Раковина врезная', lon: 23, let: 48, time: 0, size: 'm'},
{name : 'Поворотный светильник (спот) с лампочками в комплекте', lon: 64, let: 12, time: 0, size: 'm'},
{name : 'Светильники для зеркала в ванную комнату', lon: 50, let: 9, time: 0, size: 's'},
{name : 'Модульные кухни', lon: 58, let: 53, time: 0, size: 's'},
{name : 'Сушилка для белья настенная', lon: 51, let: 25, time: 0, size: 's'},
{name : 'Настенный светильник с лампочками в комплекте', lon: 59, let: 20, time: 0, size: 's'},
{name : 'Фотообои', lon: 66, let: 53, time: 0, size: 's'},
{name : 'Стойка для душа', lon: 21, let: 31, time: 0, size: 's'},
{name : 'Набор из насадки для душа и гибкого шланга', lon: 14, let: 48, time: 0, size: 's'},
{name : 'Вентиляторы вытяжные', lon: 39, let: 38, time: 0, size: 's'},
{name : 'Ручка дверная на розетке', lon: 60, let: 79, time: 0, size: 's'},
{name : 'Аксессуары для стойки душа', lon: 39, let: 28, time: 0, size: 's'},
{name : 'Подложка под напольное покрытие', lon: 83, let: 98, time: 0, size: 's'},
{name : 'Излив для мойки и умывальника', lon: 28, let: 39, time: 0, size: 's'},
{name : 'душевая лейка', lon: 15, let: 35, time: 0, size: 's'},
{name : 'Декоративный потолочный и настенный молдинг', lon: 87, let: 69, time: 0, size: 's'},
{name : 'Герметик гидроизоляционный', lon: 75, let: 78, time: 0, size: 's'},
{name : 'Монтажный клей', lon: 77, let: 64, time: 0, size: 's'},
{name : 'Профиль для пола (стык, кант, угол)', lon: 93, let: 74, time: 0, size: 's'},
{name : 'Гофрированные трубы для систем вентиляции', lon: 56, let: 29, time: 0, size: 's'},
{name : 'Напольные вставки и декоры', lon: 42, let: 56, time: 0, size: 's'},
{name : 'Потолочный клей', lon: 87, let: 63, time: 0, size: 's'},
{name : 'Углы для плинтуса', lon: 99, let: 97, time: 0, size: 's'},
{name : 'Ламинат', lon: 76, let: 97, time: 1, size: 'l'},
{name : 'Плинтус для напольных покрытий', lon: 100, let: 99, time: 1, size: 's'},
{name : 'Духовой шкаф', lon: 55, let: 48, time: 2, size: 'l'},
{name : 'Вытяжка и кухонный воздухоочиститель', lon: 62, let: 41, time: 3, size: 'l'},
{name : 'Мойка', lon: 52, let: 52, time: 3, size: 'm'},
{name : 'Полотенцесушитель электрический', lon: 33, let: 36, time: 4, size: 'l'},
{name : 'Столешница кухонная', lon: 58, let: 55, time: 4, size: 'l'},
{name : 'Кухонный шкаф', lon: 52, let: 54, time: 4, size: 'm'},
{name : 'Зеркало со встроенной подсветкой', lon: 39, let: 34, time: 5, size: 'l'},
{name : 'Унитаз-компакт', lon: 16, let: 75, time: 5, size: 'l'},
{name : 'Верхний душ', lon: 7, let: 45, time: 6, size: 'l'},
{name : 'Ширма для ванны', lon: 37, let: 41, time: 6, size: 'l'},
{name : 'Смеситель для душа', lon: 1, let: 51, time: 6, size: 'm'},
{name : 'Лейка для верхнего душа', lon: 11, let: 39, time: 6, size: 'm'}
    ]
}

// getters
const getters = {
}

// actions
const actions = {
}

// mutations
const mutations = {
    setClientPage (state, new_url) {
      state.client_page = new_url
    }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
