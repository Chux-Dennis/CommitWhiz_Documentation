---
sidebar_position: 6
---

# initializeGitByDefault

This command is responsible for running ***git init*** if no local git repository was detected.

```js
const whizConfig = Whiz.config({
  initializeGitByDefault:true
});
```