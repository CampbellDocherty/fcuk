module "myappname_frontend" {
  source = "git@github.com:fluidly/tf-shared.git//frontend"

  providers = {
    google.seed = google.seed
  }

  name      = "myappname"
  subdomain = "myappname.fluidly.com"


  # these are injected by terraform
  org_id          = var.org_id
  billing_account = var.billing_account

  google_site_verification_txt_record = "google-site-verification=<FILL_ME_IN>"

  cloudflare_origin_certificate     = data.google_kms_secret.cloudflare_origin_certificate.plaintext
  cloudflare_origin_certificate_key = data.google_kms_secret.cloudflare_origin_certificate_key.plaintext
}