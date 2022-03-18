resource "google_project_iam_member" "engineering_viewer" {
  project = google_project.p.project_id
  role    = "roles/viewer"
  member  = "group:engineers@fluidly.com"
}
