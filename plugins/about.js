const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "about",
    alias: ["ʟᴇᴡɪs","whois"], 
    react: "👑",
    desc: "get owner dec",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let about = `
*╭━━〔 LEWISROY1-MD 〕━━┈⊷*

*👋 HELLO ${pushname}*

*╰──────────────┈⊷*
*╭━━━〔 MY ABOUT 〕━━━┈⊷*
*┃★╭──────────────*
*┃★│* *ᴡᴇʟᴄᴏᴍᴇ ɪᴛs ʀᴏʏ-ᴍᴅ-ʙᴏᴛ*
*┃★│* *ᴄʀᴇᴀᴛᴇʀ : ʀᴏʏ*
*┃★│* *ʀᴇᴀʟ ɴᴀᴍᴇ : ʟ ʀᴏʏ*
*┃★│* *ᴘᴜʙʟɪᴄ ɴᴀᴍᴇ : ʟᴇᴡɪs xᴅ*
*┃★│* *ᴀɢᴇ : 16 ʏᴇᴀʀ*
*┃★│* *ᴄɪᴛʏ : ɴᴀɪʀᴏʙɪ ᴋᴇ*
*┃★│* *ᴀ sɪᴍᴘʟᴇ ᴡʜᴀᴛsᴀᴘᴘ ᴅᴇᴠᴇʟᴘᴏʀ*
*┃★╰──────────────*
*╰━━━━━━━━━━━━━━━┈⊷*
> *◆◆◆◆◆◆◆◆◆◆◆◆*

*[ • SPECIAL THANKS FOR • ]*
*╭━━━〔 THANKS TO 〕━━━┈⊷*
*┃★╭──────────────*
*┃★│* *▢ᴀʟᴛᴀᴍᴀsʜ(ʟᴏᴠᴇʟʏ ᴅᴇᴠɪʟ)*
*┃★│* *▢ᴀʜᴍᴇᴅ(xɪᴋʀᴀᴛᴏsx)*
*┃★│* *▢ᴜᴍᴀʀ(ᴅᴀʀᴋ ᴅᴇᴠɪʟ⁷¹⁹)*
*┃★│* *▢ᴜsᴍᴀɴ(sɪʟᴇɪɴᴛ ʟᴏᴠᴇʀ)*
*┃★│* *▢ᴊᴀᴡᴀᴅ(ᴅᴊ)*
*┃★╰──────────────*
*╰━━━━━━━━━━━━━━━┈⊷*

*•────────────•⟢*
> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʟᴇᴡɪsʀᴏʏ1 ᴍᴅ
*•────────────•⟢*
`

await conn.sendMessage(from,{image:{url:`https://i.imgur.com/XM8Vadf.jpeg`},caption:about,
                             contextInfo: {
    mentionedJid: [m.sender],
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363369260614615@newsletter',
      newsletterName: 'AWAIS-MD',
      serverMessageId: 999
    }
  }
}, { quoted: mek });
} catch (e) {
console.log(e)
reply(`${e}`)
}
})
