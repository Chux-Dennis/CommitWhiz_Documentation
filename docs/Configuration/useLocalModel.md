---
sidebar_position: 7
---

# useLocalModel

This property allows you to use local [Ollama models](https://ollama.com/models) as opposed to using Gemini with an API key.

This property works together [modelOptions](./modelOptions).

```js 
const whizConfig = Whiz.config({
  useLocalModel:true
});
```

:::warning
Check the compatibility of your machine before pulling an Ollama model to run locally
:::