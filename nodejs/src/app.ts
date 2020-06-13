import 'dotenv/config'

import express from 'express'
import cors from 'cors'
import { resolve } from 'path'
// import * as Sentry from '@sentry/node';
// import 'express-async-errors'
import routes from './routes'

// import sentryConfig from './config/sentry';

import './database'

class App {
  server: express.Application;

  public constructor () {
    this.server = express()

    // Sentry.init(sentryConfig);

    this.middlewares()
    this.routes()
  }

  private middlewares (): void {
    // this.server.use(Sentry.Handlers.requestHandler());
    this.server.use(express.json())
    this.server.use(
      '/uploads',
      express.static(resolve(__dirname, '..', 'uploads'))
    )
  }

  private routes (): void {
    this.server.use(cors())
    this.server.use(routes)
    // this.server.use(Sentry.Handlers.errorHandler());
  }
}

export default new App().server
