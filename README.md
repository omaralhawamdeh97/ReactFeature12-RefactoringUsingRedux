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

1. Our search is case sensitive. To fix that we will use `toLowerCase` on both `cookie.name` and `query`. This guarantees that there is no issue with the case:

```javascript
const searchCookies = query => {
  const filteredCookies = _cookies.filter(cookie =>
    cookie.name.toLowerCase().includes(query.toLowerCase())
  );
  setCookies(filteredCookies);
};
```

## Step 1: Create a MobX Store

1. Start with installing `mobx` and `mobx-react`.
