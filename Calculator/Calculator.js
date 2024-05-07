let listening = false;
let delayState = false;
let inputString = "";
const BOUNCE_DELAY = 150;
const KEY_CODES = [
    33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51,
    52, 53, 54, 55, 56, 57, 58, 60, 61, 62, 63, 65, 66, 67, 68, 69, 70, 71, 72,
    73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 330, 
    331, 332, 333, 334, 335, 336
]; // https://www.glfw.org/docs/3.3/group__keys.html
ClientEvents.tick((event) => {
    if (Client.isKeyDown(59)) {
        listening = true;
        if (listening && !delayState) {
            for (let keyCode of KEY_CODES) {
                if (Client.isKeyDown(keyCode)) {
                    inputString += String.fromCharCode(keyCode).toLowerCase();
                    event.player.tell(
                        String.fromCharCode(keyCode).toLowerCase()
                    );
                    delayState = true;
                    setTimeout(() => {
                        delayState = false;
                    }, BOUNCE_DELAY);
                }
            }
        }
    } else {
        listening = false;
        if (inputString) {
            try {
                let result = eval(inputString);
                event.player.tell("Result: " + result);
            } catch (error) {
                event.player.tell("Error: " + error.message);
            }
            inputString = "";
        }
    }
});
