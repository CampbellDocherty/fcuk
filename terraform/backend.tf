terraform {
  backend "gcs" {
    prefix = "tfstates/myappname-frontend"
    bucket = "fluidly-admin-terraform"
  }
}
