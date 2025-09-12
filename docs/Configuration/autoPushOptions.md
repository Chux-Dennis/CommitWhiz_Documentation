---
sidebar_position: 5
---

# autoPushOptions

The autoPushOptions property work together with [autoPush](./autoPush).

The autoPushOptions are used to define the branch(eg. master) and remote(eg. origin) for your Github remote repository.

```js
const whizConfig = Whiz.config({
  autoPushOptions: {
    branch: "main",
    remote: "origin",
  },
});
```

:::info 
autoPushOptions would not work if autoPush is not true
:::
