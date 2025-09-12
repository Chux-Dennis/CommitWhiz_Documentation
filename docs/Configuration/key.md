---
sidebar_position: 2

---


# key

You will need a [Gemini API Key](https://aistudio.google.com/) to use CommitWhiz (unless you are running a local model).


```js
const whizConfig = Whiz.config({
 key:"Alza-XXXX-XXXX" //should be accessed through your .env
})
```

:::warning
You cannot use key if useLocalModel is set to true
:::