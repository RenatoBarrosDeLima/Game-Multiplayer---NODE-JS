export default function createKeyboardListener(document) {
    const state = {
        obsorvers: [],
        playerId: null
    }

    function registerPlayerId(playerId) {
        state.playerId = playerId
    }

    function subscribe(obsorverFunction) {
        state.obsorvers.push(obsorverFunction);
    }

    function notifyAll(command) {
        for (const obsorverFunction of state.obsorvers) {
            obsorverFunction(command);
        }
    }

    document.addEventListener('keydown', handleKeydown)

    function handleKeydown(event) {
        const keyPressed = event.key;

        const command = {
            playerId: state.playerId,
            keyPressed
        }

        notifyAll(command);
    }

    return {
        subscribe,
        registerPlayerId
    }
}