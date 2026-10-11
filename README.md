# Healthy Harvest website

A responsive, static website starter for Healthy Harvest. It is designed to work on GitHub Pages or any static web host.

## Run locally
Open `index.html` in a browser, or run a local server from this folder:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Before publishing
1. Replace the placeholder email `YOUR_EMAIL@example.com` in `script.js` with the business inbox. The current form validates inputs but will not send until this is configured.
2. Update the product categories and descriptions to match the real products offered by Healthy Harvest.
3. Confirm the business phone (082203 06363) and address (A, 3/1, Main Road, LKT Nagar, Puliyankulam, Madurai, Tamil Nadu 625201) before launch; add social links and delivery/service area if applicable.
4. Replace the sample Unsplash photos with your own farm and product photography for a fully branded site. The supplied Healthy Harvest logo is included at `assets/healthy-harvest-logo.png`.
5. Review claims and add certifications only if verified.

## Publish with GitHub Pages
1. Create or open your public GitHub repository.
2. Upload the contents of this folder (so `index.html` is at the repository root).
3. Open **Settings → Pages**.
4. Choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
5. Wait for the Pages deployment and open the URL GitHub provides.

## Contact form
The included form checks required fields and prepares an email via the visitor's default email application once the business inbox is configured. For submissions that work without the visitor having an email app configured, connect a form provider or add a backend endpoint.
