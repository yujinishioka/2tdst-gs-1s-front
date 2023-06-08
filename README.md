# 2TDST ~ Global Solution - 3º Semestre

<p>
  <img src="./gs-front/assets/logo-circle.png" width="350" title="hover text">
</p>

## Integrantes

RM | Nome
--- | ---
**94170** | Felipe Breno Sugisawa Altran
**93187** | Gabriel João da Silva
**94513** | Leandro Alves de Souza Braga
**94266** | Vinicius Alves Torres
**92895** | Vinicius Yuji Nishioka


## Resumo do Projeto
Combata a fome global com o CookAi: um aplicativo revolucionário com um toque de inteligência artificial. Gerencie alimentos de forma eficiente, crie receitas incríveis e evite desperdícios.
Chega de pensar "o que vou cozinhar hoje?" - o CookAi torna a tarefa fácil e divertida!

## (Expo ou Android Stúdio), Api java
<details>
<summary>Expo</summary>

# Start project
  
  
| Dependency | Version  |
| --- | --- |
| Node | 16.18.0 |
| npm | 8.19.2 |

*instalando dependências*
```
npm i
```

*rodando o projeto*
```
expo start -c
```

*alterando ambiente*
```js
//2tdst-gs-1s-front/gs-front/api.js
import axios from 'axios';
const api = axios.create({
baseURL: 'http://192.168.0.16:8080/',//<<< ALTERAR
headers: {
'Content-Type': 'application/json',
},
});
export default api;
```

</details>

<details>
<summary>Android studio</summary>

### **Dependências**

| Dependency | Version  |
| --- | --- |
| Node | 18.x |
| JDK | 11 |
| npm | 8.19.2 |
| Android Studio | 2022.2.1.20 |
  
### **Recomendações**

* Visual Studio Code
* Chocolatey

### **Instalando dependências e recomendações**

### Chocolatey

Utilize um **terminal com permissão de administrador**.

O comando a seguir instala o Chocolatey e adiciona a passagem de ambiente.

```
@"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "[System.Net.ServicePointManager]::SecurityProtocol = 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"
```

Node e o JDK11

**Obs: Caso ja tenha os 2 programas instalados ou algum deles, pule essa etapa ou adicione apenas aquele que esteja faltando "nodejs-lts" ou "openjdk11".**

```
choco install -y nodejs-lts openjdk11
```

Android Studio

https://developer.android.com/studio

Visual Studio Code

https://code.visualstudio.com/

---

### **Configurando Android Studio**

Após abrir o Android Studio:

```
File -> Settings
```

Dentro de Settings:

```
Appearance & Behavior -> System Settings -> Android SDK
```

Selecione a opção **Show Package Details**

Marcar as opções **Android SDK Platform 31** e **Intel x86 Atom_64 System Image** que estarão dentro das opções de **Android 12.0(S)**

Na seção **SDK Tools** selecione a opção **Show Package Details**

Marcar a opção **31.0.0** em **Android SDK Build-Tools**

Clicar em **Apply** e depois **OK**

---

### **Variáveis de Ambiente**

Dentro das váriaveis de ambiente adicione uma nova variável para o **usuário** com os seguintes atributos:

**Obs: altere o valor de <usuário> pelo seu nome de usuário.**

```
Name: ANDROID_HOME
Value: "C:\Users\<usuário>\AppData\Local\Android\Sdk"
```

Para vizualizar se a variável foi adicionada corretamente, uilize o comando no **Powershell**, e procure por **ANDROID_HOME**.

```
Get-ChildItem -Path Env:\
```

Nas variáveis do **sistema**, **edite** a variável **Path** e adicione uma nova com o caminho:

**Obs: altere o valor de <usuário> pelo seu nome de usuário.**

```
C:\Users\<usuário>\AppData\Local\Android\Sdk\platform-tools
```

---

### **Comandos**

*instalando dependências*
```
npm i
```

*rodando o projeto*
```
npm start
```

ou

```
expo start
```

</details>

<details>
<summary>API Java docker</summary>

*depois de abrir o prompt da pasta com Git bash, faça:*
```
cd cook-ai-application/
```
*convert Uto unix format*
```
dos2unix gradlew
```
*voltar pasta*
```
cd ..
```
*rodar api*
```
docker-compose up --build
```
</br>

## Rotas
| Methods | Route  |
|---|---|
| GET | /recipe (Busca todas receitas do usuário logado) |
| GET | /recipe/all (Busca todas receitas de todos usuários) |
| GET | /recipe/count (Busca a quantidade de receitas geradas pelo usuario logado) |
| POST | /recipe (Cria receita) |
| POST | /login (login usuario) |
| POST | /user/register (Registro usuario) |
| GET | /user/all (busca todos usuarios - esse o front n usa) |

</details>
