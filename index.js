const {sendEmail} = require('./lib/mail')
const { getIssueDescription } = require('./lib/helper')

/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Probot} app
 */
module.exports = (app) => {
  // Your code here
 

    app.on(["issues.opened", "issues.edited"], async(context) => {
      const {title, body, labels, repository_url }=  context.payload.issue

    

      const {Mentorassist, Name, Email, Description , ProgrammingLanguage} = getIssueDescription(body)
      
      const IssueLabels = labels.map(label => label.name)
      if(!IssueLabels.length){
        const params = context.issue({ body: "it seems the issue has no label do you want to be connected to a mentor?" })
        return await context.octokit.issues.createComment(params)
      }
      if(!body){
        const params = context.issue({ body: "It seems the issue has no information, kindly edit the information if you want to be connected to a mentor" })
        return await context.octokit.issues.createComment(params)
      }
      if(IssueLabels.includes("help wanted") && (body && Email && ProgrammingLanguage) ){
        // context.log.info(title, body, labels, repository_url)
        context.log.info(title)
        context.log.info(body)
        context.log.info(labels[0].name)
        context.log.info(repository_url)
     
         await sendEmail(Name, Email)
        const params = await context.issue({ body: "Awesome, Issue successfully created. Check your email to schedule a session with a mentor" })
        return await context.octokit.issues.createComment(params)
      }   
    });
    
  
  

  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
};
