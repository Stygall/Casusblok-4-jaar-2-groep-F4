# Casusblok-4-jaar-2-groep-F4

installeer de volgende programmas (link bijgevoegd)

- **nodejs**
  https://nodejs.org/en/download/
- **git** (installeer ook bash mee)
  https://git-scm.com/downloads
- **visual studio code**
  https://code.visualstudio.com/download

- Start vscode en open je nieuwe folder **(CTRL+K+O)**

_open een nieuwe git bash terminal en voer de volgende command in:_

`git clone https://github.com/DaniMonfrance/Casusblok-4-jaar-2-groep-F4`

- Open de Casusblok-4-jaar-2-groep-F4 folder wederom met **CTRL+K+O**

_in de git bash terminal:_

`git checkout Development`

- Wacht totdat de git in je IDE geladen is

`cd ruilwinkel`

- Installeer de benodigde dependencies vanuit package.json

  `npm install`

- dan run vervolgens de server deployement scripten in deze volgorde

  _in de git bash terminal:_

  `moralis-admin-cli create-server --moralisApiKey z4VED4PyG39Zpvv --moralisApiSecret 67e0A5yLw8xEpJw --serverName RWVDev --region amsterdam --network mainnet --evmProviders 0x38`

  dan run vervolgens de connection script
  wip

dan run vervolgens de insert script
wip

dan run vervolgens de test script
wip

nu zou alles in orde moeten zijn en kun je de volgende command runnen in de bash terminal van vs code
**in de git bash terminal**
_voor development omgeving_

`npm start`

_voor production omgeving_

`npm run build`

`npm install -g serve`

`serve -s build`
