const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_10_07_11_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTg4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDU1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDI0LFxuICAgICAgICAxNDksXG4gICAgICAgIDE5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTQsXG4gICAgICAgIDkyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTY0LFxuICAgICAgICA2NCxcbiAgICAgICAgMTc2LFxuICAgICAgICA0MCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE3LFxuICAgICAgICAxODMsXG4gICAgICAgIDU4LFxuICAgICAgICAyOSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNDksXG4gICAgICAgIDQzLFxuICAgICAgICA2MixcbiAgICAgICAgNjQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgODAsXG4gICAgICAgIDk4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjcsXG4gICAgICAgIDY1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE0LFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDc3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTAsXG4gICAgICAgIDg1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTcsXG4gICAgICAgIDg2LFxuICAgICAgICAyMjksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNzIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxODgsXG4gICAgICAgIDE3LFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTMsXG4gICAgICAgIDQzLFxuICAgICAgICAzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMjksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTY4LFxuICAgICAgICA2NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDg1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNDksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDYxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNTksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxOTksXG4gICAgICAgIDE1NixcbiAgICAgICAgNTYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNjksXG4gICAgICAgIDQ0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDM0LFxuICAgICAgICAyMSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDQ1LFxuICAgICAgICA5NCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTM1LFxuICAgICAgICA2MCxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzgsXG4gICAgICAgIDE1LFxuICAgICAgICAxMDksXG4gICAgICAgIDE3MixcbiAgICAgICAgMTYyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjU0LFxuICAgICAgICA1MixcbiAgICAgICAgODQsXG4gICAgICAgIDIwMixcbiAgICAgICAgNTAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMTksXG4gICAgICAgIDQ1LFxuICAgICAgICA1MCxcbiAgICAgICAgMixcbiAgICAgICAgMTg5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNTcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg4LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNjZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDY1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMyxcbiAgICAgICAgODQsXG4gICAgICAgIDU3LFxuICAgICAgICAyMyxcbiAgICAgICAgODYsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTgwLFxuICAgICAgICA2OSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDk3LFxuICAgICAgICAxNzksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjExLFxuICAgICAgICA2NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNjIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTI2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDExNixcbiAgICAgICAgMjksXG4gICAgICAgIDc3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTgzLFxuICAgICAgICA4NSxcbiAgICAgICAgODcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDY2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDkzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE2LFxuICAgICAgICA5MSxcbiAgICAgICAgMTk0LFxuICAgICAgICA1MyxcbiAgICAgICAgMTUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNjgsXG4gICAgICAgIDQxLFxuICAgICAgICA0MSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgOCxcbiAgICAgICAgNjgsXG4gICAgICAgIDQwLFxuICAgICAgICA0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEyOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI3WGF3dFZlVlJvZUZsWnVIY1hQRFVCeGUzeWdyRm81WjFOOC9SK2pwaFIwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0NzIzODI1MDYxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJGRDQ2NUFFNzI5OTI3MjY1NkM5ODc4RDMyMDQzQzI0NVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzEzMTk2NTRcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDcyMzgyNTA2MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRjk0ODIwM0U1RUFGQkI3NUVBRkIzNjkxRThEODI2MkJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMxMzE5NjU1XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIm8zb0laX1JBUmM2eFRRNGFpa0lwRFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNWE5OGE5YWQtNWIwNi00YjU5LWIzY2UtYjVlZDUzZTgyNWZmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyOCxcbiAgICAgIDIzNixcbiAgICAgIDIxOSxcbiAgICAgIDE0NSxcbiAgICAgIDEyMyxcbiAgICAgIDEwOCxcbiAgICAgIDIyLFxuICAgICAgMTcwLFxuICAgICAgMTE3LFxuICAgICAgMjU1LFxuICAgICAgMTUyLFxuICAgICAgNTEsXG4gICAgICA0MyxcbiAgICAgIDE5MixcbiAgICAgIDE2OSxcbiAgICAgIDMsXG4gICAgICAxODgsXG4gICAgICAxNjAsXG4gICAgICA1NyxcbiAgICAgIDIxNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4MixcbiAgICAgIDI0OCxcbiAgICAgIDExMSxcbiAgICAgIDk4LFxuICAgICAgMTIzLFxuICAgICAgMTAxLFxuICAgICAgMTI4LFxuICAgICAgMTcsXG4gICAgICAyMjAsXG4gICAgICAxODksXG4gICAgICAxNjYsXG4gICAgICAxMTUsXG4gICAgICA1MixcbiAgICAgIDM5LFxuICAgICAgNjksXG4gICAgICAzOCxcbiAgICAgIDE1NSxcbiAgICAgIDgwLFxuICAgICAgODYsXG4gICAgICA0OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJUQUhNRksyRlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3MjM4MjUwNjE6MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI5NTk3MDIyNjE4NDE6MTBAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiRFVNSVlIIEVESVRaXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUENocU5vRkVOMnV4N2tHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJqSjVQS29razBrV04yblU0V1FTaXYyMExlb1hzKys3TTJzRnVRT0hrMXk4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkcyOFlmYUtFRXdmbzk3ZFdrOW1tUlRSY1FzcmVPR1pNTWd2ZndleGZoalB1L3hkVld5YXpJcVRyUTlEQjIrY2U4UGNRZEhYbnM5aHhqNHEvUktHcUFBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIm40L0UyUHh3blM1MDRyNVF4Z2lPUmtzNitVOE1FMkRjWkxYY3ExclhIbDFtcFMxYVUvUGVQaUFIMEJGOW0wdjZaNzIrKzlYcHg3WE5nbThnejRERkRnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzIzODI1MDYxOjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNDdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMTMxOTY0OSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUs5SFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSzlILmpzb24iOiAie1wia2V5RGF0YVwiOlwiVmVFVUdSeElSaTREMmlUTnovZFJ2clF6MXpscEpNTWxTWHFSOTBmeS9zaz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNTMxNTgwNjU0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "ONLY DUMIYH",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
