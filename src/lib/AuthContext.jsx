import React, { createContext, useContext } from 'react';

const AuthContext = createContext();

// Static public auth provider for GitHub Pages deployment.
// This keeps the original app structure working without calling Base44 backend APIs.
export const AuthProvider = ({ children }) => {
  const checkAppState = async () => true;
  const checkUserAuth = async () => false;
  const logout = () => {};
  const navigateToLogin = () => {};

  return (
    <AuthContext.Provider value={{
      user: null,
      isAuthenticated: false,
      isLoadingAuth: false,
      isLoadingPublicSettings: false,
      authChecked: true,
      authError: null,
      appPublicSettings: { public_settings: {} },
      logout,
      navigateToLogin,
      checkAppState,
      checkUserAuth,
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
