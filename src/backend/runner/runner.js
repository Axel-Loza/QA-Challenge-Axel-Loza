const newman = require('newman');
var basePath = '/Users/hugo.loza/Documents/QA /Axel QA challenge/QA-Challenge-Axel-Loza/'


newman.run({
    collection: require(basePath + '/src/backend/collections/Test_collection.json'), // Collection URL from a public link or the Postman API can also be used
    reporters: ['htmlextra'],
    environment: basePath + '/src/backend/environment/test.postman_environment.json',
    exportEnvironment:basePath + '/src/backend/environment/test.postman_environment.json',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: basePath + '/src/backend/reports/report.html',
            // template: './template.hbs'
            // logs: true,
            // showOnlyFails: true,
            // noSyntaxHighlighting: true,
            // testPaging: true,
            // browserTitle: "My Newman report",
            // title: "My Newman Report",
            // titleSize: 4,
            // omitHeaders: true,
            // skipHeaders: "Authorization",
            // omitRequestBodies: true,
            // omitResponseBodies: true,
            // hideRequestBody: ["Login"],
            // hideResponseBody: ["Auth Request"],
            // showEnvironmentData: true,
            // skipEnvironmentVars: ["API_KEY"],
            // showGlobalData: true,
            // skipGlobalVars: ["API_TOKEN"],
            // skipSensitiveData: true,
            // showMarkdownLinks: true,
            // showFolderDescription: true,
            // timezone: "Australia/Sydney",
            // skipFolders: "folder name with space,folderWithoutSpace",
            // skipRequests: "request name with space,requestNameWithoutSpace",
            // displayProgressBar: true
        }
    }
});