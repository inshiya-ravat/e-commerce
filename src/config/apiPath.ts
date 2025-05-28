/**
 * @description this object maitains all of our api end points
 */
export const apipaths = {
  auth: {
    login: () => `log-in`,
    signup: () => `sign-up`,
    logout: () => `log-out`,
    forgotPassword: () => `forgot-password`,
    resetPassword: () => `reset-password`,
  },
  user: {
    users: () => `user`,
    userById: (id: number) => `user/${id}`,
    deleteUser: (id: number) => `user/${id}`,
    restoreUser: (id: number) => `user/${id}`,
    updateUser: (id: number) => `user/${id}`,
    searchUser: (user: string) => `user?search=${user}`,
  },
};
