const isHTMLRequestToSinglePageApplication = (headers) =>
  headers.has('Content-Type') &&
  headers.get('Content-Type').includes('text/html');

const additionalHeaders = {
  'Referrer-Policy': 'no-referrer-when-downgrade',
  'X-Content-Type-Options': 'nosniff',
  'X-XSS-Protection': '1; mode=block',
  'frame-ancestors':
    "'self' myappname.fluidly.com myappname.local.fluidly.com:7070",
  'Cache-Control': 'private, no-cache, no-store, must-revalidate',
  Expires: 'Sat, 01 Jan 2000 00:00:00 GMT',
  Pragma: 'no-cache',
};

async function addHeaders(req) {
  const response = await fetch(req);
  const headers = new Headers(response.headers);

  if (isHTMLRequestToSinglePageApplication(headers)) {
    Object.keys(additionalHeaders).forEach((name) => {
      headers.set(name, additionalHeaders[name]);
    });

    return new Response(response.body, {
      status: 200,
      statusText: 'OK',
      headers,
    });
  }

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

if (typeof addEventListener !== 'undefined') {
  addEventListener('fetch', (event) => {
    event.respondWith(addHeaders(event.request));
  });
}

if (typeof module !== 'undefined') {
  module.exports = { additionalHeaders };
}
