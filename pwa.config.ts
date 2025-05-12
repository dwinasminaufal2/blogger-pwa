import type { Config } from './types';

export default {
  id: '/',
  name: 'Jobfrenly',
  shortName: 'Jobfrenly',
  description: 'Cari lowongan kerja impianmu di Jobfrenly.com! Aplikasi ringan, cepat, dan hemat kuota. Dapatkan notifikasi instan untuk info loker terbaru. Instal sekarang dan jangan lewatkan kesempatanmu!',
  direction: 'auto',
  language: 'en-US',
  backgroundColor: '#fff',
  themeColor: '#fff',
  display: 'standalone',
  orientation: 'natural',
  scope: '/',
  startUrl: '/?utm_source=homescreen',
  appleStatusBarStyle: 'black-translucent',
  preferRelatedApplications: false,
  shortcuts: [
    {
      name: 'Lowongan Kerja di Tangerang Selatan',
      shortName: 'Lowongan Kerja di Tangerang Selatan',
      description: 'Lowongan kerja terbaru dari Jobfrenly.com',
      url: '/search/label/Tangerang%20Selatan?utm_source=homescreen',
    },
    {
      name: 'Lowongan Kerja di JABODETABEK',
      shortName: 'Lowongan Kerja di JABODETABEK',
      description: 'Lowongan kerja terbaru dari Jobfrenly.com',
      url: '/search/label/JABODETABEK?utm_source=homescreen',
    },
  ],
  pwa: {
    logs: true,
    // OneSignal is not available if you are not using cloudflare workers
    oneSignalEnabled: true,
    oneSignalConfig: {
      appId: '0dcaae9f-4485-4e48-b211-a1c87739132f',
      allowLocalhostAsSecureOrigin: true,
    },
  },
  // Please replace with your blog url if you are using CDN (JsDelivr)
  origin: 'https://www.jobfrenly.com',
} satisfies Config;
