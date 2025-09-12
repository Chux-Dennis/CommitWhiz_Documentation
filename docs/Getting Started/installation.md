---
id: Installation
title: Installation
sidebar_position: 1
---

# Installation


Getting started with CommitWhiz is pretty straightforward and easy.



**Prerequisites**
- [Node](https://nodejs.org)/NPM (>= 18) installed
- Git 
- Ollama (Optional, If you are using a local model.)
- A [Gemini](#) API Key (if you are using the AI cloud service)

_Note:You need to have at least 8GB of RAM wth a good processor speed to run a local ollama server perfectly on your machine_


For better reference , read [this.](https://www.databasemart.com/blog/choosing-the-right-gpu-for-popluar-llms-on-ollama?srsltid=AfmBOooTOK0-gVSDfTr11fIf5BsO2FOEN7VXP_UI_xe2amlcakLISKFm)


### Install CommitWhiz
You can install **Commitwhiz** using your preferred package manager:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="npm" label="npm" default>
  
  ```bash
  npm install -g commitwhiz
  ```
  
  </TabItem>

  <TabItem value="yarn" label="Yarn">
  
  ```bash
  yarn global add commitwhiz
  ```
  
  </TabItem>

  <TabItem value="pnpm" label="pnpm">
  
  ```bash
  pnpm add -g commitwhiz
  ```
  
  </TabItem>
</Tabs>




### Verify Installation
After Installation, run:

```bash 
commitwhiz --version
```
If installed correctly , you will see the current version number.

### Updating CommitWhiz
To update to the latest version:

```bash
npm update -g commitwhiz
```