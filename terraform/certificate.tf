data "terraform_remote_state" "secrets" {
  backend = "gcs"

  config = {
    bucket = "fluidly-admin-terraform"
    prefix = "tfstates/gcp-fluidly-secrets"
  }
}

data "google_kms_secret" "cloudflare_origin_certificate" {
  crypto_key = data.terraform_remote_state.secrets.outputs.kms_crypto_key
  ciphertext = "<FILL_ME_IN>"
}

data "google_kms_secret" "cloudflare_origin_certificate_key" {
  crypto_key = data.terraform_remote_state.secrets.outputs.kms_crypto_key
  ciphertext = "<FILL_ME_IN>"
}