/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Probot} app
 */
module.exports = (app) => {
  // Your code here
  app.log.info("Yay, the app was loaded!");

  module.exports = app => {
    app.on(["issues.opened", "issues.edited"], async(context) => {
      const {title, body, labels, repository_url }= await context.payload.issue
      const IssueLabels = labels.map(label => label.name)
      if(IssueLabels.includes("help wanted")){
        const params = context.issue({ body, title, repository_url });
        return await context.octokit.issues.createComment(params);
      }

      
    
    });
    app.log.info("So is this how it will be")
  }
  

  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
};
