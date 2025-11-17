# n8n-nodes-wajs

Node n8n kustom untuk berinteraksi dengan API wajs. Ini adalah node universal yang memungkinkan Anda mengakses berbagai endpoint API wajs untuk mengelola apikey, WhatsApp, webhook, chatflow, dan lainnya.

## Instalasi

Untuk menginstal node ini di n8n Anda:

1.  Buka instalasi n8n Anda.
2.  Pergi ke **Settings > Community Nodes**.
3.  Klik **Install a community node**.
4.  Masukkan `n8n-nodes-wajs` dan klik **Install**.

n8n akan menginstal node, dan setelah itu Anda dapat menggunakannya dalam workflow Anda.

## Konfigurasi

Sebelum menggunakan node, Anda perlu mengkonfigurasi kredensial.

1.  Di n8n, pergi ke **Credentials** dan klik **Add credential**.
2.  Cari **wajs (Bearer Token)** dan pilih.
3.  Isi detail berikut:
    - **Base URL**: URL dasar API wajs Anda (misalnya, `https://api.example.com`).
    - **Bearer Token**: Token API Anda.

## Operasi yang Tersedia

Node ini menyediakan berbagai operasi yang dapat dipilih. Berikut adalah daftar operasi yang dikelompokkan berdasarkan kategori:

### API Key

- `apikey_postApiApikeyCreate`: Membuat API key baru.
- `apikey_getApiApikeyList`: Mendapatkan daftar API key.
- `apikey_deleteApiApikeyDelete`: Menghapus API key.

### WhatsApp

- `WhatsApp_postApiWaStart`: Memulai sesi WhatsApp.
- `WhatsApp_getApiWaQr`: Mendapatkan kode QR untuk login.
- `WhatsApp_getApiWaReady`: Memeriksa apakah sesi siap.
- `WhatsApp_postApiWaRestart`: Memulai ulang sesi.
- `WhatsApp_postApiWaForce_start`: Memaksa memulai sesi.
- `WhatsApp_postApiWaStop`: Menghentikan sesi.
- `WhatsApp_getApiWaState`: Mendapatkan status sesi.
- `WhatsApp_postApiWaSend_text`: Mengirim pesan teks.
- `WhatsApp_postApiWaSend_media`: Mengirim pesan media.

### Webhook

- `Webhook_postApiWebhookCreate`: Membuat webhook.
- `Webhook_getApiWebhookList`: Mendapatkan daftar webhook.
- `Webhook_getApiWebhookFindById`: Mencari webhook berdasarkan ID.
- `Webhook_deleteApiWebhookRemoveById`: Menghapus webhook berdasarkan ID.
- `Webhook_putApiWebhookUpdateById`: Memperbarui webhook berdasarkan ID.

### Chatflows

- `chatflows_getApiChatflowsSync`: Sinkronisasi chatflow.
- `chatflows_getApiChatflowsFind`: Mencari chatflow.
- `chatflows_getApiChatflowsDefault`: Mendapatkan chatflow default.
- `chatflows_putApiChatflowsDefault`: Mengatur chatflow default.
- `chatflows_postApiChatflowsQuery`: Mengirim query ke chatflow.
- `chatflows_putApiChatflowsFlow_active`: Mengaktifkan/menonaktifkan flow.
- `chatflows_getApiChatflowsUrl_token`: Mendapatkan URL dan token flow.
- `chatflows_putApiChatflowsUrl_token`: Memperbarui URL dan token flow.

### Autentikasi

- `auth_postAuthLogin`: Login ke akun.
- `auth_deleteAuthLogout`: Logout dari akun.

### WhatsApp Hook

- `WhatsApp_Hook_getWa_hookHook`: Verifikasi webhook.
- `WhatsApp_Hook_postWa_hookHook`: Menerima pesan WhatsApp.
- `WhatsApp_Hook_getWa_hookList`: Mendapatkan daftar hook.
- `WhatsApp_Hook_postWa_hookReset`: Mereset hook.

### Logs

- `logs_getLogsShow`: Menampilkan log.
- `logs_postLogsClear`: Membersihkan log.

## Lisensi

[ISC](LICENSE)
