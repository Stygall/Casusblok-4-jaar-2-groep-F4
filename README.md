# Casusblok-4-jaar-2-groep-F4

**Installeer de volgende programmas (link bijgevoegd)**

- **Nodejs**
  https://nodejs.org/en/download/
- **Git** (installeer ook Bash mee)
  https://git-scm.com/downloads
- **Een IDE**
  - ** Bijvoorbeeld Visual studio code**
  https://code.visualstudio.com/download

**Onderneem de volgende stappen in jouw IDE**

- Start jouw IDE en open je nieuwe folder **shortcut bij vscode: (CTRL+K+O)**

_open een nieuwe git bash terminal en voer de volgende command in:_

`git clone https://github.com/Stygall/Casusblok-4-jaar-2-groep-F4`

- Open de Casusblok-4-jaar-2-groep-F4 folder

_in de git bash terminal:_

`git checkout Development`

- Wacht totdat de git in je IDE geladen is

_in de (git bash) terminal:_

`cd ruilwinkel`

- Installeer de benodigde dependencies vanuit package.json

_in de (git bash) terminal:_

  `npm install`

  `npm install -g serve`

- dan run vervolgens de server deployement script in deze volgorde

  _in de (git bash) terminal:_

**_- voor development omgeving_**

  `moralis-admin-cli create-server --moralisApiKey z4VED4PyG39Zpvv --moralisApiSecret 67e0A5yLw8xEpJw --serverName RWVDev --region amsterdam --network mainnet --evmProviders 0x38`

**_- voor productie omgeving_**

`moralis-admin-cli create-server --moralisApiKey z4VED4PyG39Zpvv --moralisApiSecret 67e0A5yLw8xEpJw --serverName RWV --region amsterdam --network mainnet --evmProviders 0x38`

dan run vervolgens de connection script
wip

dan run vervolgens de insert script
wip

dan run vervolgens de test script
wip

nu zou alles in orde moeten zijn en kun je de volgende command runnen in de bash terminal van vs code

_in de git bash terminal_

**_- voor development omgeving_**

`npm start`

**_- voor development omgeving_**

`npm run build`

 
`moralis-admin-cli deploy --moralisApiKey z4VED4PyG39Zpvv --moralisApiSecret 67e0A5yLw8xEpJw` daarna `0`

`surge --project ./build --domain ruilwinkel.surge.sh  `
