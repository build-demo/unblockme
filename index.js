const {sendEmail} = require('./lib/mail')
/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Probot} app
 */
module.exports = (app) => {
  // Your code here
 

    app.on(["issues.opened", "issues.edited"], async(context) => {
      const {title, body, labels, repository_url }=  context.payload.issue
      const IssueLabels = labels.map(label => label.name)
      if(IssueLabels.includes("help wanted")){
        // context.log.info(title, body, labels, repository_url)
        context.log.info(title)
        context.log.info(body)
        context.log.info(labels[0].name)
        context.log.info(repository_url)
     
        await sendEmail()
      }
    });
    
  
  

  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
};
