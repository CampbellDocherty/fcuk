locals {
  name         = "myappname-frontend"
  project_name = "fluidly-${local.name}"
}

variable "org_id" {}

variable "billing_account" {}
