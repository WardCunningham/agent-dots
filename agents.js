function agents() {
  var head = 
    "accountId,accountName,applicationId,applicationName,environment,agentLanguage,agentVersion,versionAgeInMonths"
  var data = [
    "908482,Radar Team,2669833,Seymour Account Service,,ruby,4.5.0,6",
    "908482,Radar Team,2669814,Seymour Account Service,(Staging),ruby,4.5.0,6",
    "908482,Radar Team,1033722,SMTFA,,ruby,4.8.0,2",
    "908482,Radar Team,1033693,SMTFA,(Staging),ruby,4.8.0,2",
    "908482,Radar Team,4781983,violation-signal-event-service,(eu-production),java,3.4.0,11",
    "908482,Radar Team,4102358,violation-signal-event-service,(production),java,4.4.0,1",
    "908482,Radar Team,4080069,violation-signal-event-service,(staging),java,4.4.0,1",
    "10013014,Support Tools Engineering,4625784,resolvatron,,ruby,4.6.0.338,4",
    "10013014,Support Tools Engineering,5923825,resolvatron,(eu-production),ruby,4.6.0.338,4",
    "10013014,Support Tools Engineering,4604786,resolvatron,(Staging),ruby,4.6.0.338,4",
    "1029960,Backpack,4271804,backpack-checklist,production,ruby,4.1.0.333,14",
    "1029960,Backpack,4270875,backpack-checklist,staging,ruby,4.1.0.333,14",
    "1029960,Backpack,4711733,Bilge,,go,1.11.0,2",
    "1050017,NR-UI,2638532,issue-tracker,Staging,nodejs,1.37.2,5"
  ]
  var colors = {
    ruby: "red",
    java: "blue",
    go: "green",
    nodejs: "orange"
  }
  cols = head.split(/,/)
  return data.map (function (row) {
    result = {}
    vals = row.split(/,/)
    for (var i = 0; i < cols.length; i++) {
      result[cols[i]] = vals[i]
    };
    result.color = colors[result.agentLanguage]||"yellow"
    return result
  })
}
