let date = "1 July, 2024"
window.onload = function() {
    if(window.innerWidth > 1024) {
          VANTA.WAVES({
            el: ".fullscreen",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            size: 1.5,
            scaleMobile: 0.5,
            color: 0x0,
            waveHeight: 22.50,
            waveSpeed: 0.50,
          })
    } else {
          VANTA.WAVES({
            el: ".fullscreen",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: .5,
            size: .5,
            scaleMobile: 0.5,
            color: 0x0,
            waveHeight: 22.50,
            waveSpeed: 0.50,
          })
    }
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
    var fps = document.getElementById("fps");
    var startTime = Date.now();
    var frame = 0;

    function tick() {
        var time = Date.now();
        frame++;
        if (time - startTime > 1000) {
            fps.innerHTML = (frame / ((time - startTime) / 1000)).toFixed(2) + " fps";
        startTime = time;
        frame = 0;
	   }
        window.requestAnimationFrame(tick);
    }
    tick();
}
