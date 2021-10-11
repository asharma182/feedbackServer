import express from 'express'


async function startServer() {
    const app = express()
    const PORT = process.env.PORT || 3001;

    await require('./loaders').default({expressApp: app})

      app.listen(PORT, err => {
        if (err) {
            console.log(err)
            process.exit(1)
            return;
        }
        console.log(`
      ################################################
      🛡️  Server listening on port: ${PORT} 🛡️ 
      ################################################
    `);
    });

}

startServer()