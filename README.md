# AniAPI Js

[AniAPI](https://aniapi.com) js wrapper.

## Use

### Install

```sh
npm install --save aniapi-js

# or yarn

yarn add aniapi-js
```

### Example

```js
import AniAPI from 'aniapi-js'

const aniapi = new AniAPI('token')

aniapi.anime.random(1).then((res) => console.log(res))

aniapi.anime.getById(11).then((res) => console.log(res))

```

All then params and body data are in official [documentation](https://aniapi.com/docs).

### Original response

```json
{
  "status_code": 200,
  "message": "Story deleted",
  "data": ...,
  "version": "1"
}
```

### AniAPI-js reponse

this wrapper just return `data` field inside of original response

```json
{
  ...
}
```

In case of status code not is `200` return original response.

```json
{
    "status_code": 404,
    "message": "Anime not found",
    "data": "Anime with id 12345 does not exists",
    "version": "1"
}
```

### API version

All the methods support future versions of api `/v${v}/...`, this is the last parameter of all methods
default version it's `1`

```js
aniapi.anime.getById(11, 1).then((res) => console.log(res))
```

---

### Rewards

[AniAPI.js](https://github.com/MattPlays/AniAPI.js) for enums 🙌
