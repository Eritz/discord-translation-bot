const BOT_FULLNAME_AUTO_ERROR = "Wrong format: An example would be `!swedish spanish-text-here`, where the `spanish-text` is converted to swedish";
const BOT_ABBR_AUTO_ERROR = "Wrong format: An example would be `!de french-text-here`, where the `french-text-here` is converted to german";
const BOT_TRANS_SPECIFIC_ERROR = "Wrong format: An example would be `!translate swedish korean swedish-text-here` where after `!translate` would translate the `swedish-text-here` into korean";
const BOT_TRANSLATION_ERROR = "There was an error: ";
const BOT_COMMANDS_HELP = 
"For a list of names and abbreviates go here: <https://cloud.google.com/translate/docs/languages> Here are available commands:\n\
```!translate from to text```\
=>`!translate english italian english-text-here` turns english to italian\n\
```!language auto-translate-text```\
=>`!french english-text-here` turns english to french\n\
```!abrv auto-translate-text```\
=>`!de english-text-here` turns english to german"


module.exports = {
    BOT_FULLNAME_AUTO_ERROR,
    BOT_ABBR_AUTO_ERROR,
    BOT_TRANS_SPECIFIC_ERROR,
    BOT_TRANSLATION_ERROR,
    BOT_COMMANDS_HELP,
}