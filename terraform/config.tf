terraform {
  required_version = ">= 0.12"
}

provider "google" {
  alias = "seed"
}

provider "google" {
  project = google_project.p.project_id
}

# provider "google-beta" {
#   project = google_project.p.project_id
# }
