function setDate() {
	console.log('Hi')
    const now = newDate()
    const seconds = now.getSeconds()
    console.log(seconds);
}

setInterval(setDate, 1000)
