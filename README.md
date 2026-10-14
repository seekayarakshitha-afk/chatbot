# The Reading Room

## Run the Korea & Beyond AI assistant locally

The chat assistant specializes in Korean culture and also answers general
questions, with book recommendations grounded in the site's collection when
relevant. Its backend uses PowerShell's built-in HTTP listener and calls the
OpenAI Chat Completions API. The API key stays on the server and is never sent
to the browser.

1. In PowerShell, set `OPENAI_API_KEY` for the server process. For an interactive
   session, enter it without echoing it to the screen:

   ```powershell
   $secret = Read-Host "OpenAI API key" -AsSecureString
   $env:OPENAI_API_KEY = [System.Net.NetworkCredential]::new("", $secret).Password
   ```

2. From this project folder, start the server:

   ```powershell
   powershell.exe -NoProfile -ExecutionPolicy Bypass -File .\server.ps1
   ```

3. Open <http://127.0.0.1:8000>. Keep the PowerShell window open while using
   the site. Stop the server with `Ctrl+C`.

`OPENAI_MODEL` optionally selects a model; it defaults to `gpt-4o-mini`.
`CHATBOT_PORT` optionally changes the local port from `8000`.

The chat uses OpenAI API billing and requires an API key with API access.
The server binds to `127.0.0.1` and is intended for local use. Do not expose it
to the public internet without adding authentication, rate limiting, and
appropriate deployment protections.
