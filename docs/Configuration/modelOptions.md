---
sidebar_position: 8
---

# modelOptions

This property is used together with [useLocalModel](./useLocalModel).

This property is used to specify the model of your desired local model and the port(optional) that your Ollama server runs on.

```js
const whizConfig = Whiz.config({
  modelOptions: {
    model: "deepseek-r1",
    port: 11434,
  },
});
```
