# PokeRandom Tournament

Este proyecto se ha creado con el fin de poder dar visibilidad al PokeRandom Tournament, viendo la progresión y mejora de los diferentes equipos de los participantes

## Scripts

En el proyecto hay los siguientes scrips:

### `npm install`

Instala las dependéncias marcadas por el package.json

### `npm start`

Enciende la app en modo desarrollador.\
Abre [http://localhost:3000](http://localhost:3000) para verlo en el navegador.

La página tiene hot reload para los cambios.\

### `npm run build`

Sirve para crear una versión de producción con los elementos optimizados.

## Funcionamento

La página contiene toda la información necesaria para cada jugador en un json.
Este json se debe ir actualizando para que la gente vea los cambios y la progresión de los equipos.

### Formato

Los json de TODOS los jugadores tiene el mismo formato

#### Datos principales

playerName: Nombre del jugador
playerTwitch: Link al twitch/youtube del jugador
playerImageUrl: Url de la imagen del jugador
hasCoach: Booleano para determinar si tiene entrenador/coach
coachName: Nombre del entrenador/coach
coachTwitch: Link al twitch/youtube del entrenador/coach
coachImageUrl: Url de la imagen del jugador
badges: Medallas que tiene el jugador
lifes: Vidas que le quedan al jugador

#### Equipo

El atributo equipo es una array dónde se llena de objetos Pokémon.

#### Pokémon

pokemonName: Nombre del pokémon
pokemonIndex: Índice menos 1 de la entrada del pokémon en la dex INTERNACIONAL. Ejemplo: Noctowl N.ª164 -> pokemonIndex=163. El índice se puede obtener de [https://www.pokemon.com/es/pokedex/](https://www.pokemon.com/es/pokedex/)
pokemonHability: Habilidad del pokémon
pokemonDescription: Descripción del pokémon, sacada de [https://www.pokemon.com/es/pokedex/](https://www.pokemon.com/es/pokedex/)

#### Movimientos Pokémon

Cada pokemon cuenta una array de sus movimientos.
moveName: Nombre del ataque
PP: Número de PP que tiene el ataque
type: Tipo del ataque en String, las opciones són:

- Bicho
- Normal
- Tierra
- Fuego
- Agua
- Eléctrico
- Planta
- Hielo
- Lucha
- Veneno
- Volador
- Psíquico
- Roca
- Fantasma
- Dragón
- Siniestro
- Acero
- Hada (en principio NO deberían existir en el PokeRandom Tournament pero lo he preparado por si en un futuro se quisiera hacer un PokeRandom Tournament 2 con hadas)
