# Refactoring Using MobX

## Discussion

**Topics to discuss:**

- MobX:
  - `decorate`
  - `observers`
  - `observable`
  - `computed`
- State vs MobX

## Step 0: Previous Challenge

## Step 1: Create a MobX Store

1. Start with installing `mobx` and `mobx-react`.

```shell
  $ yarn add mobx mobx-react
```

2. Create a folder in `src` called `stores`. This is where we will create all our application's stores.

3. Create a file called `cookieStore.js`

4. A store is simply a `class`. Let's define our class:

```javascript
class CookieStore {}
```

5. What are our properties? Basically the data that's being many components, which in this case is `cookies`. So we'll import it in and save it in a class property:
