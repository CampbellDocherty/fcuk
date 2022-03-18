
data "cloudflare_zones" "fluidly_com" {
  filter {
    name = "fluidly.com"
  }
}

resource "cloudflare_worker_script" "w" {
  name    = "myappname-frontend-add-headers-to-requests"
  content = file("${path.root}/add-headers-to-requests.js")
}

resource "cloudflare_worker_route" "w" {
  zone_id     = data.cloudflare_zones.fluidly_com.zones[0].id
  pattern     = "myappname.fluidly.com/*"
  script_name = cloudflare_worker_script.w.name
}

resource "cloudflare_worker_route" "w_static_js" {
  zone_id     = data.cloudflare_zones.fluidly_com.zones[0].id
  pattern     = "myappname.fluidly.com/static/js/*"
  script_name = cloudflare_worker_script.w.name
}
