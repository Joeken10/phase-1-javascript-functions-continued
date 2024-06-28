// // code your solution here
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

let mondayWork = function(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
}

function wrapAdjective(VisualFlair = "*") {
  return function(adjective) {
      return `You are ${VisualFlair}${adjective}${VisualFlair}!`;
  }
}
