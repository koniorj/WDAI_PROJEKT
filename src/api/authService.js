import users from "../mock/users.json";

export const generateToken = (payload, minutes) => {
  return btoa(
    JSON.stringify({
      ...payload,
      exp: Date.now() + minutes * 60 * 1000,
    })
  );
};

export const generateRefreshToken = () => crypto.randomUUID();

export const loginUser = (login, password) => {
  const user = users.find((u) => u.login === login && u.password === password);

  if (!user) throw new Error("Błędne dane logowania");

  const accessToken = generateToken({ userId: user.id, role: user.role }, 5);

  const refreshToken = generateRefreshToken();

  const authData = {
    accessToken,
    refreshToken,
    user,
  };

  localStorage.setItem("auth", JSON.stringify(authData));
  return authData;
};

export const logoutUser = () => {
  localStorage.removeItem("auth");
};

export const getAuth = () => {
  return JSON.parse(localStorage.getItem("auth"));
};

export const isTokenValid = (token) => {
  try {
    const decoded = JSON.parse(atob(token));
    return decoded.exp > Date.now();
  } catch {
    return false;
  }
};

export const refreshAccessToken = () => {
  const auth = getAuth();
  if (!auth) return null;

  auth.accessToken = generateToken(
    { userId: auth.user.id, role: auth.user.role },
    5
  );

  localStorage.setItem("auth", JSON.stringify(auth));
  return auth;
};
