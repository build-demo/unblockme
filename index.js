/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Probot} app
 */
module.exports = (app) => {
  // Your code here
  app.log.info("Yay, the app was loaded!");

  module.exports = app => {
    app.on('pull_request.opened', async context => {
      const files = await context.github.pullRequests.getFiles(context.issue())
      const config = await context.config('config.yml')
      context.log.info(context.payload);
      context.log.info(config);
      context.log.info(files);
      // const docs = files.data.find(function (file) {
      //   let targetFile
  
      //   if (config.updateDocsTargetFiles) {
      //     targetFile = config.updateDocsTargetFiles.find(function (item) {
      //       if (file.filename.startsWith(item) || file.filename.includes(item)) {
      //         return item
      //       }
      //     })
      //     return targetFile
      //   } else {
      //     if (file.filename.startsWith('README') || file.filename.includes('docs/')) {
      //       return file
      //     }
      //   }
      // })
  
      // if (!docs) {
      //   // Get config.yml and comment that on the PR
      //   try {
      //     const title = context.payload.pull_request.title
      //     let whiteList
      //     if (config.updateDocsWhiteList) {
      //       whiteList = config.updateDocsWhiteList.find(function (item) {
      //         if (title.toLowerCase().includes(item.toLowerCase())) {
      //           return item
      //         }
      //       })
      //     }
      //     // Check to make sure it's not whitelisted (ie bug or chore)
      //     if (!whiteList) {
      //       const template = config.updateDocsComment
      //       return context.github.issues.createComment(context.issue({body: template}))
      //     }
      //   } catch (err) {
      //     if (err.code !== 404) {
      //       throw err
      //     }
      //   }
      // }
    })
  }
  

  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
};
