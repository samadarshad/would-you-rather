export const SET_LOADING = 'SET_LOADING'
export const LoadingStatus = Object.freeze({
    IDLE: Symbol("idle"),
    LOADING: Symbol("loading"),
    SUCCEEDED: Symbol("succeeded"),
    FAILED: Symbol("failed")
});

export function setLoading(status) {
    return {
        type: SET_LOADING,
        status
    }
}