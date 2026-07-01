// src/api/localAuth.js

const USERS_KEY = "sc_users";
const CURRENT_USER_KEY = "sc_current_user";

const getUsers = () => {
  return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
};

const saveUsers = (users) => {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

export const registerUser = async (userData) => {
  const users = getUsers();

  const alreadyExists = users.find(
    (u) => u.email === userData.email
  );

  if (alreadyExists) {
    throw {
      response: {
        data: {
          message: "User already exists",
        },
      },
    };
  }

  users.push(userData);
  saveUsers(users);

  return {
    data: {
      user: userData,
    },
  };
};

export const loginUser = async ({ email, password }) => {
  const users = getUsers();

  const user = users.find(
    (u) =>
      u.email === email &&
      u.password === password
  );

  if (!user) {
    throw {
      response: {
        data: {
          message: "Invalid email or password",
        },
      },
    };
  }

  localStorage.setItem(
    CURRENT_USER_KEY,
    JSON.stringify(user)
  );

  return {
    data: {
      token: "local-storage-token",
      user,
    },
  };
};

export const getCurrentUser = async () => {
  const user = JSON.parse(
    localStorage.getItem(CURRENT_USER_KEY)
  );

  return {
    data: user,
  };
};

export const logoutUser = () => {
  localStorage.removeItem(CURRENT_USER_KEY);
};

export const getAllUsers = async () => {
  return {
    data: {
      users: getUsers(),
    },
  };
};