# EC2

module "ec2" {
  source       = "./modules/aws_ec2"
  project_name = var.project_name
  key_name     = var.key_name
}