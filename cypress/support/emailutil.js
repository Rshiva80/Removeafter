export function Email(){

const email = Math.floor(Math.random()*1000);
const emailaddress = "aa" + email + "@test.com";
return emailaddress;
}