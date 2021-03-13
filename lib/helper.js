  // this is to get the programming language from the issue description
  const getIssueDescription =(body)=> body.split("\n").reduce(function(obj, str, index) {
    let strParts = str.split("=");
    if (strParts[0] && strParts[1]) { //<-- Make sure the key & value are not undefined
      obj[strParts[0].replace(/\s+/g, '')] = strParts[1].trim(); //<-- Get rid of extra spaces at beginning of value strings
    }
    return obj;
  }, {});

  module.exports={ getIssueDescription}