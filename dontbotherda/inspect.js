let date = "22 December, 2023"
window.onload = function() {
    VANTA.CLOUDS({
            el: ".fullscreen",
            mouseControls: true,
             touchControls: true,
            gyroControls: false,
             skyColor: 0x151313,
             cloudColor: 0xf49393,
             sunColor: 0x9d0813,
             sunGlareColor: 0xb30c0c,
            sunlightColor: 0xe3849d,
            speed: 1.00
    }) 
    function update(date) {
        const d = new Date(date);
        let timestamp = new Date(Date.now() - d);
        const glue = {
            days: Math.floor((Date.now() - d)/84000000),
            hours: timestamp.getUTCHours(),
            mins: timestamp.getUTCMinutes(),
            secs: timestamp.getUTCSeconds()
        }
        let final = (glue.days < 10 ? "0" + glue.days : glue.days) + ":" + 
        (glue.hours < 10 ? "0" + glue.hours : glue.hours) + ":" +
        (glue.mins < 10 ? "0" + glue.mins : glue.mins) + ":" + 
        (glue.secs < 10 ? "0" + glue.secs : glue.secs);
        setTimeout(() => {
            $("#sheleftmelol").html(final);
        }, 1000)
    }
    setInterval(() => {update(date)}, 1000)
}