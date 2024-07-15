// @refresh reload
import { createHandler, StartServer } from '@solidjs/start/server'

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="icon" href="/icons/heart.svg" />

          <title>SCASCIO</title>
          <meta name="description" content="I <3 SCASCIO - 20th anniversary" />

          <meta property="og:url" content="http://scascio.com" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="SCASCIO" />
          <meta property="og:description" content="I <3 SCASCIO - 20th anniversary" />
          <meta property="og:image" content="https://scascio.com/icons/heart.svg" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content="scascio.com" />
          <meta property="twitter:url" content="http://scascio.com" />
          <meta name="twitter:title" content="SCASCIO" />
          <meta name="twitter:description" content="I <3 SCASCIO - 20th anniversary" />
          <meta name="twitter:image" content="https://scascio.com/icons/heart.svg" />
          {assets}
        </head>
        <body>
          <div id="app">{children}</div>
          {scripts}
        </body>
      </html>
    )}
  />
))
