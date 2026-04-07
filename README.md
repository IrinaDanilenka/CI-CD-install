# Todo List Advanced

Приложение для управления задачами с различными подходами к управлению состоянием.

## Компоненты

- **TodoList** - отображает все задачи
- **TodoItem** - компонент одной задачи
- **AddTodoForm** - форма для добавления новой задачи
- **Filters** - фильтры для отображения задач (все/активные/выполненные)
- **Statistics** - счетчики задач
- **ThemeSwitcher** - переключатель темы приложения

## Установка

```bash
npm install
# или
yarn install
```

## Запуск

```bash
npm start
# или
yarn start
```

## Структура проекта

```
src/
  components/
    TodoList/
      TodoList.tsx
      TodoList.css
    TodoItem/
      TodoItem.tsx
      TodoItem.css
    AddTodoForm/
      AddTodoForm.tsx
      AddTodoForm.css
    Filters/
      Filters.tsx
      Filters.css
    Statistics/
      Statistics.tsx
      Statistics.css
    ThemeSwitcher/
      ThemeSwitcher.tsx
      ThemeSwitcher.css
  App.tsx
  App.css
  index.tsx
  index.css
```