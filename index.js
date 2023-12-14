function scuberGreetingForFeet(feet){
  // Write your code here!
  if(feet <= 400){
    return "This one is on me!";
  } else if (feet >2000 && feet <= 2500){
    return "I will gladly take your thirty bucks.";
  } else {
    return "No can do.";
  }
}
console.log(scuberGreetingForFeet(400))


function ternaryCheckCity(city){
  // Write your code here!
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(Tip){
  // Write your code here!
  switch (true) { 
  case Tip === 'generous': 
      return "Thank you so much.";
    case Tip === 'not as generous':
      return "Thank you."
    default:
      return "Bye.";
  }

}