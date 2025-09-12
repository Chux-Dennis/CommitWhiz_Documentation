---
sidebar_position: 4
---

# autoPush

This property is used together with [autoPushOptions](./autoPushOptions). With these properties your code is automtically pushed to GitHub after a successful commit.


```js
const whizConfig = Whiz.config({
  autoPush: true,
});
```


:::info 
autoPush would not work if you do not set your autoPushOptions!
:::