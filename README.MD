# Proyecto inicial con Cohere

Este es un proyecto inicial que utiliza la API de Cohere para generar texto automatizado. La API de Cohere permite generar texto natural en varios idiomas y estilos, lo que puede ser útil en aplicaciones como chatbots, asistentes virtuales, redacción de contenido, entre otros.

## Instalación

Para instalar las dependencias del proyecto, es necesario tener `npm` instalado. Luego, desde la terminal, ejecuta:

```javascript
npm install
```

Esto instalará todas las dependencias necesarias, incluyendo la librería de Cohere.

## Configuración

Para utilizar la API de Cohere, es necesario crear una cuenta en su sitio web y obtener una clave de API válida. Luego, en un archivo `.env` ubicado en la raíz del proyecto, se debe agregar la siguiente línea:

COHERE_API_KEY=<tu_clave_de_API>

Reemplaza `<tu_clave_de_API>` con la clave de API que obtuviste de Cohere.

## Uso

Para utilizar la API de Cohere en tu proyecto, es necesario importar la librería `cohere-ai` y llamar a la función `cohere.generate()` con los parámetros necesarios. Aquí te dejamos un ejemplo:

```javascript
import cohere from 'cohere-ai';

cohere.init(process.env.COHERE_API_KEY);

const prompt = 'Este es un ejemplo de texto de entrada.';

const response = await cohere.generate({
  model: 'xlarge',
  prompt: prompt,
  max_tokens: 100,
  temperature: 0.9,
  k: 0,
  p: 1,
  frequency_penalty: 0,
  presence_penalty: 0,
  stop_sequences: ['\n'],
});

console.log(response.data.choices[0].text);
```

Este ejemplo utiliza la función **generate()** de Cohere para generar un texto de 100 tokens a partir de la entrada de texto proporcionada en prompt. También se establecen varios parámetros adicionales, como el modelo a utilizar, la temperatura, y los valores de penalización de frecuencia y presencia.
