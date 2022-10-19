import ReactDOM from 'react-dom/server';  
import express from 'express';
import { App } from '../application';
import path from 'path';
import { ChunkExtractor } from '@loadable/server'

const app = express();
const port = 3000;

const statsFile = path.resolve('./dist/server/loadable-stats.json')
const extractor = new ChunkExtractor({ statsFile })

app.use('/assets', express.static(path.join(__dirname, 'assets')))


app.get('/', (_, res) => {
    const jsx = extractor.collectChunks(<App />)
    const html = ReactDOM.renderToString(jsx);

    const styleTags = extractor.getStyleTags();

    res.send(`
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>My SSR App</title>
                ${styleTags}
            </head>
            <body>
                <div id='root'>${html}</div>
            </body>
        </html>
    `);
});

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});