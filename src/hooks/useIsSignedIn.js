

export const useIsSignedin = () => {
    const userId = localStorage.getItem("userId");
    if (userId) {
        return {
            userId,
            signedIn: true
        };
    }
    return {
        userId: null,
        signedIn: false
    };
};
