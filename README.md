# Refactoring Using MobX

## Discussion

**Topics to discuss:**

- MobX
- State vs MobX

## Step 0: Previous Challenge

1. To make an `input` tag required, we basically add the attribute `required`:

```javascript
<input
  required
  type="text"
  className="form-control"
  onChange={(event) => setName(event.target.value)}
/>
```

2. To add an ID to our cookie item, we'll basically get the ID of the last item in `_cookies` and increment it by 1.

```javascript
const id = _cookies[_cookies.length - 1].id + 1;
```

## Step 1: Create a MobX Store

At this point, our code is growing, and the code in `App` is becoming bulkier. Also, passing `cookies` and its methods can easily become messier. So we will create a store that manages our global data.

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

5. What are our properties? Or what's the data that's being used by many components? In this case it's `cookies`. So we'll import it in and save it in a class property:

```javascript
import cookies from "../cookies";

class CookieStore {
  cookies = cookies;
}
```

6. Now we turn this class into a store that can manage the changes in `cookies`. To do that we will import `decorate` and `observable` from `mobx`:

```javascript
import { decorate, observable } from "mobx";
```

7. Now **after** defining our class we will call the `decorate` method and pass it our class, `CookieStore`. This method `decorates` `CookieStore` by giving it the superpowers that will turn it to a mobx store.

```javascript
class CookieStore {
  cookies = cookies;
}

decorate(CookieStore);
```

8. Also, decorate takes an object. In this object we will define our properties that can be observed by the app's components. If a property is defined as an observable, the components can see the changes that occur to it.

```javascript
class CookieStore {
  cookies = cookies;
}

decorate(CookieStore, {
  cookies: observable,
});
```

9. Next we need to create an instance of our store and export it:. Keep in mind that if you export it without creating an instance, any component that imports it will have its own instance!

```javascript
const cookieStore = new CookieStore();
export default cookieStore;
```

10. Let's use our new store!

## Step 2: Use the Store

Now, instead of passing `cookies` as a prop to `CookieList` and `CookieDetail`, we can directly import our store in those components and access the data directly!

1. In `CookieList`, import `cookieStore`:

```javascript
// Stores
import cookieStore from "../stores/cookieStore";
```

2. To access in `cookies` in `cookieStore`, we will say `cookieStore.cookies`. So let's replace `cookies` that's coming from `props` with `cookieStore.cookies`:

3) Let's see what happens. Our cookies are there! But the delete and create stopped working, because they're updating the cookies state not the store cookies.

4. Let's move the `createCookie` method to the store and fix it. First, remove `const` and replace `_cookies` with `cookies`:

```javascript
createCookie = (newCookie) => {
  newCookie.id = cookies[cookies.length - 1].id + 1;
  setCookies((oldCookies) => [...oldCookies, newCookie]);
};
```

5. In a mobx store we're dealing with normal properties, so we don't need set methods. We can directly change `cookies`, but remember! In a class, to refer to one of its properties we need to use `this`!

```javascript
createCookie = (newCookie) => {
  newCookie.id = cookies[cookies.length - 1].id + 1;
  this.cookies.push(newCookie);
};
```

6. This method is used in `CookieModal`, so we will import it there:

```javascript
// Stores
import cookieStore from "../../stores/cookieStore";
```

7. Replace `createCookie` with `cookieStore.createCookie`:

```javascript
const handleSubmit = (event) => {
  event.preventDefault();
  const newCookie = {
    name,
    price,
    description,
    image,
  };
  cookieStore.createCookie(newCookie);
  closeModal();
};
```

8. Let's try creating a new cookie. Nothing happened..... So weird! Let's console log `cookies` in our method

```javascript
createCookie = (newCookie) => {
  newCookie.id = cookies[cookies.length - 1].id + 1;
  this.cookies.push(newCookie);
  console.log("CookieStore -> createCookie -> cookies", cookies);
};
```

9. The array is changing! But it's like `CookieList` is not seeing the change. That's because we need to make `CookieList` an `observer` to track any changes in our store. In `CookieList`, import `observer`:

```javascript
import { observer } from "mobx-react";
```

10. Wrap your component in the export line:

```javascript
export default observer(CookieList);
```

11. Now we can remove `createCookie` from `App`, `CookieList` and `CookieModal`!

## Step 3: Delete Method

A lot is going on in our delete method, if we move it directly to the store it'll cause a mess.

1. In our `Delete` component, we'll create a method called `handleDelete` that handles `preventDefault` and going to the list page.

```javascript
const handleDelete = (event) => {
  event.preventDefault();
  cookieStore.deleteCookie(cookieId);
  history.push("/cookies");
};
```

2. Since we're only passing `event` to `handleDelete`, we don't need to pass it, it's passed automatically to `handleDelete`

```jsx
<DeleteButton onClick={handleDelete}>Delete</DeleteButton>
```

3. Now fix `deleteCookie` in `App`:

```javascript
const deleteCookie = (cookieId) => {
  const updatedCookies = _cookies.filter((cookie) => cookie.id !== +cookieId);
  setCookies(updatedCookies);
};
```

4. Now let's move it to our lovely store. Remove the `setCookies` line and directly update `this.cookies`

```javascript
deleteCookie = (cookieId) => {
  this.cookies = this.cookies.filter((cookie) => cookie.id !== +cookieId);
};
```

5. Go to `Delete` component, import `cookieStore`:

```javascript
import cookieStore from "../../stores/cookieStore";
```

6. Replace `deleteCookie` from `props` with `cookieStore.deleteCookie`

```javascript
const handleDelete = (event) => {
  event.preventDefault();
  cookieStore.deleteCookie(cookieId);
  history.push("/cookies");
};
```

7. Try the delete button. It's working!

8. Delete both `_cookies` state and `deleteCookie` method in `App`, `CookieList`, `CookieItem`, `Delete`. The code looks much better!!
