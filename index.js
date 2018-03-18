require('dotenv').load();
var ip = require('ip');

require('gmail-send')({
  user:  process.env.email,
  pass:  process.env.password,   
  to:   'rloreto@gmail.com',        
  subject: 'Homed is running. Ip:' + ip.address(),
  text:    'ip:' + ip.address() 
})({}); 