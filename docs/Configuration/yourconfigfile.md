---
sidebar_position: 1
---


# Your Config File

Understanding the structure of your config file would help in getting the best out of CommitWhiz

### Config Structure

A basic **_whiz.config.js_** file would look like this:

```js title="whiz.config.js"
import { Whiz } from "commitwhiz";

const whizConfig = Whiz.config({
  key: process.env.GEMINI_API_KEY,
  useTextEditor: false,
  autoPush: true,
  autoPushOptions: {
    branch: "main", 
    remote: "origin",
  },
});

export default whizConfig;
```
