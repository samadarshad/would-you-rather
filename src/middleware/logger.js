const logger = (store) => (next) => (action) => {
    console.group(action.type)
    console.log('The action: ', action)
    const returnValue = next(action)
    console.log('The new state is: ', store.getState()) //are we updating the state twice by calling next? are we "peeking" into the future? or actually modifying?
    console.groupEnd()
    return returnValue
}

export default logger
