OC.L10N.register(
    "bruteforcesettings",
    {
    "Brute-force settings" : "Brute-force instillinger",
    "Whitelist IPs" : "Hvidlist IPer",
    "Brute-force protection is meant to protect Nextcloud servers from attempts to\nguess account passwords in various ways. Besides the obvious \"*let's try a big\nlist of commonly used passwords*\" attack, it also makes it harder to use\nslightly more sophisticated attacks via the reset password form or trying to\nfind app password tokens.\n\nIf triggered, brute-force protection makes requests coming from an IP on a\nbrute-force protected controller with the same API slower for a 24 hour period.\n\nWith this app, the admin can exempt an IP address or range from this\nprotection which can be useful for testing purposes or when there are false\npositives due to a lot of accounts on one IP address." : "Brute-force beskyttelse er beregnet til at beskytte Nextcloud servere mod forsøg på at\ngætte kontoadgangskoder på forskellige måder. Udover det åbenlyse \"*lad os prøve en stor\nliste over almindeligt anvendte adgangskoder*\" angreb, så gør det, det også sværere at anvende\nlidt mere sofistikerede angreb via formularen til nulstilling af adgangskode eller forsøg på at\nfinde app-adgangskode tokens.\n\nHvis den udløses, så sender brute-force beskyttelsen anmodninger, der kommer fra en IP på en\nbrute-force beskyttet controller med den samme API, langsommere i en 24 timers periode.\n\nMed denne app kan administratoren fritage en IP-adresse eller et område fra denne\nbeskyttelse, som kan være nyttig til testformål, eller når der er falske\npositive på grund af mange konti på en IP-adresse.",
    "Your remote address was identified as \"{remoteAddress}\" and is throttled at the moment by {delay}ms." : "Din fjernadresse blev identificeret som \"{remoteAddress}\" og bliver i øjeblikket bremset med {delay}ms.",
    "Your remote address was identified as \"{remoteAddress}\" and is bypassing brute-force protection." : "Din fjernadresse blev identificeret som \"{remoteAddress}\" og den bypaser brute-force beskyttelse.",
    "Your remote address was identified as \"{remoteAddress}\" and is not actively throttled at the moment." : "Din fjernadresse blev identificeret som \"{remoteAddress}\" og bliver ikke aktivt bremset for øjeblikket.",
    "There was an error adding the IP to the whitelist." : "Der opstod en fejl under tilføjelse af IP'en til hvdlisten.",
    "Brute-force IP whitelist" : "Brute-force IP whitelist",
    "To whitelist IP ranges from the brute-force protection specify them below. Note that any whitelisted IP can perform authentication attempts without any throttling. For security reasons, it is recommended to whitelist as few hosts as possible or ideally even none at all." : "For at hvidliste IP-områder fra brute-force beskyttelsen, skal du angive dem nedenfor. Bemærk, at enhver hvidlistet IP kan udføre godkendelsesforsøg uden at få nedsat svartiden. Af sikkerhedsmæssige årsager anbefales det at hvidliste så få IP adresser som muligt, eller helst slet ikke.",
    "Add a new whitelist" : "Tilføj en ny hvidliste",
    "IP address" : "IP adresse",
    "Mask" : "Mønster",
    "Add" : "Tilføj",
    "Delete entry for {subnet}" : "Slet indførsel for {subnet}"
},
"nplurals=2; plural=(n != 1);");
