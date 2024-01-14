# Game Store Frontend

Этот проект представляет собой фронтенд для интернет-магазина техники game-store. Разработанный с использованием React.js и Next.js, это приложение обеспечивает функциональность для управления продуктами, категориями, поиском, а также включает в себя систему авторизации и админ панель для менеджеров магазина.

## Основные технологии

- **React.js(Next.js)**
- **TypeScript**
- **scss, sass**
- **zustand**
- **jest, react testing library**
- **storybook**
- **eslint, stylelint, prettier**
  
## Функциональность

- **Карточки товаров, фильтрация, категории, поиск**
- **Система избранных товаров**
- **Система корзина и подсчета общей суммы и кол-ва товаров**
- **Система рейтинга товаров, отзывов, комментариев**
- **Система регистрации, авторизации**
- **Профиль пользователя, смена данных**

## Установка

1. Клонируйте репозиторий:

   ```bash
   git clone https://github.com/zamukaev/game-store_2.0.git

2. Установите зависимости:

   ```bash
   npm install
   
3. Запустите фронтенд:
   
   ```bash
      npm run dev

4. Билд и запуск storybook:

   ```bash
      npm run build-storybook
      npm run storybook
   
5. Запуск тестов:

   ```bash
      npm run test:unit
   
6. Запуск и фикс eslint:

   ```bash
      npm run lint:ts
      npm run lint:ts:fix
   
7. Запуск и фикс stylelint:

   ```bash
      npm run lint:scss
      npm run lint:scss:fix
   
8. Запуск и фикс prettier:

   ```bash
      npm run prettier
      npm run prettier:fix
