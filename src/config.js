// Constants for site configuration
export const SiteConfig = {
  apiUrl: 'https://api.openrct2.io',
  reCaptchaKey: '6LdfekgUAAAAAK7pi73JNFHp_HHQ2cqtnceBGd81'
};

// Allow override of API url from environment
const env = process.env['OPENRCT2_API_URL'];
if (env) {
  SiteConfig.apiUrl = env;
}

// Log configuration to console
if (process.env.NODE_ENV !== 'production') {
  console.groupCollapsed('SiteConfig');
  for (const key in SiteConfig) {
    if (SiteConfig.hasOwnProperty(key)) {
      const value = SiteConfig[key];
      console.log(`${key}: ${value}`);
    }
  }
  console.groupEnd();
}
